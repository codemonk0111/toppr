'use strict';

/**
 * @ngdoc overview
 * @name topprApp
 * @description
 * # topprApp
 *
 * Main module of the application.
 */
angular
  .module('topprApp', [
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination',
    'ngStorage',
    'ngRoute'
  ])
  .config(function($routeProvider){
  	$routeProvider
  	.when('/',{
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl'
  	}).when('/push',{
  		templateUrl: 'views/push.html',
  		controller: 'PushCtrl'
  	}).when('/about',{
  		templateUrl: 'views/about.html'
  	})
  	.otherwise({
  		redirectTo: '/'
  	});
  });
