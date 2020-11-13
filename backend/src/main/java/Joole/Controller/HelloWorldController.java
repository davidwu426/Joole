package Joole.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@RequestMapping({ "/hello" })
	public ResponseEntity<?> firstPage() {
		return ResponseEntity.ok("You have been authenticated to look at me");
	}
}
