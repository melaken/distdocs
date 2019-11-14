package beans;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

public class Constante {

	public static final String INDEX_PATH = "/home/lady/distdocs/indexes"; 
//	ublic static final String INDEX_PATH = "/home/myra/distdocs/indexes"; 
//	public static final String CHEMIN_DOCS="/home/myra/distdocs/books";
//	public static final String CHEMIN_IMAGES="/home/myra/distdocs/cover_page";
	public static final String CHEMIN_DOCS="/home/lady/distdocs/books";
	public static final String CHEMIN_IMAGES="/home/lady/distdocs/cover_page";
	public static final String ROOT = "/distdocs";
//	public static final String ACCUEIL = ROOT+"/accueil";
	public static final String ACCUEIL = ROOT+"/index.xhtml";
//	public static final String BIBLIO = ROOT+"/biblio";
	public static final String BIBLIO = ROOT+"/docsAchetes.xhtml";
//	public static final String RECAP = ROOT+"/recap";
	public static final String RECAP = ROOT+"/views/listing/recapitulatifAchats.xhtml";
//	public static final String PAYMENT = ROOT+"/paiement";
	public static final String PAYMENT = ROOT+"/views/listing/payer.xhtml";
//	public static final String USER_CREATE = ROOT+"/creation_user";
	public static final String USER_CREATE = ROOT+"/views/creation/creationUtilisateur.xhtml";
//	public static final String EDITEUR_CREATE = ROOT+"/creation_editeur";
	public static final String EDITEUR_CREATE = ROOT+"/views/creation/creationEditeur.xhtml";
//	public static final String UPLOAD = ROOT+"/upload";
	public static final String UPLOAD = ROOT+"/views/creation/uploadDoc.xhtml";
//	public static final String LECTURE = ROOT+"/lecture";
//	public static final String LECTURE = ROOT+"";
	public static final String OPEN_DOC = ROOT + "/opendoc.xhtml";
	public static final String ECHEC = ROOT + "/views/results/paymentFailed.xhtml";
	public static final String SUCCESS = ROOT + "/views/results/paymentSucceed.xhtml";
	public static final String SEARCH =ROOT + "/views/listing/searchResults.xhtml";
	
	public static void redirect(FacesContext facesContext, String path, String module) {
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		try {
			exterNalContext.redirect(path);
		} catch (IOException e) {
			Logger.getLogger(module).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
 }
}
