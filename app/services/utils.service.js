(function() {
    'use strict';

    angular.module('twubricApp.services').service('twUtilsService', twUtilsService);
    /**
     * Writing all utils functions here.
     * @class
     * @classdesc Reusable code adding here.
     * @memberOf twubricApp.services
     */
    /* @ngInject */
    function twUtilsService(moment) {
      return {
        sortArray: sortArray,
        formatDateObject: formatDateObject,
        twDateRangeFilter: twDateRangeFilter
      };


        /**
         * [sortArray sorting the arrya as per some key's value]
         * @param  {[array]} data          [data that needs to be sorted]
         * @param  {[type]}  data                [description]
         * @param  {[string]}  comparableParentKey [parent key name]
         * @param  {[string]}  comparableChildKey  [child key name]
         * @param  {Boolean} isReverse           [ascending or descending]
         * @return {[array]}                      [sorted data]
         */
        function sortArray(data, comparableParentKey, comparableChildKey, isReverse) {
            var positive = 1, negative = -1;
            if (isReverse) {
              positive = -1;
              negative = 1;
            }
            data.sort(function(fObj, lObj) {
                if (fObj[comparableParentKey][comparableChildKey] < lObj[comparableParentKey][comparableChildKey]) {
                    return negative;
                } else if (fObj[comparableParentKey][comparableChildKey] > lObj[comparableParentKey][comparableChildKey]) {
                    return positive;
                } else {
                    return 0;
                }
            });
            return data;
        }

        function formatDateObject(date) {
            return moment(date).toDate();
        }

        function twDateRangeFilter(data, startDate, endDate, dataDateKey ) {
            var filtered = [], curDateData;
            //here you will have your desired input
            console.log(startDate, endDate);
            var start_date = Date.parse(startDate);
            var end_date = Date.parse(moment(endDate).add(23, 'hours').add(59, 'seconds'));
            for (var i = 0; i < data.length; i++) {
                curDateData = data[i][dataDateKey];
                if (curDateData >= start_date && curDateData <= end_date) {
                    filtered.push(data[i]);
                }
            }
            return filtered;
        };
    }
})();

