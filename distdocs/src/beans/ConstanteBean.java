package beans;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;

@Named
@ApplicationScoped
public class ConstanteBean {

	private String accueil;
	private String upload;
	private String openDoc;
	private String recap;
	private String echec;
	private String biblio;
	private String lecture;
	private String creationEditeur;
	private String creationUser;
	private String paiement;
	private String success;
	private String connexion;
	private String formCreationUser;
	private String menuBar;
	private String carousel;
	private String listeDocs;
	private String panierMessage;
	private String listUserTransactions;
	private String articlesPerTrans;
	private String telMarchand ;
	private String urlRedirect ;
	private String stats;
	private String menuBarWithoutSearch;
	private String listAllTransactions;
	private String createRevue;
	private String revues;
	private String statsTransactions;
	private String statsVentes1;
	private String statsVentes;

	
	@PostConstruct
	public void init() {
		accueil = "/index.xhtml";
		upload = "/views/creation/uploadDoc.xhtml";
		openDoc = "/opendoc.xhtml";
		recap = "/views/listing/recapitulatifAchats.xhtmls";
		echec = "/views/results/paymentFailed.xhtml";
		biblio = "/docsAchetes.xhtml";
		lecture = "/opendoc.xhtml";
		creationEditeur = "/views/creation/creationEditeur.xhtml";
		creationUser = "/views/creation/creationUtilisateur.xhtml" ;
		paiement = "/views/listing/payer.xhtml";
		success = "/views/results/paymentSucceed.xhtml";
		connexion = "/views/creation/connexion.xhtml";
		formCreationUser = "/views/creation/formCreationUtilisateur.xhtml" ;
		menuBar = "/menuBar.xhtml";
		carousel = "/views/carousel.xhtml";
		listeDocs = "/views/listing/listeDocs.xhtml";
		panierMessage = "Mettre dans le panier";
		listUserTransactions = "/views/listing/listUserTransactions.xhtml?i=0";
		articlesPerTrans = "/views/listing/articlesPerTransaction.xhtml";
		telMarchand = "077921645";
		urlRedirect = "http://myracenter.homeip.net:3580/distdocs/response";
		stats = "/views/statistics/stats.xhtml?i=1";
		menuBarWithoutSearch="/menuBarWithoutSearch.xhtml";
		listAllTransactions = "/views/listing/listAllTransactions.xhtml?i=0";
		createRevue="/views/creation/creationRevue.xhtml?i=1";
		revues="/views/listing/revues.xhtml?i=0";
		statsTransactions = "/views/statistics/statsTransactions.xhtml";
		statsVentes = "/views/statistics/statsVentes.xhtml";
		statsVentes1 = "/views/statistics/statsVentes1.xhtml";
	}


	public String getStatsTransactions() {
		return statsTransactions;
	}
	public String getStatsVentes() {
		return statsVentes;
	}
	public String getStatsVentes1() {
		return statsVentes1;
	}
	public String getCreateRevue() {
		return createRevue;
	}

	public String getRevues() {
		return revues;
	}
	public String getTelMarchand() {
		return telMarchand;
	}

	public String getUrlRedirect() {
		return urlRedirect;
	}

	public String getArticlesPerTrans() {
		return articlesPerTrans;
	}

	public String getAccueil() {
		return accueil;
	}

	public String getUpload() {
		return upload;
	}

	public String getOpenDoc() {
		return openDoc;
	}

	public String getRecap() {
		return recap;
	}

	public void setRecap(String recap) {
		this.recap = recap;
	}

	public String getEchec() {
		return echec;
	}

	public String getBiblio() {
		return biblio;
	}

	public String getLecture() {
		return lecture;
	}

	public String getCreationEditeur() {
		return creationEditeur;
	}

	public String getCreationUser() {
		return creationUser;
	}

	public String getPaiement() {
		return paiement;
	}

	public String getSuccess() {
		return success;
	}

	public String getConnexion() {
		return connexion;
	}


	public String getFormCreationUser() {
		return formCreationUser;
	}

	public String getMenuBar() {
		return menuBar;
	}

	public String getCarousel() {
		return carousel;
	}


	public String getListeDocs() {
		return listeDocs;
	}

	public String getPanierMessage() {
		return panierMessage;
	}

	public String getListAllTransactions() {
		return listAllTransactions;
	}

	public String getListUserTransactions() {
		return listUserTransactions;
	}

	public String getStats() {
		return stats;
	}
	public String getMenuBarWithoutSearch() {
		return menuBarWithoutSearch;
	}
}