(function () {
    angular
        .module('my-app.routes')
        .config(configRoutesApp);

    /* @ngInject */
    function configRoutesApp($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/welcome');

        $stateProvider
            .state('my-app', {
                abstract: true,
            })
            .state('my-app.welcome' ,{
                url: '/welcome',
                controller: 'AppController',
                controllerAs: 'vm',
                templateUrl: 'app/app.html'
            });
    }
})();
