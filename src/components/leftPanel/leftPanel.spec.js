import app from './list';

describe('list', () => {

  describe('ListCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('ListCtrl', {});
      });
    });
  });
});