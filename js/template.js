(function(){
    var app = angular.module('dmci-template', []);

    app.directive('dmciLogo', function(){
        return {
            template:
            '<div class="dmciLogo">' +
            '<img src="img/dmci-logo1.jpg" alt="DMCI Logo" class="img-responsive">' +
            '</div>'
        };
    });

    app.directive('dmciLogoProp', function(){
        return {
            template:
            '<div class="dmciLogo">' +
            '<img src="../img/dmci-logo1.jpg" alt="DMCI Logo" class="img-responsive">' +
            '</div>'
        };
    });

    app.directive('contactButton', function(){
        return {
            template:
            '<div data-target="#contact1" data-toggle="modal" class="call">' +
            '<img src="img/icons/call.jpg" alt="Contact" width="70" class="img-responsive">' +
            '<p>contact</p>' +
            '</div>'
        };
    });

    app.directive('contactButtonProp', function(){
        return {
            template:
            '<div data-target="#contact1" data-toggle="modal" class="call">' +
            '<img src="../img/icons/call.jpg" alt="Contact" width="70" class="img-responsive">' +
            '<p>contact</p>' +
            '</div>'
        };
    });

    app.directive('contactModal', function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/contact-modal.html'
        };
    });

    /*
     app.directive('contactModalProp', function(){
     return {
     restrict: 'E',
     templateUrl: '../directives/contact-modal-prop.html'
     };
     });
     */

    app.directive('footerMain', function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/footer-main.html'
        };
    });

})();
