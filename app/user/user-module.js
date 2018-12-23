(function(){
    angular.module('user.controller', [] );
    angular.module('user.routes', ['ui.router'] );

    angular.module('user', [
        'user.controller',
        'user.routes',
    ]);
})();
