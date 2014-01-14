(function() {
    window.rockabox = window.rockabox || {};

    rockabox.reportingApp = angular.module('reportingApp', [
            'ngRoute'
        ])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/add', {
                    controller: 'reportingAdd',
                    templateUrl: 'templates/add.html'
                })
                .otherwise({
                    controller: 'reporting',
                    templateUrl: 'templates/table.html'
                });
        })
        .controller('reporting', function ($scope) {
            $scope.metrics = stats;
            $scope.remove = function (index) {
                $scope.metrics.splice(index, 1);
            };
        })
        .controller('reportingAdd', function ($scope, $location) {
            $scope.metrics = stats;
            $scope.location = $location;
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
                $scope.location.path('#/');
            };
        });

})();
