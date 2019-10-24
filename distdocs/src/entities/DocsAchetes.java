package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="DocsAchetes")
public class DocsAchetes {

	@Id
	@Column(name="num_transaction")
	private String numTransaction;
	@Column(name="doc_id")
	private long docId;
	@Column(name="client_id")
	private long clientId;
	@Column(name="date_achat")
	private Timestamp dateAchat;
	@Column(name="compte_debite")
	private String compteDebite;
	@Column(name="moyen_paiement")
	private String moyenPaiement;
	public String getNumTransaction() {
		return numTransaction;
	}
	public void setNumTransaction(String numTransaction) {
		this.numTransaction = numTransaction;
	}
	public long getDocId() {
		return docId;
	}
	public void setDocId(long docId) {
		this.docId = docId;
	}
	public long getClientId() {
		return clientId;
	}
	public void setClientId(long clientId) {
		this.clientId = clientId;
	}
	public Timestamp getDateAchat() {
		return dateAchat;
	}
	public void setDateAchat(Timestamp dateAchat) {
		this.dateAchat = dateAchat;
	}
	public String getCompteDebite() {
		return compteDebite;
	}
	public void setCompteDebite(String compteDebite) {
		this.compteDebite = compteDebite;
	}
	public String getMoyenPaiement() {
		return moyenPaiement;
	}
	public void setMoyenPaiement(String moyenPaiement) {
		this.moyenPaiement = moyenPaiement;
	}
	
}
