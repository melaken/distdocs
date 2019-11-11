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
	}

	public String getAccueil() {
		return accueil;
	}

	public void setAccueil(String accueil) {
		this.accueil = accueil;
	}

	public String getUpload() {
		return upload;
	}

	public void setUpload(String upload) {
		this.upload = upload;
	}

	public String getOpenDoc() {
		return openDoc;
	}

	public void setOpenDoc(String openDoc) {
		this.openDoc = openDoc;
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

	public void setEchec(String echec) {
		this.echec = echec;
	}

	public String getBiblio() {
		return biblio;
	}

	public void setBiblio(String biblio) {
		this.biblio = biblio;
	}

	public String getLecture() {
		return lecture;
	}

	public void setLecture(String lecture) {
		this.lecture = lecture;
	}

	public String getCreationEditeur() {
		return creationEditeur;
	}

	public void setCreationEditeur(String creationEditeur) {
		this.creationEditeur = creationEditeur;
	}

	public String getCreationUser() {
		return creationUser;
	}

	public void setCreationUser(String creationUser) {
		this.creationUser = creationUser;
	}

	public String getPaiement() {
		return paiement;
	}

	public void setPaiement(String paiement) {
		this.paiement = paiement;
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public String getConnexion() {
		return connexion;
	}

	public void setConnexion(String connexion) {
		this.connexion = connexion;
	}

	public String getFormCreationUser() {
		return formCreationUser;
	}

	public void setFormCreationUser(String formCreationUser) {
		this.formCreationUser = formCreationUser;
	}

	public String getMenuBar() {
		return menuBar;
	}

	public void setMenuBar(String menuBar) {
		this.menuBar = menuBar;
	}

	public String getCarousel() {
		return carousel;
	}

	public void setCarousel(String carousel) {
		this.carousel = carousel;
	}

	public String getListeDocs() {
		return listeDocs;
	}

	public void setListeDocs(String listeDocs) {
		this.listeDocs = listeDocs;
	}
	
}