/**
 * App Singleton MAIN 
 * 
 * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School. All Rights Reserved. 
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 * @version: 1.1.0 
 * 
 * @summary: Framework Singleton Class to contain a web app
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *   
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */
var App = (function() {

	function AppSingleton( opt1 ) {
	    
	    var local = {
	        // the local object contains all the private members used in this class	            
            done:     false,
            interval: null
	    };
	    
        // this aka self contains all the public members and methods we wish to expose
	    var self = this;
	    
	    
        self.init = function( option ) {       	
        	// Do some initialization of the member variables for the app
            
        	// cleanest use of conditionals on optional params.
        	var opt = (option == undefined ? null : option);
        
            // Use it.
            
        	// Create controllers to manage model objects and link them to DOM
            // view elements
            
            // Define the Event handlers for the app
            $('#stop-button').on('click', function( event ) {
            	
            	// stop the main event loop if applicable
            	window.clearInterval( local.interval );
            	
            });
    	}	
        
    	self.run = function() {
            // Run the app
    		local.interval = window.setInterval( function() {
    			
				local.updateData();			
				local.refreshView();	
				
    		}, 1000/60 );
    	};    	

    	
    	/** @memberOf AppSingleton.private */
        local.updateData = function() {
            // Update the app/simulation model
        	// is the app finished running?
        	done = true;
        };
    
        
        /** @memberOf AppSingleton.private */
        local.refreshView = function() {
            // Refresh the view - canvas and dom elements
        	
        };
        
        //  Finally, call the constructor to initialize this object instance.
        self.init( "hello" );        
    };
    
	/*
	 * Note we create an object to pass back, a singleton. 
	 * To use this pattern to create a typical object that you create multiple
	 * instances of all we need to change is:
	 * 
	 *    AppSingleton -->  AppClass
	 *    
	 *    return new AppSingleton(); --> return AppClass;
	 *    
	 */ 
	return new AppSingleton(); 
	
})();  // Run the unnamed function and assign the results to app for use.


// ===================================================================
// MAIN
$(document).ready( function() {

    App.init();
    App.run();

});
