package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name="Utilisateur")
//@Inheritance(strategy = InheritanceType.JOINED)
public class Utilisateur {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotNull( message = "Email obligatoire" )
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
	@Column(name="num_tel")
	@NotNull( message = "Le numéro de téléphone doit contenir 9 chiffres" )
	@Size( min = 9, message = "Le numéro de téléphone doit contenir 9 chiffres")
	private String numTel;
	@Column(name="user_type")
	private String userType;
	@Column(name="date_creation")
	private Timestamp dateCreation;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMotDePasse() {
		return motDePasse;
	}
	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getNumTel() {
		return numTel;
	}
	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public Timestamp getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Timestamp dateCreation) {
		this.dateCreation = dateCreation;
	}
	public String toString() {
		return "nom = "+nom+" prenom = "+prenom+" userType = "+userType+" dateCreation = "+dateCreation+" email = "+email;
	}
	
}
