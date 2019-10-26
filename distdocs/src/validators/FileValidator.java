package validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.servlet.http.Part;

@FacesValidator(value= "fileValidator")
public class FileValidator implements Validator{
	private static final String EMPTY_FILE="Fichier vide";
	private static final String FILE_TOO_BIG="Fichier trop grand";
	private static final String FILE_NOT_PDF="Le fichier doit être au format PDF";
	private static final long TAILLE_MAX=1024*10000;
	private static final long TAILLE_MIN=0;
	
	@Override
	public void validate(FacesContext ctx,UIComponent comp, Object value)  throws ValidatorException{
//		Part file = (Part)value;
//		if(file.getSize() <= TAILLE_MIN)
//			throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, EMPTY_FILE, null));
////		else if (file.getSize() > TAILLE_MAX) {
////			throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, FILE_TOO_BIG, null));
////		}
//		else if (!file.getContentType().contains("pdf") || !file.getContentType().contains("application")) {
//			throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, FILE_NOT_PDF, null));
//		}
//	}
}
}