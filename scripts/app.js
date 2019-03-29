/**
 * @copyright: (C)2016-2019 Kibble Online Inc., in cooperation with Vancouver Film School
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com}
 */
'use strict';

const SIXTY_FPS = 1000 / 60;

export class App {

    // constructor for new App's, note use of initializer in constructor parameters
	constructor( opt1 = null ) {	    
	    /*
	     * use of this. reference in the constructor tells us the attributes
	     * defined are public.  All class members are.
	     * 
	     * convention says if we prefix the name with an underscore, other devs
	     * will understand that we mean this to be private data.
	     * 
	     */
	    this.__private__ = {	        
            done:     false,
            counter:  0,
            interval: null
	    };
	    	    
	    /*
	     * Delete this variable, its just here to show a variable scoped
	     * to the function level (constructor in this case).  Its available for use 
	     * in the event handler below 
	     */ 
        var deleteMe = true;	    
	    
        /*
        *  Define the Event handlers for the app
        */
       //a start button to run the app
       document.querySelector('#start-button')            
            .addEventListener('click', event => {
                this.run();
            }
        );

	    document.querySelector('#stop-button')            
	        .addEventListener('click', event => {
	            // Note use of the "fat arrow" function, preserving the "this" reference
	            
	            // variable scoped to the block, not visible outside the {} its defined within
	            // OK this is not very useful, lets clean up...
                let my = this.__private__; 
                
                my.counter = 0;
                
            	// stop the main event loop if applicable
            	window.clearInterval( my.interval );
        });
	}	
	
    /*
     *  Sample getter, can be used like a property  so my.propertyName
     *  
     *  Now this is public so its possible others can use this to get to 
     *  our private data; however it enhances readability over embedding the 
     *  guts of the getter in every method.
     *  
     *  and
     *  
     *  we can pseudo hide private data if we want.
     *    
     */
    get done() { return this.__private__.done; }	
    set done( value ) { this.__private__.done = value; }	
	
    update() {
        // Update the app/model/simulation here
        this.done = true;
    }
    
    render() {
        // Refresh the view - canvas and dom elements, etc from here.             
        let my = this.__private__;

        my.counter++;
        if (my.counter > 1000)
            my.counter = 0;
        
        // Use backtick quotes to get template literals to work
        document.querySelector('#results-area').innerHTML = `Counting ${my.counter}`;
    }
    
    run() {
        // Entry point, create a nw app, then tell it to run itself
		let my = this.__private__;
        my.interval = window.setInterval( () => {
			
			this.update();			
			this.render();	
			
		}, SIXTY_FPS );
	}    	
}

/**
 * @license:
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
