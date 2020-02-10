package beans;

import java.io.Serializable;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

import dao.UtilisateurDao;

@Named
@RequestScoped
public class UtilisateurBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = UtilisateurBean.class.getName();
	@EJB
	private UtilisateurDao userDao;

	public String trouver(String id) {
		Integer userId = id != null && !id.isEmpty() ? Integer.parseInt(id) : null;
		if(userId != null)
			return userDao.trouver(userId.intValue()).getEmail();
		else return "";
	}
}
