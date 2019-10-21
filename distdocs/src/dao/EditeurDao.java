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

import entities.Editeur;
import entities.Utilisateur;

@Stateless
public class EditeurDao {

	private final String MODULE = EditeurDao.class.getName();
	private static final String	JPQL_SELECT_PAR_EMAIL	= "SELECT e FROM Editeur e WHERE e.email=:email";
	private static final String	PARAM_EMAIL				= "email";
	private static final String	PARAM_ID				= "id";
	// Injection du manager, qui s'occupe de la connexion avec la BDD
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	// Enregistrement d'un nouvel éditeur
		public void creer(Editeur editeur) {
			try {
				em.persist(editeur);
			} catch (Exception e) {
				Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
				e.printStackTrace();
			}
		}
		// Recherche d'un éditeur à partir de son adresse email 
		public Editeur trouver(String email) {
			Editeur editeur = null;
			Query requete = em.createQuery(JPQL_SELECT_PAR_EMAIL);
			requete.setParameter(PARAM_EMAIL, email);
			try {
				editeur = (Editeur) requete.getSingleResult();
			} catch (NoResultException e) {
				return null;
			} catch (Exception e) {
				Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
				e.printStackTrace();
			}
			return editeur;
		}
		public List<Editeur> lister(){
			List<Editeur> liste= new ArrayList<>();
			Query request = em.createQuery("select u from Utilisateur u");
			try {
				 liste = request.getResultList();
			}catch(Exception e) {
				Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
				e.printStackTrace();
			}
			return liste;
		}
}
