
(function(){
    angular
        .module('user.controller')
        .controller('UserController', UserController);

    function UserController($state){
        var vm = this;
        
        vm.go = go;

        function go() {
            $state.go('my-app.welcome');
        }
    }
})();
