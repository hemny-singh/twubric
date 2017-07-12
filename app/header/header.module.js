(function () {
    'use strict';

    /** @namespace twubricApp.header */
    var header = angular.module('twubricApp.header',
        [
            'twubricApp.services',
            'twubricApp.vendor'
        ]);

    header.config(config);

    /**
     * twubricApp.header config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('header');
    }

})();
