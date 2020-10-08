function AuthFormController () {
    const $ctrl = this;
    console.log($ctrl);

    $ctrl.$onInit = function () {
        $ctrl.buttonText = $ctrl.type === 'register' ? 'Register' : 'Log in'
    }
}

angular
    .module('components.auth')
    .controller('AuthFormController', AuthFormController);
