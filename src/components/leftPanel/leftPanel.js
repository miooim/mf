import angular from 'angular';
import ContentService from '../../services/content.service';

const leftPanelDirective = () => {
  return {
    template: require('./leftPanel.html'),
    controller: 'LeftPanelCtrl',
    controllerAs: 'leftpanel',
  }
};

class LeftPanelCtrl {
  constructor($scope, ContentService) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$scope = $scope;
    this.$scope.displayFilter = false;
    this.ContentService = ContentService;
    this.$scope.data = [];
    this.initContent();
  }

  initContent() {
    const { data } = this.$scope;
    this.ContentService.getContent()
      .then(result => {
        this.$scope.data = result.data.content;
      }
    );
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

  parseData(content) {
    if (!content.data) return "EMPTY";
    if (content.type === 'list') {
      return content.data.join(', ');
    }
    return content.data;
  }
}

const MODULE_NAME = 'LeftPanel';

angular.module(MODULE_NAME, [])
  .service('ContentService', ContentService)
  .directive('leftpanel', leftPanelDirective)
  .controller('LeftPanelCtrl', LeftPanelCtrl);

export default MODULE_NAME;