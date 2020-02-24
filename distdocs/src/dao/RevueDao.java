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

import entities.Revue;
import entities.Utilisateur;

@Stateless
public class RevueDao {

	private final String MODULE = RevueDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	public void creer(Revue rev) throws DAOException{
		try {
			em.persist(rev);
		} catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
	}
	public List<Revue> lister() {
		List<Revue> liste= new ArrayList<>();
		Query request = em.createQuery("select r from Revue r ");
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	public long lastInsertId() throws DAOException{
		long lastId=0;
		try{
		 lastId = ((Integer)em.createNativeQuery("SELECT max(id) from Revue").getSingleResult()).longValue();
		}catch(NullPointerException  e) {
		}catch(NoResultException e) {
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		
			return lastId;
	}
	public Revue trouver(int id){
		Revue rev = null;
		Query requete = em.createQuery("SELECT r FROM Revue r WHERE r.id=:id");
		requete.setParameter("id", id);
		try {
			rev = (Revue) requete.getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return rev;
	}
}
