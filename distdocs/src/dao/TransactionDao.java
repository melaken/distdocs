package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Document;
import entities.Etat;
import entities.Transaction;

@Stateless
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
	public Transaction getTransactionByRef(String ref){
		Query request = em.createQuery("select t from Transaction t where t.reference = :ref");
		request.setParameter("ref", ref);
		Transaction trans=null;
		try {
			trans =(Transaction)request.getSingleResult();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return trans ;
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
	public List<Document> findUserTransactionArticles(String ref) throws DAOException{
		List<Document> liste= new ArrayList<>();
		Query request = em.createNativeQuery("select doc.id, doc.premiere_couverture, doc.prix "+
				"from DocsAchetes da, Document doc"
				+ " where da.reference = ? and da.doc_id = doc.id");
		request.setParameter(1, ref);
		try {
			List<Object[]> temp = request.getResultList();
			for(Object[] obj : temp) {
				Document doc = new Document();
				doc.setId(Long.parseLong(obj[0].toString()));
				doc.setPremiereCouverture(obj[1].toString());
				doc.setPrix(Float.parseFloat(obj[2].toString()));
				//					System.out.println("doc "+doc.toString());
				liste.add(doc);
			}
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}

	public List<Object[]> selectUserDocsFromDate(String email, String lastDate) throws DAOException {
		List<Object[]> liste= new ArrayList<>();
		Query request;
		if(lastDate != null && !lastDate.isEmpty()) {
			request = em.createNativeQuery("select premiere_couverture, da.doc_id, t.last_update"
					+ 	" from Document d, DocsAchetes da, Transaction t, Utilisateur u"
					+	" where t.etat='TERMINE' and t.reference = da.reference and da.doc_id = d.id"
					+ 	" and u.email = ? and u.id = t.client_id"
					+	" and t.last_update > ?");
			request.setParameter(2, lastDate.trim());
		}
		else
			request = em.createNativeQuery("select premiere_couverture, da.doc_id, t.date_achat from Document d, DocsAchetes da, Transaction t, Utilisateur u"
					+	" where t.etat='TERMINE' and t.reference = da.reference and da.doc_id = d.id  and u.email = ? and u.id = t.client_id "
					+	" and t.date_achat");
		request.setParameter(1, email.trim());

		try {
			liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
		return liste;
	}

	public List<String> checkTransactions(String [] refs) {

		List<String> results = new ArrayList<>();
		try {
			for(String ref : refs) {
				Query request = em.createQuery("select t from Transaction t where t.reference = :ref");
				request.setParameter("ref", ref);
				Object obj = request.getSingleResult();
				if(obj != null && ((Transaction)obj).getEtat() == Etat.TERMINE.name()) {
					results.add(((Transaction)obj).getReference());
				}
			}
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			//throw new DAOException(e);
		}
		return results;
	}
}
