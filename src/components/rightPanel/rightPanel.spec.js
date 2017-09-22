import myForm from './myForm';

describe('form', () => {

  describe('MyFormCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(myForm);

      angular.mock.inject(($controller) => {
        ctrl = $controller('MyFormCtrl', {});
      });
    });
  });
});