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
                url: '/',
                controller: 'AppController',
                controllerAs: 'appCtrl',
                templateUrl: 'app.html'
            });
    }
})();
