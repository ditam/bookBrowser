'use strict';

angular.module('bookBrowserApp').directive('bookDisplay', function(books){
  return {
    templateUrl: 'book-index/book-display-template.html',
    restrict: 'E',
    scope: {
        filters: '='
    },
    link: function($scope) {
        $scope.results = {
            books: []
        };
        
        function updateResults(){
            console.log('filtering:',$scope.filters);
            var filters = {
                id: $scope.filters.id,
                search: $scope.filters.search
            };
            if($scope.filters.category){
                filters.category = $scope.filters.category.searchValue;
            }
            if($scope.filters.genre){
                filters.genre = $scope.filters.genre.searchValue;
            }
            books.get(filters).then(function(data){
                console.log('data arrived,',data.length);
                $scope.results.books = data;
            });
        }
        
        updateResults();
        
        
        $scope.$watch('filters', function(){
            updateResults();
        }, true);
    }
  };
});