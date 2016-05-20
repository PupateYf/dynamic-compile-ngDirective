function configFn ($compileProvider) {
    $compileProvider.directive('autoCompile', function($compile) {
        return {
            replace: true,
            link: function(scope, ele, attr) {
                console.log('attr is ',attr);
                var render = '<' + scope.components.directiveName + '/>';
                console.log(render);
                ele.append($compile(render)(scope))
            }
        }
    })
}
angular.module('myApp', [], configFn)
.controller('myController', ['$scope', function ($scope) {
    $scope.componentsList = [{
          directiveName : 'pIc-cmpnt',
          url           : 'http://www.vip.com/pic'
        },
        {
          directiveName : 'text-cmpnt',
          url           : 'http://www.vip.com/text'
        }];
}])
.directive('picCmpnt', function () {
    return {
          restrict: 'E',
          replace: true,
          template: `
                    <div>
                        <h1>{{components.url}}</h1>
                        <p>
      	                   pic components
      	                </p>
                    </div>`,
          link: function (scope, ele, attr) {

          }
        }
})
.directive('textCmpnt', function () {
    return {
          restrict: 'E',
          replace: true,
          template: `
                    <div>
                        <h1>{{components.url}}</h1>
                        <p>
                           text components
                        </p>
                    </div>`,
          link: function (scope, ele, attr) {

          }
        }
});

