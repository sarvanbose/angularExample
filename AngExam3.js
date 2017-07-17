<html ng-app="nameApp">
  <head>
    <meta charset="utf-8">
    <title>Angular Js example</title>
    <scriptsrc="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js">
	</script>
	<script>
		var nameApp = angular.module('nameApp', []);
		nameApp.controller('nameCtrl', function ($scope){
			$scope.names = [ 'test', 'test1', 'test2' ]
		});
		
		$scope.addName = function() {
			$scope.names.push($scope.enteredName)
		};
		 
	</script>
    </head>
    <body  ng-controller="nameCtrl">
     <ul>
		<li ng-repeat="name in names"> {{name}} </li>
		<form ng-submit="addName()">
		<input type="submit" value="add">
		<input type="text" ng-model={{enteredName}} >
		</form>
	 </ul>
    </body>
</html>

