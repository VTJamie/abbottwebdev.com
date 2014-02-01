define(['app'], function (app) {
    "use strict";
    app.register.directive('headerInclude', function() {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: "js/abbottwebdev/header/header_template.html"
        };
    });

});