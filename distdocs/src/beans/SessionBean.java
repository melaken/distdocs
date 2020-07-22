package beans;

import java.io.Serializable;

import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import dao.DocumentDao;
import dao.EditeurDao;
import dao.RevueDao;
import dao.UtilisateurDao;
import entities.UserType;
import entities.Utilisateur;

@Named
@SessionScoped
public class SessionBean implements Serializable{
	private static final long serialVersionUID = 1L;
	private final String MODULE = SessionBean.class.getName();
	@EJB
	private RevueDao revueDao;
	@EJB
	private EditeurDao editDao;
	@EJB
	private DocumentDao docDao;
	@EJB
	private UtilisateurDao userDao;

	public String menuButtonValue(Utilisateur user) {
//		Utilisateur user = userDao.trouver(id.intValue());
		String value = user.getNom();
		if(user.getUserType().equals(UserType.EDITEUR.name())) {
			Long id = user.getId();
			value = editDao.trouver(id.intValue()).getMaisonEdition();
		}
		return value;
	}
}
