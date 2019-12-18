package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import dao.DAOException;
import dao.LoginDao;
import dao.UtilisateurDao;
import entities.Utilisateur;

@WebServlet(urlPatterns = { "/login"})
public class Login extends HttpServlet{

	@EJB
	private LoginDao loginDao;
	@EJB
	UtilisateurDao utilisateurDao;
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		PrintWriter out = response.getWriter();
		JSONObject obj = new JSONObject();
		
		boolean success = false;
		
		try {
			success = loginDao.validate(email, password);
			Utilisateur user = utilisateurDao.trouver(email);
			obj.put("nom", user.getNom());
			obj.put("prenom", user.getPrenom());
			obj.put("id", user.getId());
			obj.put("email", user.getEmail());
		} catch (DAOException e) {
			obj.put("error", true);
			e.printStackTrace();
		}
		obj.put("success", success);
		out.println( obj);
	}
}
