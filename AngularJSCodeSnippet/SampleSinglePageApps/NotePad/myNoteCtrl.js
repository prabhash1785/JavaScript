/**
 * Created by prrathore on 12/6/14.
 */

app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
    $scope.restrict = function() {
        if($scope.message.length > 20) {
            alert("Not allowed more than 15 characters!!");
            $scope.clear();
        }
    }
});
