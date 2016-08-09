angular.module('userapp').factory('UserService', [ '$http', function($http) {
	var list={};
	
	list.getUsers = function(postData) {
	     transFn = function(postData) {
			return $.param(postData);
		}, postCfg = {
			transformRequest : transFn
		};
	    return $http.post('/GitMining/users/sort',postData,postCfg);
    }
	
     return list;
   
} ]);