package beans;

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.context.FacesContext;
import javax.imageio.ImageIO;
import javax.inject.Named;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;

import dao.DocumentDao;
import entities.Document;
import entities.Utilisateur;

@Named
@RequestScoped
public class ListeDocsBean {

	private static final long serialVersionUID = 1L;
	private final String MODULE = ListeDocsBean.class.getName();
	
	@EJB
	private DocumentDao docDao;
	private List<Document> liste;
	private List<String> tenLatestDocs;
	private StreamedContent image;
	private Document selectedDoc;
	
	@PostConstruct
	public void init() {
		//System.out.println();
		liste = docDao.lister();
		tenLatestDocs = docDao.tenLatestDocs();
		System.out.println("10 last pdf");
		for(String d : tenLatestDocs) {
			System.out.println(d);
		}
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
	public StreamedContent getImage(){
		
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
}
