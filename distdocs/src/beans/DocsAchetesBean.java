package beans;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpSession;

import org.primefaces.PrimeFaces;

import dao.DAOException;
import dao.DocsAchetesDao;
import entities.Document;
import entities.Utilisateur;

@Named
@RequestScoped
public class DocsAchetesBean implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private final String MODULE = DocsAchetesBean.class.getName();
	
	@EJB
	private DocsAchetesDao dao;
	private List<Document> liste;
	
	@PostConstruct
	public void init() {
		System.out.println("begin init");
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		
		
		if(session.getAttribute("user")==null) 
			facesContext.addMessage(null, 
					new FacesMessage(FacesMessage.SEVERITY_WARN, " ","Veuillez vous connecter !!!") );
		else {
			System.out.println("dans init docsAchetesBean");
			Utilisateur user = (Utilisateur)session.getAttribute("user");
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
	
	public List<Document> getListe() {
		return liste;
	}

	public void setListe(List<Document> liste) {
		this.liste = liste;
	}
	private void showErrorMessage() {
		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR," ", "Erreurs !!!");
        PrimeFaces.current().dialog().showMessageDynamic(message);
	}
}
