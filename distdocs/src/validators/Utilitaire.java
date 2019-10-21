package validators;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;

public class Utilitaire {

	public static final String ALGO_CHIFFREMENT = "SHA-256";
	public static String chiffrer(String texte){
		ConfigurablePasswordEncryptor passwordEncryptor = new
		ConfigurablePasswordEncryptor();
		passwordEncryptor.setAlgorithm( ALGO_CHIFFREMENT );
		passwordEncryptor.setPlainDigest( false );
		
		return passwordEncryptor.encryptPassword(texte );
	}
}
