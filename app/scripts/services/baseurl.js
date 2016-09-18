'use strict';

/**
 * @ngdoc service
 * @name topprApp.baseURL
 * @description
 * # baseURL
 * Service in the topprApp.
 */
angular.module('topprApp')
  .service('baseURL', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {};
    var baseURL = 'http://localhost:3000';

    factory.getURL = function(){
    	return baseURL;
    };

    return factory;
  });
