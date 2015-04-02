'use strict';

// Commit service implemented as a class.
// This class creates a basic HTTP resource for Angular commit messages from Github. The most annoying aspect of the
// class structure is the number of places that dependencies have to be declared or passed around.
class CommitsClass {

  // Create a constructor, and it sets the default url. The `$http` service is passed by Angular to the constructor
  // and we have to do something with it to make it available outside of the constructor scope, so we attach to `this`.
  constructor($http) {
    this.url = 'https://api.github.com/repos/angular/angular/commits';
    this.$http = $http;
  }

  // The `get` method makes an HTTP call, but also has the handy default value for page if it is not specified.
  get(page = 1) {
    // We use the arrow function to handle the resolution callback here.
    return this.$http.get(this.url, {page: page}).then(result => result.data);
  }

  // Create the static factory method so that Angular has something to call to instantiate this class, and requires us
  // to pass the depdenencies once again.
  static factory($http) {
    return new CommitsClass($http);
  }
}

// One final step is to annotate our dependency injections for minification.
CommitsClass.factory.$inject = ['$http'];

// Export the class for the world.
export default CommitsClass;
