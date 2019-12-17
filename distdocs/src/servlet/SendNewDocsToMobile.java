package servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import com.sun.org.apache.xml.internal.security.utils.Base64;

import beans.Constante;
import dao.DAOException;
import dao.TransactionDao;

@WebServlet(urlPatterns = { "/send"})
public class SendNewDocsToMobile extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@EJB
	TransactionDao dao;
	//nb de stream à envoyés au mobile(premiere_cover et document)
	private int nb_stream=2;
	//nb colonnes retournés de la bd
	private int db_cols = 3;
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
				
				List<Object[]> results =  new ArrayList<>();
				for(Object[] tab : liste) {
					Object[] row = new Object[db_cols+nb_stream];
					for(int i=0;i<db_cols;i++) {
						row[i]=tab[i];
					}
					File cover = new File(Constante.CHEMIN_IMAGES,row[0]+"");
					File doc = new File(Constante.CHEMIN_DOCS,row[1]+"");
					
					row[3] = Base64.encode(Files.readAllBytes(cover.toPath()));
//					row[4] = Base64.encode(Files.readAllBytes(doc.toPath()));
					
					results.add(row);
				}
				System.out.println("size "+results.size());
				obj.put("docs", results);
				out.println( obj);
				
//				 response
			} catch (DAOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		out.close();
	}
	
}
