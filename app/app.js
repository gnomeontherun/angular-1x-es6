import angular from 'angular';
import { GithubCommitsClass } from 'app/components/github-commits-class';
import GithubCommitsProto from 'app/components/github-commits-proto';
import { Commits } from 'app/services/commits';

console.log(GithubCommitsProto);

angular.module('App', [])
  .factory('Commits', Commits.factory)
  .directive('githubCommitsClass', GithubCommitsClass.factory)
  .directive('githubCommitsProto', GithubCommitsProto)
