package gov.apha.genapp.webconfiguration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

        @Autowired
        private UserDetailsServiceImpl userDetailsServiceImpl;
        /**
         * Configuration to include public endpoints and redirection to custom login
         * page
         * 
         * @param http http configuration class of spring boot security
         */
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers("/assets/**", "/csrf", "/user", "/authstatus",
                                                                "/register")
                                                .permitAll()
                                                .anyRequest().authenticated())
                                .formLogin(form -> form
                                                .loginPage("/index.html")
                                                .loginProcessingUrl("/login")
                                                .failureUrl("/index.html?success=false")
                                                .permitAll())
                                .logout(logout -> logout.logoutUrl("/logout")
                                                .clearAuthentication(true)
                                                .invalidateHttpSession(true)
                                                .permitAll());
                return http.build();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

}
