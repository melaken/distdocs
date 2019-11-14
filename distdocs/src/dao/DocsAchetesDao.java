package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.EJB;
import javax.ejb.Stateful;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import entities.DocsAchetes;
import entities.Document;
import entities.Etat;

@Stateful
public class DocsAchetesDao {

	private final String MODULE = DocsAchetesDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	@EJB
	TransactionDao transDao;
	
	public List<DocsAchetes> lister() throws DAOException{
		List<DocsAchetes> liste= new ArrayList<>();
		Query request = em.createQuery("select d from DocsAchetes d");
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}
	public List<Document> docAchetesParclient(long clientId) throws DAOException{
		List<Document> liste= new ArrayList<>();
		try{
			Query q = em.createNativeQuery("SELECT da.doc_id,d.premiere_couverture  "
					+ "from Document d,Transaction t, DocsAchetes da "
					+ " where t.reference = da.reference and d.id = da.doc_id " 
					+ "and t.etat = ? and  t.client_id = ?");
			q.setParameter(1,Etat.INITIE.name() );
			q.setParameter(2,clientId );
			List<Object[]> temp = q.getResultList();
			System.out.println("size tmp = "+temp.size());
			for(Object[] obj : temp) {
				Document doc = new Document();
				doc.setId(Long.parseLong(obj[0].toString()));
				doc.setPremiereCouverture(obj[1].toString());
//				System.out.println("doc "+doc.toString());
				liste.add(doc);
			}
			System.out.println("End docAchetesParclient");
			}catch(Throwable e) {
				Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
				e.printStackTrace();
				throw new DAOException(e);
			}
		return liste;
	}
	public String trouverPremiereCouverture(long doc_id) throws DAOException{
		String cover="";
		System.out.println("Dans trouverPremiereCouverture "+doc_id);
		Query request = em.createQuery("select d from Document d where d.id = :id");
		request.setParameter("id", doc_id);
		try {
			Document doc = (Document) request.getSingleResult();
			 cover = doc.getPremiereCouverture();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		System.out.println("cover "+cover);
		return cover;
	}
	
	@Transactional
	public void storeDocsAchetes(List<DocsAchetes> liste) throws DAOException{
		try {
			System.out.println("storeDocsAchetes size "+liste.size());
			for(DocsAchetes doc : liste) {
				System.out.println(doc.toString());
				em.persist(doc);
			}
		} catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
	}
	
}