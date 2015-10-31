(function() {
	/**
	 * @name VFS Angular Controllers
	 * 
	 * @copyright (C) 2014-2015 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
	 * @author Scott Henshaw
	 * 
	 */
	angular.module( 'app.controllers' )	    
		.controller( 'LoginController', function( $scope, $http, $httpParamSerializerJQLike, LogonService ) {
				    
		    // local member variables              
            var local = {
            };
    	    
            // Public $scope variables that templates have access to.
    		var self = this;
    		
    		self.master =  {};
    		self.userData = {
		        name: "",
		        id: ""
    		};   
    		self.status = "off";
            
    		
    	    self.update = function( user ) {
    	    	
    	    	self.master = angular.copy( user );
    	    };
    	    
    	    
    	    self.authenticate = function( user ) {
    	        
    	        LogonService.authenticate( user )
    	            .then( function( data ) {
    	                self.userData.name = LogonService.username;
    	                self.userData.id = LogonService.id;
    	                self.status = "on";
    	        });
    	    };
    	    
    	    self.reset = function() {
    	    	
    	    	self.master = {};
    	    };
    	    
    	});
	
})();


    