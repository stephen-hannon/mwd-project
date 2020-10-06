const authForm = {
    templateUrl: './auth-form.html',
    controller: 'AuthFormController',
    bindings: {
        onSubmit: '&',
        type: '<',
        user: '<',
    }
};

angular
    .module('components.auth')
    .component('authForm', authForm);
