(function() { // closure app.services 
	/*
	 * Angular Services - AppService
	 * 
	 * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
	 * @author: Scott Henshaw
	 * 
	 */

	angular.module( 'app.services' )
		.config( function( $httpProvider ) {
            /*
             * Could be done globally for the AppController
             * Angular transmits data as application/json, 
             * 
             * PHP expects commands and params in the form x-ww-form-urlencoded 
             * i.e. "?p1=v1&p2=v2" etc.
             * 
             * so we have to change the header to tepp the server how to interpret the 
             * incoming data.
             * 
             */
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';            
        })
		.service( 'LoginService', function( $http, $httpParamSerializerJQLike ) {
    	
            /** @memberOf LogonService.private */
            var local = {                             
                state:    0,  // should really be some enum                                
                listData: []
            };
            
            var self = this;
            self.username = "";
            self.id = "";
            
    	    self.init = function( theUser ) {
    	        //------------------------------------------------------------
    	    	// Save the game for use in the update long poll loop.
    	        //
    	    	if (theUser != undefined) {
    	    	    
    	    	    this.demo.user = theUser;
    	    	}
    	    }
            
            self.authenticate = function( user ) {
                // Make AJAX $http.post call to server with appId
                // if local.id is not set, get it from server.
                var params = $httpParamSerializerJQLike( user )
                $http.post( 'server/login/', params )
                    .then( function( obj ) {
                        //  callback via a promise object chained to the post 
                        var response = obj.data;
                        local.id = response.id; 
                        
                        
                    });                 
            };
            
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
    	    local.handleSuccessfulUpdate = function( obj ) {
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
    	        var response = obj.data;
    	        
    	        if (response.errCode < 0) // negative is bad, don't trust the 
    	            return
    	    		
    	    	// Do something with the data...
    			console.log( "Response success: Data-> " + result.data );
    	    }
    	        	    
            /** @memberOf Service.private */
    	    local.handleError = function( errorData ) {
    	        //------------------------------------------------------------      
    	    	// parse the error data and update whatever scope variables I need to trigger 
    	    	// an error popup
    	    	
    	    	console.log( "Response Error: " + errorData );
    	    }
        
        });  
})();
