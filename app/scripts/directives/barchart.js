'use strict';

/**
 * @ngdoc directive
 * @name estatisticasApp.directive:barChart
 * @description
 * # barChart
 */
angular.module('estatisticasApp')
  .directive('barChart', function () {
    return {
      templateUrl: 'views/partials/barChart.html',
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

        scope.options = {
          animationSteps: 2,
          bezierCurve : false,
          scaleShowVerticalLines: showVerticalLines,
          scaleBeginAtZero: false,
          responsive: true
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
