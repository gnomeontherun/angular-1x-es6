'use strict';

function CommitsProto($http) {

  let url = 'https://api.github.com/repos/angular/angular/commits';

  function CommitsProto() {}

  CommitsProto.get = function(page) {
    return $http.get(url, {page: page}).then(result => result.data);
  }

  return CommitsProto;
}

export default ['$http', CommitsProto];
