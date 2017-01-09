/**
 * App Singleton MAIN 
 * 
 * @copyright: (C) 2016 Kibble Games Inc in cooperation with Vancouver Film School. All Rights Reserved. 
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 * @version: 2.1.0 ES6 Compatible
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
'use strict';

const SIXTY_FPS = 1000 / 60;

var appInstance = null;
class App {

    // constructor for new App's, note use of initializer in constructor parameters
	constructor( opt1 = null ) {	    
	    /*
	     * Save our private stuff in a WeakMap. This collects all the 
	     * private data we don't want others to see into an object, then 
	     * only using the "this" object can we access the private data.
	     * 
	     * It makes closures and their cryptic syntax a thing of the past.
	     * 
	     */
	    if (appInstance != null)
	        return appInstance;
	    
	    appInstance = this;
	    
	    this.__private__ = new WeakMap();
	    let privateProperties = {
	        
            done:     false,
            counter:  0,
            interval: null
	    };
	    this.__private__.set( this, privateProperties );	
    	/*
    	 * Finally, save the private properties in the map.  Note that while other objects
    	 * and inspectors may "see" our private data, other code has no way 
    	 * to retrieve or access it without the correct "this" object.
    	 */ 
        
        // Define the Event handlers for the app
	    document.querySelector('#stop-button')
	        .addEventListener('click', ( event ) => {

                // Note use of the "fat arrow" function, preserving the "this" reference
                let m = this.__private__.get( this ); 
                
                m.counter = 0;
                
            	// stop the main event loop if applicable
            	window.clearInterval( m.interval );
            });
        
        return appInstance
	}	

    /*
     *  Sample getter, can be used like a property  so m_.propertyName
     *  Now this is public so its possible others can use this to get to 
     *  our private data; however it enhances readability over embedding the 
     *  guts of the getter in every method.
     *    
     */
    get _m() { return this.__private__.get( this ); }
	
	
    mUpdateData() {
        // Update the app/simulation model
        // is the app finished running?
        let m = this.__private__.get( this );
        m.done = true;
    }

    
    mRefreshView() {
        // Refresh the view - canvas and dom elements       
        let m = this.__private__.get( this );
        
        m.counter++;
        if (m.counter > 1000)
            m.counter = 0;
        
        // Use backtick quotes to get template literals to work
        document.querySelector('#results-area').innerHTML = `Counting ${m.counter}`;
    }
    

    run() {
        // Run the app
        let m = this.__private__.get( this );
        
		m.interval = window.setInterval( () => {
			
			this.mUpdateData();			
			this.mRefreshView();	
			
		}, SIXTY_FPS );
	}    	

    	
}
    
// ===================================================================
// MAIN
document.addEventListener('DOMContentLoaded', ( event ) => {

    let app = new App();
    app.run();

});
