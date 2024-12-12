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

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthStatus {
    /** 
     * Endpoint to get authentication status object
     * @return Map<String, Object> object with status and username
     */
    @GetMapping("/authstatus")
    public Map<String, Object> getAuthStatus() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Map<String, Object> response = new HashMap<>();
        if (authentication != null && authentication.isAuthenticated()
                && !(authentication.getPrincipal().equals("anonymousUser"))) {
            response.put("status", true);
            response.put("username", authentication.getName());
        } else {
            response.put("status", false);
        }
        return response;
    }
}
