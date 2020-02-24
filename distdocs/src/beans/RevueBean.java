package beans;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.file.Files;
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
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import javax.validation.constraints.NotNull;

import org.primefaces.PrimeFaces;

import dao.DAOException;
import dao.EditeurDao;
import dao.RevueDao;
import entities.Editeur;
import entities.Revue;
import entities.UserType;
import entities.Utilisateur;

@Named
@RequestScoped
public class RevueBean implements Serializable{
	private static final long serialVersionUID = 1L;
	private final String MODULE = RevueBean.class.getName();
	@EJB
	private RevueDao revueDao;
	@EJB
	private EditeurDao editDao;
	private Revue revue;
	private List<Revue> liste;
	@NotNull(message = "Aucune image sélectionnée")
	private Part logo;

	@PostConstruct
	public void init() {
		revue = new Revue();
		lister();
	}
	
	public Part getLogo() {
		return logo;
	}
	public void setLogo(Part logo) {
		this.logo = logo;
	}

	public Revue getRevue() {
		return revue;
	}
	public void setRevue(Revue revue) {
		this.revue = revue;
	}
	public List<Revue> getListe() {
		lister();
		return liste;
	}
	public void setListe(List<Revue> liste) {
		this.liste = liste;
	}

	public void creer() {
		System.out.println("in creer revueBean");
		try {
			Utilisateur user = getCurrentUser();
			System.out.println("currentUser is "+user.getEmail()+" usertype = "+user.getUserType());
			if(user != null && user.getUserType().equals(UserType.EDITEUR.name())) {
				revue.setEditeur(user.getId());

				InputStream input = logo.getInputStream();
				long id = revueDao.lastInsertId()+1;
				String p_logo=id+"_logo";
				System.out.println("p_logo = "+p_logo);
				revue.setLogo(p_logo);
				File fich = new File(Constante.CHEMIN_LOGO,p_logo);
				
				//écritures des fichiers sur le disque
				Files.copy(input, fich.toPath());

				revueDao.creer(revue);
				System.out.println("Everything is ok in revueBean creer()");
				Constante.redirect(FacesContext.getCurrentInstance(), Constante.revues+"&faces-redirect=true", MODULE);
			}
		}catch(DAOException e) {
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "Une erreur est survenue.");
			PrimeFaces.current().dialog().showMessageDynamic(message);
			e.printStackTrace();
		}
		catch (IOException e1) {
			e1.printStackTrace();}
	}
	private void lister() {
		Utilisateur user = getCurrentUser();
		liste = new ArrayList<>();
		if(user != null && !user.getUserType().equals(UserType.CLIENT.name())) {
			liste = revueDao.lister();
			if(user.getUserType().equals(UserType.EDITEUR.name()))
				liste = liste.parallelStream().filter(r->r.getEditeur()==user.getId()).collect(Collectors.toList());
		}
	}
	private Utilisateur getCurrentUser() {
		ExternalContext  exterNalContext = FacesContext.getCurrentInstance().getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(true);
		Object att = session.getAttribute("user");
		return att != null ? (Utilisateur)att : null;
	}
	public Editeur getEditeur(Long id) {
		Editeur ed = editDao.trouver(id.intValue());
		System.out.println("Revue Editeur "+ed.getMaisonEdition());
		return  ed;
	}

}
