'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "48f16c03b9cb0103f5490caab72e0861",
"assets/AssetManifest.bin.json": "fa19798cd6fb34c4f699b6e9464ccdb1",
"assets/AssetManifest.json": "658415a714f886613aeff5c32f11f377",
"assets/assets/fonts/LufgaBold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/assets/fonts/LufgaRegular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/assets/images/institution/college.png": "9dd4f85ee40da9cdd74a231f8ccba17f",
"assets/assets/images/institution/school.png": "a40f6ae73b1816d0c00cdb1969a46bd0",
"assets/assets/images/institution/university.png": "e2a3765c74d88654f098a244f4fb79ee",
"assets/assets/images/mishad.png": "f4b7963d99d017ac77a52d9758406b48",
"assets/assets/images/mishad.svg": "bb58e70150814c164320c2ba586aae31",
"assets/assets/images/person.png": "35d69a796513dc9e9a622fa2bb7e94aa",
"assets/assets/images/pic.jpg": "a07eacd48f791839aaf75c9a84b5bccc",
"assets/assets/images/pr1.png": "a8b3e3b9944a08bae3fd01519297aa8e",
"assets/assets/images/pr2.png": "3eb40309ccabc8f532120dbcbe05ce9b",
"assets/assets/images/pr3.png": "a8b3e3b9944a08bae3fd01519297aa8e",
"assets/assets/images/vectors/bd.png": "b05eb5f2c3ceb42d11e84e73fda6c62c",
"assets/assets/images/vectors/bg1.svg": "d5fc8e16135966e56daa1a558e356484",
"assets/assets/images/vectors/d3.svg": "3e98f1e749a665c3a8f65a9d5ca7e132",
"assets/assets/images/vectors/experience_divider.svg": "489bf9c47619519bb8ad805b59591c6a",
"assets/assets/images/vectors/glass_frame.svg": "93728b9be8b0941dceb582185bf197a7",
"assets/assets/images/vectors/head.png": "451062fd145d5d31aa2e97592eabf9eb",
"assets/assets/images/vectors/language_logo.png": "78b36e5d41a4a8dd40ac09dbdf7c814f",
"assets/assets/images/vectors/mb.png": "5990b479449185569570749b17297b8e",
"assets/assets/images/vectors/ml.png": "f9430fa8def6f1871c8580d3f9071ce8",
"assets/assets/images/vectors/service_bg.png": "c67189003a8230f140c2db8e7bcf3ffc",
"assets/assets/images/vectors/star.svg": "697d33f28ef978cee09b30b04e1aaafa",
"assets/assets/images/vectors/v1.svg": "12290627a564c99f1a7b34cffe80aca8",
"assets/assets/images/vectors/v2.svg": "ea7b72e75ab71c58174a3ca1d18a6b0b",
"assets/assets/images/vectors/v3.svg": "a580b2beadd9e6a52cab3ad3b8505e48",
"assets/FontManifest.json": "875d33d799ca10e31998a98a6bd4ab6e",
"assets/fonts/MaterialIcons-Regular.otf": "324d439290a23ef702c2d08256f2428b",
"assets/NOTICES": "8778f38d231397ec908a406d072b46e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6f707a2628055cfc7645061dd38a2232",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ffa0cf078e9ed54d7b7d13b32540b551",
"/": "ffa0cf078e9ed54d7b7d13b32540b551",
"main.dart.js": "73747bfd68d44a08304c8ad3f517550f",
"manifest.json": "a832efb0eb44bb66e9e3b4c9f3479dd5",
"version.json": "7977e3da2ccbc15a159c44cef793dcc8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
