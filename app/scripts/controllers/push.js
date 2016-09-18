'use strict';

/**
 * @ngdoc function
 * @name topprApp.controller:PushCtrl
 * @description
 * # PushCtrl
 * Controller of the topprApp
 */
angular.module('topprApp')
  .controller('PushCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submitData = function(){
    	if($scope.title || $scope.url_address || $scope.tag){
    		$scope.error = false;
    		$http({
    			method: 'GET',
    			url: 'https://hackerearth.0x10.info/api/one-push?type=json&query=push&title=' + $scope.title + '&url=' + $scope.url_address + '&tag=' + $scope.tag
    		}).then(function(response){
    			if(response.data.status === "403"){
    				$scope.error = response.data.message
    			}
    			else{
    				alert(response.data.message);
    				window.location.href = '/'; 
    			}
    		});
    	}
    	else{
    		$scope.error = 'Please input data in all three fields';
    	}
    }
  });
