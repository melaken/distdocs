package dao;

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
public class StatsDao {

	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	private final String MODULE = StatsDao.class.getName();
	private final String date_condition = " and CAST(date_achat AS DATE) <= ? and CAST(date_achat AS DATE) >= ? ";
	
	public List<Object[]> oneDocStats(java.sql.Date debut,java.sql.Date fin,Long idRevue,String numeroEdition) {
		List<Object[]> results = new ArrayList<>();
		String str= "SELECT count(da.doc_id) nb, da.doc_id "+
				" FROM Transaction t, DocsAchetes da, Document d " + 
				" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id and d.numero_edition =?" +
				" and d.id_revue = ?";
		Query req = null;
		
		if(debut != null && fin != null) {
			str += date_condition;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, numeroEdition);
			req.setParameter(3, idRevue);
			req.setParameter(4, fin );
			req.setParameter(5,debut );
		}else if(debut == null && fin == null) {
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, numeroEdition);
			req.setParameter(3, idRevue);
		}else if(fin != null) {
			str += " and CAST(date_achat AS DATE) <= ?";
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, numeroEdition);
			req.setParameter(3, idRevue);
			req.setParameter(4, fin);
		}else if(debut != null) {
			str += " and CAST(date_achat AS DATE) >= ? ";
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, numeroEdition);
			req.setParameter(3, idRevue);
			req.setParameter(4, debut);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;
	}
	public List<Object[]> docStats(java.sql.Date debut,java.sql.Date fin,long nbDocs) {
		List<Object[]> results = new ArrayList<>();
		Query req = null;
		String str = null;
		
		if(debut != null && fin != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id " + date_condition+
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin );
			req.setParameter(3,debut );
			req.setParameter(4, nbDocs);
		}else if(debut == null && fin == null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id " +
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, nbDocs);
		}else if(fin != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id and CAST(date_achat AS DATE) <= ? " +
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, fin );
			req.setParameter(3, nbDocs);
		}else if(debut != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id and CAST(date_achat AS DATE) >= ?"+
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, debut );
			req.setParameter(3, nbDocs);
		}
		try {
			results = req.getResultList();
		}catch(Throwable e){
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return results;
	}
	public List<Object[]> docStats(java.sql.Date debut,java.sql.Date fin,Long idRevue,long nbDocs) {
		List<Object[]> results = new ArrayList<>();
		String str= null;
		Query req = null;
		
		if(debut != null && fin != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id " + 
					" and d.id_revue = ? "+date_condition+
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, idRevue);
			req.setParameter(3, fin );
			req.setParameter(4,debut );
			req.setParameter(5, nbDocs);
		}else if(debut == null && fin == null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id and d.id_revue = ? "+
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, idRevue);
			req.setParameter(3, nbDocs);
		}else if(fin != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id  and d.id_revue = ? "+
					" and CAST(date_achat AS DATE) <= ? " +
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, idRevue);
			req.setParameter(3, fin );
			req.setParameter(4, nbDocs);
		}else if(debut != null) {
			str = "SELECT count(da.doc_id) nb,da.doc_id FROM Transaction t, DocsAchetes da, Document d" + 
					" where t.etat = ? and t.reference = da.reference and da.doc_id = d.id and d.id_revue = ? "+
					" and CAST(date_achat AS DATE) >= ?"+
					" GROUP by da.doc_id " + 
					" order by nb desc " + 
					" LIMIT ?" ;
			
			req = em.createNativeQuery(str);
			req.setParameter(1, Etat.TERMINE.name());
			req.setParameter(2, idRevue);
			req.setParameter(3, debut );
			req.setParameter(4, nbDocs);
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
