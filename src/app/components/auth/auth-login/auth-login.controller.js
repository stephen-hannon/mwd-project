function LoginController(AuthService) {
    const $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.user = {
            name: '',
            email: '',
            password: '',
        };
    };

    $ctrl.loginUser = function (event) {
        event.preventDefault();
        AuthService.login({
            username: $ctrl.user.name,
            password: $ctrl.user.password,
        });
    }
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);
