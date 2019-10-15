package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Id;

public class DocsAchetes {

	@Id
	private String numTransaction;
	@Column(name="doc_id")
	private long docId;
	private Utilisateur user;
	@Column(name="date_achat")
	private Timestamp dateAchat;
	@Column(name="compte_debite")
	private String compteDebite;
	@Column(name="moyen_paiement")
	private String moyenPaiement;
}
