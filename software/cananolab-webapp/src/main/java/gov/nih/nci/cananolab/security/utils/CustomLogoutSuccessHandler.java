package gov.nih.nci.cananolab.security.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;

public class CustomLogoutSuccessHandler extends SimpleUrlLogoutSuccessHandler implements LogoutSuccessHandler {

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse,
                                Authentication authentication) throws IOException, ServletException {

        if (!httpServletRequest.isSecure()) {
            System.out.println("CustomLogoutHandler onLogoutSuccess is NOT secure request");
        } else {
            System.out.println("CustomLogoutHandler onLogoutSuccess is YES secure request");
        }

        String reqUrl = httpServletRequest.getRequestURL().toString();
        System.out.println("CustomLogoutHandler onLogoutSuccess request URL is " + reqUrl);

        String redirectUrl = "https://" + URI.create(httpServletRequest.getRequestURL().toString()).getHost() + "/";
        System.out.println("CustomLogoutHandler onLogoutSuccess REDIRECT to URL " + redirectUrl);
//        httpServletResponse.setStatus(HttpStatus.OK.value());
//        httpServletResponse.setStatus(HttpServletResponse.SC_OK);
//        httpServletResponse.sendRedirect(redirectUrl);
        super.setDefaultTargetUrl(redirectUrl);
        super.setAlwaysUseDefaultTargetUrl(true);
        super.onLogoutSuccess(httpServletRequest, httpServletResponse, authentication);
    }
}
