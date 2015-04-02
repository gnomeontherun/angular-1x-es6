'use strict';

// githubCommits directive implemented as a class.
// This varies from the standard function that returns an object that you do in ES5 code for Angular 1.x.
// However, it functionally does the same thing due to the `factory` method which returns a class object.
class GithubCommitsClass {
  // The `constructor` method allows us to do setup on our object, in this case setting some the properties that the
  // directive looks for such as the scope, template, and restrict.
  constructor() {
    this.restrict = 'E';
    this.scope = {
      user: '@',
      repo: '@'
    };
    this.template = '<ul><li ng-repeat="commit in commits">{{commit.commit.author.name}}: {{commit.commit.message}}</li></ul>';
  }

  // This controller will load the `Commits` service, and instantly load the data onto the scope.
  controller($scope, CommitsClass) {
    CommitsClass.get().then(data => {
      $scope.commits = data;
    });
  }

  // We need to create a way to return a new class, because Angular expects a directive to be a function that
  // returns an object. So we make a static factory method to format the object as Angular expects.
  static factory() {
    return new GithubCommitsClass();
  }
}

// Export the class out for the world to consume.
export default GithubCommitsClass;
