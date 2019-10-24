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

import dao.DocsAchetesDao;
import entities.DocsAchetes;
import entities.Utilisateur;

@Named
@RequestScoped
public class DocsAchetesBean implements Serializable{
	private static final long serialVersionUID = 1L;

	@EJB
	private DocsAchetesDao dao;
	private List<DocsAchetes> liste;
	
	@PostConstruct
	public void init() {
		System.out.println("begin init");
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(false);
		
		
		if(session.getAttribute("user")==null) 
			facesContext.addMessage(null, 
					new FacesMessage(FacesMessage.SEVERITY_WARN, " ","Veuillez vous connecter !!!") );
		else {System.out.println("dans init docsAchetesBean");
			Utilisateur user = (Utilisateur)session.getAttribute("user");
			liste = dao.docAchetesParclient(user.getId());
			System.out.println("end init achetesBean");
			}
	}
	
	public List<DocsAchetes> getListe() {
		return liste;
	}

	public void setListe(List<DocsAchetes> liste) {
		this.liste = liste;
	}
	public String findCover(long doc_id) {
		System.out.println("Dans findCover");
		return dao.trouverPremiereCouverture(doc_id);
	}
}
