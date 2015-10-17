app.config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider.
			when('/', {
				redirectTo: '/login'
			}).
			when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'LoginCtrl'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'LoginCtrl'
			}).
			when('/faq', {
				templateUrl: 'partials/faq.html',
				controller: 'LoginCtrl'
			}).
			when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'LoginCtrl'
			}).
			when('/terms', {
				templateUrl: 'partials/terms.html',
				controller: 'LoginCtrl'
			}).
			when('/privacy', {
				templateUrl: 'partials/privacy.html',
				controller: 'LoginCtrl'
			}).
			when('/register', {
				templateUrl: 'partials/register.html',
				controller: 'LoginCtrl'
			}).
			when('/forgot', {
				templateUrl: 'partials/forgot.html',
				controller: 'LoginCtrl'
			}).
			otherwise({
				templateUrl: 'partials/404.html'
			});
	}]);