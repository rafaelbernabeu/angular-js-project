
(function(){
    angular
        .module('my-app.controller')
        .controller('AppController', AppController);

    function AppController($state){
        var vm = this;
        
        vm.go = go;

        (function init () {
            $state.go('my-app.welcome');
        })();

        function go() {
            $state.go('user.welcome');
        }
    }
})();
