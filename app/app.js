import angular from 'angular';

import GithubCommitsClass from 'app/components/github-commits-class';
import CommitsClass from 'app/services/commits-class';

import GithubCommitsProto from 'app/components/github-commits-proto';
import CommitsProto from 'app/services/commits-proto';

angular.module('App', [])
  .factory('CommitsClass', CommitsClass.factory)
  .directive('githubCommitsClass', GithubCommitsClass.factory)

  .factory('CommitsProto', CommitsProto)
  .directive('githubCommitsProto', GithubCommitsProto)
