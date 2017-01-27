(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', config]);

  function config($stateProvider, $urlRouterProvider) {
    var home = {
      name: 'home',
      url: '/home',
      component: 'home'
    };

    var list = {
      name: 'list',
      url: '/list',
      component: 'list',
      resolve: {
        data: function () {
          return Promise.resolve([
            {id: 1, name: 'Item 1', description: 'This is item 1.'},
            {id: 2, name: 'Item 2', description: 'This is item 2.'},
            {id: 3, name: 'Item 3', description: 'This is item 3.'},
            {id: 4, name: 'Item 4', description: 'This is item 4.'},
            {id: 5, name: 'Item 5', description: 'This is item 5.'}
          ]);
        }
      }
    };

    var detail = {
      name: 'list.detail',
      url: '/{id}',
      component: 'detail',
      resolve: {
        datum: function(data, $stateParams) {
          var id = parseInt($stateParams.id, 10);
          return Promise.resolve(data.find(d => d.id === id));
        }
      }
    };

    $stateProvider.state(home);
    $stateProvider.state(list);
    $stateProvider.state(detail);
    $urlRouterProvider.otherwise('/home');
  }
}());
