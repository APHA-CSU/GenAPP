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
     * Endpoint to check whether the user is authenticated
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
