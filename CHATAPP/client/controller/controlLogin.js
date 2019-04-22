/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - controlLogin.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 14/04/2019
 **************************************************************************************************/

app.controller('controlLogin',function($scope,serviceLogin){
    $scope.login= function(){
        var data = {
            'email':$scope.email,
            'password':$scope.password
        }
         console.log(data);
         
        serviceLogin.login(data);
    }
});