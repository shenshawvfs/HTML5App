/**
 * @copyright: (C)2016-2019 Kibble Online Inc in cooperation with Vancouver Film School.
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com}
 */
'use strict';

import Loader from './scripts/serviceWorkerLoader.js';
import App from './scripts/app.js';

// MAIN
document.addEventListener('DOMContentLoaded', event => {

    // Don't instatiate the script
    const app = new App();
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