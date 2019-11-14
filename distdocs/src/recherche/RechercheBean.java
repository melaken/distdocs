package recherche;

import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;

import org.apache.lucene.document.Document;
import org.primefaces.PrimeFaces;

import beans.Constante;
import dao.DAOException;
import dao.DocumentDao;

@Named
@SessionScoped
public class RechercheBean implements Serializable{
	
	private static final long serialVersionUID = 1L;
	final String MODULE =	RechercheBean.class.getName();
	private String chaine;
	@EJB
	DocumentDao docDao;
	List<entities.Document> results;
	
//	public RechercheBean() {
//		results = new ArrayList<>();
//	}
	
	public String getChaine() {
		return chaine;
	}
	public void setChaine(String chaine) {
		this.chaine = chaine;
	}
	public List<entities.Document> getResults() {
		System.out.println("get results.size "+results.size());
		return results;
	}
	public void setResults(List<entities.Document> results) {
		System.out.println("set results.size "+results.size());
		this.results = results;
	}
	public List<entities.Document> mainSearch(String text,DocumentDao dao) throws IndexException,IOException,DAOException{
		List<Document> liste = new ArrayList<>();
		List<entities.Document> res = new ArrayList<>();
		
			if(text != null && !text.isEmpty()) {
				liste = LuceneReadIndexFromFile.rechercher(text);
				for(Document d : liste) {
					entities.Document doc = dao.trouver(Long.parseLong(d.get("fileName")));
					res.add(doc);
				}
			}
			return res;
	}
	//recherche dans les docs existants
	public void search() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		//ExternalContext exc = facesContext.getExternalContext();
		try {
			this.results = mainSearch(this.chaine,this.docDao);
			System.out.println("before redirect "+results.size());
			System.out.println("after redirect "+results.size());
			Constante.redirect(facesContext, Constante.SEARCH, MODULE);
		} catch (IndexException e) {
			System.out.println("Erreur lors de la recherche");
			e.printStackTrace();
			showErrorMessage();
		}catch (NumberFormatException e) {
			System.out.println("NumberFormatException");
			e.printStackTrace();
		} catch (DAOException e) {
			System.out.println("daoException");
			e.printStackTrace();
		}catch(Throwable e) {
			System.out.println("exception in redirect ");
			e.printStackTrace();
		}
	}
	private void showErrorMessage() {
		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR," ", "Erreurs lors de la recherche !!!");
        PrimeFaces.current().dialog().showMessageDynamic(message);
	}
}