
/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    -controlForgotPassword.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 14/04/2019
 **************************************************************************************************/
app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {

    $scope.forgotPassword = function () {
        var data = {
            'email': $scope.email,
            // 'password': $scope.password
        }
        serviceForgotPassword.forgotPassword(data, $scope);
    }
});