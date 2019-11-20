/**
 * @copyright: (C)2016-2019 Kibble Online Inc., in cooperation with Vancouver Film School
 *
 * derived from code by @author: Jeremy Likness in his article
 * 'Implement a Progressive Web App (PWA) in your Static Website" Jul 15, 2019
 * https://dev.to/jeremylikness/implement-a-progressive-web-app-pwa-in-your-static-website-h44
 *
 */
'use strict';

const TITLE = 'HTML5 App';

const loader = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js', { scope: './' })
            .then( () => {
                console.info(`${TITLE} Service Worker Registered`);
            },
            err => console.error(`${TITLE} App Service Worker registration failed: `, err));

        navigator.serviceWorker.ready
            .then( () => {
                console.info(`${TITLE} Service Worker Ready`);
            });
    }
}

export default loader();

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