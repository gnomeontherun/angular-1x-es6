// Import all the things
import angular from 'angular';

import GithubCommitsClass from 'app/components/github-commits-class';
import CommitsClass from 'app/services/commits-class';

import GithubCommitsProto from 'app/components/github-commits-proto';
import CommitsProto from 'app/services/commits-proto';

// Create the angular app, and then register all of the entities with Angular.
angular.module('App', [])
  // Class examples
  .factory('CommitsClass', CommitsClass.factory)
  .directive('githubCommitsClass', GithubCommitsClass.factory)
  // Proto examples
  .factory('CommitsProto', CommitsProto)
  .directive('githubCommitsProto', GithubCommitsProto)
