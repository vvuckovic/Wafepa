package jwd.wafepa.service.impl;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import jwd.wafepa.model.Activity;
import jwd.wafepa.repository.ActivityRepository;
import jwd.wafepa.service.ActivityService;

@Service
@Transactional
public class JpaActivityService 
	implements ActivityService {
	
	@Autowired
	private ActivityRepository activityRepository;

	@Override
	public Activity findOne(Long id) {
		return activityRepository.findOne(id);
	}

	@Override
	public Page<Activity> findAll(int page, Sort.Direction direction, String property) {
		return activityRepository.findAll(new PageRequest(page, 3, direction, property));
	}

	@Override
	public Activity save(Activity activity) {
		return activityRepository.save(activity);
	}

	@Override
	public List<Activity> save(List<Activity> activities) {
		return activityRepository.save(activities);
	}

	@Override
	public Activity delete(Long id) {
		Activity activity = activityRepository.findOne(id);
		if(activity == null){
			throw new IllegalArgumentException("Tried to delete"
					+ "non-existant activity");
		}
		activityRepository.delete(activity);
		return activity;
	}

	@Override
	public void delete(List<Long> ids) {
		for(Long id : ids){
			this.delete(id);
		}
	}

	@Override
	public Page<Activity> findByName(int page, String name) {
		return activityRepository.findByNameLike(new PageRequest(page, 3), "%" + name + "%");
	}

	

	
	
	//@PostConstruct
//	public void БилоШта(){
//		save(new Activity("Swimming"));
//		save(new Activity("Running"));
//	}

}
