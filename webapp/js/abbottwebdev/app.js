define(['jquery', 'angular', 'angular-route', 'route_resolver_services_module'], function ($, angular) {
    "use strict";
    var app = angular.module('angularApp', ['routeResolverServices', 'ui.router']);
    app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');
            //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;        charset=UTF-8';
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
        }
    ]);

    return app;
});