( function() {

var app = angular.module('myApp',[]);


var ctrlFun = function($scope){
$scope.msg="HI angular";
};
   
app.controller('myCtrl',ctrlFun);
//or
// app.controller('myCtrl',ctrlFun);
// ctrlFun.$inject =['$scope'];
//or
//app.controller('myCtrl' ,['$scope',ctrlFun]);
})();


//minified code
//angular.module("myApp",[]).controller("myCtrl",["$scope",function(l){l.msg="HI angular"}]);