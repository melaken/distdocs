package recherche;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import beans.Constante;
import dao.DAOException;
public class LuceneReadIndexFromFile {

	public static final int STOP_WORD_MAX_LENGTH = 2;
	
	public static List<Document> rechercher(String chaine ) throws IndexException{
		List<Document> liste = new ArrayList<>();
		//Create lucene searcher. It search over a single IndexReader.
		try {
			 IndexSearcher searcher;
			searcher = createSearcher();
			//Search indexed contents using search term
	        TopDocs foundDocs = searchInContent(chaine, searcher);
	         
	        //Total found documents
	        System.out.println("Total Results :: " + foundDocs.totalHits);
	         
	        //Let's print out the path of files which have searched term
	        for (ScoreDoc sd : foundDocs.scoreDocs){
	            Document d = searcher.doc(sd.doc);
	            liste.add(d);
	            System.out.println("fileName : "+ d.get("fileName") + ", Score : " + sd.score);
	        }
		} catch (IOException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new IndexException(e);
		}
        return liste;
	}
	 private static TopDocs searchInContent(String textToFind, IndexSearcher searcher) throws IOException{
	        //Create search query
	        QueryParser qp = new QueryParser("contents", new StandardAnalyzer());
	        //qp.setDefaultOperator(QueryParser.Operator.OR);
	        
	        String words[] = textToFind.split(" ");
	        StringBuilder finalText = new StringBuilder();
	         for(String s : words){
	             if(s.length() > STOP_WORD_MAX_LENGTH){
	                 finalText.append(s+" ");
	             }
	         }
	         System.out.println("finalText "+finalText.toString().trim());
	        Query query = qp.createPhraseQuery("contents", finalText.toString().trim());
	        //search the index
	        TopDocs hits = searcher.search(query, 10);
	        return hits;
	    }
	 
	    private static IndexSearcher createSearcher() throws IOException{
	        Directory dir = FSDirectory.open(Paths.get(Constante.INDEX_PATH));
	         
	        //It is an interface for accessing a point-in-time view of a lucene index
	        IndexReader reader = DirectoryReader.open(dir);
	         
	        //Index searcher
	        IndexSearcher searcher = new IndexSearcher(reader);
	        return searcher;
	    }
}
