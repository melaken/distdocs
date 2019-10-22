package beans;

import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.sun.xml.ws.developer.Stateful;

import entities.Document;

@Named
@Stateful
@SessionScoped
public class PanierBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = PanierBean.class.getName();
	private List<Document> articles;
	private Document selectedDoc;
	
	@PostConstruct
	public void init() {
		selectedDoc = new Document();
		articles = new ArrayList<>();
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
	public void panier() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		
		if(session.getAttribute("user")==null) 
			facesContext.addMessage(null, 
					new FacesMessage(FacesMessage.SEVERITY_WARN, " ","Connectez-vous avant de procéder aux achats") );
		else {
			Document doc_recherche = findDocWithId(selectedDoc.getId());
			if(doc_recherche== null) {
				articles.add(selectedDoc);
				if(articles.size()==1)
					reload();
			}
			else facesContext.addMessage(null, 
					new FacesMessage(FacesMessage.SEVERITY_WARN, " ","L'élément choisi est déjà dans le panier") );
		}
	}
	public float total() {
		float somme = 0;
		for(Document d: articles)
			somme += d.getPrix();
		return somme;
	}
	public void supprimerDoc() {
		FacesContext context = FacesContext.getCurrentInstance();
		String docId = context.getExternalContext().getRequestParameterMap().get("docId");
		Document doc_recherche = findDocWithId(Long.parseLong(docId));
		if(doc_recherche != null)
			articles.remove(doc_recherche);
		//reload();
		
	}
	private Document findDocWithId(long id) {
//		Iterator<Document> iterator = articles.iterator();
//		while (iterator.hasNext() && iterator.next().getId() != id ) {
//			System.out.println(iterator.next().getPrix());
//		}
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
}
