const leaderboard = {
    templateUrl: './leaderboard.html',
    controller: 'LeaderboardController',
    bindings: {
        leaders: '<',
    },
};

// Home Component with Routing (Routed / Stateful)
angular
    .module('components.leaderboard')
    .component('leaderboard', leaderboard)
    .config(function ($stateProvider) {
        $stateProvider
            .state('leaderboard', {
                url: '/leaderboard',
                component: 'leaderboard',
                resolve: {
                    leaders: function ($rootScope, UserScoreModel) {
                        if (UserScoreModel.collection.length) {
                            return UserScoreModel.collection;
                        } else {
                            return UserScoreModel.getBest(5);
                        }
                    }
                }
            });
    });
