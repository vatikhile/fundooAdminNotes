var app =angular.module('chatapp',[])
app.config(function($stateprovider,$urlRouterProvider)
{
   
    $stateprovider.state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'controlLogin'
    })

    $stateprovider.state('register',{
        url:'/register',
        templateUrl:'templates/register.html',
        controller:'controlRegister'
    })

    $stateprovider.state('forgotPassword',{
        url:'/forgotPassword',
        templateUrl:'templates/.forgotPassword.html',
        controller:'controlForgotPassword'
    })

    $stateprovider.state('resetPassword',{
        url:'/resetPassword',
        templateUrl:'templates/resetPassword.html',
        controller:'controlResetPassword'
    })

    $stateprovider.state('dashboard',{
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