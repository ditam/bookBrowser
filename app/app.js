'use strict';

/**
 * @ngdoc overview
 * @name bookBrowserApp
 * @description
 * # bookBrowserApp
 *
 * Main module of the application.
 */
angular
  .module('bookBrowserApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'book-index/book-index.html',
        controller: 'BookIndexCtrl'
      })
      .when('/details', {
        templateUrl: 'book-details/book-details.html',
        controller: 'BookDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
