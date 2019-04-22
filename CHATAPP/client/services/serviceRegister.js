/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - ServiceRegister.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 13/04/2019
 **************************************************************************************************/

app.service('serviceRegister', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        console.log("data on service register--- ", data);
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: data

        }).then(
            function successCallback(response) {
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {
            alert("register Unsuccessfull")
                console.log("register Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }
});