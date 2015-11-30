'use strict';

angular.module('bookBrowserApp').directive('bookDisplay', function(books){
  return {
    templateUrl: 'book-index/book-display-template.html',
    restrict: 'E',
    scope: {
        filters: '=',
        limit: '='
    },
    link: function($scope) {
        $scope.results = {
            books: []
        };
        
        function updateResults(){
            console.log('filtering:',$scope.filters);
            var filters = {};
            if($scope.filters){
                filters.id = $scope.filters.id;
                filters.search = $scope.filters.search;
                if($scope.filters.category){
                    filters.category = $scope.filters.category.searchValue;
                }
                if($scope.filters.genre){
                    filters.genre = $scope.filters.genre.searchValue;
                }
            }
            books.get(filters).then(function(data){
                console.log('data arrived,',data.length,data);
                $scope.results.books = data;
            });
        }
        
        updateResults();
        
        $scope.humanizeDate = function(dateString){
            return moment(dateString).fromNow();
        };
        
        $scope.$watch('filters', function(){
            updateResults();
        }, true);
    }
  };
});