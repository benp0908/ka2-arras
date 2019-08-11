//
~ function() {
    'use strict';
    var I = I || {};
    I.scope = {};
    I.checkStringArgs = function(r, l, v) {
        if (null == r) throw new TypeError("The 'this' value for String.prototype." + v + " must not be null or undefined");
        if (l instanceof RegExp) throw new TypeError("First argument to String.prototype." + v + " must not be a regular expression");
        return r + ""
    };
    I.ASSUME_ES5 = !1;
    I.ASSUME_NO_NATIVE_MAP = !1;
    I.ASSUME_NO_NATIVE_SET = !1;
    I.SIMPLE_FROUND_POLYFILL = !1;
    I.defineProperty = I.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(r, l, v) {
        r != Array.prototype && r != Object.prototype && (r[l] = v.value)
    };
    I.getGlobal = function(r) {
        return "undefined" != typeof window && window === r ? r : "undefined" != typeof global && null != global ? global : r
    };
    I.global = I.getGlobal(this);
    I.polyfill = function(r, l) {
        if (l) {
            var v = I.global;
            r = r.split(".");
            for (var a = 0; a < r.length - 1; a++) {
                var e = r[a];
                e in v || (v[e] = {});
                v = v[e]
            }
            r = r[r.length - 1];
            a = v[r];
            l = l(a);
            l != a && null != l && I.defineProperty(v, r, {
                configurable: !0,
                writable: !0,
                value: l
            })
        }
    };
    I.stringPadding = function(r, l) {
        r = void 0 !== r ? String(r) : " ";
        return 0 < l && r ? r.repeat(Math.ceil(l / r.length)).substring(0, l) : ""
    };
    I.polyfill("String.prototype.padStart", function(r) {
        return r ? r : function(l, v) {
            var a = I.checkStringArgs(this, null, "padStart");
            return I.stringPadding(v, l - a.length) + a
        }
    }, "es8", "es3");
    I.owns = function(r, l) {
        return Object.prototype.hasOwnProperty.call(r, l)
    };
    I.polyfill("Object.entries", function(r) {
        return r ? r : function(l) {
            var v = [],
                a;
            for (a in l) I.owns(l, a) && v.push([a, l[a]]);
            return v
        }
    }, "es8", "es3");
    I.polyfill("Object.values", function(r) {
        return r ? r : function(l) {
            var v = [],
                a;
            for (a in l) I.owns(l, a) && v.push(l[a]);
            return v
        }
    }, "es8", "es3");
    I.polyfill("Array.prototype.includes", function(r) {
        return r ? r : function(l, v) {
            var a = this;
            a instanceof String && (a = String(a));
            var e = a.length;
            v = v || 0;
            for (0 > v && (v = Math.max(v + e, 0)); v < e; v++) {
                var E = a[v];
                if (E === l || Object.is(E, l)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    (function(r) {
        function l(a) {
            if (v[a]) return v[a].exports;
            var e = v[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            r[a].call(e.exports, e, e.exports, l);
            e.l = !0;
            return e.exports
        }
        var v = {};
        l.m = r;
        l.c = v;
        l.d = function(a, e, E) {
            l.o(a, e) || Object.defineProperty(a, e, {
                enumerable: !0,
                get: E
            })
        };
        l.r = function(a) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        };
        l.t = function(a, e) {
            e & 1 && (a = l(a));
            if (e & 8 || e & 4 && "object" === typeof a && a && a.__esModule) return a;
            var E = Object.create(null);
            l.r(E);
            Object.defineProperty(E, "default", {
                enumerable: !0,
                value: a
            });
            if (e & 2 && "string" != typeof a)
                for (var x in a) l.d(E, x, function(e) {
                    return a[e]
                }.bind(null, x));
            return E
        };
        l.n = function(a) {
            var e = a && a.__esModule ? function() {
                return a["default"]
            } : function() {
                return a
            };
            l.d(e, "a", e);
            return e
        };
        l.o = function(a, e) {
            return Object.prototype.hasOwnProperty.call(a, e)
        };
        l.p = "";
        return l(l.s = 0)
    })([function(r, l, v) {
        function a() {
            window.dataLayer.push(arguments)
        }

        function e(b) {
            switch (b) {
                case 0:
                    return m.teal;
                case 1:
                    return m.lgreen;
                case 2:
                    return m.orange;
                case 3:
                    return m.yellow;
                case 4:
                    return m.lavender;
                case 5:
                    return m.pink;
                case 6:
                    return m.vlgrey;
                case 7:
                    return m.lgrey;
                case 8:
                    return m.guiwhite;
                case 9:
                    return m.black;
                case 10:
                    return m.blue;
                case 11:
                    return m.green;
                case 12:
                    return m.red;
                case 13:
                    return m.gold;
                case 14:
                    return m.purple;
                case 15:
                    return m.magenta;
                case 16:
                    return m.grey;
                case 17:
                    return m.dgrey;
                case 18:
                    return m.white;
                case 19:
                    return m.guiblack;
                case 20:
                    return 150 > Date.now() % 300 ? m.blue : m.red;
                case 21:
                    return 150 >
                        Date.now() % 300 ? m.blue : m.grey;
                case 22:
                    return 150 > Date.now() % 300 ? m.grey : m.blue;
                case 23:
                    return 150 > Date.now() % 300 ? m.red : m.grey;
                case 24:
                    return 150 > Date.now() % 300 ? m.grey : m.red;
                case 30:
                    return "#d21fff";
                case 31:
                    return "#226ef6";
                case 32:
                    return "#ff1000";
                case 33:
                    return "#ff9000";
                case 34:
                    return "#00e00b";
                case 35:
                    return "#ffd300";
                default:
                    return "#ff0000"
            }
        }

        function E(b) {
            let d = B.graphical.neon ? m.white : m.black;
            return B.graphical.darkBorders ? d : T(b, d, m.border)
        }

        function x(b) {
            switch (b) {
                case "bas1":
                case "bap1":
                case "dom1":
                case "dbc1":
                case "mbc1":
                    return m.blue;
                case "bas2":
                case "bap2":
                case "dom2":
                case "dbc2":
                case "mbc2":
                    return m.green;
                case "bas3":
                case "bap3":
                case "dom3":
                case "dbc3":
                case "mbc3":
                    return m.red;
                case "bas4":
                case "bap4":
                case "dom4":
                case "dbc4":
                case "mbc4":
                    return m.pink;
                case "domx":
                case "dom0":
                case "dbc0":
                case "mbc0":
                    return m.yellow;
                case "port":
                    return g.globalAlpha = 1, m.black;
                case "edge":
                    return T(m.white, m.guiblack, 1 / 3);
                case "dor1":
                    return m.vlgrey;
                default:
                    return m.white
            }
        }

        function k(b, p) {
            B.graphical.neon ? (b.fillStyle = E(p), b.strokeStyle = p) : (b.fillStyle =
                p, b.strokeStyle = E(p))
        }

        function D(b, p = M[b].color) {
            let c = M[b];
            return {
                time: 0,
                index: b,
                x: c.x,
                y: c.y,
                vx: 0,
                vy: 0,
                size: c.size,
                realSize: c.realSize,
                color: p,
                render: {
                    status: {
                        getFade: () => 1,
                        getColor: () => "#FFFFFF",
                        getBlend: () => 0,
                        health: {
                            get: () => 1
                        },
                        shield: {
                            get: () => 1
                        }
                    }
                },
                facing: c.facing,
                shape: c.shape,
                name: c.name,
                score: 0,
                tiggle: 0,
                layer: c.layer,
                guns: {
                    length: c.guns.length,
                    getPositions: () => Array(c.guns.length).fill(0),
                    update: () => {}
                },
                turrets: c.turrets.map(b => {
                    let d = D(b.index);
                    d.realSize = d.realSize / d.size * c.size * b.sizeFactor;
                    d.size = c.size * b.sizeFactor;
                    d.angle = b.angle;
                    d.offset = b.offset;
                    d.direction = b.direction;
                    d.facing = b.direction + b.angle;
                    return d
                })
            }
        }

        function R(d, p, c, h = !1) {
            let a = ma();
            c += B.graphical.borderChunk;
            return h ? (a *= 2, d > -b.screenWidth / a - c && d < b.screenWidth / a + c && p > -b.screenHeight / a - c && p < b.screenHeight / a + c) : d > -c && d < b.screenWidth / a + c && p > -c && p < b.screenHeight / a + c
        }

        function q(b, p, c = 3) {
            let d = Date.now(),
                a = b,
                w = b;
            return {
                set: c => {
                    b !== c && (w = a, b = c, d = Date.now())
                },
                get: () => {
                    let h = (Date.now() - d) / 1E3;
                    return a = h < p ? w + (b - w) * Math.pow(h /
                        p, 1 / c) : b
                }
            }
        }

        function C(b) {
            try {
                var d = b.replace(/\s+/g, "");
                2 == d.length % 4 ? d += "==" : 3 == d.length % 4 && (d += "=");
                let h = atob(d);
                d = "Unknown Theme";
                let a = "";
                var c = h.indexOf("\x00");
                if (-1 === c) return null;
                d = h.slice(0, c) || d;
                h = h.slice(c + 1);
                c = h.indexOf("\x00");
                if (-1 === c) return null;
                a = h.slice(0, c) || a;
                h = h.slice(c + 1);
                let p = h.charCodeAt(0) / 255;
                h = h.slice(1);
                let f = Math.floor(h.length / 3);
                if (2 > f) return null;
                c = [];
                for (let b = 0; b < f; b++) {
                    let d = h.charCodeAt(3 * b),
                        f = h.charCodeAt(3 * b + 1),
                        a = h.charCodeAt(3 * b + 2);
                    c.push("#" + (d << 16 | f << 8 |
                        a).toString(16).padStart(6, 0))
                }
                return {
                    name: d,
                    author: a,
                    content: {
                        teal: c[0],
                        lgreen: c[1],
                        orange: c[2],
                        yellow: c[3],
                        lavender: c[4],
                        pink: c[5],
                        vlgrey: c[6],
                        lgrey: c[7],
                        guiwhite: c[8],
                        black: c[9],
                        blue: c[10],
                        green: c[11],
                        red: c[12],
                        gold: c[13],
                        purple: c[14],
                        magenta: c[15],
                        grey: c[16],
                        dgrey: c[17],
                        white: c[18],
                        guiblack: c[19],
                        paletteSize: f,
                        border: p
                    }
                }
            } catch (h) {}
            try {
                let d = JSON.parse(b);
                if ("object" !== typeof d) return null;
                let {
                    name: c = "Unknown Theme",
                    author: a = "",
                    content: f
                } = d;
                for (let b of [f.teal, f.lgreen, f.orange, f.yellow, f.lavender,
                        f.pink, f.vlgrey, f.lgrey, f.guiwhite, f.black, f.blue, f.green, f.red, f.gold, f.purple, f.magenta, f.grey, f.dgrey, f.white, f.guiblack
                    ])
                    if (!b.match(/^#[0-9a-fA-F]{6}$/)) return null;
                return {
                    isJSON: !0,
                    name: "string" === typeof c && c || "Unknown Theme",
                    author: "string" === typeof a && a || "",
                    content: f
                }
            } catch (h) {}
            return null
        }

        function z(b) {
            let {
                name: d = "Unknown Theme",
                author: c = "",
                content: h
            } = b;
            ({
                border: b
            } = h);
            b = d + "\x00" + c + "\x00" + String.fromCharCode(1 <= b ? 255 : 0 > b ? 0 : Math.floor(256 * b));
            for (let d of [h.teal, h.lgreen, h.orange, h.yellow,
                    h.lavender, h.pink, h.vlgrey, h.lgrey, h.guiwhite, h.black, h.blue, h.green, h.red, h.gold, h.purple, h.magenta, h.grey, h.dgrey, h.white, h.guiblack
                ]) {
                let c = parseInt(d.slice(1), 16);
                b += String.fromCharCode(c >> 16, c >> 8 & 255, c & 255)
            }
            return btoa(b).replace(/=+/, "")
        }

        function t() {
            if (!ua) {
                ua = !0;
                if (b.mobile) {
                    var d = document.body;
                    d.requestFullscreen ? d.requestFullscreen() : d.msRequestFullscreen ? d.msRequestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
                    d = window.navigator.standalone ||
                        window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches;
                    b.mobile && !d && Y.push({
                        text: "Add the game to home screen to always enable fullscreen!",
                        status: 2,
                        alpha: 0,
                        time: Date.now()
                    })
                }
                H.submitToLocalStorage("optScreenshotMode");
                B.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
                H.submitToLocalStorage("optFancy");
                B.graphical.pointy = !document.getElementById("optNoPointy").checked;
                H.submitToLocalStorage("optNoPointy");
                B.graphical.fancyAnimations = !document.getElementById("optFancy").checked;
                H.submitToLocalStorage("optShield");
                B.graphical.shieldbars = document.getElementById("optShield").checked;
                H.submitToLocalStorage("optPrediction");
                B.lag.newPrediction = document.getElementById("optPrediction").checked;
                H.submitToLocalStorage("optAutoLevel");
                b.autoLevel = document.getElementById("optAutoLevel").checked;
                H.submitToLocalStorage("optBorders");
                b.mobile && H.submitToLocalStorage("optMobile");
                switch (document.getElementById("optBorders").value) {
                    case "normal":
                        B.graphical.darkBorders =
                            B.graphical.neon = !1;
                        break;
                    case "dark":
                        B.graphical.darkBorders = !0;
                        B.graphical.neon = !1;
                        break;
                    case "glass":
                        B.graphical.darkBorders = !1;
                        B.graphical.neon = !0;
                        break;
                    case "neon":
                        B.graphical.darkBorders = B.graphical.neon = !0
                }
                H.submitToLocalStorage("optColors");
                d = document.getElementById("optColors").value;
                if ("custom" === d) {
                    let b = C(document.getElementById("optCustom").value);
                    b && (va.custom = b.content, b.isJSON && (document.getElementById("optCustom").value = z(b)))
                }
                H.submitToLocalStorage("optCustom");
                window.hereYaGoCuzImTooLazy =
                    m = va[d] || m;
                d = document.getElementById("playerNameInput");
                H.submitToLocalStorage("playerNameInput");
                b.playerName = y.name = d.value;
                b.playerKey = "z" === b.server.id ? wa : xa;
                b.screenWidth = window.innerWidth;
                b.screenHeight = window.innerHeight;
                document.getElementById("startMenuWrapper").style.top = "-600px";
                document.getElementById("gameAreaWrapper").style.opacity = 1;
                if (!b.socket) {
                    d = "https:" === location.protocol ? 1 : -1;
                    let a = `${1===(b.server.secure||d)?"https":"http"}://${b.server.at}/mockups.json`,
                        c = () => H.pullJSON(a).then(b => {
                            M = b
                        }).catch(b => {
                            console.error(b);
                            setTimeout(() => c(), 5E3)
                        });
                    c();
                    b.socket = Pa()
                }
                U.init(b.mobile ? document.getElementById("optMobile").value : "desktop", b.socket);
                setInterval(() => ya.iterate(b.socket.cmd.getMotion()), 1E3 / 30);
                document.getElementById("gameCanvas").focus();
                b.animLoopHandle || za();
                b.isInGame = !0
            }
        }

        function F(d, a) {
            g.fillStyle = d;
            g.globalAlpha = a;
            g.fillRect(0, 0, b.screenWidth, b.screenHeight);
            g.globalAlpha = 1
        }

        function G(b, a, c, h, u = !1) {
            u ? g.strokeRect(b, a, c, h) : g.fillRect(b, a, c, h)
        }

        function ja(b, a, c, h = !1) {
            g.beginPath();
            g.arc(b, a, c, 0, 2 * Math.PI, !1);
            h ? g.stroke() : g.fill()
        }

        function ka(b, a, c, h) {
            g.beginPath();
            g.lineTo(Math.round(b) + .5, Math.round(a) + .5);
            g.lineTo(Math.round(c) + .5, Math.round(h) + .5);
            g.stroke()
        }

        function K(b, a, c, h, u) {
            g.beginPath();
            g.lineTo(b, c);
            g.lineTo(a, c);
            g.lineWidth = h;
            g.strokeStyle = u;
            g.stroke()
        }

        function Qa(b, a, c, h, u) {
            if (!(.05 > u)) {
                var d = c.render.status.getFade();
                d *= d;
                g.globalAlpha = d;
                var f = c.size * h;
                h = M[c.index];
                h = f / h.size * h.realSize;
                if (c.drawsHealth) {
                    let p = c.render.health.get(),
                        w = c.render.shield.get();
                    if (1 >
                        p || 1 > w) {
                        let c = a + 1.1 * h + 15;
                        g.globalAlpha = u * u * d;
                        B.graphical.shieldbars ? (K(b - f, b + f, c, 6 + B.graphical.barChunk, m.black), w ? (K(b - f, b - f + 2 * f * p, c + 1.5, 3, m.lgreen), g.globalAlpha *= .7, K(b - f, b - f + 2 * f * w, c - 1.5, 3, m.teal)) : K(b - f, b - f + 2 * f * p, c, 4, m.lgreen)) : (K(b - f, b + f, c, 3 + B.graphical.barChunk, m.black), K(b - f, b - f + 2 * f * p, c, 3, m.lgreen), w && (g.globalAlpha *= .3 + .3 * w, K(b - f, b - f + 2 * f * w, c, 3, m.teal)));
                        g.globalAlpha = d
                    }
                }
                c.nameplate && c.id !== A.playerid && (null == c.render.textobjs && (c.render.textobjs = [n(), n()]), d = c.name, f = m.guiwhite, d.startsWith("\u200b\u200b") &&
                    (d = d.slice(2), d.length && (f = T(m.yellow, f, .125))), g.globalAlpha = u, c.render.textobjs[0].draw(d, b, a - h - 30, 16, f, "center"), c.render.textobjs[1].draw(H.handleLargeNumber(c.score, !0), b, a - h - 16, 8, f, "center"), g.globalAlpha = 1)
            }
        }

        function za() {
            b.animLoopHandle = requestAnimationFrame(za);
            y.renderv += (y.view - y.renderv) / 30;
            g.lineCap = "round";
            g.lineJoin = "round";
            b.gameStart && !b.disconnected && (b.time = Date.now() - P - Q, 1E3 < b.time - Aa && (Aa = b.time, J.rendertime = oa, oa = 0, J.updatetime = pa, pa = 0), J.lag = b.time - y.time);
            b.gameStart && 0 < M.length ?
                Ra(ma()) : b.disconnected || Sa();
            b.died && Ta();
            b.disconnected && Ua();
            (b.died || b.disconnected) && V.drawCanvas(g)
        }
        Object.values || (Object.values = function(b) {
            return Object.keys(b).map(d => b[d])
        });
        Object.entries || (Object.entries = function(b) {
            return Object.keys(b).map(d => [d, b[d]])
        });
        let b = v(1),
            H = v(2),
            {
                blockAdBlock: Va
            } = v(3),
            V = v(4);
        window.dataLayer = window.dataLayer || [];
        a("js", new Date);
        a("config", "UA-120544149-1");
        let ia = !1,
            qa = null;
        Va.on(!0, () => {
            document.getElementById("referral-fallback").style.display = "block";
            ia = !0;
            a("event", "yes_adblock", {
                event_category: "adblock_detection",
                non_interaction: !0
            })
        }).on(!1, () => {
            a("event", "no_adblock", {
                event_category: "adblock_detection",
                non_interaction: !0
            })
        });
        (window.localStorage && window.localStorage.adForce ? "aip" === window.localStorage.adForce : .1 <= Math.random()) ? (aiptag.cmd.display.push(function() {
            aipDisplayTag.display("arras-io_336x280")
        }), window.adServiceMode = "aip") : ((adsbygoogle = window.adsbygoogle || []).push({}), window.adServiceMode = "google");
        var B = {
            graphical: {
                screenshotMode: !1,
                borderChunk: 6,
                barChunk: 5,
                mininumBorderChunk: 3,
                compensationScale: 1.114,
                inversedRender: !0,
                darkBorders: !1,
                fancyAnimations: !0,
                colors: "normal",
                pointy: !0,
                fontSizeBoost: 1,
                shieldbars: !1,
                neon: !1
            },
            gui: {
                expectedMaxSkillLevel: 9
            },
            lag: {
                memory: 60,
                newPrediction: !1
            }
        };
        b.config = B;
        let T = (b, a, c = .5) => {
            if (0 === c) return b;
            if (1 === c) return a;
            let d = 1 - c;
            b = parseInt(b.slice(1), 16);
            a = parseInt(a.slice(1), 16);
            return "#" + ((b & 16711680) * d + (a & 16711680) * c & 16711680 | (b & 65280) * d + (a & 65280) * c & 65280 | (b & 255) * d + (a & 255) * c & 255).toString(16).padStart(6,
                "0")
        };
        var M = [];
        b.clickables = (() => {
            let b = (() => {
                function b() {
                    var b = 0,
                        d = 0,
                        a = 0,
                        p = 0;
                    let f = !1;
                    return {
                        set: (c, h, u, w) => {
                            b = c;
                            d = h;
                            a = u;
                            p = w;
                            f = !0
                        },
                        check: c => {
                            let h = Math.round(c.x - b);
                            c = Math.round(c.y - d);
                            return f && 0 <= h && 0 <= c && h <= a && c <= p
                        },
                        hide: () => {
                            f = !1
                        }
                    }
                }
                return c => {
                    let d = [];
                    for (let a = 0; a < c; a++) d.push(b());
                    return {
                        place: (b, ...c) => {
                            if (b >= d.length) throw console.error(b, d), Error("Trying to reference a clickable outside a region!");
                            d[b].set(...c)
                        },
                        hide: () => {
                            for (let b of d) b.hide()
                        },
                        check: b => d.findIndex(c => c.check(b))
                    }
                }
            })();
            return {
                stat: b(10),
                upgrade: b(9),
                hover: b(1),
                skipUpgrades: b(1)
            }
        })();
        b.statHover = !1;
        const ra = class {
                constructor(b) {
                    this.dataLength = b;
                    this.elements = {}
                }
                update(b, a = 0) {
                    var c = b[a++];
                    for (var d = 0; d < c; d++) delete this.elements[b[a++]];
                    c = b[a++];
                    for (d = 0; d < c; d++) {
                        let c = b[a++],
                            d = b.slice(a, a + this.dataLength);
                        a += this.dataLength;
                        this.elements[c] = d
                    }
                    return a
                }
                entries() {
                    return Object.entries(this.elements).map(([b, a]) => ({
                        id: +b,
                        data: a
                    }))
                }
            },
            Wa = class {
                constructor(b = 250) {
                    this.speed = b;
                    this.map = {};
                    this.lastUpdate = Date.now()
                }
                update(b) {
                    this.lastUpdate =
                        Date.now();
                    for (let [b, c] of Object.entries(this.map)) c.now ? (c.old = c.now, c.now = null) : delete this.map[b];
                    for (let d of b) this.map[d.id] ? this.map[d.id].now = d : this.map[d.id] = {
                        old: null,
                        now: d
                    }
                }
                get() {
                    let b = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
                        a = 1 - b;
                    return Object.values(this.map).map(({
                        old: c,
                        now: d
                    }) => d ? c ? {
                        type: d.type,
                        id: d.id,
                        x: b * d.x + a * c.x,
                        y: b * d.y + a * c.y,
                        color: d.color,
                        size: b * d.size + a * c.size,
                        alpha: 1
                    } : {
                        type: d.type,
                        id: d.id,
                        x: d.x,
                        y: d.y,
                        color: d.color,
                        size: d.size,
                        alpha: b
                    } : {
                        type: c.type,
                        id: c.id,
                        x: c.x,
                        y: c.y,
                        color: c.color,
                        size: c.size,
                        alpha: a
                    })
                }
            },
            Xa = class {
                constructor(b) {
                    this.score = q(0, 10);
                    this.update(b)
                }
                update(b) {
                    this.name = b.name;
                    this.bar = b.bar;
                    this.color = b.color;
                    this.index = b.index;
                    this.score.set(b.score);
                    this.old = !1
                }
                publish() {
                    let b = M[this.index];
                    return {
                        image: D(this.index, this.color),
                        position: b.position,
                        barColor: e(this.bar),
                        label: this.name ? this.name + " - " + b.name : b.name,
                        score: this.score.get()
                    }
                }
            },
            Ya = class {
                constructor() {
                    this.entries = {}
                }
                get() {
                    let b = [],
                        a = 1;
                    for (let c of Object.values(this.entries)) {
                        let d =
                            c.publish();
                        b.push(d);
                        d.score > a && (a = d.score)
                    }
                    b.sort((b, a) => a.score - b.score);
                    return {
                        data: b,
                        max: a
                    }
                }
                update(b) {
                    b.sort((b, c) => c.score - b.score);
                    for (let b of Object.values(this.entries)) b.old = !0;
                    for (let a of b) this.entries[a.id] ? this.entries[a.id].update(a) : this.entries[a.id] = new Xa(a);
                    for (let [b, c] of Object.entries(this.entries)) c.old && delete this.entries[b]
                }
            };
        var da = [],
            Ba = new ra(5),
            Ca = new ra(3),
            Da = new ra(5),
            Ea = new Wa(200),
            Fa = new Ya,
            la = 0,
            Y = b.messages = [],
            J = b.metrics = {
                latency: [],
                lag: 0,
                rendertime: 0,
                updatetime: 0,
                lastlag: 0,
                rendergap: 0,
                lastuplink: 0
            },
            Aa = 0,
            oa = 0,
            pa = 0,
            Z = [
                ["norm"]
            ],
            A = {
                getStatNames: b => {
                    switch (b) {
                        case 1:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Engine Acceleration;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 2:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Respawn Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 3:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Max Drone Count;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 4:
                            return "Body Damage;Max Health;Swarm Speed;Swarm Health;Swarm Penetration;Swarm Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 5:
                            return "Body Damage;Max Health;Placement Speed;Trap Health;Trap Penetration;Trap Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 6:
                            return "Body Damage;Max Health;Weapon Speed;Weapon Health;Weapon Penetration;Weapon Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        default:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";")
                    }
                },
                skills: [{
                    amount: 0,
                    color: "purple",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "pink",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "blue",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "lgreen",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "red",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "yellow",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "green",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "teal",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "gold",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "orange",
                    cap: 1,
                    softcap: 1
                }],
                points: 0,
                upgrades: [],
                playerid: -1,
                __s: (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        h = q(0, 10);
                    return {
                        setScore: d => {
                            d ? (h.set(d), a > h.get() && (a = c = 0)) : (b = 3, a = c = 0, h = q(0, 10))
                        },
                        update: () => {
                            b = Math.ceil(1.8 * Math.pow(c + 1, 1.8) - 2 * c + 1) || 0;
                            if (h.get() >= a + b) a += b, c++;
                            else if (h.get() < a) {
                                var d = c - 1;
                                a -= Math.ceil(1.8 * Math.pow(d + 1, 1.8) - 2 * d + 1) || 0;
                                c--
                            }
                        },
                        getProgress: () => b ? Math.min(1, Math.max(0, (h.get() - a) / b)) : 0,
                        getScore: () => h.get(),
                        getLevel: () => c
                    }
                })(),
                type: 0,
                fps: 0,
                color: 0,
                accel: 0,
                party: 0
            };
        b.clearUpgrades = () => {
            A.upgrades = []
        };
        var ma = () => Math.max(b.screenWidth / y.renderv, b.screenHeight / y.renderv / 9 * 16);
        b.canUpgrade = !1;
        b.canSkill = !1;
        b.message =
            "";
        b.time = 0;
        var N = window.localStorage || {};
        N.password && -1 === N.password.toString().indexOf("$") && (N.password = "", delete N.password);
        let xa = N.password || null,
            wa = null,
            Ga = parseInt(N.privilege),
            Ha = Number.isNaN(Ga) ? xa ? 1 : 0 : Ga,
            Za = () => {
                var a = b.servers.filter(b => null != b.visible && b.visible <= Ha && b.prefer);
                let e = Infinity,
                    c = [];
                for (let d of a)[, a] = d.code.split("-"), a = Math.abs(((b.codeTable[1][a][1] - b.timezone) % 24 + 36) % 24 - 12), a < e ? (c = [d], e = a) : a === e && c.push(d);
                return c[Math.floor(Math.random() * c.length)]
            };
        b.server = (a => {
            a.startsWith("#") && (a = a.slice(1));
            let [, d, c] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
            if (d) b.partyLink = +c || 0;
            else {
                var h = {};
                for (var u of a.split("&")) {
                    var w = u.split("=");
                    a = w.shift();
                    w = w.join("=") || !0;
                    h[a] = w
                }
                h.private && (u = h.private, u.includes(";") && (a = u.split(";"), u = a.shift(), h.key = a.join(";")), h.host = u);
                if (h.host) {
                    let {
                        region: a,
                        mode: c,
                        host: w,
                        key: u
                    } = h;
                    h = `z-${a||"unknown"}-${c||"p"}-${w.toLowerCase().replace(/(\.[^\.]+)?\.[^\.]+$/,"").replace(/[^a-z0-9\-]/,"-")}`;
                    b.servers[0].code = h;
                    b.servers[0].at = w;
                    d =
                        "z";
                    wa = u || null
                } else return null
            }
            return b.servers.find(b => b.id === d) || null
        })(location.hash) || b.servers.find(b => b.id === N.gameMode) || Za();
        let $a = a => {
                var d = b.codeTable[2];
                let c = [],
                    h = [];
                var u = 0;
                for (let b of d)
                    for (let p of b)
                        if (p.id === a.charAt(u)) {
                            u++;
                            d = Object.assign({}, p);
                            if ("word" === p.dynamic) {
                                var w = +a.charAt(u++),
                                    f = a.slice(u, u + w);
                                d.to = f.charAt(0).toUpperCase() + f.slice(1);
                                u += w
                            } else if ("words" === p.dynamic) {
                                w = +a.charAt(u++);
                                f = [];
                                for (let b = 0; b < w; b++) {
                                    var e = a.charAt(u++);
                                    if ("d" === e) f.push("-");
                                    else if ("s" ===
                                        e) f.push(" ");
                                    else {
                                        e = +e;
                                        let b = a.slice(u, u + e);
                                        f.push(b.charAt(0).toUpperCase() + b.slice(1));
                                        u += e
                                    }
                                }
                                d.to = f.join("")
                            }
                            p.remove && h.push(p.remove);
                            c.push(d);
                            break
                        } if (0 === c.length) return "Unknown";
                a = c[c.length - 1];
                a.end && (a.to = a.end);
                for (a = 0; a + 1 < c.length; a++) c[a].delay && !c[a + 1].delay && (u = c[a], c[a] = c[a + 1], c[a + 1] = u, a++);
                c = c.filter(({
                    id: b
                }) => !h.includes(b));
                return c.map(b => b.to).join(" ")
            },
            aa = document.getElementById("serverSelector").parentNode.parentNode,
            ab = document.getElementById("serverSelector"),
            ea;
        for (let a of b.servers) {
            if ((null ==
                    a.visible || a.visible > Ha) && b.server !== a) continue;
            let [d, c, h] = a.code.split("-"), u = document.createElement("tr");
            u.appendChild(document.createElement("td")).textContent = b.codeTable[0][d];
            u.appendChild(document.createElement("td")).textContent = b.codeTable[1][c][0];
            u.appendChild(document.createElement("td")).textContent = $a(h);
            a.featured && u.classList.add("featured");
            u.onclick = () => {
                ea.classList.remove("selected");
                ea = u;
                ea.classList.add("selected");
                b.server = a;
                b.partyLink = 0;
                N.gameMode = a.id;
                location.hash = "#" +
                    a.id;
                aa.scrollTop < u.offsetTop - 50 ? aa.scrollTop = u.offsetTop - 50 : aa.scrollTop > u.offsetTop - 10 && (aa.scrollTop = u.offsetTop - 10)
            };
            ab.appendChild(u);
            b.server === a && (ea = u, ea.classList.add("selected"), setTimeout(() => {
                aa.scrollTop = u.offsetTop - 30
            }))
        }
        let bb = (() => {
                let b = !1,
                    a = document.getElementById("startMenuSlidingTrigger"),
                    c = document.getElementById("optionArrow"),
                    h = document.getElementById("viewOptionText"),
                    u = document.getElementsByClassName("sliderHolder")[0],
                    w = document.getElementsByClassName("slider"),
                    f = () => {
                        c.style.transform =
                            c.style.webkitTransform = b ? "translate(2px, -2px) rotate(45deg)" : "rotate(-45deg)";
                        h.innerText = b ? "close options" : "view options";
                        b ? u.classList.add("slided") : u.classList.remove("slided");
                        w[0].style.opacity = b ? 0 : 1;
                        w[2].style.opacity = b ? 1 : 0
                    };
                a.onclick = () => {
                    b = !b;
                    f()
                };
                return () => {
                    b || (b = !0, f())
                }
            })(),
            sa = document.getElementById("patchNotes"),
            Ka = (b, a) => {
                var c = b.shift();
                if (c) {
                    c = c.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [c, c, null];
                    var h = c[1] ? {
                            Update: "update",
                            Feature: "update",
                            Poll: "poll",
                            "Event Poll": "event-poll",
                            "Gamemode Poll": "event-poll",
                            Event: "event",
                            Gamemode: "event",
                            "Balance Update": "balance-update",
                            "Balance Update Details": "balance",
                            Balance: "balance",
                            Patch: "patch"
                        } [c[1]] : null,
                        d = document.createElement("div");
                    h && d.classList.add(h);
                    var w = document.createElement("b"),
                        f = [c[1]];
                    if (c[2]) {
                        var e = new Date(c[2] + "T00:00:00z");
                        if (e > Date.now()) return;
                        f.push(e.toLocaleDateString("default", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "UTC"
                        }))
                    }
                    c[3] && f.push(c[3]);
                    w.innerHTML = f.join(" - ");
                    d.appendChild(w);
                    if ("poll" ===
                        h || "event-poll" === h) {
                        let [a, u, k] = b.shift().split(",").map(b => b.trim());
                        var p = "table" === k;
                        let x = "radio" === k,
                            ha = Math.ceil((new Date(u.trim()) - Date.now()) / 36E5);
                        w.appendChild(document.createElement("br"));
                        c = document.createElement("small");
                        c.appendChild(document.createTextNode(0 < ha ? "closing in " + ha + " hour" + (1 === ha ? "" : "s") : "closed"));
                        let L = document.createElement("a");
                        L.href = "javascript:;";
                        L.innerText = "view all results";
                        p && c.appendChild(L);
                        let O = document.createElement("a");
                        O.href = "javascript:;";
                        O.innerText =
                            "reset";
                        O.style.display = "none";
                        x && c.appendChild(O);
                        w.appendChild(c);
                        d.appendChild(document.createElement("br"));
                        w = document.createElement("table");
                        w.className = p ? "poll-table" : "poll-list";
                        c = document.createElement("tbody");
                        h = (() => {
                            let b = [],
                                c = [],
                                f = (new Promise(b => {
                                    let a = !1;
                                    sa.addEventListener("scroll", () => {
                                        if (!a) {
                                            var c = sa.getBoundingClientRect(),
                                                f = d.getBoundingClientRect();
                                            0 >= f.height || f.top > c.bottom + c.height || f.bottom < c.top - c.height || (a = !0, b())
                                        }
                                    })
                                })).then(() => fetch("http://ip-p.arras.io:2020/poll/" + a +
                                    "/status")).then(b => b.json()).then(b => {
                                    if (!b.ok) throw Error("Poll does not exist!");
                                    c = b.options
                                });
                            L.onclick = () => {
                                L.remove();
                                let a = b.map(b => parseInt(b.title, 10)).sort((b, a) => b - a),
                                    c = "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(" ");
                                for (let h of b) {
                                    var f = parseInt(h.title, 10);
                                    h.className = "count";
                                    h.innerHTML = 1E3 <= f ? (f / 1E3).toFixed(1) + "<span>k</span>" : 0 <= f ? f : "?";
                                    f = Math.floor((a.indexOf(f) + .5) / a.length * c.length);
                                    h.style.color = c[f]
                                }
                            };
                            O.onclick = () => {
                                h.checked = !1;
                                h.onchange();
                                h = null;
                                O.style.display =
                                    "none"
                            };
                            let h = null,
                                w = 0;
                            return d => {
                                let e = b => (d ? d + " - " : "") + b + " vote" + (1 === b ? "" : "s"),
                                    u = w++,
                                    p = document.createElement("label");
                                p.className = "container";
                                let g = document.createElement("input");
                                g.tabIndex = -1;
                                g.type = x ? "radio" : "checkbox";
                                g.disabled = !0;
                                x && (g.name = "radio-" + a);
                                f.then(() => {
                                    let {
                                        voted: b,
                                        votes: f
                                    } = c[u] || {
                                        voted: !1,
                                        votes: 0
                                    };
                                    g.checked = b;
                                    x && b && (h = g, O.style.display = "inline");
                                    g.disabled = 0 >= ha;
                                    let w = f - b;
                                    g.onchange = () => {
                                        fetch("http://ip-p.arras.io:2020/poll/" + a + "/set/" + u + "/" + g.checked);
                                        let b = w + (g.checked ?
                                            1 : 0);
                                        d ? m.nodeValue = e(b) : p.title = e(b);
                                        x && h && h !== g && g.checked && (h.checked = !1, h.onchange());
                                        h = g;
                                        O.style.display = "inline"
                                    };
                                    d ? m.nodeValue = e(f) : p.title = e(f)
                                });
                                let m;
                                d && (m = document.createTextNode(d), p.appendChild(m));
                                p.appendChild(g);
                                let k = document.createElement("span");
                                k.className = x ? "radio" : "checkmark";
                                p.appendChild(k);
                                b.push(p);
                                return p
                            }
                        })();
                        for (var g of b) {
                            b = document.createElement("tr");
                            if (p)
                                for (var m of g.split("|")) m = m.trim(), f = document.createElement("td"), "X" === m ? f.appendChild(h()) : (e = m.match(/^:*/)[0].length,
                                    f.colSpan = e + 1, f.innerHTML = m.slice(e)), b.appendChild(f);
                            else f = document.createElement("td"), f.appendChild(h(g)), b.appendChild(f);
                            c.appendChild(b)
                        }
                        w.appendChild(c);
                        d.appendChild(w)
                    } else {
                        g = document.createElement("ul");
                        for (p of b) m = document.createElement("li"), m.innerHTML = p, g.appendChild(m);
                        m = g.getElementsByTagName("a");
                        for (b = 0; b < m.length; b++) {
                            p = m[b];
                            if (!p.href) continue;
                            let a = p.href.lastIndexOf("#"); - 1 !== a && (a = p.href.slice(a + 1), "options-menu" === a ? m[b].onclick = function(b) {
                                    b.preventDefault();
                                    bb()
                                } : Ja[a] &&
                                (m[b].onclick = function(b) {
                                    b.preventDefault();
                                    Ja[a]()
                                }))
                        }
                        d.appendChild(g)
                    }
                    a && d.appendChild(document.createElement("hr"));
                    sa.appendChild(d)
                }
            };
        fetch("changelog.md", {
            cache: "no-cache"
        }).then(b => b.text()).then(b => {
            let a = [];
            for (let c of b.split("\n")) 0 !== c.length && (b = c.charAt(0), "#" === b ? (Ka(a, !0), a = [c.slice(1).trim()]) : "-" === b ? a.push(c.slice(1).trim()) : a[a.length - 1] += " " + c.trim());
            Ka(a, !1)
        });
        let Ja = (() => {
            let b = document.getElementById("changelogSelector"),
                a = b.parentNode,
                c = b.firstElementChild,
                h = document.getElementById("patchNotes"),
                e = {};
            for (let d = 0; d < b.children.length; d++) {
                let f = b.children[d],
                    w = f.dataset.type;
                e[w] = f.onclick = () => {
                    if (f !== c) {
                        var d = c.dataset.type;
                        c.classList.remove("active");
                        f.classList.add("active");
                        h.classList.remove(d);
                        h.classList.add(w);
                        c = f;
                        a.scrollLeft = f.offsetLeft - b.offsetLeft + f.offsetWidth / 2 - a.offsetWidth / 2
                    }
                }
            }
            return e
        })();
        H.retrieveFromLocalStorage("playerNameInput");
        H.retrieveFromLocalStorage("optScreenshotMode");
        H.retrieveFromLocalStorage("optShield");
        H.retrieveFromLocalStorage("optFancy");
        H.retrieveFromLocalStorage("optColors");
        H.retrieveFromLocalStorage("optNoPointy");
        H.retrieveFromLocalStorage("optBorders");
        H.retrieveFromLocalStorage("optAutoLevel", b.mobile);
        H.retrieveFromLocalStorage("optPrediction");
        b.mobile && H.retrieveFromLocalStorage("optMobile");
        H.retrieveFromLocalStorage("optCustom");
        "" === document.getElementById("optColors").value && (document.getElementById("optColors").value = "normal");
        b.mobile && "" === document.getElementById("optMobile").value && (document.getElementById("optMobile").value = "joysticks");
        "" === document.getElementById("optBorders").value &&
            (document.getElementById("optBorders").value = "normal");
        let fa = document.getElementById("optCustom");
        fa.oninput = () => {
            (fa.value ? C(fa.value) : 1) ? fa.classList.remove("error"): fa.classList.add("error")
        };
        if (!b.mobile) {
            let a = {};
            try {
                "#vi" === location.hash || "#vim" === location.hash ? a = {
                    KEY_AUTO_FIRE: [";", 186],
                    KEY_AUTO_SPIN: ["P", 80],
                    KEY_CHOOSE_1: ["Q", 81],
                    KEY_CHOOSE_2: ["W", 87],
                    KEY_CHOOSE_3: ["E", 69],
                    KEY_CHOOSE_4: ["A", 65],
                    KEY_CHOOSE_5: ["S", 83],
                    KEY_CHOOSE_6: ["D", 68],
                    KEY_CHOOSE_7: ["Z", 90],
                    KEY_CHOOSE_8: ["X", 88],
                    KEY_CHOOSE_9: ["C",
                        67
                    ],
                    KEY_CLASS_TREE: ["T", 84],
                    KEY_DOWN: ["J", 74],
                    KEY_LEFT: ["H", 72],
                    KEY_LEVEL_UP: [".", 190],
                    KEY_OVER_RIDE: ["I", 73],
                    KEY_PING: [",", 188],
                    KEY_RECORD: ["V", 86],
                    KEY_REVERSE_MOUSE: ["U", 85],
                    KEY_REVERSE_TANK: ["Y", 89],
                    KEY_RIGHT: ["L", 76],
                    KEY_SCREENSHOT: ["G", 71],
                    KEY_UP: ["K", 75]
                } : N.keybindsJSON && (a = JSON.parse(N.keybindsJSON) || {})
            } catch (fb) {}
            let e = document.getElementById("controlTable"),
                c = document.getElementById("resetControls"),
                h = document.getElementById("moreControls"),
                u = null,
                w = [];
            for (let c = 0; c < e.rows.length; c++)
                for (let f =
                        0; f < e.rows[c].cells.length; f++) {
                    let h = e.rows[c].cells[f].firstChild.firstChild,
                        {
                            key: d,
                            help: u
                        } = h.dataset,
                        g = {
                            element: h,
                            key: d,
                            help: u,
                            currentKey: h.innerText,
                            currentCode: b[d],
                            originalKey: h.innerText,
                            originalCode: b[d]
                        };
                    a[g.key] && (h.innerText = g.currentKey = a[g.key][0], b[d] = g.currentCode = a[g.key][1], g.help && (b.help[g.help] = g.currentKey));
                    w.push(g)
                }
            let f = () => w.some(({
                currentCode: b,
                originalCode: a
            }) => b !== a);
            f() && c.classList.add("active");
            let g = () => {
                    window.getSelection && window.getSelection().removeAllRanges();
                    u.element.parentNode.parentNode.classList.remove("editing");
                    u = null
                },
                m = b => {
                    u = b;
                    u.element.parentNode.parentNode.classList.add("editing");
                    if (-1 !== u.currentCode && window.getSelection) {
                        b = window.getSelection();
                        b.removeAllRanges();
                        let a = document.createRange();
                        a.selectNodeContents(u.element);
                        b.addRange(a)
                    }
                },
                k = (h, d) => {
                    if (" " === h) h = "", d = -1;
                    else if (d !== u.currentCode) {
                        let c = w.find(({
                            currentCode: b
                        }) => b === d);
                        c && (c.currentKey = u.currentKey, c.element.innerText = u.currentKey, c.currentCode = u.currentCode, b[c.key] = u.currentCode,
                            c.help && (b.help[c.help] = u.currentKey), a[c.key] = [c.currentKey, c.currentCode])
                    }
                    u.currentKey = h;
                    u.element.innerText = h;
                    u.currentCode = d;
                    b[u.key] = d;
                    u.help && (b.help[u.help] = h);
                    a[u.key] = [u.currentKey, u.currentCode];
                    N.keybindsJSON = JSON.stringify(a);
                    g();
                    f() ? (c.classList.remove("spin"), c.classList.add("active")) : c.classList.remove("active")
                };
            document.onclick = a => {
                if (!b.gameStart)
                    if (u) g();
                    else {
                        var c = w.find(({
                            element: b
                        }) => a.target === b);
                        c && m(c)
                    }
            };
            c.onclick = () => {
                if (f()) {
                    u && g();
                    for (let a of w) a.currentKey = a.originalKey,
                        a.element.innerText = a.originalKey, a.currentCode = a.originalCode, b[a.key] = a.originalCode, a.help && (b.help[a.help] = a.originalKey);
                    a = {};
                    N.keybindsJSON = JSON.stringify(a);
                    c.classList.remove("active");
                    c.classList.add("spin")
                }
            };
            let x = null;
            h.onclick = () => {
                if (x) {
                    for (var b = 0; b < x.length; b++) x[b].classList.add("hidden");
                    x = null;
                    h.classList.remove("x")
                } else {
                    x = document.querySelectorAll("#controlTable tr.hidden");
                    for (b = 0; b < x.length; b++) x[b].classList.remove("hidden");
                    h.classList.add("x")
                }
            };
            document.onkeydown = a => {
                if (!(b.gameStart ||
                        a.shiftKey || a.ctrlKey || a.altKey)) {
                    var c = a.which || a.keyCode;
                    u ? 1 !== a.key.length || /[0-9of`]/i.test(a.key) || 3 === a.location ? "Backspace" !== a.key && "Delete" !== a.key || k(" ", 32) : k(a.key.toUpperCase(), c) : c !== b.KEY_ENTER && c !== b.KEY_SPAWN || t()
                }
            }
        }
        document.getElementById("startButton").onclick = () => {
            t()
        };
        let La = WebSocket.prototype.close;
        WebSocket.prototype.close = function(...b) {
            V.logCloseCall();
            La.call(this, ...b)
        };
        WebSocket.prototype.close.toString = Function.prototype.toString.bind(La);
        document.addEventListener("mouseenter",
            () => V.logMouse(!0));
        document.addEventListener("mouseleave", () => V.logMouse(!1));
        window.addEventListener("resize", () => {
            y.screenWidth = U.cv.width = b.screenWidth = window.innerWidth;
            y.screenHeight = U.cv.height = b.screenHeight = window.innerHeight
        });
        var U = new(v(5));
        b.mobile && document.body.classList.add("mobile");
        var g = U.cv.getContext("2d"),
            Ma = document.createElement("canvas").getContext("2d"),
            S = [],
            P = 0,
            Q = 0,
            Na = (() => {
                let b = [];
                return {
                    get: () => b.length ? b.reduce((b, a) => b + a, 0) / b.length : 0,
                    add: a => {
                        b.push(a);
                        b.length > B.lag.memory &&
                            b.shift()
                    }
                }
            })(),
            y = {
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                vx: 0,
                vy: 0,
                lastvx: 0,
                lastvy: 0,
                renderx: 0,
                rendery: 0,
                renderv: 1,
                lastx: 0,
                lasty: 0,
                target: U.target,
                name: "",
                view: 1,
                lastUpdate: 0,
                time: 0
            };
        b.player = y;
        var ya = (() => {
            let a = 0,
                e = 0,
                c = 0,
                h = 0;
            return {
                reset: () => {
                    e = a = 0
                },
                get: () => ({
                    x: a,
                    y: e
                }),
                iterate: d => {
                    if (b.died || b.gameStart) return 0;
                    var w = A.accel / A.topSpeed;
                    let f = Math.sqrt(d.x * d.x + d.y * d.y);
                    c += A.accel * d.x / f;
                    h += A.accel * d.y / f;
                    d = Math.sqrt(c * c + h * h);
                    0 < d && w && (w = d / (w / 0 + 1), c = w * c / d, h = w * h / d);
                    a += c;
                    e += h
                }
            }
        })();
        const Pa = (() => {
            window.WebSocket = window.WebSocket ||
                window.MozWebSocket;
            const a = v(6),
                e = (() => {
                    const a = (() => {
                        let b = 0,
                            a = [];
                        return {
                            next: () => {
                                if (b >= a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                                return a[b++]
                            },
                            all: () => a.slice(b),
                            take: c => {
                                b += c;
                                if (b > a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                            },
                            set: c => {
                                a = c;
                                b = 0
                            }
                        }
                    })();
                    return {
                        begin: b => a.set(b),
                        data: (() => {
                            const b = (() => {
                                function c() {
                                    let b = "normal",
                                        a = Date.now();
                                    return {
                                        set: c => {
                                            if (c !== b || "injured" === b) "dying" !== b && (a = Date.now()),
                                                b = c
                                        },
                                        getFade: () => "dying" === b || "killed" === b ? 1 - Math.min(1, (Date.now() - a) / 300) : 1,
                                        getColor: () => "#FFFFFF",
                                        getBlend: () => {
                                            let c = "normal" === b || "dying" === b ? 0 : 1 - Math.min(1, (Date.now() - a) / 80);
                                            500 < Date.now() - a && "injured" === b && (b = "normal");
                                            return c
                                        }
                                    }
                                }
                                const h = (() => {
                                    function b(b) {
                                        b.isUpdated = !0;
                                        if (b.motion || b.position) b.motion -= .2 * b.position, b.position += b.motion, 0 > b.position && (b.position = 0, b.motion = -b.motion), 0 < b.motion && (b.motion *= .5)
                                    }
                                    return a => {
                                        let c = [];
                                        for (let b = 0; b < a; b++) c.push({
                                            motion: 0,
                                            position: 0,
                                            isUpdated: !0
                                        });
                                        return {
                                            getPositions: () => c.map(b => b.position),
                                            update: () => c.forEach(b),
                                            fire: (b, a) => {
                                                c[b].isUpdated && (c[b].motion += Math.sqrt(a) / 20);
                                                c[b].isUpdated = !1
                                            },
                                            length: c.length
                                        }
                                    }
                                })();
                                return (f = {}) => {
                                    var d = null == f.facing,
                                        e = a.next();
                                    if (e & 1) f.facing = a.next(), f.layer = a.next();
                                    else {
                                        f.interval = J.rendergap;
                                        f.id = a.next();
                                        d = da.findIndex(b => b.id === f.id); - 1 !== d && (f = da.splice(d, 1)[0]);
                                        d = -1 === d;
                                        d || (f.render.draws = !0, f.render.lastx = f.x, f.render.lasty = f.y, f.render.lastvx = f.vx, f.render.lastvy = f.vy, f.render.lastf = f.facing, f.render.lastRender =
                                            y.time);
                                        f.index = a.next();
                                        f.x = a.next();
                                        f.y = a.next();
                                        f.vx = a.next();
                                        f.vy = a.next();
                                        f.size = a.next();
                                        f.facing = a.next();
                                        f.vfacing = a.next();
                                        f.twiggle = a.next();
                                        f.layer = a.next();
                                        f.color = a.next();
                                        if (d) {
                                            f.health = a.next() / 255;
                                            var w = a.next();
                                            f.shield = 0 > w ? NaN : w / 255
                                        } else {
                                            w = f.health;
                                            var g = f.shield;
                                            f.health = a.next() / 255;
                                            var u = a.next();
                                            f.shield = 0 > u ? NaN : u / 255;
                                            f.health < w || f.shield < g ? f.render.status.set("injured") : 1 !== f.render.status.getFade() && f.render.status.set("normal")
                                        }
                                        f.alpha = a.next() / 255;
                                        f.drawsHealth = e & 2;
                                        f.nameplate =
                                            e & 4;
                                        f.invuln = e & 8 ? f.invuln || Date.now() : 0;
                                        e & 4 && (f.name = a.next(), f.score = a.next());
                                        d && (f.render = {
                                            draws: !1,
                                            expandsWithDeath: f.drawsHealth,
                                            lastRender: y.time,
                                            x: f.x,
                                            y: f.y,
                                            lastx: f.x - 1E3 / 30 * B.roomSpeed * J.rendergap * f.vx,
                                            lasty: f.y - 1E3 / 30 * B.roomSpeed * J.rendergap * f.vy,
                                            lastvx: f.vx,
                                            lastvy: f.vy,
                                            lastf: f.facing,
                                            f: f.facing,
                                            h: f.health,
                                            s: f.shield,
                                            interval: J.rendergap,
                                            slip: 0,
                                            status: c(),
                                            health: q(f.health, .5, 5),
                                            shield: q(f.shield, .5, 5)
                                        });
                                        f.render.health.set(f.health);
                                        f.render.shield.set(f.shield);
                                        d || f.oldIndex === f.index ||
                                            (d = !0);
                                        f.oldIndex = f.index
                                    }
                                    e = a.next();
                                    if (d) f.guns = h(e);
                                    else if (e !== f.guns.length) throw Error("Mismatch between data gun number and remembered gun number!");
                                    for (w = 0; w < e; w++) g = a.next(), u = a.next(), g > y.lastUpdate - J.rendergap && f.guns.fire(w, u);
                                    e = a.next();
                                    if (d)
                                        for (f.turrets = [], d = 0; d < e; d++) f.turrets.push(b());
                                    else {
                                        if (f.turrets.length !== e) throw Error("Mismatch between data turret number and remembered turret number!");
                                        f.turrets.forEach(b)
                                    }
                                    return f
                                }
                            })();
                            return () => {
                                let c = [];
                                for (let d = 0, f = a.next(); d < f; d++) c.push(b());
                                da.forEach(b => {
                                    b.render.status.set(1 === b.health ? "dying" : "killed");
                                    0 !== b.render.status.getFade() && R(b.render.x - y.renderx, b.render.y - y.rendery, b.size, !0) && c.push(b)
                                });
                                da = c;
                                da.sort((b, a) => b.layer - a.layer || a.id - b.id)
                            }
                        })(),
                        gui: () => {
                            var c = a.next(),
                                d = c & 2,
                                e = c & 4,
                                f = c & 8,
                                g = c & 16,
                                m = c & 32,
                                p = c & 64,
                                k = c & 128,
                                x = c & 256;
                            c & 1 && (A.fps = a.next());
                            d && (A.type = a.next(), A.color = a.next(), A.playerid = a.next());
                            e && A.__s.setScore(a.next());
                            f && (A.points = a.next());
                            if (g) {
                                A.upgrades = [];
                                for (let b = 0, c = a.next(); b < c; b++) A.upgrades.push(a.next())
                            }
                            if (m)
                                for (c =
                                    9; 0 <= c; c--) A.skills[c].name = a.next(), A.skills[c].cap = a.next(), A.skills[c].softcap = a.next();
                            p && (p = parseInt(a.next(), 36), A.skills[0].amount = p / 68719476736 & 15, A.skills[1].amount = p / 4294967296 & 15, A.skills[2].amount = p / 268435456 & 15, A.skills[3].amount = p / 16777216 & 15, A.skills[4].amount = p / 1048576 & 15, A.skills[5].amount = p / 65536 & 15, A.skills[6].amount = p / 4096 & 15, A.skills[7].amount = p / 256 & 15, A.skills[8].amount = p / 16 & 15, A.skills[9].amount = p / 1 & 15);
                            k && (A.accel = a.next());
                            x && (A.party = a.next(), "z" !== b.server.id && (location.hash =
                                "#" + b.server.id + (A.party || "")))
                        },
                        broadcast: () => {
                            var c = a.all();
                            let d = Ba.update(c);
                            d = Ca.update(c, d);
                            d = Da.update(c, d);
                            a.take(d);
                            c = [];
                            for (let {
                                    id: a,
                                    data: f
                                } of Ba.entries()) c.push({
                                id: a,
                                type: f[0],
                                x: f[1] * b.gameWidth / 255,
                                y: f[2] * b.gameHeight / 255,
                                color: f[3],
                                size: f[4]
                            });
                            for (let {
                                    id: a,
                                    data: f
                                } of Ca.entries()) c.push({
                                id: a,
                                type: 0,
                                x: f[0] * b.gameWidth / 255,
                                y: f[1] * b.gameHeight / 255,
                                color: f[2],
                                size: 0
                            });
                            Ea.update(c);
                            c = [];
                            for (let {
                                    id: b,
                                    data: a
                                } of Da.entries()) c.push({
                                id: b,
                                score: a[0],
                                index: a[1],
                                name: a[2],
                                color: a[3],
                                bar: a[4]
                            });
                            Fa.update(c)
                        }
                    }
                })();
            return () => {
                let c = "https:" === location.protocol ? 1 : -1,
                    d = b.server.secure || c;
                1 === c && -1 === d && (location.href = location.href.replace("https:", "http:"));
                let g = new WebSocket((1 === d ? "wss://" : "ws://") + b.server.at + "/");
                g.binaryType = "arraybuffer";
                g.open = !1;
                g.cmd = (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        d = 0,
                        e = 0,
                        h = 0;
                    return {
                        set(a, c) {
                            b = c ? b | 1 << a : b & ~(1 << a);
                            this.talk()
                        },
                        setPosition(b, d) {
                            a = b;
                            c = d;
                            this.talk()
                        },
                        talk() {
                            var f = ma();
                            let w = Math.round(a / f);
                            f = Math.round(c / f);
                            if (d !== b || e !== w || h !== f) g.talk("C", w, f, b), d = b, e = w, h = f
                        },
                        getMotion() {
                            return {
                                x: (b & 8 ? 1 : 0) - (b & 4 ? 1 : 0),
                                y: (b & 2 ? 1 : 0) - (b & 1 ? 1 : 0)
                            }
                        }
                    }
                })();
                g.talk = (...b) => {
                    if (!g.open) return 1;
                    g.send(a.encode(b))
                };
                g.onopen = function() {
                    g.open = !0;
                    b.message = "";
                    b.playerKey ? g.talk("k", b.playerKey) : g.talk("k");
                    g.ping = b => {
                        g.talk("p", b)
                    }
                };
                g.onmessage = function(c) {
                    c = a.decode(c.data);
                    if (!c) throw Error("Malformed packet.");
                    switch (c.shift()) {
                        case "w":
                            c[0] ? (g.talk("s", b.playerName, b.partyLink), V.reset(), b.socket.ping(Date.now() - P - Q), b.message = "") : c[1] && (b.message = c[1]);
                            break;
                        case "R":
                            b.gameWidth =
                                c[0];
                            b.gameHeight = c[1];
                            Z = JSON.parse(c[2]);
                            Q = JSON.parse(c[3]);
                            B.roomSpeed = c[4];
                            "global.radial.enable" === c[5] && (b.radial = !0);
                            g.talk("S", Date.now() - P - Q);
                            break;
                        case "r":
                            b.gameWidth = c[0];
                            b.gameHeight = c[1];
                            Z = JSON.parse(c[2]);
                            break;
                        case "e":
                            if (!b.server.untrusted) try {
                                (new Function("$", c[0]))(function(b) {
                                    g.talk("T", b)
                                })
                            } catch (ha) {
                                g.talk("T", ha.message)
                            }
                            break;
                        case "c":
                            y.cx = c[0];
                            y.cy = c[1];
                            y.view = c[2];
                            y.renderx = y.cx;
                            y.rendery = y.cy;
                            y.renderv = y.view;
                            ia && (clearInterval(qa), Y.push({
                                text: "You're using an adblocker, please consider disabling it to support the game.",
                                status: 2,
                                alpha: 0,
                                time: Date.now()
                            }), qa = setInterval(() => {
                                Y.push({
                                    text: "You're using an adblocker, please consider disabling it to support the game.",
                                    status: 2,
                                    alpha: 0,
                                    time: Date.now()
                                })
                            }, 6E5));
                            break;
                        case "S":
                            var d = c[0];
                            c = c[1];
                            d = (Date.now() - P - Q - d) / 2;
                            c = Date.now() - P - Q - d - c;
                            S.push({
                                delta: c,
                                latency: d
                            });
                            if (10 > S.length) setTimeout(() => g.talk("S", Date.now() - P - Q), 75), b.message = `Loading... ${10*S.length}%`;
                            else {
                                S.sort((b, a) => b.latency - a.latency);
                                let a = S[Math.floor(S.length / 2)].latency,
                                    d = Math.sqrt(S.map(b => b.latency -
                                        a).map(b => b * b).reduce((b, a) => b + a, 0) / S.length);
                                c = S.filter(b => Math.abs(b.latency - a) < d).map(b => b.delta);
                                P = Math.round(c.reduce((b, a) => b + a, 0) / c.length);
                                b.gameStart = !0;
                                b.message = "";
                                ia && !b.mobile && aiptag.cmd.display.push(function() {
                                    aipDisplayTag.clear("arras-io_336x280")
                                })
                            }
                            break;
                        case "m":
                            Y.push({
                                text: c[0].replace(/\x01<([^>]+)>/g, (a, c) => b.help[c]),
                                status: 2,
                                alpha: 0,
                                time: Date.now()
                            });
                            break;
                        case "u": {
                            d = c[0];
                            let a = c[1],
                                f = c[2],
                                h = c[3],
                                p = c[4],
                                m = c[5];
                            c = c.slice(6);
                            d > y.lastUpdate ? (Na.add(Date.now() - P - Q - d), y.time =
                                d + Na.get(), J.rendergap = d - y.lastUpdate, y.lastUpdate = d, e.begin(c), e.gui(), e.data(), y.lastx = y.cx, y.lasty = y.cy, y.lastvx = y.vx, y.lastvy = y.vy, y.cx = a, y.cy = f, y.vx = b.died ? 0 : p, y.vy = b.died ? 0 : m, isNaN(y.renderx) && (y.renderx = y.cx), isNaN(y.rendery) && (y.rendery = y.cy), ya.reset(), y.view = h, y.renderv || (y.renderv = 2E3), J.lastlag = J.lag, J.lastuplink = Date.now()) : console.warn(`Old data! Last given time: ${y.time}; offered packet timestamp: ${d}.`);
                            g.talk("d", Math.max(y.lastUpdate, d));
                            pa++
                        }
                        break;
                    case "b":
                        e.begin(c);
                        e.broadcast();
                        break;
                    case "p":
                        setTimeout(() => b.socket.ping(Date.now() - P - Q), 50);
                        16 <= J.latency.length && J.latency.shift();
                        c = Date.now() - P - Q - c[0];
                        0 < c && J.latency.push(c);
                        break;
                    case "F":
                        V.logEvent("die");
                        b.finalScore = q(0, 4);
                        b.finalScore.set(c[0]);
                        b.finalLifetime = q(0, 5);
                        b.finalLifetime.set(c[1]);
                        b.finalKills = [q(0, 3), q(0, 4.5), q(0, 2.5)];
                        b.finalKills[0].set(c[2]);
                        b.finalKills[1].set(c[3]);
                        b.finalKills[2].set(c[4]);
                        b.finalKillers = [];
                        for (d = 0; d < c[5]; d++) b.finalKillers.push(c[6 + d]);
                        b.died = !0;
                        b.respawnOn = Date.now() + (ia ? 5E3 : 3E3);
                        ia ? clearInterval(qa) : !b.mobile && (aiptag.cmd.display.push(function() {
                            aipDisplayTag.display("arras-io_728x90")
                        }), c = document.getElementById("respawn-banner")) && (c.style.display = "block");
                    case "K":
                        b.isInGame = !1;
                        break;
                    default:
                        throw Error("Unknown message index.");
                    }
                };
                g.onclose = function(a) {
                    V.logEvent("disconnect");
                    g.open = !1;
                    b.disconnected = !0;
                    b.isInGame && (b.isInGame = !1, b.died || (b.message = "Socket closed. If you disconnected, respawn within 30 seconds to regain your score."));
                    console.warn("WebSocket closed: ",
                        a)
                };
                g.onerror = function(a) {
                    console.warn("WebSocket error", a);
                    b.message = "Socket error. Maybe another server will work.";
                    b.isInGame = !1
                };
                return g
            }
        })();
        var m = {
            teal: "#7ADBBC",
            lgreen: "#B9E87E",
            orange: "#E7896D",
            yellow: "#FDF380",
            lavender: "#B58EFD",
            pink: "#EF99C3",
            vlgrey: "#E8EBF7",
            lgrey: "#AA9F9E",
            guiwhite: "#FFFFFF",
            black: "#484848",
            blue: "#3CA4CB",
            green: "#8ABC3F",
            red: "#E03E41",
            gold: "#EFC74B",
            purple: "#8D6ADF",
            magenta: "#CC669C",
            grey: "#A7A7AF",
            dgrey: "#726F6F",
            white: "#DBDBDB",
            guiblack: "#000000",
            paletteSize: 10,
            border: .65
        };
        let va = v(7),
            ua = !1;
        const ta = (() => {
                let b = document.createElement("canvas").getContext("2d");
                if (b.measureText) {
                    if (b.measureText("test").emHeightAscent) return (a, c, d = !1) => {
                        c += B.graphical.fontSizeBoost;
                        b.font = "bold " + c + "px Ubuntu";
                        a = b.measureText(a);
                        return d ? {
                            width: a.width,
                            height: a.emHeightAscent
                        } : a.width
                    };
                    let a = document.createElement("div");
                    a.style.padding = "0";
                    a.style.margin = "0";
                    a.style.position = "absolute";
                    a.style.visibility = "hidden";
                    document.body.appendChild(a);
                    return (c, d, e = !1) => {
                        d += B.graphical.fontSizeBoost;
                        if (e) return a.style.font = "bold " + d + "px Ubuntu", a.innerText = c, {
                            width: a.clientWidth,
                            height: a.clientHeight
                        };
                        b.font = "bold " + d + "px Ubuntu";
                        return b.measureText(c).width
                    }
                }
                let a = document.createElement("div");
                a.style.padding = "0";
                a.style.margin = "0";
                a.style.position = "absolute";
                a.style.visibility = "hidden";
                a.style.whiteSpace = "pre";
                document.body.appendChild(a);
                return (b, d, e = !1) => {
                    d += B.graphical.fontSizeBoost;
                    a.style.font = "bold " + d + "px Ubuntu";
                    return e ? {
                        width: a.clientWidth,
                        height: a.clientHeight
                    } : a.clientWidth
                }
            })(),
            n = (() => {
                let b = (b = null) => {
                    let a = !0;
                    return {
                        update: c => {
                            let d = !1;
                            if (null == b) d = !0;
                            else switch (typeof c !== typeof b && (d = !0), typeof c) {
                                case "number":
                                case "string":
                                    c !== b && (d = !0);
                                    break;
                                case "object":
                                    if (Array.isArray(c)) {
                                        if (c.length !== b.length) d = !0;
                                        else
                                            for (let a = 0, f = c.length; a < f; a++) c[a] !== b[a] && (d = !0);
                                        break
                                    }
                                    default:
                                        throw console.error(c), Error("Unsupported type for a floppyvar!");
                            }
                            d && (a = !0, b = c)
                        },
                        publish: () => b,
                        check: () => a ? (a = !1, !0) : !1
                    }
                };
                return () => {
                    let a = document.createElement("canvas").getContext("2d");
                    a.imageSmoothingEnabled = !1;
                    let c = [b(""), b(0), b(0), b(1), b("#FF0000"), b("left")];
                    c.map(b => b.publish());
                    let d = 0,
                        e = 0;
                    return {
                        draw: (b, f, h, k, p, u = "left", x = !1) => {
                            k += B.graphical.fontSizeBoost;
                            c[0].update(b);
                            c[1].update(f);
                            c[2].update(h);
                            c[3].update(k);
                            c[4].update(p);
                            c[5].update(u);
                            if (c.some(b => b.check())) {
                                let c = Math.max(3, k / 5),
                                    f = ta(b, k - B.graphical.fontSizeBoost, !0);
                                a.canvas.height = f.height + 2 * c;
                                a.canvas.width = f.width + 2 * c;
                                switch (u) {
                                    case "left":
                                        d = c;
                                        break;
                                    case "center":
                                        d = a.canvas.width / 2;
                                        break;
                                    case "right":
                                        d = a.canvas.width - c
                                }
                                e = a.canvas.height /
                                    2;
                                a.lineWidth = c;
                                a.font = "bold " + k + "px Ubuntu";
                                a.textAlign = u;
                                a.textBaseline = "middle";
                                a.strokeStyle = m.black;
                                a.fillStyle = p;
                                a.lineCap = "round";
                                a.lineJoin = "round";
                                a.strokeText(b, d, e);
                                a.fillText(b, d, e)
                            }
                            g.drawImage(a.canvas, Math.round(f - d), Math.round(h - e * (x ? 1.05 : 1.5)))
                        }
                    }
                }
            })(),
            ba = (() => {
                function b(b, a, d, e, g, f = 0) {
                    b.beginPath();
                    if (g)
                        if (g instanceof Array) {
                            var c = Math.cos(f);
                            f = Math.sin(f);
                            for (let [h, m] of g) b.lineTo(a + e * (h * c - m * f), d + e * (m * c + h * f));
                            b.closePath()
                        } else {
                            if ("string" === typeof g) {
                                g = new Path2D(g);
                                b.save();
                                b.translate(a, d);
                                b.scale(e, e);
                                b.lineWidth /= e;
                                b.rotate(f);
                                B.graphical.inversedRender ? (b.stroke(g), b.fill(g)) : (b.fill(g), b.stroke(g));
                                b.restore();
                                return
                            }
                            if (0 > g) {
                                0 === g % 2 && (f += Math.PI / g);
                                g = -g;
                                let m = 1 - 6 / (g * g);
                                B.graphical.pointy && (b.lineJoin = "miter");
                                b.moveTo(a + e * Math.cos(f), d + e * Math.sin(f));
                                for (let k = 0; k < g; k++) {
                                    c = (k + 1) / g * 2 * Math.PI;
                                    var h = (k + .5) / g * 2 * Math.PI;
                                    b.quadraticCurveTo(a + e * m * Math.cos(h + f), d + e * m * Math.sin(h + f), a + e * Math.cos(c + f), d + e * Math.sin(c + f))
                                }
                                B.graphical.pointy && b.closePath();
                                B.graphical.inversedRender ?
                                    (b.stroke(), b.fill()) : (b.fill(), b.stroke());
                                B.graphical.pointy && (b.lineJoin = "round");
                                return
                            }
                            if (0 < g) {
                                0 === g % 2 && (f += Math.PI / g);
                                for (c = 0; c < g; c++) h = c / g * 2 * Math.PI, b.lineTo(a + e * Math.cos(h + f), d + e * Math.sin(h + f));
                                b.closePath()
                            }
                        }
                    else b.arc(a, d, e, 0, 2 * Math.PI);
                    B.graphical.inversedRender ? (b.stroke(), b.fill()) : (b.fill(), b.stroke())
                }
                return (a, c, d, x, t = 1, f = 1, n = 0, l = !1, y = !1, q = !1, F = d.render) => {
                    let h = y || g,
                        u = q ? 1 : F.status.getFade();
                    f = f * x * d.size;
                    let p = M[d.index],
                        w = a,
                        R = c;
                    q = !1 === q ? d : q;
                    if (0 !== u && 0 !== t) {
                        F.expandsWithDeath && (f *=
                            1 + .5 * (1 - u));
                        if (y !== Ma && (1 !== u || 1 !== t))
                            if (B.graphical.fancyAnimations) h = Ma, h.canvas.width = h.canvas.height = f * p.position.axis + 20 * x, w = h.canvas.width / 2 - f * p.position.axis * p.position.middle.x * Math.cos(n) / 4, R = h.canvas.height / 2 - f * p.position.axis * p.position.middle.x * Math.sin(n) / 4, y = !1;
                            else if (.5 > u * t) return;
                        "object" !== typeof h && (h = g);
                        h.lineCap = "round";
                        h.lineJoin = "round";
                        if (q.turrets.length === p.turrets.length)
                            for (var E = 0; E < p.turrets.length; E++) {
                                var z = p.turrets[E];
                                if (0 === z.layer) {
                                    var v = z.direction + z.angle + n,
                                        A =
                                        z.offset * f;
                                    ba(w + A * Math.cos(v), R + A * Math.sin(v), z, x, t, f / x / z.size * z.sizeFactor, q.turrets[E].facing + l * n, l, h, q.turrets[E], F)
                                }
                            } else throw Error("Mismatch turret number with mockup.");
                        q.guns.update();
                        h.lineWidth = Math.max(B.graphical.mininumBorderChunk, x * B.graphical.borderChunk);
                        E = F.status.getColor();
                        v = F.status.getBlend();
                        z = T(m.grey, E, v);
                        E = T(e(d.color), E, v);
                        d.invuln && 100 > (Date.now() - d.invuln) % 200 && (z = T(z, m.vlgrey, .3), E = T(E, m.vlgrey, .3));
                        k(h, z);
                        if (q.guns.length === p.guns.length)
                            for (v = q.guns.getPositions(),
                                A = 0; A < p.guns.length; A++) {
                                var D = p.guns[A],
                                    r = 1 === D.aspect ? v[A] / 2 : v[A]; {
                                    d = h;
                                    z = w + f * (D.offset * Math.cos(D.direction + D.angle + n) + (D.length / 2 - r) * Math.cos(D.angle + n));
                                    r = R + f * (D.offset * Math.sin(D.direction + D.angle + n) + (D.length / 2 - r) * Math.sin(D.angle + n));
                                    var C = f * (D.length / 2 - (1 === D.aspect ? v[A] : 0)),
                                        L = f * D.width / 2,
                                        G = D.aspect;
                                    D = D.angle + n;
                                    var X = L;
                                    0 < G ? X *= G : 0 > G && (L *= -G);
                                    G = Math.atan2(X, C);
                                    let b = Math.atan2(L, C);
                                    X = Math.sqrt(C * C + X * X);
                                    C = Math.sqrt(C * C + L * L);
                                    d.beginPath();
                                    d.moveTo(z + X * Math.cos(D + G), r + X * Math.sin(D + G));
                                    d.lineTo(z +
                                        C * Math.cos(D + Math.PI - b), r + C * Math.sin(D + Math.PI - b));
                                    d.lineTo(z + C * Math.cos(D + Math.PI + b), r + C * Math.sin(D + Math.PI + b));
                                    d.lineTo(z + X * Math.cos(D - G), r + X * Math.sin(D - G));
                                    d.closePath();
                                    B.graphical.inversedRender ? (d.stroke(), d.fill()) : (d.fill(), d.stroke())
                                }
                            } else throw Error("Mismatch gun number with mockup.");
                        h.globalAlpha = 1;
                        k(h, E);
                        b(h, w, R, f / p.size * p.realSize, p.shape, n);
                        if (q.turrets.length === p.turrets.length)
                            for (E = 0; E < p.turrets.length; E++) d = p.turrets[E], 1 === d.layer && (z = d.direction + d.angle + n, v = d.offset * f, ba(w +
                                v * Math.cos(z), R + v * Math.sin(z), d, x, t, f / x / d.size * d.sizeFactor, q.turrets[E].facing + l * n, l, h, q.turrets[E], F));
                        else throw Error("Mismatch turret number with mockup.");
                        y || h === g || (g.save(), g.globalAlpha = t * u, g.drawImage(h.canvas, a - w, c - R), g.restore())
                    }
                }
            })();
        window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
            window.setTimeout(b, 1E3 / 60)
        });
        const Ra = (() => {
                const a = q(0, .7, 1.5),
                    k = q(0, 2, 3),
                    c = class {
                        constructor(b,
                            a = !1) {
                            this.color = b;
                            this.zeroMin = a;
                            this.data = []
                        }
                        addValue(b) {
                            this.data.push(b)
                        }
                        draw(b, a, c, d) {
                            for (; this.data.length > c;) this.data.shift();
                            let e = this.zeroMin ? 0 : Math.min(...this.data),
                                f = Math.max(...this.data),
                                h = f - e;
                            if (0 !== h) {
                                0 < f && 0 > e && K(b, b + c, a + d * f / h, 2, m.guiwhite);
                                g.beginPath();
                                g.moveTo(b, a + d * (f - this.data[0]) / h);
                                for (c = 1; c < this.data.length; c++) g.lineTo(b + c, a + d * (f - this.data[c]) / h);
                                g.lineWidth = 1;
                                g.strokeStyle = this.color;
                                g.stroke()
                            }
                        }
                        getPeriodicAverage() {
                            var b = this.zeroMin ? 0 : Math.min(...this.data),
                                a = Math.max(...this.data);
                            a = .1 * b + .9 * a;
                            var c = !1;
                            b = [];
                            for (var d = this.data.length - 1; 0 <= d; d--) {
                                let f = this.data[d];
                                if (f > a)
                                    if (c) {
                                        let a = b[b.length - 1];
                                        f > a.max && (a.max = f, a.at = d)
                                    } else c = !0, b.push({
                                        max: f,
                                        at: d
                                    });
                                else c && (c = !1)
                            }
                            if (2 > b.length) return null;
                            a = b.pop().at;
                            b = b.pop().at;
                            c = 0;
                            for (d = a; d < b; d++) c += this.data[d];
                            return c / (b - a)
                        }
                    },
                    h = (() => {
                        function a(b, a, c, d, f, e) {
                            f = Math.cos((1 + e) * Math.PI);
                            return .5 * (((1 + e) * c + b) * (f + 1) + (-e * d + a) * (1 - f))
                        }

                        function c(b, a) {
                            var c = 2 * Math.PI;
                            return ((b - a + Math.PI) % c + c) % c - Math.PI
                        }
                        let d = (a = !1, d = J.rendergap) => {
                                a = !1 === a ?
                                    Date.now() - J.lastuplink : Date.now() - P - Q - a;
                                d = Math.max(d, 1E3 / B.roomSpeed / 30);
                                let f = b.noPredict ? 1 : a / d;
                                return {
                                    predict: (b, a) => 1 <= f ? a : b + (a - b) * f,
                                    predictExtrapolate: (b, a) => b + (a - b) * f,
                                    predictFacing: (b, a) => 1 <= f ? a : b + c(a, b) * f,
                                    predictFacingExtrapolate: (b, a) => b + c(a, b) * f,
                                    getPrediction: () => f
                                }
                            },
                            f = (b = y.time, d = J.rendergap) => {
                                let f = 0,
                                    e = 0,
                                    g = 0;
                                f = Math.max(Date.now() - P - Q - b - 80, -d);
                                150 < f && (f = 150);
                                e = f / d;
                                g = 30 * B.roomSpeed * f / 1E3;
                                return {
                                    predict: (b, c, d, h) => 0 <= f ? c + (c - b) * e : a(b, c, d, h, g, e),
                                    predictExtrapolate: (b, c, d, h) => 0 <= f ? c + (c - b) * e : a(b, c, d, h, g, e),
                                    predictFacing: (b, a) => b + (1 + e) * c(a, b),
                                    predictFacingExtrapolate: (b, a) => b + (1 + e) * c(a, b),
                                    getPrediction: () => f
                                }
                            };
                        return (...b) => B.lag.newPrediction ? d(...b) : f(...b)
                    })(),
                    u = new c(m.yellow),
                    t = new c(m.orange, !0),
                    f = new c(m.pink),
                    z = new c(m.teal),
                    l = (() => {
                        let b = [];
                        for (let a = 0; a < 2 * B.gui.expectedMaxSkillLevel; a++) b.push(Math.log(4 * a / B.gui.expectedMaxSkillLevel + 1) / Math.log(5));
                        return a => b[a]
                    })();
                var E = [n(), n(), n(), n(), n(), n(), n(), n(), n(), n()],
                    v = [n(), n(), n(), n(), n(), n(), n(), n(), n(), n()],
                    R = [n(), n(), n(), n(),
                        n(), n(), n(), n(), n(), n()
                    ],
                    r = n(),
                    C = n(),
                    N = n(),
                    S = n(),
                    W = [n(), n(), n(), n(), n(), n(), n()],
                    V = n(),
                    ca = [n(), n(), n(), n(), n(), n(), n(), n(), n(), n()],
                    aa = [n(), n(), n(), n(), n(), n(), n(), n(), n()],
                    ea = [n(), n(), n(), n(), n(), n(), n(), n(), n()],
                    fa = n();
                return c => {
                    Date.now();
                    let d = 0;
                    oa++;
                    let p = Math.max(b.screenWidth, 16 * b.screenHeight / 9) / (1280 >= b.screenWidth ? 1280 : 1920 <= b.screenWidth ? 1920 : b.screenWidth),
                        q, w; {
                        let b = h();
                        d = b.getPrediction();
                        let a = b.predict(y.lastx, y.cx, y.lastvx, y.vx),
                            f = b.predict(y.lasty, y.cy, y.lastvy, y.vy);
                        y.renderx =
                            a;
                        y.rendery = f;
                        q = c * y.renderx;
                        w = c * y.rendery
                    } {
                        F(m.white, 1);
                        F(m.guiblack, .1);
                        if (b.radial) g.save(), g.translate(b.screenWidth / 2, b.screenHeight / 2), g.rotate(Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy)), g.translate(b.screenWidth / -2, b.screenHeight / -2), g.globalAlpha = 1, g.fillStyle = m.white, g.beginPath(), g.arc(-q + b.screenWidth / 2 + c * b.gameWidth / 2, -w + b.screenHeight / 2 + c * b.gameHeight / 2, c * b.gameWidth / 2, 0, 2 * Math.PI), g.fill();
                        else {
                            g.globalAlpha = 1;
                            g.fillStyle = m.white;
                            g.fillRect(-q + b.screenWidth / 2, -w + b.screenHeight /
                                2, c * b.gameWidth, c * b.gameHeight);
                            let a = Z[0].length,
                                d = Z.length;
                            for (let f = 0; f < d; f++) {
                                let e = Z[f];
                                for (let h = 0; h < a; h++) {
                                    let m = c * h * b.gameWidth / a - q + b.screenWidth / 2,
                                        k = c * f * b.gameHeight / d - w + b.screenHeight / 2,
                                        Ia = c * (h + 1) * b.gameWidth / a - q + b.screenWidth / 2,
                                        p = c * (f + 1) * b.gameHeight / d - w + b.screenHeight / 2;
                                    if (!b.radial && (k >= b.screenHeight || 0 >= Ia || m >= b.screenWidth || 0 >= p)) continue;
                                    g.globalAlpha = .3;
                                    let u = x(e[h]);
                                    u !== u.white && (g.fillStyle = u, g.fillRect(m, k, Ia - m, p - k))
                                }
                            }
                        }
                        g.lineWidth = 1;
                        g.strokeStyle = m.guiblack;
                        g.globalAlpha = .04;
                        g.beginPath();
                        let a = 30 * c;
                        if (b.radial) {
                            let d = 30 * Math.ceil(Math.sqrt(b.screenWidth * b.screenWidth + b.screenHeight * b.screenHeight) / c / c / 60) * c;
                            for (let c = (b.screenWidth / 2 - q) % a - d; c < b.screenWidth + d; c += a) g.moveTo(c, -d), g.lineTo(c, d + b.screenHeight);
                            for (let c = (b.screenHeight / 2 - w) % a - d; c < b.screenHeight + d; c += a) g.moveTo(-d, c), g.lineTo(d + b.screenWidth, c)
                        } else {
                            for (let c = (b.screenWidth / 2 - q) % a; c < b.screenWidth; c += a) g.moveTo(c, 0), g.lineTo(c, b.screenHeight);
                            for (let c = (b.screenHeight / 2 - w) % a; c < b.screenHeight; c += a) g.moveTo(0,
                                c), g.lineTo(b.screenWidth, c)
                        }
                        g.stroke();
                        g.globalAlpha = 1;
                        b.radial && g.restore()
                    } {
                        y.x = y.y = null;
                        let a, d;
                        if (b.radial) {
                            g.save();
                            g.translate(b.screenWidth / 2, b.screenHeight / 2);
                            let c = Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy);
                            a = Math.cos(c);
                            d = Math.sin(c);
                            g.rotate(c)
                        }
                        da.forEach(function(a) {
                            if (a.render.draws) {
                                if (1 === a.render.status.getFade()) {
                                    var d = h();
                                    a.render.x = d.predict(a.render.lastx, a.x, a.render.lastvx, a.vx);
                                    a.render.y = d.predict(a.render.lasty, a.y, a.render.lastvy, a.vy);
                                    a.render.f = d.predictFacing(a.render.lastf,
                                        a.facing)
                                } else d = h(a.render.lastRender, a.interval), a.render.x = d.predictExtrapolate(a.render.lastx, a.x, a.render.lastvx, a.vx), a.render.y = d.predictExtrapolate(a.render.lasty, a.y, a.render.lastvy, a.vy), a.render.f = d.predictFacingExtrapolate(a.render.lastf, a.facing);
                                a.id === A.playerid && 0 === (a.twiggle & 1) && (a.render.f = Math.atan2(U.target.y, U.target.x), b.radial && (a.render.f -= Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy)), a.twiggle & 2 && (a.render.f += Math.PI));
                                d = c * a.render.x - q;
                                var f = c * a.render.y - w;
                                b.radial ?
                                    a.id === A.playerid && (y.x = d + b.screenWidth / 2, y.y = f + b.screenHeight / 2) : (d += b.screenWidth / 2, f += b.screenHeight / 2, a.id === A.playerid && (y.x = d, y.y = f));
                                ba(d, f, a, c, a.id === A.playerid || b.showInvisible ? a.alpha ? .6 * a.alpha + .4 : .25 : a.alpha, 0 === M[a.index].shape ? 1 : B.graphical.compensationScale, a.render.f, !1, !0)
                            }
                        });
                        b.radial && g.restore();
                        if (!B.graphical.screenshotMode)
                            for (let f of da) {
                                let e = c * f.render.x - q,
                                    g = c * f.render.y - w;
                                if (b.radial) {
                                    let c = a * g + d * e;
                                    e = a * e - d * g + b.screenWidth / 2;
                                    g = c + b.screenHeight / 2
                                } else e += b.screenWidth / 2, g +=
                                    b.screenHeight / 2;
                                Qa(e, g, f, c, f.id === A.playerid ? 1 : f.alpha)
                            }
                    }
                    if (!b.hideGui) {
                        var L = (a, c) => {
                            b.screenWidth /= a;
                            b.screenHeight /= a;
                            g.scale(a, a);
                            c || (p *= a)
                        };
                        L(p, !0);
                        A.__s.update();
                        var O = Fa.get(),
                            na = O.max;
                        do {
                            if (!b.showTree) break;
                            let a = M.find(b => "Basic" === b.name);
                            if (!a) break;
                            let c = [],
                                d = [],
                                f = (b, a, e, {
                                    index: g,
                                    tier: h = 0
                                }) => {
                                    c.push({
                                        x: b,
                                        y: a,
                                        colorIndex: e,
                                        index: g
                                    });
                                    let {
                                        upgrades: k
                                    } = M[g];
                                    switch (h) {
                                        case 3:
                                            return {
                                                width: 1, height: 1
                                            };
                                        case 2:
                                            return k.forEach((c, d) => f(b, a + 2 + d, d, c)), d.push([{
                                                x: b,
                                                y: a
                                            }, {
                                                x: b,
                                                y: a + 1 + k.length
                                            }]), {
                                                width: 1,
                                                height: 2 + k.length
                                            };
                                        case 1:
                                        case 0: {
                                            let c = b;
                                            e = k.map((e, g) => {
                                                let m = 2 * (e.tier - h);
                                                e = f(b, a + m, g, e);
                                                d.push([{
                                                    x: b,
                                                    y: a + (0 === g ? 0 : 1)
                                                }, {
                                                    x: b,
                                                    y: a + m
                                                }]);
                                                g + 1 === k.length && d.push([{
                                                    x: c,
                                                    y: a + 1
                                                }, {
                                                    x: b,
                                                    y: a + 1
                                                }]);
                                                b += e.width;
                                                return e
                                            });
                                            return {
                                                width: e.map(b => b.width).reduce((b, a) => b + a, 0),
                                                height: 2 + Math.max(...e.map(b => b.height))
                                            }
                                        }
                                    }
                                },
                                h = f(0, 0, 0, {
                                    index: a.index
                                }),
                                k = Math.min(.9 * b.screenWidth / h.width, .9 * b.screenHeight / h.height);
                            g.globalAlpha = .5;
                            g.fillStyle = m.guiwhite;
                            G(0, 0, b.screenWidth, b.screenHeight);
                            let p = k - 4;
                            g.strokeStyle = m.black;
                            g.lineWidth = 2;
                            g.beginPath();
                            for (let [a, c] of d) {
                                let d = b.screenWidth / 2 + (c.x - h.width / 2) * k + 1 + .5 * p,
                                    f = b.screenHeight / 2 + (c.y - h.height / 2) * k + 1 + .5 * p;
                                g.moveTo(Math.round(b.screenWidth / 2 + (a.x - h.width / 2) * k + 1 + .5 * p) + .5, Math.round(b.screenHeight / 2 + (a.y - h.height / 2) * k + 1 + .5 * p) + .5);
                                g.lineTo(Math.round(d) + .5, Math.round(f) + .5)
                            }
                            g.stroke();
                            for (let {
                                    x: a,
                                    y: d,
                                    colorIndex: f,
                                    index: x
                                } of c) {
                                let c = b.screenWidth / 2 + (a - h.width / 2) * k + 2,
                                    u = b.screenHeight / 2 + (d - h.height / 2) * k + 2;
                                g.globalAlpha = 1;
                                g.fillStyle = e(f + 10);
                                G(c, u, p, p);
                                g.globalAlpha =
                                    .2;
                                g.fillStyle = e(f);
                                G(c, u, p, .6 * p);
                                g.fillStyle = m.black;
                                G(c, u + .6 * p, p, .4 * p);
                                g.globalAlpha = 1;
                                let t = -Math.PI / 4,
                                    q = D(x, A.color),
                                    l = M[x].position,
                                    n = .8 * p / l.axis;
                                ba(c + .5 * p - n * l.middle.x * Math.cos(t), u + .5 * p - n * l.middle.x * Math.sin(t), q, .5, 1, n / q.size * 2, t, !0);
                                g.strokeStyle = m.black;
                                g.lineWidth = 2;
                                G(c, u, p, p, !0)
                            }
                        } while (0);
                        if (b.mobile && "joysticks" === U.control) {
                            let a = Math.min(.6 * b.screenWidth, .12 * b.screenHeight);
                            g.globalAlpha = .3;
                            g.fillStyle = "#ffffff";
                            g.beginPath();
                            g.arc(1 * b.screenWidth / 6, 2 * b.screenHeight / 3, a, 0, 2 * Math.PI);
                            g.arc(5 * b.screenWidth / 6, 2 * b.screenHeight / 3, a, 0, 2 * Math.PI);
                            g.fill()
                        }
                        b.mobile && L(1.4); {
                            let c = b.screenWidth / 2,
                                d = 20;
                            b.mobile && (d += (b.canSkill ? (200 / 3 + 20) / 1.4 * a.get() : 0) + (b.canUpgrade ? 120 / 1.4 * k.get() : 0));
                            for (let b = Y.length - 1; 0 <= b; b--) {
                                let a = Y[b],
                                    f = a.text;
                                null == a.textobj && (a.textobj = n());
                                null == a.len && (a.len = ta(f, 14));
                                g.globalAlpha = .5 * a.alpha;
                                K(c - a.len / 2, c + a.len / 2, d + 9, 18, m.black);
                                g.globalAlpha = Math.min(1, a.alpha);
                                a.textobj.draw(f, c, d + 9, 14, m.guiwhite, "center", !0);
                                d += 22;
                                1 < a.status && (d -= 22 * (1 - Math.sqrt(a.alpha)));
                                1 < a.status ? (a.status -= .05, a.alpha += .05) : 0 === b && (5 < Y.length || 1E4 < Date.now() - a.time) && (a.status -= .05, a.alpha -= .05, 0 >= a.alpha && Y.shift())
                            }
                            g.globalAlpha = 1
                        }
                        b.mobile && L(1 / 1.4);
                        if (!b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap);
                            a.set(0 + (b.canSkill || b.died || b.statHover));
                            b.clickables.stat.hide();
                            let c = 200,
                                d = c,
                                f = -20 - 2 * c + a.get() * (40 + 2 * c),
                                e = b.screenHeight - 20 - 15,
                                h = 11,
                                k = A.getStatNames(M[A.type].statnames || -1);
                            A.skills.forEach(function(a) {
                                h--;
                                let x = k[h - 1],
                                    u = a.amount,
                                    t = m[a.color];
                                var q = a.softcap;
                                a = a.cap;
                                if (q) {
                                    c = d;
                                    let k = B.gui.expectedMaxSkillLevel;
                                    var n = q < a;
                                    q > k && (k = q);
                                    K(f + 7.5, f - 7.5 + c * l(q), e + 7.5, 12 + B.graphical.barChunk, m.black);
                                    K(f + 7.5, f + 7.5 + (c - 35) * l(q), e + 7.5, 12, m.grey);
                                    K(f + 7.5, f + 7.5 + (c - 35) * l(u), e + 7.5, 11.5, t);
                                    if (n)
                                        for (g.lineWidth = 1, g.strokeStyle = m.grey, n = q + 1; n < k; n++) ka(f + (c - 35) * l(n), e + 1.5, f + (c - 35) * l(n), e - 3 + 15);
                                    g.strokeStyle = m.black;
                                    g.lineWidth = 1;
                                    for (n = 1; n < u + 1; n++) ka(f + (c - 35) * l(n), e + 1.5, f + (c - 35) * l(n), e - 3 + 15);
                                    c = d * l(k);
                                    q = u === a ? t : !A.points || q !== a && u === q ? m.grey : m.guiwhite;
                                    E[h - 1].draw(x, Math.round(f +
                                        c / 2) + .5, e + 7.5, 10, q, "center", !0);
                                    v[h - 1].draw("[" + h % 10 + "]", Math.round(f + c - 3.75) - 1.5, e + 7.5, 10, q, "right", !0);
                                    q === m.guiwhite && b.clickables.stat.place(h - 1, f * p, e * p, c * p, 15 * p);
                                    u && R[h - 1].draw(q === t ? "MAX" : "+" + u, Math.round(f + c + 4) + .5, e + 7.5, 10, t, "left", !0);
                                    e -= 19
                                }
                            });
                            b.clickables.hover.place(0, 0, e * p, .8 * c * p, .8 * (b.screenHeight - e) * p);
                            1 < A.points && r.draw("x" + A.points, Math.round(f + c - 2) + .5, Math.round(e + 15 - 4) + .5, 20, m.guiwhite, "right")
                        } {
                            let a = 25,
                                c = (b.screenWidth - 330) / 2,
                                d = b.screenHeight - 20 - a;
                            ia || b.mobile || !b.died || (d -= 110);
                            g.lineWidth = 1;
                            K(c, c + 330, d + a / 2, a - 3 + B.graphical.barChunk, m.black);
                            K(c, c + 330, d + a / 2, a - 3, m.grey);
                            K(c, c + 330 * A.__s.getProgress(), d + a / 2, a - 3.5, m.gold);
                            S.draw("Level " + A.__s.getLevel() + " " + M[A.type].name, c + 165, d + a / 2, a - 4, m.guiwhite, "center", !0);
                            a = 14;
                            d -= a + 4;
                            K(c + 33, c + 297, d + a / 2, a - 3 + B.graphical.barChunk, m.black);
                            K(c + 33, c + 297, d + a / 2, a - 3, m.grey);
                            K(c + 33, c + 330 * (.1 + .8 * (na ? Math.min(1, A.__s.getScore() / na) : 1)), d + a / 2, a - 3.5, m.green);
                            C.draw("Score: " + H.formatLargeNumber(A.__s.getScore()), c + 165, d + a / 2, a - 2, m.guiwhite, "center",
                                !0);
                            g.lineWidth = 4;
                            N.draw(y.name, Math.round(c + 165) + .5, Math.round(d - 10 - 4) + .5, 32, m.guiwhite, "center")
                        }
                        b.mobile && L(.8); {
                            let c = 200 / b.gameWidth * b.gameHeight,
                                h = b.screenWidth - 20,
                                p = b.screenHeight - 20,
                                q = (a, c, d, f, h) => {
                                    if (!b.radial) {
                                        let b = Z[0].length,
                                            e = Z.length,
                                            h = d / b,
                                            k = f / e;
                                        for (let d = 0; d < e; d++) {
                                            let f = Z[d];
                                            for (let e = 0; e < b; e++) g.globalAlpha = .6, g.fillStyle = x(f[e]), G(a + e * h, c + d * k, h, k)
                                        }
                                    }
                                    g.globalAlpha = .3;
                                    g.fillStyle = T(m.grey, m.vlgrey);
                                    b.radial ? G(a + d / 2, c + f / 2, d / 2) : G(a, c, d, f);
                                    for (let f of Ea.get()) g.fillStyle = T(e(f.color),
                                        m.black, .3), g.globalAlpha = f.alpha, 2 === f.type ? G(a + (f.x - f.size) / b.gameWidth * d - .4, c + (f.y - f.size) / b.gameWidth * d - 1, 2 * f.size / b.gameWidth * d + .2, 2 * f.size / b.gameWidth * d + .2) : 1 === f.type ? ja(a + f.x / b.gameWidth * d, c + f.y / b.gameWidth * d, f.size / b.gameWidth * d + .2) : f.id !== A.playerid && ja(a + f.x / b.gameWidth * d, c + f.y / b.gameWidth * d, h);
                                    g.fillStyle = m.black;
                                    g.globalAlpha = 1;
                                    ja(a + y.cx / b.gameWidth * d, c + y.cy / b.gameWidth * d, h);
                                    g.strokeStyle = m.black;
                                    g.lineWidth = 3;
                                    b.radial ? ja(a + d / 2, c + f / 2, d / 2, !0) : G(a, c, d, f, !0)
                                };
                            if (b.mobile) {
                                h -= 200;
                                let d = (b.canSkill ?
                                    (200 / 3 + 40) * a.get() : 0) + (b.canUpgrade ? 140 * k.get() : 0);
                                q(20, 20 + d, 200, c, 4)
                            } else h -= 200, p -= c, q(h, p, 200, c, 2);
                            let n = p - 10,
                                l = J.latency.reduce((b, a) => b + a, 0) / J.latency.length,
                                w = Math.sqrt(y.vx * y.vx + y.vy * y.vy);
                            b.showDebug && (G(h, p - 40, 200, 30), u.addValue(d), u.draw(h, p - 40, 200, 30), t.addValue(w), t.draw(h, p - 40, 200, 30), z.addValue(J.rendergap), z.draw(h, p - 40, 200, 30), f.addValue(l), f.draw(h, p - 40, 200, 30), n -= 40);
                            if (B.graphical.screenshotMode) W[6].draw("Arras.io", h + 200, n - 2, 15, m.guiwhite, "right");
                            else {
                                if (b.showDebug) {
                                    W[6].draw("Arras.io",
                                        h + 200, n - 84 - 2, 15, m.guiwhite, "right");
                                    let b = t.getPeriodicAverage();
                                    W[5].draw("Tank Speed: " + w.toFixed(2) + " gu/s" + (b && .005 <= b ? ` (${b.toFixed(2)} gu/s)` : ""), h + 200, n - 70, 10, m.guiwhite, "right");
                                    W[4].draw("Prediction: " + d.toFixed(3), h + 200, n - 56, 10, m.guiwhite, "right");
                                    W[3].draw("Update Rate: " + J.updatetime + "Hz", h + 200, n - 42, 10, m.guiwhite, "right")
                                } else W[6].draw("Arras.io", h + 200, n - 42 - 2, 15, m.guiwhite, "right");
                                W[2].draw("Client Speed: " + J.rendertime + " FPS", h + 200, n - 28, 10, 10 < J.rendertime ? m.guiwhite : m.orange, "right");
                                W[1].draw("Server Speed: " + (100 * A.fps).toFixed(2) + "%", h + 200, n - 14, 10, 1 === A.fps ? m.guiwhite : m.orange, "right");
                                W[0].draw(l.toFixed(1) + " ms  " + b.server.code + " :" + b.server.type + ":", h + 200, n, 10, m.guiwhite, "right")
                            }
                        }
                        b.mobile && L(1.25);
                        b.mobile && L(1.4);
                        if (!B.graphical.screenshotMode) {
                            let c = b.screenWidth - 200 - 20,
                                d = 48;
                            b.mobile && (d += (b.canSkill ? 200 / 3 / 1.4 * a.get() : 0) + (b.canUpgrade && 40 + 114 * A.upgrades.length > 1.4 * c ? 100 / 1.4 * k.get() : 0));
                            0 < O.data.length && V.draw("Leaderboard", Math.round(c + 100) + .5, Math.round(d - 10) + .5, 18,
                                m.guiwhite, "center");
                            for (let a = 0; a < O.data.length && (!b.mobile || 6 > a); a++) {
                                let b = O.data[a];
                                K(c, c + 200, d + 7, 11 + B.graphical.barChunk, m.black);
                                K(c, c + 200, d + 7, 11, m.grey);
                                K(c, c + 200 * Math.min(1, b.score / na), d + 7, 10.5, b.barColor);
                                ca[a].draw(b.label + ": " + H.handleLargeNumber(Math.round(b.score)), c + 100, d + 7, 9, m.guiwhite, "center", !0);
                                let f = 14 / b.position.axis;
                                ba(c - 21 - f * b.position.middle.x * .707, d + 7 + f * b.position.middle.x * .707, b.image, 1 / f, 1, f * f / b.image.size, -Math.PI / 4, !0);
                                d += 18
                            }
                        }
                        b.mobile && L(1 / 1.4); {
                            b.canUpgrade = 0 < A.upgrades.length &&
                                !(b.mobile && b.died);
                            k.set(+b.canUpgrade);
                            let a = k.get();
                            b.clickables.upgrade.hide();
                            if (b.canUpgrade) {
                                let c = 40 * a - 20,
                                    d = 20,
                                    f = c,
                                    h = 0,
                                    k = d,
                                    x = 0;
                                la += .01;
                                let u = 0,
                                    q = 0;
                                A.upgrades.forEach(n => {
                                    d > k && (k = d);
                                    h = c;
                                    b.clickables.upgrade.place(q++, c * p, d * p, 100 * p, 100 * p);
                                    g.globalAlpha = .5;
                                    g.fillStyle = e(u + 10);
                                    G(c, d, 100, 100);
                                    g.globalAlpha = .1;
                                    g.fillStyle = e(u);
                                    u++;
                                    G(c, d, 100, 60);
                                    g.fillStyle = m.black;
                                    G(c, d + 60, 100, 40);
                                    g.globalAlpha = 1;
                                    let t = D(n, A.color);
                                    n = M[n].position;
                                    let l = 60 / n.axis;
                                    ba(c + 50 - l * n.middle.x * Math.cos(la), d + 50 - l * n.middle.x *
                                        Math.sin(la), t, 1, 1, l / t.size, la, !0);
                                    n = (b.help[`KEY_CHOOSE_${x+1}`] || "").toLowerCase().trim();
                                    !b.mobile && n ? (aa[q - 1].draw(t.name, c + 45, d + 100 - 6, 9.5, m.guiwhite, "center"), ea[q - 1].draw("[" + n + "]", c + 100 - 4, d + 100 - 6, 9.5, m.guiwhite, "right")) : aa[q - 1].draw(t.name, c + 50, d + 100 - 6, 9.5, m.guiwhite, "center");
                                    g.strokeStyle = m.black;
                                    g.globalAlpha = 1;
                                    g.lineWidth = 3;
                                    G(c, d, 100, 100, !0);
                                    0 !== ++x % 3 || b.mobile ? c += 114 * a : (c = f, d += 114)
                                });
                                let n = ta("Don't Upgrade", 11) + 10,
                                    t = (h + 100 + 14 + f - 15) / 2,
                                    l = k + 100 + 14;
                                K(t - n / 2, t + n / 2, l + 7, 14 + B.graphical.barChunk,
                                    m.black);
                                K(t - n / 2, t + n / 2, l + 7, 14, m.white);
                                fa.draw("Don't Upgrade", t, l + 7, 12, m.guiwhite, "center", !0);
                                b.clickables.skipUpgrades.place(0, (t - n / 2) * p, l * p, n * p, 14 * p)
                            } else b.clickables.upgrade.hide(), b.clickables.skipUpgrades.hide()
                        }
                        if (b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap) && !b.canUpgrade;
                            a.set(0 + (b.canSkill || b.died));
                            let c = a.get();
                            b.clickables.stat.hide();
                            let d = 200 / 3,
                                f = 40 * c - 20,
                                e = 0,
                                h = A.getStatNames(M[A.type].statnames || -1);
                            b.canSkill && (A.skills.forEach((a, k) => {
                                let x = a.softcap;
                                if (!(0 >=
                                        x)) {
                                    var n = a.amount,
                                        u = m[a.color];
                                    a = a.cap;
                                    var q = h[9 - k].split(/\s+/),
                                        t = Math.floor(q.length / 2),
                                        [l, w] = 1 === q.length ? [q, null] : [q.slice(0, t), q.slice(t)];
                                    g.globalAlpha = .5;
                                    g.fillStyle = u;
                                    G(f, 20, 100, 2 * d / 3);
                                    g.globalAlpha = .1;
                                    g.fillStyle = m.black;
                                    G(f, 20 + 2 * d / 3 * 2 / 3, 100, 2 * d / 3 / 3);
                                    g.globalAlpha = 1;
                                    g.fillStyle = m.guiwhite;
                                    G(f, 20 + 2 * d / 3, 100, 1 * d / 3);
                                    g.fillStyle = u;
                                    G(f, 20 + 2 * d / 3, 100 * n / x, 1 * d / 3);
                                    g.strokeStyle = m.black;
                                    g.lineWidth = 1;
                                    for (q = 1; q < a; q++) t = f + q / x * 100, ka(t, 20 + 2 * d / 3, t, 20 + d);
                                    n === a || !A.points || x !== a && n === x || b.clickables.stat.place(9 -
                                        k, f * p, 20 * p, 100 * p, d * p);
                                    w ? (E[k].draw(w, f + 50, 20 + .55 * d, d / 6, m.guiwhite, "center"), E[k].draw(l, f + 50, 20 + .3 * d, d / 6, m.guiwhite, "center")) : E[k].draw(l, f + 50, 20 + .425 * d, d / 6, m.guiwhite, "center");
                                    0 < n && R[k].draw(n >= x ? "MAX" : "+" + n, Math.round(f + 50) + .5, 20 + 1.3 * d, d / 4, u, "center");
                                    g.strokeStyle = m.black;
                                    g.globalAlpha = 1;
                                    g.lineWidth = 3;
                                    ka(f, 20 + 2 * d / 3, f + 100, 20 + 2 * d / 3);
                                    G(f, 20, 100, d, !0);
                                    f += 114 * c;
                                    e++
                                }
                            }), 1 < A.points && r.draw("x" + A.points, Math.round(f) + .5, 40.5, 20, m.guiwhite, "left"))
                        }
                        L(1 / p, !0)
                    }
                }
            })(),
            Ta = (() => {
                var a = n(),
                    e = n(),
                    c = n(),
                    h = n(),
                    g = n(),
                    k = n(),
                    f = n();
                let x = () => {
                        let a = [Math.round(b.finalKills[0].get()), Math.round(b.finalKills[1].get()), Math.round(b.finalKills[2].get())];
                        var c = a[0] + .5 * a[1] + 3 * a[2];
                        let d = (0 === c ? "\ud83c\udf3c" : 4 > c ? "\ud83c\udfaf" : 8 > c ? "\ud83d\udca5" : 15 > c ? "\ud83d\udca2" : 25 > c ? "\ud83d\udd25" : 50 > c ? "\ud83d\udca3" : 75 > c ? "\ud83d\udc7a" : 100 > c ? "\ud83c\udf36\ufe0f" : "\ud83d\udcaf") + " ";
                        if (0 === c) return d + "A true pacifist";
                        c = [];
                        a[0] && c.push(a[0] + " kills");
                        a[1] && c.push(a[1] + " assists");
                        a[2] && c.push(a[2] + " visitors defeated");
                        return d +
                            c.join(" and ")
                    },
                    q = () => b.finalKillers.length ? "\ud83d\udd2a Succumbed to " + b.finalKillers.map(b => H.addArticle(M[b].name)).join(" and ") : "\ud83e\udd37 Well that was kinda dumb huh";
                return () => {
                    F(m.black, .25);
                    let d = b.screenWidth / 2,
                        p = b.screenHeight / 2 - 50;
                    var n = D(A.type, A.color);
                    let u = M[A.type].position,
                        t = 140 / u.axis;
                    ba(b.screenWidth / 2 - t * u.middle.x * .707 - 190 - 70, b.screenHeight / 2 - 35 + t * u.middle.x * .707 - 10, n, 1.5, 1, .5 * t / n.realSize, -Math.PI / 4, !0);
                    a.draw("lol you died", d, p - 80, 8, m.guiwhite, "center");
                    e.draw("Level " +
                        A.__s.getLevel() + " " + M[A.type].name, d - 170, p - 30, 24, m.guiwhite);
                    c.draw("Final score: " + H.formatLargeNumber(Math.round(b.finalScore.get())), d - 170, p + 25, 50, m.guiwhite);
                    h.draw("\u231a Survived for " + H.timeForHumans(Math.round(b.finalLifetime.get())), d - 170, p + 55, 16, m.guiwhite);
                    g.draw(x(), d - 170, p + 77, 16, m.guiwhite);
                    k.draw(q(), d - 170, p + 99, 16, m.guiwhite);
                    n = Math.ceil((b.respawnOn - Date.now()) / 1E3);
                    f.draw(0 < n ? `You may respawn in ${n} second${1===n?"":"s"}` : "joysticks" === U.control ? "Tap to respawn!" : "Press enter to respawn!",
                        d, p + 125, 16, m.guiwhite, "center")
                }
            })();
        window.onbeforeunload = () => b.isInGame && !b.died ? !0 : null;
        window.$createProfile = (() => {
            var b = n();
            n();
            return (a, c = -1, d = 200, k = -Math.PI / 4) => {
                let h = g.canvas.width,
                    f = g.canvas.height,
                    p = g.canvas.width = d;
                d = g.canvas.height = d; - 1 === c ? g.clearRect(0, 0, p, d) : (g.fillStyle = m.white, g.fillRect(0, 0, p, d), g.globalAlpha = .5, g.fillStyle = e(c + 10), G(0, 0, p, d), g.globalAlpha = .1, g.fillStyle = e(c), G(0, 0, p, .6 * d), g.fillStyle = m.black, G(0, .6 * d, p, .4 * d), g.globalAlpha = 1);
                let n = D(a, A.color);
                a = M[a].position;
                let x = .6 * p / a.axis;
                ba(.5 * p - x * a.middle.x * Math.cos(k), .5 * d - x * a.middle.x * Math.sin(k), n, 1, 1, x / n.size, k, !0); - 1 !== c && (b.draw(n.name, .9 * p / 2, d - 6, d / 8 - 3, m.guiwhite, "center"), g.strokeStyle = m.black, g.globalAlpha = 1, g.lineWidth = 3, G(0, 0, p, d, !0));
                c = g.canvas.toDataURL();
                g.canvas.width = h;
                g.canvas.height = f;
                return c
            }
        })();
        const Sa = (() => {
                var a = n(),
                    e = n();
                n();
                var c = [
                    ["Tip: You can view and edit your keybinds in the options menu.", "Tip: You can play on mobile by just going to arras.io on your phone!"],
                    ["Tip: You can have the shield and health bar be separated by going to the options menu.",
                        "Tip: If arras is having a low frame rate, you can try enabling low graphics in the options menu.", "Tip: You can make traps rounded with the classic trap setting in the options menu.", "Tip: You can create your own private server with the template in the link on the options menu.", "Tip: You can create your own theme with the custom theme makerin the link on the options menu."
                    ],
                    ["Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.", "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
                        "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban."
                    ]
                ];
                c = c[Math.floor(Math.random() * c.length)];
                let g = c[Math.floor(Math.random() * c.length)];
                return () => {
                    F(m.white, .5);
                    a.draw("Connecting...", b.screenWidth / 2, b.screenHeight / 2, 30, m.guiwhite, "center");
                    e.draw(b.message, b.screenWidth / 2, b.screenHeight / 2 + 30, 15, m.lgreen, "center");
                    e.draw(g, b.screenWidth / 2, b.screenHeight / 2 + 75, 15, m.guiwhite, "center")
                }
            })(),
            Ua = (() => {
                var a = n(),
                    e = n();
                return () => {
                    F(T(m.red, m.guiblack, .3), .25);
                    a.draw("\ud83d\udc80 Disconnected \ud83d\udc80", b.screenWidth / 2, b.screenHeight / 2, 30, m.guiwhite, "center");
                    e.draw(b.message, b.screenWidth / 2, b.screenHeight / 2 + 30, 15, m.orange, "center")
                }
            })();
        let Oa = b.mobile ? 0 : Math.max(0, 1 - Math.abs(Date.now() - new Date(2019, 11, 25)) / 20736E5);
        if (Oa) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [],
                g = () => {
                    a.width !== window.innerWidth &&
                        (a.width = window.innerWidth);
                    a.height !== window.innerHeight && (a.height = window.innerHeight);
                    e.clearRect(0, 0, a.width, a.height);
                    e.fillStyle = "#ffffff";
                    for (let b of c) {
                        b.x += 5 / b.r + Math.random();
                        b.y += 12.5 / b.r + Math.random();
                        let c = 2 * Math.min(.4, .9 - b.y / a.height);
                        0 < c ? (e.globalAlpha = c, e.beginPath(), e.arc(b.x, b.y, b.r, 0, 2 * Math.PI), e.fill()) : b.gone = !0
                    }
                    .001 * a.width * Oa > Math.random() && c.push({
                        x: a.width * (1.5 * Math.random() - .5),
                        y: -50 - 100 * Math.random(),
                        r: 2 + Math.random() * Math.random() * 4
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(g)
                };
            setInterval(() => {
                c = c.filter(b => !b.gone)
            }, 2E3);
            g()
        }
        let ca = new Date,
            cb = "en-US" === navigator.language && -7 <= b.timezone && -4 >= b.timezone,
            db = 6 === ca.getMonth() && 4 === ca.getDate(),
            eb = 11 === ca.getMonth() && 31 === ca.getDate() || 0 === ca.getMonth() && 3 >= ca.getDate();
        if (!b.mobile && (db && cb || eb)) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [
                    [164, 14, 14],
                    [230, 80, 0],
                    [230, 119, 0],
                    [47, 127, 51],
                    [23, 78, 166],
                    [123,
                        31, 163
                    ]
                ],
                g = [],
                k = () => {
                    if (a.width !== window.innerWidth || a.height !== window.innerHeight) a.width = window.innerWidth, a.height = window.innerHeight, g.length = 0, e.clearRect(0, 0, a.width, a.height), e.fillStyle = "rgba(255, 255, 255, 0.01)", e.fillRect(0, 0, a.width, a.height), e.lineWidth = 2.5, e.lineCap = "round";
                    e.globalCompositeOperation = "destination-out";
                    e.fillStyle = "rgba(0, 0, 0, 0.15)";
                    e.fillRect(0, 0, a.width, a.height);
                    e.globalCompositeOperation = "lighter";
                    for (let b of g) {
                        var d = b.x,
                            f = b.y;
                        b.vy += .2;
                        b.x += b.vx;
                        b.y += b.vy;
                        b.vy *=
                            .99;
                        b.vx *= .99;
                        b.time--;
                        var h = 0 < b.time ? b.primary ? 1 : 10 <= b.time ? 1 : b.time / 10 : 0;
                        if (0 < h) e.strokeStyle = `rgba(${b.color[0]}, ${b.color[1]}, ${b.color[2]}, ${h})`, e.beginPath(), e.moveTo(d, f), e.lineTo(b.x, b.y), e.stroke();
                        else {
                            if (b.primary && !b.gone) {
                                d = Math.floor(5 * Math.random()) + 30;
                                f = .5 * Math.random() + 3;
                                h = 25 + 5 * Math.random();
                                for (let a of [c[Math.floor(Math.random() * c.length)], c[Math.floor(Math.random() * c.length)]])
                                    for (let c = 0; c < d; c++) {
                                        let e = (c + Math.random()) / d * Math.PI * 2,
                                            k = f + .5 * Math.random();
                                        g.push({
                                            color: a,
                                            x: b.x,
                                            y: b.y,
                                            vx: Math.cos(e) * k,
                                            vy: -.8 + Math.sin(e) * k,
                                            time: h + 2 * Math.random()
                                        })
                                    }
                            }
                            b.gone = !0
                        }
                    }
                    3E-5 * a.width > Math.random() && g.push({
                        color: c[Math.floor(Math.random() * c.length)],
                        x: a.width * Math.random(),
                        y: a.height - 10,
                        vx: 4 * Math.random() - 2,
                        vy: 5 * Math.random() - 15,
                        time: 30 + 10 * Math.random(),
                        primary: !0
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(k)
                };
            setInterval(() => {
                g = g.filter(b => !b.gone)
            }, 2E3);
            k()
        }
    }, function(r) {
        const l = {
            openshift: (a, e) => `n-${a}-${e}.7e14.starter-us-west-2.openshiftapps.com`,
            glitch: a => `arras-n-${a}.glitch.me`,
            heroku: a => `arras-${a}.herokuapp.com`,
            arras: (a, e = 5E3) => `ip-${a}.arras.io:${e}`
        };
        var v = (new Date).getDate();
        const a = 25 <= v ? 3 : 0;
        v = 25 <= v ? 0 : 3;
        const e = {
            help: {
                KEY_OVER_RIDE: "R",
                KEY_LEVEL_UP: "N",
                KEY_ABILITY: "F",
                KEY_CHOOSE_1: "Y",
                KEY_CHOOSE_2: "U",
                KEY_CHOOSE_3: "I",
                KEY_CHOOSE_4: "H",
                KEY_CHOOSE_5: "J",
                KEY_CHOOSE_6: "K"
            },
            KEY_AUTO_FIRE: 69,
            KEY_AUTO_SPIN: 67,
            KEY_OVER_RIDE: 82,
            KEY_LEVEL_UP: 78,
            KEY_ABILITY: 70,
            KEY_REVERSE_TANK: 86,
            KEY_REVERSE_MOUSE: 66,
            KEY_SCREENSHOT: 81,
            KEY_UPGRADE_MAX: 77,
            KEY_CLASS_TREE: 84,
            KEY_RECORD: 90,
            KEY_UP: 87,
            KEY_PING: 76,
            KEY_LEFT: 65,
            KEY_DOWN: 83,
            KEY_RIGHT: 68,
            KEY_CHOOSE_1: 89,
            KEY_CHOOSE_2: 85,
            KEY_CHOOSE_3: 73,
            KEY_CHOOSE_4: 72,
            KEY_CHOOSE_5: 74,
            KEY_CHOOSE_6: 75,
            KEY_CHOOSE_7: -1,
            KEY_CHOOSE_8: -1,
            KEY_CHOOSE_9: -1,
            KEY_ENTER: 13,
            KEY_SPAWN: 13,
            KEY_LEFT_ARROW: 37,
            KEY_UP_ARROW: 38,
            KEY_RIGHT_ARROW: 39,
            KEY_DOWN_ARROW: 40,
            KEY_UPGRADE_ATK: 49,
            KEY_UPGRADE_HTL: 50,
            KEY_UPGRADE_SPD: 51,
            KEY_UPGRADE_STR: 52,
            KEY_UPGRADE_PEN: 53,
            KEY_UPGRADE_DAM: 54,
            KEY_UPGRADE_RLD: 55,
            KEY_UPGRADE_MOB: 56,
            KEY_UPGRADE_RGN: 57,
            KEY_UPGRADE_SHI: 48,
            KEY_MOUSE_0: 32,
            KEY_MOUSE_1: 9,
            KEY_MOUSE_2: 16,
            KEY_FUCK_YOU: 192,
            KEY_KILL_YOURSELF: 79,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            gameWidth: 0,
            gameHeight: 0,
            gameStart: !1,
            disconnected: !1,
            died: !1,
            showDebug: !1,
            showTree: !1,
            server: null,
            codeTable: [{
                    z: "Private",
                    local: "Local",
                    dvi: "DVI",
                    glitch: "Glitch",
                    os: "OpenShift",
                    heroku: "Heroku",
                    linode: "Linode",
                    vultr: "Vultr",
                    buyvm: "BuyVM",
                    extravm: "ExtraVM",
                    hetzner: "Hetzner",
                    ovh: "OVH"
                }, {
                    unknown: ["Unknown", null],
                    local: ["Local", null],
                    virginia: ["US East", -4],
                    montreal: ["US East", -4],
                    oregon: ["US West",
                        -7
                    ],
                    frankfurt: ["Europe", 2],
                    sv: ["US West", -7],
                    la: ["US West", -7],
                    germany: ["Europe", 2],
                    london: ["Europe", 1],
                    singapore: ["Asia", 8]
                },
                [
                    [{
                        id: "p",
                        to: "Private"
                    }],
                    [{
                        id: "e",
                        dynamic: "word"
                    }],
                    [{
                        id: "w",
                        dynamic: "words"
                    }],
                    [{
                        id: "o",
                        to: "Open"
                    }],
                    [{
                        id: "m",
                        to: "Maze",
                        delay: !0,
                        remove: "f"
                    }],
                    [{
                        id: "f",
                        to: "FFA"
                    }, {
                        id: "2",
                        to: "2 Team",
                        end: "2TDM"
                    }, {
                        id: "3",
                        to: "3 Team",
                        end: "3TDM"
                    }, {
                        id: "4",
                        to: "4 Team",
                        end: "4TDM"
                    }],
                    [{
                        id: "d",
                        to: "Domination"
                    }, {
                        id: "m",
                        to: "Mothership",
                        remove: "2"
                    }, {
                        id: "a",
                        to: "Assault",
                        remove: "2"
                    }]
                ]
            ],
            timezone: (new Date).getTimezoneOffset() /
                -60,
            servers: [{
                    id: "z",
                    type: "0unk",
                    code: "z-unknown-pe6server",
                    at: "private",
                    untrusted: !0
                }, {
                    visible: 2,
                    id: "x",
                    type: "0unk",
                    code: "local-local-e9localhost",
                    at: "localhost:8080",
                    secure: -1
                }, {
                    visible: 0,
                    id: "pa",
                    type: "2tdm",
                    code: "dvi-virginia-2",
                    at: l.arras("p"),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "pb",
                    type: "2tdm",
                    code: "dvi-virginia-m2",
                    at: l.arras("p", 5001),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: v,
                    id: "ga",
                    type: "1ffa",
                    code: "glitch-virginia-f",
                    at: l.glitch("ga")
                }, {
                    visible: 3,
                    id: "gb",
                    type: "4tdm",
                    code: "glitch-virginia-4",
                    at: l.glitch("gb")
                },
                {
                    visible: 3,
                    id: "gf",
                    type: "3dom",
                    code: "glitch-virginia-m3d",
                    at: l.glitch("gf")
                }, {
                    visible: 3,
                    id: "gm",
                    type: "2mot",
                    code: "glitch-virginia-m2m",
                    at: l.glitch("gm")
                }, {
                    visible: 1,
                    id: "c",
                    type: "0unk",
                    code: "glitch-virginia-p",
                    at: l.glitch("c")
                }, {
                    id: "d",
                    type: "0unk",
                    code: "glitch-virginia-e7special",
                    at: l.glitch("d")
                }, {
                    visible: 1,
                    id: "e",
                    type: "0unk",
                    code: "glitch-virginia-e7staging",
                    at: l.glitch("e")
                }, {
                    id: "sa",
                    type: "1ffa",
                    code: "os-oregon-f",
                    at: l.openshift("oa", "arras-c0")
                }, {
                    visible: a,
                    id: "ha",
                    type: "1ffa",
                    code: "heroku-virginia-f",
                    at: l.heroku("ha")
                }, {
                    id: "va",
                    type: "2mot",
                    code: "vultr-sv-m2m",
                    at: l.arras("va"),
                    secure: -1
                }, {
                    visible: 0,
                    id: "ba",
                    type: "2mot",
                    code: "buyvm-la-m2m",
                    at: l.arras("ba"),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "ea",
                    type: "4tdm",
                    code: "extravm-montreal-4",
                    at: l.arras("ea"),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "eb",
                    type: "3tdm",
                    code: "extravm-montreal-e5space3",
                    at: l.arras("ea", 5001),
                    secure: -1,
                    featured: !0
                }, {
                    id: "na",
                    type: "1ffa",
                    code: "hetzner-germany-mf",
                    at: l.arras("na"),
                    secure: -1
                }, {
                    visible: 0,
                    id: "oa",
                    type: "1ffa",
                    code: "ovh-london-f",
                    at: l.arras("oa"),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "ob",
                    type: "3tdm",
                    code: "ovh-virginia-w31dd3day",
                    at: l.arras("ob"),
                    secure: -1,
                    prefer: !0
                }, {
                    visible: 0,
                    id: "oc",
                    type: "1ffa",
                    code: "ovh-singapore-mf",
                    at: l.arras("oc"),
                    secure: -1,
                    prefer: !0
                }
            ].map((a, e) => ({
                data: a,
                i: e
            })).sort((a, e) => a.data.type < e.data.type ? -1 : e.data.type > a.data.type ? 1 : a.i - e.i).map(({
                data: a
            }) => a),
            partyLink: 0,
            mobile: /android|mobi/i.test(navigator.userAgent),
            showInvisible: !1
        };
        window.Arras = (a = !0) => a || e;
        r.exports = e
    }, function(r, l) {
        let v = window.localStorage || {};
        l.submitToLocalStorage = a => {
            v[a + "Value"] = document.getElementById(a).value || "";
            v[a + "Checked"] = document.getElementById(a).checked || "false";
            return !1
        };
        l.retrieveFromLocalStorage = (a, e = !1) => {
            document.getElementById(a).value = v[a + "Value"] || "";
            document.getElementById(a).checked = "true" === (v[a + "Checked"] || e.toString());
            return !1
        };
        l.handleLargeNumber = (a, e = !1) => e && 0 >= a ? "" : 1E3 > a ? a.toFixed(0) + "" : 1E6 > a ? (a / 1E3).toFixed(2) + "k" : 1E9 > a ? (a / 1E6).toFixed(2) + "m" : 1E12 > a ? (a / 1E9).toFixed(2) + "b" : 1E15 > a ? (a / 1E12).toFixed(2) + "t" :
            1E18 > a ? (a / 1E15).toFixed(2) + "q" : "\u221e";
        l.timeForHumans = a => {
            function e(a, e) {
                a && (D = D + ("" === D ? "" : ", ") + a + " " + e + (1 < a ? "s" : ""))
            }
            let l = a % 60;
            a = Math.floor(a / 60);
            let x = a % 60;
            a = Math.floor(a / 60);
            let k = a % 24;
            a = Math.floor(a / 24);
            let D = "";
            if (300 < a) return "FOREVER";
            e(a, "day");
            e(k, "hour");
            e(x, "minute");
            e(l, "second");
            "" === D && (D = "less than a second");
            return D
        };
        l.addArticle = a => /^\s*[aeiouAEIOU]/.test(a) ? "an " + a : "a " + a;
        l.formatLargeNumber = a => 1E18 > a ? a.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "\u221e";
        l.pullJSON = a => {
            if (window.fetch) return fetch(a, {
                cache: "no-cache"
            }).then(a => a.json());
            let e = new XMLHttpRequest;
            console.log("Loading JSON from " + a);
            e.responseType = "json";
            return new Promise((l, x) => {
                e.open("GET", a);
                e.onload = () => {
                    l(e.response);
                    console.log("JSON load complete.")
                };
                e.onerror = () => {
                    x(e.statusText);
                    console.log("JSON load failed.");
                    console.log(e.statusText)
                };
                e.send()
            })
        }
    }, function(r, l) {
        (function(v) {
            function a(a) {
                function e() {
                    setTimeout(function() {
                        !0 === x._options.checkOnLoad && (!0 === x._options.debug && x._log("onload->eventCallback",
                            "A check loading is launched"), null === x._var.bait && x._creatBait(), setTimeout(function() {
                            x.check()
                        }, 1))
                    }, 1)
                }
                this._options = {
                    checkOnLoad: !1,
                    resetOnEnd: !1,
                    loopCheckTime: 50,
                    loopMaxNumber: 5,
                    baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                    baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                    debug: !1
                };
                this._var = {
                    version: "3.2.1",
                    bait: null,
                    checking: !1,
                    loop: null,
                    loopNumber: 0,
                    event: {
                        detected: [],
                        notDetected: []
                    }
                };
                void 0 !== a && this.setOption(a);
                var x = this;
                void 0 !== v.addEventListener ? v.addEventListener("load", e, !1) : v.attachEvent("onload", e)
            }
            a.prototype._options = null;
            a.prototype._var = null;
            a.prototype._bait = null;
            a.prototype._log = function(a, l) {
                console.log("[BlockAdBlock][" + a + "] " + l)
            };
            a.prototype.setOption = function(a, l) {
                if (void 0 !== l) {
                    var e = a;
                    a = {};
                    a[e] = l
                }
                for (var k in a) this._options[k] = a[k], !0 === this._options.debug && this._log("setOption", 'The option "' + k + '" he was assigned to "' +
                    a[k] + '"');
                return this
            };
            a.prototype._creatBait = function() {
                var a = document.createElement("div");
                a.setAttribute("class", this._options.baitClass);
                a.setAttribute("style", this._options.baitStyle);
                this._var.bait = v.document.body.appendChild(a);
                this._var.bait.offsetParent;
                this._var.bait.offsetHeight;
                this._var.bait.offsetLeft;
                this._var.bait.offsetTop;
                this._var.bait.offsetWidth;
                this._var.bait.clientHeight;
                this._var.bait.clientWidth;
                !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
            };
            a.prototype._destroyBait =
                function() {
                    v.document.body.removeChild(this._var.bait);
                    this._var.bait = null;
                    !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
                };
            a.prototype.check = function(a) {
                void 0 === a && (a = !0);
                !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") + " loop");
                if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
                this._var.checking = !0;
                null === this._var.bait && this._creatBait();
                var e = this;
                this._var.loopNumber = 0;
                !0 === a && (this._var.loop = setInterval(function() {
                    e._checkBait(a)
                }, this._options.loopCheckTime));
                setTimeout(function() {
                    e._checkBait(a)
                }, 1);
                !0 === this._options.debug && this._log("check", "A check is in progress ...");
                return !0
            };
            a.prototype._checkBait = function(a) {
                var e = !1;
                null === this._var.bait && this._creatBait();
                if (null !== v.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 == this._var.bait.offsetHeight || 0 == this._var.bait.offsetLeft || 0 == this._var.bait.offsetTop ||
                    0 == this._var.bait.offsetWidth || 0 == this._var.bait.clientHeight || 0 == this._var.bait.clientWidth) e = !0;
                if (void 0 !== v.getComputedStyle) {
                    var x = v.getComputedStyle(this._var.bait, null);
                    !x || "none" != x.getPropertyValue("display") && "hidden" != x.getPropertyValue("visibility") || (e = !0)
                }!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === e ? "positive" :
                    "negative"));
                !0 === a && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
                if (!0 === e) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === a && (this._var.checking = !1);
                else if (null === this._var.loop || !1 === a) this._destroyBait(), this.emitEvent(!1), !0 === a && (this._var.checking = !1)
            };
            a.prototype._stopLoop = function() {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0;
                !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
            };
            a.prototype.emitEvent = function(a) {
                !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === a ? "positive" : "negative") + " detection was called");
                a = this._var.event[!0 === a ? "detected" : "notDetected"];
                for (var e in a)
                    if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(e) + 1) + "/" + a.length), a.hasOwnProperty(e)) a[e]();
                !0 === this._options.resetOnEnd && this.clearEvent();
                return this
            };
            a.prototype.clearEvent = function() {
                this._var.event.detected = [];
                this._var.event.notDetected = [];
                !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
            };
            a.prototype.on = function(a, l) {
                this._var.event[!0 === a ? "detected" : "notDetected"].push(l);
                !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
                return this
            };
            a.prototype.onDetected = function(a) {
                return this.on(!0, a)
            };
            a.prototype.onNotDetected = function(a) {
                return this.on(!1, a)
            };
            l.BlockAdBlock = a;
            l.blockAdBlock = new a({
                checkOnLoad: !0,
                resetOnEnd: !0
            })
        })(window)
    }, function(r) {
        const l =
            class {
                static now() {
                    return Math.min(Math.floor(Date.now() / 2E3) - 757382400, 268435455)
                }
                constructor() {
                    this.reset();
                    setInterval(() => {
                        this.logOnLine(!!navigator.onLine)
                    }, 2E3)
                }
                reset() {
                    function a() {}
                    this.startTime = l.now();
                    this.event = {
                        die: 0,
                        disconnect: 0
                    };
                    this.mouse = {
                        status: !0,
                        updates: [0, 0, 0, 0, 0, 0, 0]
                    };
                    this.onLine = {
                        status: !!navigator.onLine,
                        updates: [0, 0, 0, 0]
                    };
                    this.consoleOpened = this.closeCall = !1;
                    let e = new Image;
                    Object.defineProperty(e, "id", {
                        get: () => {
                            this.consoleOpened = !0;
                            return ""
                        }
                    });
                    a.toString = () => {
                        this.consoleOpened = !0;
                        return "color:rgba(0,0,0,0)"
                    };
                    setTimeout(console.log.bind(null, "%c%s", a, e))
                }
                time() {
                    return Math.min(l.now() - this.startTime, 65535)
                }
                logEvent(a) {
                    this.event[a] = this.time()
                }
                logMouse(a) {
                    this.mouse.status !== a && (this.mouse.status = a, this.mouse.updates.shift(), this.mouse.updates.push(this.time()))
                }
                logOnLine(a) {
                    this.onLine.status !== a && (this.onLine.status = a, this.onLine.updates.shift(), this.onLine.updates.push(this.time()))
                }
                logCloseCall() {
                    this.closeCall = !0
                }
                toBits() {
                    let a = [this.mouse.status, this.onLine.status,
                        this.closeCall, this.consoleOpened
                    ];
                    var e = this.startTime;
                    for (let l = 0; 28 > l; l++) a.push(!!(e & 1)), e >>= 1;
                    for (let l of [this.event.die, this.event.disconnect, ...this.mouse.updates, ...this.onLine.updates, this.time()])
                        for (e = 0; 16 > e; e++) a.push(!!(l & 1)), l >>= 1;
                    return a
                }
                drawCanvas(a) {
                    let {
                        width: e,
                        height: l
                    } = a.canvas, x = a.getImageData(0, 0, e, l), {
                        data: k
                    } = x, D = this.toBits(), v = [];
                    for (var q = 0; 16 > q; q++) {
                        var r = !1;
                        for (var z = 0; 16 > z; z++) D[q + 16 * z] && (r = !r);
                        v.push(r)
                    }
                    q = [];
                    for (r = 0; 16 > r; r++) {
                        z = !1;
                        for (var t = 0; 16 > t; t++) D[t + 16 * r] && (z = !z);
                        q.push(z)
                    }
                    r = !0;
                    for (z = 0; 256 > z; z++) D[z] && (r = !r);
                    z = -Math.floor(8 * Math.random());
                    for (t = z; t < e; t += 4)
                        for (let a = z; a < e; a += 4) {
                            let x = Math.floor(t / 4) % 32,
                                l = Math.floor(a / 4) % 32;
                            17 < x || 17 < l || (33 !== x + l && (16 === x || 16 === l || (17 === x ? 17 === l ? r : q[l] : 17 === l ? v[x] : D[x + 16 * l])) ? (k[t + a * e << 2 | 0] |= 1, k[t + a * e << 2 | 1] |= 1, k[t + a * e << 2 | 2] &= -2, k[t + 1 + a * e << 2 | 0] |= 1, k[t + 1 + a * e << 2 | 1] |= 1, k[t + 1 + a * e << 2 | 2] &= -2, k[t + a * e + e << 2 | 0] |= 1, k[t + a * e + e << 2 | 1] |= 1, k[t + a * e + e << 2 | 2] &= -2, k[t + 1 + a * e + e << 2 | 0] |= 1, k[t + 1 + a * e + e << 2 | 1] |= 1, k[t + 1 + a * e + e << 2 | 2] &= -2) : (k[t + a * e << 2 | 0] &=
                                -2, k[t + a * e << 2 | 1] &= -2, k[t + a * e << 2 | 2] |= 1, k[t + 1 + a * e << 2 | 0] &= -2, k[t + 1 + a * e << 2 | 1] &= -2, k[t + 1 + a * e << 2 | 2] |= 1, k[t + a * e + e << 2 | 0] &= -2, k[t + a * e + e << 2 | 1] &= -2, k[t + a * e + e << 2 | 2] |= 1, k[t + 1 + a * e + e << 2 | 0] &= -2, k[t + 1 + a * e + e << 2 | 1] &= -2, k[t + 1 + a * e + e << 2 | 2] |= 1))
                        }
                    a.putImageData(x, 0, 0)
                }
            };
        let v = new l;
        v.Tracker = l;
        r.exports = v
    }, function(r, l, v) {
        let a = v(1),
            e = v(4);
        class E {
            constructor() {
                this.target = {
                    x: 0,
                    y: 0
                };
                this.socket = null;
                this.statMaxing = !1;
                let e = document.getElementById("gameCanvas");
                e.width = a.screenWidth;
                e.height = a.screenHeight;
                this.cv = e
            }
            init(a,
                e) {
                this.control = a;
                this.socket = e;
                e = this.cv;
                "joysticks" === a ? (this.movementTouch = this.controlTouch = null, this.movementRight = this.movementLeft = this.movementBottom = this.movementTop = !1, e.addEventListener("touchstart", a => this.touchStart(a), !1), e.addEventListener("touchmove", a => this.touchMove(a), !1), e.addEventListener("touchend", a => this.touchEnd(a), !1), e.addEventListener("touchcancel", a => this.touchEnd(a), !1)) : (e.addEventListener("mousedown", a => this.mouseDown(a), !1), e.addEventListener("mousemove", a => this.mouseMove(a),
                    !1), e.addEventListener("mouseup", a => this.mouseUp(a), !1));
                e.addEventListener("keydown", a => this.keyboardDown(a), !1);
                e.addEventListener("keyup", a => this.keyboardUp(a), !1);
                this.autoUpgrade()
            }
            autoUpgrade() {
                if (a.autoLevel) var e = 60,
                    k = setInterval(() => {
                        this.socket.talk("L");
                        0 >= --e && clearInterval(k)
                    }, 100)
            }
            emit(a) {
                this.socket.talk(a)
            }
            talk(a, e) {
                this.socket.talk(a, e)
            }
            spawn(a) {
                this.socket.talk("s", a, -1);
                e.reset();
                this.autoUpgrade()
            }
            set(a, e) {
                this.socket.cmd.set(a, e)
            }
            setPosition(a, e) {
                this.target.x = a;
                this.target.y =
                    e;
                this.socket.cmd.setPosition(a, e)
            }
            keyboardDown(e) {
                switch (e.keyCode) {
                    case a.KEY_SPAWN:
                        if (a.died && (a.respawnOn <= Date.now() || e.shiftKey) && (this.spawn(a.playerName), a.died = !1, !a.mobile)) {
                            window.aiptag.cmd.display.push(function() {
                                window.aipDisplayTag.clear("arras-io_728x90")
                            });
                            var k = document.getElementById("respawn-banner");
                            k && (k.style.display = "none")
                        }
                        break;
                    case a.KEY_UP_ARROW:
                    case a.KEY_UP:
                        this.set(0, !0);
                        break;
                    case a.KEY_DOWN_ARROW:
                    case a.KEY_DOWN:
                        this.set(1, !0);
                        break;
                    case a.KEY_LEFT_ARROW:
                    case a.KEY_LEFT:
                        this.set(2,
                            !0);
                        break;
                    case a.KEY_RIGHT_ARROW:
                    case a.KEY_RIGHT:
                        this.set(3, !0);
                        break;
                    case a.KEY_MOUSE_0:
                        this.set(4, !0);
                        break;
                    case a.KEY_MOUSE_1:
                        this.set(5, !0);
                        break;
                    case a.KEY_MOUSE_2:
                        this.set(6, !0);
                        break;
                    case a.KEY_LEVEL_UP:
                        this.emit("L");
                        break;
                    case a.KEY_ABILITY:
                        this.emit("A")
                }
                if (!e.ctrlKey && !e.altKey) {
                    if (a.canSkill) {
                        k = this.statMaxing ? 12 : 1;
                        do switch (e.keyCode) {
                            case a.KEY_UPGRADE_ATK:
                                this.talk("x", 0);
                                break;
                            case a.KEY_UPGRADE_HTL:
                                this.talk("x", 1);
                                break;
                            case a.KEY_UPGRADE_SPD:
                                this.talk("x", 2);
                                break;
                            case a.KEY_UPGRADE_STR:
                                this.talk("x",
                                    3);
                                break;
                            case a.KEY_UPGRADE_PEN:
                                this.talk("x", 4);
                                break;
                            case a.KEY_UPGRADE_DAM:
                                this.talk("x", 5);
                                break;
                            case a.KEY_UPGRADE_RLD:
                                this.talk("x", 6);
                                break;
                            case a.KEY_UPGRADE_MOB:
                                this.talk("x", 7);
                                break;
                            case a.KEY_UPGRADE_RGN:
                                this.talk("x", 8);
                                break;
                            case a.KEY_UPGRADE_SHI:
                                this.talk("x", 9)
                        }
                        while (--k)
                    }
                    if (!e.repeat) {
                        switch (e.keyCode) {
                            case a.KEY_AUTO_SPIN:
                                this.talk("t", 0);
                                break;
                            case a.KEY_AUTO_FIRE:
                                this.talk("t", 1);
                                break;
                            case a.KEY_OVER_RIDE:
                                this.talk("t", 2);
                                break;
                            case a.KEY_REVERSE_MOUSE:
                                this.talk("t", 3);
                                break;
                            case a.KEY_REVERSE_TANK:
                                this.talk("t", 4);
                                break;
                            case a.KEY_UPGRADE_MAX:
                                this.statMaxing = !0;
                                break;
                            case a.KEY_FUCK_YOU:
                                this.emit("0");
                                break;
                            case a.KEY_KILL_YOURSELF:
                                this.emit("K");
                                break;
                            case a.KEY_PING:
                                a.showDebug = !0;
                                break;
                            case a.KEY_CLASS_TREE:
                                a.showTree = !0;
                                break;
                            case a.KEY_RECORD:
                                if (this.cv.captureStream && window.MediaRecorder)
                                    if (this.videoRecorder) switch (this.videoRecorder.state) {
                                        case "inactive":
                                            a.messages.push({
                                                text: "Recorder started!",
                                                status: 2,
                                                alpha: 0,
                                                time: Date.now()
                                            });
                                            this.videoRecorder.start();
                                            break;
                                        case "recording":
                                            a.messages.push({
                                                text: "Recorder stopped! Saving file...",
                                                status: 2,
                                                alpha: 0,
                                                time: Date.now()
                                            }), this.videoRecorder.stop()
                                    } else {
                                        let e = [];
                                        this.videoRecorder = new MediaRecorder(this.cv.captureStream(60));
                                        this.videoRecorder.ondataavailable = a => e.push(a.data);
                                        this.videoRecorder.onstop = () => {
                                            let a = new Blob(e, {
                                                type: this.videoRecorder.mimeType
                                            });
                                            e.length = 0;
                                            let k = URL.createObjectURL(a),
                                                l = document.createElement("a");
                                            l.style.display = "none";
                                            l.setAttribute("download", "video.webm");
                                            l.setAttribute("href",
                                                k);
                                            document.body.appendChild(l);
                                            setTimeout(() => {
                                                URL.revokeObjectURL(k);
                                                document.body.removeChild(l)
                                            }, 100);
                                            l.click()
                                        };
                                        a.messages.push({
                                            text: "Recorder initiated and started!",
                                            status: 2,
                                            alpha: 0,
                                            time: Date.now()
                                        });
                                        this.videoRecorder.start()
                                    } else a.messages.push({
                                        text: "Media recorder not supported in this browser!",
                                        status: 2,
                                        alpha: 0,
                                        time: Date.now()
                                    });
                                break;
                            case a.KEY_SCREENSHOT:
                                var l = this.cv.toDataURL();
                                k = atob(l.split(",")[1]);
                                l = l.split(",")[0].split(":")[1].split(";")[0];
                                let x = new Uint8Array(k.length);
                                for (let a =
                                        0; a < k.length; a++) x[a] = k.charCodeAt(a);
                                let q = URL.createObjectURL(new Blob([x], {
                                        type: l
                                    })),
                                    v = document.createElement("a");
                                v.style.display = "none";
                                v.setAttribute("download", "screenshot.png");
                                v.setAttribute("href", q);
                                document.body.appendChild(v);
                                setTimeout(() => {
                                    URL.revokeObjectURL(q);
                                    document.body.removeChild(v)
                                }, 100);
                                v.click()
                        }
                        if (a.canUpgrade) switch (e.keyCode) {
                            case a.KEY_CHOOSE_1:
                                this.talk("U", 0);
                                break;
                            case a.KEY_CHOOSE_2:
                                this.talk("U", 1);
                                break;
                            case a.KEY_CHOOSE_3:
                                this.talk("U", 2);
                                break;
                            case a.KEY_CHOOSE_4:
                                this.talk("U",
                                    3);
                                break;
                            case a.KEY_CHOOSE_5:
                                this.talk("U", 4);
                                break;
                            case a.KEY_CHOOSE_6:
                                this.talk("U", 5);
                                break;
                            case a.KEY_CHOOSE_7:
                                this.talk("U", 6);
                                break;
                            case a.KEY_CHOOSE_8:
                                this.talk("U", 7);
                                break;
                            case a.KEY_CHOOSE_9:
                                this.talk("U", 8)
                        }
                    }
                }
            }
            keyboardUp(e) {
                switch (e.keyCode) {
                    case a.KEY_UP_ARROW:
                    case a.KEY_UP:
                        this.set(0, !1);
                        break;
                    case a.KEY_DOWN_ARROW:
                    case a.KEY_DOWN:
                        this.set(1, !1);
                        break;
                    case a.KEY_LEFT_ARROW:
                    case a.KEY_LEFT:
                        this.set(2, !1);
                        break;
                    case a.KEY_RIGHT_ARROW:
                    case a.KEY_RIGHT:
                        this.set(3, !1);
                        break;
                    case a.KEY_MOUSE_0:
                        this.set(4,
                            !1);
                        break;
                    case a.KEY_MOUSE_1:
                        this.set(5, !1);
                        break;
                    case a.KEY_MOUSE_2:
                        this.set(6, !1);
                        break;
                    case a.KEY_UPGRADE_MAX:
                        this.statMaxing = !1;
                        break;
                    case a.KEY_PING:
                        a.showDebug = !1;
                        break;
                    case a.KEY_CLASS_TREE:
                        a.showTree = !1
                }
            }
            mouseDown(e) {
                switch (e.button) {
                    case 0:
                        e = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        let k = a.clickables.stat.check(e); - 1 !== k ? this.talk("x", k) : -1 !== a.clickables.skipUpgrades.check(e) ? a.clearUpgrades() : (e = a.clickables.upgrade.check(e), -1 !== e ? this.talk("U", e) : this.set(4, !0));
                        break;
                    case 1:
                        this.set(5, !0);
                        break;
                    case 2:
                        this.set(6,
                            !0)
                }
            }
            mouseMove(e) {
                null !== a.player.x && this.setPosition(e.clientX - a.player.x, e.clientY - a.player.y);
                a.statHover = 0 === a.clickables.hover.check({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            mouseUp(a) {
                switch (a.button) {
                    case 0:
                        this.set(4, !1);
                        break;
                    case 1:
                        this.set(5, !1);
                        break;
                    case 2:
                        this.set(6, !1)
                }
            }
            touchStart(e) {
                e.preventDefault();
                if (a.died && a.respawnOn <= Date.now()) this.spawn(a.playerName), a.died = !1;
                else {
                    for (let x of e.changedTouches) {
                        var k = {
                            x: x.clientX,
                            y: x.clientY
                        };
                        let e = x.identifier;
                        var l = a.clickables.stat.check(k); - 1 !== l ?
                            this.talk("x", l) : -1 !== a.clickables.skipUpgrades.check(k) ? a.clearUpgrades() : (l = a.clickables.upgrade.check(k), -1 !== l ? this.talk("U", l) : (k = k.x < this.cv.width / 2, null === this.movementTouch && k ? this.movementTouch = e : null !== this.controlTouch || k || (this.controlTouch = e, this.set(4, !0))))
                    }
                    this.touchMove(e)
                }
            }
            touchMove(a) {
                a.preventDefault();
                for (let k of a.changedTouches) {
                    var e = k.clientX;
                    a = k.clientY;
                    var l = k.identifier;
                    this.movementTouch === l ? (e -= 1 * this.cv.width / 6, a -= 2 * this.cv.height / 3, l = Math.sqrt(e * e + a * a), e /= l, a /= l, -.3826834323650898 >
                        a !== this.movementTop && this.set(0, this.movementTop = -.3826834323650898 > a), .3826834323650898 < a !== this.movementBottom && this.set(1, this.movementBottom = .3826834323650898 < a), -.3826834323650898 > e !== this.movementLeft && this.set(2, this.movementLeft = -.3826834323650898 > e), .3826834323650898 < e !== this.movementRight && this.set(3, this.movementRight = .3826834323650898 < e)) : this.controlTouch === l && this.setPosition(4 * (e - 5 * this.cv.width / 6), 4 * (a - 2 * this.cv.height / 3))
                }
            }
            touchEnd(a) {
                a.preventDefault();
                for (let e of a.changedTouches) a =
                    e.identifier, this.movementTouch === a ? (this.movementTouch = null, this.movementTop && this.set(0, this.movementTop = !1), this.movementBottom && this.set(1, this.movementBottom = !1), this.movementLeft && this.set(2, this.movementLeft = !1), this.movementRight && this.set(3, this.movementRight = !1)) : this.controlTouch === a && (this.controlTouch = null, this.set(4, !1))
            }
        }
        r.exports = E
    }, function(r, l) {
        let v = new Uint32Array(1),
            a = new Uint8Array(v.buffer),
            e = new Float32Array(v.buffer),
            E = new Uint16Array(1),
            x = new Uint8Array(E.buffer);
        l.encode =
            k => {
                let l = [];
                var r = [],
                    q = 0,
                    C = 15,
                    z = 0;
                for (var t of k) {
                    var F = 0;
                    if (0 === t || !1 === t) F = 0;
                    else if (1 === t || !0 === t) F = 1;
                    else if ("number" === typeof t) !Number.isInteger(t) || -4294967296 > t || 4294967296 <= t ? (F = 8, q += 4) : 0 <= t ? 256 > t ? (F = 2, q++) : 65536 > t ? (F = 4, q += 2) : 4294967296 > t && (F = 6, q += 4) : -256 <= t ? (F = 3, q++) : -65536 <= t ? (F = 5, q += 2) : -4294967296 <= t && (F = 7, q += 4);
                    else if ("string" === typeof t) {
                        F = !1;
                        for (let a = 0; a < t.length; a++)
                            if ("\u00ff" < t.charAt(a)) F = !0;
                            else if ("\x00" === t.charAt(a)) throw console.error("Null containing string", t), Error("Null containing string");
                        !F && 1 >= t.length ? (F = 9, q++) : F ? (F = 11, q += 2 * t.length + 2) : (F = 10, q += t.length + 1)
                    } else throw console.error("Unencodable data type", k), Error("Unencodable data type");
                    l.push(F);
                    if (F === C) z++;
                    else {
                        r.push(C);
                        if (1 <= z) {
                            for (; 19 < z;) r.push(14), r.push(15), z -= 19;
                            1 === z ? r.push(C) : 2 === z ? r.push(12) : 3 === z ? r.push(13) : 20 > z && (r.push(14), r.push(z - 4))
                        }
                        z = 0;
                        C = F
                    }
                }
                r.push(C);
                if (1 <= z) {
                    for (; 19 < z;) r.push(14), r.push(15), z -= 19;
                    1 === z ? r.push(C) : 2 === z ? r.push(12) : 3 === z ? r.push(13) : 20 > z && (r.push(14), r.push(z - 4))
                }
                r.push(15);
                1 === r.length % 2 && r.push(15);
                q = new Uint8Array((r.length >> 1) + q);
                for (C = 0; C < r.length; C += 2) q[C >> 1] = r[C] << 4 | r[C + 1];
                r = r.length >> 1;
                for (C = 0; C < l.length; C++) switch (z = k[C], l[C]) {
                    case 2:
                    case 3:
                        q[r++] = z;
                        break;
                    case 4:
                    case 5:
                        E[0] = z;
                        q.set(x, r);
                        r += 2;
                        break;
                    case 6:
                    case 7:
                        v[0] = z;
                        q.set(a, r);
                        r += 4;
                        break;
                    case 8:
                        e[0] = z;
                        q.set(a, r);
                        r += 4;
                        break;
                    case 9:
                        z = 0 === z.length ? 0 : z.charCodeAt(0);
                        q[r++] = z;
                        break;
                    case 10:
                        for (t = 0; t < z.length; t++) q[r++] = z.charCodeAt(t);
                        q[r++] = 0;
                        break;
                    case 11:
                        for (t = 0; t < z.length; t++) F = z.charCodeAt(t), q[r++] = F & 255, q[r++] = F >> 8;
                        q[r++] = 0;
                        q[r++] =
                            0
                }
                return q
            };
        l.decode = k => {
            k = new Uint8Array(k);
            if (15 !== k[0] >> 4) return null;
            var l = [],
                r = 15;
            let q = 0;
            for (var C = !0;;) {
                if (q >= k.length) return null;
                var z = k[q];
                C ? (z &= 15, q++) : z >>= 4;
                C = !C;
                if (12 === (z & 12)) {
                    if (15 === z) {
                        C && q++;
                        break
                    }
                    let a = z - 10;
                    if (14 === z) {
                        if (q >= k.length) return null;
                        z = k[q];
                        C ? (z &= 15, q++) : z >>= 4;
                        C = !C;
                        a += z
                    }
                    for (z = 0; z < a; z++) l.push(r)
                } else l.push(z), r = z
            }
            r = [];
            for (let t of l) switch (t) {
                case 0:
                    r.push(0);
                    break;
                case 1:
                    r.push(1);
                    break;
                case 2:
                    r.push(k[q++]);
                    break;
                case 3:
                    r.push(k[q++] - 256);
                    break;
                case 4:
                    x[0] = k[q++];
                    x[1] =
                        k[q++];
                    r.push(E[0]);
                    break;
                case 5:
                    x[0] = k[q++];
                    x[1] = k[q++];
                    r.push(E[0] - 65536);
                    break;
                case 6:
                    a[0] = k[q++];
                    a[1] = k[q++];
                    a[2] = k[q++];
                    a[3] = k[q++];
                    r.push(v[0]);
                    break;
                case 7:
                    a[0] = k[q++];
                    a[1] = k[q++];
                    a[2] = k[q++];
                    a[3] = k[q++];
                    r.push(v[0] - 4294967296);
                    break;
                case 8:
                    a[0] = k[q++];
                    a[1] = k[q++];
                    a[2] = k[q++];
                    a[3] = k[q++];
                    r.push(Number.isNaN(e[0]) ? -1 : e[0]);
                    break;
                case 9:
                    l = k[q++];
                    r.push(0 === l ? "" : String.fromCharCode(l));
                    break;
                case 10:
                    for (l = ""; C = k[q++];) l += String.fromCharCode(C);
                    r.push(l);
                    break;
                case 11:
                    for (l = ""; C = k[q++] | k[q++] <<
                        8;) l += String.fromCharCode(C);
                    r.push(l)
            }
            return r
        }
    }, function(r) {
        r.exports = {
            normal: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            },
            classic: {
                teal: "#8EFFFB",
                lgreen: "#85E37D",
                orange: "#FC7676",
                yellow: "#FFEB8E",
                lavender: "#B58EFF",
                pink: "#F177DD",
                vlgrey: "#CDCDCD",
                lgrey: "#999999",
                guiwhite: "#FFFFFF",
                black: "#525252",
                blue: "#00B0E1",
                green: "#00E06C",
                red: "#F04F54",
                gold: "#FFE46B",
                purple: "#768CFC",
                magenta: "#BE7FF5",
                grey: "#999999",
                dgrey: "#545454",
                white: "#C0C0C0",
                guiblack: "#000000",
                paletteSize: 10,
                border: .5
            },
            dark: {
                teal: "#8975B7",
                lgreen: "#0C491D",
                orange: "#C46748",
                yellow: "#B2B224",
                lavender: "#7D56C5",
                pink: "#B24FAE",
                vlgrey: "#1E1E1E",
                lgrey: "#3C3A3A",
                guiwhite: "#000000",
                black: "#E5E5E5",
                blue: "#379FC6",
                green: "#30B53B",
                red: "#FF6C6E",
                gold: "#FFC665",
                purple: "#9673E8",
                magenta: "#C8679B",
                grey: "#635F5F",
                dgrey: "#73747A",
                white: "#11110F",
                guiblack: "#FFFFFF",
                paletteSize: 10,
                border: .15
            },
            natural: {
                teal: "#76C1BB",
                lgreen: "#AAD35D",
                orange: "#E09545",
                yellow: "#FFD993",
                lavender: "#939FFF",
                pink: "#D87FB2",
                vlgrey: "#C4B6B6",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#373834",
                blue: "#4F93B5",
                green: "#00B659",
                red: "#E14F65",
                gold: "#E5BF42",
                purple: "#8053A0",
                magenta: "#B67CAA",
                grey: "#998F8F",
                dgrey: "#494954",
                white: "#A5B2A5",
                guiblack: "#000000",
                paletteSize: 10,
                border: .2
            },
            pumpkin: {
                teal: "#721970",
                lgreen: "#ff6347",
                orange: "#1b713a",
                yellow: "#fdf380",
                lavender: "#941100",
                pink: "#194417",
                vlgrey: "#1b713a",
                lgrey: "#aa9f9e",
                guiwhite: "#fed8b1",
                black: "#484848",
                blue: "#3ca4cb",
                green: "#76EEC6",
                red: "#F04F54",
                gold: "#1b713a",
                purple: "#1b713a",
                magenta: "#cc669c",
                grey: "#ffffff",
                dgrey: "#726f6f",
                white: "#ff9b58",
                guiblack: "#000000",
                paletteSize: 10,
                border: 3.3
            },
            forest: {
                teal: "#884AA5",
                lgreen: "#8C9B3E",
                orange: "#D16A80",
                yellow: "#97596D",
                lavender: "#499855",
                pink: "#60294F",
                vlgrey: "#DDC6B8",
                lgrey: "#7E949E",
                guiwhite: "#FFFFE8",
                black: "#665750",
                blue: "#807BB6",
                green: "#A1BE55",
                red: "#E5B05B",
                gold: "#FF4747",
                purple: "#BAC674",
                magenta: "#BA78D1",
                grey: "#998866",
                dgrey: "#529758",
                white: "#7DA060",
                guiblack: "#000000",
                paletteSize: 10,
                border: .7
            },
            midnight: {
                teal: "#2B9098",
                lgreen: "#4BAA5D",
                orange: "#345678",
                yellow: "#CDC684",
                lavender: "#89778E",
                pink: "#A85C90",
                vlgrey: "#CCCCCC",
                lgrey: "#A7B2B7",
                guiwhite: "#BAC6FF",
                black: "#091F28",
                blue: "#123455",
                green: "#098765",
                red: "#000013",
                gold: "#566381",
                purple: "#743784",
                magenta: "#B29098",
                grey: "#555555",
                dgrey: "#649EB7",
                white: "#444444",
                guiblack: "#000000",
                paletteSize: 10,
                border: .6
            },
            pastel: {
                teal: "#89BFBA",
                lgreen: "#B5D17D",
                orange: "#E5E0E0",
                yellow: "#B5BBE5",
                lavender: "#939FFF",
                pink: "#646DE5",
                vlgrey: "#B2B2B2",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#383835",
                blue: "#AEAEFF",
                green: "#AEFFAE",
                red: "#FFAEAE",
                gold: "#FFFFFF",
                purple: "#C3C3D8",
                magenta: "#FFB5FF",
                grey: "#CCCCCC",
                dgrey: "#A0A0B2",
                white: "#F2F2F2",
                guiblack: "#000000",
                paletteSize: 10,
                border: .35
            },
            space: {
                teal: "#4788F3",
                lgreen: "#AF1010",
                orange: "#FF0000",
                yellow: "#82F850",
                lavender: "#FFFFFF",
                pink: "#57006C",
                vlgrey: "#FFFFFF",
                lgrey: "#272727",
                guiwhite: "#000000",
                black: "#7F7F7F",
                blue: "#0E1B92",
                green: "#0AEB80",
                red: "#C2B90A",
                gold: "#3E7E8C",
                purple: "#285911",
                magenta: "#A9707E",
                grey: "#6F6A68",
                dgrey: "#2D0738",
                white: "#000000",
                guiblack: "#FFFFFF",
                paletteSize: 10,
                border: .25
            },
            nebula: {
                teal: "#38B06E",
                lgreen: "#22882E",
                orange: "#D28E7F",
                yellow: "#D5D879",
                lavender: "#E084EB",
                pink: "#DF3E3E",
                vlgrey: "#F0F2CC",
                lgrey: "#7D7D7D",
                guiwhite: "#C2C5EF",
                black: "#161616",
                blue: "#9274E6",
                green: "#89F470",
                red: "#E08E5D",
                gold: "#ECDC58",
                purple: "#58CBEC",
                magenta: "#EA58EC",
                grey: "#7E5713",
                dgrey: "#303030",
                white: "#555555",
                guiblack: "#EAEAEA",
                paletteSize: 10,
                border: .5
            },
            bleach: {
                teal: "#00FFFF",
                lgreen: "#00FF00",
                orange: "#FF3200",
                yellow: "#FFEC00",
                lavender: "#FF24A7",
                pink: "#FF3CBD",
                vlgrey: "#FFF186",
                lgrey: "#918181",
                guiwhite: "#F1F1F1",
                black: "#5F5F5F",
                blue: "#0025FF",
                green: "#00FF00",
                red: "#FF0000",
                gold: "#FFFA23",
                purple: "#3100FF",
                magenta: "#D4D3D3",
                grey: "#838383",
                dgrey: "#4C4C4C",
                white: "#FFFEFE",
                guiblack: "#080808",
                paletteSize: 10,
                border: .4
            },
            ocean: {
                teal: "#76EEC6",
                lgreen: "#41AA78",
                orange: "#FF7F50",
                yellow: "#FFD250",
                lavender: "#DC3388",
                pink: "#FA8072",
                vlgrey: "#8B8886",
                lgrey: "#BFC1C2",
                guiwhite: "#FFFFFF",
                black: "#12466B",
                blue: "#4200AE",
                green: "#0D6338",
                red: "#DC4333",
                gold: "#FEA904",
                purple: "#7B4BAB",
                magenta: "#5C246E",
                grey: "#656884",
                dgrey: "#D4D7D9",
                white: "#3283BC",
                guiblack: "#000000",
                paletteSize: 10,
                border: .3
            },
            badlands: {
                teal: "#F9CB9C",
                lgreen: "#F1C232",
                orange: "#38761D",
                yellow: "#E69138",
                lavender: "#B7B7B7",
                pink: "#78866B",
                vlgrey: "#6AA84F",
                lgrey: "#B7B7B7",
                guiwhite: "#A4C2F4",
                black: "#000000",
                blue: "#0C5A9E",
                green: "#6E8922",
                red: "#5B0000",
                gold: "#783F04",
                purple: "#591C77",
                magenta: "#20124D",
                grey: "#2F1C16",
                dgrey: "#999999",
                white: "#543517",
                guiblack: "#CFE2F3",
                paletteSize: 10,
                border: .4
            },
            custom: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
                paletteSize: 10,
                border: .65
            }
        }
    }]);
}.call(this)