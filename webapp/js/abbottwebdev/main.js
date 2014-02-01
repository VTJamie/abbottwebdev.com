/*global $, define, require, debug*/
/*jslint nomen: true */
require.config({
    //urlArgs: "bust=" + (new Date ()).getTime(),
    paths: {

        // Common JS Libs
        'jquery': '../libs/jquery/jquery-1.10.2',
        'jquery-ui': '../libs/jquery/jquery-ui-1.10.3.custom.min',
        'jquery-highlight': '../libs/jquery/jquery-highlight',
        'jquery-purl': '../libs/jquery/purl',
        'angular': '../libs/angular/angular.min',
        'angular-route': '../libs/angular/angular-route',
        'angular-touch': '../libs/angular/angular-touch.min',
        'angular-ui-router': '../libs/angular/angular-ui-router',

        'bootstrap-collapse': '../libs/bootstrap/collapse',
        'bootstrap-transition': '../libs/bootstrap/transition',
        'bootstrap-dropdown': '../libs/bootstrap/dropdown',
        'bootstrap-affix': '../libs/bootstrap/affix',
        'bootstrap-carousel': '../libs/bootstrap/carousel',


        'snap': '../libs/snap/snap',
        'logging': '../libs/logging/ba-debug',
        'modernizr': '../libs/modernizr/modernizr',

        'footer': 'footer/footer_directive',
        'header': 'header/header_directive',

        'route_resolver_services_module': 'utilities/routeresolverservices_module'
    },
    shim: {
        'jquery-ui': {
            deps: ['jquery']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'app': {
            deps: ['jquery', 'angular', 'angular-route', 'angular-touch', 'bootstrap-collapse', 'bootstrap-dropdown', 'bootstrap-affix', 'bootstrap-carousel', 'snap']
        },
        'bootstrap-collapse': {
            deps: ['jquery', 'bootstrap-transition']
        },
        'bootstrap-transition': {
            deps: ['jquery']
        },
        'bootstrap-dropdown': {
            deps: ['jquery']
        },
        'bootstrap-affix': {
            deps: ['jquery']
        },
        'bootstrap-carousel': {
            deps: ['jquery']
        },
        'snap_directive': {
            deps: ['app', 'snap']
        }

    },
    map: {
        '*': {
        }
    }
});

//router and routecontroller must be specified in a sub config file
require(['jquery', 'jquery-ui', 'modernizr', 'logging', 'angular', 'app', 'router'],
    function ($, jQueryUI, Modernizr, logging, angular, app, router) {
        "use strict";
        debug.group("Bootstrapping Angular");
        angular.bootstrap(document, ['angularApp']);
        debug.groupEnd("Bootstrapping Angular");
    });
