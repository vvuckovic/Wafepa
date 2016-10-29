var wafepaApp = angular.module('wafepaApp.services', []);

wafepaApp.service('activityService',function($http){
	
	this.url='api/activities';
	
	this.getOne=function(id){
		return $http.get(this.url +'/' + id);
	};
	
	this.remove = function(id){
		return $http.delete(this.url +'/' + id);
	};
	
	this.getAll = function(name, page){
		return $http.get('api/activities', { params:{ 'name': name, 'page':page }});
	};
	
	this.save = function (activity){
		if (activity.id){
			return $http.put(this.url +'/' + activity.id, activity)
		}else{
			return $http.post(this.url, activity)
		}
	};
});

wafepaApp.service('userService',function($http) {
	
	this.urlU='api/users';
	
	this.getOne=function(id){
		return $http.get(this.urlU +'/' + id);
	};
	
	this.getAll = function(firstname, lastname, pageU){
		return $http.get(this.urlU, { params:{ 'firstname': firstname, 'lastname':lastname, 'page':pageU }});
	};
	
	this.remove = function(id){
		return $http.delete(this.urlU +'/' + id);
	};
	
	this.save = function (user){
		if (user.id){
			return $http.put(this.urlU +'/' + user.id, user)
		}else{
			return $http.post(this.urlU, user)
		}
	};
	
	
	
});
