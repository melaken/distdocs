package servlet;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.sql.Timestamp;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;

import beans.Constante;
import dao.TokenDao;
import dao.TransactionDao;
import entities.Etat;
import entities.RestResponse;
import entities.Token;
import entities.Transaction;

@WebServlet(urlPatterns = { "/restResponse"})
public class TransactionRestResponse extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@EJB
	TransactionDao dao;
	@EJB
	TokenDao tokenDao;

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		StringBuffer xml = null;
		RestResponse rep = null;
		System.out.println("in Response");
		try {
			if(Integer.parseInt(request.getParameter("statut")) == Constante.STATUT) {
				Object obj = dao.getTransactionByRef(request.getParameter("ref"));
				if(obj != null) {
					byte[] xmlData = new byte[request.getContentLength()];
					System.out.println("xmlData "+xmlData);
					System.out.println("in Response 1");
					//Start reading XML Request as a Stream of Bytes
					InputStream sis = request.getInputStream();
					BufferedInputStream bis = new BufferedInputStream(sis);
	
					bis.read(xmlData, 0, xmlData.length);
	
					System.out.println("in Response 2");
					if (request.getCharacterEncoding() != null) {
						xml = new StringBuffer(new String(xmlData, request.getCharacterEncoding()));
						rep = XMLtoReponseExample(xml);
					} else {
						xml = new StringBuffer(new String(xmlData));
						System.out.println("xml "+xml);
						rep = XMLtoReponseExample(xml);
					}
					System.out.println("in Response 3");
					if(rep !=null && rep.getStatut() == Constante.STATUT) {
	//					if(obj != null) {
							Transaction trans = (Transaction)obj;
							trans.setEtat(Etat.TERMINE.name());
							trans.setLastUpdate(new Timestamp(System.currentTimeMillis()));
							dao.update(trans);
							storeToken(rep.getToken());
					}else{
						echecTransaction();
					}
				}
				else {
					echecTransaction();
				}
			}else {
				echecTransaction();
			}
		} catch (Throwable ex) {
			System.out.println("in Response 8");
			ex.printStackTrace();
//			this.getServletContext().getRequestDispatcher(Constante.ECHEC).forward(request, response);
			System.out.println("in Response 9");
		}
	}
	private RestResponse XMLtoReponseExample(StringBuffer buffer) throws Exception {

		JAXBContext jaxbContext = JAXBContext.newInstance(RestResponse.class);

		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader( buffer.toString());
		StreamSource stream = new StreamSource( reader ) ;
		return (RestResponse) jaxbUnmarshaller.unmarshal(stream);
	}
	private void storeToken(String str_token) {
		Token token = tokenDao.getLatestToken();
		token.setToken(str_token);
		token.setDateJour(new Timestamp(System.currentTimeMillis()));
		tokenDao.update(token);
	}

	private void echecTransaction() {
		
	}
}
