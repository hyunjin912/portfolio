/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript&plugins=line-numbers */


function TextColor(){

var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            C = {
                manual: u.Prism && u.Prism.manual,
                disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof _ ? new _(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++n
                        }), e.__id
                    },
                    clone: function t(e, r) {
                        var a, n;
                        switch (r = r || {}, C.util.type(e)) {
                            case "Object":
                                if (n = C.util.objId(e), r[n]) return r[n];
                                for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                                return a;
                            case "Array":
                                return n = C.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
                                    a[n] = t(e, r)
                                }), a);
                            default:
                                return e
                        }
                    },
                    getLanguage: function (e) {
                        for (; e && !c.test(e.className);) e = e.parentElement;
                        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (e) {
                            var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                            if (n) {
                                var t = document.getElementsByTagName("script");
                                for (var r in t)
                                    if (t[r].src == n) return t[r]
                            }
                            return null
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    extend: function (e, n) {
                        var t = C.util.clone(C.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function (t, e, n, r) {
                        var a = (r = r || C.languages)[t],
                            i = {};
                        for (var l in a)
                            if (a.hasOwnProperty(l)) {
                                if (l == e)
                                    for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                                n.hasOwnProperty(l) || (i[l] = a[l])
                            } var s = r[t];
                        return r[t] = i, C.languages.DFS(C.languages, function (e, n) {
                            n === s && e != t && (this[e] = i)
                        }), i
                    },
                    DFS: function e(n, t, r, a) {
                        a = a || {};
                        var i = C.util.objId;
                        for (var l in n)
                            if (n.hasOwnProperty(l)) {
                                t.call(n, l, n[l], r || l);
                                var o = n[l],
                                    s = C.util.type(o);
                                "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a))
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    C.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    C.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), C.hooks.run("before-all-elements-highlight", r);
                    for (var a, i = 0; a = r.elements[i++];) C.highlightElement(a, !0 === n, r.callback)
                },
                highlightElement: function (e, n, t) {
                    var r = C.util.getLanguage(e),
                        a = C.languages[r];
                    e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
                    var i = e.parentElement;
                    i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
                    var l = {
                        element: e,
                        language: r,
                        grammar: a,
                        code: e.textContent
                    };

                    function o(e) {
                        l.highlightedCode = e, C.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, C.hooks.run("after-highlight", l), C.hooks.run("complete", l), t && t.call(l.element)
                    }
                    if (C.hooks.run("before-sanity-check", l), !l.code) return C.hooks.run("complete", l), void(t && t.call(l.element));
                    if (C.hooks.run("before-highlight", l), l.grammar)
                        if (n && u.Worker) {
                            var s = new Worker(C.filename);
                            s.onmessage = function (e) {
                                o(e.data)
                            }, s.postMessage(JSON.stringify({
                                language: l.language,
                                code: l.code,
                                immediateClose: !0
                            }))
                        } else o(C.highlight(l.code, l.grammar, l.language));
                    else o(C.util.encode(l.code))
                },
                highlight: function (e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    return C.hooks.run("before-tokenize", r), r.tokens = C.tokenize(r.code, r.grammar), C.hooks.run("after-tokenize", r), _.stringify(C.util.encode(r.tokens), r.language)
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new i;
                    return M(a, a.head, e),
                        function e(n, t, r, a, i, l, o) {
                            for (var s in r)
                                if (r.hasOwnProperty(s) && r[s]) {
                                    var u = r[s];
                                    u = Array.isArray(u) ? u : [u];
                                    for (var c = 0; c < u.length; ++c) {
                                        if (o && o == s + "," + c) return;
                                        var g = u[c],
                                            f = g.inside,
                                            h = !!g.lookbehind,
                                            d = !!g.greedy,
                                            v = 0,
                                            p = g.alias;
                                        if (d && !g.pattern.global) {
                                            var m = g.pattern.toString().match(/[imsuy]*$/)[0];
                                            g.pattern = RegExp(g.pattern.source, m + "g")
                                        }
                                        g = g.pattern || g;
                                        for (var y = a.next, k = i; y !== t.tail; k += y.value.length, y = y.next) {
                                            var b = y.value;
                                            if (t.length > n.length) return;
                                            if (!(b instanceof _)) {
                                                var x = 1;
                                                if (d && y != t.tail.prev) {
                                                    g.lastIndex = k;
                                                    var w = g.exec(n);
                                                    if (!w) break;
                                                    var A = w.index + (h && w[1] ? w[1].length : 0),
                                                        P = w.index + w[0].length,
                                                        S = k;
                                                    for (S += y.value.length; S <= A;) y = y.next, S += y.value.length;
                                                    if (S -= y.value.length, k = S, y.value instanceof _) continue;
                                                    for (var E = y; E !== t.tail && (S < P || "string" == typeof E.value && !E.prev.value.greedy); E = E.next) x++, S += E.value.length;
                                                    x--, b = n.slice(k, S), w.index -= k
                                                } else {
                                                    g.lastIndex = 0;
                                                    var w = g.exec(b)
                                                }
                                                if (w) {
                                                    h && (v = w[1] ? w[1].length : 0);
                                                    var A = w.index + v,
                                                        w = w[0].slice(v),
                                                        P = A + w.length,
                                                        O = b.slice(0, A),
                                                        L = b.slice(P),
                                                        N = y.prev;
                                                    O && (N = M(t, N, O), k += O.length), W(t, N, x);
                                                    var j = new _(s, f ? C.tokenize(w, f) : w, p, w, d);
                                                    if (y = M(t, N, j), L && M(t, y, L), 1 < x && e(n, t, r, y.prev, k, !0, s + "," + c), l) break
                                                } else if (l) break
                                            }
                                        }
                                    }
                                }
                        }(e, a, n, a.head, 0),
                        function (e) {
                            var n = [],
                                t = e.head.next;
                            for (; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = C.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function (e, n) {
                        var t = C.hooks.all[e];
                        if (t && t.length)
                            for (var r, a = 0; r = t[a++];) r(n)
                    }
                },
                Token: _
            };

        function _(e, n, t, r, a) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length, this.greedy = !!a
        }

        function i() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function M(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function W(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r).prev = n, e.length -= a
        }
        if (u.Prism = C, _.stringify = function n(e, t) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    var r = "";
                    return e.forEach(function (e) {
                        r += n(e, t)
                    }), r
                }
                var a = {
                        type: e.type,
                        content: n(e.content, t),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t
                    },
                    i = e.alias;
                i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), C.hooks.run("wrap", a);
                var l = "";
                for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
                return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">"
            }, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
            var n = JSON.parse(e.data),
                t = n.language,
                r = n.code,
                a = n.immediateClose;
            u.postMessage(C.highlight(r, C.languages[t], t)), a && u.close()
        }, !1)), C;
        var e = C.util.currentScript();

        function t() {
            C.manual || C.highlightAll()
        }
        if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) {
            var r = document.readyState;
            "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16)
        }
        return C
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/,
            name: /[^\s<>'"]+/
        }
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, /"|'/]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        n["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
            pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
                return a
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, Prism.languages.insertBefore("markup", "cdata", t)
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function (e) {
    var s = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + s.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + s.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + s.source + ")*?(?=\\s*\\{)"),
        string: {
            pattern: s,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var t = e.languages.markup;
    t && (t.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: t.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: e.languages.css
                }
            },
            alias: "language-css"
        }
    }, t.tag))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
! function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var o = "line-numbers",
            a = /\n(?!$)/g,
            e = Prism.plugins.lineNumbers = {
                getLine: function (e, n) {
                    if ("PRE" === e.tagName && e.classList.contains(o)) {
                        var t = e.querySelector(".line-numbers-rows"),
                            i = parseInt(e.getAttribute("data-start"), 10) || 1,
                            r = i + (t.children.length - 1);
                        n < i && (n = i), r < n && (n = r);
                        var s = n - i;
                        return t.children[s]
                    }
                },
                resize: function (e) {
                    u([e])
                },
                assumeViewportIndependence: !0
            },
            t = function (e) {
                return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
            },
            n = void 0;
        window.addEventListener("resize", function () {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))))
        }), Prism.hooks.add("complete", function (e) {
            if (e.code) {
                var n = e.element,
                    t = n.parentNode;
                if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
                    n.classList.remove(o), t.classList.add(o);
                    var i, r = e.code.match(a),
                        s = r ? r.length + 1 : 1,
                        l = new Array(s + 1).join("<span></span>");
                    (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e)
                }
            }
        }), Prism.hooks.add("line-numbers", function (e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        })
    }

    function u(e) {
        if (0 != (e = e.filter(function (e) {
                var n = t(e)["white-space"];
                return "pre-wrap" === n || "pre-line" === n
            })).length) {
            var n = e.map(function (e) {
                var n = e.querySelector("code"),
                    t = e.querySelector(".line-numbers-rows");
                if (n && t) {
                    var i = e.querySelector(".line-numbers-sizer"),
                        r = n.textContent.split(a);
                    i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
                    var s = i.getBoundingClientRect().height;
                    return i.innerHTML = "", {
                        element: e,
                        lines: r,
                        lineHeights: [],
                        oneLinerHeight: s,
                        sizer: i
                    }
                }
            }).filter(Boolean);
            n.forEach(function (e) {
                var i = e.sizer,
                    n = e.lines,
                    r = e.lineHeights,
                    s = e.oneLinerHeight;
                r[n.length - 1] = void 0, n.forEach(function (e, n) {
                    if (e && 1 < e.length) {
                        var t = i.appendChild(document.createElement("span"));
                        t.style.display = "block", t.textContent = e
                    } else r[n] = s
                })
            }), n.forEach(function (e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }), n.forEach(function (e) {
                var n = e.sizer,
                    t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) {
                    t.children[n].style.height = e + "px"
                })
            })
        }
    }
}();
}