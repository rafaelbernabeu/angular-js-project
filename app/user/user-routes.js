(function () {
    angular
        .module('user.routes')
        .config(configRoutesApp);

    /* @ngInject */
    function configRoutesApp($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true,
                templateUrl: 'index.html'
            })
            .state('user.welcome' ,{
                url: '/user/welcome',
                controller: 'UserController',
                controllerAs: 'vm',
                templateUrl: 'app/user/user.html'
            });
    }
})();
