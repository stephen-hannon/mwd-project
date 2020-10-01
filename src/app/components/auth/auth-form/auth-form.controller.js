function AuthFormController () {
    const $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.buttonText = $ctrl.type === 'register' ? 'Register' : 'Log in'
    }
}

angular
    .module('components.auth')
    .controller('AuthFormController', AuthFormController);
