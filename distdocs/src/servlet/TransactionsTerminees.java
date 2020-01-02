package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.json.JSONObject;

import dao.TransactionDao;

@WebServlet(urlPatterns = { "/transactionsTerminees"})
public class TransactionsTerminees extends HttpServlet{

	private static final long serialVersionUID = 1L;
	@EJB
	TransactionDao dao;

	public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String refs = request.getParameter("refs");
		String subStr = refs.substring(1, refs.length()-1);
		System.out.println("subStr "+subStr);
		String[] refsTab = subStr.split(",");
		
		List<String> results = dao.checkTransactions(refsTab);
		PrintWriter out = response.getWriter();
		JSONObject obj = new JSONObject();
		obj.put("refs", results);
		out.println(obj);
	}
}
