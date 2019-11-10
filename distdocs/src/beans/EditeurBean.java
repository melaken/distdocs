package beans;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.ConversationScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;

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
		creerUser();
		Utilisateur newUser = userDao.trouver(user.getEmail());
		editeur.setId(newUser.getId());
		editeurDao.creer(editeur);
		System.out.println("In creerEditeur");
	}
	public void creerUser() {
		String pass = user.getMotDePasse();
		user.setMotDePasse(Utilitaire.chiffrer(pass));
		initialiserDateCreation();
		user.setUserType(UserType.EDITEUR.name());
		userDao.creer(user);
		 FacesContext facesContext = FacesContext.getCurrentInstance();
		Constante.redirect(facesContext, Constante.ACCUEIL,MODULE);
	}
	private void initialiserDateCreation() {
		Timestamp date = new Timestamp( System.currentTimeMillis());
		user.setDateCreation(date);
	}
	
	public void call() {
		System.out.println("in call");
		FacesContext facesContext = FacesContext.getCurrentInstance();
		Constante.redirect(facesContext, Constante.ACCUEIL, MODULE);
	}
}
