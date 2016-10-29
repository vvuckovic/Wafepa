package jwd.wafepa.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jwd.wafepa.model.Activity;
import jwd.wafepa.model.User;

@Repository
public interface UserRepository 
	extends PagingAndSortingRepository<User, Long> {

	

	/*@Query("select u from User u where u.firstName like :name or u.lastName like :name")
	Page<User> findByFirstNameOrLastNameLike(
			Pageable page, 
			@Param(value= "name" ) String name);*/


	Page<User> findByFirstNameContainsOrLastNameContains(Pageable page, String firstname, String lastname);
}
