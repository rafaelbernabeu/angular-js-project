
(function(){
    angular
        .module('my-app.controller')
        .controller('AppController', AppController);

    function AppController($state){
        var vm = this;
        
        vm.go = go;

        // go();

        function go() {
            console.log('redirecionando');
            $state.go('user.welcome');
        }
    }
})();
