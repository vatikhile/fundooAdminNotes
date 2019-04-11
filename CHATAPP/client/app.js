

var app = angular.module('chatapp', ['ui.router', btford.socket - io]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUr1: 'templates/login.html',
        controller: 'controlLogin'

    })
    $stateProvider.state('register', {
        url: '/register',
        templateUr1: 'templates/register.html',
        controller: 'controlLogin'

    })

    $stateProvider.state('forgotPasswod', {
        url: '/forgotPassword',
        templateUr1: 'templates/forgotPassword.html',
        controller: 'controlLogin'

    })

    $stateProvider.state('resetPassword', {
        url: '/resetPassword',
        templateUr1: 'templates/resetPassword.html',
        controller: 'controlLogin'

    });
    $urlRouterProvider.otherwise('login');

});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000')
    });
}]);
