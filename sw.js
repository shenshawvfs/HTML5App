/**
 * @copyright: (C)2016-2019 Kibble Online Inc., in cooperation with Vancouver Film School
 *
 * derived from code by @author: Jeremy Likness in his article
 * 'Implement a Progressive Web App (PWA) in your Static Website" Jul 15, 2019
 * https://dev.to/jeremylikness/implement-a-progressive-web-app-pwa-in-your-static-website-h44
 *
 */
'use strict';

const CACHE_VERSION = 2.3;

const BASE_CACHE_FILES = [
    '/',
    '/404.html',
    '/offline',
    '/css/style_base.css',
    '/css/style.css',
    '/css/media.css',
    '/manifest.json',
    '/images/vfs_logo.png',
    '/index.js'
];
const OFFLINE_CACHE_FILES = [
    '/offline/'
];
const NOT_FOUND_CACHE_FILES = [
    '/404.html'
];
const OFFLINE_PAGE = '/offline/';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};
// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 43200,
    json: 43200,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [ str => !str.startsWith('https://localhost')];

function installServiceWorker() {

    return Promise.all([
            caches.open( CACHE_VERSIONS.assets )
                .then( cache => { return cache.addAll( BASE_CACHE_FILES )})
                .catch( err => console.error(`Error with ${CACHE_VERSIONS.assets}`, err)),

            caches.open(CACHE_VERSIONS.offline)
                .then( cache => { return cache.addAll( OFFLINE_CACHE_FILES )})
                .catch( err =>   console.error(`Error with ${CACHE_VERSIONS.offline}`, err)),

            caches.open(CACHE_VERSIONS.notFound)
                .then(  cache => { return cache.addAll( NOT_FOUND_CACHE_FILES )})
                .catch( err =>   console.error(`Error with ${CACHE_VERSIONS.notFound}`, err))
        ])
        .then( () => { return self.skipWaiting() })
        .catch( err => console.error("Error with installation: ", err));
}

function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS).map( key => { return CACHE_VERSIONS[key]});

    return new Promise(( resolve, reject ) => {
            caches.keys()
                .then( keys => {

                    return legacyKeys = keys.filter( key => { return !~currentCaches.indexOf( key )});
                })
                .then( legacy => {

                    if (legacy.length) {
                        Promise.all( legacy.map( legacyKey => { return caches.delete( legacyKey ) }))
                            .then( () => { resolve() })
                            .catch( err => {
                                console.error("Error in legacy cleanup: ", err);
                                reject( err )
                            })
                    }
                    else { resolve() }
                })
                .catch( err => {

                    console.error("Error in legacy cleanup: ", err);
                    reject(err)
                })
        });
}