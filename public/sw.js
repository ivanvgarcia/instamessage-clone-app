self.addEventListener('install', function(event) {
  console.log('Service worker is installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Service worker is activated', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('Fetching', event);
  event.respondWith(fetch(event.request));
});
