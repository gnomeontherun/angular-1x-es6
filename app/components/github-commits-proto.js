'use strict';

function GithubCommitsProto() {

  let directive = {
    restrict: 'E',
    scope: {
      user: '@',
      repo: '@'
    },
    controller: function($scope, CommitsProto) {
      console.log(CommitsProto);
      CommitsProto.get().then(function(data) {
        $scope.commits = data;
      });
    },
    template: '<ul><li ng-repeat="commit in commits">{{commit.commit.author.name}}: {{commit.commit.message}}</li></ul>'
  };

  return directive;

}

export default GithubCommitsProto;
