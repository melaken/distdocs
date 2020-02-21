package entities;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Document")
public class Document {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nom;
	@Column(name = "date_ajout")
	private Timestamp	dateAjout;
	@Column(name = "date_parution")
	private java.sql.Date	dateParution;
	@Column(name = "doc_type")
	private String docType;
	@NotNull(message = "Le prix est obligatoire")
	private float prix;
	@Column(name="numero_edition")
	@NotNull(message = "Le numéro d'édition est obligatoire")
	private String numeroEdition;
	private Long editeur;
	@NotNull(message = "Le résumé ne peut être vide")
	private String resume;
	@Column(name = "premiere_couverture")
	private String premiereCouverture;
	private String titre;
	private String auteurs;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Timestamp getDateAjout() {
		return dateAjout;
	}
	public void setDateAjout(Timestamp dateAjout) {
		this.dateAjout = dateAjout;
	}
	public Date getDateParution() {
		return dateParution;
	}
	public void setDateParution(java.sql.Date dateParution) {
		this.dateParution = dateParution;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public String getNumeroEdition() {
		return numeroEdition;
	}
	public void setNumeroEdition(String numeroEdition) {
		this.numeroEdition = numeroEdition;
	}
	public Long getEditeur() {
		return editeur;
	}
	public void setEditeur(Long editeur) {
		this.editeur = editeur;
	}
	public String getResume() {
		return resume;
	}
	public void setResume(String resume) {
		this.resume = resume;
	}
	public String getPremiereCouverture() {
		return premiereCouverture;
	}
	public void setPremiereCouverture(String premiereCouverture) {
		this.premiereCouverture = premiereCouverture;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getAuteurs() {
		return auteurs;
	}
	public void setAuteurs(String auteurs) {
		this.auteurs = auteurs;
	}
	@Override
	public boolean equals(Object d) {
		if(this.id == ((Document)d).getId())
				return true;
		else return false;
	}
	
}
