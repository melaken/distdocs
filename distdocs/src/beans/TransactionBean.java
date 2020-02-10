package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import dao.DAOException;
import dao.TransactionDao;
import entities.Document;
import entities.Etat;
import entities.Transaction;
import entities.Utilisateur;
import validators.DateConverterUtil;

@Named
@SessionScoped
public class TransactionBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = TransactionBean.class.getName();

	@EJB
	TransactionDao transDao;
	private List<Transaction> liste;
	private List<Transaction> transactionsTermines;
	private List<Transaction> transactionsAnnules;
	private List<Transaction> transactionsInities;
	private Transaction transToTerminate;
	private List<Transaction> allTransactionsTermines;
	private List<Transaction> allTransactionsAnnules;
	private List<Transaction> allTransactionsInities;
	private java.util.Date dateDebut;
	private java.util.Date dateFin;



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
	public Transaction getTransToTerminate() {
		return transToTerminate;
	}
	public List<Transaction> getAllTransactionsTermines() {
		return allTransactionsTermines;
	}
	public List<Transaction> getAllTransactionsAnnules() {
		return allTransactionsAnnules;
	}
	public List<Transaction> getAllTransactionsInities() {
		return allTransactionsInities;
	}
	public List<Transaction> getTransactionsTermines() {
		return transactionsTermines;
	}
	public List<Transaction> getTransactionsAnnules() {
		return transactionsAnnules;
	}
	public List<Transaction> getTransactionsInities() {
		return transactionsInities;
	}

	private void listerTransactions() {
		try {
			liste = transDao.listTransactions();

		} catch (DAOException e) {
			e.printStackTrace();
		}catch(Throwable e){
			e.printStackTrace();
		}
	}
	@PostConstruct
	public void init() {
		selectAllTransactionsTermines();
		selectAllTransactionsAnnules();
		selectAllTransactionsInities();

		selectUserTransactionsInities();
		selectUserTransactionsTermines();
		selectUserTransactionsAnnules();
	}

	private void selectUserTransactionsInities() {
		listerTransactions();
		Utilisateur user = getCurrentUser();
		transactionsInities  = user != null ? liste.parallelStream().filter(e -> e.getEtat().equals(Etat.INITIE.name()) 
				&& e.getClientId()==user.getId())
				.collect(Collectors.toList()) : new ArrayList<>();
	}
	private void selectUserTransactionsTermines() {
		listerTransactions();
		Utilisateur user = getCurrentUser();
		System.out.println("getCurrentUser "+user);
		if(user!=null)
			System.out.println("getCurrentUser "+user.getId());
		this.transactionsTermines = user != null ? liste.parallelStream().filter(e -> e.getEtat().equals(Etat.TERMINE.name())
				&& e.getClientId()==user.getId())
				.collect(Collectors.toList()) : new ArrayList<>();
	}
	private void selectUserTransactionsAnnules() {
		listerTransactions();
		Utilisateur user = getCurrentUser();
		
		transactionsAnnules = user != null ? liste.parallelStream().filter(e -> e.getEtat().equals(Etat.ANNULE.name())
				&& e.getClientId()==user.getId())
				.collect(Collectors.toList()) : new ArrayList<>();;
	}
	private void selectAllTransactionsTermines() {
		listerTransactions();
		this.allTransactionsTermines = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.TERMINE.name()))
				.collect(Collectors.toList());
	}
	private void selectAllTransactionsAnnules() {
		listerTransactions();
		allTransactionsAnnules = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.ANNULE.name()))
				.collect(Collectors.toList());
	}
	private void selectAllTransactionsInities() {
		listerTransactions();
		allTransactionsInities  = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.INITIE.name()))
				.collect(Collectors.toList());
	}
	private Utilisateur getCurrentUser() {
		try{
			FacesContext facesContext = FacesContext.getCurrentInstance();
			ExternalContext  exterNalContext = facesContext.getExternalContext();
			HttpSession session = (HttpSession) exterNalContext.getSession(false);
			return  (Utilisateur)session.getAttribute(Constante.ATTRIB_USER);
		}catch(Throwable e) {
			return null;
		}
	}
	public void annulerTransaction() {
		FacesContext fc = FacesContext.getCurrentInstance();
		String reference = fc.getExternalContext().getRequestParameterMap().get("ref");

		Object obj =  transDao.getTransactionByRef(reference);
		if(obj != null) {
			Transaction trans = (Transaction)obj;
			trans.setEtat(Etat.ANNULE.name());

			try {
				transDao.update(trans);
				Constante.redirect(fc,((HttpServletRequest) fc.getExternalContext().getRequest()).getRequestURI(), MODULE);
			} catch (DAOException e) {
				e.printStackTrace();
			}
		}
	}
	public void terminerTransaction() {
		FacesContext context = FacesContext.getCurrentInstance();
		String reference = context.getExternalContext().getRequestParameterMap().get("ref");

		transToTerminate = transDao.getTransactionByRef(reference);
		System.out.println("trans "+transToTerminate);
		Constante.redirect(context,Constante.termTransFromPayment+"?ref="+reference+"&faces-redirect=true", MODULE);
		System.out.println("trans "+transToTerminate);
	}
	public List<Document> voirArticles(String reference) {
		List<Document> userTransArt = new ArrayList<>();

		System.out.println("reference "+reference);
			try {
				userTransArt= transDao.findUserTransactionArticles(reference);
			} catch (DAOException e) {
				e.printStackTrace();
			}
		return userTransArt;
	}
	public void updateTransactionWithPaymentMethod() {
		try {
			transDao.update(transToTerminate);
		} catch (DAOException e) {
			e.printStackTrace();
		}
	}
	private void trierUserInities() {
		selectUserTransactionsInities();
		
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;
		
		if(debut != null)
			transactionsInities = transactionsInities.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			transactionsInities = transactionsInities.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
	}
	private void trierUserTermine() {
		selectUserTransactionsTermines();
		
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;
		
		if(debut != null)
			transactionsTermines = transactionsTermines.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			transactionsTermines = transactionsTermines.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
		
	}
	private void trierUserAnnule() {
		selectUserTransactionsAnnules();
		
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;
		
		if(debut != null)
			transactionsAnnules = transactionsAnnules.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			transactionsAnnules = transactionsAnnules.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
	}
	private void trierAllTermine() {
		System.out.println("in trierAllTermine");
		selectAllTransactionsTermines();
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;

		if(debut != null)
			allTransactionsTermines = allTransactionsTermines.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			allTransactionsTermines = allTransactionsTermines.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
	}
	private void trierAllInitie() {
		System.out.println("in trierAllInitie0");
		selectAllTransactionsInities();
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;
		System.out.println("in trierAllInitie");
		if(debut != null)
			allTransactionsInities = allTransactionsInities.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			allTransactionsInities = allTransactionsInities.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
	}
	private void trierAllAnnule() {
		selectAllTransactionsAnnules();
		java.sql.Date debut =  dateDebut != null ? new java.sql.Date(dateDebut.getTime()) :  null;
		java.sql.Date fin =  dateFin!= null ? new java.sql.Date(dateFin.getTime()) :  null;
		System.out.println("in trierAllAnnule");
		if(debut != null)
			allTransactionsAnnules = allTransactionsAnnules.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).after(debut) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(debut))
			.collect(Collectors.toList());
		if(fin != null)
			allTransactionsAnnules = allTransactionsAnnules.parallelStream().filter(t->DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).before(fin) 
					|| DateConverterUtil.localDateToSqlDate(DateConverterUtil.sqlTimestampToLocalDate(t.getDateAchat())).equals(fin))
			.collect(Collectors.toList());
	}
	private void redirect(int i) {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, Constante.allTransactions+"?i="+i+"&faces-redirect=true", MODULE);
	}
	public void trierAll() {
		String id = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("id");
		if(id.equals("0")) {
			trierAllTermine();
			redirect(0);
		}
		else if(id.equals("1")) {
			trierAllInitie();
			redirect(1);
		}
		else if(id.equals("2")) {
			trierAllAnnule();
			redirect(2);
		}
	}
	public void trier() {
		FacesContext fc = FacesContext.getCurrentInstance();
		String id = fc.getExternalContext().getRequestParameterMap().get("id");
		if(id.equals("0")) {
			trierUserTermine();
			Constante.redirect(fc, Constante.listUserTransactions+"?i="+0+"&faces-redirect=true", MODULE);
		}
		else if(id.equals("1")) {
			trierUserInities();
			Constante.redirect(fc, Constante.listUserTransactions+"?i="+1+"&faces-redirect=true", MODULE);
		}
		else if(id.equals("2")) {
			trierUserAnnule();
			Constante.redirect(fc, Constante.listUserTransactions+"?i="+2+"&faces-redirect=true", MODULE);
		}
	}
}
