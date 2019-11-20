package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateful;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Document;
import entities.Transaction;

@Stateful
public class TransactionDao {

	private final String MODULE = TransactionDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	public void creer(Transaction trans) throws DAOException{
		try {
			System.out.println(trans.toString());
			em.persist(trans);
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		
	}
	public Object getTransactionByRef(String ref){
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
	public void update(Transaction trans) throws DAOException{
		try {
			System.out.println(trans.toString());
			em.merge(trans);
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		
	}
	public List<Transaction> userTransactions(long clientId) throws DAOException{
		List<Transaction> liste= new ArrayList<>();
		Query request = em.createQuery("select t from Transaction t where t.clientId = :clientId order by t.dateAchat DESC");
		request.setParameter("clientId", clientId);
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}
}
