(function () {
    angular
        .module('user.routes')
        .config(configRoutesApp);

    /* @ngInject */
    function configRoutesApp($stateProvider) {
        $stateProvider
            .state('my-app.user', {
                url: '/userr',
                controller: 'UserController',
                controllerAs: 'usrController',
                abstract: true,
                templateUrl: '/user/index.html',
                resolve: {
                }
            });
    }
})();
