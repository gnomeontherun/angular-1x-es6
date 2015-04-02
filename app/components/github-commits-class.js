'use strict';

class GithubCommitsClass {
  constructor(Commits) {
    this.Commits = Commits;

    this.restrict = 'E';
    this.scope = {
      user: '@',
      repo: '@'
    };
    this.template = '<ul><li ng-repeat="commit in commits">{{commit.commit.author.name}}: {{commit.commit.message}}</li></ul>';
  }

  controller($scope, Commits) {
    Commits.get().then(data => {
      $scope.commits = data;
    });
  }

  static factory(Commits) {
    return new GithubCommitsClass(Commits);
  }
}

GithubCommitsClass.factory.$inject = ['Commits'];

export { GithubCommitsClass };
