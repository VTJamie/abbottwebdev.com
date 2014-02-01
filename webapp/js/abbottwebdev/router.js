define(['jquery', 'angular', 'app', 'route_resolver_services_module', 'angular-ui-router'], function ($, angular, app) {
    "use strict";

    app.config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', function ($stateProvider, $urlRouterProvider, routeResolverProvider) {
        var route = routeResolverProvider.route;
        $urlRouterProvider.otherwise('/');


        $stateProvider
        .state('/', $.extend({url: '/'}, route.resolve('home/home')))
        .state('/geotalk', $.extend({url: '/geotalk'}, route.resolve('geotalk/geotalk')))
        .state('/sleepapp', $.extend({url: '/sleepapp'}, route.resolve('sleepapp/sleepapp')))
    }]);

    app.run(['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {
        $rootScope.$on('$stateChangeError', function (event, to, toParams, from, fromParams, rejection) {
            if (rejection === "AUTHENTICATION") {
           //     debug.log("Auth failed redirecting");
                debug.log($state);
                if (to.url === '/') {
                    $state.reload();
                } else {
                    $state.go('/');
                }
            }
        //    debug.log("Error", arguments);
        });
        $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams, rejection) {
        //    debug.log("Success", arguments);
        });
    }]);
});