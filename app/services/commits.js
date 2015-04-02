'use strict';

class Commits {
  constructor($http) {
    this.url = 'https://api.github.com/repos/angular/angular/commits';
    this.$http = $http;
  }

  get(page = 1) {
    return this.$http.get(this.url, {page: page}).then(result => result.data);
  }

  static factory($http) {
    return new Commits($http);
  }
}

Commits.factory.$inject = ['$http'];

export { Commits };