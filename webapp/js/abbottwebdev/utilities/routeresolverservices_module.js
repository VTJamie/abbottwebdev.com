define(['jquery', 'angular', 'angular-ui-router'], function ($, angular) {
    "use strict";
    var services = angular.module('routeResolverServices', ['ui.router']).
        provider('routeResolver', function () {
            var that = this;
            $.extend(this, {
                $get: function () {
                    return this;
                },
                routeConfig: function () {
                    var viewsDirectory = 'js/abbottwebdev/pages/',
                        controllersDirectory = 'js/abbottwebdev/pages/',
                        pagesrequiringauth = [],
                        setBaseDirectories = function (viewsDir, controllersDir) {
                            viewsDirectory = viewsDir;
                            controllersDirectory = controllersDir;
                        },


                        getViewsDirectory = function () {
                            return viewsDirectory;
                        },

                        getControllersDirectory = function () {
                            return controllersDirectory;
                        };

                    return {

                        setBaseDirectories: setBaseDirectories,
                        getControllersDirectory: getControllersDirectory,
                        getViewsDirectory: getViewsDirectory
                    };
                }(),
                route: function (routeConfig) {

                    var resolve = function (baseName, requiresauth) {

                        var routeDef = {};
                        routeDef.baseName = baseName;
                        routeDef.templateUrl = that.routeConfig.getViewsDirectory() + baseName.toLowerCase() + '_template.html';
                        routeDef.controller = baseName.replace('/', '_') + '_controller';
                        routeDef.resolve = {
                            load: ['$q', '$rootScope', function ($q, $rootScope) {
                                var dependencies = [that.routeConfig.getControllersDirectory() + baseName.toLowerCase() + '_controller.js'];
                                return resolveDependencies($q, $rootScope, dependencies);
                            }],
                            authentication: ['$q', '$rootScope', '$stateParams', function ($q, $rootScope, $stateParams) {
                                var defer = $q.defer();
                                if (requiresauth)  {
                                    //should have code to determine authentication here

                                    debug.log("Failing authentication");
                                    defer.reject("AUTHENTICATION");
                                } else {
                                    //debug.log("Skipping Auth");
                                    defer.resolve();
                                }
                                return defer.promise;
                            }]
                        };
                        return routeDef;
                    },

                    resolveDependencies = function ($q, $rootScope, dependencies) {
                        var defer = $q.defer();
                        require(dependencies, function () {
                            defer.resolve();
                            $rootScope.$apply();
                        });

                        return defer.promise;
                    };

                    return {
                        resolve: resolve
                    }
                }(this.routeConfig)
            });
        });

});
