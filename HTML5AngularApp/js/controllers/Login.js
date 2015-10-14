(function() {
	/*
	 * Risk Angular Controllers
	 * 
	 * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
	 * @author: Scott Henshaw
	 * 
	 */

	angular
		.module( 'app.controllers' )
		.controller( 'LoginController', LoginController );
	
	function LoginController( $scope ) {
		
	    var local = {
            // local member variables
	        
	    };
	    
		var self = this;
		
		self.master =  {};
		self.app = {
            id: null
        };
        
	    self.update = function( user ) {
	    	
	    	api.master = angular.copy( user );
	    }
	    
	    self.post = function( user ) {
	    	
	    	var appId = self.app.id;
	    	
	    	//var theUser = new User( user.name, user.email );
	    	//LobbyService.addUser( appId, user.name, user.email );
	    }
	    
	    self.reset = function() {
	    	
	    	self.master = {};
	    }
	    
	}
	
})();


    