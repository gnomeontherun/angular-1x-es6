'use strict';

class CommitsClass {
  constructor($http) {
    this.url = 'https://api.github.com/repos/angular/angular/commits';
    this.$http = $http;
  }

  get(page = 1) {
    return this.$http.get(this.url, {page: page}).then(result => result.data);
  }

  static factory($http) {
    return new CommitsClass($http);
  }
}

CommitsClass.factory.$inject = ['$http'];

export { CommitsClass };
