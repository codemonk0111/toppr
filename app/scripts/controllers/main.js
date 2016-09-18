'use strict';

/**
 * @ngdoc function
 * @name topprApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the topprApp
 */
angular.module('topprApp')
    .controller('MainCtrl', function($scope, baseURL, $http, $localStorage) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.init = function() {
            $http({
                method: 'GET',
                url: 'https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites'
            }).success(function(data) {
                $scope.websites = data.websites;
            });
        };

        function IDLike(id, count){
        	this.id = id;
        	this.count = count;
        };


        $scope.incrementLikes = function(id){
        	var likes={};
        	likes.like_count =[];
        	if(angular.isUndefined($localStorage.likes)){
        		$localStorage.likes = {};
        	}
        	if(angular.isUndefined($localStorage.likes.length)){
        		likes.like_count.push(new IDLike(id,1));
        		likes = JSON.stringify(likes);
        		$localStorage.likes = likes;
        		return;
        	}
        	likes = $localStorage.likes;
        	likes = JSON.parse(likes);
        	for(var i in likes.like_count){
        		if(likes.like_count[i].id === id){
        			likes.like_count[i].count++;
        			likes = JSON.stringify(likes);
	        		$localStorage.likes = likes;
	        		return;
        		}
        	}
        	likes.like_count.push(new IDLike(id,1));
			likes = JSON.stringify(likes);
    		$localStorage.likes = likes;
        };

        $scope.getLikes = function(id){
        	if(angular.isUndefined($localStorage.likes) || angular.isUndefined($localStorage.likes.length)){
        		return 0;
        	}
        	var likes = $localStorage.likes;
        	likes = JSON.parse(likes);
        	for(var i in likes.like_count){
        		if(likes.like_count[i].id === id){
        			return likes.like_count[i].count;
        		}
        	}
        	return 0;
        };

        $scope.currentPage = 1;
        $scope.pageSize = 5;
    });
