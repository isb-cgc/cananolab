package gov.nih.nci.cananolab.restful.util;

import com.mailgun.api.v3.MailgunMessagesApi;
import com.mailgun.client.MailgunClient;
import com.mailgun.model.message.Message;
import com.mailgun.model.message.MessageResponse;

public class MailServiceUtil {

//    private static final Logger LOG = LoggerFactory.getLogger(MailService.class);

    // This must match the jndi-name property in the mail-session
    // configuration specified before
//    @Resource(name = "java:jboss/mail/Default")
//    private Session session;

    private static MailgunMessagesApi mailgunMessagesApi;

    public static void setup() {
//        mailgunMessagesApi = MailgunClient.config("")
//                .createApi(MailgunMessagesApi.class);
    }

    public static MessageResponse sendMail(final String address, final String subject, final String content) {
        MailgunMessagesApi mailgunMessagesApi = MailgunClient.config("")
                .createApi(MailgunMessagesApi.class);

        Message message = Message.builder()
                .from("No Reply User <noreply@isb-cgc.org>")
                .to(address)
                .subject(subject)
                .text(content)
                .build();

        return mailgunMessagesApi.sendMessage("isb-cgc.org", message);
    }

    public static void sendMail2(final String address, final String subject, final String content) {
        if (mailgunMessagesApi == null) {
            setup();
        }

        Message message = Message.builder()
                .from("noreply@isb-cgc.org")
                .to(address)
                .subject(subject)
                .text(content)
                .build();

        MessageResponse messageResponse = mailgunMessagesApi.sendMessage("https://api.mailgun.net/v3/isb-cgc.org/messages", message);
    }

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
