var app = {
    templateUrl: './app.html',
    controller: 'AppController'
};

angular
    .module('common')
    .component('app', app)
    .config(function ($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                redirectTo: 'home',
                component: 'app',
                data: {
                    requireAuth: true
                },
            });
    });