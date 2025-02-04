package gov.apha.genapp.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import gov.apha.genapp.model.User;
import gov.apha.genapp.services.UserService;

@Controller
public class RegistrationController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<Boolean> registerUserAccount(@RequestParam("username") String username,
            @RequestParam("password") String password) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            return ResponseEntity.badRequest().body(false);
        }
        if (userService.findByUsername(username) != null) {
            return ResponseEntity.badRequest().body(false);
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        userService.registerUser(user);
        return ResponseEntity.ok(true);
    }

    @PostMapping("/verify-registration")
    public ResponseEntity<String> verifyRegistration(@RequestParam("username") String username,
            @RequestParam("verificationCode") String verificationCode) {
        User user = userService.findByUsername(username);
        if (user.getVerificationCode().equals(verificationCode)
                && LocalDateTime.now().isBefore(user.getExpiryTime())) {
                    user.setEnabled(true);
                    userService.updateUser(user);
                    return ResponseEntity.ok("Verified Successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid code");
        }
    }

}
