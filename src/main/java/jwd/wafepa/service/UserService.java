package jwd.wafepa.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;

import jwd.wafepa.model.User;

public interface UserService {

	User findOne(Long id);
	
	User save(User user);
	
	//za korisnika se u ovom primeru (bez
	//specijalnog razloga) koristi
	//varijanta brisanja koja NE vraća entitet
	void delete(Long id); 
	
	
	Page<User> findByFirstNameContainsOrLastNameContains(int page, String firstname, String lastname);
	Page<User> findAll(int page, Direction direction, String property);
	
	
}
