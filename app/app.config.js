(function () {
    'use strict';

    /** @namespace twubricApp */
    var twubricApp = angular.module('twubricApp', [
        'twubricApp.services',
        'twubricApp.directives',
        'twubricApp.main',
        'twubricApp.header',
        'twubricApp.footer',
        'twubricApp.sidemenu',
        'twubricApp.vendor',
        'twubricApp.index'
    ]);

    twubricApp.config(config);

    /**
     * twubricApp application config.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     * @param {$provide} $provide
     * @param {$logProvider} $logProvider
     * @param {$compileProvider} $compileProvider
     */
    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $provide, $logProvider, $compileProvider) {

        //Disable the log messages.
        $logProvider.debugEnabled(false);

        //Disable the debug info.
        $compileProvider.debugInfoEnabled(false);

        //Register the exception handler.
        $provide.decorator('$exceptionHandler', exceptionHandler);

        //Register the abstract states.
        registerStates($stateProvider, $urlRouterProvider);
    }

    /**
     * Register the abstract application-wide states.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     */
    /* @ngInject */
    function registerStates($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('twubricApp', {
                abstract: true,
                views: {
                    '': {
                        controller: 'MainController',
                        templateUrl: '/app/main/main.html',
                        controllerAs: 'vm'
                    },
                    'header@twubricApp': {
                        controller: 'HeaderController',
                        templateUrl: '/app/header/header.html',
                        controllerAs: 'vm'
                    },
                    'footer@twubricApp': {
                        controller: 'FooterController',
                        templateUrl: '/app/footer/footer.html',
                        controllerAs: 'vm'
                    },
                    'sidemenu@twubricApp': {
                        controller: 'SideMenuController',
                        templateUrl: '/app/sidemenu/sidemenu.html',
                        controllerAs: 'vm'
                    }
                }
            });

        //Default url.
        $urlRouterProvider.otherwise('/index/home');
    }

    /**
     * Angular global exception handler.
     * @param {exceptionService} exceptionService
     */
    /* @ngInject */
    function exceptionHandler(exceptionService) {
        return function (exception, cause) {
            exceptionService.handle(exception, cause);
        };
    }
})();
