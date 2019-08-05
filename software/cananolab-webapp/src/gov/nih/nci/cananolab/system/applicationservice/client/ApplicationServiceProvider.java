package gov.nih.nci.cananolab.system.applicationservice.client;

import gov.nih.nci.cananolab.system.applicationservice.ApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.proxy.ApplicationServiceProxy;
import java.io.ByteArrayInputStream;
import java.util.Map;
import org.aopalliance.aop.Advice;
import org.springframework.aop.Advisor;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.InputStreamResource;

public class ApplicationServiceProvider {

    private static String DEFAULT_SERVICE = "ServiceInfo";
    private static ApplicationContext ctx = new ClassPathXmlApplicationContext("application-config-client.xml");

    public static ApplicationService getApplicationService() throws Exception
    {
        return getApplicationService(DEFAULT_SERVICE,null,null,null);
    }

    public static ApplicationService getApplicationService(String service, String url, String username, String password) throws Exception
    {
        Boolean secured = username!=null && password!=null;


        return getApplicationService(service, url);
    }
    private static ApplicationService getApplicationService(String service, String url) throws Exception
    {

        ApplicationContext context = getApplicationContext(service, url, false);
        Map<String, Object> serviceInfoMap = (Map<String, Object>) context.getBean(service);
        ApplicationService as = (ApplicationService) serviceInfoMap.get("APPLICATION_SERVICE_BEAN");

            setApplicationService(as);
        return as;
    }

    private static void setApplicationService(ApplicationService as) {
        if(as instanceof org.springframework.aop.framework.Advised)
        {
            org.springframework.aop.framework.Advised proxy = (org.springframework.aop.framework.Advised)as;
            for(Advisor advisor: proxy.getAdvisors())
            {
                Advice advice = advisor.getAdvice();
                if(advice instanceof ApplicationServiceProxy)
                {
                    ApplicationServiceProxy asp = (ApplicationServiceProxy)advice;
                    asp.setApplicationService(as);
//                    asp.setAuthentication(null);
                }
            }
        }
    }

    private static ApplicationContext getApplicationContext(String service, String url, Boolean secured) throws Exception
    {
        if(service == null || service.trim().length() == 0)
            throw new Exception("Name of the service can not be empty");

        Map<String,Object> serviceInfoMap = (Map<String, Object>) ctx.getBean(service);

        if(serviceInfoMap == null)
            throw new Exception("Change the configuration file!!!");

        if(url==null)
        {
            validateContext(serviceInfoMap,ctx, secured);
            return ctx;
        }
        else
        {
            String serviceInfo = (String)serviceInfoMap.get("APPLICATION_SERVICE_CONFIG");;

            //URL_KEY must be present if the user is trying to use the url to reach the service
            if(serviceInfo==null || serviceInfo.indexOf("URL_KEY")<0)
                throw new Exception("Change the configuration file!!!");

            serviceInfo = serviceInfo.replace("URL_KEY", url);

            //Prepare in memory configuration from the information retrieved of the configuration file
            String xmlFileString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE beans PUBLIC \"-//SPRING//DTD BEAN//EN\" \"http://www.springframework.org/dtd/spring-beans.dtd\"><beans>"+serviceInfo+"</beans>";
            GenericApplicationContext context = new GenericApplicationContext();
            XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(context);
            xmlReader.setValidationMode(XmlBeanDefinitionReader.VALIDATION_NONE);
            InputStreamResource inputStreamResource = new InputStreamResource(new ByteArrayInputStream(xmlFileString.getBytes()));
            xmlReader.loadBeanDefinitions(inputStreamResource);
            context.refresh();

            Map<String,Object> newServiceInfoMap = (Map<String, Object>) ctx.getBean(service);

            validateContext(newServiceInfoMap,context,secured);

            return context;
        }
    }

    private static void validateContext(Map<String,Object> serviceInfoMap,ApplicationContext ctx, Boolean secured) throws Exception
    {
        ApplicationService as = null;


        as = (ApplicationService)serviceInfoMap.get("APPLICATION_SERVICE_BEAN");

        if(as==null)
            throw new Exception("Change the configuration file!!!");

        if(!secured)
            return;


    }
}
