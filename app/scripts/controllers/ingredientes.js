'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
	.controller('MainCtrl', function($scope) {
	  	$scope.ingredientes = []
		$scope.addInput = function(){
		  $scope.ingredientes.push({});
		}
	});
