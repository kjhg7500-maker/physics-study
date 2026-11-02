// 크롬이 '앱 설치'를 보여 주려면 서비스 워커가 있어야 해서 둔 최소한의 파일.
// 아무것도 저장하지 않고 요청을 그대로 넘긴다 (앱 내용은 항상 최신).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
