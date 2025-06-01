// service-worker.js

const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/Project/index.html", // Main page
  "/Project/script.js", // Main JavaScript
  "/Project/solar-system.css", // Stylesheet
  "/Project/style.css", // Additional styles
  "/Project/app.png", // App icon
  "/Project/offline.html", // Offline fallback page (optional)
];

// Install event: caching resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          urlsToCache.map((url) =>
            fetch(url).then((response) => {
              if (!response.ok) {
                throw new Error(
                  `Request for ${url} failed with status ${response.status}`
                );
              }
              return cache.put(url, response);
            })
          )
        );
      })
      .catch((error) => console.log("Caching failed during install:", error))
  );
});

// Fetch event: serving cached resources if available, otherwise falling back to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached resource if available, otherwise fetch from network
      return (
        response ||
        fetch(event.request).catch(() => {
          console.warn("Fetch failed; returning offline page if available.");
          // Return the offline fallback page if the request is for an HTML page
          if (event.request.mode === "navigate") {
            return caches.match("/Project/offline.html");
          }
        })
      );
    })
  );
});

// Activate event: cleanup old caches if any
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
