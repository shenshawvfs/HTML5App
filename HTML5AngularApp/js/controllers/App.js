(function () { // closure app.controllers 
	'use_strict';
    /*
     * Risk Angular App Controller
     * 
     * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
     * @author: Scott Henshaw
     * 
     */
	angular
		.module('app.controllers')
		.controller( 'AppViewController', AppViewController );


	function AppViewController( $scope, $interval ) {		
		
		var self = this; 
		
	    self.info = {
	    	title: "App Title",
	    	author: "PGWM Students",
	    	id: ""
	    }
	    
	    // manage the mapping of the other game elements to the game screen
	    self.screen = {
	    	current: "partials/intro.html"
	    }
	    
	    self.timer = new Timer();
	    

	    function Timer() {
	        
	        /** @memberOf Timer.private */    	
	    	var local = {
    	        loop: null
	    	};
	    
	    	var self = this;
	    	
	    	self.wait = {
	    		start: new Date(),
	    		lable: "Waiting",
	    		time:  "00:00:000",
	    	};	    	
	    
	    	self.start = function() {
	    	    
	    		// if the loop is not null then its already been started.
	    		if (lcoal.loop != null)
	    			return;
	    			
	    	    local.loop = $interval( self.run, 1000/60 );
	    	}
	    	
	    	
	    	self.stop = function() {
		
	    		// Stop the timer, and nullify the loop so we cna re-start.
	    		$interval.cancel( local.loop );
	    		local.loop = null;
	    		local.setWaitLable();  		
	    	}

	    	
	    	self.run = function() {
	     		
	        	// ticks = 60 / sec so
	        	var now = new Date();
	        	var deltaTime = now - api.waitStart;
	        	
	        	var deltaMin = Math.floor( deltaTime / 60000 );
	        	var deltaSec = Math.floor( (deltaTime - (deltaMin * 60000)) / 1000 );
	        	var deltaMs = Math.floor( deltaTime - (deltaMin * 60000) - (deltaSec * 1000) );
	    
	        	self.wait.time = deltaMin.toString() + ":" + deltaSec.toString() + ":" + deltaMs.toString();
	    	}
		
	    	/** @memberOf Timer.private */
	    	local.setWaitLable = function() {
	    	    
	    	    self.wait.label = "Waited"; 
	    	}
	    		    
    	}		
		
	}
	
})(); 
