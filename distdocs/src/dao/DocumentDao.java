package dao;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Document;

@Stateless
public class DocumentDao {

	private static final String	JPQL_SELECT_PAR_ID	= "SELECT d FROM Document e WHERE d.id=:id";
	private static final String	PARAM_ID				= "id";
	private final String MODULE = DocumentDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	public void creer(Document doc) {
		try {
			em.persist(doc);
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
	}
	public Document trouver(long id) {
		Document doc = null;
		Query requete = em.createQuery(JPQL_SELECT_PAR_ID);
		requete.setParameter(PARAM_ID, id);
		try {
			doc = (Document) requete.getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return doc;
	}
	public List<Document> lister(){
		List<Document> liste= new ArrayList<>();
		Query request = em.createQuery("select d from Document d");
		try {
			 liste = request.getResultList();
		}catch(Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	public long lastInsertId() {
		long lastId=0;
		try{
		 lastId = ((Integer)em.createNativeQuery("SELECT max(id) from Document").getSingleResult()).longValue();
		}catch(Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
			return lastId;
	}
}
