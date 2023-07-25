const CACHE_NAME = "my-pwa-cache-v1"; // Ubah versi cache saat ada perubahan
const urlsToCache = ["/", "/index.html", "/styles.css", "/app.js", "/image.jpg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(
        urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response || response.status !== 200 || response.type !== "basic") {
                return null;
              }

              const contentLength = response.headers.get("content-length");
              if (contentLength && parseInt(contentLength, 10) > maximumFileSizeToCacheInBytes) {
                return null;
              }

              cache.put(url, response.clone()); // Menyimpan respons di cache
              return url;
            })
            .catch(() => {
              return null;
            });
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Menghapus cache lama saat aktivasi
          }
        })
      );
    })
  );
});

// Menggunakan strategi cache-first untuk permintaan sumber daya
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
