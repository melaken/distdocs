package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class Utilisateur {

	@Id
	@NotNull( message = "Veuillez saisir une adresse email" )
	@Pattern( regexp = "([^.@]+)(\\.[^.@]+)*@([^.@]+\\.)+([^.@]+)",
	message = "Merci de saisir une adresse mail valide" )
	private String email;
	@Column( name = "mot_de_passe" )
	@NotNull( message = "Veuillez saisir un mot de passe" )
	@Size( min = 3, message = "Le mot de passe doit contenir au moins 3 caracrères")
	private String motDePasse;
	@NotNull( message = "Veuillez saisir un nom d'utilisateur" )
	@Size( min = 3, message = "Le nom d'utilisateur doit contenir au moins 3 caractères" )
	private String nom;
	private String prenom;
	private long numTel;
	private String userType;
	private Timestamp dateCreation;
}
