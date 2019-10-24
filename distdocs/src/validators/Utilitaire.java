package validators;

import java.io.File;

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
}
