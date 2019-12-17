package servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.util.zip.GZIPOutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import com.sun.xml.wss.impl.misc.Base64;

import beans.Constante;

@WebServlet(urlPatterns = { "/sendDocStream"})
public class SendDocumentStream extends HttpServlet{

	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String docName = request.getParameter("docName");
		System.out.println("docName "+docName);
		
		File doc = new File(Constante.CHEMIN_DOCS,docName);
//		Base64.encode(Files.readAllBytes(doc.toPath()));
		
		JSONObject obj = new JSONObject();
		PrintWriter out = response.getWriter();
		
		obj.put("doc", Base64.encode(Files.readAllBytes(doc.toPath())));
		out.println( obj);
	}
}
