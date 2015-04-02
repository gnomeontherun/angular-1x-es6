'use strict';

class GithubCommitsClass {
  constructor() {
    this.restrict = 'E';
    this.scope = {
      user: '@',
      repo: '@'
    };
    this.template = '<ul><li ng-repeat="commit in commits">{{commit.commit.author.name}}: {{commit.commit.message}}</li></ul>';
  }

  controller($scope, CommitsClass) {
    CommitsClass.get().then(data => {
      $scope.commits = data;
    });
  }

  static factory() {
    return new GithubCommitsClass();
  }
}

export { GithubCommitsClass };
