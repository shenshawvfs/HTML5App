/**
 * @copyright: (C)2016-2022 Kibble Online Inc., in cooperation with Vancouver Film School
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com}
 */
'use strict';

export default class App {

    // THE ES2022 method to say "hey this is private, hands off"
    // prefix with #

	constructor( opt1 = {} ) {
        // constructor for new App's, note use of initializer in constructor parameters

        // using an internal init methods makes it easier to re-start the app
        this.#init();
	}

    // Static preperties of the class
    // Usage:   const fps = App.CONST.FPS;
    //
    static get CONST() {
        // Cute trick to tie constants to the class, access App.CONST.FPS
        return {
            FPS: 1000 / 60,
        }
    }

    // Add your methods here
    run() {
	}

    // Typically wwe add private methods at the bottom
    #init() {
        // Define the Event handlers for the app
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
