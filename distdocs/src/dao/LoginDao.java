package dao;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;

import entities.Utilisateur;
import validators.Utilitaire;

@Stateless
public class LoginDao {

	private final String MODULE = EditeurDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	@EJB
	private UtilisateurDao userDao;
	

	
	
	public boolean validate(String email, String pwd) throws DAOException{
		ConfigurablePasswordEncryptor passwordEncryptor = new ConfigurablePasswordEncryptor();
		passwordEncryptor.setAlgorithm(Utilitaire.ALGO_CHIFFREMENT);
		
		Utilisateur user = userDao.trouver(email);
		if(user != null && passwordEncryptor.checkPassword(pwd, user.getMotDePasse()))
			return true;
		else return false;
	}
}
