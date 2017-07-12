(function () {
    'use strict';

    /** @namespace twubricApp.footer */
    var footer = angular.module('twubricApp.footer',
        [
            'twubricApp.services',
            'twubricApp.vendor'
        ]);

    footer.config(config);

    /**
     * twubricApp.footer config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('footer');
    }

})();
