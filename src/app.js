var app = angular.module('citycornerApp', []);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	});

	$routeProvider.otherwise({
		templateUrl: 'views/404.html'
	});
}]);