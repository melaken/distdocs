package beans;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

public final class Constante {

	public static final String CHEMIN_DOCS="/home/lady/distdocs/books";
	public static final String CHEMIN_IMAGES="/home/lady/distdosts/cover_page";
	public static final String ROOT = "/distdocs";
	public static final String ACCUEIL = ROOT+"/accueil";
	public static final String BIBLIO = ROOT+"/biblio";
	public static final String RECAP = ROOT+"/recap";
	public static final String PAYMENT = ROOT+"/paiement";
	public static final String USER_CREATE = ROOT+"/creation_user";
	public static final String EDITEUR_CREATE = ROOT+"/creation_editeur";
	public static final String UPLOAD = ROOT+"/upload";
	public static final String LECTURE = ROOT+"/lecture";
	
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
