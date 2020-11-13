package Joole.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;

//import java.util.ArrayList;
 
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Joole.DAO.UserDAO;
import Joole.Model.RegisterUser;
import Joole.Model.User;


@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	UserDAO userDAO;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	public User registerUser(RegisterUser user) {
		User newUser = new User();
		newUser.setUserName(user.getUsername());
		newUser.setPassword(this.bcryptEncoder.encode(user.getPassword()));
		newUser.setUserEmail(user.getEmail());
		return this.userDAO.save(newUser);
	}
	
	public boolean existsByUsername(String username) {
		return this.userDAO.existsByUsername(username);
	}
	
	public boolean existsByEmail(String email) {
		return this.userDAO.existsByEmail(email);
	}
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = this.userDAO.findByUsername(username);
		if(user != null) {
			return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), new ArrayList<>());
		}else {
			throw new UsernameNotFoundException("Username not found with :" + username);
		}
		
//		if ("david".equals(username)) {
//			return new org.springframework.security.core.userdetails.User("david", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
//		
	}


	
	
	
	
}
