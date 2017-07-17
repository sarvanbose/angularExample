<html ng-app>
  <head>
    <meta charset="utf-8">
    <title>Angular Js example</title>
    <scriptsrc="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js"></script>
    </head>
    <body>
    name : <input ng-model="name" type="text" >
    Hello {{name}} // So this directive to angular to listen. Handle bar syntax
	//Angular automatically update when model change.
    </body>
</html>