(function(){
    angular
        .module('my-app.controller')
        .controller('AppController', AppController);

    function AppController($state){
        var vm = this;
        
        go();

        function go() {
            console.log('passou aqui!')
            $state.go('my-app.user');
        }
    }
})();
