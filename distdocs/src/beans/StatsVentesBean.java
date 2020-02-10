package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
import entities.DocType;
import entities.Editeur;
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
	//stats de docs vendus par client et par type de doc
	private BarChartModel daByUserByDoctype;
	//chiffre d'affaires
	private BarChartModel caBar;

	private java.util.Date dateDebut;
	private java.util.Date dateFin;
	private String nbCl = "10";
	private String editeur;
	private String docType;
	private String indicateur="CA";
	
	
	public String getIndicateur() {
		return indicateur;
	}
	public void setIndicateur(String indicateur) {
		System.out.println("indicateur "+indicateur);
		this.indicateur = indicateur;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
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
//		generateStats();
		analyser();
	}
	
	public BarChartModel getCaBar() {
		return caBar;
	}
	public BarChartModel getDaByUserByDoctype() {
		return daByUserByDoctype;
	}
	public PieChartModel getDaByUser() {
		return daByUser;
	}
	public BarChartModel getDocSoldByPublisher() {
		return docSoldByPublisher;
	}

	public void generateStats() {
		int nb = nbCl != null && !nbCl.isEmpty() ? Integer.parseInt(nbCl) : 10;

		//createDaByUser(nb);
		createDocsSoldByPublisher();
		chiffreAffaires();
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
			liste = statdao.nbDocsAchetesParClientParEditeur(debut, fin, editeurId);
		}else if(user != null && user.getUserType().equals(UserType.EDITEUR.name())){
			liste = statdao.nbDocsAchetesParClientParEditeur(debut, fin, user.getId());
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
	private void createDaByUserByDoctype(int nbClient) {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		List<Object[]> liste = statdao.nbDoctypeParClient(debut, fin, editeurId);
		System.out.println("size daByUserByDoctype = "+liste.size());

		daByUserByDoctype = new BarChartModel();

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

		daByUserByDoctype.addSeries(vendus);
		daByUserByDoctype.setAnimate(true);

		daByUserByDoctype.setTitle("Ventes par éditeur");
		daByUserByDoctype.setLegendPosition("ne");

		Axis xAxis = daByUserByDoctype.getAxis(AxisType.X);
		xAxis.setLabel("Editeur");

		Axis yAxis = daByUserByDoctype.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de documents");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbDocsVendus(debut, fin));
	}
	private void createDocsSoldByPublisher() {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		List<Object[]> liste = statdao.nbDocsVendusParEditeur(debut, fin,editeurId, docType);
		System.out.println("size docSoldByPublisher = "+liste.size());

		docSoldByPublisher = new BarChartModel();

//		ChartSeries vendus = new ChartSeries();
//		vendus.setLabel("Ventes abouties");
//		// vendus.setLabel(label);
//		int i=0;
//		for(Object[] obj : liste) {
//			vendus.set(editDao.trouver((Integer)obj[1]).getMaisonEdition()+"", (Long)obj[0]);
//			i++;
//			if(i>nbClient)
//				break;
//		}

		docSoldByPublisher.addSeries(setSeries(DocType.JOURNAL.name(), DocType.JOURNAL.name(), liste));
		docSoldByPublisher.addSeries(setSeries(DocType.MAGAZINE.name(), DocType.MAGAZINE.name(), liste));
		docSoldByPublisher.addSeries(setSeries(DocType.LIVRE.name(), DocType.LIVRE.name(), liste));
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
	public void chiffreAffaires() {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		System.out.println("debut = "+debut+" fin = "+fin+" editeurId = "+editeurId+" docType = "+docType);
		List<Object[]> liste = statdao.chiffreAffaires(debut, fin, editeurId, docType);
		
		
		caBar = new BarChartModel();
		
		caBar.addSeries(setSeries(DocType.JOURNAL.name(), DocType.JOURNAL.name(), liste));
		caBar.addSeries(setSeries(DocType.MAGAZINE.name(), DocType.MAGAZINE.name(), liste));
		caBar.addSeries(setSeries(DocType.LIVRE.name(), DocType.LIVRE.name(), liste));
		
		caBar.setAnimate(true);

		caBar.setTitle("Chiffres d'affaires par éditeur");
		caBar.setLegendPosition("ne");

		Axis xAxis = caBar.getAxis(AxisType.X);
		xAxis.setLabel("Editeur");

		Axis yAxis = caBar.getAxis(AxisType.Y);
		yAxis.setLabel("Chiffre d'affaires en FCFA");
		yAxis.setMin(0);
		double m = statdao.caSurUnePeriode(debut, fin);
		System.out.println("montant "+m);
		yAxis.setMax(m);
	}
	private ChartSeries setSeries(String docType,String label,List<Object[]> liste) {
		ChartSeries series = new ChartSeries();
		series.setLabel(label);
		
		 Map<Long,Editeur> editeurs = editDao.listerEditeur();
		 System.out.println("map size1 = "+editeurs.size()+" docType = "+docType);
		
		 int nbDocs = 0;
		for(Object[] obj : liste) {
			if(obj[2].toString().equals(docType) )  {
				
				series.set(editDao.trouver((Integer)obj[1]).getMaisonEdition(), (Number)obj[0]);
				//remove publishers that hava 'doctype' documents
				editeurs.remove(Long.valueOf(((Integer)obj[1]).longValue()));
				System.out.println("docType "+docType+" EDITEUR = "+obj[1] +" montant = "+obj[0]);
				nbDocs++;
			}
		}
			
		System.out.println("map size2 = "+editeurs.size());
		//set 0 for publishers that have not sold 'doctype' documents
		if(editeur == null || editeur.isEmpty())
			editeurs.forEach((k,v)->series.set(v.getMaisonEdition(), 0));
		else if(nbDocs==0) {
			series.set(editDao.trouver((Integer.parseInt(editeur))).getMaisonEdition(), 0);
		}
		
		return series;
	}
	public void analyser() {
		System.out.println("indicateur = "+indicateur);
		if(indicateur.equals("CA")) {
			chiffreAffaires();
			redirect();
		}else {
			createDocsSoldByPublisher();
			redirect();
		}
	}
}
