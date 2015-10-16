var app = angular.module('CityCorner', [
	'ngRoute'
]);

app.controller('LoginCtrl', ['$scope', function($scope) {
	$scope.greeting = "Hola!"
}]);

app.config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider.
			when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'LoginCtrl'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'LoginCtrl'
			}).
			otherwise({
				templateUrl: 'partials/404.html'
			});
	}]);