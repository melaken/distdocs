package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Document")
public class Document {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String docId;
	private String nom;
	@Column(name = "date_ajout")
	private Timestamp	dateAjout;
	@Column(name = "date_type")
	private DocType docType;
	private float prix;
	@Column(name="numero_edition")
	private String numeroEdition;
	private Editeur editeur;
	
}
