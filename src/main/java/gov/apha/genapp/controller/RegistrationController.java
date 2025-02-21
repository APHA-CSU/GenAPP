package gov.apha.genapp.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import gov.apha.genapp.model.User;
import gov.apha.genapp.services.UserService;


@Controller
public class RegistrationController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/register")
    public String showRegistrationPage(Authentication authentication) {
        if(authentication != null) {
            return "redirect:/index.html";
        }
        return "registration.html";
    }
    

    @PostMapping("/register")
    public String registerUserAccount(@RequestParam("username") String username,
            @RequestParam("password") String password,
            RedirectAttributes redirectAttributes) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            return "redirect:/index.html";
            //send error message to the view acordingly
        }
        if (userService.findByUsername(username) != null) {
            return "redirect:/index.html";
            //send error message to the view acordingly
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        userService.registerUser(user);
        redirectAttributes.addFlashAttribute("username",username);
        return "redirect:/email-verification";
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

    @GetMapping("email-verification")
    public String showVerificationPage(@ModelAttribute("username") String username, Model model) {
        User user = userService.findByUsername(username);
        if (user == null) {
            return "redirect:/register";
        }
        Boolean enabled = user.getStatus();
        if(enabled){
            return "redirect:/index.html"; //redirects the user to login if enabled
        }
        model.addAttribute("username",username);
        return "verifyRegistration.html";
    }
    
}
