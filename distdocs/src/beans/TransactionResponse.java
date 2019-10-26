package beans;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/response")
public class TransactionResponse extends HttpServlet{

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
	
		String reponse= request.getQueryString();
		System.out.println("reponse "+reponse);
//		HtmlEscape.unescapeHtml(reponse);
		System.out.println(" param "+request.getParameter("n"));
		
//		URL url = new URL("https://www.example.com/login");
//		URLConnection con = url.openConnection();
//		HttpURLConnection http = (HttpURLConnection)con;
//		http.setRequestMethod("POST"); // PUT is another valid option
//		http.setDoOutput(true);
//		http
	}
}
