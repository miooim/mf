import angular from 'angular';
import LeftPanel from '../components/leftPanel/leftPanel';
import RightPanel from '../components/rightPanel/rightPanel';
import '../style/materialize/js/materialize.min.js';
import '../style/materialize/css/materialize.min.css';
import '../style/apps.css';
import '../style/app.scss';

const appDirective = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://en.wikipedia.org/wiki/The_Simpsons';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [LeftPanel, RightPanel])
  .directive('app', appDirective)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;