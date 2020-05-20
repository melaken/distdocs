package servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

import org.primefaces.json.JSONObject;

import java.util.logging.Level;
import java.util.logging.Logger;
import com.sun.org.apache.xml.internal.security.utils.Base64;

import beans.Constante;
import dao.DAOException;
import dao.DocumentDao;
import entities.Document;

@WebServlet(urlPatterns = { "/getAllDocs"})
public class GetAllDocs extends HttpServlet{

	private static final long serialVersionUID = 1L;
	private final String MODULE = GetAllDocs.class.getName();
	@EJB
	DocumentDao docDao;
	private int nb_cols = 4;
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		List<Integer> liste = new ArrayList<>();
		JSONObject json = new JSONObject();
		
		liste = docDao.listerDocsForMobile();
		System.out.println("liste size "+liste.size());
		 response.setContentType("application/json");
		// defining the PrintWriter object
		PrintWriter out = response.getWriter();
		
		List<Object[]> results =  new ArrayList<>();
		try {
			for(Integer d : liste) {
				Object[] obj = new Object[nb_cols];
				Document doc = docDao.trouver(d.longValue());
				
				obj[0] = doc.getId();
				obj[1] = doc.getPrix();
				File image = new File(Constante.CHEMIN_IMAGES, doc.getPremiereCouverture());
				byte[] bytes = Files.readAllBytes(image.toPath());
				obj[2] = Base64.encode(bytes);
				obj[3] = doc.getDateParution();

				results.add(obj);
			} 
		}catch (Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
			
		json.put("docs", results);
		System.out.println("results size "+results.size());
		out.println( json);
		
	}

}
