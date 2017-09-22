import angular from 'angular';

import data from './data';

const leftPanelDirective = () => {
  return {
    template: require('./leftPanel.html'),
    controller: 'LeftPanelCtrl',
    controllerAs: 'leftpanel'
  }
};

class LeftPanelCtrl {
  constructor($scope) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$scope = $scope;
    this.$scope.displayFilter = false;
    this.$scope.data = data.content;
  }

  isPerfectSquare(num) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  }

  isFibonacci(num) {
    if (num <= 1) { return false };
    return this.isPerfectSquare(5 * (num * num) - 4) 
      || this.isPerfectSquare(5 * (num * num) + 4);
  }

  isMiddle(index) {
    const halfLen = this.$scope.data.length / 2;
    if (index === Math.ceil(halfLen) || index === Math.floor(halfLen)) {
      return true;
    }
    return false;
  }
}

const MODULE_NAME = 'LeftPanel';

angular.module(MODULE_NAME, [])
  .directive('leftpanel', leftPanelDirective)
  .controller('LeftPanelCtrl', LeftPanelCtrl);

export default MODULE_NAME;