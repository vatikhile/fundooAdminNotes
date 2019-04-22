/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - app.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 15/04/2019
 **************************************************************************************************/

 var app = angular.module('chatapp', ['ui.router', 'btford.socket-io']);

app.config(function($stateProvider, $urlRouterProvider)
{
   
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'controlLogin'
    })

    $stateProvider.state('register',{
        url:'/register',
        templateUrl:'templates/register.html',
        controller:'controlRegister'
    })

    $stateProvider.state('forgotPassword',{
        url:'/forgotPassword',
        templateUrl:'templates/forgotPassword.html',
        controller:'controlForgotPassword'
    })

    $stateProvider.state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'templates/resetPassword.html',
        controller:'controlResetPassword'
    })

    $stateProvider.state('dashboard',{
        url:'/dashboard',
        templateUrl:'templates/dashboard.html',
        controller:'chatController'
    })
    $urlRouterProvider.otherwise('login');
    
})
app.service('SocketService',['socketFactory',function SocketServices(socketFactory)
{
return socketFactory({

iosocket:io.connect('http://localhost:3000')

})

}])