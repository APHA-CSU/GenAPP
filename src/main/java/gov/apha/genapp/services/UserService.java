package gov.apha.genapp.services;

import java.time.LocalDateTime;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import gov.apha.genapp.model.User;
import gov.apha.genapp.model.UserRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final int VERIFICATION_CODE_LENGTH = 6;
    private static final long EXPIRY_MINUTES = 15;

    public User registerUser(User user) {
        String verificationCode = generateVerificationCode();
        sendVerificationEmail(user.getUsername(), verificationCode);
        user.setVerificationCode(verificationCode);
        user.setExpiryTime(LocalDateTime.now().plusMinutes(EXPIRY_MINUTES));
        user.setEnabled(false);
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    private String generateVerificationCode() {
        return new Random().ints(VERIFICATION_CODE_LENGTH, 0, 10)
                .mapToObj(Integer::toString)
                .collect(Collectors.joining());
    }

    public void sendVerificationEmail(String to, String verificationCode) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Account Verification: GenApp");
        message.setText("Your verification code is: " + verificationCode);
        //javaMailSender.send(message)
        System.out.println(verificationCode);
    }
}
