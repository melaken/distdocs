package beans;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import dao.EditeurDao;
import entities.Editeur;

@Named
@SessionScoped
public class StaticticsBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = StaticticsBean.class.getName();

	private Map<String,String> nbClients;
	private List<Editeur> editeurs ;;
	
	@EJB
	private EditeurDao editDao;
	
	@PostConstruct
	public void init() {
		nbClients  = new HashMap<String, String>();
		nbClients.put("5", "5");
		nbClients.put("10", "10");
		nbClients.put("15", "15");
		
		editeurs= editDao.lister();
	}

	public Map<String, String> getNbClients() {
		return nbClients;
	}
	public void setNbClients(Map<String, String> nbClients) {
		this.nbClients = nbClients;
	}
	public List<Editeur> getEditeurs() {
		return editeurs;
	}

	public void setEditeurs(List<Editeur> editeurs) {
		this.editeurs = editeurs;
	}

}
