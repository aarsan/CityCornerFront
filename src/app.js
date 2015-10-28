'use strict';

var app = angular.module('CityCorner', ['angular-oauth2', 'ngRoute'])
	.config(['OAuthProvider', function(OAuthProvider) {
		OAuthProvider.configure({
			baseUrl: 'https://api.citycorner.org',
			clientId: 'oB0vIcrXQMTpXeseNYdASBUxEknyDasFDpvDOkZJ',
			clientSecret: 'H5rEFVkjnd8o33jbjh7MyWAxQZv2s39hQSwdhLOzGX8NuoDnYKFaHz5G50s0uGrPNRtrStKBx8a6jvMfxhF51wis5eJAd09wVqIuAnoQ2NoBfozWDxoMSJpUbXApp4LP' // optional
		});
	}])
	.run(['$rootScope', '$window', 'OAuth', function($rootScope, $window, OAuth) {
		$rootScope.$on('oauth:error', function(event, rejection) {
			
		// Ignore `invalid_grant` error - should be catched on `LoginController`.
		if ('invalid_grant' === rejection.data.error) {
			return;
		}

		// Refresh token when a `invalid_token` error occurs.
		if ('invalid_token' === rejection.data.error) {
			return OAuth.getRefreshToken();
		}

		// Redirect to `/login` with the `error_reason`.
		return $window.location.href = '/login?error_reason=' + rejection.data.error;
		});
	}]);
	


app.controller('LoginCtrl', ['$scope', function($scope) {
	$scope.master = {};
		
		$scope.update = function(user) {
			$scope.master = angular.copy(user);
		};
		
		$scope.reset = function() {
			$scope.user = angular.copy($scope.master);
		};
		
		$scope.reset();
	
}]);

app.controller('PanelCtrl', function(){
	this.tab = 1;
	
	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
});

app.controller('RegisterCtrl', ['$scope', function($scope){
		$scope.master = {};
		
		$scope.update = function(user) {
			$scope.master = angular.copy(user);
		};
		
		$scope.reset = function() {
			$scope.user = angular.copy($scope.master);
		};
		
		$scope.reset();
}]);