(function() {
	/**
	 * @name VFS Angular Controllers
	 * 
	 * @copyright (C) 2014-2015 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
	 * @author Scott Henshaw
	 * 
	 */
	angular.module( 'app.controllers' )
		.controller( 'LoginController', function( $scope ) {
		
    	    var local = {
                // local member variables    	        
                id: null
    	    };
    	    
    		var self = this;
    		
    		self.master =  {};
    		self.info = {
            };
            
    	    self.update = function( user ) {
    	    	
    	    	self.master = angular.copy( user );
    	    };
    	    
    	    self.post = function( user ) {
    	    	// Make AJAX $http.post call to server with appId
    	        // if local.id is not set, get it from server.
    	    	var appId = local.id;
    	    };
    	    
    	    self.reset = function() {
    	    	
    	    	self.master = {};
    	    };
    	    
    	});
	
})();


    