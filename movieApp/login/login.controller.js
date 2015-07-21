(function () {
    'use strict';
    //alert(3);
    angular
        .module('LoginControllers', [])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$state', 'PopupService','$window' , 'Login'];
    function LoginController($rootScope, $scope, $state, PopupService, $window, Login) {
      $scope.doLogIn = doLogIn;
      $scope.login = new Login();
      function doLogIn(){
        //debugger;
        $scope.login.$save(function(data) {
            console.log("*********** in LoginController********");
            $rootScope.loggedIn = data.validUser;
            $state.go('movies');

        }, function(error) {
          debugger;
          $rootScope.loggedIn = false;
            console.log(error.status + "  *********** ERROR in LoginController********");
        });
      }
    }

})();
