package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.Etat;
import entities.Transaction;
import validators.DateConverterUtil;

@Stateless
public class StatisticsDao {

	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	private final String MODULE = StatisticsDao.class.getName();
	private final String date_condition = "CAST(date_achat AS DATE) <= ? and CAST(date_achat AS DATE) >= ? ";

	public List<Object[]> nbDocsVendusParEditeur(java.sql.Date debut,java.sql.Date fin) {
		List<Object[]> results = new ArrayList<>();
		String str= null;
		Query req = null;

		if(debut != null && fin != null) {
			str = "select count(*) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and "+date_condition
					+" group by doc.editeur "
					+" order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(debut == null && fin == null) {
			str = "select count(*) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
			+" where doc.id = da.doc_id and da.reference = t.reference and t.etat = ? "
			+" group by doc.editeur "
			+" order by nb desc ";

			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());

		}else if(fin != null) {
			str = "select count(*) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
					+"and CAST(date_achat AS DATE) <= ?"
					+"group by doc.editeur "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);

		}else if(debut != null) {
			str = "select count(*) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
					+"and CAST(date_achat AS DATE) >= ? "
					+"group by doc.editeur "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
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
	public List<Object[]> nbDocsAchetesParClientParEditeur(java.sql.Date debut,java.sql.Date fin,Long editeurId,int limit) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();
		if(editeurId !=null) {

			if(fin != null && debut != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+"and "+date_condition
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, fin);
				req.setParameter(4, debut);

			}else if(fin == null && debut == null){
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
			}else if(fin != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+" and CAST(date_achat AS DATE) <= ? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, fin);
			}else if(debut != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+" and CAST(date_achat AS DATE) >= ? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, debut);
			}

		}else {

			if(fin != null && debut != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+"and " +date_condition
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, fin);
				req.setParameter(3, debut);

			}else if(fin == null && debut == null){
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
			}else if(fin != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
						+" and CAST(date_achat AS DATE) <= ? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, fin);
			}else if(debut != null) {
				str= "select count(*) nb, da.client_id from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+" and CAST(date_achat AS DATE) >= ? "
						+"group by da.client_id "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, debut);
			}
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return results;
	}
	public long nbTransactions(java.sql.Date dateDebut,java.sql.Date dateFin,String etat) {
		Query req = null;
		long nb = 0;
		List<Transaction> liste = new ArrayList<>();

		try {
			req = em.createQuery("select t from Transaction t");
			liste = req.getResultList();
			//			System.out.println(" size 0 "+liste.size()+" etat "+etat);
			if(etat != null) {
				liste = liste.parallelStream().filter(t ->t.getEtat().equals(etat)).collect(Collectors.toList());
				//				System.out.println(" size 1 "+liste.size()+"etat = "+etat);
			}
			if(dateDebut != null) {
				System.out.println("datedebut = "+dateDebut);
				liste = liste.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(dateDebut) 
						|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(dateDebut))
						.collect(Collectors.toList());
				//				System.out.println(" size 2 "+liste.size());
			}
			if(dateFin != null) {
				System.out.println("datefin = "+dateFin);
				liste = liste.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(dateFin) 
						|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(dateFin))
						.collect(Collectors.toList());
				//				System.out.println(" size 3 "+liste.size());
			}
		}catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste.size();
	}

	public List<Object[]> transPerClient(java.sql.Date debut, java.sql.Date fin) {
		Query req = null;
		String str =null;
		List<Object[]> results = new ArrayList<>();

		if(fin != null && debut != null) {
			str = "select count(*) nb, client_id,etat from Transaction "
					+"where CAST(date_achat AS DATE) <= ? and CAST(date_achat AS DATE) >= ?  "
					+"group by client_id, etat "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, fin);
			req.setParameter(2, debut);
		}else if(fin == null && debut == null){
			str = "select count(*) nb, client_id,etat from Transaction "
					+"group by client_id, etat "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
		}else if(fin != null) {
			str = "select count(*) nb, client_id,etat from Transaction "
					+"where CAST(date_achat AS DATE) <= ?  "
					+"group by client_id, etat "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, fin);
		}else if(debut != null) {
			str = "select count(*) nb, client_id,etat from Transaction "
					+"where CAST(date_achat AS DATE) >= ?  "
					+"group by client_id, etat "
					+"order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1,debut);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;	
	}
	public List<Object[]> nbTransPerClient(java.sql.Date debut, java.sql.Date fin) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();
		long nb = 0;

		if(debut != null && fin != null) {
			str = "select count(*) nb, client_id from Transaction "
					+"where  "+date_condition
					+"order by nb desc"
					+"group by client_id ";
			req = em.createNativeQuery(str);
			req.setParameter(1, fin);
			req.setParameter(2, debut);
		}else if(debut == null && fin == null){
			str = "select count(*) nb, client_id from Transaction group by client_id order by nb desc";
			req = em.createNativeQuery(str);
		}else if(debut != null) {
			str = "select count(*) nb, client_id from Transaction "
					+"where  CAST(date_achat AS DATE) >= ? "
					+"order by nb desc"
					+"group by client_id ";
			req = em.createNativeQuery(str);
			req.setParameter(1, debut);
		}else if(fin != null) {
			str = "select count(*) nb, client_id from Transaction "
					+"where CAST(date_achat AS DATE) <= ?  "
					+"order by nb desc"
					+"group by client_id ";
			req = em.createNativeQuery(str);
			req.setParameter(1, fin);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;
	}
	public Long nbDocsVendus(java.sql.Date debut, java.sql.Date fin) {
		String str= null;
		Query req = null;
		long nb = 0;
		
		if(debut != null && fin != null) {
			str = "select count(doc_id) from Transaction t,DocsAchetes da"
					+" where da.reference = t.reference and t.etat=?  "
					+" and "+date_condition;
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(debut == null && fin == null) {
			str = "select count(doc_id) from Transaction t,DocsAchetes da"
					+" where da.reference = t.reference and t.etat=?  ";

			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());

		}else if(fin != null) {
			str = "select count(doc_id) from Transaction t,DocsAchetes da"
					+" where da.reference = t.reference and t.etat=?  "
					+"and CAST(date_achat AS DATE) <= ?";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);

		}else if(debut != null) {
			str = "select count(doc_id) from Transaction t,DocsAchetes da"
					+" where da.reference = t.reference and t.etat=?  "
					+"and CAST(date_achat AS DATE) >= ? ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
		}
		try {
			nb = (Long)req.getSingleResult();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return nb;
	}
}
