package beans;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.file.Files;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Part;

@Named
@RequestScoped
@WebServlet(urlPatterns="/*")
@MultipartConfig(location = "/tmp", maxFileSize = 50 * 1024
* 1024, maxRequestSize = 60 * 1024 * 1024, fileSizeThreshold =
10*1024 * 1024)
public class TestBean implements Serializable{

	private static final long serialVersionUID = 1L;

	private Part file;

	public Part getFile() {
		return file;
	}

	public void setFile(Part file) {
		this.file = file;
	}
	public void upload() {
		System.out.println("in upload TestBean");
		try {
			InputStream input = file.getInputStream();
			File fich = new File(Constante.CHEMIN_DOCS,file.getSubmittedFileName());
		      
		      Files.copy(input, fich.toPath());
		      System.out.println("Everything is ok");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
