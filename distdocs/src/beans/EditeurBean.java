package beans;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.ConversationScoped;
import javax.faces.application.FacesMessage;
import javax.inject.Named;

import org.primefaces.PrimeFaces;

import dao.DAOException;
import dao.EditeurDao;
import dao.UtilisateurDao;
import entities.Editeur;
import entities.UserType;
import entities.Utilisateur;
import validators.Utilitaire;

@Named
@ConversationScoped
public class EditeurBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = EditeurBean.class.getName();
	private Editeur editeur;
	private Utilisateur user;
	@EJB
	private EditeurDao editeurDao;
	@EJB
	private UtilisateurDao userDao;
	
	@PostConstruct
	public void init() {
		editeur = new Editeur();
		user = new Utilisateur();
	}
	
	public Editeur getEditeur() {
		return editeur;
	}
	public void setEditeur(Editeur editeur) {
		this.editeur = editeur;
	}
	
	public Utilisateur getUser() {
		return user;
	}

	public void setUser(Utilisateur user) {
		this.user = user;
	}

	//@Transactional
	public void creerEditeur() {
		try {
			creerUser();
			Utilisateur newUser = userDao.trouver(user.getEmail());
			editeur.setId(newUser.getId());
			editeurDao.creer(editeur);
			System.out.println("In creerEditeur");
		}catch(DAOException e) {
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "Une erreur est survenue.");
	        PrimeFaces.current().dialog().showMessageDynamic(message);
		}catch(Exception e) {
	    	Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
		      e.printStackTrace();
		}
	}
	public void creerUser() {
		String pass = user.getMotDePasse();
		user.setMotDePasse(Utilitaire.chiffrer(pass));
		initialiserDateCreation();
		user.setUserType(UserType.EDITEUR.name());
		try {
			userDao.creer(user);
		} catch (DAOException e) {
			e.printStackTrace();
			showErrorMessage();
		}
	}
	private void initialiserDateCreation() {
		Timestamp date = new Timestamp( System.currentTimeMillis());
		user.setDateCreation(date);
	}
	private boolean	verifyCompulsoryField(){
		if(user.getEmail() == null || user.getMotDePasse() == null || user.getNom() == null )
			return false;
			else return true;
	}
	private void showErrorMessage() {
		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR," ", "Erreurs lors de l'inscription!!!");
        PrimeFaces.current().dialog().showMessageDynamic(message);
	}
}
