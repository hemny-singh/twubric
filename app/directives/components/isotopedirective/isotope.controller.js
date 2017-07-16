(function () {
    'use strict';

    angular.module('twubricApp.directives').directive('isotopecomponent', isotopeDirective);

    function isotopeDirective() {
        return {
            restrict: 'A',
            controllerAs: 'vm',
            // controller: sideMenuDirectiveController,
            scope: {},
            // templateUrl: '/app/directives/components/sidemenu/sidemenudirective.html',
            link: function (element, attrs) {
                // console.log(attrs, "hdghgfdsh");
                // var grid = document.querySelector('.grid-container');;
                var iso = new Isotope('.grid-container', {
                    // options...
                    itemSelector: '.grid-card-item',
                    layoutMode: 'fitRows',
                    getSortData: {
                        total: '.total parseInt',
                        friends: '.friends parseInt',
                        influence: '.influence parseInt',
                        chirpiness: '.chirpiness parseInt'
                    }
                });

                // bind sort button click
                var sortByGroup = document.querySelector('.sort-by-button-group');
                sortByGroup.addEventListener( 'click', function( event ) {
                  // only button clicks
                  if ( !matchesSelector( event.target, '.button' ) ) {
                    return;
                  }
                  var sortValue = event.target.getAttribute('data-sort-value');
                  iso.arrange({ sortBy: sortValue });
                });

                // change is-checked class on buttons
                var buttonGroups = document.querySelectorAll('.button-group');
                for ( var i=0; i < buttonGroups.length; i++ ) {
                  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
                }

                function onButtonGroupClick( event ) {
                  // only button clicks
                  if ( !matchesSelector( event.target, '.button' ) ) {
                    return;
                  }
                  var button = event.target;
                  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
                  button.classList.add('is-checked');
                }
            }
        };
    }
})();
