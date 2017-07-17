<html ng-app="nameApp">
  <head>
    <meta charset="utf-8">
    <title>Angular Js example</title>
    <scriptsrc="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js">
	</script>
	<script>
		var nameApp = angular.module('nameApp', []);
		nameApp.controller('nameCtrl', function ($scope){
			$scope.firstName = 'John';
			//$scope.lastName  = 'Smith';
		});
		
		$scope.$watch('lastName', function(newValue, oldValue){
			console.log(newValue);
			
		});
		
		setTimeout(function(){
			$scope.lastName = 'Smith';
			$scope.apply();
		}, 2000)
	</script>
    </head>
    <body  ng-controller="nameCtrl">
    First name : <input ng-model="firstName" type="text" >
    <br>
	Last name : <input ng-model="lastName" type="text" >
	<br>
	Hello {{firstName}} {{lastName}}
    </body>
</html>

