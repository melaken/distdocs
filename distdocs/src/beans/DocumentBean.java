package beans;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.io.Serializable;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.file.Files;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.imageio.ImageIO;
import javax.inject.Named;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import javax.transaction.Transactional;

import org.primefaces.event.FileUploadEvent;

import com.sun.pdfview.PDFFile;
import com.sun.pdfview.PDFPage;

import dao.DocumentDao;
import entities.Document;
import entities.Utilisateur;

@Named
@RequestScoped
public class DocumentBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = DocumentBean.class.getName();
	
	private Document doc;
	@EJB
	private DocumentDao docDao;
	private Part file;
	private Part cover;
	private java.util.Date dateParution;
	
	@PostConstruct
	public void init() {
		doc = new Document();
	}

	public Document getDoc() {
		return doc;
	}

	public void setDoc(Document doc) {
		this.doc = doc;
	}
	public Date getDateParution() {
		return dateParution;
	}

	public void setDateParution(Date dateParution) {
		this.dateParution = dateParution;
	}

	public Part getFile() {
		return file;
	}

	public void setFile(Part file) {
		this.file = file;
	}
	
	 public Part getCover() {
		return cover;
	}

	public void setCover(Part cover) {
		this.cover = cover;
	}

	private Utilisateur currentUser() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
      HttpSession session = (HttpSession) exterNalContext.getSession(false);
      Object user = session.getAttribute("user");
      if(user != null)
    	  return (Utilisateur)user;
      else return null;
	}
	 //@Transactional
	public void upload() {
		Utilisateur user = currentUser();
		System.out.println("user "+user);
	    try {
	    	
	    	if(user != null) {
		    	InputStream input = file.getInputStream();
		    	InputStream input_cover = cover.getInputStream();
		    	
		    	System.out.println("LastId "+docDao.lastInsertId());
		      doc.setNom(file.getSubmittedFileName());
		      doc.setDateParution(new java.sql.Date(dateParution.getTime()));
		      long id = docDao.lastInsertId()+1;
		      String p_couverture=id+"_cover";
		      doc.setPremiereCouverture(p_couverture);
		      doc.setEditeur(user.getId());
		      initialiserDateAjout();
		      
		      docDao.creer(doc);
		      
		      File fich = new File(Constante.CHEMIN_DOCS,id+"");
		      File fich_cover = new File(Constante.CHEMIN_IMAGES,p_couverture);
		      
		      Files.copy(input, fich.toPath());
		      Files.copy(input_cover, fich_cover.toPath());
		      //createImage("JPG",fich,id+"_cover.jpg");
		      System.out.println("Everything is ok");
		      
		      FacesContext facesContext = FacesContext.getCurrentInstance();
				ExternalContext  exterNalContext = facesContext.getExternalContext();
		      exterNalContext.redirect("../../index.xhtml");
	    	}
	    } catch (Exception e) {
	    	Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
	      e.printStackTrace();
	    }
	  }
	
	private void initialiserDateAjout() {
		Timestamp date = new Timestamp( System.currentTimeMillis());
		doc.setDateAjout(date );
	}
	void createImage(String format,File pdfFile, String fileName) {
		try {
			RandomAccessFile raf = new RandomAccessFile(pdfFile, "r");
			FileChannel channel = raf.getChannel();
			ByteBuffer buf = channel.map(FileChannel.MapMode.READ_ONLY, 0, channel.size());
			PDFFile pdf = new PDFFile(buf);
			PDFPage page = pdf.getPage(0);
		
			// create the image
			Rectangle rect = new Rectangle(0, 0, (int) page.getBBox().getWidth(),
			                                 (int) page.getBBox().getHeight());
			BufferedImage bufferedImage = new BufferedImage(rect.width, rect.height,
			                                  BufferedImage.TYPE_INT_RGB);
		
			Image image = page.getImage(rect.width, rect.height,    // width & height
			                            rect,                       // clip rect
			                            null,                       // null for the ImageObserver
			                            true,                       // fill background with white
			                            true                        // block until drawing is done
			);
			Graphics2D bufImageGraphics = bufferedImage.createGraphics();
			bufImageGraphics.drawImage(image, 0, 0, null);
			ImageIO.write(bufferedImage, format, new File( Constante.CHEMIN_IMAGES,fileName ));
			doc.setPremiereCouverture(fileName);
			raf.close();
		}catch(Exception e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
			e.printStackTrace();
		}
	}
}
