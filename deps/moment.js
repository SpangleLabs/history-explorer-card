var __f = function (e, t) {
    window.HXLocal_moment = t()
};
__f(this, function () {
    "use strict";
    var e;

    function h() {
        return e.apply(null, arguments)
    }

    function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function o(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function r(e) {
        return void 0 === e
    }

    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function s(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function i(e, t) {
        for (var n = [], s = 0; s < e.length; ++s) n.push(t(e[s], s));
        return n
    }

    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function l(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
        return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function d(e, t, n, s) {
        return Yt(e, t, n, s, !0).utc()
    }

    function f(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    var m = Array.prototype.some || function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1
    };

    function _(e) {
        if (null == e._isValid) {
            var t = f(e), n = m.call(t.parsedDateParts, function (e) {
                    return null != e
                }),
                n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
            e._isValid = n
        }
        return e._isValid
    }

    function y(e) {
        var t = d(NaN);
        return null != e ? l(f(t), e) : f(t).userInvalidated = !0, t
    }

    var g = h.momentProperties = [];

    function w(e, t) {
        var n, s, i;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), 0 < g.length) for (n = 0; n < g.length; n++) r(i = t[s = g[n]]) || (e[s] = i);
        return e
    }

    var t = !1;

    function p(e) {
        w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, h.updateOffset(this), t = !1)
    }

    function v(e) {
        return e instanceof p || null != e && null != e._isAMomentObject
    }

    function M(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function S(e) {
        var t = +e, e = 0;
        return e = 0 != t && isFinite(t) ? M(t) : e
    }

    function k(e, t, n) {
        for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++) (n && e[a] !== t[a] || !n && S(e[a]) !== S(t[a])) && r++;
        return r + i
    }

    function D(e) {
        !1 === h.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function n(i, r) {
        var a = !0;
        return l(function () {
            if (null != h.deprecationHandler && h.deprecationHandler(null, i), a) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "", "object" == typeof arguments[n]) {
                        for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[n];
                    t.push(e)
                }
                D(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }

    var Y = {};

    function O(e, t) {
        null != h.deprecationHandler && h.deprecationHandler(e, t), Y[e] || (D(t), Y[e] = !0)
    }

    function T(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function x(e, t) {
        var n, s = l({}, e);
        for (n in t) c(t, n) && (o(e[n]) && o(t[n]) ? (s[n] = {}, l(s[n], e[n]), l(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) c(e, n) && !c(t, n) && o(e[n]) && (s[n] = l({}, s[n]));
        return s
    }

    function b(e) {
        null != e && this.set(e)
    }

    h.suppressDeprecationWarnings = !1, h.deprecationHandler = null;
    var P = Object.keys || function (e) {
        var t, n = [];
        for (t in e) c(e, t) && n.push(t);
        return n
    };
    var W = {};

    function R(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }

    function C(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }

    function F(e) {
        var t, n, s = {};
        for (n in e) c(e, n) && (t = C(n)) && (s[t] = e[n]);
        return s
    }

    var U = {};

    function H(e, t) {
        U[e] = t
    }

    function L(t, n) {
        return function (e) {
            return null != e ? (V(this, t, e), h.updateOffset(this, n), this) : G(this, t)
        }
    }

    function G(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function V(e, t, n) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function N(e, t, n) {
        var s = "" + Math.abs(e);
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - s.length)).toString().substr(1) + s
    }

    var j = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, A = {}, I = {};

    function Z(e, t, n, s) {
        var i = "string" == typeof s ? function () {
            return this[s]()
        } : s;
        e && (I[e] = i), t && (I[t[0]] = function () {
            return N(i.apply(this, arguments), t[1], t[2])
        }), n && (I[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }

    function z(e, t) {
        return e.isValid() ? (t = $(t, e.localeData()), A[t] = A[t] || function (s) {
            for (var e, i = s.match(j), t = 0, r = i.length; t < r; t++) I[i[t]] ? i[t] = I[i[t]] : i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function (e) {
                for (var t = "", n = 0; n < r; n++) t += T(i[n]) ? i[n].call(e, s) : i[n];
                return t
            }
        }(t), A[t](e)) : e.localeData().invalidDate()
    }

    function $(e, t) {
        var n = 5;

        function s(e) {
            return t.longDateFormat(e) || e
        }

        for (E.lastIndex = 0; 0 <= n && E.test(e);) e = e.replace(E, s), E.lastIndex = 0, --n;
        return e
    }

    var q = /\d/, J = /\d\d/, B = /\d{3}/, Q = /\d{4}/, X = /[+-]?\d{6}/, K = /\d\d?/, ee = /\d\d\d\d?/,
        te = /\d\d\d\d\d\d?/, ne = /\d{1,3}/, se = /\d{1,4}/, ie = /[+-]?\d{1,6}/, re = /\d+/, ae = /[+-]?\d+/,
        oe = /Z|[+-]\d\d:?\d\d/gi, ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
        le = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        de = {};

    function he(e, n, s) {
        de[e] = T(n) ? n : function (e, t) {
            return e && s ? s : n
        }
    }

    function ce(e, t) {
        return c(de, e) ? de[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
            return t || n || s || i
        })))
    }

    function fe(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    var me = {};

    function _e(e, n) {
        var t, s = n;
        for ("string" == typeof e && (e = [e]), u(n) && (s = function (e, t) {
            t[n] = S(e)
        }), t = 0; t < e.length; t++) me[e[t]] = s
    }

    function ye(e, i) {
        _e(e, function (e, t, n, s) {
            n._w = n._w || {}, i(e, n._w, n, s)
        })
    }

    var ge = 0, we = 1, pe = 2, ve = 3, Me = 4, Se = 5, ke = 6, De = 7, Ye = 8,
        Oe = Array.prototype.indexOf || function (e) {
            for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1
        }, Te = Oe;

    function xe(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    Z("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), Z("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), Z("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), R("month", "M"), H("month", 8), he("M", K), he("MM", K, J), he("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    }), he("MMMM", function (e, t) {
        return t.monthsRegex(e)
    }), _e(["M", "MM"], function (e, t) {
        t[we] = S(e) - 1
    }), _e(["MMM", "MMMM"], function (e, t, n, s) {
        s = n._locale.monthsParse(e, s, n._strict);
        null != s ? t[we] = s : f(n).invalidMonth = e
    });
    var be = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var We = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Re(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = S(t); else if (!u(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }

    function Ce(e) {
        return null != e ? (Re(this, e), h.updateOffset(this, !0), this) : G(this, "Month")
    }

    var Fe = le;
    var Ue = le;

    function He() {
        function e(e, t) {
            return t.length - e.length
        }

        for (var t, n = [], s = [], i = [], r = 0; r < 12; r++) t = d([2e3, r]), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, ""));
        for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++) n[r] = fe(n[r]), s[r] = fe(s[r]);
        for (r = 0; r < 24; r++) i[r] = fe(i[r]);
        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function Le(e) {
        return Ge(e) ? 366 : 365
    }

    function Ge(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    Z("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), Z(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), H("year", 1), he("Y", ae), he("YY", K, J), he("YYYY", se, Q), he("YYYYY", ie, X), he("YYYYYY", ie, X), _e(["YYYYY", "YYYYYY"], ge), _e("YYYY", function (e, t) {
        t[ge] = 2 === e.length ? h.parseTwoDigitYear(e) : S(e)
    }), _e("YY", function (e, t) {
        t[ge] = h.parseTwoDigitYear(e)
    }), _e("Y", function (e, t) {
        t[ge] = parseInt(e, 10)
    }), h.parseTwoDigitYear = function (e) {
        return S(e) + (68 < S(e) ? 1900 : 2e3)
    };
    var Ve = L("FullYear", !0);

    function Ne(e, t, n, s, i, r, a) {
        a = new Date(e, t, n, s, i, r, a);
        return e < 100 && 0 <= e && isFinite(a.getFullYear()) && a.setFullYear(e), a
    }

    function je(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
    }

    function Ee(e, t, n) {
        n = 7 + t - n;
        return n - (7 + je(e, 0, n).getUTCDay() - t) % 7 - 1
    }

    function Ae(e, t, n, s, i) {
        var r, i = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ee(e, s, i),
            i = i <= 0 ? Le(r = e - 1) + i : i > Le(e) ? (r = e + 1, i - Le(e)) : (r = e, i);
        return {year: r, dayOfYear: i}
    }

    function Ie(e, t, n) {
        var s, i, r = Ee(e.year(), t, n), r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return r < 1 ? s = r + Ze(i = e.year() - 1, t, n) : r > Ze(e.year(), t, n) ? (s = r - Ze(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), {
            week: s,
            year: i
        }
    }

    function Ze(e, t, n) {
        var s = Ee(e, t, n), n = Ee(e + 1, t, n);
        return (Le(e) - s + n) / 7
    }

    Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), H("week", 5), H("isoWeek", 5), he("w", K), he("ww", K, J), he("W", K), he("WW", K, J), ye(["w", "ww", "W", "WW"], function (e, t, n, s) {
        t[s.substr(0, 1)] = S(e)
    });
    Z("d", 0, "do", "day"), Z("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), Z("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), Z("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), he("d", K), he("e", K), he("E", K), he("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
    }), he("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
    }), he("dddd", function (e, t) {
        return t.weekdaysRegex(e)
    }), ye(["dd", "ddd", "dddd"], function (e, t, n, s) {
        s = n._locale.weekdaysParse(e, s, n._strict);
        null != s ? t.d = s : f(n).invalidWeekday = e
    }), ye(["d", "e", "E"], function (e, t, n, s) {
        t[s] = S(e)
    });
    var ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var qe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Je = le;
    var Be = le;
    var Qe = le;

    function Xe() {
        function e(e, t) {
            return t.length - e.length
        }

        for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++) s = d([2e3, 1]).day(u), t = this.weekdaysMin(s, ""), n = this.weekdaysShort(s, ""), s = this.weekdays(s, ""), i.push(t), r.push(n), a.push(s), o.push(t), o.push(n), o.push(s);
        for (i.sort(e), r.sort(e), a.sort(e), o.sort(e), u = 0; u < 7; u++) r[u] = fe(r[u]), a[u] = fe(a[u]), o[u] = fe(o[u]);
        this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function Ke() {
        return this.hours() % 12 || 12
    }

    function et(e, t) {
        Z(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function tt(e, t) {
        return t._meridiemParse
    }

    Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, Ke), Z("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), Z("hmm", 0, 0, function () {
        return "" + Ke.apply(this) + N(this.minutes(), 2)
    }), Z("hmmss", 0, 0, function () {
        return "" + Ke.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
    }), Z("Hmm", 0, 0, function () {
        return "" + this.hours() + N(this.minutes(), 2)
    }), Z("Hmmss", 0, 0, function () {
        return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
    }), et("a", !0), et("A", !1), R("hour", "h"), H("hour", 13), he("a", tt), he("A", tt), he("H", K), he("h", K), he("k", K), he("HH", K, J), he("hh", K, J), he("kk", K, J), he("hmm", ee), he("hmmss", te), he("Hmm", ee), he("Hmmss", te), _e(["H", "HH"], ve), _e(["k", "kk"], function (e, t, n) {
        e = S(e);
        t[ve] = 24 === e ? 0 : e
    }), _e(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), _e(["h", "hh"], function (e, t, n) {
        t[ve] = S(e), f(n).bigHour = !0
    }), _e("hmm", function (e, t, n) {
        var s = e.length - 2;
        t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s)), f(n).bigHour = !0
    }), _e("hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s, 2)), t[Se] = S(e.substr(i)), f(n).bigHour = !0
    }), _e("Hmm", function (e, t, n) {
        var s = e.length - 2;
        t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s))
    }), _e("Hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[ve] = S(e.substr(0, s)), t[Me] = S(e.substr(s, 2)), t[Se] = S(e.substr(i))
    });
    var nt, Oe = L("Hours", !0), st = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Pe,
        monthsShort: We,
        week: {dow: 0, doy: 6},
        weekdays: ze,
        weekdaysMin: qe,
        weekdaysShort: $e,
        meridiemParse: /[ap]\.?m?\.?/i
    }, it = {}, rt = {};

    function at(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function ot(e) {
        var t;
        if (!it[e] && "undefined" != typeof module && module && module.exports) try {
            t = nt._abbr, require("./locale/" + e), ut(t)
        } catch (e) {
        }
        return it[e]
    }

    function ut(e, t) {
        var n;
        return (nt = e && (n = r(t) ? dt(e) : lt(e, t)) ? n : nt)._abbr
    }

    function lt(e, t) {
        if (null === t) return delete it[e], null;
        var n = st;
        if (t.abbr = e, null != it[e]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = it[e]._config; else if (null != t.parentLocale) {
            if (null == it[t.parentLocale]) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
                name: e,
                config: t
            }), null;
            n = it[t.parentLocale]._config
        }
        return it[e] = new b(x(n, t)), rt[e] && rt[e].forEach(function (e) {
            lt(e.name, e.config)
        }), ut(e), it[e]
    }

    function dt(e) {
        var t;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return nt;
        if (!a(e)) {
            if (t = ot(e)) return t;
            e = [e]
        }
        return function (e) {
            for (var t, n, s, i, r = 0; r < e.length;) {
                for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
                    if (s = ot(i.slice(0, t).join("-"))) return s;
                    if (n && n.length >= t && k(i, n, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return null
        }(e)
    }

    function ht(e) {
        var t = e._a;
        return t && -2 === f(e).overflow && (t = t[we] < 0 || 11 < t[we] ? we : t[pe] < 1 || t[pe] > xe(t[ge], t[we]) ? pe : t[ve] < 0 || 24 < t[ve] || 24 === t[ve] && (0 !== t[Me] || 0 !== t[Se] || 0 !== t[ke]) ? ve : t[Me] < 0 || 59 < t[Me] ? Me : t[Se] < 0 || 59 < t[Se] ? Se : t[ke] < 0 || 999 < t[ke] ? ke : -1, f(e)._overflowDayOfYear && (t < ge || pe < t) && (t = pe), f(e)._overflowWeeks && -1 === t && (t = De), f(e)._overflowWeekday && -1 === t && (t = Ye), f(e).overflow = t), e
    }

    var ct = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ft = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = /Z|[+-]\d\d(?::?\d\d)?/,
        _t = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        gt = /^\/?Date\((\-?\d+)/i;

    function wt(e) {
        var t, n, s, i, r, a, o = e._i, u = ct.exec(o) || ft.exec(o);
        if (u) {
            for (f(e).iso = !0, t = 0, n = _t.length; t < n; t++) if (_t[t][1].exec(u[1])) {
                i = _t[t][0], s = !1 !== _t[t][2];
                break
            }
            if (null != i) {
                if (u[3]) {
                    for (t = 0, n = yt.length; t < n; t++) if (yt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + yt[t][0];
                        break
                    }
                    if (null == r) return void (e._isValid = !1)
                }
                if (s || null == r) {
                    if (u[4]) {
                        if (!mt.exec(u[4])) return void (e._isValid = !1);
                        a = "Z"
                    }
                    e._f = i + (r || "") + (a || ""), kt(e)
                } else e._isValid = !1
            } else e._isValid = !1
        } else e._isValid = !1
    }

    var pt = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

    function vt(e) {
        var t, n, s, i, r, a = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            }, o = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""),
            u = pt.exec(o);
        if (u) {
            if (t = u[1] ? "ddd" + (5 === u[1].length ? ", " : " ") : "", n = "D MMM " + (10 < u[2].length ? "YYYY " : "YY "), s = "HH:mm" + (u[4] ? ":ss" : ""), u[1]) {
                o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(u[2]).getDay()];
                if (u[1].substr(0, 3) !== o) return f(e).weekdayMismatch = !0, void (e._isValid = !1)
            }
            switch (u[5].length) {
                case 2:
                    i = 0 === r ? " +0000" : ((r = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(u[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + r).replace(/^-?/, "0").match(/..$/)[0] + "00";
                    break;
                case 4:
                    i = a[u[5]];
                    break;
                default:
                    i = a[" GMT"]
            }
            u[5] = i, e._i = u.splice(1).join(""), e._f = t + n + s + " ZZ", kt(e), f(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function Mt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function St(e) {
        var t, n, s, i, r = [];
        if (!e._d) {
            for (s = e, i = new Date(h.now()), n = s._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[pe] && null == e._a[we] && function (e) {
                var t, n, s, i, r, a, o;
                {
                    var u;
                    null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, a = 4, n = Mt(t.GG, e._a[ge], Ie(Ot(), 1, 4).year), s = Mt(t.W, 1), ((i = Mt(t.E, 1)) < 1 || 7 < i) && (o = !0)) : (r = e._locale._week.dow, a = e._locale._week.doy, u = Ie(Ot(), r, a), n = Mt(t.gg, e._a[ge], u.year), s = Mt(t.w, u.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (o = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (o = !0)) : i = r)
                }
                s < 1 || s > Ze(n, r, a) ? f(e)._overflowWeeks = !0 : null != o ? f(e)._overflowWeekday = !0 : (a = Ae(n, s, i, r, a), e._a[ge] = a.year, e._dayOfYear = a.dayOfYear)
            }(e), null != e._dayOfYear && (i = Mt(e._a[ge], n[ge]), (e._dayOfYear > Le(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), i = je(i, 0, e._dayOfYear), e._a[we] = i.getUTCMonth(), e._a[pe] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = n[t];
            for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ve] && 0 === e._a[Me] && 0 === e._a[Se] && 0 === e._a[ke] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? je : Ne).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24)
        }
    }

    function kt(e) {
        if (e._f !== h.ISO_8601) if (e._f !== h.RFC_2822) {
            e._a = [], f(e).empty = !0;
            for (var t, n, s, i, r, a = "" + e._i, o = a.length, u = 0, l = $(e._f, e._locale).match(j) || [], d = 0; d < l.length; d++) n = l[d], (t = (a.match(ce(n, e)) || [])[0]) && (0 < (i = a.substr(0, a.indexOf(t))).length && f(e).unusedInput.push(i), a = a.slice(a.indexOf(t) + t.length), u += t.length), I[n] ? (t ? f(e).empty = !1 : f(e).unusedTokens.push(n), s = n, r = e, null != (i = t) && c(me, s) && me[s](i, r._a, r, s)) : e._strict && !t && f(e).unusedTokens.push(n);
            f(e).charsLeftOver = o - u, 0 < a.length && f(e).unusedInput.push(a), e._a[ve] <= 12 && !0 === f(e).bigHour && 0 < e._a[ve] && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[ve] = function (e, t, n) {
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((n = e.isPM(n)) && t < 12 && (t += 12), t = n || 12 !== t ? t : 0) : t
            }(e._locale, e._a[ve], e._meridiem), St(e), ht(e)
        } else vt(e); else wt(e)
    }

    function Dt(e) {
        var t = e._i, n = e._f;
        return e._locale = e._locale || dt(e._l), null === t || void 0 === n && "" === t ? y({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new p(ht(t)) : (s(t) ? e._d = t : a(n) ? function (e) {
            var t, n, s, i, r;
            if (0 === e._f.length) return f(e).invalidFormat = !0, e._d = new Date(NaN);
            for (i = 0; i < e._f.length; i++) r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], kt(t), _(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == s || r < s) && (s = r, n = t));
            l(e, n || t)
        }(e) : n ? kt(e) : r(n = (t = e)._i) ? t._d = new Date(h.now()) : s(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) {
            var t = gt.exec(e._i);
            null === t ? (wt(e), !1 === e._isValid && (delete e._isValid, vt(e), !1 === e._isValid && (delete e._isValid, h.createFromInputFallback(e)))) : e._d = new Date(+t[1])
        }(t) : a(n) ? (t._a = i(n.slice(0), function (e) {
            return parseInt(e, 10)
        }), St(t)) : o(n) ? function (e) {
            var t;
            e._d || (t = F(e._i), e._a = i([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10)
            }), St(e))
        }(t) : u(n) ? t._d = new Date(n) : h.createFromInputFallback(t), _(e) || (e._d = null), e))
    }

    function Yt(e, t, n, s, i) {
        var r = {};
        return !0 !== n && !1 !== n || (s = n, n = void 0), (o(e) && function (e) {
            for (var t in e) return;
            return 1
        }(e) || a(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = n, r._i = e, r._f = t, r._strict = s, (r = new p(ht(Dt(r = r))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
    }

    function Ot(e, t, n, s) {
        return Yt(e, t, n, s, !1)
    }

    h.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), h.ISO_8601 = function () {
    }, h.RFC_2822 = function () {
    };
    le = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : y()
    }), ee = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Ot.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : y()
    });

    function Tt(e, t) {
        var n, s;
        if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return Ot();
        for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }

    var xt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function bt(e) {
        var t = F(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || 0, a = t.day || 0,
            o = t.hour || 0, u = t.minute || 0, l = t.second || 0, e = t.millisecond || 0;
        this._isValid = function (e) {
            for (var t in e) if (-1 === xt.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, s = 0; s < xt.length; ++s) if (e[xt[s]]) {
                if (n) return !1;
                parseFloat(e[xt[s]]) !== S(e[xt[s]]) && (n = !0)
            }
            return !0
        }(t), this._milliseconds = +e + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = dt(), this._bubble()
    }

    function Pt(e) {
        return e instanceof bt
    }

    function Wt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Rt(e, n) {
        Z(e, 0, 0, function () {
            var e = this.utcOffset(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + N(~~(e / 60), 2) + n + N(~~e % 60, 2)
        })
    }

    Rt("Z", ":"), Rt("ZZ", ""), he("Z", ue), he("ZZ", ue), _e(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Ft(ue, e)
    });
    var Ct = /([\+\-]|\d\d)/gi;

    function Ft(e, t) {
        t = (t || "").match(e);
        if (null === t) return null;
        e = ((t[t.length - 1] || []) + "").match(Ct) || ["-", 0, 0], t = 60 * e[1] + S(e[2]);
        return 0 === t ? 0 : "+" === e[0] ? t : -t
    }

    function Ut(e, t) {
        var n;
        return t._isUTC ? (n = t.clone(), t = (v(e) || s(e) ? e : Ot(e)).valueOf() - n.valueOf(), n._d.setTime(n._d.valueOf() + t), h.updateOffset(n, !1), n) : Ot(e).local()
    }

    function Ht(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Lt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    h.updateOffset = function () {
    };
    var Gt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Vt = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function Nt(e, t) {
        var n, s = e, i = null;
        return Pt(e) ? s = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : u(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (i = Gt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
            y: 0,
            d: S(i[pe]) * n,
            h: S(i[ve]) * n,
            m: S(i[Me]) * n,
            s: S(i[Se]) * n,
            ms: S(Wt(1e3 * i[ke])) * n
        }) : (i = Vt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
            y: jt(i[2], n),
            M: jt(i[3], n),
            w: jt(i[4], n),
            d: jt(i[5], n),
            h: jt(i[6], n),
            m: jt(i[7], n),
            s: jt(i[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (n = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = Ut(t, e), e.isBefore(t) ? n = Et(e, t) : ((n = Et(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(Ot(s.from), Ot(s.to)), (s = {}).ms = n.milliseconds, s.M = n.months), s = new bt(s), Pt(e) && c(e, "_locale") && (s._locale = e._locale), s
    }

    function jt(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }

    function Et(e, t) {
        var n = {milliseconds: 0, months: 0};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function At(s, i) {
        return function (e, t) {
            var n;
            return null === t || isNaN(+t) || (O(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), It(this, Nt(e = "string" == typeof e ? +e : e, t), s), this
        }
    }

    function It(e, t, n, s) {
        var i = t._milliseconds, r = Wt(t._days), t = Wt(t._months);
        e.isValid() && (s = null == s || s, i && e._d.setTime(e._d.valueOf() + i * n), r && V(e, "Date", G(e, "Date") + r * n), t && Re(e, G(e, "Month") + t * n), s && h.updateOffset(e, r || t))
    }

    Nt.fn = bt.prototype, Nt.invalid = function () {
        return Nt(NaN)
    };
    te = At(1, "add"), Pe = At(-1, "subtract");

    function Zt(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = dt(e)) && (this._locale = e), this)
    }

    h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    We = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function zt() {
        return this._locale
    }

    function $t(e, t) {
        Z(0, [e, e.length], 0, t)
    }

    function qt(e, t, n, s, i) {
        var r;
        return null == e ? Ie(this, s, i).year : (r = Ze(e, s, i), function (e, t, n, s, i) {
            i = Ae(e, t, n, s, i), i = je(i.year, 0, i.dayOfYear);
            return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
        }.call(this, e, t = r < t ? r : t, n, s, i))
    }

    Z(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), Z(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), $t("gggg", "weekYear"), $t("ggggg", "weekYear"), $t("GGGG", "isoWeekYear"), $t("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), he("G", ae), he("g", ae), he("GG", K, J), he("gg", K, J), he("GGGG", se, Q), he("gggg", se, Q), he("GGGGG", ie, X), he("ggggg", ie, X), ye(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
        t[s.substr(0, 2)] = S(e)
    }), ye(["gg", "GG"], function (e, t, n, s) {
        t[s] = h.parseTwoDigitYear(e)
    }), Z("Q", 0, "Qo", "quarter"), R("quarter", "Q"), H("quarter", 7), he("Q", q), _e("Q", function (e, t) {
        t[we] = 3 * (S(e) - 1)
    }), Z("D", ["DD", 2], "Do", "date"), R("date", "D"), H("date", 9), he("D", K), he("DD", K, J), he("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), _e(["D", "DD"], pe), _e("Do", function (e, t) {
        t[pe] = S(e.match(K)[0])
    });
    ze = L("Date", !0);
    Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), H("dayOfYear", 4), he("DDD", ne), he("DDDD", B), _e(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = S(e)
    }), Z("m", ["mm", 2], 0, "minute"), R("minute", "m"), H("minute", 14), he("m", K), he("mm", K, J), _e(["m", "mm"], Me);
    qe = L("Minutes", !1);
    Z("s", ["ss", 2], 0, "second"), R("second", "s"), H("second", 15), he("s", K), he("ss", K, J), _e(["s", "ss"], Se);
    var Jt, $e = L("Seconds", !1);
    for (Z("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), Z(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), Z(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), Z(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), Z(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), Z(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), Z(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), R("millisecond", "ms"), H("millisecond", 16), he("S", ne, q), he("SS", ne, J), he("SSS", ne, B), Jt = "SSSS"; Jt.length <= 9; Jt += "S") he(Jt, re);

    function Bt(e, t) {
        t[ke] = S(1e3 * ("0." + e))
    }

    for (Jt = "S"; Jt.length <= 9; Jt += "S") _e(Jt, Bt);
    se = L("Milliseconds", !1);
    Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
    Q = p.prototype;

    function Qt(e) {
        return e
    }

    Q.add = te, Q.calendar = function (e, t) {
        var n = e || Ot(), e = Ut(n, this).startOf("day"), e = h.calendarFormat(this, e) || "sameElse",
            t = t && (T(t[e]) ? t[e].call(this, n) : t[e]);
        return this.format(t || this.localeData().calendar(e, this, Ot(n)))
    }, Q.clone = function () {
        return new p(this)
    }, Q.diff = function (e, t, n) {
        var s, i;
        return this.isValid() && (s = Ut(e, this)).isValid() ? (e = 6e4 * (s.utcOffset() - this.utcOffset()), "year" === (t = C(t)) || "month" === t || "quarter" === t ? (i = function (e, t) {
            var n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months");
            i = t - i < 0 ? (n = e.clone().add(s - 1, "months"), (t - i) / (i - n)) : (n = e.clone().add(1 + s, "months"), (t - i) / (n - i));
            return -(s + i) || 0
        }(this, s), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (s = this - s, i = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - e) / 864e5 : "week" === t ? (s - e) / 6048e5 : s), n ? i : M(i)) : NaN
    }, Q.endOf = function (e) {
        return void 0 === (e = C(e)) || "millisecond" === e ? this : this.startOf(e = "date" === e ? "day" : e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }, Q.format = function (e) {
        return e = e || (this.isUtc() ? h.defaultFormatUtc : h.defaultFormat), e = z(this, e), this.localeData().postformat(e)
    }, Q.from = function (e, t) {
        return this.isValid() && (v(e) && e.isValid() || Ot(e).isValid()) ? Nt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Q.fromNow = function (e) {
        return this.from(Ot(), e)
    }, Q.to = function (e, t) {
        return this.isValid() && (v(e) && e.isValid() || Ot(e).isValid()) ? Nt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Q.toNow = function (e) {
        return this.to(Ot(), e)
    }, Q.get = function (e) {
        return T(this[e = C(e)]) ? this[e]() : this
    }, Q.invalidAt = function () {
        return f(this).overflow
    }, Q.isAfter = function (e, t) {
        return e = v(e) ? e : Ot(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(r(t) ? "millisecond" : t)) ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }, Q.isBefore = function (e, t) {
        return e = v(e) ? e : Ot(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(r(t) ? "millisecond" : t)) ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }, Q.isBetween = function (e, t, n, s) {
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }, Q.isSame = function (e, t) {
        var e = v(e) ? e : Ot(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = C(t || "millisecond")) ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }, Q.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, Q.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, Q.isValid = function () {
        return _(this)
    }, Q.lang = We, Q.locale = Zt, Q.localeData = zt, Q.max = ee, Q.min = le, Q.parsingFlags = function () {
        return l({}, f(this))
    }, Q.set = function (e, t) {
        if ("object" == typeof e) for (var n = function (e) {
            var t, n = [];
            for (t in e) n.push({unit: t, priority: U[t]});
            return n.sort(function (e, t) {
                return e.priority - t.priority
            }), n
        }(e = F(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]); else if (T(this[e = C(e)])) return this[e](t);
        return this
    }, Q.startOf = function (e) {
        switch (e = C(e)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }, Q.subtract = Pe, Q.toArray = function () {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, Q.toObject = function () {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, Q.toDate = function () {
        return new Date(this.valueOf())
    }, Q.toISOString = function () {
        if (!this.isValid()) return null;
        var e = this.clone().utc();
        return e.year() < 0 || 9999 < e.year() ? z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, Q.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment", t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        return this.format(n + e + "-MM-DD[T]HH:mm:ss.SSS" + (t + '[")]'))
    }, Q.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, Q.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, Q.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, Q.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, Q.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, Q.year = Ve, Q.isLeapYear = function () {
        return Ge(this.year())
    }, Q.weekYear = function (e) {
        return qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, Q.isoWeekYear = function (e) {
        return qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, Q.quarter = Q.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, Q.month = Ce, Q.daysInMonth = function () {
        return xe(this.year(), this.month())
    }, Q.week = Q.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Q.isoWeek = Q.isoWeeks = function (e) {
        var t = Ie(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Q.weeksInYear = function () {
        var e = this.localeData()._week;
        return Ze(this.year(), e.dow, e.doy)
    }, Q.isoWeeksInYear = function () {
        return Ze(this.year(), 1, 4)
    }, Q.date = ze, Q.day = Q.days = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s
    }, Q.weekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, Q.isoWeekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var t = (t = e, e = this.localeData(), "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? t : t - 7)
    }, Q.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, Q.hour = Q.hours = Oe, Q.minute = Q.minutes = qe, Q.second = Q.seconds = $e, Q.millisecond = Q.milliseconds = se, Q.utcOffset = function (e, t, n) {
        var s, i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? i : Ht(this);
        if ("string" == typeof e) {
            if (null === (e = Ft(ue, e))) return this
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (s = Ht(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? It(this, Nt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this
    }, Q.utc = function (e) {
        return this.utcOffset(0, e)
    }, Q.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ht(this), "m")), this
    }, Q.parseZone = function () {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Ft(oe, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
    }, Q.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? Ot(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, Q.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, Q.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, Q.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, Q.isUtc = Lt, Q.isUTC = Lt, Q.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, Q.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, Q.dates = n("dates accessor is deprecated. Use date instead.", ze), Q.months = n("months accessor is deprecated. Use month instead", Ce), Q.years = n("years accessor is deprecated. Use year instead", Ve), Q.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
    }), Q.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var e, t = {};
        return w(t, this), (t = Dt(t))._a ? (e = (t._isUTC ? d : Ot)(t._a), this._isDSTShifted = this.isValid() && 0 < k(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
    });
    ie = b.prototype;

    function Xt(e, t, n, s) {
        var i = dt(), t = d().set(s, t);
        return i[n](t, e)
    }

    function Kt(e, t, n) {
        if (u(e) && (t = e, e = void 0), e = e || "", null != t) return Xt(e, t, n, "month");
        for (var s = [], i = 0; i < 12; i++) s[i] = Xt(e, i, n, "month");
        return s
    }

    function en(e, t, n, s) {
        t = ("boolean" == typeof e ? u(t) && (n = t, t = void 0) : (t = e, e = !1, u(n = t) && (n = t, t = void 0)), t || "");
        var i = dt(), r = e ? i._week.dow : 0;
        if (null != n) return Xt(t, (n + r) % 7, s, "day");
        for (var a = [], o = 0; o < 7; o++) a[o] = Xt(t, (o + r) % 7, s, "day");
        return a
    }

    ie.calendar = function (e, t, n) {
        return T(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
    }, ie.longDateFormat = function (e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, ie.invalidDate = function () {
        return this._invalidDate
    }, ie.ordinal = function (e) {
        return this._ordinal.replace("%d", e)
    }, ie.preparse = Qt, ie.postformat = Qt, ie.relativeTime = function (e, t, n, s) {
        var i = this._relativeTime[n];
        return T(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }, ie.pastFuture = function (e, t) {
        return T(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
    }, ie.set = function (e) {
        var t, n;
        for (n in e) T(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, ie.months = function (e, t) {
        return e ? (a(this._months) ? this._months : this._months[(this._months.isFormat || be).test(t) ? "format" : "standalone"])[e.month()] : a(this._months) ? this._months : this._months.standalone
    }, ie.monthsShort = function (e, t) {
        return e ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[be.test(t) ? "format" : "standalone"])[e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, ie.monthsParse = function (e, t, n) {
        var s, i;
        if (this._monthsParseExact) return function (e, t, n) {
            var s, i, r, e = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = d([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, e)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, e)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, e)) || -1 !== (i = Te.call(this._longMonthsParse, e)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, e)) || -1 !== (i = Te.call(this._shortMonthsParse, e)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (i = d([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    }, ie.monthsRegex = function (e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, ie.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, ie.week = function (e) {
        return Ie(e, this._week.dow, this._week.doy).week
    }, ie.firstDayOfYear = function () {
        return this._week.doy
    }, ie.firstDayOfWeek = function () {
        return this._week.dow
    }, ie.weekdays = function (e, t) {
        return e ? (a(this._weekdays) ? this._weekdays : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"])[e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, ie.weekdaysMin = function (e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, ie.weekdaysShort = function (e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, ie.weekdaysParse = function (e, t, n) {
        var s, i;
        if (this._weekdaysParseExact) return function (e, t, n) {
            var s, i, r, e = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = d([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, e)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._shortWeekdaysParse, e)) || -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, e)) || -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._minWeekdaysParse, e)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, e)) || -1 !== (i = Te.call(this._weekdaysParse, e)) || -1 !== (i = Te.call(this._shortWeekdaysParse, e)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = d([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    }, ie.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, ie.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, ie.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, ie.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, ie.meridiem = function (e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ut("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === S(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }), h.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), h.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt);
    var tn = Math.abs;

    function nn(e, t, n, s) {
        n = Nt(t, n);
        return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble()
    }

    function sn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function rn(e) {
        return 4800 * e / 146097
    }

    function an(e) {
        return 146097 * e / 4800
    }

    function on(e) {
        return function () {
            return this.as(e)
        }
    }

    X = on("ms"), q = on("s"), J = on("m"), ne = on("h"), B = on("d"), te = on("w"), ee = on("M"), le = on("y");

    function un(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN
        }
    }

    Pe = un("milliseconds"), Oe = un("seconds"), qe = un("minutes"), $e = un("hours"), se = un("days"), ze = un("months"), Ve = un("years");
    var ln = Math.round, dn = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};

    function hn(e, t, n) {
        var s = Nt(e).abs(), i = ln(s.as("s")), r = ln(s.as("m")), a = ln(s.as("h")), o = ln(s.as("d")),
            u = ln(s.as("M")), s = ln(s.as("y")),
            s = (i <= dn.ss ? ["s", i] : i < dn.s && ["ss", i]) || r <= 1 && ["m"] || r < dn.m && ["mm", r] || a <= 1 && ["h"] || a < dn.h && ["hh", a] || o <= 1 && ["d"] || o < dn.d && ["dd", o] || u <= 1 && ["M"] || u < dn.M && ["MM", u] || s <= 1 && ["y"] || ["yy", s];
        return s[2] = t, s[3] = 0 < +e, s[4] = n, function (e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s)
        }.apply(null, s)
    }

    var cn = Math.abs;

    function fn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = cn(this._milliseconds) / 1e3, t = cn(this._days), n = cn(this._months), s = M(e / 60),
            i = M(s / 60);
        e %= 60, s %= 60;
        var r = M(n / 12), a = n %= 12, n = t, t = i, i = s, s = e, e = this.asSeconds();
        return e ? (e < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (n ? n + "D" : "") + (t || i || s ? "T" : "") + (t ? t + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
    }

    ie = bt.prototype;
    return ie.isValid = function () {
        return this._isValid
    }, ie.abs = function () {
        var e = this._data;
        return this._milliseconds = tn(this._milliseconds), this._days = tn(this._days), this._months = tn(this._months), e.milliseconds = tn(e.milliseconds), e.seconds = tn(e.seconds), e.minutes = tn(e.minutes), e.hours = tn(e.hours), e.months = tn(e.months), e.years = tn(e.years), this
    }, ie.add = function (e, t) {
        return nn(this, e, t, 1)
    }, ie.subtract = function (e, t) {
        return nn(this, e, t, -1)
    }, ie.as = function (e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = C(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + rn(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(an(this._months)), e) {
            case"week":
                return t / 7 + s / 6048e5;
            case"day":
                return t + s / 864e5;
            case"hour":
                return 24 * t + s / 36e5;
            case"minute":
                return 1440 * t + s / 6e4;
            case"second":
                return 86400 * t + s / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, ie.asMilliseconds = X, ie.asSeconds = q, ie.asMinutes = J, ie.asHours = ne, ie.asDays = B, ie.asWeeks = te, ie.asMonths = ee, ie.asYears = le, ie.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN
    }, ie._bubble = function () {
        var e = this._milliseconds, t = this._days, n = this._months, s = this._data;
        return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * sn(an(n) + t), n = t = 0), s.milliseconds = e % 1e3, e = M(e / 1e3), s.seconds = e % 60, e = M(e / 60), s.minutes = e % 60, e = M(e / 60), s.hours = e % 24, t += M(e / 24), n += e = M(rn(t)), t -= sn(an(e)), e = M(n / 12), n %= 12, s.days = t, s.months = n, s.years = e, this
    }, ie.get = function (e) {
        return e = C(e), this.isValid() ? this[e + "s"]() : NaN
    }, ie.milliseconds = Pe, ie.seconds = Oe, ie.minutes = qe, ie.hours = $e, ie.days = se, ie.weeks = function () {
        return M(this.days() / 7)
    }, ie.months = ze, ie.years = Ve, ie.humanize = function (e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(), n = hn(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }, ie.toISOString = fn, ie.toString = fn, ie.toJSON = fn, ie.locale = Zt, ie.localeData = zt, ie.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", fn), ie.lang = We, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), he("x", ae), he("X", /[+-]?\d+(\.\d{1,3})?/), _e("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), _e("x", function (e, t, n) {
        n._d = new Date(S(e))
    }), h.version = "2.18.1", e = Ot, h.fn = Q, h.min = function () {
        return Tt("isBefore", [].slice.call(arguments, 0))
    }, h.max = function () {
        return Tt("isAfter", [].slice.call(arguments, 0))
    }, h.now = function () {
        return Date.now ? Date.now() : +new Date
    }, h.utc = d, h.unix = function (e) {
        return Ot(1e3 * e)
    }, h.months = function (e, t) {
        return Kt(e, t, "months")
    }, h.isDate = s, h.locale = ut, h.invalid = y, h.duration = Nt, h.isMoment = v, h.weekdays = function (e, t, n) {
        return en(e, t, n, "weekdays")
    }, h.parseZone = function () {
        return Ot.apply(null, arguments).parseZone()
    }, h.localeData = dt, h.isDuration = Pt, h.monthsShort = function (e, t) {
        return Kt(e, t, "monthsShort")
    }, h.weekdaysMin = function (e, t, n) {
        return en(e, t, n, "weekdaysMin")
    }, h.defineLocale = lt, h.updateLocale = function (e, t) {
        var n;
        return null != t ? (n = st, (t = new b(t = x(n = null != it[e] ? it[e]._config : n, t))).parentLocale = it[e], it[e] = t, ut(e)) : null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]), it[e]
    }, h.locales = function () {
        return P(it)
    }, h.weekdaysShort = function (e, t, n) {
        return en(e, t, n, "weekdaysShort")
    }, h.normalizeUnits = C, h.relativeTimeRounding = function (e) {
        return void 0 === e ? ln : "function" == typeof e && (ln = e, !0)
    }, h.relativeTimeThreshold = function (e, t) {
        return void 0 !== dn[e] && (void 0 === t ? dn[e] : (dn[e] = t, "s" === e && (dn.ss = t - 1), !0))
    }, h.calendarFormat = function (e, t) {
        return (t = e.diff(t, "days", !0)) < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
    }, h.prototype = Q, h
});