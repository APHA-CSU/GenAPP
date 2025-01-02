package gov.apha.genapp.restcontroller;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class Register {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private DataSource dataSource;

    @PostMapping
    public String registerUser(@RequestParam String username, @RequestParam String password) {
        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
        
        if(users.userExists(username)){
            return "false";
        }

        UserDetails user = User.withUsername(username)
        .password(passwordEncoder.encode(password))
        .roles("USER")
        .build();

        users.createUser(user);

        return "true";

    }
}
