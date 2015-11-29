'use strict';

angular.module('bookBrowserApp').directive('bookDisplay', function(books){
  return {
    templateUrl: 'book-index/book-display-template.html',
    restrict: 'E',
    scope: {
        filters: '='
    },
    link: function($scope) {
        console.log('display directive link,', books);
        
        $scope.results = {
            books: []
        };
        
        function updateResults(){
            console.log('update started');
            books.get($scope.filters).then(function(data){
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