(function () {
    'use strict';

    /** @namespace twubricApp.directives */
    var directives = angular.module('twubricApp.directives',
        [
            'twubricApp.services',
            'twubricApp.vendor'
        ]);

    directives.config(config);

    /**
     * twubricApp.directives config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('directives');
    }

})();
