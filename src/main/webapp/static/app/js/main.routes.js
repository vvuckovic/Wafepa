var wafepaApp = angular.module('wafepaApp.routes', ['ngRoute']);

wafepaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/static/app/html/partial/home.html'
        })
        .when('/activities', {
            templateUrl : '/static/app/html/partial/activities.html',
            controller : 'ActivityController'
        })
        .when('/activities/add', {
            templateUrl : '/static/app/html/partial/addEditActivity.html',
            controller : 'ActivityController'
        })
         .when('/activities/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditActivity.html',
            controller : 'ActivityController'
        })
         .when('/users', {
            templateUrl : '/static/app/html/partial/users.html',
            controller : 'UserController' //ovo je isto kao ono sto smo radili sa div-om u kojem smo definisali da koristimo ovaj kontroler
        })
        .when('/users/add', {
            templateUrl : '/static/app/html/partial/addOrEditUser.html',
            controller : 'UserController' //ovo je isto kao ono sto smo radili sa div-om u kojem smo definisali da koristimo ovaj kontroler
        })
        .when('/users/edit/:id', { //: znace angular-u da je id promenjljiva
            templateUrl : '/static/app/html/partial/addOrEditUser.html',
            controller : 'UserController' //ovo je isto kao ono sto smo radili sa div-om u kojem smo definisali da koristimo ovaj kontroler
        })
        .otherwise({
            redirectTo: '/'
        });
}]);