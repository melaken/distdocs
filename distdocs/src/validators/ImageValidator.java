package validators;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.faces.FacesException;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.servlet.http.Part;

@FacesValidator(value= "imageValidator")
public class ImageValidator implements Validator {

	private static final String FILE_NOT_IMAGE="Ce fichier doit être une image";
	private static final long TAILLE_MIN=0;
	private static final String EMPTY_FILE="Fichier vide";
	@Override
	public void validate(FacesContext ctx,UIComponent comp, Object value) {
		try {
			if(value == null)
				throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, "Aucune image sélectionnée", null));
			Part file = (Part)value;
	        	
			if(file.getSize() <= TAILLE_MIN)
				throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, EMPTY_FILE, null));
			
	        if(!file.getContentType().contains("image")) {
	        	throw new ValidatorException(new FacesMessage( FacesMessage.SEVERITY_ERROR, FILE_NOT_IMAGE, null));
	        }
		}catch (NullPointerException e) {
		      e.printStackTrace();
		}
	}
}
