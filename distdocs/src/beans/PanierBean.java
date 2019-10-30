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
	private List<Document> articles;
	private Document selectedDoc;
	private String moyenPaiement;
	private String redirect;
	private String telMarchand;
	private String reference;
	@EJB
	private DocsAchetesDao dao;
	@EJB
	private TransactionDao transDao;
	private long clientId;
	
	@PostConstruct
	public void init() {
		selectedDoc = new Document();
		articles = new ArrayList<>();
		redirect = "http://youbooklive.alwaysdata.net/payment-success.php";
		telMarchand = "07921645";
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
				articles.add(selectedDoc);
			}
			else {
				 FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "L'élément choisi est déjà dans le panier.");
		        PrimeFaces.current().dialog().showMessageDynamic(message);
			}
		}
	}
	public long total() {
		Float somme = new Float(0);
		for(Document d: articles)
			somme += d.getPrix();
		return somme.longValue();
	}
	public void supprimerDoc() {
		FacesContext context = FacesContext.getCurrentInstance();
		String docId = context.getExternalContext().getRequestParameterMap().get("docId");
		Document doc_recherche = findDocWithId(Long.parseLong(docId));
		if(doc_recherche != null)
			articles.remove(doc_recherche);
		
	}
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
	public void reload() {
		ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
	    try {
			ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
		} catch (IOException e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
	}
	
	public void annulerAchat() {
		articles = new ArrayList<>();
		continuerAchat();
	}
	 public void continuerAchat() {
		redirect("../../index.xhtml");
     }
	 public void choisirPaiement() {
		 FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
	      try {
			exterNalContext.redirect("payer.xhtml");
			genererRef();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 }
	 public void genererRef() {
	 String ref =null;
	 	do{
	 		 ref = UUID.randomUUID().toString().substring(0, 13);
	 	}while(transDao.getTransactionByRef(ref) != null);
		 this.reference = ref;
	 }
	 public void store() {
	 System.out.println("in store");
		List<DocsAchetes> liste = new ArrayList<>();
		for(Document d : articles) {
			DocsAchetes doc = remplirData(d);
			liste.add(doc);
		}
		transDao.creer(this.getTransaction());
		dao.storeDocsAchetes(liste);
		articles = new ArrayList<>();
		
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
	 	trans.setClientId(clientId);
	 	trans.setDateAchat(new Timestamp(System.currentTimeMillis()));
	 	trans.setMoyenPaiement(moyenPaiement);
	 	trans.setReference(this.reference);
	 	trans.setMontant(total());
	 	trans.setEtat(Etat.INITIE.name());
	 	
			return trans;
	 }
	 private void redirect(String path) {
		 FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
			try {
				exterNalContext.redirect(path);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	 }
}
