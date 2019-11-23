package beans;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpSession;

import dao.DAOException;
import dao.TransactionDao;
import entities.Document;
import entities.Etat;
import entities.Transaction;
import entities.Utilisateur;

@Named
@RequestScoped
public class TransactionBean {

	private static final long serialVersionUID = 1L;
	private final String MODULE = TransactionBean.class.getName();
	
	@EJB
	TransactionDao transDao;
	private List<Transaction> liste;
	private List<Transaction> transactionsTermines;
	private List<Transaction> transactionsAnnules;
	private List<Transaction> transactionsInities;
	private List<Document> userTransArt;
	
	public List<Transaction> getListe() {
		return liste;
	}
	public void setListe(List<Transaction> liste) {
		this.liste = liste;
	}
	public List<Transaction> getTransactionsTermines() {
		this.transactionsTermines = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.TERMINE.name())).collect(Collectors.toList());
		return transactionsTermines;
	}
	public void setTransactionsTermines(List<Transaction> transactionsTermines) {
		this.transactionsTermines = transactionsTermines;
	}
	public List<Transaction> getTransactionsAnnules() {
		transactionsAnnules = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.ANNULE.name())).collect(Collectors.toList());
		return transactionsAnnules;
	}
	public void setTransactionsAnnules(List<Transaction> transactionsAnnules) {
		this.transactionsAnnules = transactionsAnnules;
	}
	public List<Transaction> getTransactionsInities() {
		transactionsInities  = liste.parallelStream().filter(e -> e.getEtat().equals(Etat.INITIE.name())).collect(Collectors.toList());
		return transactionsInities;
	}
	public void setTransactionsInities(List<Transaction> transactionsInities) {
		this.transactionsInities = transactionsInities;
	}
	@PostConstruct
	public void init() {
		
		try {
			Utilisateur user = getCurrentUser();
				if(user != null) {
				liste = transDao.userTransactions(user.getId());
				System.out.println("liste.size "+liste.size());
			}else {
				liste = new ArrayList<Transaction>();
			}
			} catch (DAOException e) {
			e.printStackTrace();
		}catch(Throwable e){
			e.printStackTrace();
		}
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
		FacesContext context = FacesContext.getCurrentInstance();
		String reference = context.getExternalContext().getRequestParameterMap().get("ref");
		
		 Object obj =  transDao.getTransactionByRef(reference);
		 if(obj != null) {
			 Transaction trans = (Transaction)obj;
			 trans.setEtat(Etat.ANNULE.name());
			
			 try {
				transDao.update(trans);
				Constante.redirect(context,Constante.listUserTransactions, MODULE);
			} catch (DAOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		 }
	}
	public void voirArticles() {
		FacesContext context = FacesContext.getCurrentInstance();
		String reference = context.getExternalContext().getRequestParameterMap().get("ref");
		Utilisateur user = getCurrentUser();
		userTransArt = new ArrayList<>();
		
		if(user != null)
		try {
			userTransArt= transDao.findUserTransactionArticles(reference);
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
