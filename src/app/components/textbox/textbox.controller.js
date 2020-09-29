function TextboxController() {
    this.typedValue = '';
    this.recordType = function recordType(event) {
        //find the value of the most recent key typed var key = event.keyCode;
        const key = event.keyCode;
        console.log(key);
        //find the textbox value
        // var keyTyped = document.getElementById("ktype").value;
        if(key === 13){
            // pass typedValue to parent component
            this.onSubmit({typedValue: this.typedValue});
        }
    }
}
// TextboxController.$inject = ['ExampleService'];
angular.module('components').controller('TextboxController', TextboxController);
