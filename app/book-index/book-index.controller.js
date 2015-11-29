'use strict';

/**
 * @ngdoc function
 * @name bookBrowserApp.controller:BookIndexCtrl
 * @description
 * # BookIndexCtrl
 * Controller of the bookBrowserApp
 */
angular.module('bookBrowserApp')
  .controller('BookIndexCtrl', function ($scope) {
    console.log('book index ctrl init');
    $scope.userSelection = {};
    
    $scope.genres = ['Fiction','Non-Fiction'];
  });
