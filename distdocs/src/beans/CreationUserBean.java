package beans;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.ejb.EJB;
import javax.enterprise.context.ConversationScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;

import dao.UtilisateurDao;
import entities.UserType;
import entities.Utilisateur;
import validators.Utilitaire;

@Named
@ConversationScoped
public class CreationUserBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = CreationUserBean.class.getName();
	private Utilisateur user;
	@EJB
	private UtilisateurDao userDao;
	
	public CreationUserBean() {
		user = new Utilisateur();
	}
	public Utilisateur getUser() {
		return user;
	}
	public void setUser(Utilisateur user) {
		this.user = user;
	}
	
	public void inscrire() {
		initialiserDateInscription();
		user.setUserType(UserType.CLIENT.name());
		String pass = user.getMotDePasse();
		user.setMotDePasse(Utilitaire.chiffrer(pass));
		userDao.creer(user);
		FacesMessage message = new FacesMessage( "Succès de l'inscription !" );
		FacesContext.getCurrentInstance().addMessage( null, message);
	}
	private void initialiserDateInscription() {
		Timestamp date = new Timestamp( System.currentTimeMillis());
		user.setDateCreation(date);
	}
	
}
