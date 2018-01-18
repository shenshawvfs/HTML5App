/**
 * App Singleton MAIN 
 * 
 * @copyright: (C) 2016-2018 Kibble Games Inc in cooperation with Vancouver Film School. All Rights Reserved. 
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 * @version: 2.1.0 ES6 Compatible
 * 
 * @summary: Framework Singleton Class to contain a web app
 *
 */

'use strict';

// ===================================================================
// MAIN
document.addEventListener('DOMContentLoaded', ( event ) => {

    let app = new App();
    app.run();

});


/** @licence:
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
