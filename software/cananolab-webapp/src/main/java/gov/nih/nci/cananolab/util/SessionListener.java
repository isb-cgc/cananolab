package gov.nih.nci.cananolab.util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;



public class SessionListener implements HttpSessionListener {

    protected static Logger logger = LogManager.getLogger(SessionListener.class);

    public SessionListener() {
        super();
    }

    public void sessionCreated(final HttpSessionEvent event) {
        //logger.info("[STATUS] Session created: "+event.getSession().getAttribute("username"));

    }
    public void sessionDestroyed(final HttpSessionEvent event) {
        logger.info("[STATUS] Session terminated: "+event.getSession().getAttribute("username"));
    }
}
