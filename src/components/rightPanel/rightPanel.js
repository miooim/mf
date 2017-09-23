import angular from 'angular';
import ContentService from '../../services/content.service';

const rightPanelDirective = () => {
  return {
    template: require('./rightPanel.html'),
    controller: 'RightPanelCtrl',
    controllerAs: 'rightpanel'
  }
};

class RightPanelCtrl {
  constructor($scope, ContentService) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$scope = $scope;
    this.$scope.displayFilter = false;
    this.text = '';
    this.ContentService = ContentService;
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
    this.ContentService.updateContent(this.$scope.data);
  }
}

const MODULE_NAME = 'rightPanel';

angular.module(MODULE_NAME, [])
  .service('ContentService', ContentService)
  .directive('rightpanel', rightPanelDirective)
  .controller('RightPanelCtrl', RightPanelCtrl);

export default MODULE_NAME;