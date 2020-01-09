package beans;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

public class Constante {
//
	public static final String INDEX_PATH = "/home/lady/distdocs/indexes"; 
	public static final String CHEMIN_DOCS="/home/lady/distdocs/books";
	public static final String CHEMIN_IMAGES="/home/lady/distdocs/cover_page";
//	public static final String INDEX_PATH = "/home/myra/distdocs/indexes"; 
//	public static final String CHEMIN_DOCS="/home/myra/distdocs/books";
//	public static final String CHEMIN_IMAGES="/home/myra/distdocs/cover_page";
	
	public static final String ATTRIB_USER = "user"	;
	public static final String ROOT = "/distdocs";
	public static final String ACCUEIL = ROOT+"/index.xhtml";
	public static final String BIBLIO = ROOT+"/docsAchetes.xhtml";
	public static final String RECAP = ROOT+"/views/listing/recapitulatifAchats.xhtml";
	public static final String PAYMENT = ROOT+"/views/listing/payer.xhtml";
	public static final String USER_CREATE = ROOT+"/views/creation/creationUtilisateur.xhtml";
	public static final String EDITEUR_CREATE = ROOT+"/views/creation/creationEditeur.xhtml";
	public static final String UPLOAD = ROOT+"/views/creation/uploadDoc.xhtml";
	public static final String OPEN_DOC = ROOT + "/opendoc.xhtml";
	public static final String STATS = ROOT + "/views/statistics/stats.xhtml";
	public static final String ECHEC = "/views/results/paymentFailed.xhtml";
	public static final String SUCCESS = "/views/results/paymentSucceed.xhtml";
	public static final String SEARCH =ROOT + "/views/listing/searchResults.xhtml";
	public static final String listUserTransactions = ROOT+"/views/listing/listUserTransactions.xhtml";
	public static final String url_api_rest = "https://mypvit.com/mypvitapi.kk";
	public static final String tel_marchand = "077921645";
	public static final String url_redirect = "http://myracenter.homeip.net:3580/distdocs/response";
	public static final String moyen_airtel = "AIRTEL MONEY";
	public static final int STATUT = 200;
	public static final String termTransFromPayment = ROOT + "/views/listing/terminerTransaction.xhtml";
	public static final String allTransactions = ROOT+"/views/listing/listAllTransactions.xhtml";
	
	public static void redirect(FacesContext facesContext, String path, String module) {
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		try {
			exterNalContext.redirect(path);
			System.out.println("After redirect "+path);
		} catch (IOException e) {
			Logger.getLogger(module).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
 }
}
