package beans;

import java.io.Serializable;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

import dao.DAOException;
import dao.DocumentDao;
import dao.EditeurDao;
import dao.RevueDao;
import entities.Document;
import entities.Revue;

@Named
@RequestScoped
public class RequestBean implements Serializable{
	private static final long serialVersionUID = 1L;
	private final String MODULE = RequestBean.class.getName();
	@EJB
	private RevueDao revueDao;
	@EJB
	private EditeurDao editDao;
	@EJB
	private DocumentDao docDao;

	//trouver à laquelle appartient un doc
	public Revue trouverRevue(long idDoc) {
		Revue rev = new Revue();
		try {
			Document doc = docDao.trouver(idDoc);
			rev = revueDao.trouver(doc.getIdRevue().intValue());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return rev;
	}
	public Document trouverDoc(long idDoc) {
		Document doc = new Document();
		try {
			doc = docDao.trouver(idDoc);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return doc;
	}
}
