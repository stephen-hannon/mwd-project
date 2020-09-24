const home = {
    templateUrl: './home.html',
    controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular
    .module('components')
    .component('home', home);
