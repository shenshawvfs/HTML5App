/**
 * Angular Main Module
 * 
 * @copyright: (C) 2014-2015 Kibble Games Inc in cooperation with Vancouver Film School.  
 * All Rights Reserved.
 * @author: Scott Henshaw
 * 
 */


// Module definitions
// Declaring multiple 'containers' for various app components allows
// us to have a much larger app without the complexity.
// These statements create empty - no dependency namespaces within the
// angular system.
angular.module('app.controllers',[]);
angular.module('app.directives',[]);
angular.module('app.services', []);


// This is a special case closure below. Its to be used ONLY if 
// another templating system is in place. Typically that would be
// a server side templating system like Django or Jinga
(function() {
    /*
     * Override the Angular interpolation directive
     * 
     * [[ Angular brackets for angular
     * {{ curly brackets for Django
     * 
     * override {{ $scope.value }} operator with [[ $scope.value ]]
     * because we know this angular app is served from AppEngine with Django and
     * we know Django uses the {{ templateVariable }} notation to do server side 
     * templating
     *  
     */
	/*
	angular	.module('app')
		.config( config, function config( $interpolateProvider ) {
	    
	    $interpolateProvider.startSymbol( '[[' );
        $interpolateProvider.endSymbol( ']]' );	
	}
	*/
})();



// Declare the app itself and all the dependencies it relies on
// This can later be used to add routing or other service providers.
// Angular constructs to add modular functionality to an APP
var app = angular.module( 'app', [  
     //'ngRoute',    
     'app.services',     // This is a module that we depend on.
     'app.directives',   // This is a module that we depend on.
     'app.controllers'   // This is a module that we depend on.
]);
