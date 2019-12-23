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
import javax.xml.bind.DatatypeConverter;

import org.primefaces.json.JSONObject;

import com.sun.org.apache.xml.internal.security.utils.Base64;

import beans.Constante;
import dao.DAOException;
import dao.DocumentDao;
import entities.Document;

@WebServlet(urlPatterns = { "/getAllDocs"})
public class GetAllDocs extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@EJB
	DocumentDao docDao;
	private int nb_cols = 4;
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		List<Document> liste = new ArrayList<>();
		JSONObject json = new JSONObject();
		try {
			liste = docDao.lister();
		} catch (DAOException e) {
			System.out.println("DAO Exception in GetAllDocs");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("liste size "+liste.size());
		 response.setContentType("application/json");
		// defining the PrintWriter object
		PrintWriter out = response.getWriter();
		
		List<Object[]> results =  new ArrayList<>();
		int i = 0;
		for(Document d : liste) {
			Object[] obj = new Object[nb_cols];
			obj[0] = d.getId();
			obj[1] = d.getPrix();
			File image = new File(Constante.CHEMIN_IMAGES, d.getPremiereCouverture());
			byte[] bytes = Files.readAllBytes(image.toPath());
			obj[2] = Base64.encode(bytes);
			obj[3] = d.getDateParution();
			
			results.add(obj);
			
		}
		json.put("docs", results);
		System.out.println("results size "+results.size());
		out.println( json);
		
	}

}
