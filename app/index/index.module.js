(function () {
    'use strict';

    /** @namespace twubricApp.index */
    var index = angular.module('twubricApp.index', [
        'twubricApp.services',
        'twubricApp.vendor'
    ]);

    index.config(config);

    /**
     * twubricApp.index config function.
     * @param {$stateProvider} $stateProvider
     */
    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('twubricApp.index', {
                abstract: true,
                url: '/index',
                views: {
                    'main': {
                        controller: 'IndexController',
                        templateUrl: '/app/index/index.html',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('twubricApp.index.home', {
                url: '/home',
                views: {
                    'index': {
                        controller: 'HomeController',
                        templateUrl: '/app/index/components/home/home.html',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
