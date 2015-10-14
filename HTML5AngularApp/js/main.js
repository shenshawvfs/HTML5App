/**
 * Angular Main Module
 * 
 * @copyright: (C) 2014-2015 Kibble Games Inc in cooperation with Vancouver Film School.  
 * All Rights Reserved.
 * @author: Scott Henshaw
 * 
 */

// use this to define the Angular module containing the app
var app = angular.module( 'app', [  
    //'ngRoute',    
    'app.services',     // This is a module that we depend on.
    'app.directives',   // This is a module that we depend on.
    'app.controllers'   // This is a module that we depend on.
]);


// Module definitions
app.controllers = angular.module('app.controllers',[]);
app.directives = angular.module('app.directives',[]);
app.services = angular.module( 'app.services', []);



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
	angular
		.module( 'app' )
		.config( config );
	
	function config( $interpolateProvider ) {
	    
	    $interpolateProvider.startSymbol( '[[' );
        $interpolateProvider.endSymbol( ']]' );
	
	}
	*/
})();


