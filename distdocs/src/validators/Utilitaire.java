package validators;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;

import entities.Editeur;

public class Utilitaire {

	public static final String ALGO_CHIFFREMENT = "SHA-256";
	public static String chiffrer(String texte){
		ConfigurablePasswordEncryptor passwordEncryptor = new
		ConfigurablePasswordEncryptor();
		passwordEncryptor.setAlgorithm( ALGO_CHIFFREMENT );
		passwordEncryptor.setPlainDigest( false );
		
		return passwordEncryptor.encryptPassword(texte );
	}
	
	 private static Editeur XMLtoPersonExample(String filename) throws Exception {
	        File file = new File(filename);
	        JAXBContext jaxbContext = JAXBContext.newInstance(Editeur.class);

	        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
	        return ((Editeur)jaxbUnmarshaller.unmarshal(file));
	    }
	 public static byte[] readFile(File f) {
	        ByteArrayOutputStream bos = null;
	        try {
	            // File f = new File(url.toURI());
	            FileInputStream fis = new FileInputStream(f);
	            byte[] buffer = new byte[1024];
	            bos = new ByteArrayOutputStream();
	            for (int len; (len = fis.read(buffer)) != -1;) {
	                bos.write(buffer, 0, len);
	            }
	        } catch (FileNotFoundException e) {
	            System.err.println(e.getMessage());
	        } catch (IOException e2) {
	            System.err.println(e2.getMessage());
	        }
	        return bos != null ? bos.toByteArray() : null;
	    }

}
