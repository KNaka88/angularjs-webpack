import angular from 'angular';
import sum from './test';

const total = sum(10, 5);
console.log(total);

angular.module('app', [])
  .controller('indexController', ['$scope', ($scope) => {
    $scope.name = "world";
  }]);
