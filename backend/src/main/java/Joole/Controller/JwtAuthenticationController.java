package Joole.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Joole.Config.JwtTokenUtil;
import Joole.DAO.UserDAO;
import Joole.Model.JwtRequest;
import Joole.Model.JwtResponse;
import Joole.Model.RegisterUser;
import Joole.Model.User;
import Joole.Service.UserService;

@RestController 
public class JwtAuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	UserDAO userDAO;
	
	
	
	@PostMapping(value = "/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final String token = jwtTokenUtil.generateToken(userDetails.getUsername());
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	@PostMapping(value = "/register")
	public ResponseEntity<?> register(@RequestBody RegisterUser user) throws Exception{
		if(this.userService.existsByUsername(user.getUsername())){
			return ResponseEntity.ok(HttpStatus.CONFLICT);
		}else if(this.userService.existsByEmail(user.getEmail())) {
			return ResponseEntity.ok(HttpStatus.CONFLICT);
		}else {
			User rUser = this.userService.registerUser(user);
			return ResponseEntity.ok(HttpStatus.CREATED);
		}
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	
}
