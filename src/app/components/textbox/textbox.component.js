const textbox = {
    templateUrl: './textbox.html',
    controller: 'TextboxController',
    bindings: {
        onSubmit: '&',
    },
};

// Textbox Component with Routing (Routed / Stateful)
angular.module('components').component('appTextbox', textbox)
