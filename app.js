(function() {
    window.rockabox = window.rockabox || {};

    rockabox.reportinApp = angular.module('reportingApp', [])
        .controller('reportingCtrl', function ($scope) {
            $scope.metrics = stats;

            $scope.add = function () {
                var x = {
                    stats: [
                        {
                            title: 'Unique Clicks',
                            name: 'uniqueClicks',
                            total: 5432
                        },
                        {
                            title: 'Aggregate Backup Image',
                            name: 'aggregateBackupImage',
                            total: 12
                        },
                        {
                            title: 'Aggregate CTA',
                            name: 'aggregateCta',
                            total: 987
                        }
                    ]
                };

                x['name'] = $scope['new_stat'];
                x['id'] = $scope.metrics.length + 1;
                $scope['new_stat'] = '';
                $scope.metrics.push(x);
            };

            $scope.remove = function (index) {
                $scope.metrics.splice(index, 1);
            };
        });

})();
