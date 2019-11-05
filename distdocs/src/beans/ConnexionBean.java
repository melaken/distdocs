package beans;

import java.io.IOException;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import dao.LoginDao;
import dao.UtilisateurDao;

@Named
@SessionScoped
public class ConnexionBean implements Serializable{
	
	private final static String ACCUEIL = "index";
	private final String MODULE = ConnexionBean.class.getName();
	private static final long serialVersionUID = 1L;
	@EJB
	private LoginDao loginDao;
	@EJB
	private UtilisateurDao userDao;
	@NotNull( message = "Veuillez saisir un mot de passe" )
	private String password;
	@NotNull( message = "Email obligatoire" )
	@Pattern( regexp = "([^.@]+)(\\.[^.@]+)*@([^.@]+\\.)+([^.@]+)",
	message = "Merci de saisir une adresse mail valide" )
	private String email;
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String connect() {
		boolean valid = loginDao.validate(email, password);
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		
//		try {
			if (valid) {
				HttpSession session = (HttpSession) exterNalContext.getSession(true);
				session.setAttribute("user", userDao.trouver(email));
				
				try {
					exterNalContext.redirect(ConstanteBean.ACCUEIL);
				} catch (IOException e) {
					Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
					e.printStackTrace();
				}
				facesContext.addMessage(null, new FacesMessage(" ",  "Vous êtes connecté: ") );
				System.out.println("connected");
			} else {
				facesContext.addMessage(null,new FacesMessage(FacesMessage.SEVERITY_WARN,
								"Mot de passe ou email incorrect",
								"Veuillez saisir des informations valides"));
				System.out.println("not connected");
			}
			return "index";
	}

	//logout event, invalidate session
	public String logout() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
		exterNalContext.invalidateSession();
		try {
			exterNalContext.redirect(ConstanteBean.ACCUEIL);
//			reload();
			System.out.println("disconnected");
		} catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
		facesContext.addMessage(null, new FacesMessage(" ",  "Vous êtes déconnecté: ") );
		return "logout";
	}
	public void reload()throws IOException {
		ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
	    ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
	    
	}
}
