package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="Editeur")
public class Editeur{
	
	@Id
	private long id;
	@Column(name="maison_edition")
	@NotNull(message="Précisez la maison d'édition")
	private String  maisonEdition;
	
	public String getMaisonEdition() {
		return maisonEdition;
	}
	public void setMaisonEdition(String maisonEdition) {
		this.maisonEdition = maisonEdition;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
