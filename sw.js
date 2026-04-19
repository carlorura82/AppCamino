self.addEventListener('install', (e) => {
  console.log('Service Worker Installato');
});

self.addEventListener('fetch', (e) => {
  // Lascia passare le richieste normalmente
  e.respondWith(fetch(e.request));
});
