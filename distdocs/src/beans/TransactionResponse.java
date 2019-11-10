package beans;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;

import dao.TransactionDao;
import entities.Etat;
import entities.Response;
import entities.Transaction;

@WebServlet(urlPatterns = { "/response"})
public class TransactionResponse extends HttpServlet{

	private static final long serialVersionUID = 1L;
	private static final int STATUT = 200;
	private static final String SUCCESS = "/WEB-INF/views/results/paymentSucceed.xhtml";
	private static final String  ECHEC = "/WEB-INF/views/results/paymentFailed.xhtml";
	@EJB
	TransactionDao dao;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String xml = null;
		Response rep = null;
		
		
        try {
   		 
                byte[] xmlData = new byte[request.getContentLength()];

                //Start reading XML Request as a Stream of Bytes
                InputStream sis = request.getInputStream();
                BufferedInputStream bis = new BufferedInputStream(sis);

                bis.read(xmlData, 0, xmlData.length);

                
                if (request.getCharacterEncoding() != null) {
                        xml = new String(xmlData, request.getCharacterEncoding());
                        rep = XMLtoReponseExample(xml);
                } else {
                        xml = new String(xmlData);
                        rep = XMLtoReponseExample(xml);
                }
                if(rep !=null && rep.getStatut() == STATUT) {
            		Object obj = dao.getTransactionByRef(rep.getRef());
            		if(obj != null) {
            			Transaction trans = (Transaction)obj;
            			trans.setEtat(Etat.TERMINE.name());
            			dao.update(trans);
            		}
            		request.getRequestDispatcher(SUCCESS).forward(request, response);	
            		
                }
                else request.getRequestDispatcher(ECHEC).forward(request, response);
                
        } catch (Throwable ex) {
        	ex.printStackTrace();
        }
	}
	private Response XMLtoReponseExample(String buffer) throws Exception {
		
        JAXBContext jaxbContext = JAXBContext.newInstance(Response.class);

        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
        StringReader reader = new StringReader( buffer.toString());
        StreamSource stream = new StreamSource( reader ) ;
        return (Response) jaxbUnmarshaller.unmarshal(stream);
    }
}
