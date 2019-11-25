package beans;

import java.util.HashMap;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

@Path("generic")
public class TestRestful {
    @SuppressWarnings("unused")
    @Context
    private UriInfo context;

    /**
     * Default constructor. 
     */
    public TestRestful() {
        // TODO Auto-generated constructor stub
    }

    /**
     * Retrieves representation of an instance of TestRestful
     * @return an instance of String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        // TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of TestRestful
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
    	MultivaluedMap<String, String> params =  context.getQueryParameters();
    	System.out.println(""+params.get("lastDate"));
    	System.out.println(params.get("email"));
    }

}