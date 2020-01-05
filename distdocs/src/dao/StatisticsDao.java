package dao;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Etat;

@Stateless
public class StatisticsDao {

	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	private final String MODULE = StatisticsDao.class.getName();

	public List<Object[]> nbDocsVendusParEditeur(Timestamp debut,Timestamp fin) {
		List<Object[]> results = new ArrayList<>();
		String str= "select count(*) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
				+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
				+"group by doc.editeur "
				+"order by nb desc ";

		if(debut != null && fin != null)
			str += "t.date_achat <= ? and t.date_achat >= ?";
		Query request = em.createNativeQuery(str);

		request.setParameter(1, Etat.TERMINE.name());
		if(debut != null && fin != null) {
			request.setParameter(2, fin);
			request.setParameter(3, debut);
		}
		try {
			results = request.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return results;
	}
	public List<Object[]> nbDocsAchetesParClientParEditeur(Timestamp debut,Timestamp fin,Long editeurId,int limit) {
		String str = null;
		Query request = null;
		List<Object[]> results = new ArrayList<>();
		if(editeurId !=null) {
			str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
					+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
					+"group by da.client_id "
					+"order by nb desc";

			if(debut != null && fin != null)
				str += "and t.date_achat <= ? and t.date_achat >= ?";
			request = em.createNativeQuery(str);

			request.setParameter(2, editeurId.longValue());
			request.setParameter(1, Etat.TERMINE.name());
			if(debut != null && fin != null) {
				request.setParameter(3, fin);
				request.setParameter(4, debut);
			}
		}else {
			str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da "
					+"where da.reference = t.reference and t.etat=? "
					+"group by da.client_id "
					+"order by nb desc";

			if(debut != null && fin != null)
				str += "and t.date_achat <= ? and t.date_achat >= ?";
			request = em.createNativeQuery(str);

			request.setParameter(1, Etat.TERMINE.name());
			if(debut != null && fin != null) {
				request.setParameter(2, fin);
				request.setParameter(3, debut);
			}
		}

		try {
			results = request.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return results;
	}
	public long nbTransactions(Timestamp debut,Timestamp fin,String type) {
		String str = null;
		Query req = null;
		long nb = 0;
		if(type != null && !type.isEmpty()) {
			str = "select count(*) from Transaction where etat = ? ";
			if(debut != null && fin != null)
				str += "and date_achat <= ? and date_achat >= ?";

			req = em.createNativeQuery(str);
			req.setParameter(1, type);

			if(debut != null && fin != null) {
				req.setParameter(2, fin);
				req.setParameter(3, debut);
			}

		}else {
			if(debut != null && fin != null)
				str = "select count(*) from Transaction t"+ 
						"and t.date_achat <= ? and t.date_achat >= ?";
			else 
				str =  "select count(*) from Transaction t";

			req = em.createNativeQuery(str);
			if(debut != null && fin != null) {
				req.setParameter(1, fin);
				req.setParameter(2, debut);
			}

		}
		try {
			nb = (Long)req.getSingleResult();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return nb;
	}

	public List<Object[]> transPerClient(Timestamp debut, Timestamp fin) {
		Query req = null;
		String str =null;
		List<Object[]> results = new ArrayList<>();

		if(fin != null && debut != null) {
			str = "select count(*) nb, client_id,etat from Transaction "
					+"where date_achat <= ? and date_achat >= ?  "
					+"group by client_id, etat "
					+"order by nb desc ";
		}else {
			str = "select count(*) nb, client_id,etat from Transaction "
					+"group by client_id, etat "
					+"order by nb desc ";
		}
		req = em.createNativeQuery(str);
		if(debut != null && fin != null) {
			req.setParameter(1, fin);
			req.setParameter(2, debut);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;	
	}
	public List<Object[]> nbTransPerClient(Timestamp debut, Timestamp fin) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();
		long nb = 0;
		
		if(debut != null && fin != null) {
			str = "select count(*) nb, client_id from Transaction "
					+"where date_achat <= ? and date_achat >= ? "
					+"order by nb desc"
					+"group by client_id ";
		}else {
			str = "select count(*) nb, client_id from Transaction group by client_id order by nb desc";
		}
		req = em.createNativeQuery(str);
		if(debut != null && fin != null) {
			req.setParameter(1, fin);
			req.setParameter(2, debut);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;
	}
}
