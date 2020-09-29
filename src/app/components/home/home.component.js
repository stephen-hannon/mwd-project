const home = {
    templateUrl: './home.html',
    controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular
    .module('components.home')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home',
                resolve: {
                    // sentences: function ($rootScope, SentenceModel, UniversityModel) {
                    //     if (!$rootScope.isEmpty(UniversityModel.data) && !SentenceModel.collection.length) {
                    //         return SentenceModel.collection;
                    //     } else {
                    //         return SentenceModel.getAllDeals(UniversityModel.data);
                    //     }
                    // }
                }
            });
    });
