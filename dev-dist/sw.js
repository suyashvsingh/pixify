if (!self.define) {
  let e,
    t = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    t[i] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = t), document.head.appendChild(e);
        } else (e = i), importScripts(i), t();
      }).then(() => {
        let e = t[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[s]) return;
    let o = {};
    const c = (e) => i(e, s),
      l = { module: { uri: s }, exports: o, require: c };
    t[s] = Promise.all(n.map((e) => l[e] || c(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-c1760cce"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "registerSW.js", revision: "45c386425cfd92fb1bfeb9cd473a7d0d" },
        { revision: null, url: "index.html" },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"), {
        denylist: [/^\/manifest.webmanifest$/],
      })
    );
});
