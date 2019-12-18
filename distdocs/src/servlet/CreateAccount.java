package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import dao.DAOException;
import dao.UtilisateurDao;
import entities.UserType;
import entities.Utilisateur;
import validators.Utilitaire;

@WebServlet(urlPatterns = { "/createAccount"})
public class CreateAccount  extends HttpServlet{

	@EJB
	private UtilisateurDao utilisateurDao;
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String noms = request.getParameter("noms");
		String prenoms = request.getParameter("prenoms");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		PrintWriter out = response.getWriter();
		JSONObject obj = new JSONObject();
		boolean success = false;
		try {
			if(utilisateurDao.trouver( email ) != null ){
				obj.put("email", "Cette addresse email est déjà utilisée");
			}else {
				Utilisateur user = setUser(noms,prenoms,email,password);
				System.out.println(user);
				utilisateurDao.creer(user);
				success = true;
			}
		} catch (DAOException e) {
			obj.put("error", true);
			e.printStackTrace();
		}
		obj.put("success", success);
		out.println( obj);
	}
	
	private Utilisateur setUser(String noms,String prenoms, String email,String password) {
		Utilisateur user = new Utilisateur();
		
		user.setEmail(email);
		user.setPrenom(prenoms);
		user.setMotDePasse(Utilitaire.chiffrer(password));
		user.setNom(noms);
		user.setDateCreation(new Timestamp(System.currentTimeMillis()));
		user.setUserType(UserType.CLIENT.name());
		user.setNumTel("123456789");
		return user;
		
	}
}
