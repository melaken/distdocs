package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.OrderBy;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Document;

@Stateless
public class DocumentDao {

	private static final String	JPQL_SELECT_PAR_ID	= "SELECT d FROM Document d WHERE d.id=:id";
	private static final String	PARAM_ID				= "id";
	private final String MODULE = DocumentDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	public void creer(Document doc) throws DAOException{
		try {
			em.persist(doc);
		} catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
	}
	public Document trouver(long id) throws DAOException{
		Document doc = null;
		Query requete = em.createQuery(JPQL_SELECT_PAR_ID);
		requete.setParameter(PARAM_ID, id);
		try {
			doc = (Document) requete.getSingleResult();
		}catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return doc;
	}
	
	public List<Document> lister() throws DAOException{
		List<Document> liste= new ArrayList<>();
		Query request = em.createQuery("select d from Document d order by d.id DESC");
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}
	public long lastInsertId() throws DAOException{
		long lastId=0;
		try{
		 lastId = ((Integer)em.createNativeQuery("SELECT max(id) from Document").getSingleResult()).longValue();
		}catch(NullPointerException  e) {
		}catch(NoResultException e) {
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		
			return lastId;
	}
	public List<String> tenLatestDocs() throws DAOException{
		List<String> liste= new ArrayList<>();
		try {
			Query q = em.createNativeQuery("select premiere_couverture from Document "
					+ "order by date_ajout desc "
					+ "limit 10");
			liste = q.getResultList();
		}catch(Exception e) {
			throw new DAOException(e);
		}
		return liste;
	}
}
