package recherche;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.LongPoint;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.IndexWriterConfig.OpenMode;
import org.apache.lucene.index.Term;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.util.PDFTextStripper;

import beans.Constante;
import beans.PanierBean;

public class LuceneWriteIndexFromFile {
	private static final String MODULE = PanierBean.class.getName();
	
	public static void indexer(Path docPath) throws IndexException{
		 try{
	            Directory dir = FSDirectory.open( Paths.get(Constante.INDEX_PATH) );
	             
	            //analyzer with the default stop words
	            Analyzer analyzer = new StandardAnalyzer();
	             
	            //IndexWriter Configuration
	            IndexWriterConfig iwc = new IndexWriterConfig(analyzer);
	            iwc.setOpenMode(OpenMode.CREATE_OR_APPEND);
	             
	            //IndexWriter writes new index files to the directory
	            IndexWriter writer = new IndexWriter(dir, iwc);
	             
	            indexDocs(writer, docPath);
	           // indexDoc(writer, docPath, Files.getLastModifiedTime(docPath).toMillis());
	            writer.close();
	        }catch (IOException e){
	        	Logger.getLogger(MODULE).log(Level.SEVERE, e.getMessage(), e);
	            e.printStackTrace();
	            throw new IndexException(e);
	        }
	}
	
	static void indexDocs(final IndexWriter writer, Path path) throws IOException 
    {
        //Directory?
        if (Files.isDirectory(path)) 
        {
            //Iterate directory
            Files.walkFileTree(path, new SimpleFileVisitor<Path>() 
            {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException 
                {
                    try
                    {
                        //Index this file
                        indexDoc(writer, file, attrs.lastModifiedTime().toMillis());
                    } 
                    catch (IOException ioe) 
                    {
                        ioe.printStackTrace();
                    }
                    return FileVisitResult.CONTINUE;
                }
            });
        } 
        else
        {
            //Index this file
            indexDoc(writer, path, Files.getLastModifiedTime(path).toMillis());
        }
    }
 
    private static void indexDoc(IndexWriter writer, Path file, long lastModified) throws IOException{
        try (InputStream stream = Files.newInputStream(file)){
        	
            PDFParser parser = new PDFParser(stream);
            parser.parse();
            
            PDDocument pdfDocument = parser.getPDDocument();
            PDFTextStripper stripper =  new PDFTextStripper();
            
            String pdftext = stripper.getText(pdfDocument);
            pdfDocument.close(); 
            
            //Create lucene Document
            Document doc = new Document();
             
            doc.add(new StringField("fileName", file.getFileName().toString(), Field.Store.YES));
            doc.add(new LongPoint("modified", lastModified));
            doc.add(new TextField("contents", pdftext, Store.YES));
             
            //Updates a document by first deleting the document(s) 
            //containing <code>term</code> and then adding the new
            //document.  The delete and then add are atomic as seen
            //by a reader on the same index
            writer.updateDocument(new Term("fileName", file.getFileName().toString()), doc);
        }
    }
}
