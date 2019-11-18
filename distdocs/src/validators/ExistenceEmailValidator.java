package validators;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.inject.Named;

import dao.DAOException;
import dao.UtilisateurDao;

//@FacesValidator("emailValidator")
@Named
@RequestScoped
public class ExistenceEmailValidator implements Validator {
	private static final String EMAIL_EXISTE_DEJA = "Cette addresse email est déjà utilisée";
	@EJB
	private UtilisateurDao utilisateurDao;
	@Override
	public void validate( FacesContext context, UIComponent component, Object value ) throws ValidatorException {
		try {
			if(value != null ) {
				System.out.println("In first if");
				String email = (String) value;
				if ( utilisateurDao.trouver( email ) != null ) {
					System.out.println("In second if");
					throw new ValidatorException(new FacesMessage(FacesMessage.SEVERITY_ERROR, EMAIL_EXISTE_DEJA, null ) );
				}
			}else {
				System.out.println("In else");
				FacesMessage message = new FacesMessage( FacesMessage.SEVERITY_ERROR, "", "Le champ email ne peut être vide" );
				FacesContext facesContext = FacesContext.getCurrentInstance();
				facesContext.addMessage( component.getClientId(facesContext ), message );
			}
		}catch (Throwable e ) {
			FacesMessage message = new FacesMessage( FacesMessage.SEVERITY_ERROR, "", "Une erreur est survenue" );
			FacesContext facesContext = FacesContext.getCurrentInstance();
			facesContext.addMessage( component.getClientId(facesContext ), message );
			e.printStackTrace();
		}
	}
}