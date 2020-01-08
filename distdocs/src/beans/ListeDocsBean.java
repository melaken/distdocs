package beans;

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.Serializable;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.context.FacesContext;
import javax.imageio.ImageIO;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;

import dao.DAOException;
import dao.DocumentDao;
import entities.Document;

@Named
@RequestScoped
public class ListeDocsBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = ListeDocsBean.class.getName();
	
	@EJB
	private DocumentDao docDao;
	private List<Document> liste;
	private List<String> tenLatestDocs;
	private StreamedContent image;
	private Document selectedDoc;
	private String docType;
	private java.util.Date dateParution;
	private String editeur;
	
	@PostConstruct
	public void init() {
		lister();
		
	}
	public List<Document> getListe() {
		return liste;
	}

	public void setListe(List<Document> liste) {
		this.liste = liste;
	}
	public Document getSelectedDoc() {
		return selectedDoc;
	}
	public void setSelectedDoc(Document selectedDoc) {
		this.selectedDoc = selectedDoc;
	}
	public List<String> getTenLatestDocs() {
		return tenLatestDocs;
	}
	public void setTenLatestDocs(List<String> tenLatestDocs) {
		this.tenLatestDocs = tenLatestDocs;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
	public java.util.Date getDateParution() {
		return dateParution;
	}
	public void setDateParution(java.util.Date dateParution) {
		this.dateParution = dateParution;
	}
	public String getEditeur() {
		return editeur;
	}
	public void setEditeur(String editeur) {
		this.editeur = editeur;
	}
	public StreamedContent getImage(){
		if(selectedDoc != null)
			System.out.println("selectedDoc "+selectedDoc.getPremiereCouverture());
		FacesContext context = FacesContext.getCurrentInstance();
		StreamedContent content = new DefaultStreamedContent();
		try {
			ByteArrayOutputStream bos = new ByteArrayOutputStream();
			String fileName = context.getExternalContext().getRequestParameterMap().get("cover");
			if(fileName != null && !fileName.isEmpty()) {
				BufferedImage img = ImageIO.read(new File(Constante.CHEMIN_IMAGES,fileName));
				int w = img.getWidth(null);
				int h = img.getHeight(null);
			
				// image is scaled two times at run time
				int scale = 2;
			
				BufferedImage bi = new BufferedImage(w * scale, h * scale,
						BufferedImage.TYPE_INT_ARGB);
				Graphics g = bi.getGraphics();
			
				g.drawImage(img, 10, 10, w * scale, h * scale, null);
			
				ImageIO.write(bi, "png", bos);
				System.out.println("getImages() in else");
				content=  new DefaultStreamedContent(new ByteArrayInputStream(
						bos.toByteArray()), "image/png");
			}
		}catch(Throwable ex) {
			Logger.getLogger(MODULE).log(Level.SEVERE, ex.getMessage(), ex);
			ex.printStackTrace();
		}
		return content;

	}
	public void setImage(StreamedContent image) {
		this.image = image;
	}
	private void lister() {
		try {
			liste = docDao.lister();
			tenLatestDocs = docDao.tenLatestDocs();
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void trier() {
		lister();
		System.out.println("docType "+docType+" editeur = "+editeur+" dateParution = "+dateParution);
		
		if(docType != null && !docType.isEmpty())
			liste = liste.parallelStream().filter(d -> d.getDocType().equals(docType)).collect(Collectors.toList());
		if(editeur != null) {
			Long editeurId = Long.parseLong(editeur);
			liste = liste.parallelStream().filter(d -> d.getEditeur().equals(editeurId)).collect(Collectors.toList());
		}
		if(dateParution != null) {
			java.sql.Date dt = new java.sql.Date(dateParution.getTime());
			liste = liste.parallelStream().filter(d -> d.getDateParution().equals(dt)).collect(Collectors.toList());
		}
//		reload();
	}
	private void reload() {
		FacesContext fc = FacesContext.getCurrentInstance();
		Constante.redirect(fc, ((HttpServletRequest) fc.getExternalContext().getRequest()).getRequestURI(), MODULE);
	}
}
