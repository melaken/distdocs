package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Utilisateur;

@Stateless
public class UtilisateurDao {
	private final String MODULE = UtilisateurDao.class.getName();
	private static final String	JPQL_SELECT_PAR_EMAIL	= "SELECT u FROM Utilisateur u WHERE u.email=:email";
	private static final String	PARAM_EMAIL				= "email";
	// Injection du manager, qui s'occupe de la connexion avec la BDD
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;

	// Enregistrement d'un nouvel utilisateur
	public void creer(Utilisateur utilisateur) throws DAOException{
		try {
			em.persist(utilisateur);
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
	}

	// Recherche d'un utilisateur à partir de son adresse email
	public Utilisateur trouver(String email) throws DAOException{
		Utilisateur utilisateur = null;
		Query requete = em.createQuery(JPQL_SELECT_PAR_EMAIL);
		requete.setParameter(PARAM_EMAIL, email);
		try {
			utilisateur = (Utilisateur) requete.getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return utilisateur;
	}
	public Utilisateur trouver(int id){
		Utilisateur utilisateur = null;
		Query requete = em.createQuery("SELECT u FROM Utilisateur u WHERE u.id=:id");
		requete.setParameter("id", id);
		try {
			utilisateur = (Utilisateur) requete.getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return utilisateur;
	}
	public List<Utilisateur> lister() throws DAOException{
		List<Utilisateur> liste= new ArrayList<>();
		Query request = em.createQuery("select u from Utilisateur u");
		try {
			 liste = request.getResultList();
		}catch(Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}
}
