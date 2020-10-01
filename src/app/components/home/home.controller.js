function getRandomSentence(sentences){
    //this gets a random sentence from an array of sentences
    var max = sentences.length;
    var min = 0;
    function random(mn, mx) {  
        return Math.random() * (mx - mn);  
    }  
    var value = Math.floor(random(min, max)); 
    return sentences[value];
}

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
        if ($ctrl.isMatch == true){
            $ctrl.targetText = getRandomSentence($ctrl.sentences);
        }
    }
    SentenceModel.getAll().then(function (result) {
        console.log(result);
        if (!result) {
            return;
        }
        $ctrl.sentences = result.map(sentence => sentence.text);
        console.log($ctrl.sentences)
        $ctrl.targetText = getRandomSentence($ctrl.sentences);
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
