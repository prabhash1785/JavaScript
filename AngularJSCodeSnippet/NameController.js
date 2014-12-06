/**
 * Sample AngularJS Controller.
 *
 * Created by prrathore on 12/6/14.
 */

function NameController($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.fullName = function() {
         return $scope.firstName + " " + $scope.lastName;
    }
}

