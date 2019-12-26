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
import entities.Token;

@Stateless
public class TokenDao {

	@PersistenceContext(unitName = "distdocs_PU")
	private EntityManager em;
	private final String MODULE = TokenDao.class.getName();
	
	// Store Token
	public void creer(Token token) throws DAOException{
		try {
			em.persist(token);
		} catch (Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
			throw new DAOException(e);
		}
	}
	
	public String getLatestToken() {
	List<Token> liste= new ArrayList<>();
		Query request = em.createQuery("select t from Token t order by t.dateJour DESC");
		try {
			 liste = request.getResultList();
		}catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		if(liste.size()==0)
			return "";
		else
			return liste.get(0).getToken();
	}
}
