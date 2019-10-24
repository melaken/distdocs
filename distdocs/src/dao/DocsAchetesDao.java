package dao;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import entities.DocsAchetes;
import entities.Document;

@Stateless
public class DocsAchetesDao {

	private final String MODULE = DocsAchetesDao.class.getName();
	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	
	
	public List<DocsAchetes> lister(){
		List<DocsAchetes> liste= new ArrayList<>();
		Query request = em.createQuery("select d from DocsAchetes d");
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	public List<DocsAchetes> docAchetesParclient(long client_id) {
		List<DocsAchetes> liste= new ArrayList<>();
		System.out.println("Dans docAchetesParclient");
		Query requete = em.createQuery("SELECT d FROM DocsAchetes d WHERE d.clientId = :id");
		requete.setParameter("id", client_id);
		try {
			liste = requete.getResultList();
		} catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		return liste;
	}
	public String trouverPremiereCouverture(long doc_id) {
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
		}
		System.out.println("cover "+cover);
		return cover;
	}
}
