(function () {
  angular
    .module('app')
    .component('list', {
      bindings: {
        data: '<'
      },
      controller: function (log) {
        this.$onInit = () => log.info('created list');
        this.$onDestroy = () => log.info('destroyed list');
      },
      controllerAs: 'list',
      template: `
        <div style="display: flex">
          <nav>
            <h2>List View</h2>
            <a ui-sref="home">Home</a>
            <ul>
              <li ng-repeat="datum in list.data">
                <a ui-sref="list.detail(datum)">{{datum.name}}</a>
              </li>
            </ul>
          </nav>
          <main ui-view style="margin: 0 0 0 3em; flex: 1 0 0px;"></main>
        </div>
      `
    });
})();
