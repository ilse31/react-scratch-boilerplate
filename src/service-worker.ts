const CACHE_NAME = "my-pwa-cache";
const urlsToCache = ["/", "/index.html"];
const maximumFileSizeToCacheInBytes = 5 * 1024 * 1024; // Ubah ukuran sesuai kebutuhan Anda (contoh: 5MB)

self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(
        urlsToCache.filter((url) => {
          return fetch(url)
            .then((response) => {
              if (
                !response ||
                response.status !== 200 ||
                response.type !== "basic"
              ) {
                return false;
              }

              const contentLength = response.headers.get("content-length");
              if (
                contentLength &&
                parseInt(contentLength, 10) > maximumFileSizeToCacheInBytes
              ) {
                return false;
              }

              return true;
            })
            .catch(() => {
              return false;
            });
        })
      );
    })
  );
});
