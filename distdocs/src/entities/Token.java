package entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Token")
public class Token {
	@Id
	private String token;
	@Column(name="date_jour")
	private Timestamp dateJour;
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Timestamp getDateJour() {
		return dateJour;
	}
	public void setDateJour(Timestamp dateJour) {
		this.dateJour = dateJour;
	}
	
	

}
