package beans;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import dao.DAOException;
import dao.TransactionDao;

@WebServlet(urlPatterns = { "/send"})
public class SendNewDocsToMobile extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@EJB
	TransactionDao dao;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String lastDate = request.getParameter("lastDate");
		String email = request.getParameter("email");
		System.out.println("email "+email);
		System.out.println("lastDate "+lastDate);
		
		 response.setContentType("application/json");
		// defining the PrintWriter object
			PrintWriter out = response.getWriter();
		
		if(email != null && !email.isEmpty())
			try {
				List<Object[]> liste = dao.selectUserDocsFromDate(email, lastDate);
				JSONObject obj = new JSONObject();
				obj.put("docs", liste);
				out.println( obj);
				
				 
			} catch (DAOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		out.close();
	}
}
