const authForm = {
    templateUrl: './auth-form.html',
    controller: 'AuthFormController',
};

angular
    .module('components.auth')
    .component('authForm', authForm)
