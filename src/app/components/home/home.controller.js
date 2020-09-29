function HomeController (/*ExampleService*/) {
    const $ctrl = this;
    //default writing
    $ctrl.targetText = 'Hello world';
    $ctrl.typedValue = '';
    $ctrl.isMatch = false;

    $ctrl.onSubmit = function (typedValue) {
        $ctrl.typedValue = typedValue;
        $ctrl.isMatch = (typedValue === $ctrl.targetText);
    }
    //Writes the text from words.json
    // ExampleService.getData().then(function (result) {
    //     console.log(result.data);
    //     $ctrl.targetText = result.data.words[0];
    // })
}

angular
    .module('components.home')
    .controller('HomeController', HomeController);
