'use strict';

/**
 * @ngdoc function
 * @name bookBrowserApp.controller:BookIndexCtrl
 * @description
 * # BookIndexCtrl
 * Controller of the bookBrowserApp
 */
angular.module('bookBrowserApp')
  .controller('BookIndexCtrl', function ($scope, books) {
    $scope.userSelection = {};
    
    //collections of selectable categories and genres. 
    //name property holds the displayed name, searchValue holds the value used
    // in filtering results
    //both are extended with an 'any' type selection with no searchValue
    $scope.categories = [];
    $scope.genres = [];
    
    function fetchCategoriesAsync(){
        var categories = [];
        var genres = [];
        var category, genre;
        books.get().then(function(books){
            books.forEach(function(book){
                category = book.genre.category;
                if(categories.indexOf(category) === -1){
                    categories.push(category);
                }
                genre = book.genre.name;
                if(genres.indexOf(genre) === -1){
                    genres.push(genre);
                }    
            });
            
            $scope.categories = categories.map(function(category){
                return {name: category, searchValue: category};
            });
            $scope.categories.unshift({name: '[any category]'});
            
            $scope.genres = genres.map(function(genre){
                return {name: genre, searchValue: genre};
            });
            $scope.genres.unshift({name: '[any genre]'});
        });
    }
    
    fetchCategoriesAsync();
    
  });
