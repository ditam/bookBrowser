'use strict';

angular.module('bookBrowserApp').factory('books', function($http, $q, $timeout){

    /**
    * In this sample application, the books are a local static resource.
    * An async interface is provided with an artificial delay as an API stub,
    * making the future transition to a real API easier.
    **/
    var ASYNC_DELAY = 25; //ms  
    var books = [];
    
    $http.get('resources/books.json').then(
        function(response){
            books = response.data;
            console.log('book cache populated.');
        },
        function(error){
            throw {
                msg: 'Error while fetching books!',
                data: error
            }
        }
    );    
    
    //returns true if a contains b as a substring (case-insensitive)
    function containsString(a,b){
        return a.toLowerCase().indexOf( b.toLowerCase() ) > -1;
    }
    
    //a filter object is optional
    function get(_filters){
        var filters = _filters || {};
        var deferred = $q.defer();
        var filteredBooks;
        $timeout(function(){
            filteredBooks = books;
            if(filters.id != null){
                filteredBooks = filteredBooks.filter(function(book){
                    return book.id === filters.id;
                });
            }
            if(filters.category != null){
                filteredBooks = filteredBooks.filter(function(book){
                    return book.genre.category === filters.category;
                });
            }
            if(filters.genre != null){
                filteredBooks = filteredBooks.filter(function(book){
                    return book.genre.name === filters.genre;
                });
            }            
            if(filters.search != null){
                filteredBooks = filteredBooks.filter(function(book){
                    return ( 
                        containsString(book.name, filters.search) ||
                        containsString(book.author.name, filters.search) ||
                        containsString(book.description, filters.search)
                    );
                });
            }
            deferred.resolve(filteredBooks);
        }, ASYNC_DELAY);
        return deferred.promise;
    }

    return {
        get: get,
        //other methods are not supported
    };
    
});