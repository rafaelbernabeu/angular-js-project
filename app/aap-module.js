(function(){
    angular.module('my-app.controller', []);
    angular.module('my-app.routes', ['ui.router', 'my-app.controller']);
    angular.module('my-app.config', []);
    angular
        .module('my-app', [
            
            'my-app.config',
            'my-app.controller',
            'my-app.routes',


        ]).run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
