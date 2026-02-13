self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Example: Basic fetch handling (cache-first strategy for static assets)
self.addEventListener('fetch', (event) => {
  // Implement caching strategy here if needed
  // For now, it will just pass through requests
});
