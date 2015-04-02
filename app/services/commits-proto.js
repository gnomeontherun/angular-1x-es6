'use strict';

// The `Commits` service implemented as a function object.
// There is no real magic here, the function returns an object with the service methods for getting the Angular
// Github commits. We declare the dependencies here and in the annotation at the end.
function CommitsProto($http) {

  // Use `let` to make this variable local to this block scope
  let url = 'https://api.github.com/repos/angular/angular/commits';

  // Create a new Commits object.
  function Commits() {}

  // Add the `get` method, and use the injected `$http` service.
  Commits.get = function(page) {
    return $http.get(url, {page: page}).then(result => result.data);
  }

  // Return the service to the factory provider.
  return Commits;
}

// Export the commits, and use the array annotation method to make minification work.
export default ['$http', CommitsProto];
