var PokemonList = function($scope) {
    $scope.pokemon = [
        'Bulbasaur', 'Ivysaur', 'Venusaur',
        'Charmander', 'Charmeleon','Charizard',
        'Squirtle', 'Wartortle', 'Blastoise'
    ];
    $scope.add = function() {
        var name = $scope.new_pokemon;
        $scope.pokemon.push(name);
        $scope.new_pokemon = '';
    };
    $scope.remove = function(index) {
        $scope.pokemon.splice(index, 1);
    };
};

angular.module('stats', ['ngResource'])
.controller('ReportStats', function($scope, $resource) {
    var Stats = $resource('json/django-rest.json');
    $scope.stats = Stats.get();
});
