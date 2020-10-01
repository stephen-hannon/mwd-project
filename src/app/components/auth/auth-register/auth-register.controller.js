function RegisterController() {
    const $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.user = {
            name: '',
            email: '',
            password: '',
        };
    };

    $ctrl.registerUser = function (event) {

    }
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);
