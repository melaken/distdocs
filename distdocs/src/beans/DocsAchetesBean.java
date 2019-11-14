package beans;

import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.primefaces.PrimeFaces;

import dao.DAOException;
import dao.DocsAchetesDao;
import dao.DocumentDao;
import entities.Document;
import entities.Utilisateur;
import recherche.IndexException;
import recherche.RechercheBean;

@Named
@RequestScoped
public class DocsAchetesBean implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private final String MODULE = DocsAchetesBean.class.getName();
	
	@EJB
	private DocsAchetesDao dao;
	@EJB
	DocumentDao docDao;
	private List<Document> liste;
	private String chaine;
	//message to display if liste is empty
	private String emptyMessage;
	

	public List<Document> getListe() {
		return liste;
	}

	public void setListe(List<Document> liste) {
		this.liste = liste;
	}
	public String getChaine() {
		return chaine;
	}
	public void setChaine(String chaine) {
		this.chaine = chaine;
	}
	public String getEmptyMessage() {
		return emptyMessage;
	}
	public void setEmptyMessage(String emptyMessage) {
		this.emptyMessage = emptyMessage;
	}

	@PostConstruct
	public void init() {
		System.out.println("begin init");
		this.emptyMessage = "Aucun article dans votre bibliohèque";
		Object obj = getCurrentUser();
		FacesContext facesContext = FacesContext.getCurrentInstance();
		if(obj==null) 
			facesContext.addMessage(null, 
					new FacesMessage(FacesMessage.SEVERITY_WARN, " ","Veuillez vous connecter !!!") );
		else {
			System.out.println("dans init docsAchetesBean");
			Utilisateur user = (Utilisateur)obj;
			try {
				liste = dao.docAchetesParclient(user.getId());
				System.out.println("end size liste "+liste.size());
				//System.out.println("cover "+liste.get(0).getPremiereCouverture());
			} catch (DAOException e) {
				e.printStackTrace();
				showErrorMessage();
			}
		}
	}
	
	private void showErrorMessage() {
		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR," ", "Erreurs !!!");
        PrimeFaces.current().dialog().showMessageDynamic(message);
	}
	//Recherche parmi les docs achetes par le user courant
	public void searchBoughtDocs() {
		Object obj = getCurrentUser();
		try {
			if(obj != null) {
				this.emptyMessage = "Aucun élément ne correspond à votre recherche.";
				Utilisateur user = (Utilisateur)obj;
				List<Document> boughtDocs = dao.docAchetesParclient(user.getId());
				
				List<Document> allDocs = new RechercheBean().mainSearch(this.chaine,this.docDao);
				 this.liste = allDocs.stream()
						  .distinct()
						  .filter(boughtDocs::contains)
						  .collect(Collectors.toList());
				 //reload();
			}
		} catch (IndexException e) {
			System.out.println("Erreur lors de la recherche");
			e.printStackTrace();
			showErrorMessage();
		}catch (NumberFormatException e) {
			System.out.println("NumberFormatException");
			e.printStackTrace();
		} catch (DAOException e) {
			System.out.println("daoException");
			e.printStackTrace();
		}catch(Throwable e) {
			System.out.println("exception in redirect ");
			e.printStackTrace();
		}
		
	}
	private Object getCurrentUser() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		return session.getAttribute("user");
	}
	private void reload()throws IOException {
		ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
	    ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
	    
	}
}
