package beans;

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.Serializable;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;
import javax.imageio.ImageIO;
import javax.inject.Named;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;

import dao.DAOException;
import dao.DocumentDao;
import dao.EditeurDao;
import dao.RevueDao;
import entities.DocType;
import entities.Document;
import entities.Editeur;
import entities.Revue;

@Named
@SessionScoped
public class ListeDocsBean implements Serializable{

	private static final long serialVersionUID = 1L;
	private final String MODULE = ListeDocsBean.class.getName();

	@EJB
	private DocumentDao docDao;
	@EJB
	private EditeurDao editDao;
	@EJB
	private RevueDao revueDao;
	private List<Document> liste;
	private List<String> tenLatestDocs;
	private StreamedContent image;
	private Document selectedDoc;
	private String docType;
	private java.util.Date dateParution;
	private String editeur;
	private String auteurs;
	private String titre;
	private java.util.Date month ;
	private List<Editeur> editeurs;
	private String numeroEdition;
	private List<Revue> revues;
	private String rev;

	@PostConstruct
	public void init() {
		lister();
		tenLatestDocs();
		editeurs = editDao.lister();
		revues = revueDao.lister();

	}
	public List<Document> getListe() {
		trier();
		return liste;
	}

	public void setListe(List<Document> liste) {
		this.liste = liste;
	}
	public String getNumeroEdition() {
		return numeroEdition;
	}
	public void setNumeroEdition(String num) {
		numeroEdition = num;
	}
	public Document getSelectedDoc() {
		return selectedDoc;
	}
	public void setSelectedDoc(Document selectedDoc) {
		Document doc = selectedDoc;
		try {
			doc = docDao.trouver(selectedDoc.getId());
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.selectedDoc = doc;
		System.out.println("selectedDoc.resume : "+this.selectedDoc.getResume());
		System.out.println("selectedDoc.id : "+this.selectedDoc.getId());
	}
	public List<Editeur> getEditeurs(){
		return editeurs;
	}
	public List<Revue> getRevues(){
		return revues;
	}
	public void setRev(String revue) {
		rev = revue;
	}
	public String getRev() {
		return rev;
	}
	public boolean getDisplayMag() {
		return docType != null && docType.equals(DocType.MAGAZINE.name()) ? true : false;
	}
	public boolean getDisplayJour() {
		return  docType != null && docType.equals(DocType.JOURNAL.name()) ? true : false;
	}
	public boolean getDisplayLivr() {
		return  docType != null && docType.equals(DocType.LIVRE.name()) ? true : false;
	}
	public List<String> getTenLatestDocs() {
		tenLatestDocs();
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
	public String getAuteurs() {
		return auteurs;
	}
	public void setAuteurs(String auteurs) {
		this.auteurs = auteurs;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getEditeur() {
		return editeur;
	}
	public void setEditeur(String editeur) {
		this.editeur = editeur;
	}
	public String getNomEditeur(int id) {
		//		System.out.println("in getNomEditeur id="+id);
		//		Editeur ed = editDao.trouver(id);
		return editDao.trouver(id).getMaisonEdition();
	}
	public java.util.Date getMonth() {
		return month;
	}
	public void setMonth(java.util.Date month) {
		System.out.println("setMonth month = "+month);
		this.month = month;
	}
	public StreamedContent getImage(){
		if(selectedDoc != null)
			System.out.println("selectedDoc "+selectedDoc.getPremiereCouverture());
		FacesContext context = FacesContext.getCurrentInstance();
		StreamedContent content = new DefaultStreamedContent();
		try {
			ByteArrayOutputStream bos = new ByteArrayOutputStream();
			String fileName = context.getExternalContext().getRequestParameterMap().get("cover");
			String type = context.getExternalContext().getRequestParameterMap().get("type");
			if(fileName != null && !fileName.isEmpty()) {
				BufferedImage img = null;
				if(type != null && type.equals("logo"))
					img = ImageIO.read(new File(Constante.CHEMIN_LOGO,fileName));
				else
					img = ImageIO.read(new File(Constante.CHEMIN_IMAGES,fileName));
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
	private void tenLatestDocs() {
		try {
			tenLatestDocs = docDao.tenLatestDocs();
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void lister() {
		try {
			liste = docDao.lister();
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private int getYear(java.util.Date date) {
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		return calendar.get(Calendar.YEAR);
	}
	private int getMonth(java.util.Date date) {
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		return calendar.get(Calendar.MONTH) + 1;
	}
	public void trier() {
		lister();
		System.out.println("docType "+docType+" editeur = "+editeur+" dateParution = "+dateParution+" month = "+month);
		System.out.println("before trier liste size "+liste.size());

		if(docType != null && !docType.isEmpty()) {
			liste = liste.parallelStream().filter(d -> d.getDocType().equals(docType)).collect(Collectors.toList());
		
			if(docType.equals(DocType.LIVRE.name())) {
				if(titre != null && !titre.isEmpty())
					liste = liste.parallelStream().filter(d -> d.getTitre().contains(titre)).collect(Collectors.toList());
				if(auteurs != null && !auteurs.isEmpty())
					liste = liste.parallelStream().filter(d -> d.getTitre().contains(auteurs)).collect(Collectors.toList());
			}
			if (docType.equals(DocType.MAGAZINE.name()) && month != null) {
				System.out.println("month = "+ month);
				int year = getYear(month);
				int mois = getMonth(month);
				liste = liste.parallelStream().filter(d -> getYear(d.getDateParution())==year 
						&& getMonth(d.getDateParution())==mois).collect(Collectors.toList());
			}
			if(dateParution != null && docType.equals(DocType.JOURNAL.name())) {
				java.sql.Date dt = new java.sql.Date(dateParution.getTime());
				liste = liste.parallelStream().filter(d -> d.getDateParution().equals(dt)).collect(Collectors.toList());
			}
		}
		if(editeur != null) {
			Long editeurId = Long.parseLong(editeur);
			liste = liste.parallelStream().filter(d -> d.getEditeur().equals(editeurId)).collect(Collectors.toList());
			if(rev != null && !rev.isEmpty()) {
				long idRev = Long.parseLong(rev);
				liste = liste.parallelStream().filter(d -> d.getIdRevue() != null && d.getIdRevue()== idRev).
						collect(Collectors.toList());
				if(numeroEdition != null && !numeroEdition.isEmpty())
					liste = liste.parallelStream().filter(d -> d.getNumeroEdition().equals(numeroEdition)).collect(Collectors.toList());
			}

		}
	System.out.println("after trier liste size "+liste.size());
}

public void listener(AjaxBehaviorEvent event) {
	System.out.println("in ListeDocsBean listener");
	if(docType != null && !docType.isEmpty() || editeur != null && !editeur.isEmpty()) {
		revues = revueDao.lister();
		System.out.println("before filter revues size = "+revues.size());
		if(docType != null && !docType.isEmpty())
			revues = revues.parallelStream().filter(r -> r.getDocType().equals(docType)).collect(Collectors.toList());
		if(editeur != null && !editeur.isEmpty()) {
			long editeurId = Long.parseLong(editeur);
			revues = revues.parallelStream().filter(r -> r.getEditeur() == editeurId).collect(Collectors.toList());
		}
		System.out.println("after filter revues size = "+revues.size());
	}
}
public void listenernumeroEdition(AjaxBehaviorEvent event) {

}
public void listenerRevue(AjaxBehaviorEvent event) {

}
}
