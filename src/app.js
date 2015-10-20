'use strict';

var app = angular.module('ttt', [
	'oauth'
]);

var app = angular.module('CityCorner', [
	'ngRoute'
]);


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