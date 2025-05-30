package gov.nih.nci.cananolab.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;

//import org.apache.commons.fileupload.FileItemIterator;
//import org.apache.commons.fileupload.FileItemStream;

public class FileUpload extends HttpServlet {
	private static final long serialVersionUID = -8244073279641189889L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		try {
			StringBuilder sb = new StringBuilder("{\"result\": [");
			int errorCode = 0;
			String errorMsg = null;
			String fileName = "";
			
			System.out.println(req.getHeader("XXXXXXXXXXXXXXXXXXXXXXXX"));
			System.out.println(req.getHeader("Content-Type"));
			
			 if (req.getHeader("Content-Type") != null
					&& req.getHeader("Content-Type").startsWith("multipart/form-data")) {
				ServletFileUpload upload = new ServletFileUpload();

				FileItemIterator iterator = upload.getItemIterator(req);

				while (iterator.hasNext()) {
					FileItemStream item = iterator.next();
/*					if (item.getFieldName() != null && item.getFieldName().equals("errorCode")) {
						String val = read(item.openStream());
						try {
							errorCode = Integer.parseInt(val);
						} catch(NumberFormatException e) {}
						continue;
					}
					if (item.getFieldName() != null && item.getFieldName().equals("errorMessage")) {
						String val = read(item.openStream());
						errorMsg = val;
						continue;
					}   */
					if (item.getFieldName() != null && item.getFieldName().equals("myFile")) {
						byte[] fileData = readBytes(item.openStream());
						req.getSession().setAttribute("newFileData", fileData);
						
						fileName = item.getName();
						 if (fileName != null) {
							 fileName = FilenameUtils.getName(fileName);
						 }

						//req.getSession().setAttribute("newFileData", fileData.getBytes(("UTF-8")));
						break;
					}
/*					sb.append("{");
					sb.append("\"fieldName\":\"").append(item.getFieldName()).append("\",");
					if (item.getName() != null) {
						sb.append("\"name\":\"").append(item.getName()).append("\",");
					}
					if (item.getName() != null) {
						sb.append("\"size\":\"").append(size(item.openStream())).append("\"");
					} else {
						sb.append("\"value\":\"").append(read(item.openStream())).append("\"");
					}
					sb.append("}");
					if (iterator.hasNext()) {
						sb.append(",");
					} */
				}   
			} else { 
				//sb.append("{\"size\":\"" + size(req.getInputStream()) + "\"}");
				//System.out.println("{\"size\":\"" + size(req.getInputStream()) + "\"***********************************}");
				try {
					byte[] fileData = IOUtils.toByteArray(req.getInputStream());
					req.getSession().setAttribute("newFileData", fileData);

				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}	
			 }
/*
			sb.append("]");
			sb.append(", \"requestHeaders\": {");
			@SuppressWarnings("unchecked")
			Enumeration<String> headerNames = req.getHeaderNames();
			while (headerNames.hasMoreElements()) {
				String header = headerNames.nextElement();
				sb.append("\"").append(header).append("\":\"").append(req.getHeader(header)).append("\"");
				if (headerNames.hasMoreElements()) {
					sb.append(",");
				}
			}
			sb.append("}}"); */
			
			if (errorCode != 0) {
				res.setStatus(errorCode);
				res.getWriter().write(errorMsg);
			} else {
				res.getWriter().write(fileName);
			}  
		} catch (Exception ex) {
			throw new ServletException(ex);
		}    
	}

	protected int size(InputStream stream) {
		int length = 0;
		try {
			byte[] buffer = new byte[2048];
			int size;
			while ((size = stream.read(buffer)) != -1) {
				length += size;
				// for (int i = 0; i < size; i++) {
				// System.out.print((char) buffer[i]);
				// }
			}
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return length;

	}

	protected String read(InputStream stream) {
		StringBuilder sb = new StringBuilder();
		BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
		try {
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
		} catch (IOException e) {
			throw new RuntimeException(e);
		} finally {
			try {
				reader.close();
			} catch (IOException e) {//TODO report error
			}
		}
		return sb.toString();
	}
	
	protected byte[] readBytes(InputStream stream) {
		try {
            return IOUtils.toByteArray(stream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new byte[1];
		}
	}
}
