package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;
import javax.inject.Named;
import javax.servlet.http.HttpSession;

import org.primefaces.model.chart.Axis;
import org.primefaces.model.chart.AxisType;
import org.primefaces.model.chart.BarChartModel;
import org.primefaces.model.chart.ChartSeries;
import org.primefaces.model.chart.PieChartModel;

import dao.DocumentDao;
import dao.EditeurDao;
import dao.RevueDao;
import dao.StatisticsDao;
import dao.UtilisateurDao;
import entities.DocType;
import entities.Editeur;
import entities.Revue;
import entities.UserType;
import entities.Utilisateur;

@Named
@SessionScoped
public class StatsVentesBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private Map<String,Utilisateur> usersWithDocType;
	private final String MODULE = StatsVentesBean.class.getName();
	@EJB
	private StatisticsDao statdao;
	@EJB
	private UtilisateurDao userDao;
	@EJB
	private EditeurDao editDao;
	@EJB 
	private DocumentDao docDao;
	@EJB
	private RevueDao revueDao;

	//stats de docs achetés par utilisateur et éventuellement par éditeur
	private PieChartModel daByUser;
	//stats de docs vendus par éditeur
	private BarChartModel docSoldByPublisher;
	//stats de docs vendus par client et par type de doc
	private BarChartModel daByUserByDoctype;
	//chiffre d'affaires
	private BarChartModel caBar;
	//somme CA par éditeur
	private PieChartModel caPie;
	//somme nb doc vendus par éditeur
	private PieChartModel docSoldByPublisherPie;
	//somme CA par éditeur
	private PieChartModel caRevuePie;
	//somme nb doc vendus par éditeur
	private PieChartModel revueSoldByPublisherPie;

	private java.util.Date dateDebut;
	private java.util.Date dateFin;
	private String nbCl = "10";
	private String editeur;
	private String docType;
	private String indicateur="CA";
	private List<Revue> revues;
	private Long selectedRevue;
	private List<Object[]> caParRevue;
	private List<Object[]> nbvParRevue;
	private List<Object[]> caParDocTypeParEditeur;
	private List<Object[]> nbvParDocTypeParEditeur;
	private Long totalNbvParEditeur;
	private double totalCaParEditeur;
	private Long totalNbvRevueParEditeur;
	private double totalCaRevueParEditeur;
	private List<Object[]> tabAdminPie;
	private List<Object[]> tabAdminBar;
	private double totalCAPie;
	private double totalCABar;
	private long totalNBVPie;
	private long totalNBVBar;
	private Object[][] bigArray;
	private Number[] totalDocType;

	public Number[] getTotalDocType() {
		return totalDocType;
	}
	public Object[][] getBigArray() {
		return bigArray;
	}
	public long getTotalNBVPie() {
		return totalNBVPie;
	}
	public long getTotalNBVBar() {
		return totalNBVBar;
	}
	public double getTotalCAPie() {
		return totalCAPie;
	}
	public double getTotalCABar() {
		return totalCABar;
	}
	public List<Object[]> getTabAdminPie(){
		return tabAdminPie;
	}
	public List<Object[]> getTabAdminBar(){
		return tabAdminBar;
	}
	public double getTotalCaRevueParEditeur() {
		return totalCaRevueParEditeur;
	}
	public Long getTotalNbvRevueParEditeur() {
		return totalNbvRevueParEditeur;
	}
	public PieChartModel getRevueSoldByPublisherPie() {
		return revueSoldByPublisherPie;
	}
	public PieChartModel getCaRevuePie() {
		return caRevuePie;
	}
	public double getTotalCaParEditeur() {
		return totalCaParEditeur;
	}
	public Long getTotalNbvParEditeur() {
		return totalNbvParEditeur;
	}
	public List<Object[]> getCaParRevue(){
		return caParRevue;
	}
	public List<Object[]> getNbvParRevue(){
		return nbvParRevue;
	}
	public List<Object[]> getNbvParDocTypeParEditeur(){
		return nbvParDocTypeParEditeur;
	}
	public List<Object[]> getCaParDocTypeParEditeur(){
		return caParDocTypeParEditeur;
	}
	public Long getSelectedRevue() {
		return selectedRevue;
	}
	public void setSelectedRevue(Long selectedRevue) {
		this.selectedRevue = selectedRevue;
	}
	public List<Revue> getRevues() {
		return revues;
	}
	public void setRevues(List<Revue> revues) {
		this.revues = revues;
	}
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
		int nb = nbCl != null && !nbCl.isEmpty() ? Integer.parseInt(nbCl) : 10;
		createDaByUser(nb);
		createDaByUserByDoctype(nb);

		listerRevues();
		analyser();
	}
	public PieChartModel getCaPie() {
		return caPie;
	}
	public PieChartModel getDocSoldByPublisherPie() {
		return docSoldByPublisherPie;
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

		createDaByUser(nb);
		createDaByUserByDoctype(nb);
		//		createDocsSoldByPublisher();
		//		chiffreAffaires();
		redirect(Constante.statsVentes);
	}
	private void listerRevues() {
		Utilisateur user = getCurrentUser();
		if(user != null && !user.getUserType().equals(UserType.CLIENT.name())) {
			revues = revueDao.lister();
			if(user.getUserType().equals(UserType.EDITEUR.name()))
				revues = revues.parallelStream().filter(r -> r.getEditeur()==user.getId()).collect(Collectors.toList());
			else if(user.getUserType().equals(UserType.ADMIN.name())){
				if(docType!= null && !docType.isEmpty())
					revues = revues.parallelStream().filter(r -> r.getDocType().equals(docType)).collect(Collectors.toList());
				if(editeur != null)
					revues = revues.parallelStream().filter(r -> r.getEditeur().equals(Long.parseLong(editeur)))
					.collect(Collectors.toList());

			}
		}
	}
	private void redirect(String chemin) {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, chemin+"?faces-redirect=true", MODULE);
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

		if(user != null && user.getUserType().equals(UserType.EDITEUR.name())){
			editeurId = user.getId();
		}
		daByUser = new PieChartModel();
		System.out.println("size daByUser = "+liste.size());

		int i = 0;
		if(docType != null && !docType.isEmpty()) {
			liste = statdao.nbDoctypeParClient(debut, fin, editeurId);
			liste = liste.parallelStream().filter(e ->e[2].toString().equals(docType)).collect(Collectors.toList());
		}else {
			liste = statdao.nbDocsAchetesParClientParEditeur(debut, fin, editeurId);
		}
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
		usersWithDocType = new HashMap<String,Utilisateur>();
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		Utilisateur user = getCurrentUser();
		List<Object[]> liste = new ArrayList<>();

		if(user != null && user.getUserType().equals(UserType.ADMIN.name())) {
			liste = statdao.nbDoctypeParClient(debut, fin, editeurId);
		}else if(user != null && user.getUserType().equals(UserType.EDITEUR.name())){
			liste = statdao.nbDoctypeParClient(debut, fin, user.getId());
		}
		System.out.println("size daByUserByDoctype = "+liste.size());

		daByUserByDoctype = new BarChartModel();

		if(docType != null && !docType.isEmpty()) {
			liste = liste.parallelStream().filter(e ->e[2].toString().equals(docType)).collect(Collectors.toList());
			daByUserByDoctype.addSeries(setSeriesForUsersPerDocType(docType, docType, liste));
		}else {
			for(Object[] obj : liste) {
				String email = userDao.trouver((Integer)obj[1]).getEmail();
				if(!usersWithDocType.containsKey(email))
					usersWithDocType.put(email, userDao.trouver(email));
			}
			daByUserByDoctype.addSeries(setSeriesForUsersPerDocType(DocType.JOURNAL.name(), DocType.JOURNAL.name(), liste));
			daByUserByDoctype.addSeries(setSeriesForUsersPerDocType(DocType.MAGAZINE.name(), DocType.MAGAZINE.name(), liste));
			daByUserByDoctype.addSeries(setSeriesForUsersPerDocType(DocType.LIVRE.name(), DocType.LIVRE.name(), liste));
		}
		daByUserByDoctype.setAnimate(true);

		daByUserByDoctype.setTitle("Ventes par client et par type de document");
		daByUserByDoctype.setLegendPosition("ne");

		Axis xAxis = daByUserByDoctype.getAxis(AxisType.X);
		xAxis.setLabel("Client");

		Axis yAxis = daByUserByDoctype.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de documents");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbDocsVendus(debut, fin,editeurId,docType));
	}
	private ChartSeries setSeriesForUsersPerDocType(String docType,String label,List<Object[]> liste) {
		Map<String,Utilisateur> copy = usersWithDocType;
		ChartSeries series = new ChartSeries();
		series.setLabel(label);

		System.out.println("setSeriesForUsersPerDocType docType = "+docType+", copy.size = "+copy.size());
		for(Object[] obj : liste) {
			if(obj[2].toString().equals(docType) )  {
				String email = userDao.trouver((Integer)obj[1]).getEmail();
				series.set(email, (Number)obj[0]);
				System.out.println("docType "+docType+" user = "+obj[1] +" montant = "+obj[0]);
				copy.remove(email);
			}
		}
		System.out.println("copy.size = "+copy.size()+" usersWithDocType = "+usersWithDocType.size());
		copy.forEach((k,v)->{
			System.out.println("copy : doctype = "+docType+" email = "+k);
			series.set(k,0);});

		return series;
	}
	private void createDocsSoldByPublisher() {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		List<Object[]> liste = statdao.nbDocsVendusParEditeur(debut, fin,editeurId, docType);
		System.out.println("size docSoldByPublisher = "+liste.size());

		docSoldByPublisher = new BarChartModel();

		docSoldByPublisher.addSeries(setSeries(DocType.JOURNAL.name(), DocType.JOURNAL.name(), liste));
		docSoldByPublisher.addSeries(setSeries(DocType.MAGAZINE.name(), DocType.MAGAZINE.name(), liste));
		docSoldByPublisher.addSeries(setSeries(DocType.LIVRE.name(), DocType.LIVRE.name(), liste));
		docSoldByPublisher.setAnimate(true);

		docSoldByPublisher.setTitle("Ventes par éditeur et par type de document");
		docSoldByPublisher.setLegendPosition("ne");

		Axis xAxis = docSoldByPublisher.getAxis(AxisType.X);
		xAxis.setLabel("Editeur");

		Axis yAxis = docSoldByPublisher.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de documents");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbDocsVendus(debut, fin,editeurId, docType));
		
		ArrayList<Integer> editeurs= new ArrayList<>();
		for(Object[] obj : liste) {
			Integer ed = (Integer)obj[1];
			if(!editeurs.contains(ed)) {
				editeurs.add(ed);
			}
		}
		int editSize = editeurs.size();
		System.out.println("editeurs.size() "+editSize);
		bigArray =  new Object[editeurs.size()][5];
		int i=0;
		for(Integer ed : editeurs) {
			long total = 0;
			bigArray[i][0] = ed;
			for(Object[] obj : liste) {
				if((Integer)obj[1] == ed) {
					if(obj[2].toString().equals(DocType.JOURNAL.name())) {
						bigArray[i][1] =  obj[0] ;
						total += (long)obj[0];
					}
					if(obj[2].toString().equals(DocType.LIVRE.name())) {
						bigArray[i][2] = obj[0];
						total += (long)obj[0];
					}
					if(obj[2].toString().equals(DocType.MAGAZINE.name())) {
						bigArray[i][3] = obj[0] ;
						total += (long)obj[0];
					}
				}
			}
			bigArray[i][4] = total;
			i++;
		}
		 totalDocType = new Number[3];

		//somme doctype 1:journal; 2:Livre; 3:Mag
		for(int k=1;k<4;k++) {
			long total = 0;
			for(int j=0;j<editSize;j++) {
				total += bigArray[j][k] != null ? (long)bigArray[j][k] : 0;
			}
			totalDocType[k-1] = total;
		}
		System.out.println("totalDocType "+Arrays.toString(totalDocType));
	}
	private void chiffreAffaires() {
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		System.out.println("debut = "+debut+" fin = "+fin+" editeurId = "+editeurId+" docType = "+docType);
		List<Object[]> liste = statdao.chiffreAffaires(debut, fin, editeurId, docType);
		tabAdminBar = liste;

		caBar = new BarChartModel();

		caBar.addSeries(setSeries(DocType.JOURNAL.name(), DocType.JOURNAL.name(), liste));
		caBar.addSeries(setSeries(DocType.MAGAZINE.name(), DocType.MAGAZINE.name(), liste));
		caBar.addSeries(setSeries(DocType.LIVRE.name(), DocType.LIVRE.name(), liste));

		caBar.setAnimate(true);
		//caBar.getSeries().get(0).getData();

		caBar.setTitle("Chiffres d'affaires par éditeur et par type de document");
		caBar.setLegendPosition("ne");

		Axis xAxis = caBar.getAxis(AxisType.X);
		xAxis.setLabel("Editeur");

		Axis yAxis = caBar.getAxis(AxisType.Y);
		yAxis.setLabel("Chiffre d'affaires en FCFA");
		yAxis.setMin(0);
		double m = statdao.caSurUnePeriode(debut, fin,editeurId,docType);
		System.out.println("montant "+m);
		yAxis.setMax(m);

		ArrayList<Integer> editeurs= new ArrayList<>();
		for(Object[] obj : liste) {
			Integer ed = (Integer)obj[1];
			if(!editeurs.contains(ed)) {
				editeurs.add(ed);
			}
		}
		int editSize = editeurs.size();
		System.out.println("editeurs.size() "+editSize);
		bigArray =  new Object[editeurs.size()][5];
		int i=0;
		for(Integer ed : editeurs) {
			double total = 0;
			bigArray[i][0] = ed;
			for(Object[] obj : liste) {
				if((Integer)obj[1] == ed) {
					if(obj[2].toString().equals(DocType.JOURNAL.name())) {
						bigArray[i][1] =  obj[0] ;
						total += (double)obj[0];
					}
					if(obj[2].toString().equals(DocType.LIVRE.name())) {
						bigArray[i][2] = obj[0];
						total += (double)obj[0];
					}
					if(obj[2].toString().equals(DocType.MAGAZINE.name())) {
						bigArray[i][3] = obj[0] ;
						total += (double)obj[0];
					}
				}
			}
			bigArray[i][4] = total;
			i++;
		}
		 totalDocType = new Double[3];

		//somme doctype 1:journal; 2:Livre; 3:Mag
		for(int k=1;k<4;k++) {
			double total = 0;
			for(int j=0;j<editSize;j++) {
				total += bigArray[j][k] != null ? (double)bigArray[j][k] : 0;
			}
			totalDocType[k-1] = total;
		}
		System.out.println("totalDocType "+Arrays.toString(totalDocType));
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
				//remove publishers that have'doctype' documents
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
	private void caPie(String label) {
		caPie.setTitle(label);
		caPie.setLegendPosition("w");
		caPie.setShadow(false);
		caPie.setShowDataLabels(true);

	}
	private void docSoldByPublisherPie(String label) {
		docSoldByPublisherPie.setTitle(label);
		docSoldByPublisherPie.setLegendPosition("w");
		docSoldByPublisherPie.setShadow(false);
		docSoldByPublisherPie.setShowDataLabels(true);

	}
	private void admin_ca_stats() {
		caBar = new BarChartModel();
		caPie = new PieChartModel();

		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		System.out.println("debut = "+debut+" fin = "+fin+" editeurId = "+editeurId+" docType = "+docType);
		List<Object[]> liste = new ArrayList<>();
		String label="";

		if(selectedRevue != null) {
			liste = statdao.chiffre_affaires(debut, fin);
			//CA de la revue sélectionnée
			tabAdminPie = liste.parallelStream().filter(r->Long.parseLong(r[2].toString())==selectedRevue)
					.collect(Collectors.toList());
			System.out.println("tabAdminPie size = "+tabAdminPie.size()+" selectedRevue = "+selectedRevue);
		}else {
			if(docType !=null && editeurId != null ) {
				//liste des revues de l'éditeur dont le type 'docType' est selectionné
				liste = statdao.chiffre_affaires(debut, fin,editeurId,docType);
				tabAdminPie = liste;
				double total = 0;
				for(Object[] obj : liste) {
					caPie.set(revueDao.trouver((Integer)obj[1]).getNom(), (Number)obj[0]);
					total += (double)obj[0];
				}
				label="Chiffre d'affaires des revues de l'éditeur '"+editDao.trouver(editeurId.intValue()).getMaisonEdition()
						+"' pour le type de contenu '"+docType+"'";
				caPie(label);
				totalCAPie = total;
			}else if(docType !=null && editeurId == null ) {
				//CA des éditeurs ayant vendus le type 'docType' au cours de cette période
				liste = statdao.chiffre_affaires(debut, fin,docType);
				tabAdminPie = liste;
				double total = 0;
				for(Object[] obj : liste) {
					caPie.set(editDao.trouver(Integer.parseInt(obj[1].toString())).getMaisonEdition(), (Number)obj[0]);
					total += (double)obj[0];
				}
				label="Chiffre d'affaires des éditeurs ayant vendus le type de contenu '"+docType+"'";
				caPie(label);
				totalCAPie = total;
			}else if(docType ==null && editeurId != null ) {
				//CA des revues de l'éditeur sélectionné
				liste = statdao.chiffre_affaires(debut,fin,editeurId);
				tabAdminPie = liste;
				System.out.println("No6 editeurId = "+editeurId);
				double total = 0;
				for(Object[] obj : liste) {
					if(obj[1] != null) {
						caPie.set(revueDao.trouver(Integer.parseInt(obj[1].toString())).getNom(), (Number)obj[0]);
						total += (double)obj[0];
					}

				}
				label="Chiffre d'affaires de l'éditeur '"+editDao.trouver(editeurId.intValue()).getMaisonEdition()+"'"
						+" groupés par revues";
				caPie(label);
				totalCAPie = total;
			}else if(docType ==null && editeurId == null ) {
				//			res = statdao.chiffreAffaires(debut, fin,null,null);
				liste = statdao.chiffreAffaires(debut, fin);
				double total = 0;
				for(Object[] obj : liste) {
					caPie.set(editDao.trouver((Integer)obj[1]).getMaisonEdition(), (Number)obj[0]);
					total += (double)obj[0];
				}
				label="Chiffres d'affaires par éditeur";
				chiffreAffaires();
				caPie(label);
				tabAdminPie = liste;
				totalCAPie = total;

			}
		}
	}
	private void admin_nbv_stats() {
		docSoldByPublisher = new BarChartModel();
		docSoldByPublisherPie = new PieChartModel();

		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Long editeurId = editeur != null && !editeur.isEmpty() ? Long.parseLong(editeur) : null;

		List<Object[]> liste = new ArrayList<>();
		String label="";
		
		if(selectedRevue != null) {
			liste = statdao.nbv(debut, fin);
			//nbv de la revue sélectionnée
			tabAdminPie = liste.parallelStream().filter(r->Long.parseLong(r[2].toString())==selectedRevue)
					.collect(Collectors.toList());
			System.out.println("tabAdminPie size = "+tabAdminPie.size()+" selectedRevue = "+selectedRevue);
		}else {
			if(docType !=null && editeurId != null ) {
				//liste des revues de l'éditeur dont le type 'docType' est selectionné
				liste = statdao.nbv(debut, fin,editeurId,docType);
				tabAdminPie = liste;
				long total = 0;
				for(Object[] obj : liste) {
					docSoldByPublisherPie.set(revueDao.trouver((Integer)obj[1]).getNom(), (Number)obj[0]);
					total += (long)obj[0];
				}
				label="Nombre de ventes des revues de l'éditeur '"+editDao.trouver(editeurId.intValue()).getMaisonEdition()
						+"' pour le type de contenu '"+docType+"'";
				docSoldByPublisherPie(label);
				totalNBVPie = total;
			}else if(docType !=null && editeurId == null ) {
				//nbv des éditeurs ayant vendus le type 'docType' au cours de cette période
				liste = statdao.nbv(debut, fin,docType);
				tabAdminPie = liste;
				long total = 0;
				for(Object[] obj : liste) {
					docSoldByPublisherPie.set(editDao.trouver(Integer.parseInt(obj[1].toString())).getMaisonEdition(), (Number)obj[0]);
					total += (long)obj[0];
				}
				label="Nombre de ventes des éditeurs ayant vendus le type de contenu '"+docType+"'";
				docSoldByPublisherPie(label);
				totalNBVPie = total;
			}else if(docType ==null && editeurId != null ) {
				//nbv des revues de l'éditeur sélectionné
				liste = statdao.nbv(debut,fin,editeurId);
				tabAdminPie = liste;
				System.out.println("No6 editeurId = "+editeurId);
				long total = 0;
				for(Object[] obj : liste) {
					if(obj[1] != null) {
						docSoldByPublisherPie.set(revueDao.trouver(Integer.parseInt(obj[1].toString())).getNom(), (Number)obj[0]);
						total += (long)obj[0];
					}

				}
				label="Nombre de ventes de l'éditeur '"+editDao.trouver(editeurId.intValue()).getMaisonEdition()+"'"
						+" groupés par revues";
				docSoldByPublisherPie(label);
				totalNBVPie = total;
			}else if(docType ==null && editeurId == null ) {
				liste = statdao.nbDocsVendusParEditeur(debut, fin);
				long total = 0;
				for(Object[] obj : liste) {
					docSoldByPublisherPie.set(editDao.trouver((Integer)obj[1]).getMaisonEdition(), (Number)obj[0]);
					total += (long)obj[0];
				}
				label="Chiffres d'affaires par éditeur";
				createDocsSoldByPublisher();
				docSoldByPublisherPie(label);
				tabAdminPie = liste;
				totalNBVPie = total;

			}
		}
	}
	public void analyser() {
		System.out.println("indicateur = "+indicateur);
		Utilisateur user = getCurrentUser();
		if(user !=null && !user.getUserType().equals(UserType.CLIENT.name())) {
			if(user.getUserType().equals(UserType.ADMIN.name())) {
				if(indicateur.equals("CA")) {
					admin_ca_stats();
					redirect(Constante.statsVentes1);
				}else {
					admin_nbv_stats();
					redirect(Constante.statsVentes1);
				}
			}else {
				if(indicateur.equals("CA")) {
					caPie_editeur();
					caRevuePie_editeur();
					redirect(Constante.statsVentes1);
				}else {
					docSoldByPublisherPie_editeur();
					revueSoldByPublisherPie_editeur();
					redirect(Constante.statsVentes1);
				}
			}
		}
	}
	private void caPie_editeur() {
		caPie = new PieChartModel();
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		Utilisateur user = getCurrentUser();
		if(user != null) {
			totalCaParEditeur = statdao.caSurUnePeriode(debut, fin,user.getId(),null);
			caParDocTypeParEditeur = statdao.chiffreAffaires(debut, fin, user.getId());
			for(Object[] obj : caParDocTypeParEditeur)
				caPie.set(obj[1]+"", (Number)obj[0]);

			caPie.setTitle("Chiffres d'affaires par type de contenu");
			caPie.setLegendPosition("w");
			caPie.setShadow(false);
			caPie.setShowDataLabels(true);
		}
	}
	private void docSoldByPublisherPie_editeur() {
		docSoldByPublisherPie = new PieChartModel();
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		Utilisateur user = getCurrentUser();
		if(user != null) {
			nbvParDocTypeParEditeur = statdao.nbDocsVendusParEditeur(debut, fin,user.getId());
			totalNbvParEditeur = statdao.nbDocsVendus(debut, fin,user.getId(), null);
			for(Object[] obj : nbvParDocTypeParEditeur) {
				docSoldByPublisherPie.set(obj[1]+"", (Number)obj[0]);
			}

			docSoldByPublisherPie.setTitle("Ventes par type de contenu");
			docSoldByPublisherPie.setLegendPosition("w");
			docSoldByPublisherPie.setShadow(false);
			docSoldByPublisherPie.setShowDataLabels(true);
		}
	}
	private void revueSoldByPublisherPie_editeur() {
		revueSoldByPublisherPie = new PieChartModel();
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;

		nbvParRevue = statdao.nb_ventes(debut, fin);
		System.out.println("in revueSoldByPublisherPie size = "+nbvParRevue.size());
		Utilisateur user = getCurrentUser();
		if(user != null) {
			totalNbvRevueParEditeur = statdao.nbDocsVendus(debut, fin,user.getId(), null) - 
					statdao.nbDocsVendus(debut, fin,user.getId(), DocType.LIVRE.name());
			nbvParRevue = nbvParRevue.parallelStream().filter(l ->((int)l[2])==user.getId()).collect(Collectors.toList()); 
			for(Object[] obj : nbvParRevue) {
				Revue rev = revueDao.trouver(Integer.parseInt(obj[1].toString()));
				revueSoldByPublisherPie.set(rev.getNom(), (Number)obj[0]);
			}

			revueSoldByPublisherPie.setTitle("Ventes par Révue");
			revueSoldByPublisherPie.setLegendPosition("w");
			revueSoldByPublisherPie.setShadow(false);
			revueSoldByPublisherPie.setShowDataLabels(true);
		}

	}
	private void caRevuePie_editeur() {
		caRevuePie = new PieChartModel();
		java.sql.Date debut = dateDebut != null ? new java.sql.Date(dateDebut.getTime()) : null;
		java.sql.Date fin = dateFin != null ? new java.sql.Date(dateFin.getTime()) : null;
		Utilisateur user = getCurrentUser();
		if(user != null) {
			caParRevue = statdao.ca_editeur(debut, fin, user.getId());
			totalCaRevueParEditeur = statdao.caSurUnePeriode(debut, fin,user.getId(),null) - 
					statdao.caSurUnePeriode(debut, fin,user.getId(),DocType.LIVRE.name());
			System.out.println("in caPie size = "+caParRevue.size());

			for(Object[] obj : caParRevue) {
				Revue rev = revueDao.trouver(Integer.parseInt(obj[1].toString()));
				caRevuePie.set(rev.getNom(), (Number)obj[0]);
			}

			caRevuePie.setTitle("Chiffres d'affaires par révue");
			caRevuePie.setLegendPosition("w");
			caRevuePie.setShadow(false);
			caRevuePie.setShowDataLabels(true);
		}

	}
	public Editeur trouver(int id) {
		return editDao.trouver(id);
	}
	public String getNomRevue(int id) {
		return revueDao.trouver(id).getNom();
	}
	public void docTypeListener(AjaxBehaviorEvent event) {
		System.out.println("in docTypeListener");

		listerRevues();
		if(docType != null && !docType.isEmpty()) {
			revues = revues.parallelStream().filter(r -> r.getDocType().equals(docType)).collect(Collectors.toList());
		}
	}
}
