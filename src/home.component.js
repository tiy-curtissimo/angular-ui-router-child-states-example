(function () {
  angular
    .module('app')
    .component('home', {
      template: `
        <h4>Hello</h4>
        <a ui-sref="list">See the list</a>
      `
    });
})();