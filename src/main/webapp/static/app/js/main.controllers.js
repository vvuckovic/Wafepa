var wafepaApp = angular.module('wafepaApp.controllers', []);

wafepaApp.controller('ActivityController', function($scope, $http, $location, $routeParams, activityService) { //dodajemo activityService servis

	$scope.getAll = function() {
		//$http.get('api/activities', { params:{ 'name': $scope.search, 'page':$scope.page }})  //ako nema parametara nece ih ni dodavati u upit
		activityService.getAll($scope.search, $scope.page)	
		.success(function(data, status, headers) {
			$scope.activities = data;
			$scope.hideSpinner = true;
			$scope.totalPages = headers('total-pages');
			$scope.broj=headers('total-elements')
			
		})
		.error(function() {
			$scope.showError = true;
			$scope.hideSpinner = true;
		});
	};

	$scope.remove = function(id) {
		//$http.delete('api/activities/' + id) Izdvojeno u servis
		activityService.remove(id)
		.success(function() {
			$scope.getAll();
		})
		.error(function() {

		});
	};

	$scope.init = function() {
		$scope.activity = {};

		if ($routeParams.id) { 
			//$http.get('api/activities/' + $routeParams.id) Izvdvojeno u servis
			activityService.getOne($routeParams.id)			
			.success(function(data) {
				$scope.activity = data;
			})
			.error(function() {

			});
		}
	};

	$scope.save = function() {
		activityService.save($scope.activity)
		.success(function(){
			$location.path('/activities')
		})
		.error(function(){

		})

	};
});

wafepaApp.controller('UserController',function($scope, $http, $location, $routeParams, userService){ 

	$scope.getAll=function(){
		//$http.get('api/users', { params:{ 'name': $scope.search, 'lastname':$scope.search, 'page':$scope.pageU }})
		userService.getAll( $scope.search, $scope.search, $scope.pageU) 	
		.success(function(data, status, headers){
			$scope.users=data;  //...i user-e ubacujemo u $scope po kljucu users
			$scope.totalUPages = headers('total-Upages');
			$scope.hideSpinner = true;
			$scope.brojU= headers('total-Uelements')
			
		})
		.error(function(){
			$scope.showError = true;
			$scope.hideSpinner = true;
		});
	};

	$scope.remove = function(id){
		//$http.delete('api/users/' + id)
		userService.remove(id)
		.success(function(){
			$scope.getAll(); //nakon brisanja pozivamo ponovo metodu koja ce nam pribaviti najnovije stanje
		})
		.error(function(){
			alert('Error!');
		});

	};

	//isto kao kod aktivnosti i kod user-a ova funkcija nam treba za addOrEditUser
	$scope.init_user=function(){  //ne znam zasto sam ovu funkciju nazvao init_user (a kod aktivnosti se zove samo init) kad bi se pri njenom pozivanju svakako mislilo na nju
		//a ne na init za aktivnosti jer se kod user-a koristi ovaj UserController
		$scope.user={};

		if($routeParams.id){   
			//$http.get('api/users/'+ $routeParams.id)
			userService.getOne($routeParams.id)
			.success(function(data){
				$scope.user=data;
			})
			.error(function(){

			});
		}				
	};

	$scope.save = function(){
		//if($scope.user.id){
		//$http.put('api/users/' + $scope.user.id, $scope.user)
		userService.save($scope.user)
		.success(function(){
			$location.path('/users');
		})
		.error(function(){

		});
	}
});
/*else{
		$http.post('api/users', $scope.user)
			.success(function(){
				$location.path('/users'); 
			})
			.error(function(){

			});
	};}*/
