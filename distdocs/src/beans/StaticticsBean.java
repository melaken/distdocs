package beans;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

import org.primefaces.model.chart.Axis;
import org.primefaces.model.chart.AxisType;
import org.primefaces.model.chart.BarChartModel;
import org.primefaces.model.chart.ChartSeries;
import org.primefaces.model.chart.PieChartModel;

import dao.DocumentDao;
import dao.EditeurDao;
import dao.StatisticsDao;
import dao.UtilisateurDao;
import entities.Etat;

@Named
@RequestScoped
public class StaticticsBean implements Serializable{

	private static final long serialVersionUID = 1L;
	@EJB
	private StatisticsDao statdao;
	@EJB
	private UtilisateurDao userDao;
	@EJB
	private EditeurDao editDao;
	@EJB 
	DocumentDao docDao;

	//Stats des transactions
	private PieChartModel statsTrans;
	//stats de docs achetés par utilisateur et éventuellement par éditeur
	private PieChartModel daByUser;
	//stats de docs vendus par éditeur
	private BarChartModel docSoldByPublisher; 
	private BarChartModel transPerClient;

	@PostConstruct
	public void init() {
		createStatsTrans();
		createDaByUser();
		createDoccSoldByPublisher();
		transPerClient();
	}

	public PieChartModel getStatsTrans() {
		return statsTrans;
	}
	public PieChartModel getDaByUser() {
		return daByUser;
	}
	public BarChartModel getDocSoldByPublisher() {
		return docSoldByPublisher;
	}

	public void setDocSoldByPublisher(BarChartModel docSoldByPublisher) {
		this.docSoldByPublisher = docSoldByPublisher;
	}

	public BarChartModel getTransPerClient() {
		return transPerClient;
	}

	public void setTransPerClient(BarChartModel transPerClient) {
		this.transPerClient = transPerClient;
	}

	public void createStatsTrans() {

		long nb_trans_term = statdao.nbTransactions(null, null, Etat.TERMINE.name());
		long nb_trans_ann = statdao.nbTransactions(null, null, Etat.ANNULE.name());
		long nb_trans_init =  statdao.nbTransactions(null, null, Etat.INITIE.name());

		System.out.println("term "+nb_trans_term+" ann "+nb_trans_ann+" init "+nb_trans_init);

		statsTrans = new PieChartModel();

		statsTrans.set("Transactions initiées", nb_trans_init);
		statsTrans.set("Transactions terminées", nb_trans_term);
		statsTrans.set("Transactions annulées", nb_trans_ann);

		statsTrans.setTitle("Statistiques des transactions");
		statsTrans.setLegendPosition("w");
		statsTrans.setShadow(false);
		statsTrans.setShowDataLabels(true);
	}
	private void createDaByUser() {
		List<Object[]> liste = statdao.nbDocsAchetesParClientParEditeur(null, null, null, 10);
		daByUser = new PieChartModel();
		System.out.println("size daByUser"+liste.size());

		int i = 0;
		for(Object[] obj : liste) {
			daByUser.set(userDao.trouver((Integer)obj[1]).getEmail()+"",(Long)obj[0]);
			i++;
			if(i>10)
				break;
		}

		daByUser.setTitle("Statistiques des achats par client");
		daByUser.setLegendPosition("w");
		daByUser.setShadow(false);
		daByUser.setShowDataLabels(true);

	}
	private void createDoccSoldByPublisher() {
		List<Object[]> liste = statdao.nbDocsVendusParEditeur(null, null);
		System.out.println("size docSoldByPublisher"+liste.size());

		docSoldByPublisher = new BarChartModel();

		ChartSeries vendus = new ChartSeries();
		vendus.setLabel("Ventes abouties");
		// vendus.setLabel(label);
		int i=0;
		for(Object[] obj : liste) {
			vendus.set(editDao.trouver((Integer)obj[1]).getMaisonEdition()+"", (Long)obj[0]);
			i++;
			if(i>10)
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
		yAxis.setMax(docDao.nbDocs());
	}

	private void transPerClient() {
		List<Object[]> liste = statdao.transPerClient(null, null);
		System.out.println("size transPerClient"+liste.size());

		transPerClient = new BarChartModel();
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.INITIE.name(),"Transactions initiées",liste));
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.TERMINE.name(),"Transactions terminées",liste));
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.ANNULE.name(),"Transactions annulées",liste));
		
		transPerClient.setAnimate(true);

		transPerClient.setTitle("Transactions par client");
		transPerClient.setLegendPosition("ne");

		Axis xAxis = transPerClient.getAxis(AxisType.X);
		xAxis.setLabel("Client");

		Axis yAxis = transPerClient.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de transactions");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbTransactions(null, null, null));

	}
	private ChartSeries setSeriesForTransPerclient(String etat,String label,List<Object[]> liste) {
		ChartSeries series = new ChartSeries();
		series.setLabel(label);
		int i= 0;
		for(Object[] obj : liste) {
			if(obj[2].toString().equals(etat)) {
				series.set(userDao.trouver((Integer)obj[1]).getEmail()+"", (Long)obj[0]);
				i++;
			}
			if(i>10)
				break;
		}
		return series;
	}
}
