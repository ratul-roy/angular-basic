/*angular.module('app.services',['app.config']).factory('Movie',function($resource, CONFIG){
    console.log(CONFIG);
    return $resource('http://ratulroy.inmobi.com:3000/moviesbackend/:id',{id:'@_id'},{
        // ********* DEFAULT ACTIONS****************
        // 'get': {method:'GET'},
        // 'save': {method:'POST'},
        // 'query': {method:'GET', isArray:true},
        // 'remove': {method:'DELETE'},
        // 'delete': {method:'DELETE'},

         'update': {method: 'PUT'}
    });
}).service('PopupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
*/
(function () {
    'use strict';

    angular
        .module('app.services',['app.config'])
        .factory('Movie', Movie)
        .factory('Login', Login)
        .service('PopupService', PopupService);

    Movie.$inject = ['$resource', 'CONFIG'];
    Login.$inject = ['$resource', 'CONFIG'];

    PopupService.$inject = ["$window"];

    function Login($resource, CONFIG) {
        return $resource(CONFIG.BACKEND_URL_LOGIN);
    }
    function Movie($resource, CONFIG) {
        return $resource(CONFIG.BACKEND_URL,{id:'@_id'},{
            // ******** DEFAULT ACTIONS****************
            // 'get': {method:'GET'},
            // 'save': {method:'POST'},
            //  'query': {
            //           method:'GET',
            //           isArray:true
            //           interceptor: {
            //               response: function (data) {
            //                 debugger;
            //                   console.log('response in interceptor', data);
            //               },
            //               responseError: function (data) {
            //                   console.log('error in interceptor', data);
            //               }
            //           }
            //
            // },
            // 'remove': {method:'DELETE'},
            // 'delete': {method:'DELETE'},
            //
            'update': {method: 'PUT'}
        });
    }
    function PopupService($window){
        this.showPopup=function(message){
            return $window.confirm(message);
        }
    }

})();
