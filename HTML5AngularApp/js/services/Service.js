(function() { // closure app.services 
	/*
	 * Angular Services - AppService
	 * 
	 * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
	 * @author: Scott Henshaw
	 * 
	 */

	angular
		.module( 'app.services' )
		.service( 'Service', Service );
	
		
    function Service( $http ) {
    	
        /** @memberOf Service.private */
        var local = {                
            id:       -1,
            state:    0,  // should really be some enum                
            user:     null,
            listData: []
        };
        
        var self = this;
        
	    self.init = function( theUser ) {
	        //------------------------------------------------------------
	    	// Save the game for use in the update long poll loop.
	        //
	    	if (theUser != undefined) {
	    	    
	    	    this.demo.user = theUser;
	    	}
	    }
	
	    
	    self.addUser = function( appId, name, email ) { 
	        //------------------------------------------------------------
	        // Called from form with ng-model collecting data that is passed as aUser
	        //
	    	var ajaxCommand = {
            	params: { 
            		'cmd': "createUser",
                    'appId': appId,
            		'email': email,
            		'name': name
        		},
            	response: "json"
            };

	    	//$http.post( "//vfs-risk-server.appspot.com/", JSON.stringify( aPlayer), ajaxCommand );        
	        $http.post( "server/", JSON.stringify( ajaxCommand.params ), ajaxCommand )       
	        	.then( local.handleSuccessfulUpdate, local.handleError );
	    }
	    
	    
        /** @memberOf Service.private */
	    local.handleSuccessfulUpdate = function( result ) {
	        //------------------------------------------------------------
	    	// Handle the successful result of an AJAX request
	        //
	       
	        /*
	        * @param result: a generic object angular constructs to contain 
	        * your data. Its already been decoded from JSON into an object
	        * 
	        * @param result.data: the part of the generic angular response that
	        * is the actual data from your server...
	        *  
	        */
	        var response = result.data;
	        
	        if (response.errCode < 0) // negative is bad, don't trust the 
	            return
	    		
	    	// so something with the data, line update the lobby and game data.
			console.log( "Response success: Data-> " + result.data );
	    }
	    
	    
        /** @memberOf Service.private */
	    local.handleError = function( errorData ) {
	        //------------------------------------------------------------      
	    	// parse the error data and update whatever scope variables I need to trigger 
	    	// an error popup
	    	
	    	console.log( "Response Error: " + errorData );
	    }
    
    }    
})();
