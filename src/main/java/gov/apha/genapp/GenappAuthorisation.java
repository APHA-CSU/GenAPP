package gov.apha.genapp;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;

@RestController
@RequestMapping("/authorise")
public class GenappAuthorisation {
    @Autowired
    private Argon2PasswordEncoder passwordEncoder;

    @PostMapping
    public String authorise(@RequestParam String email, @RequestParam String password){
        //Check for username and password encrypted with Argon2 here
        return "sucess";
    }
}
