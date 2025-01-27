/*
Copyright 2023, Institute for Systems Biology

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


package gov.nih.nci.cananolab.restful;

import org.jboss.resteasy.core.ResourceMethodInvoker;
// import org.jboss.resteasy.core.ServerResponse;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
// import javax.ws.rs.WebApplicationException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.ext.Provider;
import javax.ws.rs.container.ContainerRequestFilter;
import org.jboss.resteasy.annotations.interception.ServerInterceptor;
// import org.jboss.resteasy.spi.HttpRequest;
// import org.jboss.resteasy.spi.interception.PreProcessInterceptor;
// import org.jboss.resteasy.spi.Failure;
import java.io.IOException;
import java.lang.reflect.Method;

//
// WJRL 2/7/23
// Multipart uploads do not come with a content type. They are UTF-8, not ACSII. At this time,
// it turns out this does not fix anything, since file uploads ignore all the text bits and
// just dump the file bytes into a session attribute. BUT, this *is* the correct content type
// for what is coming back, so keep it in.
// Note that this is deprecated in favor of javax.ws.rs.container.ContainerRequestFilter,
// so at some point it needs to be moved over. Problem is, this solution based on this class
// is all that you can find on the Web. If it causes a problem, it can probably be ditched
// unless UTF-8 multipart text content becomes a thing.
//
/*
@Provider
@ServerInterceptor
public class MultipartInterceptor implements PreProcessInterceptor {
    @Override
    public ServerResponse preProcess(HttpRequest request, ResourceMethodInvoker resourceMethodInvoker) throws Failure, WebApplicationException {
        Method method = resourceMethodInvoker.getMethod();
        if (method.getName().equals("uploadFile") &&
            method.getDeclaringClass().getCanonicalName().equals("gov.nih.nci.cananolab.restful.CoreServices")) {
            request.setAttribute(InputPart.DEFAULT_CONTENT_TYPE_PROPERTY, "text/plain; charset=utf-8");
            return (null);
        }
        return (null);
    }
}
*/

// LAW 10/10/24
// This is the reworked version of this class. PreProcessInterceptor is deprecated and was breaking the WildFly
// postStart process for launching caNanoLab. I haven't been able to test this yet because the Java 17 upgrade has
// caused a stack of failures, but this seems correct. This will be tested.
@Provider
@ServerInterceptor
public class MultipartInterceptor implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        ResourceMethodInvoker methodInvoker = (ResourceMethodInvoker)
                containerRequestContext.getProperty("org.jboss.resteasy.core.ResourceMethodInvoker");
        Method method = methodInvoker.getMethod();

        System.out.println("method.getName() " + method.getName());
        // System.out.println("containerRequestContext.getHeaders() " + containerRequestContext.getHeaders().toString());
        // System.out.println("containerRequestContext.getPropertyNames() " + containerRequestContext.getPropertyNames().toString());

        if (method.getName().equals("uploadFile")
                && method.getDeclaringClass().getCanonicalName().equals("gov.nih.nci.cananolab.restful.CoreServices")) {
            containerRequestContext.setProperty(InputPart.DEFAULT_CONTENT_TYPE_PROPERTY, "text/plain; charset=utf-8");
        }
    }
}
