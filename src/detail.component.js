(function () {
  angular
    .module('app')
    .component('detail', {
      bindings: {
        datum: '<'
      },
      controller: function (log) {
        this.$onInit = () => log.info('created detail');
        this.$onDestroy = () => log.info('destroyed detail');
      },
      controllerAs: 'detail',
      template: `
        <h2>Child View</h2>
        <h4>{{detail.datum.name}}</h4>
        <p>{{detail.datum.description}}</p>
      `
    });
})();
