(function () {
    'use strict';

    angular.module('twubricApp.index').controller('HomeController', HomeController);

    /**
     * HomeController
     * @class
     * @classdesc Controller method of 'twubricApp.index' home component.
     * @memberOf twubricApp.index
     */
    /* @ngInject */

    function HomeController(httpService, twUtilsService, moment) {
        var $ctrl = this;
        $ctrl.twitterData = {};
        $ctrl.sortData = {
            key: 'total',
            isReverse: false
        };
        $ctrl.sortByKey = 'total';
        $ctrl.startDate = null;
        $ctrl.endDate = null;
        $ctrl.cachedData = {};
        $ctrl.filter = {
            isOpenStartDate: false,
            isOpenEndDate: false,
            startDateValue: null,
            endDateValue: null,
            dateOptions: {
                maxDate: moment().toDate()
            },
            startDateError: false,
            endDateError: false,
            dateError: false
        };
        $ctrl.filterButtonEnable = false;
        $ctrl.clearButtonEnable = false;

        function init() {
            httpService.get('./app/assets/twitter.json', {})
                .then(function(data) {
                    $ctrl.cachedData = angular.copy(data);
                    $ctrl.twitterData = twUtilsService.sortArray(angular.copy(data), 'twubric', $ctrl.sortByKey);
                });
        }
        init();

        $ctrl.sortUserCards = function (type) {
            // var reverse = false;
            if (type === $ctrl.sortData.key) {
                $ctrl.sortData.isReverse = ! $ctrl.sortData.isReverse;
            } else {
                $ctrl.sortData.isReverse = false;
                $ctrl.sortData.key = type;
            }
            $ctrl.twitterData = twUtilsService.sortArray(angular.copy($ctrl.twitterData), 'twubric', $ctrl.sortByKey, $ctrl.sortData.isReverse);
        };

        $ctrl.openCalendar = function (whichCal) {
            $ctrl.filter[whichCal] = true;
        };

        $ctrl.validateDate = function () {
            $ctrl.filter.startDateError = false;
            $ctrl.filter.endDateError = false;
            $ctrl.filter.dateError = false;
            $ctrl.filterButtonEnable = true;

            if (!$ctrl.filter.startDateValue || !$ctrl.filter.endDateValue) {
                 $ctrl.filterButtonEnable = false;
            }
            if ($ctrl.filter.startDateValue && !moment($ctrl.filter.startDateValue).isValid()) {
                $ctrl.filter.startDateError = "Start Date is not Valid. Please Enter Valid Date";
                $ctrl.filterButtonEnable = false;
            }

            if ($ctrl.filter.endDateValue && !moment($ctrl.filter.endDateValue).isValid()) {
                $ctrl.filter.endDateError = "End Date is not Valid. Please Enter Valid Date";
                $ctrl.filterButtonEnable = false;
            }

            if ($ctrl.filter.startDateValue && $ctrl.filter.endDateValue &&
                moment($ctrl.filter.startDateValue) > moment($ctrl.filter.endDateValue)) {
                $ctrl.filter.dateError = "Start Date should be lesser than or equal to End Date";
                $ctrl.filterButtonEnable = false;
            }
        };

        $ctrl.filterData = function () {
            $ctrl.twitterData = twUtilsService.twDateRangeFilter(angular.copy($ctrl.cachedData), $ctrl.filter.startDateValue, $ctrl.filter.endDateValue, 'join_date');
            $ctrl.clearButtonEnable = true;
        };

        $ctrl.clearFilter = function () {
            $ctrl.filter.startDateValue = null;
            $ctrl.filter.endDateValue = null;
            $ctrl.clearButtonEnable = false;
            $ctrl.twitterData = twUtilsService.sortArray(angular.copy($ctrl.cachedData), 'twubric', $ctrl.sortByKey);
        };

        $ctrl.removeData = function (index) {
            $ctrl.twitterData.splice(index, 1);
        };
    }



})();
