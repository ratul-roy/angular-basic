angular.module('movieApp.services',[]).factory('Movie',function($resource){
    return $resource('http://ratulroy.inmobi.com:3000/moviesbackend/:id',{id:'@_id'},{
        /********* DEFAULT ACTIONS****************
        'get': {method:'GET'},
        'save': {method:'POST'},
        'query': {method:'GET', isArray:true},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'},
        */
        'update': {method: 'PUT'}
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
