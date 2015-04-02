'use strict';

// githubCommits directive implemented as a function.
// This really is just leveraging the ability to import/export in ES6, otherwise the function definition here remains
// very similar to what would be done normally.
function GithubCommitsProto() {

  // Using `let` because its cool and scopes the variable to the local block scope
  // However, we are just making the same kind of directive definition object as you see in standard Angular apps.
  let directive = {
    restrict: 'E',
    scope: {
      user: '@',
      repo: '@'
    },
    controller: function($scope, CommitsProto) {
      CommitsProto.get().then(function(data) {
        $scope.commits = data;
      });
    },
    template: '<ul><li ng-repeat="commit in commits">{{commit.commit.author.name}}: {{commit.commit.message}}</li></ul>'
  };

  // Directives in 1.x are just functions that return an object, so here we do that.
  return directive;

}

// Export the one and only value (hence the `default`) for external consumption.
export default GithubCommitsProto;
