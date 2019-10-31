package dao;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateful;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Transaction;

@Stateful
public class TransactionDao {

	private final String MODULE = TransactionDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	public void creer(Transaction trans) {
		try {
			System.out.println(trans.toString());
			em.persist(trans);
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
	}
	public Object getTransactionByRef(String ref) {
		Query request = em.createQuery("select t from Transaction t where t.reference = :ref");
		request.setParameter("ref", ref);
		Object obj=null;
		try {
			 obj = request.getSingleResult();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return obj ;
	}
	public void update(Transaction trans) {
		try {
			System.out.println(trans.toString());
			em.merge(trans);
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
	}
}
