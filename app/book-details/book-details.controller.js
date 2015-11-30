'use strict';

/**
 * @ngdoc function
 * @name bookBrowserApp.controller:BookDetailsCtrl
 * @description
 * # BookDetailsCtrl
 * Controller of the bookBrowserApp
 */
angular.module('bookBrowserApp')
  .controller('BookDetailsCtrl', function ($scope, $routeParams, books) {
    console.log('book details ctrl init, routeparams:',$routeParams);
    
    books.get({id: $routeParams.bookId}).then(function(data){
        console.log('book fetched:',data);
        $scope.book = data[0];
    });
    
  });
