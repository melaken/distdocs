package beans;

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

import dao.TransactionDao;
import entities.Etat;
import entities.Response;
import entities.Transaction;

@WebServlet(urlPatterns = { "/response"})
public class TransactionResponse extends HttpServlet{

	private static final long serialVersionUID = 1L;
	private static final int STATUT = 200;
	@EJB
	TransactionDao dao;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String xml = null;
		Response rep = null;
		System.out.println("in Response");
        try {
        		if(request.getParameter("ref") != null && request.getParameter("statut") != null 
        				&& Integer.parseInt(request.getParameter("statut")) == STATUT) {
        			Object obj = dao.getTransactionByRef(request.getParameter("ref"));
	        			System.out.println("in Response 4");
        			if(obj != null) {
	        			this.getServletContext().getRequestDispatcher(Constante.SUCCESS).forward(request, response);	
	        			System.out.println("in Response 5");
        			}else	this.getServletContext().getRequestDispatcher(Constante.ECHEC).forward(request, response);
	           		 
        		}else {
                byte[] xmlData = new byte[request.getContentLength()];
                System.out.println("xmlData "+xmlData);
                System.out.println("in Response 1");
                //Start reading XML Request as a Stream of Bytes
                InputStream sis = request.getInputStream();
                BufferedInputStream bis = new BufferedInputStream(sis);

                bis.read(xmlData, 0, xmlData.length);

                System.out.println("in Response 2");
                if (request.getCharacterEncoding() != null) {
                        xml = new String(xmlData, request.getCharacterEncoding());
                        rep = XMLtoReponseExample(xml);
                } else {
                        xml = new String(xmlData);
                        System.out.println("xml "+xml);
                        rep = XMLtoReponseExample(xml);
                }
                System.out.println("in Response 3");
                if(rep !=null && rep.getStatut() == STATUT) {
            		Object obj = dao.getTransactionByRef(rep.getRef());
            		if(obj != null) {
            			Transaction trans = (Transaction)obj;
            			trans.setEtat(Etat.TERMINE.name());
            			trans.setTelClient(rep.getTelClient());
            			trans.setLastUpdate(new Timestamp(System.currentTimeMillis()));
            			dao.update(trans);
            		}
                }
                else {
                	 System.out.println("in Response 6");
                	 this.getServletContext().getRequestDispatcher(Constante.ECHEC).forward(request, response);
                	System.out.println("in Response 7");
                }
        		}
        } catch (Throwable ex) {
        	System.out.println("in Response 8");
        	ex.printStackTrace();
        	this.getServletContext().getRequestDispatcher(Constante.ECHEC).forward(request, response);
        	 System.out.println("in Response 9");
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
