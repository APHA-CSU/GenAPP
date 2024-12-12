/** 
 * 		(c) Crown Copyright 2024 Animal and Plant Health Agency
 * 
 * You may use and re-use this software and associated documentation files free of 
 * charge in any format or medium, under the terms of the Open Government Licence v3.0.
 * You may obtain a copy of the Open Government Licence at
 * 
 * 		https://www.nationalarchives.gov.uk/doc/open-government-licence/
 */
package gov.apha.genapp.restcontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.security.web.csrf.CsrfToken;

@RestController
public class Csrf {
    /** 
     * Endpoint to get csrf token that links with the session id 
     * @param request HTTP request
     * @return CsrfToken Object with token string
     */
    @GetMapping("/csrf")
    public CsrfToken csrf(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute(CsrfToken.class.getName());
    }
}
