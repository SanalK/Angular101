angular.module("tutorialCtrlModule", [])
.controller("TutorialCtrl2", ["$scope", function ($scope) {
    $scope.secondTutorial = "This is the second tutorial";

} ])
.controller("TutorialCtrl", ["$scope", function ($scope) {
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main Page";
    $scope.tutorialObject.subTitle = "Sube page";
    $scope.tutorialObject.bindOutput = 2;
    $scope.tutorialObject.firstname = "Sanal";
    $scope.tutorialObject.lastname = "Kishore";
    $scope.timesTwo = function () {
        $scope.tutorialObject.bindOutput *= 2;
    }
} ])
;
