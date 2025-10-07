self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "icon-192.png",
            "icon-512.png",
            "icManha.png",
            "icNoite.png",
            "icTarde.png",
            "imgManha.jpg",
            "imgTarde.jpg",
            "imgNoite.jpg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
