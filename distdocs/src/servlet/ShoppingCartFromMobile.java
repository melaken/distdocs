package servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.ejb.EJB;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import beans.Constante;
import dao.DAOException;
import dao.DocsAchetesDao;
import dao.TokenDao;
import dao.TransactionDao;
import dao.UtilisateurDao;
import entities.DocsAchetes;
import entities.Etat;
import entities.Transaction;
import entities.Utilisateur;


@WebServlet(urlPatterns = {"/shoppingCartFromMobile"})
public class ShoppingCartFromMobile extends HttpServlet{
	private static final long serialVersionUID = 1L;
	@EJB
	private TransactionDao transDao;
	@EJB
	private TokenDao tokenDao;
	@EJB
	private UtilisateurDao userDao;
	@EJB
	private DocsAchetesDao daDao;

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {

		String email = request.getParameter("email");
		String docs = request.getParameter("docs");
		float montant = Float.parseFloat(request.getParameter("montant").trim());
		String tel_client = request.getParameter("numtel");
		System.out.println("email "+email);
		System.out.println("docs "+docs);
		System.out.println("montant "+montant);
		System.out.println("tel_client "+tel_client);

		String subStr = docs.substring(1, docs.length()-1);
		System.out.println("subStr "+subStr);
		String[] docIds = subStr.split(",");
		
		Utilisateur user = null;
		try {
			user = userDao.trouver(email.trim());
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(user != null) {
			String ref = genererRef();
			Transaction trans = setTransaction(user.getId(),tel_client, Constante.tel_marchand, montant, ref);
			List<DocsAchetes> liste = docsAchetes(ref, user.getId(), docIds) ;
			try {
				transDao.creer(trans);
				daDao.storeDocsAchetes(liste);
				StringBuffer token = new StringBuffer(tokenDao.getLatestToken().getToken());
				System.out.println("token "+token);
				sendPost(tel_client,Constante.tel_marchand,montant,ref,token.toString());
			} catch (DAOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	private void sendPost(String tel_client,String tel_marchand,float montant,String reference,String token) {
		try {
			String urlParameters="tel_marchand="+tel_marchand+"&tel_client="+tel_client+"&montant="+montant+
					"&ref="+reference+"&token="+token;
			byte[] postData = urlParameters.getBytes(StandardCharsets.UTF_8);
			URL obj = new URL(Constante.url_api_rest);
			HttpsURLConnection conn = (HttpsURLConnection) obj.openConnection();
		
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setDoOutput(true);
			
			OutputStream os = conn.getOutputStream();
			 os.write(postData);
			 os.flush();
			os.close();
			int responseCode = conn.getResponseCode();
			System.out.println("POST Response Code :: " + responseCode);

			if (responseCode == HttpURLConnection.HTTP_OK) { //success
				System.out.println("HTTP_OK success");
				BufferedReader in = new BufferedReader(new InputStreamReader(
						conn.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();

				String str = response.toString().trim();
				String rep = str.substring(str.indexOf('{'),str.indexOf('}')+1);
				
				try {
					
					JSONObject jsonObject = new JSONObject(rep);
					System.out.println("JSONObject status "+jsonObject.get("status"));
					System.out.println("JSONObject response_code "+jsonObject.get("response_code"));
					
		        } catch (Throwable e) {
		        	e.printStackTrace();
		        }
				
				// print result
				System.out.println("str "+str);
				System.out.println("rep "+rep.trim());
			} else {
				System.out.println("POST request not worked");
			}
		}catch(Throwable ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
	}
	private String genererRef() {
		String ref = null;
		do{
			ref = UUID.randomUUID().toString().substring(0, 13);
		}while(transDao.getTransactionByRef(ref) != null);
		return ref;
	}
	private Transaction setTransaction(long clientId,String tel_client,String tel_marchand,float montant,String ref) {
		Transaction trans = new Transaction();
		trans.setReference(ref);
		trans.setEtat(Etat.INITIE.name());
		trans.setClientId(clientId);
		trans.setMontant(montant);
		Timestamp time = new Timestamp(System.currentTimeMillis());
		trans.setDateAchat(time);
		trans.setLastUpdate(time);
		trans.setMoyenPaiement(Constante.moyen_airtel);
		trans.setTelClient(tel_client);
		
		return trans;
	}
	private List<DocsAchetes> docsAchetes(String ref,long clientId,String[] docIds){
		List<DocsAchetes> liste = new ArrayList<>();
		for(String str : docIds) {
			DocsAchetes doc = new DocsAchetes();
			doc.setClientId(clientId);
			doc.setDocId(Long.parseLong(str.trim()));
			doc.setReference(ref);
			liste.add(doc);
		}
		return liste;
	}
}
