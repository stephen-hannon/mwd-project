function RegisterController(AuthService) {
    const $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.user = {
            name: '',
            email: '',
            password: '',
        };
    };

    $ctrl.registerUser = function (event) {
        console.log('registering', $ctrl.user, event)
        // event.preventDefault();
        AuthService.register({
            username: $ctrl.user.name,
            password: $ctrl.user.password,
            email: $ctrl.user.email,
        });
    }
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);
