// Service Worker mínimo — necesario para que Chrome permita instalar el sitio
// como app de verdad (con su propio ícono) en vez de un acceso directo genérico.
// No cachea nada de forma agresiva: solo deja pasar las peticiones normales,
// así que la app sigue funcionando exactamente igual que antes (con internet).

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // Simplemente deja pasar la petición tal cual, sin cachear.
  event.respondWith(fetch(event.request));
});
