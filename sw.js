const CACHE_NAME = 'seiko-v15b';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './marubatsu_data.js',
  './question_bank.js',
  './glossary_preset.js',
  './R5_1.jpg',
  './R5_3.jpg',
  './R5_5.jpg',
  './R5_10.jpg',
  './R5_56.jpg',
  './R5_60.jpg',
  './R5_61.jpg',
  './R6_3.jpg',
  './R6_4.jpg',
  './R6_7.jpg',
  './R6_28.jpg',
  './R6_30.jpg',
  './R6_31.jpg',
  './R6_39.jpg',
  './R6_57.jpg',
  './R6_58.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
