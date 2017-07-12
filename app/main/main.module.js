(function () {
    'use strict';

    /** @namespace twubricApp.main */
    var main = angular.module('twubricApp.main',
        [
            'twubricApp.services',
            'twubricApp.vendor'
        ]);

    main.config(config);

    /**
     * twubricApp.main config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('main');
    }

})();
