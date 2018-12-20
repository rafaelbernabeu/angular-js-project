(function () {
    angular
        .module('my-app.routes')
        .config(configRoutesApp);

    /* @ngInject */
    function configRoutesApp($stateProvider) {
        $stateProvider
            .state('my-app', {
                abstract: true,
                templateUrl: 'index.html'
            })
            .state('my-app.welcome' ,{
                url: '/welcome',
                controller: 'AppController',
                controllerAs: 'vm',
                templateUrl: 'app/app.html'
            });
    }
})();
