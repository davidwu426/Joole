package Joole.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Joole.Model.User;


@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
	
	public User findByUsername (String username);
	public boolean existsByUsername(String username);
	public boolean existsByEmail(String email);
}
