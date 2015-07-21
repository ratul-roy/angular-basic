  angular.module('movieApp.controllers',[]).controller('MovieListController',function($scope,$state,PopupService,$window,Movie){

    //$scope.movies = Movie.query();


    Movie.get(function(response) {
        console.log("*********** in MovieListController********");
        //debugger;
        //$state.go('login');
        debugger;
        $scope.movies = response.data;

    });
    $scope.deleteMovie=function(movie){
        if(PopupService.showPopup('Really delete this?')){
            movie.$delete(function(){
              //  $window.location.href= "";
                //$state.go('movies'); //won't work here as already in movies state
                //debugger;
                $state.transitionTo($state.current, $state.params, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            });
        }
    }

}).controller('MovieViewController',function($scope,$stateParams,Movie){
    console.log("*********** in MovieViewController********");
    //console.log($stateParams.id);
    $scope.movie = Movie.get({id:$stateParams.id});
    //console.log($scope.movie);

}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    $scope.movie=new Movie();
    debugger;
    $scope.addMovie=function(){
        $scope.movie.$save(function(){
            $state.go('movies');
        });
    }

}).controller('MovieEditController',function($scope,$state,$stateParams,Movie){

    $scope.updateMovie=function(){
        $scope.movie.$update(function(){
            $state.go('movies');
        });
    };

    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };

    $scope.loadMovie();
});
