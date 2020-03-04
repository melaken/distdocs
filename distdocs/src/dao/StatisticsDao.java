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
	private final String date_condition = " CAST(date_achat AS DATE) <= ? and CAST(date_achat AS DATE) >= ? ";


	public List<Object[]> nbDocsVendusParEditeur(java.sql.Date debut,java.sql.Date fin, Long editeurId) {
		List<Object[]> results = new ArrayList<>();
		String str= null;
		Query req = null;
		
		if(fin != null && debut != null) {
			str = "select count(da.doc_id) nb, doc_type from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and doc.editeur = ? and "+date_condition
					+" group by doc_type ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, fin);
			req.setParameter(4, debut);
		}else if(fin == null && debut == null){
			str = "select count(da.doc_id) nb, doc_type from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and doc.editeur = ?"
					+" group by doc_type ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
		}else if(fin != null) {
			str = "select count(da.doc_id) nb, doc_type from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and doc.editeur = ? and CAST(date_achat AS DATE) <= ?"
					+" group by doc_type ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, fin);
		}else if(debut != null) {
			str = "select count(da.doc_id) nb, doc_type from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and doc.editeur = ? and CAST(date_achat AS DATE) >= ? "
					+" group by doc_type ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, debut);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;
		
	}
	public List<Object[]> nbDocsVendusParEditeur(java.sql.Date debut,java.sql.Date fin) {
		List<Object[]> results = new ArrayList<>();
		String str= null;
		Query req = null;

		if(fin != null && debut != null) {
			str = "select count(da.doc_id) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and "+date_condition
					+" group by doc.editeur "
					+" order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(fin == null && debut == null){
			str = "select count(da.doc_id) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" group by doc.editeur "
					+" order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
		}else if(fin != null) {
			str = "select count(da.doc_id) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and CAST(date_achat AS DATE) <= ?"
					+" group by doc.editeur "
					+" order by nb desc ";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
		}else if(debut != null) {
			str = "select count(da.doc_id) nb, doc.editeur from Transaction t,DocsAchetes da, Document doc "
					+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
					+" and CAST(date_achat AS DATE) >= ? "
					+" group by doc.editeur "
					+" order by nb desc ";
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
	public List<Object[]> nbDocsVendusParEditeur(java.sql.Date debut,java.sql.Date fin,Long editeurId,String doctype) {
		List<Object[]> results = new ArrayList<>();
		String str= null;
		Query req = null;

		if(editeurId !=null) {
			if(doctype != null && !doctype.isEmpty()) {
				if(debut != null && fin != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and "+date_condition
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
					req.setParameter(5, doctype);
				}else if(debut == null && fin == null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat = ? "
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? "
							+" order by nb desc ";

					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
					req.setParameter(3, doctype);

				}else if(fin != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
							+"and CAST(date_achat AS DATE) <= ?"
							+"group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? "
							+"order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);

				}else if(debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
							+"and CAST(date_achat AS DATE) >= ? "
							+"group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? "
							+"order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and "+date_condition
							+" group by doc.editeur, doc_type "
							+" having editeur = ? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
				}else if(fin == null && debut == null){
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" group by doc.editeur, doc_type "
							+" having editeur = ?  "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
				}else if(fin != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+"and CAST(date_achat AS DATE) <= ?"
							+" group by doc.editeur, doc_type "
							+" having editeur = ? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
				}else if(debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+"and CAST(date_achat AS DATE) >= ? "
							+" group by doc.editeur, doc_type "
							+" having editeur = ? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
				}
			}
		}
		else {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and "+date_condition
							+" group by doc.editeur, doc_type "
							+" having doc_type=? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, doctype);
				}else if(fin == null && debut == null){
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" group by doc.editeur, doc_type "
							+" having doc_type=? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, doctype);
				}else if(fin != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+"and CAST(date_achat AS DATE) <= ?"
							+" group by doc.editeur, doc_type "
							+" having doc_type=? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, doctype);
				}else if(debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+"and CAST(date_achat AS DATE) >= ? "
							+" group by doc.editeur, doc_type "
							+" having doc_type=? "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and "+date_condition
							+" group by doc.editeur, doc_type "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
				}else if(fin == null && debut == null){
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" group by doc.editeur, doc_type "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
				}else if(fin != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and CAST(date_achat AS DATE) <= ?"
							+" group by doc.editeur, doc_type "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
				}else if(debut != null) {
					str = "select count(da.doc_id) nb, doc.editeur, doc_type from Transaction t,DocsAchetes da, Document doc "
							+" where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
							+" and CAST(date_achat AS DATE) >= ? "
							+" group by doc.editeur, doc_type "
							+" order by nb desc ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
				}
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
	public List<Object[]> nbDocsAchetesParClientParEditeur(java.sql.Date debut,java.sql.Date fin,Long editeurId) {
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
	public Long nbDocsVendus(java.sql.Date debut, java.sql.Date fin,Long editeurId,String doctype) {
		String str= null;
		Query req = null;
		long nb = 0;
		if(editeurId !=null) {
			if(doctype != null && !doctype.isEmpty()) {
				if(debut != null && fin != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" and "+date_condition
							+" group by editeur, doc_type"
							+" having editeur=? and doc_type=?";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
					req.setParameter(5, doctype);
				}else if(debut == null && fin == null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" group by editeur, doc_type"
							+" having editeur=? and doc_type=?";

					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
					req.setParameter(3, doctype);

				}else if(fin != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" and CAST(date_achat AS DATE) <= ?"
							+" group by editeur, doc_type"
							+" having editeur=? and doc_type=?";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);

				}else if(debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+"and CAST(date_achat AS DATE) >= ? "
							+" group by editeur, doc_type"
							+" having editeur=? and doc_type=?";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" and "+date_condition
							+" group by doc.editeur "
							+" having editeur = ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
				}else if(fin == null && debut == null){
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" group by doc.editeur "
							+" having editeur = ?  ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
				}else if(fin != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+"and CAST(date_achat AS DATE) <= ?"
							+" group by doc.editeur "
							+" having editeur = ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
				}else if(debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+"and CAST(date_achat AS DATE) >= ? "
							+" group by doc.editeur "
							+" having editeur = ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
				}
			}
		}
		else {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" and "+date_condition
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, doctype);
				}else if(fin == null && debut == null){
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, doctype);
				}else if(fin != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+"and CAST(date_achat AS DATE) <= ?"
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, doctype);
				}else if(debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da, Document doc"
							+" where da.reference = t.reference and t.etat=? and doc.id = da.doc_id "
							+"and CAST(date_achat AS DATE) >= ? "
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da"
							+" where da.reference = t.reference and t.etat=?  "
							+" and "+date_condition;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
				}else if(fin == null && debut == null){
					str = "select count(doc_id) from Transaction t,DocsAchetes da"
							+" where da.reference = t.reference and t.etat=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
				}else if(fin != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da"
							+" where da.reference = t.reference and t.etat=? "
							+" and CAST(date_achat AS DATE) <= ?";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
				}else if(debut != null) {
					str = "select count(doc_id) from Transaction t,DocsAchetes da"
							+" where da.reference = t.reference and t.etat=?  "
							+" and CAST(date_achat AS DATE) >= ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
				}
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

	public List<Object[]> nbDoctypeParClient(java.sql.Date debut, java.sql.Date fin,Long editeurId) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();
		if(editeurId !=null) {

			if(fin != null && debut != null) {
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+"and "+date_condition
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, fin);
				req.setParameter(4, debut);

			}else if(fin == null && debut == null){
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
			}else if(fin != null) {
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+" and CAST(date_achat AS DATE) <= ? "
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, fin);
			}else if(debut != null) {
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? and  doc.editeur = ? "
						+" and CAST(date_achat AS DATE) >= ? "
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, editeurId.longValue());
				req.setParameter(3, debut);
			}

		}else {

			if(fin != null && debut != null) {
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+"and " +date_condition
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, fin);
				req.setParameter(3, debut);

			}else if(fin == null && debut == null){
				str= "select count(*) nb, da.client_id,doc_type from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
			}else if(fin != null) {
				str= "select count(*) nb, da.client_id,doc_type  from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=?  "
						+" and CAST(date_achat AS DATE) <= ? "
						+"group by da.client_id,doc_type "
						+"order by nb desc";
				req = em.createNativeQuery(str);
				req.setParameter(1, Etat.TERMINE.name());
				req.setParameter(2, fin);
			}else if(debut != null) {
				str= "select count(*) nb, da.client_id,doc_type  from Transaction t,DocsAchetes da, Document doc "
						+"where doc.id = da.doc_id and da.reference = t.reference and t.etat=? "
						+" and CAST(date_achat AS DATE) >= ? "
						+"group by da.client_id,doc_type "
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
	//ca group by doctype, editeur connu
	public List<Object[]> chiffreAffaires(java.sql.Date debut, java.sql.Date fin, Long editeurId) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();
		
		if(fin != null && debut != null) {
			str="SELECT sum(prix), doc_type from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference and d.editeur = ? and da.doc_id = d.id"
					+" and "+date_condition
					+" group by doc_type";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, fin);
			req.setParameter(4, debut);
		}else if(fin == null && debut == null){
			str="SELECT sum(prix), doc_type from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference and da.doc_id = d.id and d.editeur = ?"
					+" group by doc_type";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
		}else if(fin != null) {
			str="SELECT sum(prix), doc_type from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference  and d.editeur = ? "
					+" and CAST(date_achat AS DATE) <=? "
					+"  and da.doc_id = d.id "
					+" group by doc_type";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, fin);
		}else if(debut != null) {
			str="SELECT sum(prix), doc_type from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference  "
					+" and d.editeur = ? and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
					+" group by doc_type";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, debut);
		}

		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	public List<Object[]> chiffreAffaires(java.sql.Date debut, java.sql.Date fin) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();

		if(fin != null && debut != null) {
			str="SELECT sum(prix), editeur from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
					+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
					+" group by editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(fin == null && debut == null){
			str="SELECT sum(prix), editeur from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference and da.doc_id = d.id "
					+" group by editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
		}else if(fin != null) {
			str="SELECT sum(prix), editeur from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
					+"  and da.doc_id = d.id "
					+" group by editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
		}else if(debut != null) {
			str="SELECT sum(prix), editeur from Transaction t, Document d, DocsAchetes da " 
					+" where etat=? and t.reference = da.reference  "
					+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
					+" group by editeur";
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
	public List<Object[]> chiffreAffaires(java.sql.Date debut, java.sql.Date fin,Long editeurId,String doctype) {
		String str = null;
		Query req = null;
		List<Object[]> results = new ArrayList<>();

		if(editeurId !=null) {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? and doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
					req.setParameter(5, doctype);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? and doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
					req.setParameter(3, doctype);
				}else if(fin != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+"  and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? and doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}else if(debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? and doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type "
							+" having editeur = ? "
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? "
							+" order by editeur, doc_type";;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
				}else if(fin != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+"  and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? "
							+" order by editeur, doc_type";;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
				}else if(debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having editeur = ? "
							+" order by editeur, doc_type";;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
				}
			}
		}else {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having doc_type=?"
							+" order by editeur, doc_type";;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, doctype);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having doc_type=?"
							+" order by editeur, doc_type";;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, doctype);
				}else if(fin != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+"  and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, doctype);
				}else if(debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" having doc_type=?"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
				}else if(fin != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  and CAST(date_achat AS DATE) <=? "
							+"  and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
				}else if(debut != null) {
					str="SELECT sum(prix), editeur, doc_type from Transaction t, Document d, DocsAchetes da " 
							+" where etat=? and t.reference = da.reference  "
							+" and CAST(date_achat AS DATE) >=? and da.doc_id = d.id "
							+" group by editeur, doc_type"
							+" order by editeur, doc_type";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
				}
			}
		}

		try {
			results = req.getResultList();
			System.out.println("chiffre d'affaire taille = "+results.size());
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}

		return results;
	}
	//ca : chiffre d'affaire
	public Double caSurUnePeriode(java.sql.Date debut, java.sql.Date fin,Long editeurId, String doctype) {
		String str = null;
		Query req = null;
		Double montant = new Double(0);
		List<Object[]> results = new ArrayList<>();

		if(editeurId !=null) {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and "+date_condition
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
					req.setParameter(5, doctype);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
					req.setParameter(3, doctype);
				}else if(fin != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) <=? "
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}else if(debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) >=?  "
							+" group by doc.editeur, doc_type "
							+" having editeur = ? and doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
					req.setParameter(4, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and "+date_condition
							+" group by doc.editeur "
							+" having editeur = ?  ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, editeurId);
				}else if(fin == null && debut == null){
					str = "SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" group by doc.editeur"
							+" having editeur = ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, editeurId);
				}else if(fin != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) <=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, editeurId);
				}else if(debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) >=?  "
							+" group by doc.editeur "
							+" having editeur = ? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, editeurId);
				}
			}
		}
		else {
			if(doctype != null && !doctype.isEmpty()) {
				if(fin != null && debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and "+date_condition
							+" group by doc_type "
							+" having  doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
					req.setParameter(4, doctype);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, doctype);
				}else if(fin != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) <=? "
							+" group by  doc_type "
							+" having  doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, doctype);
				}else if(debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) >=?  "
							+" group by doc_type "
							+" having doc_type=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
					req.setParameter(3, doctype);
				}
			}else {
				if(fin != null && debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and "+date_condition;
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
					req.setParameter(3, debut);
				}else if(fin == null && debut == null){
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
				}else if(fin != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) <=? ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, fin);
				}else if(debut != null) {
					str="SELECT sum(prix) from Transaction t,DocsAchetes da, Document doc " 
							+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
							+" and CAST(date_achat AS DATE) >=?  ";
					req = em.createNativeQuery(str);
					req.setParameter(1, Etat.TERMINE.name());
					req.setParameter(2, debut);
				}
			}
		}

		try {
			montant = (Double)req.getSingleResult();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}


		return montant;
	}
	public List<Object[]> nb_ventes(java.sql.Date debut, java.sql.Date fin) {
		List<Object[]> liste = new ArrayList<>();
		String str = null;
		Query req = null;
		if(fin != null && debut != null) {
			str="SELECT count(da.doc_id), doc.id_revue,doc.editeur from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and "+date_condition
					+" group by id_revue, ,doc.editeur"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(fin == null && debut == null){
			str="SELECT count(da.doc_id), doc.id_revue,doc.editeur from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" group by id_revue,doc.editeur"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
		}else if(fin != null) {
			str="SELECT count(da.doc_id), doc.id_revue,doc.editeur from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+"  and CAST(date_achat AS DATE) <=?"
					+" group by id_revue,doc.editeur"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
		}else if(debut != null) {
			str="SELECT count(da.doc_id), doc.id_revue,doc.editeur from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and CAST(date_achat AS DATE) >=?"
					+" group by id_revue,doc.editeur"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
		}
		try {
			liste = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	public List<Object[]> ca_editeur(java.sql.Date debut, java.sql.Date fin,Long editeurId){
		List<Object[]> liste = new ArrayList<>();
		String str = null;
		Query req = null;

		if(fin != null && debut != null) {
			str="SELECT sum(prix), doc.id_revue from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and doc.editeur =? and "+date_condition
					+" group by id_revue"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2,editeurId);
			req.setParameter(3, fin);
			req.setParameter(4, debut);
		}else if(fin == null && debut == null){
			str="SELECT sum(prix), doc.id_revue from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and doc.editeur =? "
					+" group by id_revue"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2,editeurId);
		}else if(fin != null) {
			str="SELECT sum(prix), doc.id_revue from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and doc.editeur =? and CAST(date_achat AS DATE) <=? "
					+" group by id_revue"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2,editeurId);
			req.setParameter(3, fin);
		}else if(debut != null) {
			str="SELECT sum(prix), doc.id_revue from Transaction t,DocsAchetes da, Document doc " 
					+" where etat=? and t.reference= da.reference and da.doc_id=doc.id "
					+" and doc.editeur =? and CAST(date_achat AS DATE) >=? "
					+" group by id_revue"
					+" HAVING id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2,editeurId);
			req.setParameter(3, debut);
		}
		try {
			liste = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	
	public List<Object[]> chiffre_affaires(java.sql.Date debut, java.sql.Date fin) {
		String str = "select sum(prix), doc_type, id_revue, editeur from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id ";
		Query req = null;
		if(fin != null && debut != null) {
			str += "and "+date_condition+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(fin == null && debut == null) {
			str += " group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	public List<Object[]> nbv(java.sql.Date debut, java.sql.Date fin) {
		String str = "select count(d.id), doc_type, id_revue, editeur from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id ";
		Query req = null;
		if(fin != null && debut != null) {
			str += "and "+date_condition+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
		}else if(fin == null && debut == null) {
			str += " group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" group by id_revue having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	
	public List<Object[]> chiffre_affaires(java.sql.Date debut, java.sql.Date fin,Long editeurId, String docType) {
		String str = "select sum(prix),id_revue from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id ";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.editeur=? and d.doc_type = ? group by d.id_revue "
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, editeurId);
			req.setParameter(5, docType);
		}else if(fin == null && debut == null) {
			str+=" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, docType);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, editeurId);
			req.setParameter(4, docType);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, editeurId);
			req.setParameter(4, docType);
		}
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	public List<Object[]> nbv(java.sql.Date debut, java.sql.Date fin,Long editeurId, String docType) {
		String str = "select count(d.id),id_revue from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id ";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.editeur=? and d.doc_type = ? group by d.id_revue "
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, editeurId);
			req.setParameter(5, docType);
		}else if(fin == null && debut == null) {
			str+=" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
			req.setParameter(3, docType);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, editeurId);
			req.setParameter(4, docType);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.editeur=? and d.doc_type = ? group by d.id_revue"
					+" having id_revue is not null";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, editeurId);
			req.setParameter(4, docType);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	
	public List<Object[]> chiffre_affaires(java.sql.Date debut, java.sql.Date fin,Long editeurId) {
		String str = "select sum(prix),id_revue from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id and id_revue is not null";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.editeur=?  group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, editeurId);
		}else if(fin == null && debut == null) {
			str+=" and d.editeur=?  group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.editeur=? group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, editeurId);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.editeur=? group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, editeurId);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	public List<Object[]> nbv(java.sql.Date debut, java.sql.Date fin,Long editeurId) {
		String str = "select count(d.id),id_revue from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id and id_revue is not null";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.editeur=?  group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, editeurId);
		}else if(fin == null && debut == null) {
			str+=" and d.editeur=?  group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, editeurId);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.editeur=? group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, editeurId);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.editeur=? group by d.id_revue";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, editeurId);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	
	public List<Object[]> chiffre_affaires(java.sql.Date debut, java.sql.Date fin, String docType) {
		String str = "select sum(prix),editeur from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, docType);
		}else if(fin == null && debut == null) {
			str+=" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, docType);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, docType);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, docType);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	public List<Object[]> nbv(java.sql.Date debut, java.sql.Date fin, String docType) {
		String str = "select count(d.id),editeur from Document d, DocsAchetes da, Transaction t " 
					+ " where t.etat = ? AND t.reference = da.reference and da.doc_id = d.id";
		Query req = null;
		if(fin != null && debut != null) {
			str += " and "+date_condition+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, debut);
			req.setParameter(4, docType);
		}else if(fin == null && debut == null) {
			str+=" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, docType);
		}else if(fin != null) {
			str+=" and CAST(date_achat AS DATE) <=? "+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin);
			req.setParameter(3, docType);
		}else if( debut != null) {
			str+=" and CAST(date_achat AS DATE) >=? "+" and d.doc_type = ? group by d.editeur";
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut);
			req.setParameter(3, docType);
		}
		 
		
		List<Object[]> results = new ArrayList<>();
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		
		return results;
	}
	
}
