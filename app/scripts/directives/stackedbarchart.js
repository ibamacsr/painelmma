'use strict';

/**
 * @ngdoc directive
 * @name estatisticasApp.directive:stackedBarChart
 * @description
 * # stackedBarChart
 */
angular.module('estatisticasApp')
  .directive('stackedBarChart', function () {
    return {
      templateUrl: 'views/partials/stackedBarChart.html',
      restrict: 'E',
      replace: true,
      scope: {
        bar: '=data',
        name: '=',
        addBut: '=',
        nextPrevBut: '=',
        optionBut: '=',
        size: '=',
        legend: '=',
        verticalLines: '=',
        loading: '=',
        object: '='
      },
      link: function postLink(scope) {

        var showVerticalLines = 'true' || scope.verticalLines;
        scope.table = false;
        
        scope.type = "StackedBar"

        scope.options = {
          animationSteps: 3,
        //   bezierCurve : false,
        //   scaleShowVerticalLines: showVerticalLines
        };

        scope.toggleTable = function(){
          scope.table = !scope.table;
        };

        scope.$watch('bar',function(data){

          if(data) {
            scope.dat = data.data;
            scope.lab = data.labels;
            scope.ser = data.series;
          }

          switch (scope.size) {
            case 'small' :
              scope.sizeClass = 'col-sm-3';
              break;
            case 'large' :
              scope.sizeClass = 'col-sm-12';
              break;
            case 'medium':
            default :
              scope.sizeClass = 'col-sm-6';
              break;
          }

        });
      }
    };
  });
