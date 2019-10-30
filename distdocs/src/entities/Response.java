package entities;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="REPONSE")
@XmlAccessorType(XmlAccessType.FIELD)
public class Response {
    
    @XmlElement(name = "REF")
    private String ref;
    @XmlElement(name = "INTERFACEID")
    private String interfaceId;
    @XmlElement(name = "STATUT")
    private Integer statut;
    @XmlElement(name = "TEL_CLIENT")
    private Integer telClient;

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

    public Integer getTelClient() {
        return telClient;
    }

    public void setTelClient(Integer telClient) {
        this.telClient = telClient;
    }

    
    @Override
     public String toString() {
         return "Reponse{" +
                "interfaceId=" + interfaceId + 
                ", ref=" + ref +
                ", statut=" + statut +
                ", telClient=" + telClient +
                '}';
     }
    public Response(){
        super();
    }
}
