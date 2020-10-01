function HomeController (SentenceModel) {
    const $ctrl = this;
    //default writing
    $ctrl.sentences = [];
    $ctrl.targetText = 'Hello world';
    $ctrl.typedValue = '';
    $ctrl.isMatch = false;

    $ctrl.onSubmit = function (typedValue) {
        $ctrl.typedValue = typedValue;
        $ctrl.isMatch = (typedValue === $ctrl.targetText);
    }
    SentenceModel.getAll().then(function (result) {
        console.log(result);
        if (!result) {
            return;
        }
        $ctrl.sentences = result.map(sentence => sentence.text);
        console.log($ctrl.sentences)
    });
    // SentenceModel.getById('i6PKzhesCz').then(function (result) {
    //     console.log(result);
    //     $ctrl.targetText = result.text;
    // });
    //Writes the text from words.json
    // ExampleService.getData().then(function (result) {
    //     console.log(result.data);
    //     $ctrl.targetText = result.data.words[0];
    // })
}

angular
    .module('components.home')
    .controller('HomeController', HomeController);
