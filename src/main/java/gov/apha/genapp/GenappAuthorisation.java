package gov.apha.genapp;
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/authorise")
public class GenappAuthorisation {
    @PostMapping
    public String authorise(@RequestParam String email, @RequestParam String password){
        
    }
}
