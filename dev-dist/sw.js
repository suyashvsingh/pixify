if (!self.define) {
    let e,
        t = {}
    const i = (i, n) => (
        (i = new URL(i + '.js', n).href),
        t[i] ||
            new Promise((t) => {
                if ('document' in self) {
                    const e = document.createElement('script')
                    ;(e.src = i), (e.onload = t), document.head.appendChild(e)
                } else (e = i), importScripts(i), t()
            }).then(() => {
                let e = t[i]
                if (!e)
                    throw new Error(`Module ${i} didn’t register its module`)
                return e
            })
    )
    self.define = (n, r) => {
        const o =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href
        if (t[o]) return
        let s = {}
        const l = (e) => i(e, o),
            u = { module: { uri: o }, exports: s, require: l }
        t[o] = Promise.all(n.map((e) => u[e] || l(e))).then((e) => (r(...e), s))
    }
}
define(['./workbox-87098c68'], function (e) {
    'use strict'
    self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: 'registerSW.js',
                    revision: '509fae7a3bf3cae5094689d7ddf57be1',
                },
                { revision: null, url: 'index.html' },
            ],
            {}
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            new e.NavigationRoute(e.createHandlerBoundToURL('index.html'), {
                allowlist: [/^\/$/],
            })
        )
})
