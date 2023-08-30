package gov.nih.nci.cananolab.restful.util;

import net.sargue.mailgun.Configuration;
import net.sargue.mailgun.Mail;

public class MailServiceUtil {
    public static Configuration mailgunConfiguration = null;

    private static void tryInitialize() {
        if (mailgunConfiguration == null) {
            try {
                String mailgun_domain = AppPropertyUtil.getAppProperty("MAILGUN_DOMAIN");
                String mailgun_apiUrl = AppPropertyUtil.getAppProperty("MAILGUN_API_URL");
                String mailgun_apiKey = AppPropertyUtil.getAppProperty("MAILGUN_API_KEY");
                String mailgun_fromEmailName = AppPropertyUtil.getAppProperty("MAILGUN_FROM_EMAIL_NAME");
                String mailgun_fromEmail = AppPropertyUtil.getAppProperty("MAILGUN_FROM_EMAIL");

                mailgunConfiguration = new Configuration()
                        .domain(mailgun_domain)
                        .apiUrl(mailgun_apiUrl)
                        .apiKey(mailgun_apiKey)
                        .from(mailgun_fromEmailName, mailgun_fromEmail);
            } catch (Exception e) {
                System.out.println("Mailgun initialize failed due to " + e.toString());
            }
        }
    }

    public static void sendMail(final String address, final String subject, String content) {
        tryInitialize();

        if (mailgunConfiguration != null) {
            try {
                content = "Dear " + address + ",\r\n\r\n" + content + "\r\nSincerely,\r\nISB-CGC Team";
                Mail.using(mailgunConfiguration)
                        .to(address)
                        .subject(subject)
                        .text(content)
                        .build()
                        .send();
            } catch (Exception e) {
                System.out.println("Mailgun send mail failed due to " + e.toString());
            }
        }
    }
}
