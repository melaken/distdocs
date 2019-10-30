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
	private String reference;
	@Id
	@Column(name="doc_id")
	private long docId;
	@Id
	@Column(name="client_id")
	private long clientId;
	
	public String toString() {
		return "ref = "+reference+" docId = "+docId+"	clientID = "+clientId;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
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
	
}
