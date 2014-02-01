define(['app'], function (app) {
    "use strict";
    app.register.directive('footerInclude', function() {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: "js/abbottwebdev/footer/footer_template.html"
        };
    });

});