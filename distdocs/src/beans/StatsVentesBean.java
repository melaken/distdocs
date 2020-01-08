package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpSession;

import org.primefaces.model.chart.Axis;
import org.primefaces.model.chart.AxisType;
import org.primefaces.model.chart.BarChartModel;
import org.primefaces.model.chart.ChartSeries;
import org.primefaces.model.chart.PieChartModel;

import dao.DocumentDao;
import dao.EditeurDao;
import dao.StatisticsDao;
import dao.UtilisateurDao;
import entities.UserType;
import entities.Utilisateur;

@Named
@SessionScoped
public class StatsVentesBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = StatsVentesBean.class.getName();
	@EJB
	private StatisticsDao statdao;
	@EJB
	private UtilisateurDao userDao;
	@EJB
	private EditeurDao editDao;
	@EJB 
	DocumentDao docDao;

	//stats de docs achetés par utilisateur et éventuellement par éditeur
	private PieChartModel daByUser;
	//stats de docs vendus par éditeur
	private BarChartModel docSoldByPublisher;

	private java.util.Date dateDebut;
	private java.util.Date dateFin;
	private String nbCl = "10";
	private String editeur;

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

	public String getNbCl() {
		return nbCl;
	}
	public void setNbCl(String nbCl) {
		this.nbCl = nbCl;
	}

	public String getEditeur() {
		return editeur;
	}
	public void setEditeur(String editeur) {
		this.editeur = editeur;
	}
	@PostConstruct
	public void init() {

		generateStats();
	}

	public PieChartModel getDaByUser() {
		return daByUser;
	}
	public BarChartModel getDocSoldByPublisher() {
		return docSoldByPublisher;
	}

	public void generateStats() {
		int nb = nbCl != null && !nbCl.isEmpty() ? Integer.parseInt(nbCl) : 10;

		createDaByUser(nb);
		createDocsSoldByPublisher(nb);
		redirect();
	}
	private void redirect() {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, Constante.STATS+"?i=1"+"&faces-redirect=true", MODULE);
	}
	private Utilisateur getCurrentUser() {
		ExternalContext  exterNalContext = FacesContext.getCurrentInstance().getExternalContext();
		HttpSession session = (HttpSession) exterNalContext.getSession(true);
		Object att = session.getAttribute("user");
		return att != null ? (Utilisateur)att : null;
	}
	private void createDaByUser(int nbClient) {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		Utilisateur user = getCurrentUser();
		List<Object[]> liste = new ArrayList<>();
		
		if(user != null && user.getUserType().equals(UserType.ADMIN.name())) {
			liste = statdao.nbDocsAchetesParClientParEditeur(debut, fin, editeurId, nbClient);
		}else if(user != null && user.getUserType().equals(UserType.EDITEUR.name())){
			liste = statdao.nbDocsAchetesParClientParEditeur(debut, fin, user.getId(), nbClient);
		}
		daByUser = new PieChartModel();
		System.out.println("size daByUser = "+liste.size());

		int i = 0;
		for(Object[] obj : liste) {
			daByUser.set(userDao.trouver((Integer)obj[1]).getEmail()+"",(Long)obj[0]);
			i++;
			if(i>nbClient)
				break;
		}

		daByUser.setTitle("Statistiques des achats par client");
		daByUser.setLegendPosition("w");
		daByUser.setShadow(false);
		daByUser.setShowDataLabels(true);

	}
	private void createDocsSoldByPublisher(int nbClient) {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		List<Object[]> liste = statdao.nbDocsVendusParEditeur(debut, fin);
		System.out.println("size docSoldByPublisher = "+liste.size());

		docSoldByPublisher = new BarChartModel();

		ChartSeries vendus = new ChartSeries();
		vendus.setLabel("Ventes abouties");
		// vendus.setLabel(label);
		int i=0;
		for(Object[] obj : liste) {
			vendus.set(editDao.trouver((Integer)obj[1]).getMaisonEdition()+"", (Long)obj[0]);
			i++;
			if(i>nbClient)
				break;
		}

		docSoldByPublisher.addSeries(vendus);
		docSoldByPublisher.setAnimate(true);

		docSoldByPublisher.setTitle("Ventes par éditeur");
		docSoldByPublisher.setLegendPosition("ne");

		Axis xAxis = docSoldByPublisher.getAxis(AxisType.X);
		xAxis.setLabel("Editeur");

		Axis yAxis = docSoldByPublisher.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de documents");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbDocsVendus(debut, fin));
	}

}
