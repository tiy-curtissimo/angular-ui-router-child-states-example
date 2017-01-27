(function () {
  angular
    .module('app')
    .factory('log', ['$timeout', logFactory]);

    function logFactory($timeout) {
      return {
        info: function (message) {
          let events = document.getElementById('events');
          events.innerHTML = `<p class="new">${message}</p>${events.innerHTML}`;
          $timeout(() => {
            events
              .querySelector('p.new')
              .classList.remove('new');
          });
        }
      };
    }
})();
