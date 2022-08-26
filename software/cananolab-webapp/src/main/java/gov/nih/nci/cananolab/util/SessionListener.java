package gov.nih.nci.cananolab.util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionBindingListener;
import javax.servlet.http.HttpSessionBindingEvent;

@WebListener
public class SessionListener implements HttpSessionBindingListener {

    private String userName;
    protected static Logger logger = LogManager.getLogger(SessionListener.class);

    public SessionListener() {
        this("guest");
    }

    public SessionListener(String userName_) {
        this.userName = userName_;
    }

    @Override
    public void valueBound(final HttpSessionBindingEvent event) {
        logger.info("[STATUS] Session created for user "+this.userName);

    }
    @Override
    public void valueUnbound(final HttpSessionBindingEvent event) {
        logger.info("[STATUS] Session terminated for user "+this.userName);
    }
}
