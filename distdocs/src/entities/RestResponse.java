package entities;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="REPONSE")
@XmlAccessorType(XmlAccessType.FIELD)
public class RestResponse {

	@XmlElement(name = "REF")
    private String ref;
    @XmlElement(name = "INTERFACEID")
    private String interfaceId;
    @XmlElement(name = "STATUT")
    private Integer statut;
    @XmlElement(name = "TOKEN")
    private String token;
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	public String getInterfaceId() {
		return interfaceId;
	}
	public void setInterfaceId(String interfaceId) {
		this.interfaceId = interfaceId;
	}
	public Integer getStatut() {
		return statut;
	}
	public void setStatut(Integer statut) {
		this.statut = statut;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	 @Override
     public String toString() {
         return "RestResponse{" +
                "interfaceId=" + interfaceId + 
                ", ref=" + ref +
                ", statut=" + statut +
                '}';
     }
    public RestResponse(){
        super();
    }
}
