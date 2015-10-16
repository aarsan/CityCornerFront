'use strict';

var app = angular.module('CityCorner', [
	'ngRoute'
]);

app.controller('LoginCtrl', ['$scope', function($scope) {
	$scope.greeting = "Hola!"
}]);