import angular from 'angular';

const rightPanelDirective = () => {
  return {
    template: require('./rightPanel.html'),
    controller: 'RightPanelCtrl',
    controllerAs: 'rightpanel'
  }
};

class RightPanelCtrl {
  constructor($scope) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$scope = $scope;
    this.$scope.displayFilter = false;
    this.text = '';
  }

  handleCheckBox() {
    this.$scope.displayFilter = !this.$scope.displayFilter;
  }
  
  handleButtonClick() {
    console.log(this.text);
    this.$scope.data = [...this.$scope.data, {
      "data": this.text,
      "type": "text",
      "display": this.$scope.displayFilter
    }];
  }
}

const MODULE_NAME = 'rightPanel';

angular.module(MODULE_NAME, [])
  .directive('rightpanel', rightPanelDirective)
  .controller('RightPanelCtrl', RightPanelCtrl);

export default MODULE_NAME;