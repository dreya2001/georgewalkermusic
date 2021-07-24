! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 8)
}([function (t, e, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, (function (n, r) {
        "use strict";
        var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat ? function (t) {
                return o.flat.call(t)
            } : function (t) {
                return o.concat.apply([], t)
            },
            u = o.push,
            c = o.indexOf,
            d = {},
            h = d.toString,
            f = d.hasOwnProperty,
            p = f.toString,
            g = p.call(Object),
            m = {},
            v = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            y = function (t) {
                return null != t && t === t.window
            },
            b = n.document,
            w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function C(t, e, n) {
            var i, r, o = (n = n || b).createElement("script");
            if (o.text = t, e)
                for (i in w)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function _(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[h.call(t)] || "object" : typeof t
        }
        var x = function (t, e) {
            return new x.fn.init(t, e)
        };

        function S(t) {
            var e = !!t && "length" in t && t.length,
                n = _(t);
            return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        x.fn = x.prototype = {
            jquery: "3.5.1",
            constructor: x,
            length: 0,
            toArray: function () {
                return a.call(this)
            },
            get: function (t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = x.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return x.each(this, t)
            },
            map: function (t) {
                return this.pushStack(x.map(this, (function (e, n) {
                    return t.call(e, n, e)
                })))
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            even: function () {
                return this.pushStack(x.grep(this, (function (t, e) {
                    return (e + 1) % 2
                })))
            },
            odd: function () {
                return this.pushStack(x.grep(this, (function (t, e) {
                    return e % 2
                })))
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: o.sort,
            splice: o.splice
        }, x.extend = x.fn.extend = function () {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && s !== i && (u && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {}, r = !1, s[e] = x.extend(u, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, x.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== h.call(t)) && (!(e = s(t)) || "function" == typeof (n = f.call(e, "constructor") && e.constructor) && p.call(n) === g)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function (t, e, n) {
                C(t, {
                    nonce: e && e.nonce
                }, n)
            },
            each: function (t, e) {
                var n, i = 0;
                if (S(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (S(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : c.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function (t, e, n) {
                var i, r, o = 0,
                    s = [];
                if (S(t))
                    for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                return l(s)
            },
            guid: 1,
            support: m
        }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = o[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        }));
        var E =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function (t) {
                var e, n, i, r, o, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                    C = t.document,
                    _ = 0,
                    x = 0,
                    S = lt(),
                    E = lt(),
                    T = lt(),
                    k = lt(),
                    O = function (t, e) {
                        return t === e && (d = !0), 0
                    },
                    P = {}.hasOwnProperty,
                    I = [],
                    A = I.pop,
                    D = I.push,
                    L = I.push,
                    $ = I.slice,
                    j = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    H = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    W = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
                    R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                    B = new RegExp(M + "+", "g"),
                    z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    q = new RegExp("^" + M + "*," + M + "*"),
                    F = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    U = new RegExp(M + "|>"),
                    V = new RegExp(R),
                    Q = new RegExp("^" + H + "$"),
                    Y = {
                        ID: new RegExp("^#(" + H + ")"),
                        CLASS: new RegExp("^\\.(" + H + ")"),
                        TAG: new RegExp("^(" + H + "|[*])"),
                        ATTR: new RegExp("^" + W),
                        PSEUDO: new RegExp("^" + R),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /HTML$/i,
                    X = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                    nt = function (t, e) {
                        var n = "0x" + t.slice(1) - 65536;
                        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    rt = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    ot = function () {
                        h()
                    },
                    st = wt((function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    L.apply(I = $.call(C.childNodes), C.childNodes), I[C.childNodes.length].nodeType
                } catch (t) {
                    L = {
                        apply: I.length ? function (t, e) {
                            D.apply(t, $.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }

                function at(t, e, i, r) {
                    var o, a, u, c, d, p, v, y = e && e.ownerDocument,
                        C = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
                    if (!r && (h(e), e = e || f, g)) {
                        if (11 !== C && (d = Z.exec(t)))
                            if (o = d[1]) {
                                if (9 === C) {
                                    if (!(u = e.getElementById(o))) return i;
                                    if (u.id === o) return i.push(u), i
                                } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i
                            } else {
                                if (d[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                                if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(o)), i
                            } if (n.qsa && !k[t + " "] && (!m || !m.test(t)) && (1 !== C || "object" !== e.nodeName.toLowerCase())) {
                            if (v = t, y = e, 1 === C && (U.test(t) || F.test(t))) {
                                for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = w)), a = (p = s(t)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + bt(p[a]);
                                v = p.join(",")
                            }
                            try {
                                return L.apply(i, y.querySelectorAll(v)), i
                            } catch (e) {
                                k(t, !0)
                            } finally {
                                c === w && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(z, "$1"), e, i, r)
                }

                function lt() {
                    var t = [];
                    return function e(n, r) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                }

                function ut(t) {
                    return t[w] = !0, t
                }

                function ct(t) {
                    var e = f.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function dt(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
                }

                function ht(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function ft(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function gt(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function mt(t) {
                    return ut((function (e) {
                        return e = +e, ut((function (n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        }))
                    }))
                }

                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (e in n = at.support = {}, o = at.isXML = function (t) {
                        var e = t.namespaceURI,
                            n = (t.ownerDocument || t).documentElement;
                        return !G.test(e || n && n.nodeName || "HTML")
                    }, h = at.setDocument = function (t) {
                        var e, r, s = t ? t.ownerDocument || t : C;
                        return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), C != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ct((function (t) {
                            return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ct((function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        })), n.getElementsByTagName = ct((function (t) {
                            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ct((function (t) {
                            return p.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                        })), n.getById ? (i.filter.ID = function (t) {
                            var e = t.replace(et, nt);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }, i.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function (t) {
                            var e = t.replace(et, nt);
                            return function (t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }, i.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n, i, r, o = e.getElementById(t);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                    for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var n, i = [],
                                r = 0,
                                o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                        }, v = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ct((function (t) {
                            var e;
                            p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        })), ct((function (t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = f.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct((function (t) {
                            n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", R)
                        })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(p.compareDocumentPosition), b = e || J.test(p.contains) ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, O = e ? function (t, e) {
                            if (t === e) return d = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == C && b(C, t) ? -1 : e == f || e.ownerDocument == C && b(C, e) ? 1 : c ? j(c, t) - j(c, e) : 0 : 4 & i ? -1 : 1)
                        } : function (t, e) {
                            if (t === e) return d = !0, 0;
                            var n, i = 0,
                                r = t.parentNode,
                                o = e.parentNode,
                                s = [t],
                                a = [e];
                            if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : c ? j(c, t) - j(c, e) : 0;
                            if (r === o) return ht(t, e);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? ht(s[i], a[i]) : s[i] == C ? -1 : a[i] == C ? 1 : 0
                        }, f) : f
                    }, at.matches = function (t, e) {
                        return at(t, null, null, e)
                    }, at.matchesSelector = function (t, e) {
                        if (h(t), n.matchesSelector && g && !k[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                            var i = y.call(t, e);
                            if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                        } catch (t) {
                            k(e, !0)
                        }
                        return at(e, f, null, [t]).length > 0
                    }, at.contains = function (t, e) {
                        return (t.ownerDocument || t) != f && h(t), b(t, e)
                    }, at.attr = function (t, e) {
                        (t.ownerDocument || t) != f && h(t);
                        var r = i.attrHandle[e.toLowerCase()],
                            o = r && P.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                    }, at.escape = function (t) {
                        return (t + "").replace(it, rt)
                    }, at.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, at.uniqueSort = function (t) {
                        var e, i = [],
                            r = 0,
                            o = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(O), d) {
                            for (; e = t[o++];) e === t[o] && (r = i.push(o));
                            for (; r--;) t.splice(i[r], 1)
                        }
                        return c = null, t
                    }, r = at.getText = function (t) {
                        var e, n = "",
                            i = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                            } else if (3 === o || 4 === o) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += r(e);
                        return n
                    }, (i = at.selectors = {
                        cacheLength: 50,
                        createPseudo: ut,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var e, n = !t[6] && t[2];
                                return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(et, nt).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (t) {
                                var e = S[t + " "];
                                return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && S(t, (function (t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function (t, e, n) {
                                return function (i) {
                                    var r = at.attr(i, t);
                                    return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (t, e, n, i, r) {
                                var o = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === r ? function (t) {
                                    return !!t.parentNode
                                } : function (e, n, l) {
                                    var u, c, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                        m = e.parentNode,
                                        v = a && e.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (h = e; h = h[g];)
                                                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                p = g = "only" === t && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                            for (b = (f = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                                if (1 === h.nodeType && ++b && h === e) {
                                                    c[t] = [_, f, b];
                                                    break
                                                }
                                        } else if (y && (b = f = (u = (c = (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === _ && u[1]), !1 === b)
                                            for (;
                                                (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [_, b]), h !== e)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function (t, e) {
                                var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function (t, n) {
                                    for (var i, o = r(t, e), s = o.length; s--;) t[i = j(t, o[s])] = !(n[i] = o[s])
                                })) : function (t) {
                                    return r(t, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ut((function (t) {
                                var e = [],
                                    n = [],
                                    i = a(t.replace(z, "$1"));
                                return i[w] ? ut((function (t, e, n, r) {
                                    for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                                })) : function (t, r, o) {
                                    return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                                }
                            })),
                            has: ut((function (t) {
                                return function (e) {
                                    return at(t, e).length > 0
                                }
                            })),
                            contains: ut((function (t) {
                                return t = t.replace(et, nt),
                                    function (e) {
                                        return (e.textContent || r(e)).indexOf(t) > -1
                                    }
                            })),
                            lang: ut((function (t) {
                                return Q.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                    function (e) {
                                        var n;
                                        do {
                                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            })),
                            target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function (t) {
                                return t === p
                            },
                            focus: function (t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: gt(!1),
                            disabled: gt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !i.pseudos.empty(t)
                            },
                            header: function (t) {
                                return K.test(t.nodeName)
                            },
                            input: function (t) {
                                return X.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: mt((function () {
                                return [0]
                            })),
                            last: mt((function (t, e) {
                                return [e - 1]
                            })),
                            eq: mt((function (t, e, n) {
                                return [n < 0 ? n + e : n]
                            })),
                            even: mt((function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            })),
                            odd: mt((function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            })),
                            lt: mt((function (t, e, n) {
                                for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                                return t
                            })),
                            gt: mt((function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            }))
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[e] = ft(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[e] = pt(e);

                function yt() {}

                function bt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function wt(t, e, n) {
                    var i = e.dir,
                        r = e.next,
                        o = r || i,
                        s = n && "parentNode" === o,
                        a = x++;
                    return e.first ? function (e, n, r) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || s) return t(e, n, r);
                        return !1
                    } : function (e, n, l) {
                        var u, c, d, h = [_, a];
                        if (l) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || s)
                                    if (c = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                    else {
                                        if ((u = c[o]) && u[0] === _ && u[1] === a) return h[2] = u[2];
                                        if (c[o] = h, h[2] = t(e, n, l)) return !0
                                    } return !1
                    }
                }

                function Ct(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function _t(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
                    return s
                }

                function xt(t, e, n, i, r, o) {
                    return i && !i[w] && (i = xt(i)), r && !r[w] && (r = xt(r, o)), ut((function (o, s, a, l) {
                        var u, c, d, h = [],
                            f = [],
                            p = s.length,
                            g = o || function (t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                return n
                            }(e || "*", a.nodeType ? [a] : a, []),
                            m = !t || !o && e ? g : _t(g, h, t, a, l),
                            v = n ? r || (o ? t : p || i) ? [] : s : m;
                        if (n && n(m, v, a, l), i)
                            for (u = _t(v, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                    r(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(d = v[c]) && (u = r ? j(o, d) : h[c]) > -1 && (o[u] = !(s[u] = d))
                            }
                        } else v = _t(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
                    }))
                }

                function St(t) {
                    for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = wt((function (t) {
                            return t === e
                        }), a, !0), d = wt((function (t) {
                            return j(e, t) > -1
                        }), a, !0), h = [function (t, n, i) {
                            var r = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                            return e = null, r
                        }]; l < o; l++)
                        if (n = i.relative[t[l].type]) h = [wt(Ct(h), n)];
                        else {
                            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                                return xt(l > 1 && Ct(h), l > 1 && bt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, l < r && St(t.slice(l, r)), r < o && St(t = t.slice(r)), r < o && bt(t))
                            }
                            h.push(n)
                        } return Ct(h)
                }
                return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function (t, e) {
                    var n, r, o, s, a, l, u, c = E[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], u = i.preFilter; a;) {
                        for (s in n && !(r = q.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(z, " ")
                            }), a = a.slice(n.length)), i.filter) !(r = Y[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: s,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
                }, a = at.compile = function (t, e) {
                    var n, r = [],
                        o = [],
                        a = T[t + " "];
                    if (!a) {
                        for (e || (e = s(t)), n = e.length; n--;)(a = St(e[n]))[w] ? r.push(a) : o.push(a);
                        (a = T(t, function (t, e) {
                            var n = e.length > 0,
                                r = t.length > 0,
                                o = function (o, s, a, l, c) {
                                    var d, p, m, v = 0,
                                        y = "0",
                                        b = o && [],
                                        w = [],
                                        C = u,
                                        x = o || r && i.find.TAG("*", c),
                                        S = _ += null == C ? 1 : Math.random() || .1,
                                        E = x.length;
                                    for (c && (u = s == f || s || c); y !== E && null != (d = x[y]); y++) {
                                        if (r && d) {
                                            for (p = 0, s || d.ownerDocument == f || (h(d), a = !g); m = t[p++];)
                                                if (m(d, s || f, a)) {
                                                    l.push(d);
                                                    break
                                                } c && (_ = S)
                                        }
                                        n && ((d = !m && d) && v--, o && b.push(d))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (p = 0; m = e[p++];) m(b, w, s, a);
                                        if (o) {
                                            if (v > 0)
                                                for (; y--;) b[y] || w[y] || (w[y] = A.call(l));
                                            w = _t(w)
                                        }
                                        L.apply(l, w), c && !o && w.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                    }
                                    return c && (_ = S, u = C), b
                                };
                            return n ? ut(o) : o
                        }(o, r))).selector = t
                    }
                    return a
                }, l = at.select = function (t, e, n, r) {
                    var o, l, u, c, d, h = "function" == typeof t && t,
                        f = !r && s(t = h.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                            if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (o = Y.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                            if ((d = i.find[c]) && (r = d(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                                if (l.splice(o, 1), !(t = r.length && bt(l))) return L.apply(n, r), n;
                                break
                            }
                    }
                    return (h || a(t, f))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
                }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ct((function (t) {
                    return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                })), ct((function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || dt("type|href|height|width", (function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                })), n.attributes && ct((function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || dt("value", (function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                })), ct((function (t) {
                    return null == t.getAttribute("disabled")
                })) || dt(N, (function (t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                })), at
            }(n);
        x.find = E, x.expr = E.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = E.uniqueSort, x.text = E.getText, x.isXMLDoc = E.isXML, x.contains = E.contains, x.escapeSelector = E.escape;
        var T = function (t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && x(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            k = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            O = x.expr.match.needsContext;

        function P(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(t, e, n) {
            return v(e) ? x.grep(t, (function (t, i) {
                return !!e.call(t, i, t) !== n
            })) : e.nodeType ? x.grep(t, (function (t) {
                return t === e !== n
            })) : "string" != typeof e ? x.grep(t, (function (t) {
                return c.call(e, t) > -1 !== n
            })) : x.filter(e, t, n)
        }
        x.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, (function (t) {
                return 1 === t.nodeType
            })))
        }, x.fn.extend({
            find: function (t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(x(t).filter((function () {
                    for (e = 0; e < i; e++)
                        if (x.contains(r[e], this)) return !0
                })));
                for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, r[e], n);
                return i > 1 ? x.uniqueSort(n) : n
            },
            filter: function (t) {
                return this.pushStack(A(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(A(this, t || [], !0))
            },
            is: function (t) {
                return !!A(this, "string" == typeof t && O.test(t) ? x(t) : t || [], !1).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || D, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof x ? e[0] : e, x.merge(this, x.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), I.test(i[1]) && x.isPlainObject(e))
                        for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this)
        }).prototype = x.fn, D = x(b);
        var $ = /^(?:parents|prev(?:Until|All))/,
            j = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        x.fn.extend({
            has: function (t) {
                var e = x(t, this),
                    n = e.length;
                return this.filter((function () {
                    for (var t = 0; t < n; t++)
                        if (x.contains(this, e[t])) return !0
                }))
            },
            closest: function (t, e) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof t && x(t);
                if (!O.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? c.call(x(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), x.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return T(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return T(t, "parentNode", n)
            },
            next: function (t) {
                return N(t, "nextSibling")
            },
            prev: function (t) {
                return N(t, "previousSibling")
            },
            nextAll: function (t) {
                return T(t, "nextSibling")
            },
            prevAll: function (t) {
                return T(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return T(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return T(t, "previousSibling", n)
            },
            siblings: function (t) {
                return k((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return k(t.firstChild)
            },
            contents: function (t) {
                return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (P(t, "template") && (t = t.content || t), x.merge([], t.childNodes))
            }
        }, (function (t, e) {
            x.fn[t] = function (n, i) {
                var r = x.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (j[t] || x.uniqueSort(r), $.test(t) && r.reverse()), this.pushStack(r)
            }
        }));
        var M = /[^\x20\t\r\n\f]+/g;

        function H(t) {
            return t
        }

        function W(t) {
            throw t
        }

        function R(t, e, n, i) {
            var r;
            try {
                t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        x.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return x.each(t.match(M) || [], (function (t, n) {
                    e[n] = !0
                })), e
            }(t) : x.extend({}, t);
            var e, n, i, r, o = [],
                s = [],
                a = -1,
                l = function () {
                    for (r = r || t.once, i = e = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                },
                u = {
                    add: function () {
                        return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                            x.each(n, (function (n, i) {
                                v(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== _(i) && e(i)
                            }))
                        }(arguments), n && !e && l()), this
                    },
                    remove: function () {
                        return x.each(arguments, (function (t, e) {
                            for (var n;
                                (n = x.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function (t) {
                        return t ? x.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []), this
                    },
                    disable: function () {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return r = s = [], n || e || (o = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, x.extend({
            Deferred: function (t) {
                var e = [
                        ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                        ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return r.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return x.Deferred((function (n) {
                                x.each(e, (function (e, i) {
                                    var r = v(t[i[4]]) && t[i[4]];
                                    o[i[1]]((function () {
                                        var t = r && r.apply(this, arguments);
                                        t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        then: function (t, i, r) {
                            var o = 0;

                            function s(t, e, i, r) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        u = function () {
                                            var n, u;
                                            if (!(t < o)) {
                                                if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? r ? u.call(n, s(o, e, H, r), s(o, e, W, r)) : (o++, u.call(n, s(o, e, H, r), s(o, e, W, r), s(o, e, H, e.notifyWith))) : (i !== H && (a = void 0, l = [n]), (r || e.resolveWith)(a, l))
                                            }
                                        },
                                        c = r ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (i !== W && (a = void 0, l = [n]), e.rejectWith(a, l))
                                            }
                                        };
                                    t ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return x.Deferred((function (n) {
                                e[0][3].add(s(0, n, v(r) ? r : H, n.notifyWith)), e[1][3].add(s(0, n, v(t) ? t : H)), e[2][3].add(s(0, n, v(i) ? i : W))
                            })).promise()
                        },
                        promise: function (t) {
                            return null != t ? x.extend(t, r) : r
                        }
                    },
                    o = {};
                return x.each(e, (function (t, n) {
                    var s = n[2],
                        a = n[5];
                    r[n[1]] = s.add, a && s.add((function () {
                        i = a
                    }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                })), r.promise(o), t && t.call(o, o), o
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = a.call(arguments),
                    o = x.Deferred(),
                    s = function (t) {
                        return function (n) {
                            i[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : n, --e || o.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (R(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                for (; n--;) R(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, x.readyException = function (t) {
            n.setTimeout((function () {
                throw t
            }))
        };
        var z = x.Deferred();

        function q() {
            b.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), x.ready()
        }
        x.fn.ready = function (t) {
            return z.then(t).catch((function (t) {
                x.readyException(t)
            })), this
        }, x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== t && --x.readyWait > 0 || z.resolveWith(b, [x]))
            }
        }), x.ready.then = z.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(x.ready) : (b.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
        var F = function (t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === _(n))
                    for (a in r = !0, n) F(t, e, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, v(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(x(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            U = /^-ms-/,
            V = /-([a-z])/g;

        function Q(t, e) {
            return e.toUpperCase()
        }

        function Y(t) {
            return t.replace(U, "ms-").replace(V, Q)
        }
        var G = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function X() {
            this.expando = x.expando + X.uid++
        }
        X.uid = 1, X.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[Y(e)] = n;
                else
                    for (i in e) r[Y(i)] = e[i];
                return r
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(M) || []).length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !x.isEmptyObject(e)
            }
        };
        var K = new X,
            J = new X,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            tt = /[A-Z]/g;

        function et(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = function (t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    J.set(t, e, n)
                } else n = void 0;
            return n
        }
        x.extend({
            hasData: function (t) {
                return J.hasData(t) || K.hasData(t)
            },
            data: function (t, e, n) {
                return J.access(t, e, n)
            },
            removeData: function (t, e) {
                J.remove(t, e)
            },
            _data: function (t, e, n) {
                return K.access(t, e, n)
            },
            _removeData: function (t, e) {
                K.remove(t, e)
            }
        }), x.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = J.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), et(o, i, r[i]));
                        K.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function () {
                    J.set(this, t)
                })) : F(this, (function (e) {
                    var n;
                    if (o && void 0 === e) return void 0 !== (n = J.get(o, t)) || void 0 !== (n = et(o, t)) ? n : void 0;
                    this.each((function () {
                        J.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each((function () {
                    J.remove(this, t)
                }))
            }
        }), x.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = K.get(t, e), n && (!i || Array.isArray(n) ? i = K.access(t, e, x.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = x.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = x._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function () {
                    x.dequeue(t, e)
                }), o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return K.get(t, n) || K.access(t, n, {
                    empty: x.Callbacks("once memory").add((function () {
                        K.remove(t, [e + "queue", n])
                    }))
                })
            }
        }), x.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                    var n = x.queue(this, t, e);
                    x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t)
                }))
            },
            dequeue: function (t) {
                return this.each((function () {
                    x.dequeue(this, t)
                }))
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = x.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = K.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
            rt = ["Top", "Right", "Bottom", "Left"],
            ot = b.documentElement,
            st = function (t) {
                return x.contains(t.ownerDocument, t)
            },
            at = {
                composed: !0
            };
        ot.getRootNode && (st = function (t) {
            return x.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument
        });
        var lt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === x.css(t, "display")
        };

        function ut(t, e, n, i) {
            var r, o, s = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return x.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (x.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (x.cssNumber[e] || "px" !== u && +l) && it.exec(x.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; s--;) x.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                c *= 2, x.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        var ct = {};

        function dt(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = ct[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = x.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ct[i] = r, r)
        }

        function ht(t, e) {
            for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && lt(i) && (r[o] = dt(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }
        x.fn.extend({
            show: function () {
                return ht(this, !0)
            },
            hide: function () {
                return ht(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                    lt(this) ? x(this).show() : x(this).hide()
                }))
            }
        });
        var ft, pt, gt = /^(?:checkbox|radio)$/i,
            mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            vt = /^$|^module$|\/(?:java|ecma)script/i;
        ft = b.createDocumentFragment().appendChild(b.createElement("div")), (pt = b.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), ft.appendChild(pt), m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", m.option = !!ft.lastChild;
        var yt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function bt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? x.merge([t], n) : n
        }

        function wt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
        }
        yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, m.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Ct = /<|&#?\w+;/;

        function _t(t, e, n, i, r) {
            for (var o, s, a, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                if ((o = t[f]) || 0 === o)
                    if ("object" === _(o)) x.merge(h, o.nodeType ? [o] : o);
                    else if (Ct.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (mt.exec(o) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                x.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(o));
            for (d.textContent = "", f = 0; o = h[f++];)
                if (i && x.inArray(o, i) > -1) r && r.push(o);
                else if (u = st(o), s = bt(d.appendChild(o), "script"), u && wt(s), n)
                for (c = 0; o = s[c++];) vt.test(o.type || "") && n.push(o);
            return d
        }
        var xt = /^key/,
            St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Et = /^([^.]*)(?:\.(.+)|)/;

        function Tt() {
            return !0
        }

        function kt() {
            return !1
        }

        function Ot(t, e) {
            return t === function () {
                try {
                    return b.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function Pt(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), e) Pt(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = kt;
            else if (!r) return t;
            return 1 === o && (s = r, (r = function (t) {
                return x().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = x.guid++)), t.each((function () {
                x.event.add(this, e, r, i, n)
            }))
        }

        function It(t, e, n) {
            n ? (K.set(t, e, !1), x.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                    var i, r, o = K.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length)(x.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (o = a.call(arguments), K.set(this, e, o), i = n(this, e), this[e](), o !== (r = K.get(this, e)) || i ? K.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else o.length && (K.set(this, e, {
                        value: x.event.trigger(x.extend(o[0], x.Event.prototype), o.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === K.get(t, e) && x.event.add(t, e, Tt)
        }
        x.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var o, s, a, l, u, c, d, h, f, p, g, m = K.get(t);
                if (G(t))
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && x.find.matchesSelector(ot, r), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (e) {
                            return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                        }), u = (e = (e || "").match(M) || [""]).length; u--;) f = g = (a = Et.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, c = x.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && x.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), x.event.global[f] = !0)
            },
            remove: function (t, e, n, i, r) {
                var o, s, a, l, u, c, d, h, f, p, g, m = K.hasData(t) && K.get(t);
                if (m && (l = m.events)) {
                    for (u = (e = (e || "").match(M) || [""]).length; u--;)
                        if (f = g = (a = Et.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = x.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || x.removeEvent(t, f, m.handle), delete l[f])
                        } else
                            for (f in l) x.event.remove(t, f + e[u], n, i, !0);
                    x.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, n, i, r, o, s, a = new Array(arguments.length),
                    l = x.event.fix(t),
                    u = (K.get(this, "events") || Object.create(null))[l.type] || [],
                    c = x.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (s = x.event.handlers.call(this, l, u), e = 0;
                        (r = s[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, o, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length), s[r] && o.push(i);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        } return u = this, l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function (t, e) {
                Object.defineProperty(x.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function (t) {
                return t[x.expando] ? t : new x.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && P(e, "input") && It(e, "click", Tt), !1
                    },
                    trigger: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && P(e, "input") && It(e, "click"), !0
                    },
                    _default: function (t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && P(e, "input") && K.get(e, "click") || P(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, x.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, x.Event = function (t, e) {
            if (!(this instanceof x.Event)) return new x.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0
        }, x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: kt,
            isPropagationStopped: kt,
            isImmediatePropagationStopped: kt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, x.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && St.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, x.event.addProp), x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (t, e) {
            x.event.special[t] = {
                setup: function () {
                    return It(this, t, Ot), !1
                },
                trigger: function () {
                    return It(this, t), !0
                },
                delegateType: e
            }
        })), x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (t, e) {
            x.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === i || x.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        })), x.fn.extend({
            on: function (t, e, n, i) {
                return Pt(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return Pt(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = kt), this.each((function () {
                    x.event.remove(this, t, n, e)
                }))
            }
        });
        var At = /<script|<style|<link/i,
            Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $t(t, e) {
            return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
        }

        function jt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Nt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Mt(t, e) {
            var n, i, r, o, s, a;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (a = K.get(t).events))
                    for (r in K.remove(e, "handle events"), a)
                        for (n = 0, i = a[r].length; n < i; n++) x.event.add(e, r, a[r][n]);
                J.hasData(t) && (o = J.access(t), s = x.extend({}, o), J.set(e, s))
            }
        }

        function Ht(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function Wt(t, e, n, i) {
            e = l(e);
            var r, o, s, a, u, c, d = 0,
                h = t.length,
                f = h - 1,
                p = e[0],
                g = v(p);
            if (g || h > 1 && "string" == typeof p && !m.checkClone && Dt.test(p)) return t.each((function (r) {
                var o = t.eq(r);
                g && (e[0] = p.call(this, r, o.html())), Wt(o, e, n, i)
            }));
            if (h && (o = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = (s = x.map(bt(r, "script"), jt)).length; d < h; d++) u = r, d !== f && (u = x.clone(u, !0, !0), a && x.merge(s, bt(u, "script"))), n.call(t[d], u, d);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, x.map(s, Nt), d = 0; d < a; d++) u = s[d], vt.test(u.type || "") && !K.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && !u.noModule && x._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : C(u.textContent.replace(Lt, ""), u, c))
            }
            return t
        }

        function Rt(t, e, n) {
            for (var i, r = e ? x.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || x.cleanData(bt(i)), i.parentNode && (n && st(i) && wt(bt(i, "script")), i.parentNode.removeChild(i));
            return t
        }
        x.extend({
            htmlPrefilter: function (t) {
                return t
            },
            clone: function (t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0),
                    l = st(t);
                if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
                    for (s = bt(a), i = 0, r = (o = bt(t)).length; i < r; i++) Ht(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || bt(t), s = s || bt(a), i = 0, r = o.length; i < r; i++) Mt(o[i], s[i]);
                    else Mt(t, a);
                return (s = bt(a, "script")).length > 0 && wt(s, !l && bt(t, "script")), a
            },
            cleanData: function (t) {
                for (var e, n, i, r = x.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (G(n)) {
                        if (e = n[K.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                            n[K.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), x.fn.extend({
            detach: function (t) {
                return Rt(this, t, !0)
            },
            remove: function (t) {
                return Rt(this, t)
            },
            text: function (t) {
                return F(this, (function (t) {
                    return void 0 === t ? x.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            },
            append: function () {
                return Wt(this, arguments, (function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
                }))
            },
            prepend: function () {
                return Wt(this, arguments, (function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $t(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function () {
                return Wt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function () {
                return Wt(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(bt(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function () {
                    return x.clone(this, t, e)
                }))
            },
            html: function (t) {
                return F(this, (function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !At.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = x.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(bt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return Wt(this, arguments, (function (e) {
                    var n = this.parentNode;
                    x.inArray(this, t) < 0 && (x.cleanData(bt(this)), n && n.replaceChild(e, this))
                }), t)
            }
        }), x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (t, e) {
            x.fn[t] = function (t) {
                for (var n, i = [], r = x(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), x(r[s])[e](n), u.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var Bt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
            zt = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            qt = function (t, e, n) {
                var i, r, o = {};
                for (r in e) o[r] = t.style[r], t.style[r] = e[r];
                for (r in i = n.call(t), e) t.style[r] = o[r];
                return i
            },
            Ft = new RegExp(rt.join("|"), "i");

        function Ut(t, e, n) {
            var i, r, o, s, a = t.style;
            return (n = n || zt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || st(t) || (s = x.style(t, e)), !m.pixelBoxStyles() && Bt.test(s) && Ft.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function Vt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function () {
            function t() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(u).appendChild(c);
                    var t = n.getComputedStyle(c);
                    i = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), ot.removeChild(u), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, r, o, s, a, l, u = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(m, {
                boxSizingReliable: function () {
                    return t(), r
                },
                pixelBoxStyles: function () {
                    return t(), s
                },
                pixelPosition: function () {
                    return t(), i
                },
                reliableMarginLeft: function () {
                    return t(), l
                },
                scrollboxSize: function () {
                    return t(), o
                },
                reliableTrDimensions: function () {
                    var t, e, i, r;
                    return null == a && (t = b.createElement("table"), e = b.createElement("tr"), i = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", i.style.height = "9px", ot.appendChild(t).appendChild(e).appendChild(i), r = n.getComputedStyle(e), a = parseInt(r.height) > 3, ot.removeChild(t)), a
                }
            }))
        }();
        var Qt = ["Webkit", "Moz", "ms"],
            Yt = b.createElement("div").style,
            Gt = {};

        function Xt(t) {
            var e = x.cssProps[t] || Gt[t];
            return e || (t in Yt ? t : Gt[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Qt.length; n--;)
                    if ((t = Qt[n] + e) in Yt) return t
            }(t) || t)
        }
        var Kt = /^(none|table(?!-c[ea]).+)/,
            Jt = /^--/,
            Zt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            te = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ee(t, e, n) {
            var i = it.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function ne(t, e, n, i, r, o) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += x.css(t, n + rt[s], !0, r)), i ? ("content" === n && (l -= x.css(t, "padding" + rt[s], !0, r)), "margin" !== n && (l -= x.css(t, "border" + rt[s] + "Width", !0, r))) : (l += x.css(t, "padding" + rt[s], !0, r), "padding" !== n ? l += x.css(t, "border" + rt[s] + "Width", !0, r) : a += x.css(t, "border" + rt[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
        }

        function ie(t, e, n) {
            var i = zt(t),
                r = (!m.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, i),
                o = r,
                s = Ut(t, e, i),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Bt.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && P(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === x.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ne(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
        }

        function re(t, e, n, i, r) {
            return new re.prototype.init(t, e, n, i, r)
        }
        x.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Ut(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = Y(e),
                        l = Jt.test(e),
                        u = t.style;
                    if (l || (e = Xt(a)), s = x.cssHooks[e] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                    "string" === (o = typeof n) && (r = it.exec(n)) && r[1] && (n = ut(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (x.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function (t, e, n, i) {
                var r, o, s, a = Y(e);
                return Jt.test(e) || (e = Xt(a)), (s = x.cssHooks[e] || x.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Ut(t, e, i)), "normal" === r && e in te && (r = te[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), x.each(["height", "width"], (function (t, e) {
            x.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return !Kt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : qt(t, Zt, (function () {
                        return ie(t, e, i)
                    }))
                },
                set: function (t, n, i) {
                    var r, o = zt(t),
                        s = !m.scrollboxSize() && "absolute" === o.position,
                        a = (s || i) && "border-box" === x.css(t, "boxSizing", !1, o),
                        l = i ? ne(t, e, i, a, o) : 0;
                    return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ne(t, e, "border", !1, o) - .5)), l && (r = it.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = x.css(t, e)), ee(0, n, l)
                }
            }
        })), x.cssHooks.marginLeft = Vt(m.reliableMarginLeft, (function (t, e) {
            if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
                marginLeft: 0
            }, (function () {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (t, e) {
            x.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + rt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, "margin" !== t && (x.cssHooks[t + e].set = ee)
        })), x.fn.extend({
            css: function (t, e) {
                return F(this, (function (t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = zt(t), r = e.length; s < r; s++) o[e[s]] = x.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? x.style(t, e, n) : x.css(t, e)
                }), t, e, arguments.length > 1)
            }
        }), x.Tween = re, re.prototype = {
            constructor: re,
            init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : re.propHooks._default.set(this), this
            }
        }, re.prototype.init.prototype = re.prototype, re.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function (t) {
                    x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !x.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, x.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, x.fx = re.prototype.init, x.fx.step = {};
        var oe, se, ae = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;

        function ue() {
            se && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ue) : n.setTimeout(ue, x.fx.interval), x.fx.tick())
        }

        function ce() {
            return n.setTimeout((function () {
                oe = void 0
            })), oe = Date.now()
        }

        function de(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = rt[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function he(t, e, n) {
            for (var i, r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function fe(t, e, n) {
            var i, r, o = 0,
                s = fe.prefilters.length,
                a = x.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (r) return !1;
                    for (var e = oe || ce(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                    return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: x.extend({}, e),
                    opts: x.extend(!0, {
                        specialEasing: {},
                        easing: x.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: oe || ce(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = x.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (! function (t, e) {
                    var n, i, r, o, s;
                    for (n in t)
                        if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = x.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                        else e[i] = r
                }(c, u.opts.specialEasing); o < s; o++)
                if (i = fe.prefilters[o].call(u, t, c, u.opts)) return v(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return x.map(c, he, u), v(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        x.Animation = x.extend(fe, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return ut(n.elem, t, it.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    v(t) ? (e = t, t = ["*"]) : t = t.match(M);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], fe.tweeners[n] = fe.tweeners[n] || [], fe.tweeners[n].unshift(e)
                },
                prefilters: [function (t, e, n) {
                    var i, r, o, s, a, l, u, c, d = "width" in e || "height" in e,
                        h = this,
                        f = {},
                        p = t.style,
                        g = t.nodeType && lt(t),
                        m = K.get(t, "fxshow");
                    for (i in n.queue || (null == (s = x._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                            s.unqueued || a()
                        }), s.unqueued++, h.always((function () {
                            h.always((function () {
                                s.unqueued--, x.queue(t, "fx").length || s.empty.fire()
                            }))
                        }))), e)
                        if (r = e[i], ae.test(r)) {
                            if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            f[i] = m && m[i] || x.style(t, i)
                        } if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
                        for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = K.get(t, "display")), "none" === (c = x.css(t, "display")) && (u ? c = u : (ht([t], !0), u = t.style.display || u, c = x.css(t, "display"), ht([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(t, "float") && (l || (h.done((function () {
                                p.display = u
                            })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function () {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(t, "fxshow", {
                            display: u
                        }), o && (m.hidden = !g), g && ht([t], !0), h.done((function () {
                            for (i in g || ht([t]), K.remove(t, "fxshow"), f) x.style(t, i, f[i])
                        }))), l = he(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (t, e) {
                    e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
                }
            }), x.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? x.extend({}, t) : {
                    complete: n || !n && e || v(t) && t,
                    duration: t,
                    easing: n && e || e && !v(e) && e
                };
                return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    v(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
                }, i
            }, x.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var r = x.isEmptyObject(t),
                        o = x.speed(e, n, i),
                        s = function () {
                            var e = fe(this, x.extend({}, t), o);
                            (r || K.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = x.timers,
                            s = K.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && le.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || x.dequeue(this, t)
                    }))
                },
                finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each((function () {
                        var e, n = K.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = x.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, x.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    }))
                }
            }), x.each(["toggle", "show", "hide"], (function (t, e) {
                var n = x.fn[e];
                x.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(de(e, !0), t, i, r)
                }
            })), x.each({
                slideDown: de("show"),
                slideUp: de("hide"),
                slideToggle: de("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function (t, e) {
                x.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            })), x.timers = [], x.fx.tick = function () {
                var t, e = 0,
                    n = x.timers;
                for (oe = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || x.fx.stop(), oe = void 0
            }, x.fx.timer = function (t) {
                x.timers.push(t), x.fx.start()
            }, x.fx.interval = 13, x.fx.start = function () {
                se || (se = !0, ue())
            }, x.fx.stop = function () {
                se = null
            }, x.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, x.fn.delay = function (t, e) {
                return t = x.fx && x.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function () {
                        n.clearTimeout(r)
                    }
                }))
            },
            function () {
                var t = b.createElement("input"),
                    e = b.createElement("select").appendChild(b.createElement("option"));
                t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
            }();
        var pe, ge = x.expr.attrHandle;
        x.fn.extend({
            attr: function (t, e) {
                return F(this, x.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each((function () {
                    x.removeAttr(this, t)
                }))
            }
        }), x.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === o && x.isXMLDoc(t) || (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void x.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!m.radioValue && "radio" === e && P(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i = 0,
                    r = e && e.match(M);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), pe = {
            set: function (t, e, n) {
                return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, x.each(x.expr.match.bool.source.match(/\w+/g), (function (t, e) {
            var n = ge[e] || x.find.attr;
            ge[e] = function (t, e, i) {
                var r, o, s = e.toLowerCase();
                return i || (o = ge[s], ge[s] = r, r = null != n(t, e, i) ? s : null, ge[s] = o), r
            }
        }));
        var me = /^(?:input|select|textarea|button)$/i,
            ve = /^(?:a|area)$/i;

        function ye(t) {
            return (t.match(M) || []).join(" ")
        }

        function be(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function we(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
        }
        x.fn.extend({
            prop: function (t, e) {
                return F(this, x.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each((function () {
                    delete this[x.propFix[t] || t]
                }))
            }
        }), x.extend({
            prop: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(t) || (e = x.propFix[e] || e, r = x.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = x.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), m.optSelected || (x.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            x.propFix[this.toLowerCase()] = this
        })), x.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (v(t)) return this.each((function (e) {
                    x(this).addClass(t.call(this, e, be(this)))
                }));
                if ((e = we(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (v(t)) return this.each((function (e) {
                    x(this).removeClass(t.call(this, e, be(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = we(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            r !== (a = ye(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function (n) {
                    x(this).toggleClass(t.call(this, n, be(this), e), e)
                })) : this.each((function () {
                    var e, r, o, s;
                    if (i)
                        for (r = 0, o = x(this), s = we(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = be(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                }))
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Ce = /\r/g;
        x.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = v(t), this.each((function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, x(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function (t) {
                        return null == t ? "" : t + ""
                    }))), (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                }))) : r ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Ce, "") : null == n ? "" : n : void 0
            }
        }), x.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = x.find.attr(t, "value");
                        return null != e ? e : ye(x.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, n, i, r = t.options,
                            o = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                                if (e = x(n).val(), s) return e;
                                a.push(e)
                            } return a
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, o = x.makeArray(e), s = r.length; s--;)((i = r[s]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), x.each(["radio", "checkbox"], (function () {
            x.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = x.inArray(x(t).val(), e) > -1
                }
            }, m.checkOn || (x.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), m.focusin = "onfocusin" in n;
        var _e = /^(?:focusinfocus|focusoutblur)$/,
            xe = function (t) {
                t.stopPropagation()
            };
        x.extend(x.event, {
            trigger: function (t, e, i, r) {
                var o, s, a, l, u, c, d, h, p = [i || b],
                    g = f.call(t, "type") ? t.type : t,
                    m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = h = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(g + x.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[x.expando] ? t : new x.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : x.makeArray(e, [t]), d = x.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                    if (!r && !d.noBubble && !y(i)) {
                        for (l = d.delegateType || g, _e.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0;
                        (s = p[o++]) && !t.isPropagationStopped();) h = s, t.type = o > 1 ? l : d.bindType || g, (c = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && c.apply(s, e), (c = u && s[u]) && c.apply && G(s) && (t.result = c.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), e) || !G(i) || u && v(i[g]) && !y(i) && ((a = i[u]) && (i[u] = null), x.event.triggered = g, t.isPropagationStopped() && h.addEventListener(g, xe), i[g](), t.isPropagationStopped() && h.removeEventListener(g, xe), x.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function (t, e, n) {
                var i = x.extend(new x.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                x.event.trigger(i, null, e)
            }
        }), x.fn.extend({
            trigger: function (t, e) {
                return this.each((function () {
                    x.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return x.event.trigger(t, e, n, !0)
            }
        }), m.focusin || x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (t, e) {
            var n = function (t) {
                x.event.simulate(e, t.target, x.event.fix(t))
            };
            x.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this.document || this,
                        r = K.access(i, e);
                    r || i.addEventListener(t, n, !0), K.access(i, e, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                        r = K.access(i, e) - 1;
                    r ? K.access(i, e, r) : (i.removeEventListener(t, n, !0), K.remove(i, e))
                }
            }
        }));
        var Se = n.location,
            Ee = {
                guid: Date.now()
            },
            Te = /\?/;
        x.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), e
        };
        var ke = /\[\]$/,
            Oe = /\r?\n/g,
            Pe = /^(?:submit|button|image|reset|file)$/i,
            Ie = /^(?:input|select|textarea|keygen)/i;

        function Ae(t, e, n, i) {
            var r;
            if (Array.isArray(e)) x.each(e, (function (e, r) {
                n || ke.test(t) ? i(t, r) : Ae(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            }));
            else if (n || "object" !== _(e)) i(t, e);
            else
                for (r in e) Ae(t + "[" + r + "]", e[r], n, i)
        }
        x.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    var n = v(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, (function () {
                r(this.name, this.value)
            }));
            else
                for (n in t) Ae(n, t[n], e, r);
            return i.join("&")
        }, x.fn.extend({
            serialize: function () {
                return x.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                    var t = x.prop(this, "elements");
                    return t ? x.makeArray(t) : this
                })).filter((function () {
                    var t = this.type;
                    return this.name && !x(this).is(":disabled") && Ie.test(this.nodeName) && !Pe.test(t) && (this.checked || !gt.test(t))
                })).map((function (t, e) {
                    var n = x(this).val();
                    return null == n ? null : Array.isArray(n) ? x.map(n, (function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Oe, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: n.replace(Oe, "\r\n")
                    }
                })).get()
            }
        });
        var De = /%20/g,
            Le = /#.*$/,
            $e = /([?&])_=[^&]*/,
            je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ne = /^(?:GET|HEAD)$/,
            Me = /^\/\//,
            He = {},
            We = {},
            Re = "*/".concat("*"),
            Be = b.createElement("a");

        function ze(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(M) || [];
                if (v(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function qe(t, e, n, i) {
            var r = {},
                o = t === We;

            function s(a) {
                var l;
                return r[a] = !0, x.each(t[a] || [], (function (t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
                })), l
            }
            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }

        function Fe(t, e) {
            var n, i, r = x.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && x.extend(!0, t, i), t
        }
        Be.href = Se.href, x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Re,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": x.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? Fe(Fe(t, x.ajaxSettings), e) : Fe(x.ajaxSettings, t)
            },
            ajaxPrefilter: ze(He),
            ajaxTransport: ze(We),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, a, l, u, c, d, h, f = x.ajaxSetup({}, e),
                    p = f.context || f,
                    g = f.context && (p.nodeType || p.jquery) ? x(p) : x.event,
                    m = x.Deferred(),
                    v = x.Callbacks("once memory"),
                    y = f.statusCode || {},
                    w = {},
                    C = {},
                    _ = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!s)
                                    for (s = {}; e = je.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = s[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return u ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == u && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, w[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == u && (f.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (u) S.always(t[S.status]);
                                else
                                    for (e in t) y[e] = [y[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || _;
                            return i && i.abort(e), E(0, e), this
                        }
                    };
                if (m.promise(S), f.url = ((t || f.url || Se.href) + "").replace(Me, Se.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [""], null == f.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = Be.protocol + "//" + Be.host != l.protocol + "//" + l.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), qe(He, f, e, S), u) return S;
                for (d in (c = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ne.test(f.type), r = f.url.replace(Le, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Te.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace($e, "$1"), h = (Te.test(r) ? "&" : "?") + "_=" + Ee.guid++ + h), f.url = r + h), f.ifModified && (x.lastModified[r] && S.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && S.setRequestHeader("If-None-Match", x.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, S, f) || u)) return S.abort();
                if (_ = "abort", v.add(f.complete), S.done(f.success), S.fail(f.error), i = qe(We, f, e, S)) {
                    if (S.readyState = 1, c && g.trigger("ajaxSend", [S, f]), u) return S;
                    f.async && f.timeout > 0 && (a = n.setTimeout((function () {
                        S.abort("timeout")
                    }), f.timeout));
                    try {
                        u = !1, i.send(w, E)
                    } catch (t) {
                        if (u) throw t;
                        E(-1, t)
                    }
                } else E(-1, "No Transport");

                function E(t, e, s, l) {
                    var d, h, b, w, C, _ = e;
                    u || (u = !0, a && n.clearTimeout(a), i = void 0, o = l || "", S.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, s && (w = function (t, e, n) {
                        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(f, S, s)), !d && x.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {}), w = function (t, e, n, i) {
                        var r, o, s, a, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                        for (o = c.shift(); o;)
                            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                                for (r in u)
                                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, w, S, d), d ? (f.ifModified && ((C = S.getResponseHeader("Last-Modified")) && (x.lastModified[r] = C), (C = S.getResponseHeader("etag")) && (x.etag[r] = C)), 204 === t || "HEAD" === f.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, h = w.data, d = !(b = w.error))) : (b = _, !t && _ || (_ = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (e || _) + "", d ? m.resolveWith(p, [h, _, S]) : m.rejectWith(p, [S, _, b]), S.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [S, f, d ? h : b]), v.fireWith(p, [S, _]), c && (g.trigger("ajaxComplete", [S, f]), --x.active || x.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function (t, e, n) {
                return x.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return x.get(t, void 0, e, "script")
            }
        }), x.each(["get", "post"], (function (t, e) {
            x[e] = function (t, n, i, r) {
                return v(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, x.isPlainObject(t) && t))
            }
        })), x.ajaxPrefilter((function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), x._evalUrl = function (t, e, n) {
            return x.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (t) {
                    x.globalEval(t, e, n)
                }
            })
        }, x.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (v(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            },
            wrapInner: function (t) {
                return v(t) ? this.each((function (e) {
                    x(this).wrapInner(t.call(this, e))
                })) : this.each((function () {
                    var e = x(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function (t) {
                var e = v(t);
                return this.each((function (n) {
                    x(this).wrapAll(e ? t.call(this, n) : t)
                }))
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each((function () {
                    x(this).replaceWith(this.childNodes)
                })), this
            }
        }), x.expr.pseudos.hidden = function (t) {
            return !x.expr.pseudos.visible(t)
        }, x.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, x.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Ue = {
                0: 200,
                1223: 204
            },
            Ve = x.ajaxSettings.xhr();
        m.cors = !!Ve && "withCredentials" in Ve, m.ajax = Ve = !!Ve, x.ajaxTransport((function (t) {
            var e, i;
            if (m.cors || Ve && !t.crossDomain) return {
                send: function (r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    e = function (t) {
                        return function () {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ue[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout((function () {
                            e && i()
                        }))
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            }
        })), x.ajaxPrefilter((function (t) {
            t.crossDomain && (t.contents.script = !1)
        })), x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return x.globalEval(t), t
                }
            }
        }), x.ajaxPrefilter("script", (function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), x.ajaxTransport("script", (function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function (i, r) {
                    e = x("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), b.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }));
        var Qe, Ye = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ye.pop() || x.expando + "_" + Ee.guid++;
                return this[t] = !0, t
            }
        }), x.ajaxPrefilter("json jsonp", (function (t, e, i) {
            var r, o, s, a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return s || x.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = n[r], n[r] = function () {
                s = arguments
            }, i.always((function () {
                void 0 === o ? x(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, Ye.push(r)), s && v(o) && o(s[0]), s = o = void 0
            })), "script"
        })), m.createHTMLDocument = ((Qe = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qe.childNodes.length), x.parseHTML = function (t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((i = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(i)) : e = b), o = !n && [], (r = I.exec(t)) ? [e.createElement(r[1])] : (r = _t([t], e, o), o && o.length && x(o).remove(), x.merge([], r.childNodes)));
            var i, r, o
        }, x.fn.load = function (t, e, n) {
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ye(t.slice(a)), t = t.slice(0, a)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && x.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done((function (t) {
                o = arguments, s.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t)
            })).always(n && function (t, e) {
                s.each((function () {
                    n.apply(this, o || [t.responseText, e, t])
                }))
            }), this
        }, x.expr.pseudos.animated = function (t) {
            return x.grep(x.timers, (function (e) {
                return t === e.elem
            })).length
        }, x.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, s, a, l, u = x.css(t, "position"),
                    c = x(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), o = x.css(t, "top"), l = x.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(e) && (e = e.call(t, n, x.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), c.css(d))
            }
        }, x.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                    x.offset.setOffset(this, t, e)
                }));
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = x(t).offset()).top += x.css(t, "borderTopWidth", !0), r.left += x.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - x.css(i, "marginTop", !0),
                        left: e.left - r.left - x.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                    for (var t = this.offsetParent; t && "static" === x.css(t, "position");) t = t.offsetParent;
                    return t || ot
                }))
            }
        }), x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (t, e) {
            var n = "pageYOffset" === e;
            x.fn[t] = function (i) {
                return F(this, (function (t, i, r) {
                    var o;
                    if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }), t, i, arguments.length)
            }
        })), x.each(["top", "left"], (function (t, e) {
            x.cssHooks[e] = Vt(m.pixelPosition, (function (t, n) {
                if (n) return n = Ut(t, e), Bt.test(n) ? x(t).position()[e] + "px" : n
            }))
        })), x.each({
            Height: "height",
            Width: "width"
        }, (function (t, e) {
            x.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, (function (n, i) {
                x.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return F(this, (function (e, n, r) {
                        var o;
                        return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? x.css(e, n, a) : x.style(e, n, r, a)
                    }), e, s ? r : void 0, s)
                }
            }))
        })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
            x.fn[e] = function (t) {
                return this.on(e, t)
            }
        })), x.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
            x.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }));
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        x.proxy = function (t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = a.call(arguments, 2), (r = function () {
                return t.apply(e || this, i.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || x.guid++, r
        }, x.holdReady = function (t) {
            t ? x.readyWait++ : x.ready(!0)
        }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = P, x.isFunction = v, x.isWindow = y, x.camelCase = Y, x.type = _, x.now = Date.now, x.isNumeric = function (t) {
            var e = x.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, x.trim = function (t) {
            return null == t ? "" : (t + "").replace(Xe, "")
        }, void 0 === (i = function () {
            return x
        }.apply(e, [])) || (t.exports = i);
        var Ke = n.jQuery,
            Je = n.$;
        return x.noConflict = function (t) {
            return n.$ === x && (n.$ = Je), t && n.jQuery === x && (n.jQuery = Ke), x
        }, void 0 === r && (n.jQuery = n.$ = x), x
    }))
}, function (t, e, n) {
    var i, r;
    /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
     * @license MIT */
    void 0 === (r = "function" == typeof (i = function () {
        var t, e, n = {
                version: "0.2.0"
            },
            i = n.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };

        function r(t, e, n) {
            return t < e ? e : t > n ? n : t
        }

        function o(t) {
            return 100 * (-1 + t)
        }
        n.configure = function (t) {
            var e, n;
            for (e in t) void 0 !== (n = t[e]) && t.hasOwnProperty(e) && (i[e] = n);
            return this
        }, n.status = null, n.set = function (t) {
            var e = n.isStarted();
            t = r(t, i.minimum, 1), n.status = 1 === t ? null : t;
            var l = n.render(!e),
                u = l.querySelector(i.barSelector),
                c = i.speed,
                d = i.easing;
            return l.offsetWidth, s((function (e) {
                "" === i.positionUsing && (i.positionUsing = n.getPositioningCSS()), a(u, function (t, e, n) {
                    var r;
                    return (r = "translate3d" === i.positionUsing ? {
                        transform: "translate3d(" + o(t) + "%,0,0)"
                    } : "translate" === i.positionUsing ? {
                        transform: "translate(" + o(t) + "%,0)"
                    } : {
                        "margin-left": o(t) + "%"
                    }).transition = "all " + e + "ms " + n, r
                }(t, c, d)), 1 === t ? (a(l, {
                    transition: "none",
                    opacity: 1
                }), l.offsetWidth, setTimeout((function () {
                    a(l, {
                        transition: "all " + c + "ms linear",
                        opacity: 0
                    }), setTimeout((function () {
                        n.remove(), e()
                    }), c)
                }), c)) : setTimeout(e, c)
            })), this
        }, n.isStarted = function () {
            return "number" == typeof n.status
        }, n.start = function () {
            n.status || n.set(0);
            var t = function () {
                setTimeout((function () {
                    n.status && (n.trickle(), t())
                }), i.trickleSpeed)
            };
            return i.trickle && t(), this
        }, n.done = function (t) {
            return t || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }, n.inc = function (t) {
            var e = n.status;
            return e ? ("number" != typeof t && (t = (1 - e) * r(Math.random() * e, .1, .95)), e = r(e + t, 0, .994), n.set(e)) : n.start()
        }, n.trickle = function () {
            return n.inc(Math.random() * i.trickleRate)
        }, t = 0, e = 0, n.promise = function (i) {
            return i && "resolved" !== i.state() ? (0 === e && n.start(), t++, e++, i.always((function () {
                0 == --e ? (t = 0, n.done()) : n.set((t - e) / t)
            })), this) : this
        }, n.render = function (t) {
            if (n.isRendered()) return document.getElementById("nprogress");
            u(document.documentElement, "nprogress-busy");
            var e = document.createElement("div");
            e.id = "nprogress", e.innerHTML = i.template;
            var r, s = e.querySelector(i.barSelector),
                l = t ? "-100" : o(n.status || 0),
                c = document.querySelector(i.parent);
            return a(s, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)"
            }), i.showSpinner || (r = e.querySelector(i.spinnerSelector)) && h(r), c != document.body && u(c, "nprogress-custom-parent"), c.appendChild(e), e
        }, n.remove = function () {
            c(document.documentElement, "nprogress-busy"), c(document.querySelector(i.parent), "nprogress-custom-parent");
            var t = document.getElementById("nprogress");
            t && h(t)
        }, n.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function () {
            var t = document.body.style,
                e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
            return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
        };
        var s = function () {
                var t = [];

                function e() {
                    var n = t.shift();
                    n && n(e)
                }
                return function (n) {
                    t.push(n), 1 == t.length && e()
                }
            }(),
            a = function () {
                var t = ["Webkit", "O", "Moz", "ms"],
                    e = {};

                function n(n) {
                    return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function (t, e) {
                        return e.toUpperCase()
                    })), e[n] || (e[n] = function (e) {
                        var n = document.body.style;
                        if (e in n) return e;
                        for (var i, r = t.length, o = e.charAt(0).toUpperCase() + e.slice(1); r--;)
                            if ((i = t[r] + o) in n) return i;
                        return e
                    }(n))
                }

                function i(t, e, i) {
                    e = n(e), t.style[e] = i
                }
                return function (t, e) {
                    var n, r, o = arguments;
                    if (2 == o.length)
                        for (n in e) void 0 !== (r = e[n]) && e.hasOwnProperty(n) && i(t, n, r);
                    else i(t, o[1], o[2])
                }
            }();

        function l(t, e) {
            return ("string" == typeof t ? t : d(t)).indexOf(" " + e + " ") >= 0
        }

        function u(t, e) {
            var n = d(t),
                i = n + e;
            l(n, e) || (t.className = i.substring(1))
        }

        function c(t, e) {
            var n, i = d(t);
            l(t, e) && (n = i.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
        }

        function d(t) {
            return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
        }

        function h(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        return n
    }) ? i.call(e, n, e, t) : i) || (t.exports = r)
}, function (t, e, n) {
    var i, r;
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    window, void 0 === (r = "function" == typeof (i = function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            i = n.length;

        function r(t) {
            var n = getComputedStyle(t);
            return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n
        }
        var o, s = !1;

        function a(e) {
            if (function () {
                    if (!s) {
                        s = !0;
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                        var n = document.body || document.documentElement;
                        n.appendChild(e);
                        var i = r(e);
                        o = 200 == Math.round(t(i.width)), a.isBoxSizeOuter = o, n.removeChild(e)
                    }
                }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var l = r(e);
                if ("none" == l.display) return function () {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < i; e++) t[n[e]] = 0;
                    return t
                }();
                var u = {};
                u.width = e.offsetWidth, u.height = e.offsetHeight;
                for (var c = u.isBorderBox = "border-box" == l.boxSizing, d = 0; d < i; d++) {
                    var h = n[d],
                        f = l[h],
                        p = parseFloat(f);
                    u[h] = isNaN(p) ? 0 : p
                }
                var g = u.paddingLeft + u.paddingRight,
                    m = u.paddingTop + u.paddingBottom,
                    v = u.marginLeft + u.marginRight,
                    y = u.marginTop + u.marginBottom,
                    b = u.borderLeftWidth + u.borderRightWidth,
                    w = u.borderTopWidth + u.borderBottomWidth,
                    C = c && o,
                    _ = t(l.width);
                !1 !== _ && (u.width = _ + (C ? 0 : g + b));
                var x = t(l.height);
                return !1 !== x && (u.height = x + (C ? 0 : m + w)), u.innerWidth = u.width - (g + b), u.innerHeight = u.height - (m + w), u.outerWidth = u.width + v, u.outerHeight = u.height + y, u
            }
        }
        return a
    }) ? i.call(e, n, e, t) : i) || (t.exports = r)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function (t) {
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.16.1
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                i = function () {
                    for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                        if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                    return 0
                }();
            var r = n && window.Promise ? function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, window.Promise.resolve().then((function () {
                        e = !1, t()
                    })))
                }
            } : function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, setTimeout((function () {
                        e = !1, t()
                    }), i))
                }
            };

            function o(t) {
                return t && "[object Function]" === {}.toString.call(t)
            }

            function s(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? n[e] : n
            }

            function a(t) {
                return "HTML" === t.nodeName ? t : t.parentNode || t.host
            }

            function l(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = s(t),
                    n = e.overflow,
                    i = e.overflowX,
                    r = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? t : l(a(t))
            }

            function u(t) {
                return t && t.referenceNode ? t.referenceNode : t
            }
            var c = n && !(!window.MSInputMethodContext || !document.documentMode),
                d = n && /MSIE 10/.test(navigator.userAgent);

            function h(t) {
                return 11 === t ? c : 10 === t ? d : c || d
            }

            function f(t) {
                if (!t) return document.documentElement;
                for (var e = h(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
            }

            function p(t) {
                return null !== t.parentNode ? p(t.parentNode) : t
            }

            function g(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? t : e,
                    r = n ? e : t,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var s, a, l = o.commonAncestorContainer;
                if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
                var u = p(t);
                return u.host ? g(u.host, e) : g(t, p(e).host)
            }

            function m(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === e ? "scrollTop" : "scrollLeft",
                    i = t.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var r = t.ownerDocument.documentElement,
                        o = t.ownerDocument.scrollingElement || r;
                    return o[n]
                }
                return t[n]
            }

            function v(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = m(e, "top"),
                    r = m(e, "left"),
                    o = n ? -1 : 1;
                return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
            }

            function y(t, e) {
                var n = "x" === e ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
            }

            function b(t, e, n, i) {
                return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], h(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
            }

            function w(t) {
                var e = t.body,
                    n = t.documentElement,
                    i = h(10) && getComputedStyle(n);
                return {
                    height: b("Height", e, n, i),
                    width: b("Width", e, n, i)
                }
            }
            var C = function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                x = function (t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                },
                S = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                };

            function E(t) {
                return S({}, t, {
                    right: t.left + t.width,
                    bottom: t.top + t.height
                })
            }

            function T(t) {
                var e = {};
                try {
                    if (h(10)) {
                        e = t.getBoundingClientRect();
                        var n = m(t, "top"),
                            i = m(t, "left");
                        e.top += n, e.left += i, e.bottom += n, e.right += i
                    } else e = t.getBoundingClientRect()
                } catch (t) {}
                var r = {
                        left: e.left,
                        top: e.top,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    },
                    o = "HTML" === t.nodeName ? w(t.ownerDocument) : {},
                    a = o.width || t.clientWidth || r.width,
                    l = o.height || t.clientHeight || r.height,
                    u = t.offsetWidth - a,
                    c = t.offsetHeight - l;
                if (u || c) {
                    var d = s(t);
                    u -= y(d, "x"), c -= y(d, "y"), r.width -= u, r.height -= c
                }
                return E(r)
            }

            function k(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(10),
                    r = "HTML" === e.nodeName,
                    o = T(t),
                    a = T(e),
                    u = l(t),
                    c = s(e),
                    d = parseFloat(c.borderTopWidth),
                    f = parseFloat(c.borderLeftWidth);
                n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = E({
                    top: o.top - a.top - d,
                    left: o.left - a.left - f,
                    width: o.width,
                    height: o.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                    var g = parseFloat(c.marginTop),
                        m = parseFloat(c.marginLeft);
                    p.top -= d - g, p.bottom -= d - g, p.left -= f - m, p.right -= f - m, p.marginTop = g, p.marginLeft = m
                }
                return (i && !n ? e.contains(u) : e === u && "BODY" !== u.nodeName) && (p = v(p, e)), p
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement,
                    i = k(t, n),
                    r = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = e ? 0 : m(n),
                    a = e ? 0 : m(n, "left"),
                    l = {
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: r,
                        height: o
                    };
                return E(l)
            }

            function P(t) {
                var e = t.nodeName;
                if ("BODY" === e || "HTML" === e) return !1;
                if ("fixed" === s(t, "position")) return !0;
                var n = a(t);
                return !!n && P(n)
            }

            function I(t) {
                if (!t || !t.parentElement || h()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
                return e || document.documentElement
            }

            function A(t, e, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = r ? I(t) : g(t, u(e));
                if ("viewport" === i) o = O(s, r);
                else {
                    var c = void 0;
                    "scrollParent" === i ? "BODY" === (c = l(a(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === i ? t.ownerDocument.documentElement : i;
                    var d = k(c, s, r);
                    if ("HTML" !== c.nodeName || P(s)) o = d;
                    else {
                        var h = w(t.ownerDocument),
                            f = h.height,
                            p = h.width;
                        o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = p + d.left
                    }
                }
                var m = "number" == typeof (n = n || 0);
                return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o
            }

            function D(t) {
                return t.width * t.height
            }

            function L(t, e, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === t.indexOf("auto")) return t;
                var s = A(n, i, o, r),
                    a = {
                        top: {
                            width: s.width,
                            height: e.top - s.top
                        },
                        right: {
                            width: s.right - e.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - e.bottom
                        },
                        left: {
                            width: e.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map((function (t) {
                        return S({
                            key: t
                        }, a[t], {
                            area: D(a[t])
                        })
                    })).sort((function (t, e) {
                        return e.area - t.area
                    })),
                    u = l.filter((function (t) {
                        var e = t.width,
                            i = t.height;
                        return e >= n.clientWidth && i >= n.clientHeight
                    })),
                    c = u.length > 0 ? u[0].key : l[0].key,
                    d = t.split("-")[1];
                return c + (d ? "-" + d : "")
            }

            function $(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = i ? I(e) : g(e, u(n));
                return k(n, r, i)
            }

            function j(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t),
                    n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return {
                    width: t.offsetWidth + i,
                    height: t.offsetHeight + n
                }
            }

            function N(t) {
                var e = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return t.replace(/left|right|bottom|top/g, (function (t) {
                    return e[t]
                }))
            }

            function M(t, e, n) {
                n = n.split("-")[0];
                var i = j(t),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    s = o ? "top" : "left",
                    a = o ? "left" : "top",
                    l = o ? "height" : "width",
                    u = o ? "width" : "height";
                return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[u] : e[N(a)], r
            }

            function H(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0]
            }

            function W(t, e, n) {
                return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                    if (Array.prototype.findIndex) return t.findIndex((function (t) {
                        return t[e] === n
                    }));
                    var i = H(t, (function (t) {
                        return t[e] === n
                    }));
                    return t.indexOf(i)
                }(t, "name", n))).forEach((function (t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.function || t.fn;
                    t.enabled && o(n) && (e.offsets.popper = E(e.offsets.popper), e.offsets.reference = E(e.offsets.reference), e = n(e, t))
                })), e
            }

            function R() {
                if (!this.state.isDestroyed) {
                    var t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    t.offsets.reference = $(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = L(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = M(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = W(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                }
            }

            function B(t, e) {
                return t.some((function (t) {
                    var n = t.name;
                    return t.enabled && n === e
                }))
            }

            function z(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var r = e[i],
                        o = r ? "" + r + n : t;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function q() {
                return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function F(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window
            }

            function U(t, e, n, i) {
                n.updateBound = i, F(t).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = l(t);
                return function t(e, n, i, r) {
                    var o = "BODY" === e.nodeName,
                        s = o ? e.ownerDocument.defaultView : e;
                    s.addEventListener(n, i, {
                        passive: !0
                    }), o || t(l(s.parentNode), n, i, r), r.push(s)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function V() {
                this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function Q() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, F(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
                    t.removeEventListener("scroll", e.updateBound)
                })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }

            function Y(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
            }

            function G(t, e) {
                Object.keys(e).forEach((function (n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Y(e[n]) && (i = "px"), t.style[n] = e[n] + i
                }))
            }
            var X = n && /Firefox/i.test(navigator.userAgent);

            function K(t, e, n) {
                var i = H(t, (function (t) {
                        return t.name === e
                    })),
                    r = !!i && t.some((function (t) {
                        return t.name === n && t.enabled && t.order < i.order
                    }));
                if (!r) {
                    var o = "`" + e + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }
            var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Z = J.slice(3);

            function tt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Z.indexOf(t),
                    i = Z.slice(n + 1).concat(Z.slice(0, n));
                return e ? i.reverse() : i
            }
            var et = "flip",
                nt = "clockwise",
                it = "counterclockwise";

            function rt(t, e, n, i) {
                var r = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(i),
                    s = t.split(/(\+|\-)/).map((function (t) {
                        return t.trim()
                    })),
                    a = s.indexOf(H(s, (function (t) {
                        return -1 !== t.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (u = u.map((function (t, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        s = !1;
                    return t.reduce((function (t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                    }), []).map((function (t) {
                        return function (t, e, n, i) {
                            var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +r[1],
                                s = r[2];
                            if (!o) return t;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return E(a)[e] / 100 * o
                            }
                            if ("vh" === s || "vw" === s) {
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                            }
                            return o
                        }(t, r, e, n)
                    }))
                }))).forEach((function (t, e) {
                    t.forEach((function (n, i) {
                        Y(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
                    }))
                })), r
            }
            var ot = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {},
                    onUpdate: function () {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function (t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = e.split("-")[1];
                                if (i) {
                                    var r = t.offsets,
                                        o = r.reference,
                                        s = r.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        u = a ? "width" : "height",
                                        c = {
                                            start: x({}, l, o[l]),
                                            end: x({}, l, o[l] + o[u] - s[u])
                                        };
                                    t.offsets.popper = S({}, s, c[i])
                                }
                                return t
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.offset,
                                    i = t.placement,
                                    r = t.offsets,
                                    o = r.popper,
                                    s = r.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = Y(+n) ? [+n, 0] : rt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.boundariesElement || f(t.instance.popper);
                                t.instance.reference === n && (n = f(n));
                                var i = z("transform"),
                                    r = t.instance.popper.style,
                                    o = r.top,
                                    s = r.left,
                                    a = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = A(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                r.top = o, r.left = s, r[i] = a, e.boundaries = l;
                                var u = e.priority,
                                    c = t.offsets.popper,
                                    d = {
                                        primary: function (t) {
                                            var n = c[t];
                                            return c[t] < l[t] && !e.escapeWithReference && (n = Math.max(c[t], l[t])), x({}, t, n)
                                        },
                                        secondary: function (t) {
                                            var n = "right" === t ? "left" : "top",
                                                i = c[n];
                                            return c[t] > l[t] && !e.escapeWithReference && (i = Math.min(c[n], l[t] - ("right" === t ? c.width : c.height))), x({}, n, i)
                                        }
                                    };
                                return u.forEach((function (t) {
                                    var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                    c = S({}, c, d[e](t))
                                })), t.offsets.popper = c, t
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function (t) {
                                var e = t.offsets,
                                    n = e.popper,
                                    i = e.reference,
                                    r = t.placement.split("-")[0],
                                    o = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(r),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    u = s ? "width" : "height";
                                return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function (t, e) {
                                var n;
                                if (!K(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                var i = e.element;
                                if ("string" == typeof i) {
                                    if (!(i = t.instance.popper.querySelector(i))) return t
                                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                var r = t.placement.split("-")[0],
                                    o = t.offsets,
                                    a = o.popper,
                                    l = o.reference,
                                    u = -1 !== ["left", "right"].indexOf(r),
                                    c = u ? "height" : "width",
                                    d = u ? "Top" : "Left",
                                    h = d.toLowerCase(),
                                    f = u ? "left" : "top",
                                    p = u ? "bottom" : "right",
                                    g = j(i)[c];
                                l[p] - g < a[h] && (t.offsets.popper[h] -= a[h] - (l[p] - g)), l[h] + g > a[p] && (t.offsets.popper[h] += l[h] + g - a[p]), t.offsets.popper = E(t.offsets.popper);
                                var m = l[h] + l[c] / 2 - g / 2,
                                    v = s(t.instance.popper),
                                    y = parseFloat(v["margin" + d]),
                                    b = parseFloat(v["border" + d + "Width"]),
                                    w = m - t.offsets.popper[h] - y - b;
                                return w = Math.max(Math.min(a[c] - g, w), 0), t.arrowElement = i, t.offsets.arrow = (x(n = {}, h, Math.round(w)), x(n, f, ""), n), t
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (t, e) {
                                if (B(t.instance.modifiers, "inner")) return t;
                                if (t.flipped && t.placement === t.originalPlacement) return t;
                                var n = A(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                    i = t.placement.split("-")[0],
                                    r = N(i),
                                    o = t.placement.split("-")[1] || "",
                                    s = [];
                                switch (e.behavior) {
                                    case et:
                                        s = [i, r];
                                        break;
                                    case nt:
                                        s = tt(i);
                                        break;
                                    case it:
                                        s = tt(i, !0);
                                        break;
                                    default:
                                        s = e.behavior
                                }
                                return s.forEach((function (a, l) {
                                    if (i !== a || s.length === l + 1) return t;
                                    i = t.placement.split("-")[0], r = N(i);
                                    var u = t.offsets.popper,
                                        c = t.offsets.reference,
                                        d = Math.floor,
                                        h = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                                        f = d(u.left) < d(n.left),
                                        p = d(u.right) > d(n.right),
                                        g = d(u.top) < d(n.top),
                                        m = d(u.bottom) > d(n.bottom),
                                        v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!e.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                        w = !!e.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && f || !y && "start" === o && m || !y && "end" === o && g),
                                        C = b || w;
                                    (h || v || C) && (t.flipped = !0, (h || v) && (i = s[l + 1]), C && (o = function (t) {
                                        return "end" === t ? "start" : "start" === t ? "end" : t
                                    }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = S({}, t.offsets.popper, M(t.instance.popper, t.offsets.reference, t.placement)), t = W(t.instance.modifiers, t, "flip"))
                                })), t
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function (t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = t.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = N(e), t.offsets.popper = E(r), t
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function (t) {
                                if (!K(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                var e = t.offsets.reference,
                                    n = H(t.instance.modifiers, (function (t) {
                                        return "preventOverflow" === t.name
                                    })).boundaries;
                                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                    if (!0 === t.hide) return t;
                                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === t.hide) return t;
                                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                                }
                                return t
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.x,
                                    i = e.y,
                                    r = t.offsets.popper,
                                    o = H(t.instance.modifiers, (function (t) {
                                        return "applyStyle" === t.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== o ? o : e.gpuAcceleration,
                                    a = f(t.instance.popper),
                                    l = T(a),
                                    u = {
                                        position: r.position
                                    },
                                    c = function (t, e) {
                                        var n = t.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            s = Math.floor,
                                            a = function (t) {
                                                return t
                                            },
                                            l = o(r.width),
                                            u = o(i.width),
                                            c = -1 !== ["left", "right"].indexOf(t.placement),
                                            d = -1 !== t.placement.indexOf("-"),
                                            h = e ? c || d || l % 2 == u % 2 ? o : s : a,
                                            f = e ? o : a;
                                        return {
                                            left: h(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left),
                                            top: f(i.top),
                                            bottom: f(i.bottom),
                                            right: h(i.right)
                                        }
                                    }(t, window.devicePixelRatio < 2 || !X),
                                    d = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    p = z("transform"),
                                    g = void 0,
                                    m = void 0;
                                if (m = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, g = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, s && p) u[p] = "translate3d(" + g + "px, " + m + "px, 0)", u[d] = 0, u[h] = 0, u.willChange = "transform";
                                else {
                                    var v = "bottom" === d ? -1 : 1,
                                        y = "right" === h ? -1 : 1;
                                    u[d] = m * v, u[h] = g * y, u.willChange = d + ", " + h
                                }
                                var b = {
                                    "x-placement": t.placement
                                };
                                return t.attributes = S({}, b, t.attributes), t.styles = S({}, u, t.styles), t.arrowStyles = S({}, t.offsets.arrow, t.arrowStyles), t
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function (t) {
                                var e, n;
                                return G(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function (t) {
                                    !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                                })), t.arrowElement && Object.keys(t.arrowStyles).length && G(t.arrowElement, t.arrowStyles), t
                            },
                            onLoad: function (t, e, n, i, r) {
                                var o = $(r, e, t, n.positionFixed),
                                    s = L(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return e.setAttribute("x-placement", s), G(e, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                st = function () {
                    function t(e, n) {
                        var i = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        C(this, t), this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update)
                        }, this.update = r(this.update.bind(this)), this.options = S({}, t.Defaults, s), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(S({}, t.Defaults.modifiers, s.modifiers)).forEach((function (e) {
                            i.options.modifiers[e] = S({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                            return S({
                                name: t
                            }, i.options.modifiers[t])
                        })).sort((function (t, e) {
                            return t.order - e.order
                        })), this.modifiers.forEach((function (t) {
                            t.enabled && o(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                        })), this.update();
                        var a = this.options.eventsEnabled;
                        a && this.enableEventListeners(), this.state.eventsEnabled = a
                    }
                    return _(t, [{
                        key: "update",
                        value: function () {
                            return R.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return q.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return V.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return Q.call(this)
                        }
                    }]), t
                }();
            st.Utils = ("undefined" != typeof window ? window : t).PopperUtils, st.placements = J, st.Defaults = ot, e.default = st
        }.call(e, n(17))
}, function (t, e, n) {
    /*!
     * wavesurfer.js 2.1.3 (2019-01-21)
     * https://github.com/katspaugh/wavesurfer.js
     * @license BSD-3-Clause
     */
    ! function (e, n) {
        t.exports = n()
    }(window, (function () {
        return function (t) {
            var e = {};

            function n(i) {
                if (e[i]) return e[i].exports;
                var r = e[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function (t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: i
                })
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (n.r(i), Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(i, r, function (e) {
                        return t[e]
                    }.bind(null, r));
                return i
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 4)
        }([function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ajax", {
                enumerable: !0,
                get: function () {
                    return i.default
                }
            }), Object.defineProperty(e, "getId", {
                enumerable: !0,
                get: function () {
                    return r.default
                }
            }), Object.defineProperty(e, "max", {
                enumerable: !0,
                get: function () {
                    return o.default
                }
            }), Object.defineProperty(e, "min", {
                enumerable: !0,
                get: function () {
                    return s.default
                }
            }), Object.defineProperty(e, "Observer", {
                enumerable: !0,
                get: function () {
                    return a.default
                }
            }), Object.defineProperty(e, "extend", {
                enumerable: !0,
                get: function () {
                    return l.default
                }
            }), Object.defineProperty(e, "style", {
                enumerable: !0,
                get: function () {
                    return u.default
                }
            }), Object.defineProperty(e, "requestAnimationFrame", {
                enumerable: !0,
                get: function () {
                    return c.default
                }
            }), Object.defineProperty(e, "frame", {
                enumerable: !0,
                get: function () {
                    return d.default
                }
            }), Object.defineProperty(e, "debounce", {
                enumerable: !0,
                get: function () {
                    return h.default
                }
            }), Object.defineProperty(e, "preventClick", {
                enumerable: !0,
                get: function () {
                    return f.default
                }
            });
            var i = p(n(5)),
                r = p(n(6)),
                o = p(n(7)),
                s = p(n(8)),
                a = p(n(1)),
                l = p(n(9)),
                u = p(n(10)),
                c = p(n(2)),
                d = p(n(11)),
                h = p(n(12)),
                f = p(n(13));

            function p(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
        }, function (t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.handlers = null
                }
                var e, n;
                return e = t, (n = [{
                    key: "on",
                    value: function (t, e) {
                        var n = this;
                        this.handlers || (this.handlers = {});
                        var i = this.handlers[t];
                        return i || (i = this.handlers[t] = []), i.push(e), {
                            name: t,
                            callback: e,
                            un: function (t, e) {
                                return n.un(t, e)
                            }
                        }
                    }
                }, {
                    key: "un",
                    value: function (t, e) {
                        if (this.handlers) {
                            var n, i = this.handlers[t];
                            if (i)
                                if (e)
                                    for (n = i.length - 1; 0 <= n; n--) i[n] == e && i.splice(n, 1);
                                else i.length = 0
                        }
                    }
                }, {
                    key: "unAll",
                    value: function () {
                        this.handlers = null
                    }
                }, {
                    key: "once",
                    value: function (t, e) {
                        var n = this;
                        return this.on(t, (function i() {
                            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                            e.apply(n, o), setTimeout((function () {
                                n.un(t, i)
                            }), 0)
                        }))
                    }
                }, {
                    key: "fireEvent",
                    value: function (t) {
                        for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        if (this.handlers) {
                            var r = this.handlers[t];
                            r && r.forEach((function (t) {
                                t.apply(void 0, n)
                            }))
                        }
                    }
                }]) && i(e.prototype, n), t
            }();
            e.default = r, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
                return setTimeout(t, 1e3 / 60)
            }).bind(window);
            e.default = i, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                        } return e.default = t, e
            }(n(0));

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function s(t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }

            function a(t) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function u(t, e, n) {
                return e && l(t.prototype, e), n && l(t, n), t
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var d = "playing",
                h = "paused",
                f = "finished",
                p = function (t) {
                    function e(t) {
                        var n, i, r;
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (r = s(this, a(e).call(this))).audioContext = null, r.offlineAudioContext = null, r.stateBehaviors = (o(n = {}, d, {
                            init: function () {
                                this.addOnAudioProcess()
                            },
                            getPlayedPercents: function () {
                                var t = this.getDuration();
                                return this.getCurrentTime() / t || 0
                            },
                            getCurrentTime: function () {
                                return this.startPosition + this.getPlayedTime()
                            }
                        }), o(n, h, {
                            init: function () {
                                this.removeOnAudioProcess()
                            },
                            getPlayedPercents: function () {
                                var t = this.getDuration();
                                return this.getCurrentTime() / t || 0
                            },
                            getCurrentTime: function () {
                                return this.startPosition
                            }
                        }), o(n, f, {
                            init: function () {
                                this.removeOnAudioProcess(), this.fireEvent("finish")
                            },
                            getPlayedPercents: function () {
                                return 1
                            },
                            getCurrentTime: function () {
                                return this.getDuration()
                            }
                        }), n), r.params = t, r.ac = t.audioContext || r.getAudioContext(), r.lastPlay = r.ac.currentTime, r.startPosition = 0, r.scheduledPause = null, r.states = (o(i = {}, d, Object.create(r.stateBehaviors[d])), o(i, h, Object.create(r.stateBehaviors[h])), o(i, f, Object.create(r.stateBehaviors[f])), i), r.analyser = null, r.buffer = null, r.filters = [], r.gainNode = null, r.mergedPeaks = null, r.offlineAc = null, r.peaks = null, r.playbackRate = 1, r.analyser = null, r.scriptNode = null, r.source = null, r.splitPeaks = [], r.state = null, r.explicitDuration = null, r
                    }
                    return function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && c(t, e)
                    }(e, i.Observer), u(e, [{
                        key: "supportsWebAudio",
                        value: function () {
                            return !(!window.AudioContext && !window.webkitAudioContext)
                        }
                    }, {
                        key: "getAudioContext",
                        value: function () {
                            return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext || window.webkitAudioContext)), window.WaveSurferAudioContext
                        }
                    }, {
                        key: "getOfflineAudioContext",
                        value: function (t) {
                            return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, t)), window.WaveSurferOfflineAudioContext
                        }
                    }]), u(e, [{
                        key: "init",
                        value: function () {
                            this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(h), this.setPlaybackRate(this.params.audioRate), this.setLength(0)
                        }
                    }, {
                        key: "disconnectFilters",
                        value: function () {
                            this.filters && (this.filters.forEach((function (t) {
                                t && t.disconnect()
                            })), this.filters = null, this.analyser.connect(this.gainNode))
                        }
                    }, {
                        key: "setState",
                        value: function (t) {
                            this.state !== this.states[t] && (this.state = this.states[t], this.state.init.call(this))
                        }
                    }, {
                        key: "setFilter",
                        value: function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            this.setFilters(e)
                        }
                    }, {
                        key: "setFilters",
                        value: function (t) {
                            this.disconnectFilters(), t && t.length && (this.filters = t, this.analyser.disconnect(), t.reduce((function (t, e) {
                                return t.connect(e), e
                            }), this.analyser).connect(this.gainNode))
                        }
                    }, {
                        key: "createScriptNode",
                        value: function () {
                            this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(e.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(e.scriptBufferSize), this.scriptNode.connect(this.ac.destination)
                        }
                    }, {
                        key: "addOnAudioProcess",
                        value: function () {
                            var t = this;
                            this.scriptNode.onaudioprocess = function () {
                                var e = t.getCurrentTime();
                                e >= t.getDuration() ? (t.setState(f), t.fireEvent("pause")) : e >= t.scheduledPause ? t.pause() : t.state === t.states[d] && t.fireEvent("audioprocess", e)
                            }
                        }
                    }, {
                        key: "removeOnAudioProcess",
                        value: function () {
                            this.scriptNode.onaudioprocess = function () {}
                        }
                    }, {
                        key: "createAnalyserNode",
                        value: function () {
                            this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode)
                        }
                    }, {
                        key: "createVolumeNode",
                        value: function () {
                            this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination)
                        }
                    }, {
                        key: "setSinkId",
                        value: function (t) {
                            if (t) {
                                var e = new window.Audio;
                                if (!e.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
                                e.autoplay = !0;
                                var n = this.ac.createMediaStreamDestination();
                                return this.gainNode.disconnect(), this.gainNode.connect(n), e.srcObject = n.stream, e.setSinkId(t)
                            }
                            return Promise.reject(new Error("Invalid deviceId: " + t))
                        }
                    }, {
                        key: "setVolume",
                        value: function (t) {
                            this.gainNode.gain.setValueAtTime(t, this.ac.currentTime)
                        }
                    }, {
                        key: "getVolume",
                        value: function () {
                            return this.gainNode.gain.value
                        }
                    }, {
                        key: "decodeArrayBuffer",
                        value: function (t, e, n) {
                            this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100)), this.offlineAc.decodeAudioData(t, (function (t) {
                                return e(t)
                            }), n)
                        }
                    }, {
                        key: "setPeaks",
                        value: function (t, e) {
                            this.explicitDuration = e, this.peaks = t
                        }
                    }, {
                        key: "setLength",
                        value: function (t) {
                            if (!this.mergedPeaks || t != 2 * this.mergedPeaks.length - 1 + 2) {
                                this.splitPeaks = [], this.mergedPeaks = [];
                                var e, n = this.buffer ? this.buffer.numberOfChannels : 1;
                                for (e = 0; e < n; e++) this.splitPeaks[e] = [], this.splitPeaks[e][2 * (t - 1)] = 0, this.splitPeaks[e][2 * (t - 1) + 1] = 0;
                                this.mergedPeaks[2 * (t - 1)] = 0, this.mergedPeaks[2 * (t - 1) + 1] = 0
                            }
                        }
                    }, {
                        key: "getPeaks",
                        value: function (t, e, n) {
                            if (this.peaks) return this.peaks;
                            if (e = e || 0, n = n || t - 1, this.setLength(t), !this.buffer) return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                            if (!this.buffer.length) {
                                var i = this.createBuffer(1, 4096, this.sampleRate);
                                this.buffer = i.buffer
                            }
                            var r, o = this.buffer.length / t,
                                s = ~~(o / 10) || 1,
                                a = this.buffer.numberOfChannels;
                            for (r = 0; r < a; r++) {
                                var l = this.splitPeaks[r],
                                    u = this.buffer.getChannelData(r),
                                    c = void 0;
                                for (c = e; c <= n; c++) {
                                    var d = ~~(c * o),
                                        h = ~~(d + o),
                                        f = 0,
                                        p = 0,
                                        g = void 0;
                                    for (g = d; g < h; g += s) {
                                        var m = u[g];
                                        p < m && (p = m), m < f && (f = m)
                                    }
                                    l[2 * c] = p, l[2 * c + 1] = f, (0 == r || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p), (0 == r || f < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = f)
                                }
                            }
                            return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                        }
                    }, {
                        key: "getPlayedPercents",
                        value: function () {
                            return this.state.getPlayedPercents.call(this)
                        }
                    }, {
                        key: "disconnectSource",
                        value: function () {
                            this.source && this.source.disconnect()
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null)
                        }
                    }, {
                        key: "load",
                        value: function (t) {
                            this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = t, this.createSource()
                        }
                    }, {
                        key: "createSource",
                        value: function () {
                            this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(this.analyser)
                        }
                    }, {
                        key: "isPaused",
                        value: function () {
                            return this.state !== this.states[d]
                        }
                    }, {
                        key: "getDuration",
                        value: function () {
                            return this.buffer ? this.buffer.duration : this.explicitDuration ? this.explicitDuration : 0
                        }
                    }, {
                        key: "seekTo",
                        value: function (t, e) {
                            if (this.buffer) return (this.scheduledPause = null) == t && (t = this.getCurrentTime()) >= this.getDuration() && (t = 0), null == e && (e = this.getDuration()), this.startPosition = t, this.lastPlay = this.ac.currentTime, this.state === this.states[f] && this.setState(h), {
                                start: t,
                                end: e
                            }
                        }
                    }, {
                        key: "getPlayedTime",
                        value: function () {
                            return (this.ac.currentTime - this.lastPlay) * this.playbackRate
                        }
                    }, {
                        key: "play",
                        value: function (t, e) {
                            if (this.buffer) {
                                this.createSource();
                                var n = this.seekTo(t, e);
                                t = n.start, e = n.end, this.scheduledPause = e, this.source.start(0, t, e - t), "suspended" == this.ac.state && this.ac.resume && this.ac.resume(), this.setState(d), this.fireEvent("play")
                            }
                        }
                    }, {
                        key: "pause",
                        value: function () {
                            this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(h), this.fireEvent("pause")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function () {
                            return this.state.getCurrentTime.call(this)
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function () {
                            return this.playbackRate
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function (t) {
                            t = t || 1, this.isPaused() ? this.playbackRate = t : (this.pause(), this.playbackRate = t, this.play())
                        }
                    }]), e
                }();
            (e.default = p).scriptBufferSize = 256, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            } return e.default = t, e
                }(n(0)),
                r = l(n(14)),
                o = l(n(3)),
                s = l(n(16)),
                a = l(n(17));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? f(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function g(t, e, n) {
                return e && p(t.prototype, e), n && p(t, n), t
            }
            var m = function (t) {
                function e(t) {
                    var n;
                    if (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = c(this, d(e).call(this))).defaultParams = {
                            audioContext: null,
                            audioScriptProcessor: null,
                            audioRate: 1,
                            autoCenter: !0,
                            backend: "WebAudio",
                            barHeight: 1,
                            barGap: null,
                            container: null,
                            cursorColor: "#333",
                            cursorWidth: 1,
                            dragSelection: !0,
                            fillParent: !0,
                            forceDecode: !1,
                            height: 128,
                            hideScrollbar: !1,
                            interact: !0,
                            loopSelection: !0,
                            maxCanvasWidth: 4e3,
                            mediaContainer: null,
                            mediaControls: !1,
                            mediaType: "audio",
                            minPxPerSec: 20,
                            normalize: !1,
                            partialRender: !1,
                            pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                            plugins: [],
                            progressColor: "#555",
                            removeMediaElementOnDestroy: !0,
                            renderer: r.default,
                            responsive: !1,
                            scrollParent: !1,
                            skipLength: 2,
                            splitChannels: !1,
                            waveColor: "#999",
                            xhr: {}
                        }, n.backends = {
                            MediaElement: s.default,
                            WebAudio: o.default
                        }, n.util = i, n.params = i.extend({}, n.defaultParams, t), n.container = "string" == typeof t.container ? document.querySelector(n.params.container) : n.params.container, !n.container) throw new Error("Container element not found");
                    if (null == n.params.mediaContainer ? n.mediaContainer = n.container : "string" == typeof n.params.mediaContainer ? n.mediaContainer = document.querySelector(n.params.mediaContainer) : n.mediaContainer = n.params.mediaContainer, !n.mediaContainer) throw new Error("Media Container element not found");
                    if (n.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
                    if (n.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
                    if (n.savedVolume = 0, n.isMuted = !1, n.tmpEvents = [], n.currentAjax = null, n.arraybuffer = null, n.drawer = null, n.backend = null, n.peakCache = null, "function" != typeof n.params.renderer) throw new Error("Renderer parameter is invalid");
                    n.Drawer = n.params.renderer, n.Backend = n.backends[n.params.backend], n.initialisedPluginList = {}, n.isDestroyed = !1, n.isReady = !1;
                    var a = 0;
                    return n._onResize = i.debounce((function () {
                        a == n.drawer.wrapper.clientWidth || n.params.scrollParent || (a = n.drawer.wrapper.clientWidth, n.drawer.fireEvent("redraw"))
                    }), "number" == typeof n.params.responsive ? n.params.responsive : 100), c(n, f(f(n)))
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && h(t, e)
                }(e, i.Observer), g(e, null, [{
                    key: "create",
                    value: function (t) {
                        return new e(t).init()
                    }
                }]), g(e, [{
                    key: "init",
                    value: function () {
                        return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this
                    }
                }, {
                    key: "registerPlugins",
                    value: function (t) {
                        var e = this;
                        return t.forEach((function (t) {
                            return e.addPlugin(t)
                        })), t.forEach((function (t) {
                            t.deferInit || e.initPlugin(t.name)
                        })), this.fireEvent("plugins-registered", t), this
                    }
                }, {
                    key: "addPlugin",
                    value: function (t) {
                        var e = this;
                        if (!t.name) throw new Error("Plugin does not have a name!");
                        if (!t.instance) throw new Error("Plugin ".concat(t.name, " does not have an instance property!"));
                        t.staticProps && Object.keys(t.staticProps).forEach((function (n) {
                            e[n] = t.staticProps[n]
                        }));
                        var n = t.instance;
                        return Object.getOwnPropertyNames(i.Observer.prototype).forEach((function (t) {
                            n.prototype[t] = i.Observer.prototype[t]
                        })), this[t.name] = new n(t.params || {}, this), this.fireEvent("plugin-added", t.name), this
                    }
                }, {
                    key: "initPlugin",
                    value: function (t) {
                        if (!this[t]) throw new Error("Plugin ".concat(t, " has not been added yet!"));
                        return this.initialisedPluginList[t] && this.destroyPlugin(t), this[t].init(), this.initialisedPluginList[t] = !0, this.fireEvent("plugin-initialised", t), this
                    }
                }, {
                    key: "destroyPlugin",
                    value: function (t) {
                        if (!this[t]) throw new Error("Plugin ".concat(t, " has not been added yet and cannot be destroyed!"));
                        if (!this.initialisedPluginList[t]) throw new Error("Plugin ".concat(t, " is not active and cannot be destroyed!"));
                        if ("function" != typeof this[t].destroy) throw new Error("Plugin ".concat(t, " does not have a destroy function!"));
                        return this[t].destroy(), delete this.initialisedPluginList[t], this.fireEvent("plugin-destroyed", t), this
                    }
                }, {
                    key: "destroyAllPlugins",
                    value: function () {
                        var t = this;
                        Object.keys(this.initialisedPluginList).forEach((function (e) {
                            return t.destroyPlugin(e)
                        }))
                    }
                }, {
                    key: "createDrawer",
                    value: function () {
                        var t = this;
                        this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", (function () {
                            t.drawBuffer(), t.drawer.progress(t.backend.getPlayedPercents())
                        })), this.drawer.on("click", (function (e, n) {
                            setTimeout((function () {
                                return t.seekTo(n)
                            }), 0)
                        })), this.drawer.on("scroll", (function (e) {
                            t.params.partialRender && t.drawBuffer(), t.fireEvent("scroll", e)
                        }))
                    }
                }, {
                    key: "createBackend",
                    value: function () {
                        var t = this;
                        this.backend && this.backend.destroy(), "AudioElement" == this.params.backend && (this.params.backend = "MediaElement"), "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) || (this.params.backend = "MediaElement"), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", (function () {
                            t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("finish")
                        })), this.backend.on("play", (function () {
                            return t.fireEvent("play")
                        })), this.backend.on("pause", (function () {
                            return t.fireEvent("pause")
                        })), this.backend.on("audioprocess", (function (e) {
                            t.drawer.progress(t.backend.getPlayedPercents()), t.fireEvent("audioprocess", e)
                        }))
                    }
                }, {
                    key: "createPeakCache",
                    value: function () {
                        this.params.partialRender && (this.peakCache = new a.default)
                    }
                }, {
                    key: "getDuration",
                    value: function () {
                        return this.backend.getDuration()
                    }
                }, {
                    key: "getCurrentTime",
                    value: function () {
                        return this.backend.getCurrentTime()
                    }
                }, {
                    key: "setCurrentTime",
                    value: function (t) {
                        t >= this.getDuration() ? this.seekTo(1) : this.seekTo(t / this.getDuration())
                    }
                }, {
                    key: "play",
                    value: function (t, e) {
                        var n = this;
                        return this.fireEvent("interaction", (function () {
                            return n.play(t, e)
                        })), this.backend.play(t, e)
                    }
                }, {
                    key: "pause",
                    value: function () {
                        if (!this.backend.isPaused()) return this.backend.pause()
                    }
                }, {
                    key: "playPause",
                    value: function () {
                        return this.backend.isPaused() ? this.play() : this.pause()
                    }
                }, {
                    key: "isPlaying",
                    value: function () {
                        return !this.backend.isPaused()
                    }
                }, {
                    key: "skipBackward",
                    value: function (t) {
                        this.skip(-t || -this.params.skipLength)
                    }
                }, {
                    key: "skipForward",
                    value: function (t) {
                        this.skip(t || this.params.skipLength)
                    }
                }, {
                    key: "skip",
                    value: function (t) {
                        var e = this.getDuration() || 1,
                            n = this.getCurrentTime() || 0;
                        n = Math.max(0, Math.min(e, n + (t || 0))), this.seekAndCenter(n / e)
                    }
                }, {
                    key: "seekAndCenter",
                    value: function (t) {
                        this.seekTo(t), this.drawer.recenter(t)
                    }
                }, {
                    key: "seekTo",
                    value: function (t) {
                        var e = this;
                        if ("number" != typeof t || !isFinite(t) || t < 0 || 1 < t) return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                        this.fireEvent("interaction", (function () {
                            return e.seekTo(t)
                        }));
                        var n = this.backend.isPaused();
                        n || this.backend.pause();
                        var i = this.params.scrollParent;
                        this.params.scrollParent = !1, this.backend.seekTo(t * this.getDuration()), this.drawer.progress(t), n || this.backend.play(), this.params.scrollParent = i, this.fireEvent("seek", t)
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.pause(), this.seekTo(0), this.drawer.progress(0)
                    }
                }, {
                    key: "setSinkId",
                    value: function (t) {
                        return this.backend.setSinkId(t)
                    }
                }, {
                    key: "setVolume",
                    value: function (t) {
                        this.backend.setVolume(t), this.fireEvent("volume", t)
                    }
                }, {
                    key: "getVolume",
                    value: function () {
                        return this.backend.getVolume()
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function (t) {
                        this.backend.setPlaybackRate(t)
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function () {
                        return this.backend.getPlaybackRate()
                    }
                }, {
                    key: "toggleMute",
                    value: function () {
                        this.setMute(!this.isMuted)
                    }
                }, {
                    key: "setMute",
                    value: function (t) {
                        t !== this.isMuted && (t ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0, this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1, this.fireEvent("volume", this.savedVolume))), this.fireEvent("mute", this.isMuted)
                    }
                }, {
                    key: "getMute",
                    value: function () {
                        return this.isMuted
                    }
                }, {
                    key: "isReady",
                    value: function () {
                        return this.isReady
                    }
                }, {
                    key: "getFilters",
                    value: function () {
                        return this.backend.filters || []
                    }
                }, {
                    key: "toggleScroll",
                    value: function () {
                        this.params.scrollParent = !this.params.scrollParent, this.drawBuffer()
                    }
                }, {
                    key: "toggleInteraction",
                    value: function () {
                        this.params.interact = !this.params.interact
                    }
                }, {
                    key: "getWaveColor",
                    value: function () {
                        return this.params.waveColor
                    }
                }, {
                    key: "setWaveColor",
                    value: function (t) {
                        this.params.waveColor = t, this.drawBuffer()
                    }
                }, {
                    key: "getProgressColor",
                    value: function () {
                        return this.params.progressColor
                    }
                }, {
                    key: "setProgressColor",
                    value: function (t) {
                        this.params.progressColor = t, this.drawBuffer()
                    }
                }, {
                    key: "getCursorColor",
                    value: function () {
                        return this.params.cursorColor
                    }
                }, {
                    key: "setCursorColor",
                    value: function (t) {
                        this.params.cursorColor = t, this.drawer.updateCursor()
                    }
                }, {
                    key: "getHeight",
                    value: function () {
                        return this.params.height
                    }
                }, {
                    key: "setHeight",
                    value: function (t) {
                        this.params.height = t, this.drawer.setHeight(t * this.params.pixelRatio), this.drawBuffer()
                    }
                }, {
                    key: "drawBuffer",
                    value: function () {
                        var t, e = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
                            n = this.drawer.getWidth(),
                            i = e,
                            r = this.drawer.getScrollX(),
                            o = Math.max(r + n, i);
                        if (this.params.fillParent && (!this.params.scrollParent || e < n) && (r = 0, o = i = n), this.params.partialRender) {
                            var s, a = this.peakCache.addRangeToPeakCache(i, r, o);
                            for (s = 0; s < a.length; s++) t = this.backend.getPeaks(i, a[s][0], a[s][1]), this.drawer.drawPeaks(t, i, a[s][0], a[s][1])
                        } else t = this.backend.getPeaks(i, r, o), this.drawer.drawPeaks(t, i, r, o);
                        this.fireEvent("redraw", t, i)
                    }
                }, {
                    key: "zoom",
                    value: function (t) {
                        this.params.scrollParent = t ? (this.params.minPxPerSec = t, !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", t)
                    }
                }, {
                    key: "loadArrayBuffer",
                    value: function (t) {
                        var e = this;
                        this.decodeArrayBuffer(t, (function (t) {
                            e.isDestroyed || e.loadDecodedBuffer(t)
                        }))
                    }
                }, {
                    key: "loadDecodedBuffer",
                    value: function (t) {
                        this.backend.load(t), this.drawBuffer(), this.fireEvent("ready"), this.isReady = !0
                    }
                }, {
                    key: "loadBlob",
                    value: function (t) {
                        var e = this,
                            n = new FileReader;
                        n.addEventListener("progress", (function (t) {
                            return e.onProgress(t)
                        })), n.addEventListener("load", (function (t) {
                            return e.loadArrayBuffer(t.target.result)
                        })), n.addEventListener("error", (function () {
                            return e.fireEvent("error", "Error reading file")
                        })), n.readAsArrayBuffer(t), this.empty()
                    }
                }, {
                    key: "load",
                    value: function (t, e, n, i) {
                        if (this.empty(), n) {
                            var r = {
                                    "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(n),
                                    "Peaks are not provided": !e,
                                    "Backend is not of type MediaElement": "MediaElement" !== this.params.backend,
                                    "Url is not of type string": "string" != typeof t
                                },
                                o = Object.keys(r).filter((function (t) {
                                    return r[t]
                                }));
                            o.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + o.join("\n\t- ")), n = null)
                        }
                        switch (this.params.backend) {
                            case "WebAudio":
                                return this.loadBuffer(t, e, i);
                            case "MediaElement":
                                return this.loadMediaElement(t, e, n, i)
                        }
                    }
                }, {
                    key: "loadBuffer",
                    value: function (t, e, n) {
                        var i = this,
                            r = function (e) {
                                return e && i.tmpEvents.push(i.once("ready", e)), i.getArrayBuffer(t, (function (t) {
                                    return i.loadArrayBuffer(t)
                                }))
                            };
                        if (!e) return r();
                        this.backend.setPeaks(e, n), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", r))
                    }
                }, {
                    key: "loadMediaElement",
                    value: function (t, e, n, i) {
                        var r = this,
                            o = t;
                        if ("string" == typeof t) this.backend.load(o, this.mediaContainer, e, n);
                        else {
                            var s = t;
                            this.backend.loadElt(s, e), o = s.src
                        }
                        this.tmpEvents.push(this.backend.once("canplay", (function () {
                            r.drawBuffer(), r.fireEvent("ready"), r.isReady = !0
                        })), this.backend.once("error", (function (t) {
                            return r.fireEvent("error", t)
                        }))), e && this.backend.setPeaks(e, i), e && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(o, (function (t) {
                            r.decodeArrayBuffer(t, (function (t) {
                                r.backend.buffer = t, r.backend.setPeaks(null), r.drawBuffer(), r.fireEvent("waveform-ready")
                            }))
                        }))
                    }
                }, {
                    key: "decodeArrayBuffer",
                    value: function (t, e) {
                        var n = this;
                        this.arraybuffer = t, this.backend.decodeArrayBuffer(t, (function (i) {
                            n.isDestroyed || n.arraybuffer != t || (e(i), n.arraybuffer = null)
                        }), (function () {
                            return n.fireEvent("error", "Error decoding audiobuffer")
                        }))
                    }
                }, {
                    key: "getArrayBuffer",
                    value: function (t, e) {
                        var n = this,
                            r = i.ajax({
                                url: t,
                                responseType: "arraybuffer",
                                xhr: this.params.xhr
                            });
                        return this.currentAjax = r, this.tmpEvents.push(r.on("progress", (function (t) {
                            n.onProgress(t)
                        })), r.on("success", (function (t, i) {
                            e(t), n.currentAjax = null
                        })), r.on("error", (function (t) {
                            n.fireEvent("error", "XHR error: " + t.target.statusText), n.currentAjax = null
                        }))), r
                    }
                }, {
                    key: "onProgress",
                    value: function (t) {
                        var e;
                        e = t.lengthComputable ? t.loaded / t.total : t.loaded / (t.loaded + 1e6), this.fireEvent("loading", Math.round(100 * e), t.target)
                    }
                }, {
                    key: "exportPCM",
                    value: function (t, e, n, i) {
                        t = t || 1024, i = i || 0, e = e || 1e4, n = n || !1;
                        var r = this.backend.getPeaks(t, i),
                            o = [].map.call(r, (function (t) {
                                return Math.round(t * e) / e
                            })),
                            s = JSON.stringify(o);
                        return n || window.open("data:application/json;charset=utf-8," + encodeURIComponent(s)), s
                    }
                }, {
                    key: "exportImage",
                    value: function (t, e) {
                        return t || (t = "image/png"), e || (e = 1), this.drawer.getImage(t, e)
                    }
                }, {
                    key: "cancelAjax",
                    value: function () {
                        this.currentAjax && (this.currentAjax.xhr.abort(), this.currentAjax = null)
                    }
                }, {
                    key: "clearTmpEvents",
                    value: function () {
                        this.tmpEvents.forEach((function (t) {
                            return t.un()
                        }))
                    }
                }, {
                    key: "empty",
                    value: function () {
                        this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.isReady = !1, this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({
                            length: this.drawer.getWidth()
                        }, 0)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !0, this.isReady = !1, this.arraybuffer = null
                    }
                }]), e
            }();
            (e.default = m).VERSION = "2.1.3", m.util = i, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                var e = new r.default,
                    n = new XMLHttpRequest,
                    i = !1;
                return n.open(t.method || "GET", t.url, !0), n.responseType = t.responseType || "json", t.xhr && (t.xhr.requestHeaders && t.xhr.requestHeaders.forEach((function (t) {
                    n.setRequestHeader(t.key, t.value)
                })), t.xhr.withCredentials && (n.withCredentials = !0)), n.addEventListener("progress", (function (t) {
                    e.fireEvent("progress", t), t.lengthComputable && t.loaded == t.total && (i = !0)
                })), n.addEventListener("load", (function (t) {
                    i || e.fireEvent("progress", t), e.fireEvent("load", t), 200 == n.status || 206 == n.status ? e.fireEvent("success", n.response, t) : e.fireEvent("error", t)
                })), n.addEventListener("error", (function (t) {
                    return e.fireEvent("error", t)
                })), n.send(), e.xhr = n, e
            };
            var i, r = (i = n(1)) && i.__esModule ? i : {
                default: i
            };
            t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function () {
                return "wavesurfer_" + Math.random().toString(32).substring(2)
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                var e = -1 / 0;
                return Object.keys(t).forEach((function (n) {
                    t[n] > e && (e = t[n])
                })), e
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                var e = Number(1 / 0);
                return Object.keys(t).forEach((function (n) {
                    t[n] < e && (e = t[n])
                })), e
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                return n.forEach((function (e) {
                    Object.keys(e).forEach((function (n) {
                        t[n] = e[n]
                    }))
                })), t
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t, e) {
                return Object.keys(e).forEach((function (n) {
                    t.style[n] !== e[n] && (t.style[n] = e[n])
                })), t
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                return function () {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return (0, r.default)((function () {
                        return t.apply(void 0, n)
                    }))
                }
            };
            var i, r = (i = n(2)) && i.__esModule ? i : {
                default: i
            };
            t.exports = e.default
        }, function (t, e) {
            function n(t, e, n) {
                var i, r, o, s, a;

                function l() {
                    var u = Date.now() - s;
                    u < e && 0 <= u ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), o = r = null))
                }
                null == e && (e = 100);
                var u = function () {
                    o = this, r = arguments, s = Date.now();
                    var u = n && !i;
                    return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
                };
                return u.clear = function () {
                    i && (clearTimeout(i), i = null)
                }, u.flush = function () {
                    i && (a = t.apply(o, r), o = r = null, clearTimeout(i), i = null)
                }, u
            }
            n.debounce = n, t.exports = n
        }, function (t, e, n) {
            "use strict";

            function i(t) {
                t.stopPropagation(), document.body.removeEventListener("click", i, !0)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                document.body.addEventListener("click", i, !0)
            }, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i, r = (i = n(15)) && i.__esModule ? i : {
                    default: i
                },
                o = function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            } return e.default = t, e
                }(n(0));

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function l(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }

            function u(t) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var d = function (t) {
                function e(t, n) {
                    var i;
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (i = l(this, u(e).call(this, t, n))).maxCanvasWidth = n.maxCanvasWidth, i.maxCanvasElementWidth = Math.round(n.maxCanvasWidth / n.pixelRatio), i.hasProgressCanvas = n.waveColor != n.progressColor, i.halfPixel = .5 / n.pixelRatio, i.canvases = [], i.progressWave = null, i
                }
                var n, i;
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(e, r.default), n = e, (i = [{
                    key: "init",
                    value: function () {
                        this.createWrapper(), this.createElements()
                    }
                }, {
                    key: "createElements",
                    value: function () {
                        this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), {
                            position: "absolute",
                            zIndex: 3,
                            left: 0,
                            top: 0,
                            bottom: 0,
                            overflow: "hidden",
                            width: "0",
                            display: "none",
                            boxSizing: "border-box",
                            borderRightStyle: "solid",
                            pointerEvents: "none"
                        })), this.addCanvas(), this.updateCursor()
                    }
                }, {
                    key: "updateCursor",
                    value: function () {
                        this.style(this.progressWave, {
                            borderRightWidth: this.params.cursorWidth + "px",
                            borderRightColor: this.params.cursorColor
                        })
                    }
                }, {
                    key: "updateSize",
                    value: function () {
                        for (var t = this, e = Math.round(this.width / this.params.pixelRatio), n = Math.ceil(e / this.maxCanvasElementWidth); this.canvases.length < n;) this.addCanvas();
                        for (; this.canvases.length > n;) this.removeCanvas();
                        this.canvases.forEach((function (e, n) {
                            var i = t.maxCanvasWidth + 2 * Math.ceil(t.params.pixelRatio / 2);
                            n == t.canvases.length - 1 && (i = t.width - t.maxCanvasWidth * (t.canvases.length - 1)), t.updateDimensions(e, i, t.height), t.clearWaveForEntry(e)
                        }))
                    }
                }, {
                    key: "addCanvas",
                    value: function () {
                        var t = {},
                            e = this.maxCanvasElementWidth * this.canvases.length;
                        t.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), {
                            position: "absolute",
                            zIndex: 2,
                            left: e + "px",
                            top: 0,
                            bottom: 0,
                            height: "100%",
                            pointerEvents: "none"
                        })), t.waveCtx = t.wave.getContext("2d"), this.hasProgressCanvas && (t.progress = this.progressWave.appendChild(this.style(document.createElement("canvas"), {
                            position: "absolute",
                            left: e + "px",
                            top: 0,
                            bottom: 0,
                            height: "100%"
                        })), t.progressCtx = t.progress.getContext("2d")), this.canvases.push(t)
                    }
                }, {
                    key: "removeCanvas",
                    value: function () {
                        var t = this.canvases.pop();
                        t.wave.parentElement.removeChild(t.wave), this.hasProgressCanvas && t.progress.parentElement.removeChild(t.progress)
                    }
                }, {
                    key: "updateDimensions",
                    value: function (t, e, n) {
                        var i = Math.round(e / this.params.pixelRatio),
                            r = Math.round(this.width / this.params.pixelRatio);
                        t.start = t.waveCtx.canvas.offsetLeft / r || 0, t.end = t.start + i / r, t.waveCtx.canvas.width = e, t.waveCtx.canvas.height = n, this.style(t.waveCtx.canvas, {
                            width: i + "px"
                        }), this.style(this.progressWave, {
                            display: "block"
                        }), this.hasProgressCanvas && (t.progressCtx.canvas.width = e, t.progressCtx.canvas.height = n, this.style(t.progressCtx.canvas, {
                            width: i + "px"
                        }))
                    }
                }, {
                    key: "clearWave",
                    value: function () {
                        var t = this;
                        this.canvases.forEach((function (e) {
                            return t.clearWaveForEntry(e)
                        }))
                    }
                }, {
                    key: "clearWaveForEntry",
                    value: function (t) {
                        t.waveCtx.clearRect(0, 0, t.waveCtx.canvas.width, t.waveCtx.canvas.height), this.hasProgressCanvas && t.progressCtx.clearRect(0, 0, t.progressCtx.canvas.width, t.progressCtx.canvas.height)
                    }
                }, {
                    key: "drawBars",
                    value: function (t, e, n, i) {
                        var r = this;
                        return this.prepareDraw(t, e, n, i, (function (t) {
                            var e = t.absmax,
                                o = t.hasMinVals,
                                s = (t.height, t.offsetY),
                                a = t.halfH,
                                l = t.peaks;
                            if (void 0 !== n) {
                                var u, c = o ? 2 : 1,
                                    d = l.length / c,
                                    h = r.params.barWidth * r.params.pixelRatio,
                                    f = h + (null === r.params.barGap ? Math.max(r.params.pixelRatio, ~~(h / 2)) : Math.max(r.params.pixelRatio, r.params.barGap * r.params.pixelRatio)),
                                    p = d / r.width,
                                    g = i;
                                for (u = n; u < g; u += f) {
                                    var m = l[Math.floor(u * p * c)] || 0,
                                        v = Math.round(m / e * a);
                                    r.fillRect(u + r.halfPixel, a - v + s, h + r.halfPixel, 2 * v)
                                }
                            }
                        }))
                    }
                }, {
                    key: "drawWave",
                    value: function (t, e, n, i) {
                        var r = this;
                        return this.prepareDraw(t, e, n, i, (function (t) {
                            var e = t.absmax,
                                o = t.hasMinVals,
                                s = (t.height, t.offsetY),
                                a = t.halfH,
                                l = t.peaks;
                            if (!o) {
                                var u, c = [],
                                    d = l.length;
                                for (u = 0; u < d; u++) c[2 * u] = l[u], c[2 * u + 1] = -l[u];
                                l = c
                            }
                            void 0 !== n && r.drawLine(l, e, a, s, n, i), r.fillRect(0, a + s - r.halfPixel, r.width, r.halfPixel)
                        }))
                    }
                }, {
                    key: "drawLine",
                    value: function (t, e, n, i, r, o) {
                        var s = this;
                        this.canvases.forEach((function (a) {
                            s.setFillStyles(a), s.drawLineToContext(a, a.waveCtx, t, e, n, i, r, o), s.drawLineToContext(a, a.progressCtx, t, e, n, i, r, o)
                        }))
                    }
                }, {
                    key: "drawLineToContext",
                    value: function (t, e, n, i, r, o, s, a) {
                        if (e) {
                            var l = n.length / 2,
                                u = this.params.fillParent && this.width != l ? this.width / l : 1,
                                c = Math.round(l * t.start),
                                d = Math.round(l * t.end) + 1;
                            if (!(a < c || d < s)) {
                                var h, f, p = Math.min(c, s),
                                    g = Math.max(d, a);
                                for (e.beginPath(), e.moveTo((p - c) * u + this.halfPixel, r + o), h = p; h < g; h++) {
                                    var m = n[2 * h] || 0,
                                        v = Math.round(m / i * r);
                                    e.lineTo((h - c) * u + this.halfPixel, r - v + o)
                                }
                                for (f = g - 1; p <= f; f--) {
                                    var y = n[2 * f + 1] || 0,
                                        b = Math.round(y / i * r);
                                    e.lineTo((f - c) * u + this.halfPixel, r - b + o)
                                }
                                e.closePath(), e.fill()
                            }
                        }
                    }
                }, {
                    key: "fillRect",
                    value: function (t, e, n, i) {
                        var r, o = Math.floor(t / this.maxCanvasWidth),
                            s = Math.min(Math.ceil((t + n) / this.maxCanvasWidth) + 1, this.canvases.length);
                        for (r = o; r < s; r++) {
                            var a = this.canvases[r],
                                l = r * this.maxCanvasWidth,
                                u = {
                                    x1: Math.max(t, r * this.maxCanvasWidth),
                                    y1: e,
                                    x2: Math.min(t + n, r * this.maxCanvasWidth + a.waveCtx.canvas.width),
                                    y2: e + i
                                };
                            u.x1 < u.x2 && (this.setFillStyles(a), this.fillRectToContext(a.waveCtx, u.x1 - l, u.y1, u.x2 - u.x1, u.y2 - u.y1), this.fillRectToContext(a.progressCtx, u.x1 - l, u.y1, u.x2 - u.x1, u.y2 - u.y1))
                        }
                    }
                }, {
                    key: "prepareDraw",
                    value: function (t, e, n, i, r) {
                        var s = this;
                        return o.frame((function () {
                            if (t[0] instanceof Array) {
                                var a = t;
                                if (s.params.splitChannels) return s.setHeight(a.length * s.params.height * s.params.pixelRatio), a.forEach((function (t, e) {
                                    return s.prepareDraw(t, e, n, i, r)
                                }));
                                t = a[0]
                            }
                            var l = 1 / s.params.barHeight;
                            if (s.params.normalize) {
                                var u = o.max(t),
                                    c = o.min(t);
                                l = u < -c ? -c : u
                            }
                            var d = [].some.call(t, (function (t) {
                                    return t < 0
                                })),
                                h = s.params.height * s.params.pixelRatio;
                            return r({
                                absmax: l,
                                hasMinVals: d,
                                height: h,
                                offsetY: h * e || 0,
                                halfH: h / 2,
                                peaks: t
                            })
                        }))()
                    }
                }, {
                    key: "fillRectToContext",
                    value: function (t, e, n, i, r) {
                        t && t.fillRect(e, n, i, r)
                    }
                }, {
                    key: "setFillStyles",
                    value: function (t) {
                        t.waveCtx.fillStyle = this.params.waveColor, this.hasProgressCanvas && (t.progressCtx.fillStyle = this.params.progressColor)
                    }
                }, {
                    key: "getImage",
                    value: function (t, e) {
                        var n = this.canvases.map((function (n) {
                            return n.wave.toDataURL(t, e)
                        }));
                        return 1 < n.length ? n : n[0]
                    }
                }, {
                    key: "updateProgress",
                    value: function (t) {
                        this.style(this.progressWave, {
                            width: t + "px"
                        })
                    }
                }]) && a(n.prototype, i), e
            }();
            e.default = d, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                        } return e.default = t, e
            }(n(0));

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function s(t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }

            function a(t) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var u = function (t) {
                function e(t, n) {
                    var i;
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (i = s(this, a(e).call(this))).container = t, i.params = n, i.width = 0, i.height = n.height * i.params.pixelRatio, i.lastPos = 0, i.wrapper = null, i
                }
                var n, r;
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(e, i.Observer), n = e, (r = [{
                    key: "style",
                    value: function (t, e) {
                        return i.style(t, e)
                    }
                }, {
                    key: "createWrapper",
                    value: function () {
                        this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, {
                            display: "block",
                            position: "relative",
                            userSelect: "none",
                            webkitUserSelect: "none",
                            height: this.params.height + "px"
                        }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
                            width: "100%",
                            overflowX: this.params.hideScrollbar ? "hidden" : "auto",
                            overflowY: "hidden"
                        }), this.setupWrapperEvents()
                    }
                }, {
                    key: "handleEvent",
                    value: function (t, e) {
                        !e && t.preventDefault();
                        var n, i = t.targetTouches ? t.targetTouches[0].clientX : t.clientX,
                            r = this.wrapper.getBoundingClientRect(),
                            o = this.width,
                            s = this.getWidth();
                        return !this.params.fillParent && o < s ? 1 < (n = (i - r.left) * (this.params.pixelRatio / o) || 0) && (n = 1) : n = (i - r.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, n
                    }
                }, {
                    key: "setupWrapperEvents",
                    value: function () {
                        var t = this;
                        this.wrapper.addEventListener("click", (function (e) {
                            var n = t.wrapper.offsetHeight - t.wrapper.clientHeight;
                            if (0 != n) {
                                var i = t.wrapper.getBoundingClientRect();
                                if (e.clientY >= i.bottom - n) return
                            }
                            t.params.interact && t.fireEvent("click", e, t.handleEvent(e))
                        })), this.wrapper.addEventListener("scroll", (function (e) {
                            return t.fireEvent("scroll", e)
                        }))
                    }
                }, {
                    key: "drawPeaks",
                    value: function (t, e, n, i) {
                        this.setWidth(e) || this.clearWave(), this.params.barWidth ? this.drawBars(t, 0, n, i) : this.drawWave(t, 0, n, i)
                    }
                }, {
                    key: "resetScroll",
                    value: function () {
                        null !== this.wrapper && (this.wrapper.scrollLeft = 0)
                    }
                }, {
                    key: "recenter",
                    value: function (t) {
                        var e = this.wrapper.scrollWidth * t;
                        this.recenterOnPosition(e, !0)
                    }
                }, {
                    key: "recenterOnPosition",
                    value: function (t, e) {
                        var n = this.wrapper.scrollLeft,
                            i = ~~(this.wrapper.clientWidth / 2),
                            r = this.wrapper.scrollWidth - this.wrapper.clientWidth,
                            o = t - i,
                            s = o - n;
                        0 != r && (!e && -i <= s && s < i && (o = n + (s = Math.max(-5, Math.min(5, s)))), (o = Math.max(0, Math.min(r, o))) != n && (this.wrapper.scrollLeft = o))
                    }
                }, {
                    key: "getScrollX",
                    value: function () {
                        var t = this.params.pixelRatio,
                            e = Math.round(this.wrapper.scrollLeft * t);
                        if (this.params.scrollParent) {
                            var n = ~~(this.wrapper.scrollWidth * t - this.getWidth());
                            e = Math.min(n, Math.max(0, e))
                        }
                        return e
                    }
                }, {
                    key: "getWidth",
                    value: function () {
                        return Math.round(this.container.clientWidth * this.params.pixelRatio)
                    }
                }, {
                    key: "setWidth",
                    value: function (t) {
                        return this.width != t && (this.width = t, this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, {
                            width: ""
                        }) : this.style(this.wrapper, {
                            width: ~~(this.width / this.params.pixelRatio) + "px"
                        }), this.updateSize(), !0)
                    }
                }, {
                    key: "setHeight",
                    value: function (t) {
                        return t != this.height && (this.height = t, this.style(this.wrapper, {
                            height: ~~(this.height / this.params.pixelRatio) + "px"
                        }), this.updateSize(), !0)
                    }
                }, {
                    key: "progress",
                    value: function (t) {
                        var e = 1 / this.params.pixelRatio,
                            n = Math.round(t * this.width) * e;
                        if (n < this.lastPos || n - this.lastPos >= e) {
                            if (this.lastPos = n, this.params.scrollParent && this.params.autoCenter) {
                                var i = ~~(this.wrapper.scrollWidth * t);
                                this.recenterOnPosition(i)
                            }
                            this.updateProgress(n)
                        }
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper), this.wrapper = null)
                    }
                }, {
                    key: "updateCursor",
                    value: function () {}
                }, {
                    key: "updateSize",
                    value: function () {}
                }, {
                    key: "drawBars",
                    value: function (t, e, n, i) {}
                }, {
                    key: "drawWave",
                    value: function (t, e, n, i) {}
                }, {
                    key: "clearWave",
                    value: function () {}
                }, {
                    key: "updateProgress",
                    value: function (t) {}
                }]) && o(n.prototype, r), e
            }();
            e.default = u, t.exports = e.default
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i, r = (i = n(3)) && i.__esModule ? i : {
                default: i
            };

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function a(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? function (t) {
                    if (void 0 !== t) return t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }

            function l(t, e, n) {
                return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                    var i = function (t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                        return t
                    }(t, e);
                    if (i) {
                        var r = Object.getOwnPropertyDescriptor(i, e);
                        return r.get ? r.get.call(n) : r.value
                    }
                })(t, e, n || t)
            }

            function u(t) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }! function (t) {
                if (!t || !t.__esModule) {
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                            } e.default = t
                }
            }(n(0));
            var d = function (t) {
                function e(t) {
                    var n;
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = a(this, u(e).call(this, t))).params = t, n.media = {
                        currentTime: 0,
                        duration: 0,
                        paused: !0,
                        playbackRate: 1,
                        play: function () {},
                        pause: function () {},
                        volume: 0
                    }, n.mediaType = t.mediaType.toLowerCase(), n.elementPosition = t.elementPosition, n.peaks = null, n.playbackRate = 1, n.volume = 1, n.buffer = null, n.onPlayEnd = null, n
                }
                var n, i;
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(e, r.default), n = e, (i = [{
                    key: "init",
                    value: function () {
                        this.setPlaybackRate(this.params.audioRate), this.createTimer()
                    }
                }, {
                    key: "createTimer",
                    value: function () {
                        var t = this;
                        this.on("play", (function e() {
                            t.isPaused() || (t.fireEvent("audioprocess", t.getCurrentTime()), (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(e))
                        })), this.on("pause", (function () {
                            t.fireEvent("audioprocess", t.getCurrentTime())
                        }))
                    }
                }, {
                    key: "load",
                    value: function (t, e, n, i) {
                        var r = document.createElement(this.mediaType);
                        r.controls = this.params.mediaControls, r.autoplay = this.params.autoplay || !1, r.preload = null == i ? "auto" : i, r.src = t, r.style.width = "100%";
                        var o = e.querySelector(this.mediaType);
                        o && e.removeChild(o), e.appendChild(r), this._load(r, n)
                    }
                }, {
                    key: "loadElt",
                    value: function (t, e) {
                        t.controls = this.params.mediaControls, t.autoplay = this.params.autoplay || !1, this._load(t, e)
                    }
                }, {
                    key: "_load",
                    value: function (t, e) {
                        var n = this;
                        "function" == typeof t.load && t.load(), t.addEventListener("error", (function () {
                            n.fireEvent("error", "Error loading media element")
                        })), t.addEventListener("canplay", (function () {
                            n.fireEvent("canplay")
                        })), t.addEventListener("ended", (function () {
                            n.fireEvent("finish")
                        })), t.addEventListener("play", (function () {
                            n.fireEvent("play")
                        })), t.addEventListener("pause", (function () {
                            n.fireEvent("pause")
                        })), this.media = t, this.peaks = e, this.onPlayEnd = null, this.buffer = null, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume)
                    }
                }, {
                    key: "isPaused",
                    value: function () {
                        return !this.media || this.media.paused
                    }
                }, {
                    key: "getDuration",
                    value: function () {
                        if (this.explicitDuration) return this.explicitDuration;
                        var t = (this.buffer || this.media).duration;
                        return 1 / 0 <= t && (t = this.media.seekable.end(0)), t
                    }
                }, {
                    key: "getCurrentTime",
                    value: function () {
                        return this.media && this.media.currentTime
                    }
                }, {
                    key: "getPlayedPercents",
                    value: function () {
                        return this.getCurrentTime() / this.getDuration() || 0
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function () {
                        return this.playbackRate || this.media.playbackRate
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function (t) {
                        this.playbackRate = t || 1, this.media.playbackRate = this.playbackRate
                    }
                }, {
                    key: "seekTo",
                    value: function (t) {
                        null != t && (this.media.currentTime = t), this.clearPlayEnd()
                    }
                }, {
                    key: "play",
                    value: function (t, e) {
                        this.seekTo(t);
                        var n = this.media.play();
                        return e && this.setPlayEnd(e), n
                    }
                }, {
                    key: "pause",
                    value: function () {
                        var t;
                        return this.media && (t = this.media.pause()), this.clearPlayEnd(), t
                    }
                }, {
                    key: "setPlayEnd",
                    value: function (t) {
                        var e = this;
                        this._onPlayEnd = function (n) {
                            t <= n && (e.pause(), e.seekTo(t))
                        }, this.on("audioprocess", this._onPlayEnd)
                    }
                }, {
                    key: "clearPlayEnd",
                    value: function () {
                        this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null)
                    }
                }, {
                    key: "getPeaks",
                    value: function (t, n, i) {
                        return this.buffer ? l(u(e.prototype), "getPeaks", this).call(this, t, n, i) : this.peaks || []
                    }
                }, {
                    key: "setSinkId",
                    value: function (t) {
                        return t ? this.media.setSinkId ? this.media.setSinkId(t) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + t))
                    }
                }, {
                    key: "getVolume",
                    value: function () {
                        return this.volume || this.media.volume
                    }
                }, {
                    key: "setVolume",
                    value: function (t) {
                        this.volume = t, this.media.volume = this.volume
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null
                    }
                }]) && s(n.prototype, i), e
            }();
            e.default = d, t.exports = e.default
        }, function (t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.clearPeakCache()
                }
                var e, n;
                return e = t, (n = [{
                    key: "clearPeakCache",
                    value: function () {
                        this.peakCacheRanges = [], this.peakCacheLength = -1
                    }
                }, {
                    key: "addRangeToPeakCache",
                    value: function (t, e, n) {
                        t != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = t);
                        for (var i = [], r = 0; r < this.peakCacheRanges.length && this.peakCacheRanges[r] < e;) r++;
                        for (r % 2 == 0 && i.push(e); r < this.peakCacheRanges.length && this.peakCacheRanges[r] <= n;) i.push(this.peakCacheRanges[r]), r++;
                        r % 2 == 0 && i.push(n), i = i.filter((function (t, e, n) {
                            return 0 == e ? t != n[e + 1] : e == n.length - 1 ? t != n[e - 1] : t != n[e - 1] && t != n[e + 1]
                        })), this.peakCacheRanges = this.peakCacheRanges.concat(i), this.peakCacheRanges = this.peakCacheRanges.sort((function (t, e) {
                            return t - e
                        })).filter((function (t, e, n) {
                            return 0 == e ? t != n[e + 1] : e == n.length - 1 ? t != n[e - 1] : t != n[e - 1] && t != n[e + 1]
                        }));
                        var o = [];
                        for (r = 0; r < i.length; r += 2) o.push([i[r], i[r + 1]]);
                        return o
                    }
                }, {
                    key: "getCacheRanges",
                    value: function () {
                        var t, e = [];
                        for (t = 0; t < this.peakCacheRanges.length; t += 2) e.push([this.peakCacheRanges[t], this.peakCacheRanges[t + 1]]);
                        return e
                    }
                }]) && i(e.prototype, n), t
            }();
            e.default = r, t.exports = e.default
        }])
    }))
}, function (e, n) {
    /*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
     * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
     * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
     *
     * Version: 1.3.8
     *
     */
    ! function (e) {
        e.fn.extend({
            slimScroll: function (n) {
                var i = e.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, n);
                return this.each((function () {
                    var r, o, s, a, l, u, c, d, h = "<div></div>",
                        f = !1,
                        p = e(this);
                    if (p.parent().hasClass(i.wrapperClass)) {
                        var g = p.scrollTop();
                        if (C = p.siblings("." + i.barClass), w = p.siblings("." + i.railClass), E(), e.isPlainObject(n)) {
                            if ("height" in n && "auto" == n.height) {
                                p.parent().css("height", "auto"), p.css("height", "auto");
                                var m = p.parent().parent().height();
                                p.parent().css("height", m), p.css("height", m)
                            } else if ("height" in n) {
                                var v = n.height;
                                p.parent().css("height", v), p.css("height", v)
                            }
                            if ("scrollTo" in n) g = parseInt(i.scrollTo);
                            else if ("scrollBy" in n) g += parseInt(i.scrollBy);
                            else if ("destroy" in n) return C.remove(), w.remove(), void p.unwrap();
                            S(g, !1, !0)
                        }
                    } else if (!e.isPlainObject(n) || !("destroy" in n)) {
                        i.height = "auto" == i.height ? p.parent().height() : i.height;
                        var y = e(h).addClass(i.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        });
                        p.css({
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        });
                        var b, w = e(h).addClass(i.railClass).css({
                                width: i.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: i.alwaysVisible && i.railVisible ? "block" : "none",
                                "border-radius": i.railBorderRadius,
                                background: i.railColor,
                                opacity: i.railOpacity,
                                zIndex: 90
                            }),
                            C = e(h).addClass(i.barClass).css({
                                background: i.color,
                                width: i.size,
                                position: "absolute",
                                top: 0,
                                opacity: i.opacity,
                                display: i.alwaysVisible ? "block" : "none",
                                "border-radius": i.borderRadius,
                                BorderRadius: i.borderRadius,
                                MozBorderRadius: i.borderRadius,
                                WebkitBorderRadius: i.borderRadius,
                                zIndex: 99
                            }),
                            _ = "right" == i.position ? {
                                right: i.distance
                            } : {
                                left: i.distance
                            };
                        w.css(_), C.css(_), p.wrap(y), p.parent().append(C), p.parent().append(w), i.railDraggable && C.bind("mousedown", (function (n) {
                            var i = e(document);
                            return s = !0, t = parseFloat(C.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", (function (e) {
                                currTop = t + e.pageY - pageY, C.css("top", currTop), S(0, C.position().top, !1)
                            })), i.bind("mouseup.slimscroll", (function (t) {
                                s = !1, k(), i.unbind(".slimscroll")
                            })), !1
                        })).bind("selectstart.slimscroll", (function (t) {
                            return t.stopPropagation(), t.preventDefault(), !1
                        })), w.hover((function () {
                            T()
                        }), (function () {
                            k()
                        })), C.hover((function () {
                            o = !0
                        }), (function () {
                            o = !1
                        })), p.hover((function () {
                            r = !0, T(), k()
                        }), (function () {
                            r = !1, k()
                        })), p.bind("touchstart", (function (t, e) {
                            t.originalEvent.touches.length && (l = t.originalEvent.touches[0].pageY)
                        })), p.bind("touchmove", (function (t) {
                            (f || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (S((l - t.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), l = t.originalEvent.touches[0].pageY)
                        })), E(), "bottom" === i.start ? (C.css({
                            top: p.outerHeight() - C.outerHeight()
                        }), S(0, !0)) : "top" !== i.start && (S(e(i.start).position().top, null, !0), i.alwaysVisible || C.hide()), b = this, window.addEventListener ? (b.addEventListener("DOMMouseScroll", x, !1), b.addEventListener("mousewheel", x, !1)) : document.attachEvent("onmousewheel", x)
                    }

                    function x(t) {
                        if (r) {
                            var n = 0;
                            (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3);
                            var o = t.target || t.srcTarget || t.srcElement;
                            e(o).closest("." + i.wrapperClass).is(p.parent()) && S(n, !0), t.preventDefault && !f && t.preventDefault(), f || (t.returnValue = !1)
                        }
                    }

                    function S(t, e, n) {
                        f = !1;
                        var r = t,
                            o = p.outerHeight() - C.outerHeight();
                        if (e && (r = parseInt(C.css("top")) + t * parseInt(i.wheelStep) / 100 * C.outerHeight(), r = Math.min(Math.max(r, 0), o), r = t > 0 ? Math.ceil(r) : Math.floor(r), C.css({
                                top: r + "px"
                            })), r = (c = parseInt(C.css("top")) / (p.outerHeight() - C.outerHeight())) * (p[0].scrollHeight - p.outerHeight()), n) {
                            var s = (r = t) / p[0].scrollHeight * p.outerHeight();
                            s = Math.min(Math.max(s, 0), o), C.css({
                                top: s + "px"
                            })
                        }
                        p.scrollTop(r), p.trigger("slimscrolling", ~~r), T(), k()
                    }

                    function E() {
                        u = Math.max(p.outerHeight() / p[0].scrollHeight * p.outerHeight(), 30), C.css({
                            height: u + "px"
                        });
                        var t = u == p.outerHeight() ? "none" : "block";
                        C.css({
                            display: t
                        })
                    }

                    function T() {
                        if (E(), clearTimeout(a), c == ~~c) {
                            if (f = i.allowPageScroll, d != c) {
                                var t = 0 == ~~c ? "top" : "bottom";
                                p.trigger("slimscroll", t)
                            }
                        } else f = !1;
                        d = c, u >= p.outerHeight() ? f = !0 : (C.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast"))
                    }

                    function k() {
                        i.alwaysVisible || (a = setTimeout((function () {
                            i.disableFadeOut && r || o || s || (C.fadeOut("slow"), w.fadeOut("slow"))
                        }), 1e3))
                    }
                })), this
            }
        }), e.fn.extend({
            slimscroll: e.fn.slimScroll
        })
    }(jQuery)
}, function (t, e, n) {
    var i;
    /*!
     * Snackbar v0.1.14
     * http://polonel.com/Snackbar
     *
     * Copyright 2018 Chris Brame and other contributors
     * Released under the MIT license
     * https://github.com/polonel/Snackbar/blob/master/LICENSE
     */
    ! function (n, r) {
        "use strict";
        void 0 === (i = function () {
            return n.Snackbar = r()
        }.apply(e, [])) || (t.exports = i)
    }(this, (function () {
        var t = {
                current: null
            },
            e = {
                text: "Default Text",
                textColor: "#FFFFFF",
                width: "auto",
                showAction: !0,
                actionText: "Dismiss",
                actionTextAria: "Dismiss, Description for Screen Readers",
                alertScreenReader: !1,
                actionTextColor: "#4CAF50",
                showSecondButton: !1,
                secondButtonText: "",
                secondButtonAria: "Description for Screen Readers",
                secondButtonTextColor: "#4CAF50",
                backgroundColor: "#323232",
                pos: "bottom-left",
                duration: 5e3,
                customClass: "",
                onActionClick: function (t) {
                    t.style.opacity = 0
                },
                onSecondButtonClick: function (t) {},
                onClose: function (t) {}
            };
        t.show = function (i) {
            var r = n(!0, e, i);
            t.current && (t.current.style.opacity = 0, setTimeout(function () {
                var t = this.parentElement;
                t && t.removeChild(this)
            }.bind(t.current), 500)), t.snackbar = document.createElement("div"), t.snackbar.className = "snackbar-container " + r.customClass, t.snackbar.style.width = r.width;
            var o = document.createElement("p");
            if (o.style.margin = 0, o.style.padding = 0, o.style.color = r.textColor, o.style.fontSize = "14px", o.style.fontWeight = 300, o.style.lineHeight = "1em", o.innerHTML = r.text, t.snackbar.appendChild(o), t.snackbar.style.background = r.backgroundColor, r.showSecondButton) {
                var s = document.createElement("button");
                s.className = "action", s.innerHTML = r.secondButtonText, s.setAttribute("aria-label", r.secondButtonAria), s.style.color = r.secondButtonTextColor, s.addEventListener("click", (function () {
                    r.onSecondButtonClick(t.snackbar)
                })), t.snackbar.appendChild(s)
            }
            if (r.showAction) {
                var a = document.createElement("button");
                a.className = "action", a.innerHTML = r.actionText, a.setAttribute("aria-label", r.actionTextAria), a.style.color = r.actionTextColor, a.addEventListener("click", (function () {
                    r.onActionClick(t.snackbar)
                })), t.snackbar.appendChild(a)
            }
            r.duration && setTimeout(function () {
                t.current === this && (t.current.style.opacity = 0, t.current.style.top = "-100px", t.current.style.bottom = "-100px")
            }.bind(t.snackbar), r.duration), r.alertScreenReader && t.snackbar.setAttribute("role", "alert"), t.snackbar.addEventListener("transitionend", function (e, n) {
                "opacity" === e.propertyName && "0" === this.style.opacity && ("function" == typeof r.onClose && r.onClose(this), this.parentElement.removeChild(this), t.current === this && (t.current = null))
            }.bind(t.snackbar)), t.current = t.snackbar, document.body.appendChild(t.snackbar);
            getComputedStyle(t.snackbar).bottom, getComputedStyle(t.snackbar).top;
            t.snackbar.style.opacity = 1, t.snackbar.className = "snackbar-container " + r.customClass + " snackbar-pos " + r.pos
        }, t.close = function () {
            t.current && (t.current.style.opacity = 0)
        };
        var n = function () {
            var t = {},
                e = !1,
                i = 0,
                r = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
            for (var o = function (i) {
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e && "[object Object]" === Object.prototype.toString.call(i[r]) ? t[r] = n(!0, t[r], i[r]) : t[r] = i[r])
                }; i < r; i++) {
                var s = arguments[i];
                o(s)
            }
            return t
        };
        return t
    }))
}, function (t, e, n) {
    var i, r;
    "undefined" != typeof window && window, void 0 === (r = "function" == typeof (i = function () {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r];
                    i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }) ? i.call(e, n, e, t) : i) || (t.exports = r)
}, function (t, e, n) {
    t.exports = n(9)
}, function (t, e, n) {
    window.$ = window.jQuery = n(0), $("body").hasClass("has-preloader") && n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(18), n(19), n(21), n(23), $("#waveform").length > 0 && n(25), n(26), n(27), n(29), n(30), n(31), n(33), n(34), n(35), n(36), n(40), n(41), n(48), n(49), n(50), n(51), n(53), n(54)
}, function (t, e, n) {
    var i = n(1);
    document.addEventListener("DOMContentLoaded", (function () {
        i.start()
    })), window.addEventListener("load", (function () {
        var t = document.body,
            e = document.getElementById("loader");
        t.classList.add("loaded"), e.classList.add("loader-fade"), i.done()
    }), !0)
}, function (t, e) {
    getNumberWithCommas = function (t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }, isElementInViewport = function (t) {
        "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
        var e = t.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
    }, $.fn.hasData = function (t) {
        return void 0 !== $(this).data(t)
    }, getDataOptions = function (t, e) {
        if (e || (e = "options"), $.fn.hasData(t)) {
            var n = $.extend({}, t.data());
            return n.options ? n.options : null
        }
        return null
    }
}, function (t, e) {
    /*! modernizr 3.5.0 (Custom Build) | MIT *
     * https://modernizr.com/download/?-applicationcache-backgrounds-borderimage-borderradius-boxshadow-cors-cssanimations-csscolumns-cssgradients-cssreflections-cssremunit-cssscrollbar-csstransforms-csstransforms3d-csstransitions-devicemotion_deviceorientation-fileinput-filereader-filesystem-flexbox-flexboxlegacy-fontface-formattribute-formvalidation-fullscreen-generatedcontent-hashchange-history-hsla-ie8compat-input-inputtypes-json-localstorage-multiplebgs-opacity-overflowscrolling-placeholder-postmessage-rgba-sessionstorage-strictmode-textshadow-domprefixes-hasevent-prefixed-prefixes-setclasses-testallprops-testprop-teststyles !*/
    ! function (t, e, n) {
        function i(t, e) {
            return typeof t === e
        }

        function r() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : C ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function o(t) {
            return t.replace(/([a-z])-([a-z])/g, (function (t, e, n) {
                return e + n.toUpperCase()
            })).replace(/^-/, "")
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, n, i, o) {
            var s, a, l, u, c = "modernizr",
                d = r("div"),
                h = function () {
                    var t = e.body;
                    return t || ((t = r(C ? "svg" : "body")).fake = !0), t
                }();
            if (parseInt(i, 10))
                for (; i--;)(l = r("div")).id = o ? o[i] : c + (i + 1), d.appendChild(l);
            return (s = r("style")).type = "text/css", s.id = "s" + c, (h.fake ? h : d).appendChild(s), h.appendChild(d), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), d.id = c, h.fake && (h.style.background = "", h.style.overflow = "hidden", u = w.style.overflow, w.style.overflow = "hidden", w.appendChild(h)), a = n(d, t), h.fake ? (h.parentNode.removeChild(h), w.style.overflow = u, w.offsetHeight) : d.parentNode.removeChild(d), !!a
        }

        function l(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function u(e, n, i) {
            var r;
            if ("getComputedStyle" in t) {
                r = getComputedStyle.call(t, e, n);
                var o = t.console;
                if (null !== r) i && (r = r.getPropertyValue(i));
                else if (o) {
                    o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else r = !n && e.currentStyle && e.currentStyle[i];
            return r
        }

        function c(t) {
            return t.replace(/([A-Z])/g, (function (t, e) {
                return "-" + e.toLowerCase()
            })).replace(/^ms-/, "-ms-")
        }

        function d(e, i) {
            var r = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; r--;)
                    if (t.CSS.supports(c(e[r]), i)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var o = []; r--;) o.push("(" + c(e[r]) + ":" + i + ")");
                return a("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function (t) {
                    return "absolute" == u(t, null, "position")
                }))
            }
            return n
        }

        function h(t, e, a, l) {
            function u() {
                h && (delete N.style, delete N.modElem)
            }
            if (l = !i(l, "undefined") && l, !i(a, "undefined")) {
                var c = d(t, a);
                if (!i(c, "undefined")) return c
            }
            for (var h, f, p, g, m, v = ["modernizr", "tspan", "samp"]; !N.style && v.length;) h = !0, N.modElem = r(v.shift()), N.style = N.modElem.style;
            for (p = t.length, f = 0; p > f; f++)
                if (g = t[f], m = N.style[g], s(g, "-") && (g = o(g)), N.style[g] !== n) {
                    if (l || i(a, "undefined")) return u(), "pfx" != e || g;
                    try {
                        N.style[g] = a
                    } catch (t) {}
                    if (N.style[g] != m) return u(), "pfx" != e || g
                } return u(), !1
        }

        function f(t, e, n, r, o) {
            var s = t.charAt(0).toUpperCase() + t.slice(1),
                a = (t + " " + D.join(s + " ") + s).split(" ");
            return i(e, "string") || i(e, "undefined") ? h(a, e, r, o) : function (t, e, n) {
                var r;
                for (var o in t)
                    if (t[o] in e) return !1 === n ? t[o] : i(r = e[t[o]], "function") ? l(r, n || e) : r;
                return !1
            }(a = (t + " " + x.join(s + " ") + s).split(" "), e, n)
        }

        function p(t, e, i) {
            return f(t, n, n, e, i)
        }
        var g = [],
            m = [],
            v = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function (t, e) {
                    var n = this;
                    setTimeout((function () {
                        e(n[t])
                    }), 0)
                },
                addTest: function (t, e, n) {
                    m.push({
                        name: t,
                        fn: e,
                        options: n
                    })
                },
                addAsyncTest: function (t) {
                    m.push({
                        name: null,
                        fn: t
                    })
                }
            },
            y = function () {};
        y.prototype = v, (y = new y).addTest("applicationcache", "applicationCache" in t), y.addTest("cors", "XMLHttpRequest" in t && "withCredentials" in new XMLHttpRequest), y.addTest("ie8compat", !t.addEventListener && !!e.documentMode && 7 === e.documentMode), y.addTest("history", (function () {
            var e = navigator.userAgent;
            return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history)
        })), y.addTest("json", "JSON" in t && "parse" in JSON && "stringify" in JSON), y.addTest("postmessage", "postMessage" in t), y.addTest("strictmode", function () {
            "use strict";
            return !this
        }()), y.addTest("devicemotion", "DeviceMotionEvent" in t), y.addTest("deviceorientation", "DeviceOrientationEvent" in t), y.addTest("filereader", !!(t.File && t.FileList && t.FileReader)), y.addTest("localstorage", (function () {
            var t = "modernizr";
            try {
                return localStorage.setItem(t, t), localStorage.removeItem(t), !0
            } catch (t) {
                return !1
            }
        })), y.addTest("sessionstorage", (function () {
            var t = "modernizr";
            try {
                return sessionStorage.setItem(t, t), sessionStorage.removeItem(t), !0
            } catch (t) {
                return !1
            }
        }));
        var b = v._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        v._prefixes = b;
        var w = e.documentElement,
            C = "svg" === w.nodeName.toLowerCase(),
            _ = "Moz O ms Webkit",
            x = v._config.usePrefixes ? _.toLowerCase().split(" ") : [];
        v._domPrefixes = x;
        var S = function () {
            var t = !("onblur" in e.documentElement);
            return function (e, i) {
                var o;
                return !!e && (i && "string" != typeof i || (i = r(i || "div")), !(o = (e = "on" + e) in i) && t && (i.setAttribute || (i = r("div")), i.setAttribute(e, ""), o = "function" == typeof i[e], i[e] !== n && (i[e] = n), i.removeAttribute(e)), o)
            }
        }();
        v.hasEvent = S, y.addTest("hashchange", (function () {
            return !1 !== S("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
        })), y.addTest("cssgradients", (function () {
            for (var t, e = "background-image:", n = "", i = 0, o = b.length - 1; o > i; i++) t = 0 === i ? "to " : "", n += e + b[i] + "linear-gradient(" + t + "left top, #9f9, white);";
            y._config.usePrefixes && (n += e + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            var s = r("a").style;
            return s.cssText = n, ("" + s.backgroundImage).indexOf("gradient") > -1
        })), y.addTest("multiplebgs", (function () {
            var t = r("a").style;
            return t.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(t.background)
        })), y.addTest("opacity", (function () {
            var t = r("a").style;
            return t.cssText = b.join("opacity:.55;"), /^0.55$/.test(t.opacity)
        })), y.addTest("cssremunit", (function () {
            var t = r("a").style;
            try {
                t.fontSize = "3rem"
            } catch (t) {}
            return /rem/.test(t.fontSize)
        })), y.addTest("rgba", (function () {
            var t = r("a").style;
            return t.cssText = "background-color:rgba(150,255,150,.5)", ("" + t.backgroundColor).indexOf("rgba") > -1
        })), y.addTest("fileinput", (function () {
            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
            var t = r("input");
            return t.type = "file", !t.disabled
        })), y.addTest("formattribute", (function () {
            var t, n, i = r("form"),
                o = r("input"),
                s = r("div"),
                a = "formtest" + (new Date).getTime();
            i.id = a;
            try {
                o.setAttribute("form", a)
            } catch (n) {
                e.createAttribute && ((t = e.createAttribute("form")).nodeValue = a, o.setAttributeNode(t))
            }
            return s.appendChild(i), s.appendChild(o), w.appendChild(s), n = i.elements && 1 === i.elements.length && o.form == i, s.parentNode.removeChild(s), n
        })), y.addTest("placeholder", "placeholder" in r("input") && "placeholder" in r("textarea"));
        var E = r("input"),
            T = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
            k = {};
        y.input = function (e) {
            for (var n = 0, i = e.length; i > n; n++) k[e[n]] = !!(e[n] in E);
            return k.list && (k.list = !(!r("datalist") || !t.HTMLDataListElement)), k
        }(T);
        var O = "search tel url email datetime date month week time datetime-local number range color".split(" "),
            P = {};
        y.inputtypes = function (t) {
            for (var i, r, o, s = t.length, a = 0; s > a; a++) E.setAttribute("type", i = t[a]), (o = "text" !== E.type && "style" in E) && (E.value = "1)", E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && E.style.WebkitAppearance !== n ? (w.appendChild(E), o = (r = e.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, w.removeChild(E)) : /^(search|tel)$/.test(i) || (o = /^(url|email)$/.test(i) ? E.checkValidity && !1 === E.checkValidity() : "1)" != E.value)), P[t[a]] = !!o;
            return P
        }(O), y.addTest("hsla", (function () {
            var t = r("a").style;
            return t.cssText = "background-color:hsla(120,40%,100%,.5)", s(t.backgroundColor, "rgba") || s(t.backgroundColor, "hsla")
        }));
        var I = "CSS" in t && "supports" in t.CSS,
            A = "supportsCSS" in t;
        y.addTest("supports", I || A);
        var D = v._config.usePrefixes ? _.split(" ") : [];
        v._cssomPrefixes = D;
        var L = function (e) {
            var i, r = b.length,
                o = t.CSSRule;
            if (void 0 === o) return n;
            if (!e) return !1;
            if ((i = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + e;
            for (var s = 0; r > s; s++) {
                var a = b[s];
                if (a.toUpperCase() + "_" + i in o) return "@-" + a.toLowerCase() + "-" + e
            }
            return !1
        };
        v.atRule = L;
        var $ = v.testStyles = a;
        (function () {
            var t = navigator.userAgent,
                e = t.match(/w(eb)?osbrowser/gi),
                n = t.match(/windows phone/gi) && t.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
            return e || n
        })() ? y.addTest("fontface", !1): $('@font-face {font-family:"font";src:url("https://")}', (function (t, n) {
            var i = e.getElementById("smodernizr"),
                r = i.sheet || i.styleSheet,
                o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
                s = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
            y.addTest("fontface", s)
        })), $('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', (function (t) {
            y.addTest("generatedcontent", t.offsetHeight >= 6)
        })), $("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + b.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:10px}", (function (t) {
            y.addTest("cssscrollbar", "scrollWidth" in t && 30 == t.scrollWidth)
        })), y.addTest("formvalidation", (function () {
            var e = r("form");
            if (!("checkValidity" in e) || !("addEventListener" in e)) return !1;
            if ("reportValidity" in e) return !0;
            var n, i = !1;
            return y.formvalidationapi = !0, e.addEventListener("submit", (function (e) {
                (!t.opera || t.operamini) && e.preventDefault(), e.stopPropagation()
            }), !1), e.innerHTML = '<input name="modTest" required="required" /><button></button>', $("#modernizr form{position:absolute;top:-99999em}", (function (t) {
                t.appendChild(e), (n = e.getElementsByTagName("input")[0]).addEventListener("invalid", (function (t) {
                    i = !0, t.preventDefault(), t.stopPropagation()
                }), !1), y.formvalidationmessage = !!n.validationMessage, e.getElementsByTagName("button")[0].click()
            })), i
        }));
        var j = {
            elem: r("modernizr")
        };
        y._q.push((function () {
            delete j.elem
        }));
        var N = {
            style: j.elem.style
        };
        y._q.unshift((function () {
            delete N.style
        }));
        var M = v.testProp = function (t, e, i) {
            return h([t], n, e, i)
        };
        y.addTest("textshadow", M("textShadow", "1px 1px")), v.testAllProps = f;
        var H = v.prefixed = function (t, e, n) {
            return 0 === t.indexOf("@") ? L(t) : (-1 != t.indexOf("-") && (t = o(t)), e ? f(t, e, n) : f(t, "pfx"))
        };
        y.addTest("fullscreen", !(!H("exitFullscreen", e, !1) && !H("cancelFullScreen", e, !1))), y.addTest("filesystem", !!H("requestFileSystem", t)), v.testAllProps = p, y.addTest("cssanimations", p("animationName", "a", !0)), y.addTest("backgroundsize", p("backgroundSize", "100%", !0)), y.addTest("borderradius", p("borderRadius", "0px", !0)), y.addTest("borderimage", p("borderImage", "url() 1", !0)), y.addTest("boxshadow", p("boxShadow", "1px 1px", !0)),
            function () {
                y.addTest("csscolumns", (function () {
                    var t = !1,
                        e = p("columnCount");
                    try {
                        (t = !!e) && (t = new Boolean(t))
                    } catch (t) {}
                    return t
                }));
                for (var t, e, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < n.length; i++) t = n[i].toLowerCase(), e = p("column" + n[i]), ("breakbefore" === t || "breakafter" === t || "breakinside" == t) && (e = e || p(n[i])), y.addTest("csscolumns." + t, e)
            }(), y.addTest("flexbox", p("flexBasis", "1px", !0)), y.addTest("flexboxlegacy", p("boxDirection", "reverse", !0)), y.addTest("overflowscrolling", p("overflowScrolling", "touch", !0)), y.addTest("cssreflections", p("boxReflect", "above", !0)), y.addTest("csstransforms", (function () {
                return -1 === navigator.userAgent.indexOf("Android 2.") && p("transform", "scale(1)", !0)
            })), y.addTest("csstransforms3d", (function () {
                var t = !!p("perspective", "1px", !0),
                    e = y._config.usePrefixes;
                if (t && (!e || "webkitPerspective" in w.style)) {
                    var n;
                    y.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", e && (n += ",(-webkit-transform-3d)")), $("#modernizr{width:0;height:0}" + (n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), (function (e) {
                        t = 7 === e.offsetWidth && 18 === e.offsetHeight
                    }))
                }
                return t
            })), y.addTest("csstransitions", p("transition", "all", !0)),
            function () {
                var t, e, n, r, o, s;
                for (var a in m)
                    if (m.hasOwnProperty(a)) {
                        if (t = [], (e = m[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                            for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                        for (r = i(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) 1 === (s = t[o].split(".")).length ? y[s[0]] = r : (!y[s[0]] || y[s[0]] instanceof Boolean || (y[s[0]] = new Boolean(y[s[0]])), y[s[0]][s[1]] = r), g.push((r ? "" : "no-") + s.join("-"))
                    }
            }(),
            function (t) {
                var e = w.className,
                    n = y._config.classPrefix || "";
                if (C && (e = e.baseVal), y._config.enableJSClass) {
                    var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    e = e.replace(i, "$1" + n + "js$2")
                }
                y._config.enableClasses && (e += " " + n + t.join(" " + n), C ? w.className.baseVal = e : w.className = e)
            }(g), delete v.addTest, delete v.addAsyncTest;
        for (var W = 0; W < y._q.length; W++) y._q[W]();
        t.Modernizr = y
    }(window, document)
}, function (t, e, n) {
    var i, r, o;
    o = function (t) {
        t.easing.jswing = t.easing.swing;
        var e = Math.pow,
            n = Math.sqrt,
            i = Math.sin,
            r = Math.cos,
            o = Math.PI,
            s = 1.70158,
            a = 1.525 * s,
            l = 2 * o / 3,
            u = 2 * o / 4.5;

        function c(t) {
            var e = 7.5625,
                n = 2.75;
            return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
        }
        t.extend(t.easing, {
            def: "easeOutQuad",
            swing: function (e) {
                return t.easing[t.easing.def](e)
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeOutQuad: function (t) {
                return 1 - (1 - t) * (1 - t)
            },
            easeInOutQuad: function (t) {
                return t < .5 ? 2 * t * t : 1 - e(-2 * t + 2, 2) / 2
            },
            easeInCubic: function (t) {
                return t * t * t
            },
            easeOutCubic: function (t) {
                return 1 - e(1 - t, 3)
            },
            easeInOutCubic: function (t) {
                return t < .5 ? 4 * t * t * t : 1 - e(-2 * t + 2, 3) / 2
            },
            easeInQuart: function (t) {
                return t * t * t * t
            },
            easeOutQuart: function (t) {
                return 1 - e(1 - t, 4)
            },
            easeInOutQuart: function (t) {
                return t < .5 ? 8 * t * t * t * t : 1 - e(-2 * t + 2, 4) / 2
            },
            easeInQuint: function (t) {
                return t * t * t * t * t
            },
            easeOutQuint: function (t) {
                return 1 - e(1 - t, 5)
            },
            easeInOutQuint: function (t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 - e(-2 * t + 2, 5) / 2
            },
            easeInSine: function (t) {
                return 1 - r(t * o / 2)
            },
            easeOutSine: function (t) {
                return i(t * o / 2)
            },
            easeInOutSine: function (t) {
                return -(r(o * t) - 1) / 2
            },
            easeInExpo: function (t) {
                return 0 === t ? 0 : e(2, 10 * t - 10)
            },
            easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 - e(2, -10 * t)
            },
            easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? e(2, 20 * t - 10) / 2 : (2 - e(2, -20 * t + 10)) / 2
            },
            easeInCirc: function (t) {
                return 1 - n(1 - e(t, 2))
            },
            easeOutCirc: function (t) {
                return n(1 - e(t - 1, 2))
            },
            easeInOutCirc: function (t) {
                return t < .5 ? (1 - n(1 - e(2 * t, 2))) / 2 : (n(1 - e(-2 * t + 2, 2)) + 1) / 2
            },
            easeInElastic: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : -e(2, 10 * t - 10) * i((10 * t - 10.75) * l)
            },
            easeOutElastic: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : e(2, -10 * t) * i((10 * t - .75) * l) + 1
            },
            easeInOutElastic: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -e(2, 20 * t - 10) * i((20 * t - 11.125) * u) / 2 : e(2, -20 * t + 10) * i((20 * t - 11.125) * u) / 2 + 1
            },
            easeInBack: function (t) {
                return 2.70158 * t * t * t - s * t * t
            },
            easeOutBack: function (t) {
                return 1 + 2.70158 * e(t - 1, 3) + s * e(t - 1, 2)
            },
            easeInOutBack: function (t) {
                return t < .5 ? e(2 * t, 2) * (7.189819 * t - a) / 2 : (e(2 * t - 2, 2) * ((a + 1) * (2 * t - 2) + a) + 2) / 2
            },
            easeInBounce: function (t) {
                return 1 - c(1 - t)
            },
            easeOutBounce: c,
            easeInOutBounce: function (t) {
                return t < .5 ? (1 - c(1 - 2 * t)) / 2 : (1 + c(2 * t - 1)) / 2
            }
        })
    }, i = [n(0)], void 0 === (r = function (t) {
        return o(t)
    }.apply(e, i)) || (t.exports = r)
}, function (t, e) {
    var n, i;
    n = jQuery, i = "waitForImages", n.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
    }, n.expr[":"].uncached = function (t) {
        if (!n(t).is('img[src!=""]')) return !1;
        var e = new Image;
        return e.src = t.src, !e.complete
    }, n.fn.waitForImages = function (t, e, r) {
        var o = 0,
            s = 0;
        if (n.isPlainObject(arguments[0]) && (r = arguments[0].waitForAll, e = arguments[0].each, t = arguments[0].finished), t = t || n.noop, e = e || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each((function () {
            var a = n(this),
                l = [],
                u = n.waitForImages.hasImageProperties || [],
                c = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            r ? a.find("*").addBack().each((function () {
                var t = n(this);
                t.is("img:uncached") && l.push({
                    src: t.attr("src"),
                    element: t[0]
                }), n.each(u, (function (e, n) {
                    var i, r = t.css(n);
                    if (!r) return !0;
                    for (; i = c.exec(r);) l.push({
                        src: i[2],
                        element: t[0]
                    })
                }))
            })) : a.find("img:uncached").each((function () {
                l.push({
                    src: this.src,
                    element: this
                })
            })), o = l.length, s = 0, 0 === o && t.call(a[0]), n.each(l, (function (r, l) {
                var u = new Image;
                n(u).on("load." + i + " error." + i, (function (n) {
                    return s++, e.call(l.element, s, o, "load" == n.type), s == o ? (t.call(a[0]), !1) : void 0
                })), u.src = l.src
            }))
        }))
    }
}, function (t, e) {
    ! function (t) {
        var e, n = [],
            i = !1,
            r = !1,
            o = {
                interval: 250,
                force_process: !1
            },
            s = t(window);

        function a() {
            r = !1;
            for (var i = 0; i < n.length; i++) {
                var o = t(n[i]).filter((function () {
                    return t(this).is(":appeared")
                }));
                if (o.trigger("appear", [o]), e) {
                    var s = e.not(o);
                    s.trigger("disappear", [s])
                }
                e = o
            }
        }
        t.expr[":"].appeared = function (e) {
            var n = t(e);
            if (!n.is(":visible")) return !1;
            var i = s.scrollLeft(),
                r = s.scrollTop(),
                o = n.offset(),
                a = o.left,
                l = o.top;
            return l + n.height() >= r && l - (n.data("appear-top-offset") || 0) <= r + s.height() && a + n.width() >= i && a - (n.data("appear-left-offset") || 0) <= i + s.width()
        }, t.fn.extend({
            appear: function (e) {
                var s = t.extend({}, o, e || {}),
                    l = this.selector || this;
                if (!i) {
                    var u = function () {
                        r || (r = !0, setTimeout(a, s.interval))
                    };
                    t(window).scroll(u).resize(u), i = !0
                }
                return s.force_process && setTimeout(a, s.interval), n.push(l), t(l)
            }
        }), t.extend({
            force_appear: function () {
                return !!i && (a(), !0)
            }
        })
    }(jQuery),
    /*!
     * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
     * http://benalman.com/projects/jquery-dotimeout-plugin/
     * 
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    function (t) {
        var e = {},
            n = Array.prototype.slice;

        function i(i) {
            var r, o = this,
                s = {},
                a = i ? t.fn : t,
                l = arguments,
                u = 4,
                c = l[1],
                d = l[2],
                h = l[3];

            function f() {
                i ? r.removeData(i) : c && delete e[c]
            }

            function p() {
                s.id = setTimeout((function () {
                    s.fn()
                }), d)
            }
            if ("string" != typeof c && (u--, c = i = 0, d = l[1], h = l[2]), i ? (r = o.eq(0)).data(i, s = r.data(i) || {}) : c && (s = e[c] || (e[c] = {})), s.id && clearTimeout(s.id), delete s.id, h) s.fn = function (t) {
                "string" == typeof h && (h = a[h]), !0 !== h.apply(o, n.call(l, u)) || t ? f() : p()
            }, p();
            else {
                if (s.fn) return void 0 === d ? f() : s.fn(!1 === d), !0;
                f()
            }
        }
        t.doTimeout = function () {
            return i.apply(window, [0].concat(n.call(arguments)))
        }, t.fn.doTimeout = function () {
            var t = n.call(arguments),
                e = i.apply(this, ["doTimeout" + t[0]].concat(t));
            return "number" == typeof t[0] || "number" == typeof t[1] ? this : e
        }
    }(jQuery), $(".animatedParent").appear(), $(".animatedClick").click((function () {
        var t = $(this).attr("data-target");
        if (null != $(this).attr("data-sequence")) {
            var e = $("." + t + ":first").attr("data-id"),
                n = $("." + t + ":last").attr("data-id"),
                i = e;
            $("." + t + "[data-id=" + i + "]").hasClass("go") ? ($("." + t + "[data-id=" + i + "]").addClass("goAway"), $("." + t + "[data-id=" + i + "]").removeClass("go")) : ($("." + t + "[data-id=" + i + "]").addClass("go"), $("." + t + "[data-id=" + i + "]").removeClass("goAway")), i++, delay = Number($(this).attr("data-sequence")), $.doTimeout(delay, (function () {
                if (console.log(n), $("." + t + "[data-id=" + i + "]").hasClass("go") ? ($("." + t + "[data-id=" + i + "]").addClass("goAway"), $("." + t + "[data-id=" + i + "]").removeClass("go")) : ($("." + t + "[data-id=" + i + "]").addClass("go"), $("." + t + "[data-id=" + i + "]").removeClass("goAway")), ++i <= n) return !0
            }))
        } else $("." + t).hasClass("go") ? ($("." + t).addClass("goAway"), $("." + t).removeClass("go")) : ($("." + t).addClass("go"), $("." + t).removeClass("goAway"))
    })), $(document.body).on("appear", ".animatedParent", (function (t, e) {
        var n = $(this).find(".animated"),
            i = $(this);
        if (null != i.attr("data-sequence")) {
            var r = $(this).find(".animated:first").attr("data-id"),
                o = $(this).find(".animated:last").attr("data-id");
            $(i).find(".animated[data-id=" + r + "]").addClass("go"), r++, delay = Number(i.attr("data-sequence")), $.doTimeout(delay, (function () {
                if ($(i).find(".animated[data-id=" + r + "]").addClass("go"), ++r <= o) return !0
            }))
        } else n.addClass("go")
    })), $(document.body).on("disappear", ".animatedParent", (function (t, e) {
        $(this).hasClass("animateOnce") || $(this).find(".animated").removeClass("go")
    })), $(window).on("load", (function () {
        $.force_appear()
    }))
}, function (t, e, n) {
    n(3), $((function () {
        "use strict";
        $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover()
    }))
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    (function (t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function r(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach((function (e) {
                    o(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function l(t) {
            var n = this,
                i = !1;
            return e(this).one(u.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || u.triggerTransitionEnd(n)
            }), t), this
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
        var u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var n = t.getAttribute("href");
                    e = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(e) ? e : null
                } catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"),
                    i = e(t).css("transition-delay"),
                    r = parseFloat(n),
                    o = parseFloat(i);
                return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            },
            reflow: function (t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function (t) {
                e(t).trigger("transitionend")
            },
            supportsTransitionEnd: function () {
                return Boolean("transitionend")
            },
            isElement: function (t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function (t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = e[i],
                            s = o && u.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    } var a
            },
            findShadowRoot: function (t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? u.findShadowRoot(t.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        u.jQueryDetection(), e.fn.emulateTransitionEnd = l, e.event.special[u.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        };
        var c = "alert",
            d = e.fn[c],
            h = {
                CLOSE: "close.bs.alert",
                CLOSED: "closed.bs.alert",
                CLICK_DATA_API: "click.bs.alert.data-api"
            },
            f = "alert",
            p = "fade",
            g = "show",
            m = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (t) {
                    var n = u.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + f)[0]), i
                }, n._triggerCloseEvent = function (t) {
                    var n = e.Event(h.CLOSE);
                    return e(t).trigger(n), n
                }, n._removeElement = function (t) {
                    var n = this;
                    if (e(t).removeClass(g), e(t).hasClass(p)) {
                        var i = u.getTransitionDurationFromElement(t);
                        e(t).one(u.TRANSITION_END, (function (e) {
                            return n._destroyElement(t, e)
                        })).emulateTransitionEnd(i)
                    } else this._destroyElement(t)
                }, n._destroyElement = function (t) {
                    e(t).detach().trigger(h.CLOSED).remove()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            r = i.data("bs.alert");
                        r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                    }))
                }, t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), e.fn[c] = m._jQueryInterface, e.fn[c].Constructor = m, e.fn[c].noConflict = function () {
            return e.fn[c] = d, m._jQueryInterface
        };
        var v = e.fn.button,
            y = "active",
            b = "btn",
            w = "focus",
            C = '[data-toggle^="button"]',
            _ = '[data-toggle="buttons"]',
            x = '[data-toggle="button"]',
            S = '[data-toggle="buttons"] .btn',
            E = 'input:not([type="hidden"])',
            T = ".active",
            k = ".btn",
            O = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api",
                LOAD_DATA_API: "load.bs.button.data-api"
            },
            P = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.toggle = function () {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest(_)[0];
                    if (i) {
                        var r = this._element.querySelector(E);
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && this._element.classList.contains(y)) t = !1;
                                else {
                                    var o = i.querySelector(T);
                                    o && e(o).removeClass(y)
                                }
                            else "checkbox" === r.type ? "LABEL" === this._element.tagName && r.checked === this._element.classList.contains(y) && (t = !1) : t = !1;
                            t && (r.checked = !this._element.classList.contains(y), e(r).trigger("change")), r.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), t && e(this._element).toggleClass(y))
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.button"), this._element = null
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.button");
                        i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(O.CLICK_DATA_API, C, (function (t) {
            var n = t.target;
            if (e(n).hasClass(b) || (n = e(n).closest(k)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
            else {
                var i = n.querySelector(E);
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
                P._jQueryInterface.call(e(n), "toggle")
            }
        })).on(O.FOCUS_BLUR_DATA_API, C, (function (t) {
            var n = e(t.target).closest(k)[0];
            e(n).toggleClass(w, /^focus(in)?$/.test(t.type))
        })), e(window).on(O.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(S)), e = 0, n = t.length; e < n; e++) {
                var i = t[e],
                    r = i.querySelector(E);
                r.checked || r.hasAttribute("checked") ? i.classList.add(y) : i.classList.remove(y)
            }
            for (var o = 0, s = (t = [].slice.call(document.querySelectorAll(x))).length; o < s; o++) {
                var a = t[o];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add(y) : a.classList.remove(y)
            }
        })), e.fn.button = P._jQueryInterface, e.fn.button.Constructor = P, e.fn.button.noConflict = function () {
            return e.fn.button = v, P._jQueryInterface
        };
        var I = "carousel",
            A = ".bs.carousel",
            D = e.fn[I],
            L = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            $ = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            j = "next",
            N = "prev",
            M = "left",
            H = "right",
            W = {
                SLIDE: "slide" + A,
                SLID: "slid" + A,
                KEYDOWN: "keydown" + A,
                MOUSEENTER: "mouseenter" + A,
                MOUSELEAVE: "mouseleave" + A,
                TOUCHSTART: "touchstart" + A,
                TOUCHMOVE: "touchmove" + A,
                TOUCHEND: "touchend" + A,
                POINTERDOWN: "pointerdown" + A,
                POINTERUP: "pointerup" + A,
                DRAG_START: "dragstart" + A,
                LOAD_DATA_API: "load" + A + ".data-api",
                CLICK_DATA_API: "click" + A + ".data-api"
            },
            R = "carousel",
            B = "active",
            z = "slide",
            q = "carousel-item-right",
            F = "carousel-item-left",
            U = "carousel-item-next",
            V = "carousel-item-prev",
            Q = "pointer-event",
            Y = ".active",
            G = ".active.carousel-item",
            X = ".carousel-item",
            K = ".carousel-item img",
            J = ".carousel-item-next, .carousel-item-prev",
            Z = ".carousel-indicators",
            tt = "[data-slide], [data-slide-to]",
            et = '[data-ride="carousel"]',
            nt = {
                TOUCH: "touch",
                PEN: "pen"
            },
            it = function () {
                function t(t, e) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(Z), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var n = t.prototype;
                return n.next = function () {
                    this._isSliding || this._slide(j)
                }, n.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide(N)
                }, n.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(J) && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(G);
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding) e(this._element).one(W.SLID, (function () {
                            return n.to(t)
                        }));
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var r = t > i ? j : N;
                            this._slide(r, this._items[t])
                        }
                }, n.dispose = function () {
                    e(this._element).off(A), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (t) {
                    return t = a({}, L, {}, t), u.typeCheckConfig(I, t, $), t
                }, n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(W.KEYDOWN, (function (e) {
                        return t._keydown(e)
                    })), "hover" === this._config.pause && e(this._element).on(W.MOUSEENTER, (function (e) {
                        return t.pause(e)
                    })).on(W.MOUSELEAVE, (function (e) {
                        return t.cycle(e)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                                t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                            },
                            i = function (e) {
                                t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                                    return t.cycle(e)
                                }), 500 + t._config.interval))
                            };
                        e(this._element.querySelectorAll(K)).on(W.DRAG_START, (function (t) {
                            return t.preventDefault()
                        })), this._pointerEvent ? (e(this._element).on(W.POINTERDOWN, (function (t) {
                            return n(t)
                        })), e(this._element).on(W.POINTERUP, (function (t) {
                            return i(t)
                        })), this._element.classList.add(Q)) : (e(this._element).on(W.TOUCHSTART, (function (t) {
                            return n(t)
                        })), e(this._element).on(W.TOUCHMOVE, (function (e) {
                            return function (e) {
                                e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                            }(e)
                        })), e(this._element).on(W.TOUCHEND, (function (t) {
                            return i(t)
                        })))
                    }
                }, n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(X)) : [], this._items.indexOf(t)
                }, n._getItemByDirection = function (t, e) {
                    var n = t === j,
                        i = t === N,
                        r = this._getItemIndex(e),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                    var s = (r + (t === N ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t),
                        r = this._getItemIndex(this._element.querySelector(G)),
                        o = e.Event(W.SLIDE, {
                            relatedTarget: t,
                            direction: n,
                            from: r,
                            to: i
                        });
                    return e(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(Y));
                        e(n).removeClass(B);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(B)
                    }
                }, n._slide = function (t, n) {
                    var i, r, o, s = this,
                        a = this._element.querySelector(G),
                        l = this._getItemIndex(a),
                        c = n || a && this._getItemByDirection(t, a),
                        d = this._getItemIndex(c),
                        h = Boolean(this._interval);
                    if (t === j ? (i = F, r = U, o = M) : (i = q, r = V, o = H), c && e(c).hasClass(B)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
                        var f = e.Event(W.SLID, {
                            relatedTarget: c,
                            direction: o,
                            from: l,
                            to: d
                        });
                        if (e(this._element).hasClass(z)) {
                            e(c).addClass(r), u.reflow(c), e(a).addClass(i), e(c).addClass(i);
                            var p = parseInt(c.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = u.getTransitionDurationFromElement(a);
                            e(a).one(u.TRANSITION_END, (function () {
                                e(c).removeClass(i + " " + r).addClass(B), e(a).removeClass(B + " " + r + " " + i), s._isSliding = !1, setTimeout((function () {
                                    return e(s._element).trigger(f)
                                }), 0)
                            })).emulateTransitionEnd(g)
                        } else e(a).removeClass(B), e(c).addClass(B), this._isSliding = !1, e(this._element).trigger(f);
                        h && this.cycle()
                    }
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.carousel"),
                            r = a({}, L, {}, e(this).data());
                        "object" == typeof n && (r = a({}, r, {}, n));
                        var o = "string" == typeof n ? n : r.slide;
                        if (i || (i = new t(this, r), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof o) {
                            if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                            i[o]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    }))
                }, t._dataApiClickHandler = function (n) {
                    var i = u.getSelectorFromElement(this);
                    if (i) {
                        var r = e(i)[0];
                        if (r && e(r).hasClass(R)) {
                            var o = a({}, e(r).data(), {}, e(this).data()),
                                s = this.getAttribute("data-slide-to");
                            s && (o.interval = !1), t._jQueryInterface.call(e(r), o), s && e(r).data("bs.carousel").to(s), n.preventDefault()
                        }
                    }
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return L
                    }
                }]), t
            }();
        e(document).on(W.CLICK_DATA_API, tt, it._dataApiClickHandler), e(window).on(W.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(et)), n = 0, i = t.length; n < i; n++) {
                var r = e(t[n]);
                it._jQueryInterface.call(r, r.data())
            }
        })), e.fn[I] = it._jQueryInterface, e.fn[I].Constructor = it, e.fn[I].noConflict = function () {
            return e.fn[I] = D, it._jQueryInterface
        };
        var rt = "collapse",
            ot = e.fn[rt],
            st = {
                toggle: !0,
                parent: ""
            },
            at = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            lt = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            },
            ut = "show",
            ct = "collapse",
            dt = "collapsing",
            ht = "collapsed",
            ft = "width",
            pt = "height",
            gt = ".show, .collapsing",
            mt = '[data-toggle="collapse"]',
            vt = function () {
                function t(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(mt)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            s = u.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter((function (e) {
                                return e === t
                            }));
                        null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = t.prototype;
                return n.toggle = function () {
                    e(this._element).hasClass(ut) ? this.hide() : this.show()
                }, n.show = function () {
                    var n, i, r = this;
                    if (!(this._isTransitioning || e(this._element).hasClass(ut) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(gt)).filter((function (t) {
                            return "string" == typeof r._config.parent ? t.getAttribute("data-parent") === r._config.parent : t.classList.contains(ct)
                        }))).length && (n = null), n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var o = e.Event(lt.SHOW);
                        if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                            var s = this._getDimension();
                            e(this._element).removeClass(ct).addClass(dt), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(ht).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                l = u.getTransitionDurationFromElement(this._element);
                            e(this._element).one(u.TRANSITION_END, (function () {
                                e(r._element).removeClass(dt).addClass(ct).addClass(ut), r._element.style[s] = "", r.setTransitioning(!1), e(r._element).trigger(lt.SHOWN)
                            })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
                        }
                    }
                }, n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(ut)) {
                        var n = e.Event(lt.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", u.reflow(this._element), e(this._element).addClass(dt).removeClass(ct).removeClass(ut);
                            var r = this._triggerArray.length;
                            if (r > 0)
                                for (var o = 0; o < r; o++) {
                                    var s = this._triggerArray[o],
                                        a = u.getSelectorFromElement(s);
                                    null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(ut) || e(s).addClass(ht).attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var l = u.getTransitionDurationFromElement(this._element);
                            e(this._element).one(u.TRANSITION_END, (function () {
                                t.setTransitioning(!1), e(t._element).removeClass(dt).addClass(ct).trigger(lt.HIDDEN)
                            })).emulateTransitionEnd(l)
                        }
                    }
                }, n.setTransitioning = function (t) {
                    this._isTransitioning = t
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (t) {
                    return (t = a({}, st, {}, t)).toggle = Boolean(t.toggle), u.typeCheckConfig(rt, t, at), t
                }, n._getDimension = function () {
                    return e(this._element).hasClass(ft) ? ft : pt
                }, n._getParent = function () {
                    var n, i = this;
                    u.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(r));
                    return e(o).each((function (e, n) {
                        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass(ut);
                    n.length && e(n).toggleClass(ht, !i).attr("aria-expanded", i)
                }, t._getTargetFromElement = function (t) {
                    var e = u.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            r = i.data("bs.collapse"),
                            o = a({}, st, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                        if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new t(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return st
                    }
                }]), t
            }();
        e(document).on(lt.CLICK_DATA_API, mt, (function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this),
                i = u.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            e(r).each((function () {
                var t = e(this),
                    i = t.data("bs.collapse") ? "toggle" : n.data();
                vt._jQueryInterface.call(t, i)
            }))
        })), e.fn[rt] = vt._jQueryInterface, e.fn[rt].Constructor = vt, e.fn[rt].noConflict = function () {
            return e.fn[rt] = ot, vt._jQueryInterface
        };
        var yt = "dropdown",
            bt = e.fn[yt],
            wt = new RegExp("38|40|27"),
            Ct = {
                HIDE: "hide.bs.dropdown",
                HIDDEN: "hidden.bs.dropdown",
                SHOW: "show.bs.dropdown",
                SHOWN: "shown.bs.dropdown",
                CLICK: "click.bs.dropdown",
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            _t = "disabled",
            xt = "show",
            St = "dropup",
            Et = "dropright",
            Tt = "dropleft",
            kt = "dropdown-menu-right",
            Ot = "position-static",
            Pt = '[data-toggle="dropdown"]',
            It = ".dropdown form",
            At = ".dropdown-menu",
            Dt = ".navbar-nav",
            Lt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            $t = "top-start",
            jt = "top-end",
            Nt = "bottom-start",
            Mt = "bottom-end",
            Ht = "right-start",
            Wt = "left-start",
            Rt = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            Bt = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            zt = function () {
                function t(t, e) {
                    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var i = t.prototype;
                return i.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(_t)) {
                        var n = e(this._menu).hasClass(xt);
                        t._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function (i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass(_t) || e(this._menu).hasClass(xt))) {
                        var r = {
                                relatedTarget: this._element
                            },
                            o = e.Event(Ct.SHOW, r),
                            s = t._getParentFromElement(this._element);
                        if (e(s).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar && i) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = s : u.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(s).addClass(Ot), this._popper = new n(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === e(s).closest(Dt).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(xt), e(s).toggleClass(xt).trigger(e.Event(Ct.SHOWN, r))
                        }
                    }
                }, i.hide = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(_t) && e(this._menu).hasClass(xt)) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = e.Event(Ct.HIDE, n),
                            r = t._getParentFromElement(this._element);
                        e(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass(xt), e(r).toggleClass(xt).trigger(e.Event(Ct.HIDDEN, n)))
                    }
                }, i.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, i.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, i._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(Ct.CLICK, (function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    }))
                }, i._getConfig = function (t) {
                    return t = a({}, this.constructor.Default, {}, e(this._element).data(), {}, t), u.typeCheckConfig(yt, t, this.constructor.DefaultType), t
                }, i._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(At))
                    }
                    return this._menu
                }, i._getPlacement = function () {
                    var t = e(this._element.parentNode),
                        n = Nt;
                    return t.hasClass(St) ? (n = $t, e(this._menu).hasClass(kt) && (n = jt)) : t.hasClass(Et) ? n = Ht : t.hasClass(Tt) ? n = Wt : e(this._menu).hasClass(kt) && (n = Mt), n
                }, i._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, i._getOffset = function () {
                    var t = this,
                        e = {};
                    return "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = a({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
                    } : e.offset = this._config.offset, e
                }, i._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (t.modifiers.applyStyle = {
                        enabled: !1
                    }), a({}, t, {}, this._config.popperConfig)
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.dropdown");
                        if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, t._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var i = [].slice.call(document.querySelectorAll(Pt)), r = 0, o = i.length; r < o; r++) {
                            var s = t._getParentFromElement(i[r]),
                                a = e(i[r]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: i[r]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n), a) {
                                var u = a._menu;
                                if (e(s).hasClass(xt) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                                    var c = e.Event(Ct.HIDE, l);
                                    e(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(u).removeClass(xt), e(s).removeClass(xt).trigger(e.Event(Ct.HIDDEN, l)))
                                }
                            }
                        }
                }, t._getParentFromElement = function (t) {
                    var e, n = u.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode
                }, t._dataApiKeydownHandler = function (n) {
                    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(At).length) : !wt.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(_t))) {
                        var i = t._getParentFromElement(this),
                            r = e(i).hasClass(xt);
                        if (r || 27 !== n.which)
                            if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                                var o = [].slice.call(i.querySelectorAll(Lt)).filter((function (t) {
                                    return e(t).is(":visible")
                                }));
                                if (0 !== o.length) {
                                    var s = o.indexOf(n.target);
                                    38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                                }
                            } else {
                                if (27 === n.which) {
                                    var a = i.querySelector(Pt);
                                    e(a).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                    }
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Rt
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Bt
                    }
                }]), t
            }();
        e(document).on(Ct.KEYDOWN_DATA_API, Pt, zt._dataApiKeydownHandler).on(Ct.KEYDOWN_DATA_API, At, zt._dataApiKeydownHandler).on(Ct.CLICK_DATA_API + " " + Ct.KEYUP_DATA_API, zt._clearMenus).on(Ct.CLICK_DATA_API, Pt, (function (t) {
            t.preventDefault(), t.stopPropagation(), zt._jQueryInterface.call(e(this), "toggle")
        })).on(Ct.CLICK_DATA_API, It, (function (t) {
            t.stopPropagation()
        })), e.fn[yt] = zt._jQueryInterface, e.fn[yt].Constructor = zt, e.fn[yt].noConflict = function () {
            return e.fn[yt] = bt, zt._jQueryInterface
        };
        var qt = e.fn.modal,
            Ft = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            Ut = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            Vt = {
                HIDE: "hide.bs.modal",
                HIDE_PREVENTED: "hidePrevented.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            },
            Qt = "modal-dialog-scrollable",
            Yt = "modal-scrollbar-measure",
            Gt = "modal-backdrop",
            Xt = "modal-open",
            Kt = "fade",
            Jt = "show",
            Zt = "modal-static",
            te = ".modal-dialog",
            ee = ".modal-body",
            ne = '[data-toggle="modal"]',
            ie = '[data-dismiss="modal"]',
            re = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            oe = ".sticky-top",
            se = function () {
                function t(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(te), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var n = t.prototype;
                return n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass(Kt) && (this._isTransitioning = !0);
                        var i = e.Event(Vt.SHOW, {
                            relatedTarget: t
                        });
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Vt.CLICK_DISMISS, ie, (function (t) {
                            return n.hide(t)
                        })), e(this._dialog).on(Vt.MOUSEDOWN_DISMISS, (function () {
                            e(n._element).one(Vt.MOUSEUP_DISMISS, (function (t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(t)
                        })))
                    }
                }, n.hide = function (t) {
                    var n = this;
                    if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = e.Event(Vt.HIDE);
                        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = e(this._element).hasClass(Kt);
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Vt.FOCUSIN), e(this._element).removeClass(Jt), e(this._element).off(Vt.CLICK_DISMISS), e(this._dialog).off(Vt.MOUSEDOWN_DISMISS), r) {
                                var o = u.getTransitionDurationFromElement(this._element);
                                e(this._element).one(u.TRANSITION_END, (function (t) {
                                    return n._hideModal(t)
                                })).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (t) {
                        return e(t).off(".bs.modal")
                    })), e(document).off(Vt.FOCUSIN), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (t) {
                    return t = a({}, Ft, {}, t), u.typeCheckConfig("modal", t, Ut), t
                }, n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event(Vt.HIDE_PREVENTED);
                        if (e(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add(Zt);
                        var i = u.getTransitionDurationFromElement(this._element);
                        e(this._element).one(u.TRANSITION_END, (function () {
                            t._element.classList.remove(Zt)
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function (t) {
                    var n = this,
                        i = e(this._element).hasClass(Kt),
                        r = this._dialog ? this._dialog.querySelector(ee) : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass(Qt) && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && u.reflow(this._element), e(this._element).addClass(Jt), this._config.focus && this._enforceFocus();
                    var o = e.Event(Vt.SHOWN, {
                            relatedTarget: t
                        }),
                        s = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
                        };
                    if (i) {
                        var a = u.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(u.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, n._enforceFocus = function () {
                    var t = this;
                    e(document).off(Vt.FOCUSIN).on(Vt.FOCUSIN, (function (n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    }))
                }, n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(Vt.KEYDOWN_DISMISS, (function (e) {
                        27 === e.which && t._triggerBackdropTransition()
                    })) : this._isShown || e(this._element).off(Vt.KEYDOWN_DISMISS)
                }, n._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on(Vt.RESIZE, (function (e) {
                        return t.handleUpdate(e)
                    })) : e(window).off(Vt.RESIZE)
                }, n._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        e(document.body).removeClass(Xt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Vt.HIDDEN)
                    }))
                }, n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (t) {
                    var n = this,
                        i = e(this._element).hasClass(Kt) ? Kt : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = Gt, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Vt.CLICK_DISMISS, (function (t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                            })), i && u.reflow(this._backdrop), e(this._backdrop).addClass(Jt), !t) return;
                        if (!i) return void t();
                        var r = u.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(u.TRANSITION_END, t).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(Jt);
                        var o = function () {
                            n._removeBackdrop(), t && t()
                        };
                        if (e(this._element).hasClass(Kt)) {
                            var s = u.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(u.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    } else t && t()
                }, n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(re)),
                            i = [].slice.call(document.querySelectorAll(oe));
                        e(n).each((function (n, i) {
                            var r = i.style.paddingRight,
                                o = e(i).css("padding-right");
                            e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                        })), e(i).each((function (n, i) {
                            var r = i.style.marginRight,
                                o = e(i).css("margin-right");
                            e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                        }));
                        var r = document.body.style.paddingRight,
                            o = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    e(document.body).addClass(Xt)
                }, n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(re));
                    e(t).each((function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll("" + oe));
                    e(n).each((function (t, n) {
                        var i = e(n).data("margin-right");
                        void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = Yt, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, t._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var r = e(this).data("bs.modal"),
                            o = a({}, Ft, {}, e(this).data(), {}, "object" == typeof n && n ? n : {});
                        if (r || (r = new t(this, o), e(this).data("bs.modal", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else o.show && r.show(i)
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Ft
                    }
                }]), t
            }();
        e(document).on(Vt.CLICK_DATA_API, ne, (function (t) {
            var n, i = this,
                r = u.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), {}, e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = e(n).one(Vt.SHOW, (function (t) {
                t.isDefaultPrevented() || s.one(Vt.HIDDEN, (function () {
                    e(i).is(":visible") && i.focus()
                }))
            }));
            se._jQueryInterface.call(e(n), o, this)
        })), e.fn.modal = se._jQueryInterface, e.fn.modal.Constructor = se, e.fn.modal.noConflict = function () {
            return e.fn.modal = qt, se._jQueryInterface
        };
        var ae = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            le = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            ue = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            ce = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function de(t, e, n) {
            if (0 === t.length) return t;
            if (n && "function" == typeof n) return n(t);
            for (var i = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), o = [].slice.call(i.body.querySelectorAll("*")), s = function (t, n) {
                    var i = o[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[s] || []);
                    a.forEach((function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === ae.indexOf(n) || Boolean(t.nodeValue.match(ue) || t.nodeValue.match(ce));
                            for (var i = e.filter((function (t) {
                                    return t instanceof RegExp
                                })), r = 0, o = i.length; r < o; r++)
                                if (n.match(i[r])) return !0;
                            return !1
                        })(t, l) || i.removeAttribute(t.nodeName)
                    }))
                }, a = 0, l = o.length; a < l; a++) s(a);
            return i.body.innerHTML
        }
        var he = "tooltip",
            fe = e.fn[he],
            pe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            ge = ["sanitize", "whiteList", "sanitizeFn"],
            me = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            ve = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            ye = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: le,
                popperConfig: null
            },
            be = "show",
            we = "out",
            Ce = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            _e = "fade",
            xe = "show",
            Se = ".tooltip-inner",
            Ee = ".arrow",
            Te = "hover",
            ke = "focus",
            Oe = "click",
            Pe = "manual",
            Ie = function () {
                function t(t, e) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                var i = t.prototype;
                return i.enable = function () {
                    this._isEnabled = !0
                }, i.disable = function () {
                    this._isEnabled = !1
                }, i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, i.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (e(this.getTipElement()).hasClass(xe)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, i.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var r = u.findShadowRoot(this.element),
                            o = e.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var s = this.getTipElement(),
                            a = u.getUID(this.constructor.NAME);
                        s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(_e);
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var d = this._getContainer();
                        e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(c)), e(s).addClass(xe), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var h = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === we && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass(_e)) {
                            var f = u.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(u.TRANSITION_END, h).emulateTransitionEnd(f)
                        } else h()
                    }
                }, i.hide = function (t) {
                    var n = this,
                        i = this.getTipElement(),
                        r = e.Event(this.constructor.Event.HIDE),
                        o = function () {
                            n._hoverState !== be && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                        };
                    if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (e(i).removeClass(xe), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[Oe] = !1, this._activeTrigger[ke] = !1, this._activeTrigger[Te] = !1, e(this.tip).hasClass(_e)) {
                            var s = u.getTransitionDurationFromElement(i);
                            e(i).one(u.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, i.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, i.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, i.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, i.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(Se)), this.getTitle()), e(t).removeClass(_e + " " + xe)
                }, i.setElementContent = function (t, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = de(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                }, i.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, i._getPopperConfig = function (t) {
                    var e = this;
                    return a({}, {
                        placement: t,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Ee
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }, {}, this.config.popperConfig)
                }, i._getOffset = function () {
                    var t = this,
                        e = {};
                    return "function" == typeof this.config.offset ? e.fn = function (e) {
                        return e.offsets = a({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
                    } : e.offset = this.config.offset, e
                }, i._getContainer = function () {
                    return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                }, i._getAttachment = function (t) {
                    return ve[t.toUpperCase()]
                }, i._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) {
                            return t.toggle(e)
                        }));
                        else if (n !== Pe) {
                            var i = n === Te ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = n === Te ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, (function (e) {
                                return t._enter(e)
                            })).on(r, t.config.selector, (function (e) {
                                return t._leave(e)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        t.element && t.hide()
                    }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, i._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? ke : Te] = !0), e(n.getTipElement()).hasClass(xe) || n._hoverState === be ? n._hoverState = be : (clearTimeout(n._timeout), n._hoverState = be, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        n._hoverState === be && n.show()
                    }), n.config.delay.show) : n.show())
                }, i._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? ke : Te] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = we, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        n._hoverState === we && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }, i._getConfig = function (t) {
                    var n = e(this.element).data();
                    return Object.keys(n).forEach((function (t) {
                        -1 !== ge.indexOf(t) && delete n[t]
                    })), "number" == typeof (t = a({}, this.constructor.Default, {}, n, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), u.typeCheckConfig(he, t, this.constructor.DefaultType), t.sanitize && (t.template = de(t.template, t.whiteList, t.sanitizeFn)), t
                }, i._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, i._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(pe);
                    null !== n && n.length && t.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, i._fixTransition = function () {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(_e), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.tooltip"),
                            r = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, r), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ye
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return he
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Ce
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return me
                    }
                }]), t
            }();
        e.fn[he] = Ie._jQueryInterface, e.fn[he].Constructor = Ie, e.fn[he].noConflict = function () {
            return e.fn[he] = fe, Ie._jQueryInterface
        };
        var Ae = "popover",
            De = e.fn[Ae],
            Le = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            $e = a({}, Ie.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            je = a({}, Ie.DefaultType, {
                content: "(string|element|function)"
            }),
            Ne = "fade",
            Me = "show",
            He = ".popover-header",
            We = ".popover-body",
            Re = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            Be = function (t) {
                var n, i;

                function o() {
                    return t.apply(this, arguments) || this
                }
                i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
                var s = o.prototype;
                return s.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }, s.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, s.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(He), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(We), n), t.removeClass(Ne + " " + Me)
                }, s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(Le);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }, o._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this).data("bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, r(o, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return $e
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Ae
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Re
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return je
                    }
                }]), o
            }(Ie);
        e.fn[Ae] = Be._jQueryInterface, e.fn[Ae].Constructor = Be, e.fn[Ae].noConflict = function () {
            return e.fn[Ae] = De, Be._jQueryInterface
        };
        var ze = "scrollspy",
            qe = e.fn[ze],
            Fe = {
                offset: 10,
                method: "auto",
                target: ""
            },
            Ue = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            Ve = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            },
            Qe = "dropdown-item",
            Ye = "active",
            Ge = '[data-spy="scroll"]',
            Xe = ".nav, .list-group",
            Ke = ".nav-link",
            Je = ".nav-item",
            Ze = ".list-group-item",
            tn = ".dropdown",
            en = ".dropdown-item",
            nn = ".dropdown-toggle",
            rn = "offset",
            on = "position",
            sn = function () {
                function t(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + Ke + "," + this._config.target + " " + Ze + "," + this._config.target + " " + en, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(Ve.SCROLL, (function (t) {
                        return i._process(t)
                    })), this.refresh(), this._process()
                }
                var n = t.prototype;
                return n.refresh = function () {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? rn : on,
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = i === on ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (t) {
                        var n, o = u.getSelectorFromElement(t);
                        if (o && (n = document.querySelector(o)), n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height) return [e(n)[i]().top + r, o]
                        }
                        return null
                    })).filter((function (t) {
                        return t
                    })).sort((function (t, e) {
                        return t[0] - e[0]
                    })).forEach((function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    }))
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (t) {
                    if ("string" != typeof (t = a({}, Fe, {}, "object" == typeof t && t ? t : {})).target) {
                        var n = e(t.target).attr("id");
                        n || (n = u.getUID(ze), e(t.target).attr("id", n)), t.target = "#" + n
                    }
                    return u.typeCheckConfig(ze, t, Ue), t
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, n._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",").map((function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        })),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass(Qe) ? (i.closest(tn).find(nn).addClass(Ye), i.addClass(Ye)) : (i.addClass(Ye), i.parents(Xe).prev(Ke + ", " + Ze).addClass(Ye), i.parents(Xe).prev(Je).children(Ke).addClass(Ye)), e(this._scrollElement).trigger(Ve.ACTIVATE, {
                        relatedTarget: t
                    })
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) {
                        return t.classList.contains(Ye)
                    })).forEach((function (t) {
                        return t.classList.remove(Ye)
                    }))
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.scrollspy");
                        if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Fe
                    }
                }]), t
            }();
        e(window).on(Ve.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(Ge)), n = t.length; n--;) {
                var i = e(t[n]);
                sn._jQueryInterface.call(i, i.data())
            }
        })), e.fn[ze] = sn._jQueryInterface, e.fn[ze].Constructor = sn, e.fn[ze].noConflict = function () {
            return e.fn[ze] = qe, sn._jQueryInterface
        };
        var an = e.fn.tab,
            ln = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            },
            un = "dropdown-menu",
            cn = "active",
            dn = "disabled",
            hn = "fade",
            fn = "show",
            pn = ".dropdown",
            gn = ".nav, .list-group",
            mn = ".active",
            vn = "> li > .active",
            yn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            bn = ".dropdown-toggle",
            wn = "> .dropdown-menu .active",
            Cn = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(cn) || e(this._element).hasClass(dn))) {
                        var n, i, r = e(this._element).closest(gn)[0],
                            o = u.getSelectorFromElement(this._element);
                        if (r) {
                            var s = "UL" === r.nodeName || "OL" === r.nodeName ? vn : mn;
                            i = (i = e.makeArray(e(r).find(s)))[i.length - 1]
                        }
                        var a = e.Event(ln.HIDE, {
                                relatedTarget: this._element
                            }),
                            l = e.Event(ln.SHOW, {
                                relatedTarget: i
                            });
                        if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var c = function () {
                                var n = e.Event(ln.HIDDEN, {
                                        relatedTarget: t._element
                                    }),
                                    r = e.Event(ln.SHOWN, {
                                        relatedTarget: i
                                    });
                                e(i).trigger(n), e(t._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (t, n, i) {
                    var r = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(mn) : e(n).find(vn))[0],
                        s = i && o && e(o).hasClass(hn),
                        a = function () {
                            return r._transitionComplete(t, o, i)
                        };
                    if (o && s) {
                        var l = u.getTransitionDurationFromElement(o);
                        e(o).removeClass(fn).one(u.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }, n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass(cn);
                        var r = e(n.parentNode).find(wn)[0];
                        r && e(r).removeClass(cn), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u.reflow(t), t.classList.contains(hn) && t.classList.add(fn), t.parentNode && e(t.parentNode).hasClass(un)) {
                        var o = e(t).closest(pn)[0];
                        if (o) {
                            var s = [].slice.call(o.querySelectorAll(bn));
                            e(s).addClass(cn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            r = i.data("bs.tab");
                        if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(ln.CLICK_DATA_API, yn, (function (t) {
            t.preventDefault(), Cn._jQueryInterface.call(e(this), "show")
        })), e.fn.tab = Cn._jQueryInterface, e.fn.tab.Constructor = Cn, e.fn.tab.noConflict = function () {
            return e.fn.tab = an, Cn._jQueryInterface
        };
        var _n = e.fn.toast,
            xn = {
                CLICK_DISMISS: "click.dismiss.bs.toast",
                HIDE: "hide.bs.toast",
                HIDDEN: "hidden.bs.toast",
                SHOW: "show.bs.toast",
                SHOWN: "shown.bs.toast"
            },
            Sn = "fade",
            En = "hide",
            Tn = "show",
            kn = "showing",
            On = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            Pn = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            In = '[data-dismiss="toast"]',
            An = function () {
                function t(t, e) {
                    this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
                }
                var n = t.prototype;
                return n.show = function () {
                    var t = this,
                        n = e.Event(xn.SHOW);
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add(Sn);
                        var i = function () {
                            t._element.classList.remove(kn), t._element.classList.add(Tn), e(t._element).trigger(xn.SHOWN), t._config.autohide && (t._timeout = setTimeout((function () {
                                t.hide()
                            }), t._config.delay))
                        };
                        if (this._element.classList.remove(En), u.reflow(this._element), this._element.classList.add(kn), this._config.animation) {
                            var r = u.getTransitionDurationFromElement(this._element);
                            e(this._element).one(u.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else i()
                    }
                }, n.hide = function () {
                    if (this._element.classList.contains(Tn)) {
                        var t = e.Event(xn.HIDE);
                        e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Tn) && this._element.classList.remove(Tn), e(this._element).off(xn.CLICK_DISMISS), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (t) {
                    return t = a({}, Pn, {}, e(this._element).data(), {}, "object" == typeof t && t ? t : {}), u.typeCheckConfig("toast", t, this.constructor.DefaultType), t
                }, n._setListeners = function () {
                    var t = this;
                    e(this._element).on(xn.CLICK_DISMISS, In, (function () {
                        return t.hide()
                    }))
                }, n._close = function () {
                    var t = this,
                        n = function () {
                            t._element.classList.add(En), e(t._element).trigger(xn.HIDDEN)
                        };
                    if (this._element.classList.remove(Tn), this._config.animation) {
                        var i = u.getTransitionDurationFromElement(this._element);
                        e(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            r = i.data("bs.toast");
                        if (r || (r = new t(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    }))
                }, r(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return On
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Pn
                    }
                }]), t
            }();
        e.fn.toast = An._jQueryInterface, e.fn.toast.Constructor = An, e.fn.toast.noConflict = function () {
            return e.fn.toast = _n, An._jQueryInterface
        }, t.Alert = m, t.Button = P, t.Carousel = it, t.Collapse = vt, t.Dropdown = zt, t.Modal = se, t.Popover = Be, t.Scrollspy = sn, t.Tab = Cn, t.Toast = An, t.Tooltip = Ie, t.Util = u, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })(e, n(0), n(3))
}, function (t, e, n) {
    n(20), jQuery((function (t) {
        "use strict";
        i()
    }));
    var i = window.lightSlider = function () {
        $(".lightSlider").each((function () {
            var t = $(this);
            t.lightSlider({
                verticalHeight: t.data("vertical-height"),
                autoWidth: t.data("auto-width"),
                slideWidth: t.data("slide-width"),
                centerSlide: t.data("center-slide"),
                gallery: t.data("gallery"),
                thumbItem: t.data("thumbs"),
                thumbMargin: t.data("margin"),
                item: t.data("item"),
                loop: t.data("loop"),
                mode: t.data("mode"),
                speed: t.data("speed"),
                auto: t.data("auto"),
                pause: t.data("pause"),
                pauseOnHover: t.data("pause-on-hover"),
                pager: t.data("pager"),
                slideMargin: t.data("slide-margin"),
                vThumbWidth: 80,
                currentPagerPosition: t.data("position"),
                controls: t.data("controls"),
                prevHtml: '<span class="icon icon-angle-left"></span>',
                nextHtml: '<span class="icon icon-angle-right"></span>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        item: t.data("item-lg"),
                        slideMove: 1,
                        slideMargin: 6
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        item: t.data("item-md"),
                        slideMove: 1,
                        slideMargin: 6
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        item: t.data("item-sm"),
                        slideMove: 1
                    }
                }],
                onSliderLoad: function (e) {
                    t.data("start") && t.goToSlide(t.data("start")), t.addClass("showSlider"), e.find(".lslide .animated").addClass("go")
                },
                onBeforeNextSlide: function (t) {
                    t.find(".lslide .animated").removeClass("go")
                },
                onAfterSlide: function (t) {
                    t.find(".lslide .animated").addClass("go")
                }
            })
        }))
    }
}, function (t, e) {
    /*! lightslider - v1.1.6 - 2016-10-25
     * https://github.com/sachinchoolur/lightslider
     * Copyright (c) 2016 Sachin N; Licensed MIT */
    ! function (t, e) {
        "use strict";
        var n = {
            item: 3,
            autoWidth: !1,
            slideMove: 1,
            slideMargin: 10,
            addClass: "",
            mode: "slide",
            useCSS: !0,
            cssEasing: "ease",
            easing: "linear",
            speed: 400,
            auto: !1,
            pauseOnHover: !1,
            loop: !1,
            slideEndAnimation: !0,
            pause: 2e3,
            keyPress: !1,
            controls: !0,
            prevHtml: "",
            nextHtml: "",
            rtl: !1,
            adaptiveHeight: !1,
            vertical: !1,
            verticalHeight: 500,
            vThumbWidth: 100,
            thumbItem: 10,
            pager: !0,
            gallery: !1,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: "middle",
            enableTouch: !0,
            enableDrag: !0,
            freeMove: !0,
            swipeThreshold: 40,
            responsive: [],
            onBeforeStart: function (t) {},
            onSliderLoad: function (t) {},
            onBeforeSlide: function (t, e) {},
            onAfterSlide: function (t, e) {},
            onBeforeNextSlide: function (t, e) {},
            onBeforePrevSlide: function (t, e) {}
        };
        t.fn.lightSlider = function (e) {
            if (0 === this.length) return this;
            if (this.length > 1) return this.each((function () {
                t(this).lightSlider(e)
            })), this;
            var i = {},
                r = t.extend(!0, {}, n, e),
                o = {},
                s = this;
            i.$el = this, "fade" === r.mode && (r.vertical = !1);
            var a = s.children(),
                l = t(window).width(),
                u = null,
                c = 0,
                d = 0,
                h = !1,
                f = 0,
                p = "",
                g = 0,
                m = !0 === r.vertical ? "height" : "width",
                v = !0 === r.vertical ? "margin-bottom" : "margin-right",
                y = 0,
                b = 0,
                w = 0,
                C = 0,
                _ = null,
                x = "ontouchstart" in document.documentElement,
                S = {
                    chbreakpoint: function () {
                        if (l = t(window).width(), r.responsive.length) {
                            var e;
                            if (!1 === r.autoWidth && (e = r.item), l < r.responsive[0].breakpoint)
                                for (var n = 0; n < r.responsive.length; n++) l < r.responsive[n].breakpoint && (r.responsive[n].breakpoint, u = r.responsive[n]);
                            if (null != u)
                                for (var i in u.settings) u.settings.hasOwnProperty(i) && (void 0 !== o[i] && null !== o[i] || (o[i] = r[i]), r[i] = u.settings[i]);
                            if (!t.isEmptyObject(o) && l > r.responsive[0].breakpoint)
                                for (var s in o) o.hasOwnProperty(s) && (r[s] = o[s]);
                            !1 === r.autoWidth && y > 0 && w > 0 && e !== r.item && (g = Math.round(y / ((w + r.slideMargin) * r.slideMove)))
                        }
                    },
                    calSW: function () {
                        !1 === r.autoWidth && (w = (f - (r.item * r.slideMargin - r.slideMargin)) / r.item)
                    },
                    calWidth: function (t) {
                        var e = !0 === t ? p.find(".lslide").length : a.length;
                        if (!1 === r.autoWidth) d = e * (w + r.slideMargin);
                        else {
                            d = 0;
                            for (var n = 0; n < e; n++) d += parseInt(a.eq(n).width()) + r.slideMargin
                        }
                        return d
                    }
                };
            return (i = {
                doCss: function () {
                    return !(!r.useCSS || ! function () {
                        for (var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], e = document.documentElement, n = 0; n < t.length; n++)
                            if (t[n] in e.style) return !0
                    }())
                },
                keyPress: function () {
                    r.keyPress && t(document).on("keyup.lightslider", (function (e) {
                        t(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 37 === e.keyCode ? s.goToPrevSlide() : 39 === e.keyCode && s.goToNextSlide())
                    }))
                },
                controls: function () {
                    r.controls && (s.after('<div class="lSAction"><a class="lSPrev">' + r.prevHtml + '</a><a class="lSNext">' + r.nextHtml + "</a></div>"), r.autoWidth ? S.calWidth(!1) < f && p.find(".lSAction").hide() : c <= r.item && p.find(".lSAction").hide(), p.find(".lSAction a").on("click", (function (e) {
                        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "lSPrev" === t(this).attr("class") ? s.goToPrevSlide() : s.goToNextSlide(), !1
                    })))
                },
                initialStyle: function () {
                    var t = this;
                    "fade" === r.mode && (r.autoWidth = !1, r.slideEndAnimation = !1), r.auto && (r.slideEndAnimation = !1), r.autoWidth && (r.slideMove = 1, r.item = 1), r.loop && (r.slideMove = 1, r.freeMove = !1), r.onBeforeStart.call(this, s), S.chbreakpoint(), s.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + r.addClass + '"><div class="lSSlideWrapper"></div></div>'), p = s.parent(".lSSlideWrapper"), !0 === r.rtl && p.parent().addClass("lSrtl"), r.vertical ? (p.parent().addClass("vertical"), f = r.verticalHeight, p.css("height", f + "px")) : f = s.outerWidth(), a.addClass("lslide"), !0 === r.loop && "slide" === r.mode && (S.calSW(), S.clone = function () {
                        if (S.calWidth(!0) > f) {
                            for (var e = 0, n = 0, i = 0; i < a.length && (n++, !((e += parseInt(s.find(".lslide").eq(i).width()) + r.slideMargin) >= f + r.slideMargin)); i++);
                            var o = !0 === r.autoWidth ? n : r.item;
                            if (o < s.find(".clone.left").length)
                                for (var l = 0; l < s.find(".clone.left").length - o; l++) a.eq(l).remove();
                            if (o < s.find(".clone.right").length)
                                for (var u = a.length - 1; u > a.length - 1 - s.find(".clone.right").length; u--) g--, a.eq(u).remove();
                            for (var c = s.find(".clone.right").length; c < o; c++) s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s), g++;
                            for (var d = s.find(".lslide").length - s.find(".clone.left").length; d > s.find(".lslide").length - o; d--) s.find(".lslide").eq(d - 1).clone().removeClass("lslide").addClass("clone left").prependTo(s);
                            a = s.children()
                        } else a.hasClass("clone") && (s.find(".clone").remove(), t.move(s, 0))
                    }, S.clone()), S.sSW = function () {
                        c = a.length, !0 === r.rtl && !1 === r.vertical && (v = "margin-left"), !1 === r.autoWidth && a.css(m, w + "px"), a.css(v, r.slideMargin + "px"), d = S.calWidth(!1), s.css(m, d + "px"), !0 === r.loop && "slide" === r.mode && !1 === h && (g = s.find(".clone.left").length)
                    }, S.calL = function () {
                        a = s.children(), c = a.length
                    }, this.doCss() && p.addClass("usingCss"), S.calL(), "slide" === r.mode ? (S.calSW(), S.sSW(), !0 === r.loop && (y = t.slideValue(), this.move(s, y)), !1 === r.vertical && this.setHeight(s, !1)) : (this.setHeight(s, !0), s.addClass("lSFade"), this.doCss() || (a.fadeOut(0), a.eq(g).fadeIn(0))), !0 === r.loop && "slide" === r.mode ? a.eq(g).addClass("active") : a.first().addClass("active")
                },
                pager: function () {
                    var t = this;
                    if (S.createPager = function () {
                            C = (f - (r.thumbItem * r.thumbMargin - r.thumbMargin)) / r.thumbItem;
                            var e = p.find(".lslide"),
                                n = p.find(".lslide").length,
                                i = 0,
                                o = "",
                                a = 0;
                            for (i = 0; i < n; i++) {
                                "slide" === r.mode && (r.autoWidth ? a += (parseInt(e.eq(i).width()) + r.slideMargin) * r.slideMove : a = i * ((w + r.slideMargin) * r.slideMove));
                                var l = e.eq(i * r.slideMove).attr("data-thumb");
                                if (!0 === r.gallery ? o += '<li style="width:100%;' + m + ":" + C + "px;" + v + ":" + r.thumbMargin + 'px"><a href="#"><img src="' + l + '" /></a></li>' : o += '<li><a href="#">' + (i + 1) + "</a></li>", "slide" === r.mode && a >= d - f - r.slideMargin) {
                                    i += 1;
                                    var u = 2;
                                    r.autoWidth && (o += '<li><a href="#">' + (i + 1) + "</a></li>", u = 1), i < u ? (o = null, p.parent().addClass("noPager")) : p.parent().removeClass("noPager");
                                    break
                                }
                            }
                            var c = p.parent();
                            c.find(".lSPager").html(o), !0 === r.gallery && (!0 === r.vertical && c.find(".lSPager").css("width", r.vThumbWidth + "px"), b = i * (r.thumbMargin + C) + .5, c.find(".lSPager").css({
                                property: b + "px",
                                "transition-duration": r.speed + "ms"
                            }), !0 === r.vertical && p.parent().css("padding-right", r.vThumbWidth + r.galleryMargin + "px"), c.find(".lSPager").css(m, b + "px"));
                            var h = c.find(".lSPager").find("li");
                            h.first().addClass("active"), h.on("click", (function () {
                                return !0 === r.loop && "slide" === r.mode ? g += h.index(this) - c.find(".lSPager").find("li.active").index() : g = h.index(this), s.mode(!1), !0 === r.gallery && t.slideThumb(), !1
                            }))
                        }, r.pager) {
                        var e = "lSpg";
                        r.gallery && (e = "lSGallery"), p.after('<ul class="lSPager ' + e + '"></ul>');
                        var n = r.vertical ? "margin-left" : "margin-top";
                        p.parent().find(".lSPager").css(n, r.galleryMargin + "px"), S.createPager()
                    }
                    setTimeout((function () {
                        S.init()
                    }), 0)
                },
                setHeight: function (t, e) {
                    var n = null,
                        i = this;
                    n = r.loop ? t.children(".lslide ").first() : t.children().first();
                    var o = function () {
                        var i = n.outerHeight(),
                            r = 0,
                            o = i;
                        e && (i = 0, r = 100 * o / f), t.css({
                            height: i + "px",
                            "padding-bottom": r + "%"
                        })
                    };
                    o(), n.find("img").length ? n.find("img")[0].complete ? (o(), _ || i.auto()) : n.find("img").on("load", (function () {
                        setTimeout((function () {
                            o(), _ || i.auto()
                        }), 100)
                    })) : _ || i.auto()
                },
                active: function (t, e) {
                    this.doCss() && "fade" === r.mode && p.addClass("on");
                    var n, i, o = 0;
                    g * r.slideMove < c ? (t.removeClass("active"), this.doCss() || "fade" !== r.mode || !1 !== e || t.fadeOut(r.speed), o = !0 === e ? g : g * r.slideMove, !0 === e && (i = (n = t.length) - 1, o + 1 >= n && (o = i)), !0 === r.loop && "slide" === r.mode && (o = !0 === e ? g - s.find(".clone.left").length : g * r.slideMove, !0 === e && (i = (n = t.length) - 1, o + 1 === n ? o = i : o + 1 > n && (o = 0))), this.doCss() || "fade" !== r.mode || !1 !== e || t.eq(o).fadeIn(r.speed), t.eq(o).addClass("active")) : (t.removeClass("active"), t.eq(t.length - 1).addClass("active"), this.doCss() || "fade" !== r.mode || !1 !== e || (t.fadeOut(r.speed), t.eq(o).fadeIn(r.speed)))
                },
                move: function (t, e) {
                    !0 === r.rtl && (e = -e), this.doCss() ? !0 === r.vertical ? t.css({
                        transform: "translate3d(0px, " + -e + "px, 0px)",
                        "-webkit-transform": "translate3d(0px, " + -e + "px, 0px)"
                    }) : t.css({
                        transform: "translate3d(" + -e + "px, 0px, 0px)",
                        "-webkit-transform": "translate3d(" + -e + "px, 0px, 0px)"
                    }) : !0 === r.vertical ? t.css("position", "relative").animate({
                        top: -e + "px"
                    }, r.speed, r.easing) : t.css("position", "relative").animate({
                        left: -e + "px"
                    }, r.speed, r.easing);
                    var n = p.parent().find(".lSPager").find("li");
                    this.active(n, !0)
                },
                fade: function () {
                    this.active(a, !1);
                    var t = p.parent().find(".lSPager").find("li");
                    this.active(t, !0)
                },
                slide: function () {
                    var t = this;
                    S.calSlide = function () {
                        d > f && (y = t.slideValue(), t.active(a, !1), y > d - f - r.slideMargin ? y = d - f - r.slideMargin : y < 0 && (y = 0), t.move(s, y), !0 === r.loop && "slide" === r.mode && (g >= c - s.find(".clone.left").length / r.slideMove && t.resetSlide(s.find(".clone.left").length), 0 === g && t.resetSlide(p.find(".lslide").length)))
                    }, S.calSlide()
                },
                resetSlide: function (t) {
                    var e = this;
                    p.find(".lSAction a").addClass("disabled"), setTimeout((function () {
                        g = t, p.css("transition-duration", "0ms"), y = e.slideValue(), e.active(a, !1), i.move(s, y), setTimeout((function () {
                            p.css("transition-duration", r.speed + "ms"), p.find(".lSAction a").removeClass("disabled")
                        }), 50)
                    }), r.speed + 100)
                },
                slideValue: function () {
                    var t = 0;
                    if (!1 === r.autoWidth) t = g * ((w + r.slideMargin) * r.slideMove);
                    else {
                        t = 0;
                        for (var e = 0; e < g; e++) t += parseInt(a.eq(e).width()) + r.slideMargin
                    }
                    return t
                },
                slideThumb: function () {
                    var t;
                    switch (r.currentPagerPosition) {
                        case "left":
                            t = 0;
                            break;
                        case "middle":
                            t = f / 2 - C / 2;
                            break;
                        case "right":
                            t = f - C
                    }
                    var e = g - s.find(".clone.left").length,
                        n = p.parent().find(".lSPager");
                    "slide" === r.mode && !0 === r.loop && (e >= n.children().length ? e = 0 : e < 0 && (e = n.children().length));
                    var i = e * (C + r.thumbMargin) - t;
                    i + f > b && (i = b - f - r.thumbMargin), i < 0 && (i = 0), this.move(n, i)
                },
                auto: function () {
                    r.auto && (clearInterval(_), _ = setInterval((function () {
                        s.goToNextSlide()
                    }), r.pause))
                },
                pauseOnHover: function () {
                    var e = this;
                    r.auto && r.pauseOnHover && (p.on("mouseenter", (function () {
                        t(this).addClass("ls-hover"), s.pause(), r.auto = !0
                    })), p.on("mouseleave", (function () {
                        t(this).removeClass("ls-hover"), p.find(".lightSlider").hasClass("lsGrabbing") || e.auto()
                    })))
                },
                touchMove: function (t, e) {
                    if (p.css("transition-duration", "0ms"), "slide" === r.mode) {
                        var n = y - (t - e);
                        if (n >= d - f - r.slideMargin)
                            if (!1 === r.freeMove) n = d - f - r.slideMargin;
                            else {
                                var i = d - f - r.slideMargin;
                                n = i + (n - i) / 5
                            }
                        else n < 0 && (!1 === r.freeMove ? n = 0 : n /= 5);
                        this.move(s, n)
                    }
                },
                touchEnd: function (t) {
                    if (p.css("transition-duration", r.speed + "ms"), "slide" === r.mode) {
                        var e = !1,
                            n = !0;
                        (y -= t) > d - f - r.slideMargin ? (y = d - f - r.slideMargin, !1 === r.autoWidth && (e = !0)) : y < 0 && (y = 0);
                        var i = function (t) {
                            var n = 0;
                            if (e || t && (n = 1), r.autoWidth)
                                for (var i = 0, o = 0; o < a.length && (i += parseInt(a.eq(o).width()) + r.slideMargin, g = o + n, !(i >= y)); o++);
                            else {
                                var s = y / ((w + r.slideMargin) * r.slideMove);
                                g = parseInt(s) + n, y >= d - f - r.slideMargin && s % 1 != 0 && g++
                            }
                        };
                        t >= r.swipeThreshold ? (i(!1), n = !1) : t <= -r.swipeThreshold && (i(!0), n = !1), s.mode(n), this.slideThumb()
                    } else t >= r.swipeThreshold ? s.goToPrevSlide() : t <= -r.swipeThreshold && s.goToNextSlide()
                },
                enableDrag: function () {
                    var e = this;
                    if (!x) {
                        var n = 0,
                            i = 0,
                            o = !1;
                        p.find(".lightSlider").addClass("lsGrab"), p.on("mousedown", (function (e) {
                            if (d < f && 0 !== d) return !1;
                            "lSPrev" !== t(e.target).attr("class") && "lSNext" !== t(e.target).attr("class") && (n = !0 === r.vertical ? e.pageY : e.pageX, o = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, p.scrollLeft += 1, p.scrollLeft -= 1, p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(_))
                        })), t(window).on("mousemove", (function (t) {
                            o && (i = !0 === r.vertical ? t.pageY : t.pageX, e.touchMove(i, n))
                        })), t(window).on("mouseup", (function (s) {
                            if (o) {
                                p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), o = !1;
                                var a = (i = !0 === r.vertical ? s.pageY : s.pageX) - n;
                                Math.abs(a) >= r.swipeThreshold && t(window).on("click.ls", (function (e) {
                                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), e.stopPropagation(), t(window).off("click.ls")
                                })), e.touchEnd(a)
                            }
                        }))
                    }
                },
                enableTouch: function () {
                    var t = this;
                    if (x) {
                        var e = {},
                            n = {};
                        p.on("touchstart", (function (t) {
                            n = t.originalEvent.targetTouches[0], e.pageX = t.originalEvent.targetTouches[0].pageX, e.pageY = t.originalEvent.targetTouches[0].pageY, clearInterval(_)
                        })), p.on("touchmove", (function (i) {
                            if (d < f && 0 !== d) return !1;
                            var o = i.originalEvent;
                            n = o.targetTouches[0];
                            var s = Math.abs(n.pageX - e.pageX),
                                a = Math.abs(n.pageY - e.pageY);
                            !0 === r.vertical ? (3 * a > s && i.preventDefault(), t.touchMove(n.pageY, e.pageY)) : (3 * s > a && i.preventDefault(), t.touchMove(n.pageX, e.pageX))
                        })), p.on("touchend", (function () {
                            if (d < f && 0 !== d) return !1;
                            var i;
                            i = !0 === r.vertical ? n.pageY - e.pageY : n.pageX - e.pageX, t.touchEnd(i)
                        }))
                    }
                },
                build: function () {
                    var e = this;
                    e.initialStyle(), this.doCss() && (!0 === r.enableTouch && e.enableTouch(), !0 === r.enableDrag && e.enableDrag()), t(window).on("focus", (function () {
                        e.auto()
                    })), t(window).on("blur", (function () {
                        clearInterval(_)
                    })), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress()
                }
            }).build(), S.init = function () {
                S.chbreakpoint(), !0 === r.vertical ? (f = r.item > 1 ? r.verticalHeight : a.outerHeight(), p.css("height", f + "px")) : f = p.outerWidth(), !0 === r.loop && "slide" === r.mode && S.clone(), S.calL(), "slide" === r.mode && s.removeClass("lSSlide"), "slide" === r.mode && (S.calSW(), S.sSW()), setTimeout((function () {
                    "slide" === r.mode && s.addClass("lSSlide")
                }), 1e3), r.pager && S.createPager(), !0 === r.adaptiveHeight && !1 === r.vertical && s.css("height", a.eq(g).outerHeight(!0)), !1 === r.adaptiveHeight && ("slide" === r.mode ? !1 === r.vertical ? i.setHeight(s, !1) : i.auto() : i.setHeight(s, !0)), !0 === r.gallery && i.slideThumb(), "slide" === r.mode && i.slide(), !1 === r.autoWidth ? a.length <= r.item ? p.find(".lSAction").hide() : p.find(".lSAction").show() : S.calWidth(!1) < f && 0 !== d ? p.find(".lSAction").hide() : p.find(".lSAction").show()
            }, s.goToPrevSlide = function () {
                if (g > 0) r.onBeforePrevSlide.call(this, s, g), g--, s.mode(!1), !0 === r.gallery && i.slideThumb();
                else if (!0 === r.loop) {
                    if (r.onBeforePrevSlide.call(this, s, g), "fade" === r.mode) g = parseInt((c - 1) / r.slideMove);
                    s.mode(!1), !0 === r.gallery && i.slideThumb()
                } else !0 === r.slideEndAnimation && (s.addClass("leftEnd"), setTimeout((function () {
                    s.removeClass("leftEnd")
                }), 400))
            }, s.goToNextSlide = function () {
                var t = !0;
                "slide" === r.mode && (t = i.slideValue() < d - f - r.slideMargin);
                g * r.slideMove < c - r.slideMove && t ? (r.onBeforeNextSlide.call(this, s, g), g++, s.mode(!1), !0 === r.gallery && i.slideThumb()) : !0 === r.loop ? (r.onBeforeNextSlide.call(this, s, g), g = 0, s.mode(!1), !0 === r.gallery && i.slideThumb()) : !0 === r.slideEndAnimation && (s.addClass("rightEnd"), setTimeout((function () {
                    s.removeClass("rightEnd")
                }), 400))
            }, s.mode = function (t) {
                !0 === r.adaptiveHeight && !1 === r.vertical && s.css("height", a.eq(g).outerHeight(!0)), !1 === h && ("slide" === r.mode ? i.doCss() && (s.addClass("lSSlide"), "" !== r.speed && p.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && p.css("transition-timing-function", r.cssEasing)) : i.doCss() && ("" !== r.speed && s.css("transition-duration", r.speed + "ms"), "" !== r.cssEasing && s.css("transition-timing-function", r.cssEasing))), t || r.onBeforeSlide.call(this, s, g), "slide" === r.mode ? i.slide() : i.fade(), p.hasClass("ls-hover") || i.auto(), setTimeout((function () {
                    t || r.onAfterSlide.call(this, s, g)
                }), r.speed), h = !0
            }, s.play = function () {
                s.goToNextSlide(), r.auto = !0, i.auto()
            }, s.pause = function () {
                r.auto = !1, clearInterval(_)
            }, s.refresh = function () {
                S.init()
            }, s.getCurrentSlideCount = function () {
                var t = g;
                if (r.loop) {
                    var e = p.find(".lslide").length,
                        n = s.find(".clone.left").length;
                    t = g <= n - 1 ? e + (g - n) : g >= e + n ? g - e - n : g - n
                }
                return t + 1
            }, s.getTotalSlideCount = function () {
                return p.find(".lslide").length
            }, s.goToSlide = function (t) {
                g = r.loop ? t + s.find(".clone.left").length - 1 : t, s.mode(!1), !0 === r.gallery && i.slideThumb()
            }, s.destroy = function () {
                s.lightSlider && (s.goToPrevSlide = function () {}, s.goToNextSlide = function () {}, s.mode = function () {}, s.play = function () {}, s.pause = function () {}, s.refresh = function () {}, s.getCurrentSlideCount = function () {}, s.getTotalSlideCount = function () {}, s.goToSlide = function () {}, s.lightSlider = null, S = {
                    init: function () {}
                }, s.parent().parent().find(".lSAction, .lSPager").remove(), s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), s.children().removeAttr("style"), a.removeClass("lslide active"), s.find(".clone").remove(), a = null, _ = null, h = !1, g = 0)
            }, setTimeout((function () {
                r.onSliderLoad.call(this, s)
            }), 10), t(window).on("resize orientationchange", (function (t) {
                setTimeout((function () {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1, S.init()
                }), 200)
            })), this
        }
    }(jQuery)
}, function (t, e, n) {
    n(22), jQuery((function (t) {
        "use strict";
        i()
    }));
    var i = window.lightGallery = function () {
        $(".lightGallery").lightGallery({
            selector: ".light-post"
        })
    }
}, function (t, e, n) {
    var i, r, o;
    /*! lightgallery - v1.7.0 - 2020-05-03
     * http://sachinchoolur.github.io/lightGallery/
     * Copyright (c) 2020 Sachin N; Licensed GPLv3 */
    o = function (t) {
        ! function () {
            "use strict";
            var e = {
                mode: "lg-slide",
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 150,
                hideBarsDelay: 6e3,
                useLeft: !1,
                ariaLabelledby: "",
                ariaDescribedby: "",
                closable: !0,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimatoin: !0,
                hideControlOnEnd: !1,
                mousewheel: !0,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 1,
                showAfterLoad: !0,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: !1,
                iframeMaxWidth: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                galleryId: 1
            };

            function n(n, i) {
                if (this.el = n, this.$el = t(n), this.s = t.extend({}, e, i), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = t(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(t(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
            }
            n.prototype.init = function () {
                var e = this;
                e.s.preload > e.$items.length && (e.s.preload = e.$items.length);
                var n = window.location.hash;
                n.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(n.split("&slide=")[1], 10), t("body").addClass("lg-from-hash"), t("body").hasClass("lg-on") || (setTimeout((function () {
                    e.build(e.index)
                })), t("body").addClass("lg-on"))), e.s.dynamic ? (e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || 0, t("body").hasClass("lg-on") || setTimeout((function () {
                    e.build(e.index), t("body").addClass("lg-on")
                }))) : e.$items.on("click.lgcustom", (function (n) {
                    try {
                        n.preventDefault(), n.preventDefault()
                    } catch (t) {
                        n.returnValue = !1
                    }
                    e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || e.$items.index(this), t("body").hasClass("lg-on") || (e.build(e.index), t("body").addClass("lg-on"))
                }))
            }, n.prototype.build = function (e) {
                var n = this;
                n.structure(), t.each(t.fn.lightGallery.modules, (function (e) {
                    n.modules[e] = new t.fn.lightGallery.modules[e](n.el)
                })), n.slide(e, !1, !1, !1), n.s.keyPress && n.keyPress(), n.$items.length > 1 ? (n.arrow(), setTimeout((function () {
                    n.enableDrag(), n.enableSwipe()
                }), 50), n.s.mousewheel && n.mousewheel()) : n.$slide.on("click.lg", (function () {
                    n.$el.trigger("onSlideClick.lg")
                })), n.counter(), n.closeGallery(), n.$el.trigger("onAfterOpen.lg"), n.$outer.on("mousemove.lg click.lg touchstart.lg", (function () {
                    n.$outer.removeClass("lg-hide-items"), clearTimeout(n.hideBartimeout), n.hideBartimeout = setTimeout((function () {
                        n.$outer.addClass("lg-hide-items")
                    }), n.s.hideBarsDelay)
                })), n.$outer.trigger("mousemove.lg")
            }, n.prototype.structure = function () {
                var e, n = "",
                    i = "",
                    r = 0,
                    o = "",
                    s = this;
                for (t("body").append('<div class="lg-backdrop"></div>'), t(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), r = 0; r < this.$items.length; r++) n += '<div class="lg-item"></div>';
                if (this.s.controls && this.$items.length > 1 && (i = '<div class="lg-actions"><button aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div role="status" aria-live="polite" class="lg-sub-html"></div>'), e = '<div tabindex="-1" aria-modal="true" ' + (this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "") + " " + (this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "") + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + n + '</div><div class="lg-toolbar lg-group"><button aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + i + o + "</div></div>", t("body").append(e), this.$outer = t(".lg-outer"), this.$outer.focus(), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), s.setTop(), t(window).on("resize.lg orientationchange.lg", (function () {
                        setTimeout((function () {
                            s.setTop()
                        }), 100)
                    })), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                    var a = this.$outer.find(".lg-inner");
                    a.css("transition-timing-function", this.s.cssEasing), a.css("transition-duration", this.s.speed + "ms")
                }
                setTimeout((function () {
                    t(".lg-backdrop").addClass("in")
                })), setTimeout((function () {
                    s.$outer.addClass("lg-visible")
                }), this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = t(window).scrollTop()
            }, n.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                    var e = t(window).height(),
                        n = (e - parseInt(this.s.height, 10)) / 2,
                        i = this.$outer.find(".lg");
                    e >= parseInt(this.s.height, 10) ? i.css("top", n + "px") : i.css("top", "0px")
                }
            }, n.prototype.doCss = function () {
                return !! function () {
                    var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        e = document.documentElement,
                        n = 0;
                    for (n = 0; n < t.length; n++)
                        if (t[n] in e.style) return !0
                }()
            }, n.prototype.isVideo = function (t, e) {
                var n;
                if (n = this.s.dynamic ? this.s.dynamicEl[e].html : this.$items.eq(e).attr("data-html"), !t) return n ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not provided on slide item " + (e + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
                var i = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    r = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    o = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    s = t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return i ? {
                    youtube: i
                } : r ? {
                    vimeo: r
                } : o ? {
                    dailymotion: o
                } : s ? {
                    vk: s
                } : void 0
            }, n.prototype.counter = function () {
                this.s.counter && t(this.s.appendCounterTo).append('<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
            }, n.prototype.addHtml = function (e) {
                var n, i, r = null;
                if (this.s.dynamic ? this.s.dynamicEl[e].subHtmlUrl ? n = this.s.dynamicEl[e].subHtmlUrl : r = this.s.dynamicEl[e].subHtml : (i = this.$items.eq(e)).attr("data-sub-html-url") ? n = i.attr("data-sub-html-url") : (r = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !r && (r = i.attr("title") || i.find("img").first().attr("alt"))), !n)
                    if (null != r) {
                        var o = r.substring(0, 1);
                        "." !== o && "#" !== o || (r = this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(r).html() : t(r).html())
                    } else r = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo ? n ? this.$outer.find(this.s.appendSubHtmlTo).load(n) : this.$outer.find(this.s.appendSubHtmlTo).html(r) : n ? this.$slide.eq(e).load(n) : this.$slide.eq(e).append(r), null != r && ("" === r ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [e])
            }, n.prototype.preload = function (t) {
                var e = 1,
                    n = 1;
                for (e = 1; e <= this.s.preload && !(e >= this.$items.length - t); e++) this.loadContent(t + e, !1, 0);
                for (n = 1; n <= this.s.preload && !(t - n < 0); n++) this.loadContent(t - n, !1, 0)
            }, n.prototype.loadContent = function (e, n, i) {
                var r, o, s, a, l, u, c, d = this,
                    h = !1,
                    f = function (e) {
                        for (var n = [], i = [], r = 0; r < e.length; r++) {
                            var s = e[r].split(" ");
                            "" === s[0] && s.splice(0, 1), i.push(s[0]), n.push(s[1])
                        }
                        for (var a = t(window).width(), l = 0; l < n.length; l++)
                            if (parseInt(n[l], 10) > a) {
                                o = i[l];
                                break
                            }
                    };
                if (d.s.dynamic) d.s.dynamicEl[e].poster && (h = !0, s = d.s.dynamicEl[e].poster), u = d.s.dynamicEl[e].html, o = d.s.dynamicEl[e].src, c = d.s.dynamicEl[e].alt, d.s.dynamicEl[e].responsive && f(d.s.dynamicEl[e].responsive.split(",")), a = d.s.dynamicEl[e].srcset, l = d.s.dynamicEl[e].sizes;
                else {
                    var p = d.$items.eq(e);
                    p.attr("data-poster") && (h = !0, s = p.attr("data-poster")), u = p.attr("data-html"), o = p.attr("href") || p.attr("data-src"), c = p.attr("title") || p.find("img").first().attr("alt"), p.attr("data-responsive") && f(p.attr("data-responsive").split(",")), a = p.attr("data-srcset"), l = p.attr("data-sizes")
                }
                var g = !1;
                d.s.dynamic ? d.s.dynamicEl[e].iframe && (g = !0) : "true" === d.$items.eq(e).attr("data-iframe") && (g = !0);
                var m = d.isVideo(o, e);
                if (!d.$slide.eq(e).hasClass("lg-loaded")) {
                    if (g) d.$slide.eq(e).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + d.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');
                    else if (h) {
                        var v = "";
                        v = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", d.$slide.eq(e).prepend('<div class="lg-video-cont ' + v + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
                    } else m ? (d.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), d.$el.trigger("hasVideo.lg", [e, o, u])) : (c = c ? 'alt="' + c + '"' : "", d.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" ' + c + ' src="' + o + '" /></div>'));
                    if (d.$el.trigger("onAferAppendSlide.lg", [e]), r = d.$slide.eq(e).find(".lg-object"), l && r.attr("sizes", l), a) {
                        r.attr("srcset", a);
                        try {
                            picturefill({
                                elements: [r[0]]
                            })
                        } catch (t) {
                            console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                        }
                    }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && d.addHtml(e), d.$slide.eq(e).addClass("lg-loaded")
                }
                d.$slide.eq(e).find(".lg-object").on("load.lg error.lg", (function () {
                    var n = 0;
                    i && !t("body").hasClass("lg-from-hash") && (n = i), setTimeout((function () {
                        d.$slide.eq(e).addClass("lg-complete"), d.$el.trigger("onSlideItemLoad.lg", [e, i || 0])
                    }), n)
                })), m && m.html5 && !h && d.$slide.eq(e).addClass("lg-complete"), !0 === n && (d.$slide.eq(e).hasClass("lg-complete") ? d.preload(e) : d.$slide.eq(e).find(".lg-object").on("load.lg error.lg", (function () {
                    d.preload(e)
                })))
            }, n.prototype.slide = function (e, n, i, r) {
                var o = this.$outer.find(".lg-current").index(),
                    s = this;
                if (!s.lGalleryOn || o !== e) {
                    var a, l, u, c = this.$slide.length,
                        d = s.lGalleryOn ? this.s.speed : 0;
                    if (!s.lgBusy) this.s.download && ((a = s.s.dynamic ? !1 !== s.s.dynamicEl[e].downloadUrl && (s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src) : "false" !== s.$items.eq(e).attr("data-download-url") && (s.$items.eq(e).attr("data-download-url") || s.$items.eq(e).attr("href") || s.$items.eq(e).attr("data-src"))) ? (t("#lg-download").attr("href", a), s.$outer.removeClass("lg-hide-download")) : s.$outer.addClass("lg-hide-download")), this.$el.trigger("onBeforeSlide.lg", [o, e, n, i]), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function () {
                        s.addHtml(e)
                    }), d), this.arrowDisable(e), r || (e < o ? r = "prev" : e > o && (r = "next")), n ? (this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), c > 2 ? (l = e - 1, u = e + 1, (0 === e && o === c - 1 || e === c - 1 && 0 === o) && (u = 0, l = c - 1)) : (l = 0, u = 1), "prev" === r ? s.$slide.eq(u).addClass("lg-next-slide") : s.$slide.eq(l).addClass("lg-prev-slide"), s.$slide.eq(e).addClass("lg-current")) : (s.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === r ? (this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : (this.$slide.eq(e).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout((function () {
                        s.$slide.removeClass("lg-current"), s.$slide.eq(e).addClass("lg-current"), s.$outer.removeClass("lg-no-trans")
                    }), 50)), s.lGalleryOn ? (setTimeout((function () {
                        s.loadContent(e, !0, 0)
                    }), this.s.speed + 50), setTimeout((function () {
                        s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, n, i])
                    }), this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, s.$el.trigger("onAfterSlide.lg", [o, e, n, i])), s.lGalleryOn = !0, this.s.counter && t("#lg-counter-current").text(e + 1);
                    s.index = e
                }
            }, n.prototype.goToNextSlide = function (t) {
                var e = this,
                    n = e.s.loop;
                t && e.$slide.length < 3 && (n = !1), e.lgBusy || (e.index + 1 < e.$slide.length ? (e.index++, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : n ? (e.index = 0, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-right-end"), setTimeout((function () {
                    e.$outer.removeClass("lg-right-end")
                }), 400)))
            }, n.prototype.goToPrevSlide = function (t) {
                var e = this,
                    n = e.s.loop;
                t && e.$slide.length < 3 && (n = !1), e.lgBusy || (e.index > 0 ? (e.index--, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : n ? (e.index = e.$items.length - 1, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-left-end"), setTimeout((function () {
                    e.$outer.removeClass("lg-left-end")
                }), 400)))
            }, n.prototype.keyPress = function () {
                var e = this;
                this.$items.length > 1 && t(window).on("keyup.lg", (function (t) {
                    e.$items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                })), t(window).on("keydown.lg", (function (t) {
                    !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), e.$outer.hasClass("lg-thumb-open") ? e.$outer.removeClass("lg-thumb-open") : e.destroy())
                }))
            }, n.prototype.arrow = function () {
                var t = this;
                this.$outer.find(".lg-prev").on("click.lg", (function () {
                    t.goToPrevSlide()
                })), this.$outer.find(".lg-next").on("click.lg", (function () {
                    t.goToNextSlide()
                }))
            }, n.prototype.arrowDisable = function (t) {
                !this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), t > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
            }, n.prototype.setTranslate = function (t, e, n) {
                this.s.useLeft ? t.css("left", e) : t.css({
                    transform: "translate3d(" + e + "px, " + n + "px, 0px)"
                })
            }, n.prototype.touchMove = function (e, n) {
                var i = n - e;
                Math.abs(i) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(t(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(t(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0))
            }, n.prototype.touchEnd = function (t) {
                var e = this;
                "lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout((function () {
                    e.$outer.removeClass("lg-dragging"), t < 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToNextSlide(!0) : t > 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToPrevSlide(!0) : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"), e.$slide.removeAttr("style")
                })), setTimeout((function () {
                    e.$outer.hasClass("lg-dragging") || "lg-slide" === e.s.mode || e.$outer.removeClass("lg-slide")
                }), e.s.speed + 100)
            }, n.prototype.enableSwipe = function () {
                var t = this,
                    e = 0,
                    n = 0,
                    i = !1;
                t.s.enableSwipe && t.doCss() && (t.$slide.on("touchstart.lg", (function (n) {
                    t.$outer.hasClass("lg-zoomed") || t.lgBusy || (n.preventDefault(), t.manageSwipeClass(), e = n.originalEvent.targetTouches[0].pageX)
                })), t.$slide.on("touchmove.lg", (function (r) {
                    t.$outer.hasClass("lg-zoomed") || (r.preventDefault(), n = r.originalEvent.targetTouches[0].pageX, t.touchMove(e, n), i = !0)
                })), t.$slide.on("touchend.lg", (function () {
                    t.$outer.hasClass("lg-zoomed") || (i ? (i = !1, t.touchEnd(n - e)) : t.$el.trigger("onSlideClick.lg"))
                })))
            }, n.prototype.enableDrag = function () {
                var e = this,
                    n = 0,
                    i = 0,
                    r = !1,
                    o = !1;
                e.s.enableDrag && e.doCss() && (e.$slide.on("mousedown.lg", (function (i) {
                    e.$outer.hasClass("lg-zoomed") || e.lgBusy || t(i.target).text().trim() || (i.preventDefault(), e.manageSwipeClass(), n = i.pageX, r = !0, e.$outer.scrollLeft += 1, e.$outer.scrollLeft -= 1, e.$outer.removeClass("lg-grab").addClass("lg-grabbing"), e.$el.trigger("onDragstart.lg"))
                })), t(window).on("mousemove.lg", (function (t) {
                    r && (o = !0, i = t.pageX, e.touchMove(n, i), e.$el.trigger("onDragmove.lg"))
                })), t(window).on("mouseup.lg", (function (s) {
                    o ? (o = !1, e.touchEnd(i - n), e.$el.trigger("onDragend.lg")) : (t(s.target).hasClass("lg-object") || t(s.target).hasClass("lg-video-play")) && e.$el.trigger("onSlideClick.lg"), r && (r = !1, e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
                })))
            }, n.prototype.manageSwipeClass = function () {
                var t = this.index + 1,
                    e = this.index - 1;
                this.s.loop && this.$slide.length > 2 && (0 === this.index ? e = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
            }, n.prototype.mousewheel = function () {
                var t = this;
                t.$outer.on("mousewheel.lg", (function (e) {
                    e.deltaY && (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault())
                }))
            }, n.prototype.closeGallery = function () {
                var e = this,
                    n = !1;
                this.$outer.find(".lg-close").on("click.lg", (function () {
                    e.destroy()
                })), e.s.closable && (e.$outer.on("mousedown.lg", (function (e) {
                    n = !!(t(e.target).is(".lg-outer") || t(e.target).is(".lg-item ") || t(e.target).is(".lg-img-wrap"))
                })), e.$outer.on("mousemove.lg", (function () {
                    n = !1
                })), e.$outer.on("mouseup.lg", (function (i) {
                    (t(i.target).is(".lg-outer") || t(i.target).is(".lg-item ") || t(i.target).is(".lg-img-wrap") && n) && (e.$outer.hasClass("lg-dragging") || e.destroy())
                })))
            }, n.prototype.destroy = function (e) {
                var n = this;
                e || (n.$el.trigger("onBeforeClose.lg"), t(window).scrollTop(n.prevScrollTop)), e && (n.s.dynamic || this.$items.off("click.lg click.lgcustom"), t.removeData(n.el, "lightGallery")), this.$el.off(".lg.tm"), t.each(t.fn.lightGallery.modules, (function (t) {
                    n.modules[t] && n.modules[t].destroy()
                })), this.lGalleryOn = !1, clearTimeout(n.hideBartimeout), this.hideBartimeout = !1, t(window).off(".lg"), t("body").removeClass("lg-on lg-from-hash"), n.$outer && n.$outer.removeClass("lg-visible"), t(".lg-backdrop").removeClass("in"), setTimeout((function () {
                    n.$outer && n.$outer.remove(), t(".lg-backdrop").remove(), e || n.$el.trigger("onCloseAfter.lg"), n.$el.focus()
                }), n.s.backdropDuration + 50)
            }, t.fn.lightGallery = function (e) {
                return this.each((function () {
                    if (t.data(this, "lightGallery")) try {
                        t(this).data("lightGallery").init()
                    } catch (t) {
                        console.error("lightGallery has not initiated properly")
                    } else t.data(this, "lightGallery", new n(this, e))
                }))
            }, t.fn.lightGallery.modules = {}
        }()
    }, i = [n(0)], void 0 === (r = function (t) {
        return o(t)
    }.apply(e, i)) || (t.exports = r)
}, function (t, e, n) {
    n(24),
        function () {
            "use strict";
            $(".sticky").length && $(".sticky").Stickyfill()
        }()
}, function (t, e) {
    /*!
     * Stickyfill -- `position: sticky` polyfill
     * v. 1.1.4 | https://github.com/wilddeer/stickyfill
     * Copyright Oleg Korsunsky | http://wd.dizaina.net/
     *
     * MIT License
     */
    ! function (t, e) {
        function n() {
            b = S = w = C = _ = x = I
        }

        function i(t) {
            return parseFloat(t) || 0
        }

        function r() {
            E = {
                top: e.pageYOffset,
                left: e.pageXOffset
            }
        }

        function o() {
            return e.pageXOffset != E.left ? (r(), void w()) : void(e.pageYOffset != E.top && (r(), a()))
        }

        function s(t) {
            setTimeout((function () {
                e.pageYOffset != E.top && (E.top = e.pageYOffset, a())
            }), 0)
        }

        function a() {
            for (var t = k.length - 1; t >= 0; t--) l(k[t])
        }

        function l(t) {
            if (t.inited) {
                var e = E.top <= t.limit.start ? 0 : E.top >= t.limit.end ? 2 : 1;
                t.mode != e && function (t, e) {
                    var n = t.node.style;
                    switch (e) {
                        case 0:
                            n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = t.offset.top + "px", n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                            break;
                        case 1:
                            n.position = "fixed", n.left = t.box.left + "px", n.right = t.box.right + "px", n.top = t.css.top, n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                            break;
                        case 2:
                            n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = "auto", n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0
                    }
                    t.mode = e
                }(t, e)
            }
        }

        function u(t) {
            isNaN(parseFloat(t.computed.top)) || t.isCell || "none" == t.computed.display || (t.inited = !0, t.clone || function (t) {
                t.clone = document.createElement("div");
                var e = t.node.nextSibling || t.node,
                    n = t.clone.style;
                n.height = t.height + "px", n.width = t.width + "px", n.marginTop = t.computed.marginTop, n.marginBottom = t.computed.marginBottom, n.marginLeft = t.computed.marginLeft, n.marginRight = t.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, n.fontSize = "1em", n.position = "static", n.cssFloat = t.computed.cssFloat, t.node.parentNode.insertBefore(t.clone, e)
            }(t), "absolute" != t.parent.computed.position && "relative" != t.parent.computed.position && (t.parent.node.style.position = "relative"), l(t), t.parent.height = t.parent.node.offsetHeight, t.docOffsetTop = p(t.clone))
        }

        function c(t) {
            var e = !0;
            t.clone && function (t) {
                    t.clone.parentNode.removeChild(t.clone), t.clone = void 0
                }(t),
                function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                }(t.node.style, t.css);
            for (var n = k.length - 1; n >= 0; n--)
                if (k[n].node !== t.node && k[n].parent.node === t.parent.node) {
                    e = !1;
                    break
                } e && (t.parent.node.style.position = t.parent.css.position), t.mode = -1
        }

        function d() {
            for (var t = k.length - 1; t >= 0; t--) u(k[t])
        }

        function h() {
            for (var t = k.length - 1; t >= 0; t--) c(k[t])
        }

        function f(t) {
            var e = getComputedStyle(t),
                n = t.parentNode,
                r = getComputedStyle(n),
                o = t.style.position;
            t.style.position = "relative";
            var s = {
                    top: e.top,
                    marginTop: e.marginTop,
                    marginBottom: e.marginBottom,
                    marginLeft: e.marginLeft,
                    marginRight: e.marginRight,
                    cssFloat: e.cssFloat,
                    display: e.display
                },
                a = {
                    top: i(e.top),
                    marginBottom: i(e.marginBottom),
                    paddingLeft: i(e.paddingLeft),
                    paddingRight: i(e.paddingRight),
                    borderLeftWidth: i(e.borderLeftWidth),
                    borderRightWidth: i(e.borderRightWidth)
                };
            t.style.position = o;
            var l = {
                    position: t.style.position,
                    top: t.style.top,
                    bottom: t.style.bottom,
                    left: t.style.left,
                    right: t.style.right,
                    width: t.style.width,
                    marginTop: t.style.marginTop,
                    marginLeft: t.style.marginLeft,
                    marginRight: t.style.marginRight
                },
                u = g(t),
                c = g(n),
                d = {
                    node: n,
                    css: {
                        position: n.style.position
                    },
                    computed: {
                        position: r.position
                    },
                    numeric: {
                        borderLeftWidth: i(r.borderLeftWidth),
                        borderRightWidth: i(r.borderRightWidth),
                        borderTopWidth: i(r.borderTopWidth),
                        borderBottomWidth: i(r.borderBottomWidth)
                    }
                };
            return {
                node: t,
                box: {
                    left: u.win.left,
                    right: P.clientWidth - u.win.right
                },
                offset: {
                    top: u.win.top - c.win.top - d.numeric.borderTopWidth,
                    left: u.win.left - c.win.left - d.numeric.borderLeftWidth,
                    right: -u.win.right + c.win.right - d.numeric.borderRightWidth
                },
                css: l,
                isCell: "table-cell" == e.display,
                computed: s,
                numeric: a,
                width: u.win.right - u.win.left,
                height: u.win.bottom - u.win.top,
                mode: -1,
                inited: !1,
                parent: d,
                limit: {
                    start: u.doc.top - a.top,
                    end: c.doc.top + n.offsetHeight - d.numeric.borderBottomWidth - t.offsetHeight - a.top - a.marginBottom
                }
            }
        }

        function p(t) {
            for (var e = 0; t;) e += t.offsetTop, t = t.offsetParent;
            return e
        }

        function g(t) {
            var n = t.getBoundingClientRect();
            return {
                doc: {
                    top: n.top + e.pageYOffset,
                    left: n.left + e.pageXOffset
                },
                win: n
            }
        }

        function m() {
            T = setInterval((function () {
                ! function () {
                    for (var t = k.length - 1; t >= 0; t--)
                        if (k[t].inited) {
                            var e = Math.abs(p(k[t].clone) - k[t].docOffsetTop),
                                n = Math.abs(k[t].parent.node.offsetHeight - k[t].parent.height);
                            if (e >= 2 || n >= 2) return !1
                        } return !0
                }() && w()
            }), 500)
        }

        function v() {
            clearInterval(T)
        }

        function y() {
            O && (document[A] ? v() : m())
        }

        function b() {
            O || (r(), d(), e.addEventListener("scroll", o), e.addEventListener("wheel", s), e.addEventListener("resize", w), e.addEventListener("orientationchange", w), t.addEventListener(D, y), m(), O = !0)
        }

        function w() {
            if (O) {
                h();
                for (var t = k.length - 1; t >= 0; t--) k[t] = f(k[t].node);
                d()
            }
        }

        function C() {
            e.removeEventListener("scroll", o), e.removeEventListener("wheel", s), e.removeEventListener("resize", w), e.removeEventListener("orientationchange", w), t.removeEventListener(D, y), v(), O = !1
        }

        function _() {
            C(), h()
        }

        function x() {
            for (_(); k.length;) k.pop()
        }

        function S(t) {
            for (var e = k.length - 1; e >= 0; e--)
                if (k[e].node === t) return;
            var n = f(t);
            k.push(n), O ? u(n) : b()
        }
        var E, T, k = [],
            O = !1,
            P = t.documentElement,
            I = function () {},
            A = "hidden",
            D = "visibilitychange";
        void 0 !== t.webkitHidden && (A = "webkitHidden", D = "webkitvisibilitychange"), e.getComputedStyle || n();
        for (var L = ["", "-webkit-", "-moz-", "-ms-"], $ = document.createElement("div"), j = L.length - 1; j >= 0; j--) {
            try {
                $.style.position = L[j] + "sticky"
            } catch (t) {}
            "" != $.style.position && n()
        }
        r(), e.Stickyfill = {
            stickies: k,
            add: S,
            remove: function (t) {
                for (var e = k.length - 1; e >= 0; e--) k[e].node === t && (c(k[e]), k.splice(e, 1))
            },
            init: b,
            rebuild: w,
            pause: C,
            stop: _,
            kill: x
        }
    }(document, window), window.jQuery && (window.jQuery.fn.Stickyfill = function (t) {
        return this.each((function () {
            Stickyfill.add(this)
        })), this
    })
}, function (t, e, n) {
    var i = window.WaveSurfer = n(4),
        r = n(1);
    ! function () {
        var t = $("#waveform");
        if (t.length > 0 && (wavesurfer = i.create({
                container: "#waveform",
                backend: "MediaElement",
                waveColor: $("body").hasClass("theme-dark") ? "#243049" : "#ecf0f5",
                progressColor: t.data("progressColor") || "#D4AF37",
                height: 50,
                responsive: !1,
                barWidth: t.data("barWidth") || 3,
                normalize: !0
            })), $("#playPause").length > 0) {
            var e = function () {
                    wavesurfer.isPlaying() ? (document.querySelector("#play").style.display = "none", document.querySelector("#pause").style.display = "", $(".music_pseudo_bars").show()) : (document.querySelector("#play").style.display = "", document.querySelector("#pause").style.display = "none", $(".music_pseudo_bars").hide())
                },
                n = function (t) {
                    $("a.media-url i").removeClass("icon-pause").addClass("icon-play"), wavesurfer.isPlaying() ? t.removeClass("icon-play").addClass("icon-pause") : t.removeClass("icon-pause").addClass("icon-play")
                },
                o = function () {
                    wavesurfer.pause(), $(".playlist .media-url.active i").removeClass("icon-pause").addClass("icon-play"), $(".playlist .media-url").removeClass("active")
                };
            document.querySelector("#playPause").addEventListener("click", (function () {
                setTimeout(() => {
                    wavesurfer.playPause(), e(), n($(".playlist a.active i"))
                }, 400)
            }));
            wavesurfer.on("play", (function () {
                document.querySelector("#play").style.display = "none", document.querySelector("#pause").style.display = "", $(".playlist a.active i").removeClass("icon-play").addClass("icon-pause"), $(".music_pseudo_bars").show()
            }))
        }
        if ($(".playlist .media-url").length > 0) {
            var s = $(".playlist .media-url"),
                a = 0,
                l = $("#nextTrack"),
                u = $("#previousTrack"),
                c = $("#forwardTrack"),
                d = $("#backwardTrack"),
                h = function () {
                    o(), a <= s.length && p((a + 1) % s.length)
                },
                f = function () {
                    setTimeout((function () {
                        wavesurfer.play()
                    }), 1e3)
                };
            l.on("click", (function (t) {
                t.preventDefault(), h(), f()
            })), u.on("click", (function (t) {
                t.preventDefault(), o(), a > 0 && p((a - 1) % s.length), f()
            })), c.on("click", (function (t) {
                t.preventDefault(), wavesurfer.skipForward()
            })), d.on("click", (function (t) {
                t.preventDefault(), wavesurfer.skipForward()
            })), window.playlistLoop = function (t) {
                Array.prototype.forEach.call(t, (function (i, r) {
                    i.addEventListener("click", (function (i) {
                        i.preventDefault();
                        var o = $(i.target);
                        $(i.target).hasClass("media-url") && (o = $(i.target).children("i")), window.currentTrack == r ? (wavesurfer.playPause(), e(), n(o)) : ($("a.media-url i").removeClass("icon-pause").addClass("icon-play"), $(".media-url").removeClass("active"), t[r].classList.add("active"), $(".playlist a.active i").removeClass("icon-play").addClass("icon-pause"), window.setCurrentSong(r), f())
                    }))
                }))
            };
            var p = window.setCurrentSong = function (t) {
                var e;
                0 === (e = t) ? u.addClass("disabled") : u.removeClass("disabled"), e === s.length ? l.addClass("disabled") : l.removeClass("disabled"), (s = $(".playlist .media-url"))[a = t].classList.remove("active"), s[a].classList.add("active");
                var n = s[a].dataset.wave;
                void 0 !== n ? $.getJSON(n, (function (t) {
                        wavesurfer.load(s[a].href, t.data), $("#waveform").removeClass("d-none"), $(".music_pseudo_bars").addClass("d-none")
                    })) : ($("#waveform").addClass("d-none"), $(".music_pseudo_bars").removeClass("d-none"), wavesurfer.load(s[a].href, [0, 0])), window.media = s[a].href, window.currentTrack = a,
                    function (t) {
                        var e, n;
                        $("a[href='" + t + "'].media-url").closest("li").first(), n = $("a[href='" + t + "'].media-url").data("permalink"), $("a[href='" + t + "'].media-url").data("time"), e = $("a[href='" + t + "'].media-url").data("title");
                        var i = '<div class="d-flex"><div class="float-left">' + ('<a href="' + n + '"><div class="avatar-md mr-3"><img class="r-3" width="65" height="65" src="' + $("a[href='" + t + "'].media-url").data("thumbnail") + '" alt="" /></div></a>') + '</div><div><h6 class="text-truncate d-none d-xl-block" style="max-width: 150px;"><a href="' + n + '">' + e + "</a></h6><small class='d-none d-xl-block'>" + $("a[href='" + t + "'].media-url").data("artist") + "</small></div></div>";
                        $(".active-track").html(i)
                    }(s[a].href)
            };
            if (playlistLoop(s), wavesurfer.on("ready", (function () {
                    $("#mediaPlayer").data("auto") && !$("body").hasClass("page-template-template-user-dashboard") && wavesurfer.play()
                })), wavesurfer.on("finish", (function () {
                    h()
                })), window.addEventListener("load", () => {
                    p(a)
                }), wavesurfer.on("audioprocess", (function () {
                    $("#mediaPlayer-time").text(v(wavesurfer.getCurrentTime()))
                })), $("#volume").length) {
                var g = document.querySelector("#volume"),
                    m = function (t) {
                        wavesurfer.setVolume(t.target.value)
                    };
                g.addEventListener("input", m), g.addEventListener("change", m)
            }
            var v = function (t) {
                return [Math.floor(t % 3600 / 60), ("00" + Math.floor(t % 60)).slice(-2)].join(":")
            };
            wavesurfer.on("loading", (function (t, e) {
                r.start(), t >= 100 && r.done()
            }))
        }
    }()
}, function (t, e, n) {
    n(5), jQuery((function (t) {
        "use strict";
        i()
    }));
    var i = window.slimScroll = function () {
        var t = $(".slimScroll");
        t.length && t.each((function () {
            var t = $(this),
                e = t.data();
            t.slimscroll({
                height: e.height ? e.height + "px" : $(window).height() - 0 + "px",
                color: e.color ? e.color : "rgba(0,0,0,0.95)",
                size: e.size ? e.size + "px" : "5px",
                alwaysVisible: e.visible,
                railOpacity: e.opacity
            })
        }))
    }
}, function (t, e, n) {
    n(28);
    var i = window.countDown = function () {
        $(".countDown").each((function () {
            $(this).each((function () {
                var t = $(this),
                    e = t.data("date");
                new Date(e);
                t.countdown(e.valueOf(), (function (t) {
                    var e = $(this);
                    $.each(t.offset, (function (t, n) {
                        e.find("div span." + t).html(n)
                    }))
                }))
            }))
        }))
    };
    ! function () {
        "use strict";
        i()
    }()
}, function (t, e, n) {
    var i, r, o;
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    ! function (s) {
        "use strict";
        r = [n(0)], void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = o)
    }((function (t) {
        "use strict";
        var e = [],
            n = [],
            i = {
                precision: 100,
                elapse: !1,
                defer: !1
            };
        n.push(/^[0-9]*$/.source), n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n = new RegExp(n.join("|"));
        var r = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        };

        function o(t, e) {
            var n = "s",
                i = "";
            return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = t[0] : (i = t[0], n = t[1])), Math.abs(e) > 1 ? n : i
        }
        var s = function (n, r, o) {
            this.el = n, this.$el = t(n), this.interval = null, this.offset = {}, this.options = t.extend({}, i), this.instanceNumber = e.length, e.push(this), this.$el.data("countdown-instance", this.instanceNumber), o && ("function" == typeof o ? (this.$el.on("update.countdown", o), this.$el.on("stoped.countdown", o), this.$el.on("finish.countdown", o)) : this.options = t.extend({}, i, o)), this.setFinalDate(r), !1 === this.options.defer && this.start()
        };
        t.extend(s.prototype, {
            start: function () {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval((function () {
                    t.update.call(t)
                }), this.options.precision)
            },
            stop: function () {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function () {
                this.interval ? this.stop() : this.start()
            },
            pause: function () {
                this.stop()
            },
            resume: function () {
                this.start()
            },
            remove: function () {
                this.stop.call(this), e[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function (t) {
                this.finalDate = function (t) {
                    if (t instanceof Date) return t;
                    if (String(t).match(n)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                    throw new Error("Couldn't cast `" + t + "` to a date object.")
                }(t)
            },
            update: function () {
                if (0 !== this.$el.closest("html").length) {
                    var e, n = void 0 !== t._data(this.el, "events"),
                        i = new Date;
                    e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
                } else this.remove()
            },
            dispatchEvent: function (e) {
                var n, i = t.Event(e + ".countdown");
                i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = (n = this.offset, function (t) {
                    var e, i, s = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                    if (s)
                        for (var a = 0, l = s.length; a < l; ++a) {
                            var u = s[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                c = (e = u[0], i = void 0, i = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(i)),
                                d = u[1] || "",
                                h = u[3] || "",
                                f = null;
                            u = u[2], r.hasOwnProperty(u) && (f = r[u], f = Number(n[f])), null !== f && ("!" === d && (f = o(h, f)), "" === d && f < 10 && (f = "0" + f.toString()), t = t.replace(c, f.toString()))
                        }
                    return t = t.replace(/%%/, "%")
                }), this.$el.trigger(i)
            }
        }), t.fn.countdown = function () {
            var n = Array.prototype.slice.call(arguments, 0);
            return this.each((function () {
                var i = t(this).data("countdown-instance");
                if (void 0 !== i) {
                    var r = e[i],
                        o = n[0];
                    s.prototype.hasOwnProperty(o) ? r[o].apply(r, n.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (r.setFinalDate.call(r, o), r.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o))
                } else new s(this, n[0], n[1])
            }))
        }
    }))
}, function (t, e) {
    jQuery((function (t) {
        "use strict";
        n()
    }));
    var n = window.mapInit = function () {
        var t = $(".g-map");
        t.length && t.each((function (t, e) {
            var n = $(this).data("id"),
                i = $(this).data("address"),
                r = ($(this).data("maptype"), $(this).data("zoomlvl")),
                o = $(this).data("mapPin");
            $(this).attr("id", n),
                function (t, e, n, i, r) {
                    var o = new google.maps.Map(document.getElementById(t), {
                            styles: [{
                                featureType: "all",
                                stylers: [{
                                    saturation: -100
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "geometry",
                                stylers: [{
                                    hue: "#131722"
                                }, {
                                    saturation: 50
                                }]
                            }, {
                                featureType: "poi.business",
                                elementType: "labels",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }],
                            scrollwheel: !1,
                            draggable: !1,
                            zoom: i,
                            mapTypeControl: !1
                        }),
                        s = "assets/img/basic/pin.png";
                    r && (s = r), (new google.maps.Geocoder).geocode({
                        address: e
                    }, (function (t, e) {
                        e === google.maps.GeocoderStatus.OK && (new google.maps.Marker({
                            position: t[0].geometry.location,
                            map: o,
                            icon: s
                        }), o.setCenter(t[0].geometry.location))
                    }))
                }(n, i, 0, r, o)
        }))
    }
}, function (t, e) {
    jQuery((function (t) {
        "use strict";
        var e, n, i, r;
        t(".overlay").each((function () {
            var o = t(this),
                s = o.data("start"),
                a = o.data("end"),
                l = o.data("orientation"),
                u = o.data("opacity");
            ! function (t, o, s, a, l) {
                switch (a) {
                    case "tobottomright":
                        e = "linear", n = "to bottom right", i = "top left", r = "left top, right bottom";
                        break;
                    case "tobottom":
                        e = "linear", n = "to bottom", i = "top", r = "left top, left bottom";
                        break;
                    case "tobottomleft":
                        e = "linear", n = "to bottom left", i = "top right", r = "right top, left bottom";
                        break;
                    case "toright":
                        e = "linear", n = "to right", i = "left", r = "left top, right top";
                        break;
                    case "toleft":
                        e = "linear", n = "to left", i = "right", r = "right top, left top";
                        break;
                    case "totopright":
                        e = "linear", n = "to top right", i = "bottom left", r = "left bottom, right top";
                        break;
                    case "totop":
                        e = "linear", n = "to top", i = "bottom", r = "left bottom, left top";
                        break;
                    case "totopleft":
                        e = "linear", n = "to top left", i = "bottom right", r = "right bottom, left top";
                        break;
                    case "circulartopleft":
                        e = "radial", n = "circle farthest-side at left top", i = "left top, circle farthest-side", r = "left top, 0, left top, 973";
                        break;
                    case "circulartopcenter":
                        e = "radial", n = "circle farthest-side at center top", i = "center top, circle farthest-side", r = "center top, 0, center top, 487";
                        break;
                    case "circulartopright":
                        e = "radial", n = "circle farthest-side at right top", i = "right top, circle farthest-side", r = "right top, 0, right top, 973";
                        break;
                    case "circularmiddleleft":
                        e = "radial", n = "circle farthest-side at left center", i = "left center, circle farthest-side", r = "left center, 0, left center, 973";
                        break;
                    case "circularmiddlecenter":
                        e = "radial", n = "circle farthest-side at center", i = "center, circle farthest-side", r = "center center, 0, center center, 487";
                        break;
                    case "circularmiddleright":
                        e = "radial", n = "circle farthest-side at right center", i = "right center, circle farthest-side", r = "right center, 0, right center";
                        break;
                    case "circularbottomleft":
                        e = "radial", n = "circle farthest-side at left bottom", i = "left bottom, circle farthest-side", r = "left bottom, 0, left bottom, 973";
                        break;
                    case "circularbottomcenter":
                        e = "radial", n = "circle farthest-side at center bottom", i = "center bottom, circle farthest-side", r = "center bottom, 0, center bottom, 487";
                        break;
                    case "circularbottomright":
                        e = "radial", n = "circle farthest-side at right bottom", i = "right bottom, circle farthest-side", r = "right bottom, 0, right bottom, 973";
                        break;
                    case "ellipsetopleft":
                        e = "radial", n = "ellipse farthest-side at left top", i = "left top, ellipse farthest-side", r = "left top, 0, left top, 973";
                        break;
                    case "ellipsetopcenter":
                        e = "radial", n = "ellipse farthest-side at center top", i = "center top, ellipse farthest-side", r = "center top, 0, center top, 487";
                        break;
                    case "ellipsetopright":
                        e = "radial", n = "ellipse farthest-side at right top", i = "right top, ellipse farthest-side", r = "right top, 0, right top, 973";
                        break;
                    case "ellipsemiddleleft":
                        e = "radial", n = "ellipse farthest-side at left center", i = "left center, ellipse farthest-side", r = "left center, 0, left center, 973";
                        break;
                    case "ellipsemiddlecenter":
                        e = "radial", n = "ellipse farthest-side at center", i = "center, ellipse farthest-side", r = "center center, 0, center center, 487";
                        break;
                    case "ellipsemiddleright":
                        e = "radial", n = "ellipse farthest-side at right center", i = "right center, ellipse farthest-side", r = "right center, 0, right center";
                        break;
                    case "ellipsebottomleft":
                        e = "radial", n = "ellipse farthest-side at left bottom", i = "left bottom, ellipse farthest-side", r = "left bottom, 0, left bottom, 973";
                        break;
                    case "ellipsebottomcenter":
                        e = "radial", n = "ellipse farthest-side at center bottom", i = "center bottom, ellipse farthest-side", r = "center bottom, 0, center bottom, 487";
                        break;
                    case "ellipsebottomright":
                        e = "radial", n = "ellipse farthest-side at right bottom", i = "right bottom, ellipse farthest-side", r = "right bottom, 0, right bottom, 973";
                        break;
                    default:
                        e = "linear", n = "to right", i = "left", r = "left top, right top"
                }
                s ? (jQuery(t).css({
                    background: o,
                    opacity: l
                }), jQuery(t).css({
                    background: "-moz-" + e + "-gradient(" + i + ", " + o + " 0%, " + s + " 100%)",
                    opacity: l
                }), jQuery(t).css({
                    background: "-webkit-gradient(" + e + ", " + r + ", color-stop(0, " + o + "), color-stop(1, " + s + "))",
                    opacity: l
                }), jQuery(t).css({
                    background: "-webkit-" + e + "-gradient(" + i + ", " + o + " 0%, " + s + " 100%)",
                    opacity: l
                }), jQuery(t).css({
                    background: "-o-" + e + "-gradient(" + i + ", " + o + " 0%, " + s + " 100%)",
                    opacity: l
                }), jQuery(t).css({
                    background: "-ms-" + e + "-gradient(" + i + ", " + o + " 0%, " + s + " 100%)",
                    opacity: l
                }), jQuery(t).css({
                    background: e + "-gradient(" + n + ", " + o + " 0%, " + s + " 100%)",
                    opacity: l
                }), jQuery(t).css({
                    background: "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + o + "', endColorstr='" + s + "',GradientType=1 )",
                    opacity: l
                })) : jQuery(t).css({
                    background: o,
                    opacity: l
                })
            }(o, s, a, l, u)
        }))
    }))
}, function (t, e, n) {
    n(32), jQuery((function (t) {
        "use strict";
        t(".parallax").stellar({
            horizontalScrolling: !1,
            verticalOffset: 40,
            responsive: !0
        })
    }))
}, function (t, e) {
    /*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
    ! function (t, e, n, i) {
        function r(e, n) {
            this.element = e, this.options = t.extend({}, s, n), this._defaults = s, this._name = o, this.init()
        }
        var o = "stellar",
            s = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function (t) {
                    t.hide()
                },
                showElement: function (t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function (t) {
                        return t.scrollLeft()
                    },
                    setLeft: function (t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function (t) {
                        return t.scrollTop()
                    },
                    setTop: function (t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function (t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
                    },
                    getTop: function (t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function (t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function (t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function (t, e) {
                        t.css("left", e)
                    },
                    setTop: function (t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function (t, e, n, i, r) {
                        t[0].style[u] = "translate3d(" + (e - n) + "px, " + (i - r) + "px, 0)"
                    }
                }
            },
            u = function () {
                var e, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    i = t("script")[0].style,
                    r = "";
                for (e in i)
                    if (n.test(e)) {
                        r = e.match(n)[0];
                        break
                    } return "WebkitOpacity" in i && (r = "Webkit"), "KhtmlOpacity" in i && (r = "Khtml"),
                    function (t) {
                        return r + (r.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }()("transform"),
            c = t("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== i,
            d = c ? function (t, e, n) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": n
                })
            } : function (t, e, n) {
                t.css("background-position", e + " " + n)
            },
            h = c ? function (t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function (t) {
                return t.css("background-position").split(" ")
            },
            f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
            };
        r.prototype = {
            init: function () {
                this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function () {
                this.element === n.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== i ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function () {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function () {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function () {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function () {
                var e = this,
                    n = a[e.options.scrollProperty],
                    i = l[e.options.positionProperty],
                    r = n.setLeft,
                    o = n.setTop;
                this._setScrollLeft = "function" == typeof r ? function (t) {
                    r(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof o ? function (t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setPosition = i.setPosition || function (t, n, r, o, s) {
                    e.options.horizontalScrolling && i.setLeft(t, n, r), e.options.verticalScrolling && i.setTop(t, o, s)
                }
            },
            _handleWindowLoadAndResize: function () {
                var n = this,
                    i = t(e);
                n.options.responsive && i.bind("load." + this.name, (function () {
                    n.refresh()
                })), i.bind("resize." + this.name, (function () {
                    n._detectViewport(), n.options.responsive && n.refresh()
                }))
            },
            refresh: function (n) {
                var i = this,
                    r = i._getScrollLeft(),
                    o = i._getScrollTop();
                n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load((function () {
                    var t = i._getScrollLeft(),
                        e = i._getScrollTop();
                    i._setScrollLeft(t + 1), i._setScrollTop(e + 1), i._setScrollLeft(t), i._setScrollTop(e)
                })), this._setScrollLeft(r), this._setScrollTop(o)
            },
            _detectViewport: function () {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== i;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function () {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== i)
                    for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", i);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each((function () {
                    var n, r, o, s, a, l, u, c, d, h = t(this),
                        f = 0,
                        p = 0,
                        g = 0,
                        m = 0;
                    if (h.data("stellar-elementIsActive")) {
                        if (h.data("stellar-elementIsActive") !== this) return
                    } else h.data("stellar-elementIsActive", this);
                    e.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), o = h.position().left, s = h.position().top, a = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), l = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), c = h.offset().left - a, d = h.offset().top - l, h.parents().each((function () {
                        var e = t(this);
                        return !0 === e.data("stellar-offset-parent") ? (f = g, p = m, u = e, !1) : (g += e.position().left, void(m += e.position().top))
                    })), n = h.data("stellar-horizontal-offset") !== i ? h.data("stellar-horizontal-offset") : u !== i && u.data("stellar-horizontal-offset") !== i ? u.data("stellar-horizontal-offset") : e.horizontalOffset, r = h.data("stellar-vertical-offset") !== i ? h.data("stellar-vertical-offset") : u !== i && u.data("stellar-vertical-offset") !== i ? u.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: h,
                        $offsetParent: u,
                        isFixed: "fixed" === h.css("position"),
                        horizontalOffset: n,
                        verticalOffset: r,
                        startingPositionLeft: o,
                        startingPositionTop: s,
                        startingOffsetLeft: c,
                        startingOffsetTop: d,
                        parentOffsetLeft: f,
                        parentOffsetTop: p,
                        stellarRatio: h.data("stellar-ratio") !== i ? h.data("stellar-ratio") : 1,
                        width: h.outerWidth(!0),
                        height: h.outerHeight(!0),
                        isHidden: !1
                    })
                }))
            },
            _findBackgrounds: function () {
                var e, n = this,
                    r = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each((function () {
                    var e, s, a, l, u, c, f, p = t(this),
                        g = h(p),
                        m = 0,
                        v = 0,
                        y = 0,
                        b = 0;
                    if (p.data("stellar-backgroundIsActive")) {
                        if (p.data("stellar-backgroundIsActive") !== this) return
                    } else p.data("stellar-backgroundIsActive", this);
                    p.data("stellar-backgroundStartingLeft") ? d(p, p.data("stellar-backgroundStartingLeft"), p.data("stellar-backgroundStartingTop")) : (p.data("stellar-backgroundStartingLeft", g[0]), p.data("stellar-backgroundStartingTop", g[1])), a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), u = p.offset().left - a - r, c = p.offset().top - l - o, p.parents().each((function () {
                        var e = t(this);
                        return !0 === e.data("stellar-offset-parent") ? (m = y, v = b, f = e, !1) : (y += e.position().left, void(b += e.position().top))
                    })), e = p.data("stellar-horizontal-offset") !== i ? p.data("stellar-horizontal-offset") : f !== i && f.data("stellar-horizontal-offset") !== i ? f.data("stellar-horizontal-offset") : n.horizontalOffset, s = p.data("stellar-vertical-offset") !== i ? p.data("stellar-vertical-offset") : f !== i && f.data("stellar-vertical-offset") !== i ? f.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
                        $element: p,
                        $offsetParent: f,
                        isFixed: "fixed" === p.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: s,
                        startingValueLeft: g[0],
                        startingValueTop: g[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                        startingPositionLeft: p.position().left,
                        startingPositionTop: p.position().top,
                        startingOffsetLeft: u,
                        startingOffsetTop: c,
                        parentOffsetLeft: m,
                        parentOffsetTop: v,
                        stellarRatio: p.data("stellar-background-ratio") === i ? 1 : p.data("stellar-background-ratio")
                    })
                })))
            },
            _reset: function () {
                var t, e, n, i, r;
                for (r = this.particles.length - 1; r >= 0; r--) e = (t = this.particles[r]).$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (r = this.backgrounds.length - 1; r >= 0; r--)(i = this.backgrounds[r]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(i.$element, i.startingValueLeft, i.startingValueTop)
            },
            destroy: function () {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function () {
                var n = this,
                    i = t(e);
                i.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), i.bind("resize.horizontal-" + this.name, (function () {
                    n.horizontalOffset = n.options.horizontalOffset()
                }))) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), i.bind("resize.vertical-" + this.name, (function () {
                    n.verticalOffset = n.options.verticalOffset()
                }))) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function () {
                var t, e, n, i, r, o, s, a, l, u, c = this._getScrollLeft(),
                    h = this._getScrollTop(),
                    f = !0,
                    p = !0;
                if (this.currentScrollLeft !== c || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = c, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; u >= 0; u--) e = (t = this.particles[u]).isFixed ? 1 : 0, this.options.horizontalScrolling ? a = (o = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? l = (s = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (s = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), p && f ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, s, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (u = this.backgrounds.length - 1; u >= 0; u--) e = (n = this.backgrounds[u]).isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (c + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (e - n.stellarRatio) + "px" : n.startingValueLeft, r = this.options.verticalScrolling ? (h + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (e - n.stellarRatio) + "px" : n.startingValueTop, d(n.$element, i, r)
                }
            },
            _handleScrollEvent: function () {
                var t = this,
                    e = !1,
                    n = function () {
                        t._repositionElements(), e = !1
                    },
                    i = function () {
                        e || (f(n), e = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, i), i()
            },
            _startAnimationLoop: function () {
                var t = this;
                this._animationLoop = function () {
                    f(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[o] = function (e) {
            var n = arguments;
            return e === i || "object" == typeof e ? this.each((function () {
                t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e))
            })) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each((function () {
                var i = t.data(this, "plugin_" + o);
                i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
            })) : void 0
        }, t[o] = function () {
            var n = t(e);
            return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
        }, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = r
    }(jQuery, this, document)
}, function (t, e) {
    jQuery((function (t) {
        "use strict";
        window.addEventListener("load", (function () {
            var e = document.getElementById("contactform");
            e && e.addEventListener("submit", (function (n) {
                0 == e.checkValidity() ? (n.preventDefault(), n.stopPropagation()) : t.ajax({
                    type: "POST",
                    url: "assets/php/submit.php",
                    data: e.serialize(),
                    success: function () {
                        t("#valid-issue").addClass("alert-success").html("Your message has been sent,<BR> We will contact you back with in next 24 hours.").show()
                    }
                }), e.classList.add("was-validated")
            }), !1)
        }), !1)
    })), jQuery((function (t) {
        "use strict";
        t("#contactform") && t("#contactform").submit((function (e) {
            e.preventDefault();
            var n = t("#name").val(),
                i = t("#email").val(),
                r = (t("#subject").val(), t("#message").val());
            "" !== n && function (t) {
                return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)
            }(i) && "" !== r ? t.ajax({
                type: "POST",
                url: "assets/php/submit.php",
                data: t("form").serialize(),
                success: function () {
                    t("#contactform").slideUp(), t("#valid-issue").addClass("alert-success").html("Your message has been sent,<BR> We will contact you back with in next 24 hours.").show()
                }
            }) : t("#valid-issue").addClass("alert-danger").html("Please Provide Valid Information").slideDown()
        }))
    }))
}, function (t, e) {
    jQuery((function (t) {
        "use strict";
        if (t("section.hero-header").length > 0) {
            t(".mainnav").height();
            t("section.hero-header").height(t(window).height()), t(window).resize((function () {
                t("section.hero-header").height(t(window).height())
            }))
        }
        t(".cut").length > 0 && t(".cut").each((function () {
            t(this).hasClass("cut-top") ? t(this).css("border-right-width", t(this).parent().width() + "px") : t(this).hasClass("cut-bottom") && t(this).css("border-left-width", t(this).parent().width() + "px")
        }))
    }))
}, function (t, e) {
    jQuery(document).ready((function (t) {
        "use strict";
        if (t(".searchOverlay").length > 0) var e = document.querySelector("main"),
            n = document.getElementById("btn-searchOverlay"),
            i = document.getElementById("btn-searchOverlay-close"),
            r = document.querySelector(".searchOverlay"),
            o = r.querySelector(".searchOverlay__input");

        function s() {
            e.classList.add("main-wrap--hide"), r.classList.add("searchOverlay--open"), setTimeout((function () {
                o.focus()
            }), 500)
        }

        function a() {
            e.classList.remove("main-wrap--hide"), r.classList.remove("searchOverlay--open"), o.blur(), o.value = ""
        }
        t(".searchOverlay").length > 0 && t("#btn-searchOverlay").length > 0 && (n.addEventListener("click", s), i.addEventListener("click", a), document.addEventListener("keyup", (function (t) {
            27 == t.keyCode && a()
        })))
    }))
}, function (t, e, n) {
    n(37), n(38), n(39);
    n(6);
    var i = n(1);
    window.WaveSurfer = n(4);
    ! function () {
        "use strict";
        $.ajaxify({
            contentSelector: "#pageContent",
            linkSelector: ".ajaxifyPage"
        });
        var t = function () {
            window.rekordCallBack && rekordCallBack()
        };
        t(), $(window).on("statechangecomplete", (function () {
            i.start(),
                function () {
                    if (lightSlider(), lightGallery(), initMasonary(), countDown(), snackbarInit(), slimScroll(), mapInit(), $(".animated").addClass("go"), $(".playlist").length) {
                        var e = document.querySelectorAll(".playlist .media-url");
                        wavesurfer.isPlaying() && $("a[href='" + window.media + "']") && (e[window.currentTrack].classList.add("active"), $("#playlist a.active i").toggleClass("icon-pause")), Array.prototype.forEach.call(e, (function (t, n) {
                            t.addEventListener("click", (function (t) {
                                t.preventDefault(), window.currentTrack == n ? ($(t.target).toggleClass("icon-pause"), $(".playlist .media-url").removeClass("icon-pause").removeClass("icon-play"), wavesurfer.playPause()) : ($("#playlist a.active i").toggleClass("icon-pause"), $(".playlist .media-url").removeClass("active"), e[n].classList.add("active"), $(".playlist .media-url i").removeClass("icon-pause").addClass("icon-play"), $(".playlist .media-url").removeClass("icon-pause").removeClass("icon-play"), window.setCurrentSong(n))
                            }))
                        }))
                    }
                    t()
                }(), i.done()
        }))
    }()
}, function (module, exports) {
    window.JSON || (window.JSON = {}),
        function () {
            function f(t) {
                return t < 10 ? "0" + t : t
            }

            function quote(t) {
                return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, (function (t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var n, i, r, o, s, a = gap,
                    l = e[t];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                    case "string":
                        return quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (o = l.length, n = 0; n < o; n += 1) s[n] = str(n, l) || "null";
                            return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
                        }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof (i = rep[n]) && ((r = str(i, l)) && s.push(quote(i) + (gap ? ": " : ":") + r));
                        else
                            for (i in l) Object.hasOwnProperty.call(l, i) && ((r = str(i, l)) && s.push(quote(i) + (gap ? ": " : ":") + r));
                        return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (t) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
                return this.valueOf()
            });
            var JSON = window.JSON,
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, n) {
                var i;
                if (gap = "", indent = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                    "": t
                });
                throw new Error("JSON.stringify")
            }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                function walk(t, e) {
                    var n, i, r = t[e];
                    if (r && "object" == typeof r)
                        for (n in r) Object.hasOwnProperty.call(r, n) && (void 0 !== (i = walk(r, n)) ? r[n] = i : delete r[n]);
                    return reviver.call(t, e, r)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function (t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(),
        function (t, e) {
            "use strict";
            var n = t.History = t.History || {},
                i = t.jQuery;
            if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
            n.Adapter = {
                bind: function (t, e, n) {
                    i(t).bind(e, n)
                },
                trigger: function (t, e, n) {
                    i(t).trigger(e, n)
                },
                extractEventData: function (t, e, n) {
                    return e && e.originalEvent && e.originalEvent[t] || n && n[t] || void 0
                },
                onDomLoad: function (t) {
                    i(t)
                }
            }, void 0 !== n.init && n.init()
        }(window),
        function (t, e) {
            "use strict";
            var n = t.document,
                i = t.setTimeout || i,
                r = t.clearTimeout || r,
                o = t.setInterval || o,
                s = t.History = t.History || {};
            if (void 0 !== s.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
            s.initHtml4 = function () {
                if (void 0 !== s.initHtml4.initialized) return !1;
                s.initHtml4.initialized = !0, s.enabled = !0, s.savedHashes = [], s.isLastHash = function (t) {
                    return t === s.getHashByIndex()
                }, s.saveHash = function (t) {
                    return !s.isLastHash(t) && (s.savedHashes.push(t), !0)
                }, s.getHashByIndex = function (t) {
                    return void 0 === t ? s.savedHashes[s.savedHashes.length - 1] : t < 0 ? s.savedHashes[s.savedHashes.length + t] : s.savedHashes[t]
                }, s.discardedHashes = {}, s.discardedStates = {}, s.discardState = function (t, e, n) {
                    var i, r = s.getHashByState(t);
                    return i = {
                        discardedState: t,
                        backState: n,
                        forwardState: e
                    }, s.discardedStates[r] = i, !0
                }, s.discardHash = function (t, e, n) {
                    var i = {
                        discardedHash: t,
                        backState: n,
                        forwardState: e
                    };
                    return s.discardedHashes[t] = i, !0
                }, s.discardedState = function (t) {
                    var e = s.getHashByState(t);
                    return s.discardedStates[e] || !1
                }, s.discardedHash = function (t) {
                    return s.discardedHashes[t] || !1
                }, s.recycleState = function (t) {
                    var e = s.getHashByState(t);
                    return s.discardedState(t) && delete s.discardedStates[e], !0
                }, s.emulated.hashChange && (s.hashChangeInit = function () {
                    s.checkerFunction = null;
                    var e, i, r, a = "";
                    return s.isInternetExplorer() ? ("historyjs-iframe", (e = n.createElement("iframe")).setAttribute("id", "historyjs-iframe"), e.style.display = "none", n.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), i = "", r = !1, s.checkerFunction = function () {
                        if (r) return !1;
                        r = !0;
                        var n = s.getHash() || "",
                            o = s.unescapeHash(e.contentWindow.document.location.hash) || "";
                        return n !== a ? (a = n, o !== n && (i = o = n, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = s.escapeHash(n)), s.Adapter.trigger(t, "hashchange")) : o !== i && (i = o, s.setHash(o, !1)), r = !1, !0
                    }) : s.checkerFunction = function () {
                        var e = s.getHash();
                        return e !== a && (a = e, s.Adapter.trigger(t, "hashchange")), !0
                    }, s.intervalList.push(o(s.checkerFunction, s.options.hashChangeInterval)), !0
                }, s.Adapter.onDomLoad(s.hashChangeInit)), s.emulated.pushState && (s.onHashChange = function (e) {
                    var i, r = e && e.newURL || n.location.href,
                        o = s.getHashByUrl(r),
                        a = null;
                    return s.isLastHash(o) ? (s.busy(!1), !1) : (s.doubleCheckComplete(), s.saveHash(o), o && s.isTraditionalAnchor(o) ? (s.Adapter.trigger(t, "anchorchange"), s.busy(!1), !1) : (a = s.extractState(s.getFullUrl(o || n.location.href, !1), !0), s.isLastSavedState(a) ? (s.busy(!1), !1) : (s.getHashByState(a), (i = s.discardedState(a)) ? (s.getHashByIndex(-2) === s.getHashByState(i.forwardState) ? s.back(!1) : s.forward(!1), !1) : (s.pushState(a.data, a.title, a.url, !1), !0))))
                }, s.Adapter.bind(t, "hashchange", s.onHashChange), s.pushState = function (e, i, r, o) {
                    if (s.getHashByUrl(r)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== o && s.busy()) return s.pushQueue({
                        scope: s,
                        callback: s.pushState,
                        args: arguments,
                        queue: o
                    }), !1;
                    s.busy(!0);
                    var a = s.createStateObject(e, i, r),
                        l = s.getHashByState(a),
                        u = s.getState(!1),
                        c = s.getHashByState(u),
                        d = s.getHash();
                    return s.storeState(a), s.expectedStateId = a.id, s.recycleState(a), s.setTitle(a), l === c ? (s.busy(!1), !1) : l !== d && l !== s.getShortUrl(n.location.href) ? (s.setHash(l, !1), !1) : (s.saveState(a), s.Adapter.trigger(t, "statechange"), s.busy(!1), !0)
                }, s.replaceState = function (t, e, n, i) {
                    if (s.getHashByUrl(n)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== i && s.busy()) return s.pushQueue({
                        scope: s,
                        callback: s.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    s.busy(!0);
                    var r = s.createStateObject(t, e, n),
                        o = s.getState(!1),
                        a = s.getStateByIndex(-2);
                    return s.discardState(o, r, a), s.pushState(r.data, r.title, r.url, !1), !0
                }), s.emulated.pushState && s.getHash() && !s.emulated.hashChange && s.Adapter.onDomLoad((function () {
                    s.Adapter.trigger(t, "hashchange")
                }))
            }, void 0 !== s.init && s.init()
        }(window),
        function (t, e) {
            "use strict";
            var n = t.console || e,
                i = t.document,
                r = t.navigator,
                o = t.sessionStorage || !1,
                s = t.setTimeout,
                a = t.clearTimeout,
                l = t.setInterval,
                u = t.clearInterval,
                c = t.JSON,
                d = t.alert,
                h = t.History = t.History || {},
                f = t.history;
            if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
            h.init = function () {
                return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
            }, h.initCore = function () {
                if (void 0 !== h.initCore.initialized) return !1;
                if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || i.title, h.intervalList = [], h.clearAllIntervals = function () {
                        var t, e = h.intervalList;
                        if (null != e) {
                            for (t = 0; t < e.length; t++) u(e[t]);
                            h.intervalList = null
                        }
                    }, h.debug = function () {
                        h.options.debug && h.log.apply(h, arguments)
                    }, h.log = function () {
                        var t, e, r, o, s, a = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply,
                            l = i.getElementById("log");
                        for (a ? (t = (o = Array.prototype.slice.call(arguments)).shift(), void 0 !== n.debug ? n.debug.apply(n, [t, o]) : n.log.apply(n, [t, o])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; e < r; ++e) {
                            if ("object" == typeof (s = arguments[e]) && void 0 !== c) try {
                                s = c.stringify(s)
                            } catch (t) {}
                            t += "\n" + s + "\n"
                        }
                        return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : a || d(t), !0
                    }, h.getInternetExplorerMajorVersion = function () {
                        return h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function () {
                            for (var t = 3, e = i.createElement("div"), n = e.getElementsByTagName("i");
                                (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && n[0];);
                            return t > 4 && t
                        }()
                    }, h.isInternetExplorer = function () {
                        return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
                    }, h.emulated = {
                        pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                        hashChange: Boolean(!("onhashchange" in t || "onhashchange" in i) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                    }, h.enabled = !h.emulated.pushState, h.bugs = {
                        setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                        safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                        ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                        hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                    }, h.isEmptyObject = function (t) {
                        for (var e in t) return !1;
                        return !0
                    }, h.cloneObject = function (t) {
                        var e, n;
                        return t ? (e = c.stringify(t), n = c.parse(e)) : n = {}, n
                    }, h.getRootUrl = function () {
                        var t = i.location.protocol + "//" + (i.location.hostname || i.location.host);
                        return i.location.port && (t += ":" + i.location.port), t += "/"
                    }, h.getBaseHref = function () {
                        var t = i.getElementsByTagName("base"),
                            e = "";
                        return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
                    }, h.getBaseUrl = function () {
                        return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
                    }, h.getPageUrl = function () {
                        return ((h.getState(!1, !1) || {}).url || i.location.href).replace(/\/+$/, "").replace(/[^\/]+$/, (function (t, e, n) {
                            return /\./.test(t) ? t : t + "/"
                        }))
                    }, h.getBasePageUrl = function () {
                        return i.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, (function (t, e, n) {
                            return /[^\/]$/.test(t) ? "" : t
                        })).replace(/\/+$/, "") + "/"
                    }, h.getFullUrl = function (t, e) {
                        var n = t,
                            i = t.substring(0, 1);
                        return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (n = "/" === i ? h.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? h.getPageUrl().replace(/#.*/, "") + t : "?" === i ? h.getPageUrl().replace(/[\?#].*/, "") + t : e ? h.getBaseUrl() + t.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                    }, h.getShortUrl = function (t) {
                        var e = t,
                            n = h.getBaseUrl(),
                            i = h.getRootUrl();
                        return h.emulated.pushState && (e = e.replace(n, "")), e = e.replace(i, "/"), h.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                    }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
                        h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                    }, h.getState = function (t, e) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0);
                        var n = h.getLastSavedState();
                        return !n && e && (n = h.createStateObject()), t && ((n = h.cloneObject(n)).url = n.cleanUrl || n.url), n
                    }, h.getIdByState = function (t) {
                        var e, n = h.extractId(t.url);
                        if (!n)
                            if (e = h.getStateString(t), void 0 !== h.stateToId[e]) n = h.stateToId[e];
                            else if (void 0 !== h.store.stateToId[e]) n = h.store.stateToId[e];
                        else {
                            for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[n] || void 0 !== h.store.idToState[n];);
                            h.stateToId[e] = n, h.idToState[n] = t
                        }
                        return n
                    }, h.normalizeState = function (t) {
                        var e, n;
                        return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {}).normalized = !0, e.title = t.title || "", e.url = h.getFullUrl(h.unescapeString(t.url || i.location.href)), e.hash = h.getShortUrl(e.url), e.data = h.cloneObject(t.data), e.id = h.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, n = !h.isEmptyObject(e.data), (e.title || n) && (e.hash = h.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = h.getFullUrl(e.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                    }, h.createStateObject = function (t, e, n) {
                        var i = {
                            data: t,
                            title: e,
                            url: n
                        };
                        return i = h.normalizeState(i)
                    }, h.getStateById = function (t) {
                        return t = String(t), h.idToState[t] || h.store.idToState[t] || e
                    }, h.getStateString = function (t) {
                        var e;
                        return e = {
                            data: h.normalizeState(t).data,
                            title: t.title,
                            url: t.url
                        }, c.stringify(e)
                    }, h.getStateId = function (t) {
                        return h.normalizeState(t).id
                    }, h.getHashByState = function (t) {
                        return h.normalizeState(t).hash
                    }, h.extractId = function (t) {
                        var e;
                        return (e = /(.*)\&_suid=([0-9]+)$/.exec(t)) && e[1] || t, (e ? String(e[2] || "") : "") || !1
                    }, h.isTraditionalAnchor = function (t) {
                        return !/[\/\?\.]/.test(t)
                    }, h.extractState = function (t, e) {
                        var n, i, r = null;
                        return e = e || !1, (n = h.extractId(t)) && (r = h.getStateById(n)), r || (i = h.getFullUrl(t), (n = h.getIdByUrl(i) || !1) && (r = h.getStateById(n)), !r && e && !h.isTraditionalAnchor(t) && (r = h.createStateObject(null, null, i))), r
                    }, h.getIdByUrl = function (t) {
                        return h.urlToId[t] || h.store.urlToId[t] || e
                    }, h.getLastSavedState = function () {
                        return h.savedStates[h.savedStates.length - 1] || e
                    }, h.getLastStoredState = function () {
                        return h.storedStates[h.storedStates.length - 1] || e
                    }, h.hasUrlDuplicate = function (t) {
                        var e;
                        return (e = h.extractState(t.url)) && e.id !== t.id
                    }, h.storeState = function (t) {
                        return h.urlToId[t.url] = t.id, h.storedStates.push(h.cloneObject(t)), t
                    }, h.isLastSavedState = function (t) {
                        var e = !1;
                        return h.savedStates.length && (e = t.id === h.getLastSavedState().id), e
                    }, h.saveState = function (t) {
                        return !h.isLastSavedState(t) && (h.savedStates.push(h.cloneObject(t)), !0)
                    }, h.getStateByIndex = function (t) {
                        return void 0 === t ? h.savedStates[h.savedStates.length - 1] : t < 0 ? h.savedStates[h.savedStates.length + t] : h.savedStates[t]
                    }, h.getHash = function () {
                        return h.unescapeHash(i.location.hash)
                    }, h.unescapeString = function (e) {
                        for (var n, i = e;
                            (n = t.unescape(i)) !== i;) i = n;
                        return i
                    }, h.unescapeHash = function (t) {
                        var e = h.normalizeHash(t);
                        return e = h.unescapeString(e)
                    }, h.normalizeHash = function (t) {
                        return t.replace(/[^#]*#/, "").replace(/#.*/, "")
                    }, h.setHash = function (t, e) {
                        var n, r, o;
                        return !1 !== e && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.setHash,
                            args: arguments,
                            queue: e
                        }), !1) : (n = h.escapeHash(t), h.busy(!0), (r = h.extractState(t, !0)) && !h.emulated.pushState ? h.pushState(r.data, r.title, r.url, !1) : i.location.hash !== n && (h.bugs.setHash ? (o = h.getPageUrl(), h.pushState(null, null, o + "#" + n, !1)) : i.location.hash = n), h)
                    }, h.escapeHash = function (e) {
                        var n = h.normalizeHash(e);
                        return n = t.escape(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                    }, h.getHashByUrl = function (t) {
                        var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                        return e = h.unescapeHash(e)
                    }, h.setTitle = function (t) {
                        var e, n = t.title;
                        n || (e = h.getStateByIndex(0)) && e.url === t.url && (n = e.title || h.options.initialTitle);
                        try {
                            i.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                        } catch (t) {}
                        return i.title = n, h
                    }, h.queues = [], h.busy = function (t) {
                        if (void 0 !== t ? h.busy.flag = t : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                            a(h.busy.timeout);
                            var e = function () {
                                var t, n, i;
                                if (!h.busy.flag)
                                    for (t = h.queues.length - 1; t >= 0; --t) 0 !== (n = h.queues[t]).length && (i = n.shift(), h.fireQueueItem(i), h.busy.timeout = s(e, h.options.busyDelay))
                            };
                            h.busy.timeout = s(e, h.options.busyDelay)
                        }
                        return h.busy.flag
                    }, h.busy.flag = !1, h.fireQueueItem = function (t) {
                        return t.callback.apply(t.scope || h, t.args || [])
                    }, h.pushQueue = function (t) {
                        return h.queues[t.queue || 0] = h.queues[t.queue || 0] || [], h.queues[t.queue || 0].push(t), h
                    }, h.queue = function (t, e) {
                        return "function" == typeof t && (t = {
                            callback: t
                        }), void 0 !== e && (t.queue = e), h.busy() ? h.pushQueue(t) : h.fireQueueItem(t), h
                    }, h.clearQueue = function () {
                        return h.busy.flag = !1, h.queues = [], h
                    }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
                        return h.stateChanged = !0, h.doubleCheckClear(), h
                    }, h.doubleCheckClear = function () {
                        return h.doubleChecker && (a(h.doubleChecker), h.doubleChecker = !1), h
                    }, h.doubleCheck = function (t) {
                        return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = s((function () {
                            return h.doubleCheckClear(), h.stateChanged || t(), !0
                        }), h.options.doubleCheckInterval)), h
                    }, h.safariStatePoll = function () {
                        var e = h.extractState(i.location.href);
                        if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(t, "popstate"), h
                    }, h.back = function (t) {
                        return !1 !== t && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.back,
                            args: arguments,
                            queue: t
                        }), !1) : (h.busy(!0), h.doubleCheck((function () {
                            h.back(!1)
                        })), f.go(-1), !0)
                    }, h.forward = function (t) {
                        return !1 !== t && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.forward,
                            args: arguments,
                            queue: t
                        }), !1) : (h.busy(!0), h.doubleCheck((function () {
                            h.forward(!1)
                        })), f.go(1), !0)
                    }, h.go = function (t, e) {
                        var n;
                        if (t > 0)
                            for (n = 1; n <= t; ++n) h.forward(e);
                        else {
                            if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                            for (n = -1; n >= t; --n) h.back(e)
                        }
                        return h
                    }, h.emulated.pushState) {
                    var p = function () {};
                    h.pushState = h.pushState || p, h.replaceState = h.replaceState || p
                } else h.onPopState = function (e, n) {
                    var r, o, s = !1,
                        a = !1;
                    return h.doubleCheckComplete(), (r = h.getHash()) ? ((o = h.extractState(r || i.location.href, !0)) ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(t, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : ((a = (s = h.Adapter.extractEventData("state", e, n) || !1) ? h.getStateById(s) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(i.location.href)) || (a = h.createStateObject(null, null, i.location.href)), h.expectedStateId = !1, h.isLastSavedState(a) ? (h.busy(!1), !1) : (h.storeState(a), h.saveState(a), h.setTitle(a), h.Adapter.trigger(t, "statechange"), h.busy(!1), !0))
                }, h.Adapter.bind(t, "popstate", h.onPopState), h.pushState = function (e, n, i, r) {
                    if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== r && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: r
                    }), !1;
                    h.busy(!0);
                    var o = h.createStateObject(e, n, i);
                    return h.isLastSavedState(o) ? h.busy(!1) : (h.storeState(o), h.expectedStateId = o.id, f.pushState(o.id, o.title, o.url), h.Adapter.trigger(t, "popstate")), !0
                }, h.replaceState = function (e, n, i, r) {
                    if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (!1 !== r && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: r
                    }), !1;
                    h.busy(!0);
                    var o = h.createStateObject(e, n, i);
                    return h.isLastSavedState(o) ? h.busy(!1) : (h.storeState(o), h.expectedStateId = o.id, f.replaceState(o.id, o.title, o.url), h.Adapter.trigger(t, "popstate")), !0
                };
                if (o) {
                    try {
                        h.store = c.parse(o.getItem("History.store")) || {}
                    } catch (t) {
                        h.store = {}
                    }
                    h.normalizeStore()
                } else h.store = {}, h.normalizeStore();
                h.Adapter.bind(t, "beforeunload", h.clearAllIntervals), h.Adapter.bind(t, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(i.location.href, !0))), o && (h.onUnload = function () {
                    var t, e;
                    try {
                        t = c.parse(o.getItem("History.store")) || {}
                    } catch (e) {
                        t = {}
                    }
                    for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
                    for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
                    for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
                    h.store = t, h.normalizeStore(), o.setItem("History.store", c.stringify(t))
                }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)), h.Adapter.bind(t, "beforeunload", h.onUnload), h.Adapter.bind(t, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (h.Adapter.bind(t, "hashchange", (function () {
                    h.Adapter.trigger(t, "popstate")
                })), h.getHash() && h.Adapter.onDomLoad((function () {
                    h.Adapter.trigger(t, "hashchange")
                }))))
            }, h.init()
        }(window)
}, function (t, e) {
    jQuery.ajaxify = function (t) {
        var e, n = window.History,
            i = window.jQuery,
            r = window.document,
            o = i("html");
        if (!n.enabled) return !1;
        void 0 === i.ajaxify.instanceCount ? i.ajaxify.instanceCount = 0 : i.ajaxify.instanceCount++, e = i.ajaxify.instanceCount;
        var s = i.extend({
            contentSelector: "main,#main,#content,article:first,.article:first,.post:first",
            backContentSelector: "#content,main,#main,article:first,.article:first,.post:first",
            linkContainerSelector: "body",
            menuSelector: "#menu,#nav,nav:first,.nav:first",
            activeClass: "active selected current youarehere",
            activeSelector: ".active,.selected,.current,.youarehere",
            menuChildrenSelector: "> li,> ul > li",
            startEventName: "statechangestart",
            completedEventName: "statechangecomplete",
            scrollOptions: {
                duration: 800,
                easing: "swing"
            },
            scrollEnabled: !0,
            startAnim: function (t, e, n, r) {
                i(window).trigger(r), t.animate({
                    opacity: 0
                }, 800, (function () {
                    i("body").addClass("ajaxify-waiting")
                }))
            },
            endAnim: function (t, e, n, r, o) {
                t.remove(), i("body").removeClass("ajaxify-loading ajaxify-waiting"), e.css({
                    opacity: 0,
                    display: "block"
                }).animate({
                    opacity: 1
                }, 800, (function () {
                    i("body").removeClass("ajaxify-waiting")
                })), i(window).trigger(r, o)
            },
            keepOldContent: !1
        }, t);
        "" === s.linkContainerSelector && (s.linkContainerSelector = s.contentSelector);
        var a, l = i(s.contentSelector).first(),
            u = l.get(0),
            c = i(s.menuSelector),
            d = i(window),
            h = i(r.body),
            f = n.getRootUrl();
        0 === l.length && (l = h), i.expr[":"].internal = function (t, e, n, r) {
            var o = i(t).attr("href") || "",
                s = f.slice(0, -1);
            return o.substring(0, s.length) === s || -1 === o.indexOf(":")
        }, i(s.linkContainerSelector), a = s.linkContainerSelector.replace(/\,/g, " a:internal:not(.no-ajaxy),") + " a:internal:not(.no-ajaxy)", o.on("click", a, (function (t) {
            var o = i(this),
                s = o.attr("href"),
                a = o.attr("title") || null,
                l = {
                    ajaxifyData: {
                        instance: e,
                        referrer: unescape(r.location.toString())
                    }
                };
            return !(2 != t.which && !t.metaKey && -1 === s.indexOf("#") && (n.pushState(l, a, s), t.preventDefault(), 1))
        })), d.bind("statechange", (function () {
            var t = n.getState(),
                o = n.savedStates,
                a = t.url,
                d = o[o.length - 2].url,
                p = t.data,
                g = a.replace(f, "");
            if (t.data.ajaxifyData) {
                if (p.ajaxifyData.instance !== e) return !1;
                l = i(s.contentSelector).first(), p.ajaxifyData.referrer !== d && (l = i(s.backContentSelector))
            } else {
                if (0 !== e) return !1;
                l = i(s.backContentSelector)
            }
            h.addClass("ajaxify-loading"), u = l.get(0), s.keepOldContent ? (l.wrapInner('<div id="ajaxify-oldContent" />').append('<div id="ajaxify-newContent" style="display: none;" />'), s.startAnim(i("#ajaxify-oldContent"), i("#ajaxify-newContent"), a, s.startEventName)) : s.startAnim(l, i(), a, s.startEventName), i.ajax({
                url: a,
                success: function (t, e, n) {
                    var o, d, f, p, m = i((p = String(t).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta)\>/gi, "</div>"), i.trim(p))),
                        v = m.find(".document-body:first").find(s.contentSelector).filter(":first");
                    if ((f = v.find("script")).length && f.detach(), !(d = v.html())) return r.location.href = a, !1;
                    (o = c.find(s.menuChildrenSelector)).filter(s.activeSelector).removeClass(s.activeClass), 1 === (o = o.has('a[href^="' + g + '"],a[href^="/' + g + '"],a[href^="' + a + '"]')).length && o.addClass(s.activeClass), l.stop(!0, !0), s.keepOldContent ? i("#ajaxify-newContent").html(d) : l.html(d), r.title = m.find(".document-title:first").text();
                    try {
                        r.getElementsByTagName("title")[0].innerHTML = r.title.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    f.each((function () {
                        var t = i(this),
                            e = t.text(),
                            n = r.createElement("script");
                        t.attr("src") && (t[0].async || (n.async = !1), n.src = t.attr("src")), i(n).html(e), u.appendChild(n)
                    })), h.ScrollTo && s.scrollEnabled && h.ScrollTo(s.scrollOptions), void 0 !== window._gaq && window._gaq.push(["_trackPageview", g]), void 0 !== window.reinvigorate && void 0 !== window.reinvigorate.ajax_track && reinvigorate.ajax_track(a), s.keepOldContent ? s.endAnim(i("#ajaxify-oldContent"), i("#ajaxify-newContent"), a, s.completedEventName, t) : s.endAnim(i(), l, a, s.completedEventName, t)
                },
                error: function (t, e, n) {
                    return r.location.href = a, !1
                }
            })
        }))
    }
}, function (t, e, n) {
    var i, r, o;
    ! function (s) {
        "use strict";
        r = [n(0)], void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = o)
    }((function (t) {
        "use strict";

        function e(e) {
            return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function n(e) {
            return t.isFunction(e) || t.isPlainObject(e) ? e : {
                top: e,
                left: e
            }
        }
        var i = t.scrollTo = function (e, n, i) {
            return t(window).scrollTo(e, n, i)
        };
        return i.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, t.fn.scrollTo = function (r, o, s) {
            "object" == typeof o && (s = o, o = 0), "function" == typeof s && (s = {
                onAfter: s
            }), "max" === r && (r = 9e9), s = t.extend({}, i.defaults, s), o = o || s.duration;
            var a = s.queue && 1 < s.axis.length;
            return a && (o /= 2), s.offset = n(s.offset), s.over = n(s.over), this.each((function () {
                function l(e) {
                    var n = t.extend({}, s, {
                        queue: !0,
                        duration: o,
                        complete: e && function () {
                            e.call(d, f, s)
                        }
                    });
                    h.animate(p, n)
                }
                if (null !== r) {
                    var u, c = e(this),
                        d = c ? this.contentWindow || window : this,
                        h = t(d),
                        f = r,
                        p = {};
                    switch (typeof f) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                f = n(f);
                                break
                            }
                            f = c ? t(f) : t(f, d);
                        case "object":
                            if (0 === f.length) return;
                            (f.is || f.style) && (u = (f = t(f)).offset())
                    }
                    var g = t.isFunction(s.offset) && s.offset(d, f) || s.offset;
                    t.each(s.axis.split(""), (function (t, e) {
                        var n = "x" === e ? "Left" : "Top",
                            r = n.toLowerCase(),
                            o = "scroll" + n,
                            m = h[o](),
                            v = i.max(d, e);
                        u ? (p[o] = u[r] + (c ? 0 : m - h.offset()[r]), s.margin && (p[o] -= parseInt(f.css("margin" + n), 10) || 0, p[o] -= parseInt(f.css("border" + n + "Width"), 10) || 0), p[o] += g[r] || 0, s.over[r] && (p[o] += f["x" === e ? "width" : "height"]() * s.over[r])) : (n = f[r], p[o] = n.slice && "%" === n.slice(-1) ? parseFloat(n) / 100 * v : n), s.limit && /^\d+$/.test(p[o]) && (p[o] = 0 >= p[o] ? 0 : Math.min(p[o], v)), !t && 1 < s.axis.length && (m === p[o] ? p = {} : a && (l(s.onAfterFirst), p = {}))
                    })), l(s.onAfter)
                }
            }))
        }, i.max = function (n, i) {
            var r = "scroll" + (o = "x" === i ? "Width" : "Height");
            if (!e(n)) return n[r] - t(n)[o.toLowerCase()]();
            var o = "client" + o,
                s = (a = n.ownerDocument || n.document).documentElement,
                a = a.body;
            return Math.max(s[r], a[r]) - Math.min(s[o], a[o])
        }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
            get: function (e) {
                return t(e.elem)[e.prop]()
            },
            set: function (e) {
                var n = this.get(e);
                if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();
                var i = Math.round(e.now);
                n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e))
            }
        }, i
    }))
}, function (t, e) {
    ! function () {
        "use strict";
        $("body").show();
        $(window).width(), $(window).height(), $(window).scrollTop(), $("html"), $("body");
        $("#docs").length && $("#docs").popover("show"), ($(".scroll").length > 0 || $(".scroll a[href^='#']").length > 0) && $('.scroll, .scroll a[href^="#"]').on("click", (function () {
            return $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - 30
            }, 1500, (function () {})), !1
        })), $("body").on("click", ".xv-qyt", (function (t) {
            t.preventDefault();
            var e = parseInt($(this).attr("data-value")),
                n = $(this).siblings("input.qty"),
                i = parseInt(n.val());
            if (i >= 1) {
                if (-1 === e && 1 === i) return !1;
                n.val(i + e)
            }
        })), $(".custome-select select").on("change", (function () {
            $(this).parent(".custome-select").find("span").html($(this).val())
        })), $(".js-gotop").length && ($(".js-gotop").on("click", (function (t) {
            return t.preventDefault(), $("html, body").animate({
                scrollTop: $("html").offset().top
            }, 500, "easeInOutExpo"), !1
        })), $(window).scroll((function () {
            $(window).scrollTop() > 200 ? $(".js-top").addClass("active") : $(".js-top").removeClass("active")
        }))), $(".form-control").length && ($(".form-control").focus((function () {
            $(this).parent().addClass("focused")
        })), $(".form-control").focusout((function () {
            var t = $(this);
            t.parents(".form-group").hasClass("form-float") ? "" == t.val() && t.parents(".form-line").removeClass("focused") : t.parents(".form-line").removeClass("focused")
        })), $("body").on("click", ".form-float .form-line .form-label", (function () {
            $(this).parent().find("input").focus()
        })), $(".form-control").each((function () {
            "" !== $(this).val() && $(this).parents(".form-line").addClass("focused")
        })), $(".skin_handle").on("click", (function () {
            $("body").toggleClass("theme-dark")
        })))
    }()
}, function (t, e, n) {
    n(42), n(47),
        function () {
            "use strict";
            var t = function (t, e) {
                $(".project-filter li, .filter li").removeClass("active"), e.addClass("active"), $(".masonry-container .animated").length > 0 && $(".masonry-container .animated").addClass("go");
                var n = e.attr("data-filter");
                return t.isotope({
                    filter: n,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            };
            (window.initMasonary = function () {
                var e = $(".masonry-container"),
                    n = $(".project-filter li, .filter li");
                $("#filter-items").length && $(".filter li a").on("click", (function () {
                    return $("html, body").animate({
                        scrollTop: $("#filter-items").offset().top - 0
                    }, 1500, (function () {})), !1
                })), e.waitForImages((function () {
                    $(".masonry-container").show(), $(".masonry-container").masonry({
                        itemSelector: ".masonry-post"
                    })
                })), $(window).on("load", (function () {
                    var n = $(".project-filter .active");
                    t(e, n)
                })), n.on("click", (function () {
                    n.removeClass("active");
                    var i = $(this).addClass("active");
                    $(".project-filter li a, .filter li a").removeClass("active"), $(this).children("a").addClass("active"), t(e, i)
                }))
            })()
        }()
}, function (t, e, n) {
    var i, r, o, s;
    /*!
     * Masonry v4.2.2
     * Cascading grid layout library
     * https://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    window, s = function (t, e) {
        "use strict";
        var n = t.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var i = n.prototype;
        return i._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i;
            o = Math[s && s < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
        }, i.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), r = {
                    x: this.columnWidth * i.col,
                    y: i.y
                }, o = i.y + t.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) this.colYs[a] = o;
            return r
        }, i._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                n = Math.min.apply(Math, e);
            return {
                col: e.indexOf(n),
                y: n
            }
        }, i._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
            return e
        }, i._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var n = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, n)
        }, i._getHorizontalColPosition = function (t, e) {
            var n = this.horizontalColIndex % this.cols;
            n = t > 1 && n + t > this.cols ? 0 : n;
            var i = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, {
                col: n,
                y: this._getColGroupY(n, t)
            }
        }, i._manageStamp = function (t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft") ? i.left : i.right,
                o = r + n.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, u = s; u <= a; u++) this.colYs[u] = Math.max(l, this.colYs[u])
        }, i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    }, r = [n(43), n(2)], void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = o)
}, function (t, e, n) {
    var i, r;
    /*!
     * Outlayer v2.1.1
     * the brains and guts of a layout library
     * MIT license
     */
    ! function (o, s) {
        "use strict";
        i = [n(7), n(2), n(44), n(46)], void 0 === (r = function (t, e, n, i) {
            return s(o, t, e, n, i)
        }.apply(e, i)) || (t.exports = r)
    }(window, (function (t, e, n, i, r) {
        "use strict";
        var o = t.console,
            s = t.jQuery,
            a = function () {},
            l = 0,
            u = {};

        function c(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                this.element = n, s && (this.$element = s(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
                var r = ++l;
                this.element.outlayerGUID = r, u[r] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
        }
        c.namespace = "outlayer", c.Item = r, c.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var d = c.prototype;

        function h(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        i.extend(d, e.prototype), d.option = function (t) {
            i.extend(this.options, t)
        }, d._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, c.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, d._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, d.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, d._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = new n(e[r], this);
                i.push(o)
            }
            return i
        }, d._filterFindItemElements = function (t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, d.getItemElements = function () {
            return this.items.map((function (t) {
                return t.element
            }))
        }, d.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, d._init = d.layout, d._resetLayout = function () {
            this.getSize()
        }, d.getSize = function () {
            this.size = n(this.element)
        }, d._getMeasurement = function (t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, d.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, d._getItemsForLayout = function (t) {
            return t.filter((function (t) {
                return !t.isIgnored
            }))
        }, d._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach((function (t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }), this), this._processLayoutQueue(n)
            }
        }, d._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, d._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach((function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }), this)
        }, d.updateStagger = function () {
            var t = this.options.stagger;
            if (null != t) return this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    n = e && e[1],
                    i = e && e[2];
                if (!n.length) return 0;
                return (n = parseFloat(n)) * (f[i] || 1)
            }(t), this.stagger;
            this.stagger = 0
        }, d._positionItem = function (t, e, n, i, r) {
            i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n))
        }, d._postLayout = function () {
            this.resizeContainer()
        }, d.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, d._getContainerSize = a, d._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, d._emitCompleteOnItems = function (t, e) {
            var n = this;

            function i() {
                n.dispatchEvent(t + "Complete", null, [e])
            }
            var r = e.length;
            if (e && r) {
                var o = 0;
                e.forEach((function (e) {
                    e.once(t, s)
                }))
            } else i();

            function s() {
                ++o == r && i()
            }
        }, d.dispatchEvent = function (t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), s)
                if (this.$element = this.$element || s(this.element), e) {
                    var r = s.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, d.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, d.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, d.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, d.unstamp = function (t) {
            (t = this._find(t)) && t.forEach((function (t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }), this)
        }, d._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t)
        }, d._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, d._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, d._manageStamp = a, d._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t);
            return {
                left: e.left - i.left - r.marginLeft,
                top: e.top - i.top - r.marginTop,
                right: i.right - e.right - r.marginRight,
                bottom: i.bottom - e.bottom - r.marginBottom
            }
        }, d.handleEvent = i.handleEvent, d.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, d.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, d.onresize = function () {
            this.resize()
        }, i.debounceMethod(c, "onresize", 100), d.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, d.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, d.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, d.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, d.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, d.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function (t, n) {
                    t.stagger(n * e), t.reveal()
                }))
            }
        }, d.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function (t, n) {
                    t.stagger(n * e), t.hide()
                }))
            }
        }, d.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, d.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, d.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, d.getItems = function (t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach((function (t) {
                var n = this.getItem(t);
                n && e.push(n)
            }), this), e
        }, d.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
                t.remove(), i.removeFrom(this.items, t)
            }), this)
        }, d.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
                t.destroy()
            })), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, s && s.removeData(this.element, this.constructor.namespace)
        }, c.data = function (t) {
            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
            return e && u[e]
        }, c.create = function (t, e) {
            var n = h(c);
            return n.defaults = i.extend({}, c.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, c.compatOptions), n.namespace = t, n.data = c.data, n.Item = h(r), i.htmlInit(n, t), s && s.bridget && s.bridget(t, n), n
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return c.Item = r, c
    }))
}, function (t, e, n) {
    var i, r;
    ! function (o, s) {
        i = [n(45)], void 0 === (r = function (t) {
            return s(o, t)
        }.apply(e, i)) || (t.exports = r)
    }(window, (function (t, e) {
        "use strict";
        var n = {
                extend: function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                modulo: function (t, e) {
                    return (t % e + e) % e
                }
            },
            i = Array.prototype.slice;
        n.makeArray = function (t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t]
        }, n.removeFrom = function (t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function (t, n) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach((function (t) {
                if (t instanceof HTMLElement)
                    if (i) {
                        e(t, i) && r.push(t);
                        for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                    } else r.push(t)
            })), r
        }, n.debounceMethod = function (t, e, n) {
            n = n || 100;
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[r];
                clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout((function () {
                    i.apply(o, e), delete o[r]
                }), n)
            }
        }, n.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, (function (t, e, n) {
                return e + "-" + n
            })).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function (e, i) {
            n.docReady((function () {
                var o = n.toDashed(i),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = s + "-options",
                    d = t.jQuery;
                u.forEach((function (t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void(r && r.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, i, a)
                }))
            }))
        }, n
    }))
}, function (t, e, n) {
    var i, r;
    ! function (o, s) {
        "use strict";
        void 0 === (r = "function" == typeof (i = s) ? i.call(e, n, e, t) : i) || (t.exports = r)
    }(window, (function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    }))
}, function (t, e, n) {
    var i, r, o, s;
    window, s = function (t, e) {
        "use strict";
        var n = document.documentElement.style,
            i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
            r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            o = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [i],
            s = {
                transform: r,
                transition: i,
                transitionDuration: i + "Duration",
                transitionProperty: i + "Property",
                transitionDelay: i + "Delay"
            };

        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var l = a.prototype = Object.create(t.prototype);
        l.constructor = a, l._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function () {
            this.size = e(this.element)
        }, l.css = function (t) {
            var e = this.element.style;
            for (var n in t) e[s[n] || n] = t[n]
        }, l.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = parseFloat(i),
                s = parseFloat(r),
                a = this.layout.size; - 1 != i.indexOf("%") && (o = o / 100 * a.width), -1 != r.indexOf("%") && (s = s / 100 * a.height), o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s, o -= e ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
        }, l.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                u = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e), !r || this.isTransitioning) {
                var o = t - n,
                    s = e - i,
                    a = {};
                a.transform = this.getTranslate(o, s), this.transition({
                    to: a,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var u = "opacity," + r.replace(/([A-Z])/g, (function (t) {
            return "-" + t.toLowerCase()
        }));
        l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: u,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(o, this, !1)
            }
        }, l.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var c = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                delete e.ingProperties[n],
                    function (t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var d = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function () {
            this.css(d)
        }, l.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function () {
            i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
                this.removeElem()
            })), this.hide()) : this.removeElem()
        }, l.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, l.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }, r = [n(7), n(2)], void 0 === (o = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = o)
}, function (t, e, n) {
    var i, r, o, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w, C;
    ! function (i, r) {
        w = [n(0)], void 0 === (C = function (t) {
            return r(i, t)
        }.apply(e, w)) || (t.exports = C)
    }(window, (function (t, e) {
        "use strict";

        function n(n, o, a) {
            function l(t, e, i) {
                var r, o = "$()." + n + '("' + e + '")';
                return t.each((function (t, l) {
                    var u = a.data(l, n);
                    if (u) {
                        var c = u[e];
                        if (c && "_" != e.charAt(0)) {
                            var d = c.apply(u, i);
                            r = void 0 === r ? d : r
                        } else s(o + " is not a valid method")
                    } else s(n + " not initialized. Cannot call methods, i.e. " + o)
                })), void 0 !== r ? r : t
            }

            function u(t, e) {
                t.each((function (t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
                }))
            }(a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
                if ("string" == typeof t) {
                    var e = r.call(arguments, 1);
                    return l(this, t, e)
                }
                return u(this, t), this
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var r = Array.prototype.slice,
            o = t.console,
            s = void 0 === o ? function () {} : function (t) {
                o.error(t)
            };
        return i(e || t.jQuery), n
    })),
    function (t, e) {
        o = {
            id: "ev-emitter/ev-emitter",
            exports: {},
            loaded: !1
        }, i = "function" == typeof (r = e) ? r.call(o.exports, n, o.exports, o) : r, o.loaded = !0, void 0 !== i || (i = o.exports)
    }("undefined" != typeof window && window, (function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), r = n[i += s ? 0 : 1]
                }
                return this
            }
        }, t
    })),
    function (t, n) {
        "use strict";
        s = function () {
            return n()
        }.apply(e, w = [])
    }(window, (function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function n() {
            if (!l) {
                l = !0;
                var n = document.createElement("div");
                n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style.boxSizing = "border-box";
                var o = document.body || document.documentElement;
                o.appendChild(n);
                var s = e(n);
                i.isBoxSizeOuter = r = 200 == t(s.width), o.removeChild(n)
            }
        }

        function i(i) {
            if (n(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType) {
                var o = e(i);
                if ("none" == o.display) return function () {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < a; e++) {
                        t[s[e]] = 0
                    }
                    return t
                }();
                var l = {};
                l.width = i.offsetWidth, l.height = i.offsetHeight;
                for (var u = l.isBorderBox = "border-box" == o.boxSizing, c = 0; c < a; c++) {
                    var d = s[c],
                        h = o[d],
                        f = parseFloat(h);
                    l[d] = isNaN(f) ? 0 : f
                }
                var p = l.paddingLeft + l.paddingRight,
                    g = l.paddingTop + l.paddingBottom,
                    m = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = u && r,
                    C = t(o.width);
                !1 !== C && (l.width = C + (w ? 0 : p + y));
                var _ = t(o.height);
                return !1 !== _ && (l.height = _ + (w ? 0 : g + b)), l.innerWidth = l.width - (p + y), l.innerHeight = l.height - (g + b), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
            }
        }
        var r, o = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            a = s.length,
            l = !1;
        return i
    })),
    function (t, e) {
        "use strict";
        u = {
            id: "desandro-matches-selector/matches-selector",
            exports: {},
            loaded: !1
        }, a = "function" == typeof (l = e) ? l.call(u.exports, n, u.exports, u) : l, u.loaded = !0, void 0 !== a || (a = u.exports)
    }(window, (function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    })),
    function (t, n) {
        c = function (e) {
            return n(t, e)
        }.apply(e, w = [a])
    }(window, (function (t, e) {
        var n = {
                extend: function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                modulo: function (t, e) {
                    return (t % e + e) % e
                },
                makeArray: function (t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length)
                        for (var n = 0; n < t.length; n++) e.push(t[n]);
                    else e.push(t);
                    return e
                },
                removeFrom: function (t, e) {
                    var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
                },
                getParent: function (t, n) {
                    for (; t != document.body;)
                        if (t = t.parentNode, e(t, n)) return t
                },
                getQueryElement: function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                },
                handleEvent: function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                },
                filterFindElements: function (t, i) {
                    t = n.makeArray(t);
                    var r = [];
                    return t.forEach((function (t) {
                        if (t instanceof HTMLElement) {
                            if (!i) return void r.push(t);
                            e(t, i) && r.push(t);
                            for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                        }
                    })), r
                },
                debounceMethod: function (t, e, n) {
                    var i = t.prototype[e],
                        r = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[r];
                        t && clearTimeout(t);
                        var e = arguments,
                            o = this;
                        this[r] = setTimeout((function () {
                            i.apply(o, e), delete o[r]
                        }), n || 100)
                    }
                },
                docReady: function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                },
                toDashed: function (t) {
                    return t.replace(/(.)([A-Z])/g, (function (t, e, n) {
                        return e + "-" + n
                    })).toLowerCase()
                }
            },
            i = t.console;
        return n.htmlInit = function (e, r) {
            n.docReady((function () {
                var o = n.toDashed(r),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = s + "-options",
                    d = t.jQuery;
                u.forEach((function (t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, r, a)
                }))
            }))
        }, n
    })),
    function (t, n) {
        w = [i, s], d = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t, e) {
        "use strict";

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var i = document.documentElement.style,
            r = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [r],
            a = {
                transform: o,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            l = n.prototype = Object.create(t.prototype);
        l.constructor = n, l._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function () {
            this.size = e(this.element)
        }, l.css = function (t) {
            var e = this.element.style;
            for (var n in t) {
                e[a[n] || n] = t[n]
            }
        }, l.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= n ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a
        }, l.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                u = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), !s || this.isTransitioning) {
                var a = t - n,
                    l = e - i,
                    u = {};
                u.transform = this.getTranslate(a, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, l._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var u = "opacity," + function (t) {
            return t.replace(/([A-Z])/g, (function (t) {
                return "-" + t.toLowerCase()
            }))
        }(o);
        l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: u,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(s, this, !1)
            }
        }, l.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var c = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], function (t) {
                        for (var e in t) return !1;
                        return null, !0
                    }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var d = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function () {
            this.css(d)
        }, l.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function () {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function () {
                this.removeElem()
            })), void this.hide()) : void this.removeElem()
        }, l.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, l.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    })),
    function (t, n) {
        "use strict";
        h = function (e, i, r, o) {
            return n(t, e, i, r, o)
        }.apply(e, w = [i, s, c, d])
    }(window, (function (t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                this.element = n, l && (this.$element = l(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
                var r = ++c;
                this.element.outlayerGUID = r, d[r] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            u = function () {},
            c = 0,
            d = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var h = o.prototype;
        i.extend(h, e.prototype), h.option = function (t) {
            i.extend(this.options, t)
        }, h._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, h._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, h.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, h._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = new n(e[r], this);
                i.push(o)
            }
            return i
        }, h._filterFindItemElements = function (t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, h.getItemElements = function () {
            return this.items.map((function (t) {
                return t.element
            }))
        }, h.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function () {
            this.getSize()
        }, h.getSize = function () {
            this.size = n(this.element)
        }, h._getMeasurement = function (t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, h.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, h._getItemsForLayout = function (t) {
            return t.filter((function (t) {
                return !t.isIgnored
            }))
        }, h._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach((function (t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }), this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, h._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach((function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }), this)
        }, h.updateStagger = function () {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    n = e && e[1],
                    i = e && e[2];
                return n.length ? (n = parseFloat(n)) * (f[i] || 1) : 0
            }(t), this.stagger)
        }, h._positionItem = function (t, e, n, i, r) {
            i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n))
        }, h._postLayout = function () {
            this.resizeContainer()
        }, h.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, h._getContainerSize = u, h._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function (t, e) {
            function n() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                ++s == o && n()
            }
            var r = this,
                o = e.length;
            if (e && o) {
                var s = 0;
                e.forEach((function (e) {
                    e.once(t, i)
                }))
            } else n()
        }, h.dispatchEvent = function (t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, h.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, h.unstamp = function (t) {
            (t = this._find(t)) && t.forEach((function (t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }), this)
        }, h._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), i.makeArray(t)
        }, h._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, h._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, h._manageStamp = u, h._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t);
            return {
                left: e.left - i.left - r.marginLeft,
                top: e.top - i.top - r.marginTop,
                right: i.right - e.right - r.marginRight,
                bottom: i.bottom - e.bottom - r.marginBottom
            }
        }, h.handleEvent = i.handleEvent, h.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, h.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, h.onresize = function () {
            this.resize()
        }, i.debounceMethod(o, "onresize", 100), h.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, h.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, h.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, h.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function (t, n) {
                    t.stagger(n * e), t.reveal()
                }))
            }
        }, h.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach((function (t, n) {
                    t.stagger(n * e), t.hide()
                }))
            }
        }, h.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, h.getItems = function (t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach((function (t) {
                var n = this.getItem(t);
                n && e.push(n)
            }), this), e
        }, h.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function (t) {
                t.remove(), i.removeFrom(this.items, t)
            }), this)
        }, h.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach((function (t) {
                t.destroy()
            })), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function (t) {
            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
            return e && d[e]
        }, o.create = function (t, e) {
            var n = s(o);
            return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return o.Item = r, o
    })),
    function (t, n) {
        w = [h], f = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var n = e.prototype = Object.create(t.Item.prototype),
            i = n._create;
        n._create = function () {
            this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
        }, n.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var r = n.destroy;
        return n.destroy = function () {
            r.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    })),
    function (t, n) {
        w = [s, h], p = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t, e) {
        "use strict";

        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var i = n.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function (t) {
            i[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        })), i.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.getSegmentSize = function (t, e) {
            var n = t + e,
                i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var r = this.getFirstItemSize();
                this[n] = r && r[i] || this.isotope.size["inner" + e]
            }
        }, i.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function (t, e) {
            function r() {
                n.apply(this, arguments)
            }
            return r.prototype = Object.create(i), r.prototype.constructor = r, e && (r.options = e), r.prototype.namespace = t, n.modes[t] = r, r
        }, n
    })),
    function (t, n) {
        w = [h, s], g = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t, e) {
        var n = t.create("masonry");
        return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i;
            o = Math[s && s < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, n.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var i = this._getColGroup(n), r = Math.min.apply(Math, i), o = i.indexOf(r), s = {
                    x: this.columnWidth * o,
                    y: r
                }, a = r + t.size.outerHeight, l = this.cols + 1 - i.length, u = 0; u < l; u++) this.colYs[o + u] = a;
            return s
        }, n.prototype._getColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) {
                var r = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function (t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft") ? i.left : i.right,
                o = r + n.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, u = s; u <= a; u++) this.colYs[u] = Math.max(l, this.colYs[u])
        }, n.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    })),
    function (t, n) {
        w = [p, g], m = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t, e) {
        "use strict";
        var n = t.create("masonry"),
            i = n.prototype,
            r = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var o in e.prototype) r[o] || (i[o] = e.prototype[o]);
        var s = i.measureColumns;
        i.measureColumns = function () {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = i._getOption;
        return i._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, n
    })),
    function (t, n) {
        w = [p], v = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t) {
        "use strict";
        var e = t.create("fitRows"),
            n = e.prototype;
        return n._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
        }, n._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    })),
    function (t, n) {
        w = [p], b = "function" == typeof (y = n) ? y.apply(e, w) : y
    }(window, (function (t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            n = e.prototype;
        return n._resetLayout = function () {
            this.y = 0
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, n._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    })),
    function (n, i) {
        void 0 === (C = function (t, e, r, o, s, a) {
            return i(n, t, e, r, o, s, a)
        }.apply(e, w = [h, s, a, c, f, p, m, v, b])) || (t.exports = C)
    }(window, (function (t, e, n, i, r, o, s) {
        var a = t.jQuery,
            l = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        u.Item = o, u.LayoutMode = s;
        var c = u.prototype;
        c._create = function () {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(t)
        }, c.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, c._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0; n < t.length; n++) {
                var i = t[n];
                i.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, c._initLayoutMode = function (t) {
            var e = s.modes[t],
                n = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, n) : n, this.modes[t] = new e(this)
        }, c.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, c._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, c._init = c.arrange, c._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, c._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, c._bindArrangeComplete = function () {
            function t() {
                e && n && i && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
            }
            var e, n, i, r = this;
            this.once("layoutComplete", (function () {
                e = !0, t()
            })), this.once("hideComplete", (function () {
                n = !0, t()
            })), this.once("revealComplete", (function () {
                i = !0, t()
            }))
        }, c._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var n = [], i = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var l = o(a);
                    l && n.push(a), l && a.isHidden ? i.push(a) : l || a.isHidden || r.push(a)
                }
            }
            return {
                matches: n,
                needReveal: i,
                needHide: r
            }
        }, c._getFilterTest = function (t) {
            return a && this.options.isJQueryFiltering ? function (e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return i(e.element, t)
            }
        }, c.updateSortData = function (t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, c._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = d(n)
            }
        }, c._updateItemsSortData = function (t) {
            for (var e = t && t.length, n = 0; e && n < e; n++) {
                t[n].updateSortData()
            }
        };
        var d = function (t) {
            if ("string" != typeof t) return t;
            var e = l(t).split(" "),
                n = e[0],
                i = n.match(/^\[(.+)\]$/),
                r = function (t, e) {
                    return t ? function (e) {
                        return e.getAttribute(t)
                    } : function (t) {
                        var n = t.querySelector(e);
                        return n && n.textContent
                    }
                }(i && i[1], n),
                o = u.sortDataParsers[e[1]];
            return o ? function (t) {
                return t && o(r(t))
            } : function (t) {
                return t && r(t)
            }
        };
        u.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, c._sort = function () {
            if (this.options.sortBy) {
                var t = r.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = function (t, e) {
                    return function (n, i) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r],
                                s = n.sortData[o],
                                a = i.sortData[o];
                            if (s > a || s < a) return (s > a ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, c._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, c._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, c._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, c.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, c.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, c.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, c._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, c.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, r = e.length;
                for (n = 0; n < r; n++) i = e[n], this.element.appendChild(i.element);
                var o = this._filter(e).matches;
                for (n = 0; n < r; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < r; n++) delete e[n].isLayoutInstant;
                this.reveal(o)
            }
        };
        var h = c.remove;
        return c.remove = function (t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            h.call(this, t);
            for (var n = e && e.length, i = 0; n && i < n; i++) {
                var o = e[i];
                r.removeFrom(this.filteredItems, o)
            }
        }, c.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, c._noTransition = function (t, e) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.apply(this, e);
            return this.options.transitionDuration = n, i
        }, c.getFilteredItemElements = function () {
            return this.filteredItems.map((function (t) {
                return t.element
            }))
        }, u
    }))
}, function (t, e, n) {
    n(5), $((function () {
        "use strict";
        $.PaperPanel = {}, $.PaperPanel.options = {
            animationSpeed: 500,
            sidebarToggleSelector: "[data-toggle='push-menu']",
            sidebarPushMenu: !0,
            navbarMenuSlimscrollWidth: "3px",
            sidebarSlimScroll: !0,
            controlSidebarOptions: {
                toggleBtnSelector: "[data-toggle='control-sidebar']",
                selector: ".control-sidebar",
                slide: !0
            },
            sidebarExpandOnHover: !1,
            screenSizes: {
                xs: 480,
                sm: 768,
                md: 1025,
                lg: 1200
            }
        }, $("body").removeClass("hold-transition"), "undefined" != typeof PaperPanelOptions && $.extend(!0, $.PaperPanel.options, PaperPanelOptions);
        var t = $.PaperPanel.options;
        $.PaperPanel.layout = {
            activate: function () {
                var t = this;
                t.fix(), t.fixSidebar(), $(window, ".wrapper").on("resize", (function () {
                    t.fix(), t.fixSidebar()
                }))
            },
            fix: function () {
                var t = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
                    e = $(window).height(),
                    n = $(".sidebar").height();
                if ($("body").hasClass("fixed")) $(".content-wrapper, .right-side").css("min-height", e - $(".main-footer").outerHeight());
                else {
                    var i;
                    e >= n ? ($(".content-wrapper, .right-side").css("min-height", e - t), i = e - t) : ($(".content-wrapper, .right-side").css("min-height", n), i = n);
                    var r = $($.PaperPanel.options.controlSidebarOptions.selector);
                    void 0 !== r && r.height() > i && $(".content-wrapper, .right-side").css("min-height", r.height())
                }
            },
            fixSidebar: function () {
                $(".main-sidebar").hasClass("fixed") ? (void 0 === $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"), $.PaperPanel.options.sidebarSlimScroll && void 0 !== $.fn.slimScroll && ($(".sidebar").slimScroll({
                    destroy: !0
                }).height("auto"), $(".sidebar").slimscroll({
                    height: $(window).height() + "px",
                    color: "#D4AF37",
                    size: "3px",
                    distance: "5px",
                    position: "left",
                    alwaysVisible: !0,
                    railOpacity: 1
                }))) : void 0 !== $.fn.slimScroll && $(".sidebar").slimScroll({
                    destroy: !0
                }).height("auto")
            }
        }, $.PaperPanel.pushMenu = {
            activate: function (t) {
                var e = $.PaperPanel.options.screenSizes;
                $(document).on("click", t, (function (t) {
                    t.preventDefault(), t.stopPropagation(), $(window).width() > e.md - 1 ? $("body").hasClass("sidebar-collapse") ? ($(".offcanvas").parent().removeClass("sidebar-collapse"), $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu")) : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu")
                })), $(".page").on("click", (function () {
                    $(window).width() <= e.md - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open")
                })), $("#rekord-app").on("click", (function (t) {
                    $(t.target).closest(".control-sidebar").length || $(".control-sidebar").hasClass("control-sidebar-open") && $(".control-sidebar").removeClass("control-sidebar-open"), $(t.target).closest(".main-sidebar").length || $(".sidebar-offCanvas-lg").length && ($("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"), $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"))
                })), ($.PaperPanel.options.sidebarExpandOnHover || $("body").hasClass("sidebar-expanded-on-hover") && $("body").hasClass("sidebar-mini")) && this.expandOnHover()
            },
            expandOnHover: function () {
                var t = this,
                    e = $.PaperPanel.options.screenSizes.sm - 1;
                $(".main-sidebar").hover((function () {
                    $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > e && t.expand()
                }), (function () {
                    $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > e && t.collapse()
                }))
            },
            expand: function () {
                $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")
            },
            collapse: function () {
                $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")
            }
        }, $.PaperPanel.tree = function (t) {
            var e = this,
                n = $.PaperPanel.options.animationSpeed;
            $(document).on("click", t + " li a", (function (t) {
                var i = $(this),
                    r = i.next();
                if (r.is(".sub-menu") && r.is(":visible") && !$("body").hasClass("sidebar-collapse")) r.slideUp(n, (function () {
                    r.removeClass("menu-open")
                })), r.parent("li").removeClass("active");
                else if (r.is(".sub-menu") && !r.is(":visible")) {
                    var o = i.parents("ul").first();
                    o.find("ul:visible").slideUp(n).removeClass("menu-open");
                    var s = i.parent("li");
                    r.slideDown(n, (function () {
                        r.addClass("menu-open"), o.find("li.active").removeClass("active"), s.addClass("active"), e.layout.fix()
                    }))
                }
                r.is(".sub-menu") && t.preventDefault()
            }))
        }, $.PaperPanel.layout.activate(), $.PaperPanel.tree(".sidebar"), t.enableControlSidebar && $.PaperPanel.controlSidebar.activate(), t.sidebarPushMenu && $.PaperPanel.pushMenu.activate(t.sidebarToggleSelector), $('.btn-group[data-toggle="btn-toggle"]').each((function () {
            var t = $(this);
            $(this).find(".btn").on("click", (function (e) {
                t.find(".btn.active").removeClass("active"), $(this).addClass("active"), e.preventDefault()
            }))
        })), $('.sidebar-tabs a[data-toggle="tab"], .sidebar-tabs a[data-toggle="pill"]').on("click", (function (t) {
            $.PaperPanel.pushMenu.expand()
        }))
    }))
}, function (t, e) {
    ! function () {
        "use strict";
        $("body").on("click", ".closePromotions", (function (t) {
            t.preventDefault(), $(this).parent().slideUp()
        }))
    }()
}, function (t, e) {
    ! function () {
        "use strict";
        var t = {
                slide: !0
            },
            e = ".control-sidebar",
            n = '[data-toggle="control-sidebar"]',
            i = ".control-sidebar-open",
            r = ".control-sidebar-bg",
            o = ".wrapper",
            s = ".layout-boxed",
            a = "control-sidebar-open",
            l = "collapsed.controlsidebar",
            u = "expanded.controlsidebar",
            c = function (t, e) {
                this.element = t, this.options = e, this.hasBindedResize = !1, this.init()
            };

        function d(e) {
            return this.each((function () {
                var n = $(this),
                    i = n.data("lte.controlsidebar");
                if (!i) {
                    var r = $.extend({}, t, n.data(), "object" == typeof e && e);
                    n.data("lte.controlsidebar", i = new c(n, r))
                }
                "string" == typeof e && i.toggle()
            }))
        }
        c.prototype.init = function () {
            $(this.element).is(n) || $(this).on("click", this.toggle), this.fix(), $(window).on("resize", function () {
                this.fix()
            }.bind(this))
        }, c.prototype.toggle = function (t) {
            t && t.preventDefault(), this.fix(), $(e).is(i) || $("body").is(i) ? this.collapse() : this.expand()
        }, c.prototype.expand = function () {
            this.options.slide ? $(e).addClass(a) : $("body").addClass(a), $(this.element).trigger($.Event(u))
        }, c.prototype.collapse = function () {
            $("body, " + e).removeClass(a), $(this.element).trigger($.Event(l))
        }, c.prototype.fix = function () {
            $("body").is(s) && this._fixForBoxed($(r))
        }, c.prototype._fixForBoxed = function (t) {
            t.css({
                position: "absolute",
                height: $(o).height()
            })
        };
        var h = $.fn.controlSidebar;
        $.fn.controlSidebar = d, $.fn.controlSidebar.Constructor = c, $.fn.controlSidebar.noConflict = function () {
            return $.fn.controlSidebar = h, this
        }, $(document).on("click", n, (function (t) {
            t && t.preventDefault(), d.call($(this), "toggle")
        }))
    }()
}, function (t, e, n) {
    n(52),
        function () {
            "use strict";
            $(".responsive-tab").responsiveTabs()
        }()
}, function (t, e) {
    ! function (t) {
        function e(e, n) {
            e.each((function () {
                var e = t(this).outerWidth(!0);
                t(this).data("width", e)
            })), e.prependTo(n)
        }

        function n(n) {
            var i = n.find("li"),
                r = i.first(),
                o = r.outerHeight();
            if (n.outerHeight() > o) {
                var s = r.offset();
                i.each((function () {
                    var i = t(this);
                    if (i.offset().top > s.top) {
                        var r = n.find(".responsivetabs-more");
                        if (!r.length) {
                            r = t('<li class="dropdown responsivetabs-more pt-2"><a href="#" data-toggle="dropdown"><i class="icon-more-2 s-18"></i></a><ul class="dropdown-menu dropdown-menu-right"></ul>'), n.append(r)
                        }
                        var o = i.prev(),
                            a = i.nextAll().not(".dropdown"),
                            l = t(".dropdown-menu", r);
                        i.hasClass("dropdown") || (e(a, l), e(i, l)), e(o, l)
                    }
                }))
            } else {
                var a, l = n.parent().width(),
                    u = 0;
                n.children("li").each((function () {
                    u += t(this).outerWidth(!0)
                })), a = l - u, n.find(".dropdown-menu li").each((function () {
                    if (!(t(this).data("width") <= a)) return !1;
                    t(this).insertBefore(n.find(".responsivetabs-more")), a -= t(this).data("width")
                })), n.find(".dropdown-menu li").length || n.find(".responsivetabs-more").remove()
            }
        }
        t.fn.responsiveTabs = function () {
            return this.each((function () {
                var e = t(this);
                n(e), t(window).resize((function () {
                    n(e)
                }))
            })), this
        }
    }(jQuery)
}, function (t, e, n) {
    ! function () {
        "use strict";
        var t = n(6);
        (window.snackbarInit = function () {
            $(".snackbar").on("click", (function () {
                var e, n = $(this);
                (e = n) && t.show({
                    text: e.data("text"),
                    textColor: e.data("textColor"),
                    pos: e.data("pos"),
                    customClass: e.data("customClass"),
                    actionTextColor: "blue",
                    backgroundColor: e.data("backgroundColor")
                })
            }))
        })()
    }()
}, function (t, e, n) {
    n(55), jQuery((function (t) {
        "use strict";
        var e = t(window).width();

        function n() {
            e = t(window).width(), t(".nav-offcanvas").length && t(".paper-nav-toggle").removeClass("dl-trigger"), t(".nav-offcanvas").length && e <= 1030 || t(".nav-offcanvas-desktop").length ? (t("body").addClass("sidebar-collapse"), t(".dl-menu").addClass("dl-menuopen"), t(".paper-nav-toggle").removeClass("dl-trigger"), t(".nav-offcanvas .paper_menu").addClass("main-sidebar shadow1 fixed offcanvas")) : t(".nav-offcanvas .paper_menu").removeClass("main-sidebar shadow1 fixed offcanvas"), e <= 1030 || t(".mini-nav").length ? (t(".responsive-menu").removeClass("xv-menuwrapper").addClass("dl-menuwrapper"), t(".user-avatar").removeClass("pull-right"), t(".sub-menu").addClass("dl-submenu")) : (t(".responsive-menu").removeClass("dl-menuwrapper").addClass("xv-menuwrapper"), t(".sub-menu").removeClass("dl-submenu"), t(".user-avatar").addClass("pull-right"))
        }
        n(), t(window).on("load resize", (function () {
            n()
        })), t("#dl-menu").dlmenu({
            animationClasses: {
                classin: "dl-animate-in-2",
                classout: "dl-animate-out-2"
            }
        })
    }))
}, function (t, e) {
    ! function (t, e, n) {
        "use strict";
        var i = e.Modernizr,
            r = t("body");
        t.DLMenu = function (e, n) {
            this.$el = t(n), this._init(e)
        }, t.DLMenu.defaults = {
            animationClasses: {
                classin: "dl-animate-in-1",
                classout: "dl-animate-out-1"
            },
            onLevelClick: function (t, e) {
                return !1
            },
            onLinkClick: function (t, e) {
                return !1
            }
        }, t.DLMenu.prototype = {
            _init: function (e) {
                this.options = t.extend(!0, {}, t.DLMenu.defaults, e), this._config();
                this.animEndEventName = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd",
                    msAnimation: "MSAnimationEnd",
                    animation: "animationend"
                } [i.prefixed("animation")] + ".dlmenu", this.transEndEventName = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                } [i.prefixed("transition")] + ".dlmenu", this.supportAnimations = i.cssanimations, this.supportTransitions = i.csstransitions, this._initEvents()
            },
            _config: function () {
                this.open = !1, this.$trigger = t(".dl-trigger"), this.$menu = this.$el.children("ul.dl-menu"), this.$menuitems = this.$menu.find("li:not(.dl-back)"), this.$el.find("ul.dl-submenu,ul.sub-menu").prepend('<li class="dl-back"><a href="#">back</a></li>'), this.$back = this.$menu.find("li.dl-back")
            },
            _initEvents: function () {
                var e = this;
                this.$trigger.on("click.dlmenu", (function () {
                    return e.open ? e._closeMenu() : e._openMenu(), !1
                })), this.$menuitems.on("click.dlmenu", (function (n) {
                    t(this).find("a").slice(0, 1).data("toggle");
                    var i = t(this),
                        r = i.children("ul.dl-submenu");
                    if (r.length > 0) {
                        var o = r.clone().css("opacity", 0).insertAfter(e.$menu),
                            s = function () {
                                e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classout).addClass("dl-subview"), i.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"), o.remove()
                            };
                        return setTimeout((function () {
                            o.addClass(e.options.animationClasses.classin), e.$menu.addClass(e.options.animationClasses.classout), e.supportAnimations ? e.$menu.on(e.animEndEventName, s) : s.call(), e.options.onLevelClick(i, i.children("a:first").text())
                        })), !1
                    }
                    e.options.onLinkClick(i, n)
                })), this.$back.on("click.dlmenu", (function (n) {
                    var i = t(this),
                        r = i.parents("ul.dl-submenu:first"),
                        o = r.parent(),
                        s = r.clone().insertAfter(e.$menu),
                        a = function () {
                            e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classin), s.remove()
                        };
                    return setTimeout((function () {
                        s.addClass(e.options.animationClasses.classout), e.$menu.addClass(e.options.animationClasses.classin), e.supportAnimations ? e.$menu.on(e.animEndEventName, a) : a.call(), o.removeClass("dl-subviewopen");
                        var t = i.parents(".dl-subview:first");
                        t.is("li") && t.addClass("dl-subviewopen"), t.removeClass("dl-subview")
                    })), !1
                }))
            },
            closeMenu: function () {
                this.open && this._closeMenu()
            },
            _closeMenu: function () {
                var t = this,
                    e = function () {
                        t.$menu.off(t.transEndEventName), t._resetMenu()
                    };
                this.$menu.removeClass("dl-menuopen"), this.$menu.addClass("dl-menu-toggle"), this.$trigger.removeClass("dl-active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, e) : e.call(), this.open = !1
            },
            openMenu: function () {
                this.open || this._openMenu()
            },
            _openMenu: function () {
                var e = this;
                r.off("click").on("click.dlmenu", (function () {
                    e._closeMenu()
                })), this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName, (function () {
                    t(this).removeClass("dl-menu-toggle")
                })), this.$trigger.addClass("dl-active"), this.open = !0
            },
            _resetMenu: function () {
                this.$menu.removeClass("dl-subview"), this.$menuitems.removeClass("dl-subview dl-subviewopen")
            }
        };
        var o = function (t) {
            e.console && e.console.error(t)
        };
        t.fn.dlmenu = function (e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each((function () {
                    var i = t.data(this, "dlmenu");
                    i ? t.isFunction(i[e]) && "_" !== e.charAt(0) ? i[e].apply(i, n) : o("no such method '" + e + "' for dlmenu instance") : o("cannot call methods on dlmenu prior to initialization; attempted to call method '" + e + "'")
                }))
            } else this.each((function () {
                var n = t.data(this, "dlmenu");
                n ? n._init() : n = t.data(this, "dlmenu", new t.DLMenu(e, this))
            }));
            return this
        }
    }(jQuery, window)
}]);