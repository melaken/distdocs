package beans;

import java.io.IOException;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.primefaces.PrimeFaces;

import dao.DAOException;
import dao.DocsAchetesDao;
import dao.TransactionDao;
import entities.DocsAchetes;
import entities.Document;
import entities.Etat;
import entities.Transaction;

@Named
@SessionScoped
public class PanierBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = PanierBean.class.getName();
	//liste des articles du panier
	private List<Document> articles;
	//document selectionné pa le cient
	private Document selectedDoc;
	//moyen de paiement sélectionné par le client
	private String moyenPaiement;
	//lien où airtel va rediriger la réponse
	private String redirect;
	//tel marchand où l'argent sera versé
	private String telMarchand;
	//reference de la transaction maxi 13 caractères
	private String reference;
	//montant total des articles dans le panier
	private float total;
	@EJB
	private DocsAchetesDao dao;
	@EJB
	private TransactionDao transDao;
	private long clientId;
	
	@PostConstruct
	public void init() {
		selectedDoc = new Document();
		articles = new ArrayList<>();
		redirect = "http://myracenter.homeip.net:3580/distdocs/response";
		telMarchand = "077921645";
	}
	public String getRedirect() {
		return redirect;
	}
	public void setRedirect(String redirect) {
		this.redirect = redirect;
	}
	public String getTelMarchand() {
		return telMarchand;
	}
	public void setTelMarchand(String telMarchand) {
		this.telMarchand = telMarchand;
	}
	public List<Document> getArticles() {
		return articles;
	}
	public void setArticles(List<Document> articles) {
		this.articles = articles;
	}
	public Document getSelectedDoc() {
		return selectedDoc;
	}
	public void setSelectedDoc(Document selectedDoc) {
		this.selectedDoc = selectedDoc;
	}
	
	public String getMoyenPaiement() {
		return moyenPaiement;
	}
	public void setMoyenPaiement(String moyenPaiement) {
		this.moyenPaiement = moyenPaiement;
	}
	public long getClientId() {
		return clientId;
	}
	public void setClientId(long clientId) {
		this.clientId = clientId;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	
	//methode qui gère la panier
	public void panier() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		
		if(session.getAttribute("user")==null) {
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "Connectez-vous avant de procéder aux achats.");
	        PrimeFaces.current().dialog().showMessageDynamic(message);
		}
		else {
			Document doc_recherche = findDocWithId(selectedDoc.getId());
			if(doc_recherche== null) {
				this.articles.add(selectedDoc);
				total();
				 FacesContext context = FacesContext.getCurrentInstance();
			     context.addMessage(null, new FacesMessage("Votre panier",  this.articles.size()+" article(s) dans le panier") );
			}
			else {
				 FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "L'élément choisi est déjà dans le panier.");
		        PrimeFaces.current().dialog().showMessageDynamic(message);
			}
		}
	}
	//calcule montant total du panier
	public void total() {
		Float somme = new Float(0);
		for(Document d: articles)
			somme += d.getPrix();
		this.total= somme.longValue();
	}
	//retire un doc dans le panier
	public void supprimerDoc() {
		FacesContext context = FacesContext.getCurrentInstance();
		String docId = context.getExternalContext().getRequestParameterMap().get("docId");
		Document doc_recherche = findDocWithId(Long.parseLong(docId));
		if(doc_recherche != null) {
			this.articles.remove(doc_recherche);
			total();
		}
		
	}
	//retrouve un doc par son id
	private Document findDocWithId(long id) {
		Document doc_recherche = null;
		for(Document d: articles) {
			if(d.getId() == id) {
				doc_recherche = d;
				break;
			}
		}
		return doc_recherche;	
	}
	//méthode utilitaire pour recharger la page courante
	public void reload() {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, ((HttpServletRequest) fc.getExternalContext().getRequest()).getRequestURI(), MODULE);
	}
	//annule les achats en retirant tout du panier
	public void annulerAchat() {
		articles = new ArrayList<>();
		continuerAchat();
	}
	 public void continuerAchat() {
		 FacesContext facesContext = FacesContext.getCurrentInstance();
		 Constante.redirect(facesContext,Constante.ACCUEIL,MODULE);
     }
	 public void choisirPaiement() {
		 FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		if(session.getAttribute(Constante.ATTRIB_USER) != null) {
			Constante.redirect(facesContext, Constante.PAYMENT, MODULE);
			genererRef();
			store();
		}else {
			Constante.redirect(facesContext, Constante.ACCUEIL, MODULE);
		}
	 }
	 private void genererRef() {
	 String ref = null;
	 	do{
	 		 ref = UUID.randomUUID().toString().substring(0, 13);
	 	}while(transDao.getTransactionByRef(ref) != null);
		 this.reference = ref;
	 }
	 //stocke l'opération d'achat en BD
	 private void store() {
	 System.out.println("in store");
		List<DocsAchetes> liste = new ArrayList<>();
		for(Document d : articles) {
			DocsAchetes doc = remplirData(d);
			liste.add(doc);
		}
		try {
			transDao.creer(this.getTransaction());
			dao.storeDocsAchetes(liste);
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	private DocsAchetes remplirData(Document d){
		DocsAchetes doc = new DocsAchetes();
		doc.setClientId(this.clientId);
		doc.setDocId(d.getId());
		doc.setReference(this.reference);
		
		return doc;
	}
	 private Transaction getTransaction() {
	 	Transaction trans = new Transaction();
	 	trans.setClientId(this.clientId);
	 	trans.setDateAchat(new Timestamp(System.currentTimeMillis()));
	 	trans.setMoyenPaiement(this.moyenPaiement);
	 	trans.setReference(this.reference);
	 	trans.setMontant(this.total);
	 	trans.setEtat(Etat.INITIE.name());
	 	
			return trans;
	 }
	 public void updateTransactionWithPaymentMethod() {
		 Object obj =  transDao.getTransactionByRef(this.reference);
		 if(obj != null) {
			 Transaction trans = (Transaction)obj;
			 trans.setMoyenPaiement(this.moyenPaiement);
			 try {
				transDao.update(trans);
				 this.articles = new ArrayList<>();
			} catch (DAOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		 }
	 }
}