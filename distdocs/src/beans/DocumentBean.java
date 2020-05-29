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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.imageio.ImageIO;
import javax.inject.Named;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import javax.validation.constraints.NotNull;

import org.primefaces.PrimeFaces;

import com.sun.pdfview.PDFFile;
import com.sun.pdfview.PDFPage;

import dao.DAOException;
import dao.DocumentDao;
import dao.RevueDao;
import entities.DocType;
import entities.Document;
import entities.Revue;
import entities.UserType;
import entities.Utilisateur;
import recherche.IndexException;
import recherche.LuceneWriteIndexFromFile;

@Named
@SessionScoped
public class DocumentBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = DocumentBean.class.getName();
	
	private Document doc;
	@EJB
	private DocumentDao docDao;
	@NotNull(message = "Veuillez sélectionnez le document à publier")
	private Part file;
	@NotNull(message = "Image vide")
	private Part cover;
	@NotNull(message = "Date de parution obligatoire")
	private java.util.Date dateParution;
	private List<Revue> revues;
	@EJB
	private RevueDao revueDao;
	
	@PostConstruct
	public void init() {
		doc = new Document();
		doc.setDocType(DocType.MAGAZINE.name());
		listerRevues();
	}

	public List<Revue> getRevues() {
		listerRevues();
		return revues;
	}
	public void setRevues(List<Revue> revues) {
		this.revues = revues;
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

	private void listerRevues() {
		Utilisateur user = currentUser();
		if(user != null && user.getUserType().equals(UserType.EDITEUR.name())) {
			revues = revueDao.lister().parallelStream().filter(r->r.getEditeur()==user.getId() 
						&& r.getDocType().equals(doc.getDocType()))
					.collect(Collectors.toList());
		}
	}
	private Utilisateur currentUser() {
		FacesContext facesContext = FacesContext.getCurrentInstance();
		ExternalContext  exterNalContext = facesContext.getExternalContext();
      HttpSession session = (HttpSession) exterNalContext.getSession(false);
      Object user = session.getAttribute(Constante.ATTRIB_USER);
      if(user != null)
    	  return (Utilisateur)user;
      else return null;
	}
	public void revueSelected() {
		doc.setDocType(revueDao.trouver(doc.getIdRevue().intValue()).getDocType());
	}
	public void upload() {
		Utilisateur user = currentUser();
		System.out.println("user "+user);
	    try {
	    	if(!verifyCompulsoryFields()) {
	    		throw new ValidationException("Erreur validation");
	    	}
	    	if(user != null) {
	    		System.out.println("title "+doc.getTitre()+" auteurs "+doc.getAuteurs()+"dateP "+dateParution);
		    	InputStream input = file.getInputStream();
		    	InputStream input_cover = cover.getInputStream();
		    	
		    	//System.out.println("LastId "+docDao.lastInsertId());
		      doc.setNom(file.getSubmittedFileName());
		      doc.setDateParution(new java.sql.Date(dateParution.getTime()));
		      long id = docDao.lastInsertId()+1;
		      System.out.println("doc_id in upload() "+id);
		      String p_couverture=id+"_cover";
		      doc.setPremiereCouverture(p_couverture);
		      doc.setEditeur(user.getId());
		      initialiserDateAjout();
		      
		      File fich = new File(Constante.CHEMIN_DOCS,id+"");
		      File fich_cover = new File(Constante.CHEMIN_IMAGES,p_couverture);
		      System.out.println("B4 writing on disk");
		      //écritures des fichiers sur le disque
		      Files.copy(input, fich.toPath());
		      Files.copy(input_cover, fich_cover.toPath());
		      
		      //indexation du document
		      LuceneWriteIndexFromFile.indexer(fich.toPath());
		      
		      //enregistrement des infos du doc en BD
		      docDao.creer(doc);
		      
		      //createImage("JPG",fich,id+"_cover.jpg");
		      System.out.println("Everything is ok");
		      
		      Constante.redirect(FacesContext.getCurrentInstance(), Constante.ACCUEIL+"?faces-redirect=true", MODULE);
	    	}else {
	    		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN," ", "Veuillez vous connecter");
	            PrimeFaces.current().dialog().showMessageDynamic(message);
	    	}
	    }catch (ValidationException e) {
	    	System.out.println("erreur lors de la validation des champs");
	    	 e.printStackTrace();
	    }catch(DAOException e) {
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN, " ", "Une erreur est survenue.");
	        PrimeFaces.current().dialog().showMessageDynamic(message);
		}catch (IndexException e) {
			System.out.println("Erreur lors de l'indexation");
	    	 e.printStackTrace();
	    }catch(Throwable e) {
			Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
		      e.printStackTrace();
		}
	  }
	
	private void initialiserDateAjout() {
		Timestamp date = new Timestamp( System.currentTimeMillis());
		doc.setDateAjout(date );
	}
	private boolean verifyCompulsoryFields() {
		if(doc.getResume() == null || doc.getNumeroEdition() == null)
			return false;
		else return true;
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
