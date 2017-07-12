(function () {
    'use strict';

    /** @namespace twubricApp.sidemenu */
    var sidemenu = angular.module('twubricApp.sidemenu',
        [
            'twubricApp.services',
            'twubricApp.vendor'
        ]);

    sidemenu.config(config);

    /**
     * twubricApp.sidemenu config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('sidemenu');
    }

})();
