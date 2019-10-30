package beans;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@WebServlet(urlPatterns = { "/test"})
public class TestClass {
//	
//	private static final long serialVersionUID = 1L;
//	public void doGet(HttpServletRequest request, HttpServletResponse response) 
//			throws ServletException, IOException {
//	
//		sendPost();
//	}
	public void sendPost() {
		try {
		String msg="<REPONSE>\n" + 
				"<INTERFACEID>BAKOAI</INTERFACEID>\n" + 
				"<REF>FR0054J7PO478</REF>\n" + 
				"<STATUT>200</STATUT>\n" + 
				"<TEL_CLIENT>07000001</TEL_CLIENT>\n" + 
				"</REPONSE>";
		URL obj = new URL("http://localhost:8080/distdocs/response");
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("POST");
		con.setRequestProperty("content-type", "text/xml");
		
		con.setDoOutput(true);
		OutputStream os = con.getOutputStream();
		os.write(msg.getBytes());
		os.flush();
		os.close();
		
		int responseCode = con.getResponseCode();
		System.out.println("POST Response Code :: " + responseCode);

		if (responseCode == HttpURLConnection.HTTP_OK) { //success
			BufferedReader in = new BufferedReader(new InputStreamReader(
					con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			// print result
			System.out.println(response.toString());
		} else {
			System.out.println("POST request not worked");
		}
		}catch(Throwable ex) {
			ex.printStackTrace();
		}
	}

}
