package beans;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.FacesContext;
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
@SessionScoped
public class StatsTransactionBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = StatsTransactionBean.class.getName();
	@EJB
	private StatisticsDao statdao;
	@EJB
	private UtilisateurDao userDao;
	@EJB
	private EditeurDao editDao;
	@EJB 
	DocumentDao docDao;

	private java.util.Date debutStatsTrans;
	private java.util.Date finStatsTrans;
	private String nbCl="10";

	//Stats des transactions
	private PieChartModel statsTrans;
	private BarChartModel transPerClient;

	@PostConstruct
	public void init() {

		privateCreateStatsTrans();
		privateTransPerClient();
		redirect();
	}
	public java.util.Date getDebutStatsTrans() {
		return debutStatsTrans;
	}
	public void setDebutStatsTrans(java.util.Date debutStatsTrans) {
		this.debutStatsTrans = debutStatsTrans;
	}
	public java.util.Date getFinStatsTrans() {
		return finStatsTrans;
	}
	public void setFinStatsTrans(java.util.Date finStatsTrans) {
		this.finStatsTrans = finStatsTrans;
	}
	public String getNbCl() {
		return nbCl;
	}
	public void setNbCl(String nbCl) {
		this.nbCl = nbCl;
	}
	public PieChartModel getStatsTrans() {
		return statsTrans;
	}
	public BarChartModel getTransPerClient() {
		return transPerClient;
	}
	public void createStatsTrans() {
		privateCreateStatsTrans();
		privateTransPerClient();
		redirect();
	}
	private void privateCreateStatsTrans() {
		statsTrans = new PieChartModel();
		
		java.sql.Date debut = debutStatsTrans != null ? new java.sql.Date(debutStatsTrans.getTime()) : null;
		java.sql.Date fin = finStatsTrans != null ? new java.sql.Date(finStatsTrans.getTime()) : null;
		System.out.println("debut = "+debut+" fin = "+fin);

		float nb_trans_term = statdao.nbTransactions(debut, fin, Etat.TERMINE.name());
		float nb_trans_ann = statdao.nbTransactions(debut, fin, Etat.ANNULE.name());
		float nb_trans_init =  statdao.nbTransactions(debut, fin, Etat.INITIE.name());

		System.out.println("term "+nb_trans_term+" ann "+nb_trans_ann+" init "+nb_trans_init);

//		if(nb_trans_init > 0)
			statsTrans.set("Transactions initiées", nb_trans_init);
//		if(nb_trans_term > 0)
			statsTrans.set("Transactions terminées", nb_trans_term);
//		if(nb_trans_ann > 0)
			statsTrans.set("Transactions annulées", nb_trans_ann);

		statsTrans.setTitle("Statistiques des transactions");
		statsTrans.setLegendPosition("w");
		statsTrans.setShadow(false);
		statsTrans.setShowDataLabels(true);
	}
	public void transPerClient() {
		privateTransPerClient();
		redirect();
	}
	private void privateTransPerClient() {
		java.sql.Date deb=debutStatsTrans != null ? new java.sql.Date(debutStatsTrans.getTime()) : null;
		java.sql.Date fin = finStatsTrans != null ? new java.sql.Date(finStatsTrans.getTime()) : null;
		List<Object[]> liste = statdao.transPerClient(deb, fin);

		System.out.println("size transPerClient"+liste.size());
		int nb = nbCl!= null && !nbCl.isEmpty() ? Integer.parseInt(nbCl) : 10;

		transPerClient = new BarChartModel();
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.INITIE.name(),"Transactions initiées",liste,nb));
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.TERMINE.name(),"Transactions terminées",liste,nb));
		transPerClient.addSeries(setSeriesForTransPerclient(Etat.ANNULE.name(),"Transactions annulées",liste,nb));

		transPerClient.setAnimate(true);

		transPerClient.setTitle("Transactions par client");
		transPerClient.setLegendPosition("ne");

		Axis xAxis = transPerClient.getAxis(AxisType.X);
		xAxis.setLabel("Client");

		Axis yAxis = transPerClient.getAxis(AxisType.Y);
		yAxis.setLabel("Nombre de transactions");
		yAxis.setMin(0);
		yAxis.setMax(statdao.nbTransactions(deb, fin, null));

	}
	private ChartSeries setSeriesForTransPerclient(String etat,String label,List<Object[]> liste, int nbClient) {
		ChartSeries series = new ChartSeries();
		series.setLabel(label);
		int i= 0;
		for(Object[] obj : liste) {
			if(obj[2].toString().equals(etat) && ((Long)obj[0]) >= 0)  {
				series.set(userDao.trouver((Integer)obj[1]).getEmail()+"", (Long)obj[0]);
				i++;
			}
			if(i>nbClient)
				break;
		}
		return series;
	}
	private void redirect() {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, Constante.statsTransactions+"?faces-redirect=true", MODULE);
	}
}
