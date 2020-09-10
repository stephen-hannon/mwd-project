angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './home/home.html',
    controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', ['ExampleService', function (ExampleService) {
    const $ctrl = this;
    $ctrl.exampleVariable = 'Hello world';
    ExampleService.getData().then(function (result) {
        console.log(result.data);
        $ctrl.exampleVariable = result.data.words[0];
    })
}]);
/*--------------------- Home Component ---------------------*/

/*--------------------- TypeWords Component ---------------------*/
const typewords = {
    templateUrl: './typewords/typewords.html',
    controller: 'TypeWordsController'
}

// Textbox Component with Routing (Routed / Stateful)
angular.module('app').component('appTextbox', typewords)

// Textbox Controller with dependency injection using $inject method
function TypeWordsController(ExampleService) {

}
TypeWordsController.$inject = ['ExampleService'];
angular.module('app').controller('TypeWordsController', TypeWordsController);
/*--------------------- TypeWordsController Component ---------------------*/

/*--------------------- Textbox Component ---------------------*/
const textbox = {
    templateUrl: './textbox/textbox.html',
    controller: 'TextboxController'
}

// Textbox Component with Routing (Routed / Stateful)
angular.module('app').component('appTextbox', textbox)

// Textbox Controller with dependency injection using $inject method
function TextboxController(ExampleService) {

}
TextboxController.$inject = ['ExampleService'];
angular.module('app').controller('TextboxController', TextboxController);
/*--------------------- Textbox Component ---------------------*/

/*--------------------- Example Service ---------------------*/
function ExampleService($http) {
    // Services are Singletons
    // Properties
    // Methods
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'words.json'
        });
    }
}
ExampleService.$inject = ['$http'];

angular.module('app').service('ExampleService', ExampleService)
/*--------------------- Example Service ---------------------*/

