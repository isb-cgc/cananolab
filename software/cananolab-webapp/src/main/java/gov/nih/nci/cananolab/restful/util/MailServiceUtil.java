package gov.nih.nci.cananolab.restful.util;

public class MailServiceUtil {
    /*
    public static void send(final String addresses, final String subject, final String content) {
        try {
            Context ictx = new InitialContext();
            Session session = (Session) ictx.lookup("java:jboss/mail/Default");

            final Message message = new MimeMessage(session);
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(addresses));
            message.setSubject(subject);

            // Send the actual HTML message, as big as you like
            message.setContent(content, "text/html");

            Transport.send(message);
        } catch (Exception e) {
//            LOG.error("Cannot send mail", e);
        }
    }*/
}
