package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpSession;

import org.primefaces.PrimeFaces;

import dao.DocumentDao;
import dao.EditeurDao;
import dao.RevueDao;
import dao.StatsDao;
import entities.Document;
import entities.Revue;
import entities.UserType;
import entities.Utilisateur;

@Named
@SessionScoped
public class StatsDocsBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = StatsDocsBean.class.getName();
	@EJB
	private StatsDao statDao;
	@EJB
	private RevueDao revueDao;
	@EJB
	private EditeurDao editDao;
	@EJB
	private DocumentDao docDao;

	private java.util.Date dateDebut;
	private java.util.Date dateFin;
	private String nbDocs = "10";
	private String indicateur="CA";
	private String numeroEdition;
	private List<Object[]> liste;
	private String revue;
	private List<Revue>  allRevues;
	private long totalNbv;
	private float totalMontant;

	@PostConstruct
	public void init() {
		liste = new ArrayList<>();
		Utilisateur user = getCurrentUser();
		if(user.getUserType().equals(UserType.ADMIN.name()))
			allRevues = revueDao.lister();
		else if(user.getUserType().equals(UserType.EDITEUR.name()))
			allRevues = revueDao.lister(user.getId());
	}
	public java.util.Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(java.util.Date dateDebut) {
		this.dateDebut = dateDebut;
	}
	public java.util.Date getDateFin() {
		return dateFin;
	}
	public void setDateFin(java.util.Date dateFin) {
		this.dateFin = dateFin;
	}
	public String getNbDocs() {
		return nbDocs;
	}
	public void setNbDocs(String nbDocs) {
		this.nbDocs = nbDocs;
	}
	public String getIndicateur() {
		return indicateur;
	}
	public void setIndicateur(String indicateur) {
		this.indicateur = indicateur;
	}
	public String getNumeroEdition() {
		return numeroEdition;
	}
	public void setNumeroEdition(String numeroEdition) {
		this.numeroEdition = numeroEdition;
	}
	public List<Object[]> getListe() {
		return liste;
	}
	public void setListe(List<Object[]> liste) {
		this.liste = liste;
	}
	public String getRevue() {
		return revue;
	}
	public void setRevue(String revue) {
		this.revue = revue;
	}
	public List<Revue> getAllRevues(){
		return allRevues;
	}
	public long getTotalNbv() {
		return totalNbv;
	}
	public float getTotalMontant() {
		return totalMontant;
	}
	public void generateStats() {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		if(revue != null && !revue.isEmpty()) {
			if(numeroEdition != null && !numeroEdition.isEmpty()) {
				liste = statDao.oneDocStats(debut, fin,Long.parseLong(revue), numeroEdition.trim());
				if(liste.size() != 0) {
					System.out.println("liste zero "+Arrays.toString(liste.get(0)));
					if((Long)liste.get(0)[0] == new Long(0)) {
						try {
							Object[] obj = {new Long(0),docDao.trouver(numeroEdition).getId()};
							liste = new ArrayList<>();
							liste.add(obj);
						}catch(Exception ex) {
							Logger.getLogger(MODULE).log(Level.SEVERE, ex.getMessage(), ex);
							ex.printStackTrace();
						}
					}
				}
			}else {
				long nb = Long.parseLong(nbDocs);
				liste = statDao.docStats(debut, fin,Long.parseLong(revue), nb);
			}
			fillDataTable();
		}
		else {
			if(numeroEdition != null && !numeroEdition.isEmpty()) {
				FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "Veuillez sélectionner la revue concernée.");
				PrimeFaces.current().dialog().showMessageDynamic(message);
			}else {
				long nb = Long.parseLong(nbDocs);
				liste = statDao.docStats(debut, fin, nb);
				fillDataTable();
			}

		}
		System.out.println("statsDocsBean liste size = "+liste.size()); 
	}
	private void fillDataTable() {
		totalMontant = 0;
		totalNbv = 0;
		try {
			List<Object[]> lt= new ArrayList<>();
			for(Object[] obj : liste) {
				Document doc = docDao.trouver(Long.parseLong(obj[1]+""));
				float montant = doc.getPrix() * Float.parseFloat(obj[0]+"");
				Object[] at = {revueDao.trouver(doc.getIdRevue().intValue()).getNom(),doc.getNumeroEdition(),
						doc.getPremiereCouverture(), obj[0], montant+"	FCFA"};
				lt.add(at);
				totalMontant += montant;
				totalNbv += Long.parseLong(obj[0]+"");
			}
			liste = lt;

		}catch(Exception ex) {
			Logger.getLogger(MODULE).log(Level.SEVERE, ex.getMessage(), ex);
			ex.printStackTrace();
		}

	}
	private Utilisateur getCurrentUser() {
		ExternalContext  exterNalContext = FacesContext.getCurrentInstance().getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(true);
		Object att = session.getAttribute("user");
		return att != null ? (Utilisateur)att : null;
	}
}
