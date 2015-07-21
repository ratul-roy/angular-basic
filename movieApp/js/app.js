
(function () {
    'use strict';
    var dependencies = ['ui.router','ngResource','movieApp.controllers','app.services', 'LoginControllers'];

    angular
    .module('movieApp', dependencies)
    .factory('Interceptor', Interceptor)
    .config(config).run(run);

    config.$inject = ['$stateProvider', '$httpProvider'];

    Interceptor.$inject = [ "$q"];
    function Interceptor($q){
      return {
         /*request: function (request) {
           console.log(request);
           $rootScope.loading = true;
           return request;
         },*/
         response: function (response) {
           console.log( response);
           //debugger;

           if(response.data.errors){
             //console.log(response.data.errors);
             //debugger;
             return $q.reject(response);
           }
           return response;
         },
         responseError: function (rejection) {
           //debugger;
           //console.log(rejection);

           return $q.reject(rejection);
         }
       };
    }

    function config($stateProvider, $httpProvider){

    $httpProvider.interceptors.push('Interceptor');
      console.log("there");
      //console.log(Interceptor);
        $stateProvider.state('movies',{
            url:'/movies',
            templateUrl:'partials/movies.html',
            controller:'MovieListController'
        }).state('viewMovie',{
           url:'/movies/:id/view',
           templateUrl:'partials/movie-view.html',
           controller:'MovieViewController'
        }).state('newMovie',{
            url:'/movies/new',
            templateUrl:'partials/movie-add.html',
            controller:'MovieCreateController'
        }).state('editMovie',{
            url:'/movies/:id/edit',
            templateUrl:'partials/movie-edit.html',
            controller:'MovieEditController'
        }).state('login',{
            url:'/login',
            controller: 'LoginController',
            templateUrl: 'login/login.view.html',
        });
    }
    run.inject = ["$rootScope","$location", "$state"];
    function run($rootScope, $location,  $state){
      $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // // redirect to login page if not logged in and trying to access a restricted page
           var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
           //debugger;
           var loggedIn = $rootScope.loggedIn;
           if (restrictedPage && !loggedIn) {
             $state.go('login');
          }
          //debugger;
          // if((current != next) && !$rootScope.loggedIn){
          //      $state.go('login');
          // }
          /*else{
            $state.go('movies');
          }*/
      });
      $state.go('login');
    }
})();
