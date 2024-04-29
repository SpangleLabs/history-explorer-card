!function (t) {
    "object" == typeof exports && "undefined" != typeof module
        ? module.exports = t()
        : "function" == typeof define && define.amd
            ? define([], t)
            : (
                "undefined" != typeof window
                    ? window
                    : "undefined" != typeof global
                        ? global
                        : "undefined" != typeof self
                            ? self
                            : this
            ).HXLocal_Chart = t()
}(function () {
    return function n(o, a, r) {
        function s(i, t) {
            if (!a[i]) {
                if (!o[i]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(i, !0);
                    if (l) return l(i, !0);
                    e = new Error("Cannot find module '" + i + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                e = a[i] = {exports: {}};
                o[i][0].call(e.exports, function (t) {
                    var e = o[i][1][t];
                    return s(e || t)
                }, e, e.exports, n, o, a, r)
            }
            return a[i].exports
        }

        for (var l = "function" == typeof require && require, t = 0; t < r.length; t++) s(r[t]);
        return s
    }({
        1: [function (t, e, i) {
        }, {}], 2: [function (t, e, i) {
            var a = t(6);

            function n(t) {
                if (t) {
                    var e = [0, 0, 0], i = 1;
                    if (n = t.match(/^#([a-fA-F0-9]{3})$/i)) for (var n = n[1], o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16); else if (n = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                        n = n[1];
                        for (o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16)
                    } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
                        i = parseFloat(n[4])
                    } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
                        i = parseFloat(n[4])
                    } else if (n = t.match(/(\w+)/)) {
                        if ("transparent" == n[1]) return [0, 0, 0, 0];
                        if (!(e = a[n[1]])) return
                    }
                    for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255);
                    return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function o(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        t = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(t) ? 1 : t, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        t = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(t) ? 1 : t, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function d(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function c(t) {
                t = t.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }

            e.exports = {
                getRgba: n, getHsla: o, getRgb: function (t) {
                    t = n(t);
                    return t && t.slice(0, 3)
                }, getHsl: function (t) {
                    t = o(t);
                    return t && t.slice(0, 3)
                }, getHwb: r, getAlpha: function (t) {
                    var e = n(t);
                    return (e = e || o(t)) || (e = r(t)) ? e[3] : void 0
                }, hexString: function (t) {
                    return "#" + c(t[0]) + c(t[1]) + c(t[2])
                }, rgbString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                    return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }, rgbaString: s, percentString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                    var i = Math.round(t[0] / 255 * 100), e = Math.round(t[1] / 255 * 100),
                        t = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + e + "%, " + t + "%)"
                }, percentaString: l, hslString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                    return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                }, hslaString: u, hwbString: function (t, e) {
                    void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                    return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                }, keyword: function (t) {
                    return f[t.slice(0, 3)]
                }
            };
            var h, f = {};
            for (h in a) f[a[h]] = h
        }, {6: 6}], 3: [function (t, e, i) {
            function r(t) {
                return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void ("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                var e
            }

            var d = t(5), n = t(2);
            (r.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                }, hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                }, alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                }, red: function (t) {
                    return this.setChannel("rgb", 0, t)
                }, green: function (t) {
                    return this.setChannel("rgb", 1, t)
                }, blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                }, hue: function (t) {
                    return t = t && ((t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                }, saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                }, lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                }, saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                }, whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                }, blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                }, value: function (t) {
                    return this.setChannel("hsv", 2, t)
                }, cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                }, magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                }, yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                }, black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                }, hexString: function () {
                    return n.hexString(this.values.rgb)
                }, rgbString: function () {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return n.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return n.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return n.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                }, luminosity: function () {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((.055 + n) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                }, contrast: function (t) {
                    var e = this.luminosity(), t = t.luminosity();
                    return t < e ? (e + .05) / (t + .05) : (t + .05) / (e + .05)
                }, level: function (t) {
                    t = this.contrast(t);
                    return 7.1 <= t ? "AAA" : 4.5 <= t ? "AA" : ""
                }, dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                }, lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                }, darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                }, saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                }, desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                }, whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                }, blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                }, greyscale: function () {
                    var t = this.values.rgb, t = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [t, t, t]), this
                }, clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                }, opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                }, rotate: function (t) {
                    var e = this.values.hsl, t = (e[0] + t) % 360;
                    return e[0] = t < 0 ? 360 + t : t, this.setValues("hsl", e), this
                }, mix: function (t, e) {
                    var i = this, n = t, o = void 0 === e ? .5 : e, t = 2 * o - 1, e = i.alpha() - n.alpha(),
                        t = (1 + (t * e == -1 ? t : (t + e) / (1 + t * e))) / 2, e = 1 - t;
                    return this.rgb(t * i.red() + e * n.red(), t * i.green() + e * n.green(), t * i.blue() + e * n.blue()).alpha(i.alpha() * o + n.alpha() * (1 - o))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var t, e, i, n = new r, o = this.values, a = n.values;
                    for (i in o) o.hasOwnProperty(i) && (t = o[i], "[object Array]" === (e = {}.toString.call(t)) ? a[i] = t.slice(0) : "[object Number]" === e ? a[i] = t : console.error("unexpected color value:", t));
                    return n
                }
            }).spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function (t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, r.prototype.setValues = function (t, e) {
                var i, n, o = this.values, a = this.spaces, r = this.maxes, s = 1;
                if (this.valid = !0, "alpha" === t) s = e; else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                    for (u = 0; u < t.length; u++) o[t][u] = e[t.charAt(u)];
                    s = e.a
                } else if (void 0 !== e[a[t][0]]) {
                    for (var l = a[t], u = 0; u < t.length; u++) o[t][u] = e[l[u]];
                    s = e.alpha
                }
                if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
                for (u = 0; u < t.length; u++) i = Math.max(0, Math.min(r[t][u], o[t][u])), o[t][u] = Math.round(i);
                for (n in a) n !== t && (o[n] = d[t][n](o[t]));
                return !0
            }, r.prototype.setSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, r.prototype.setChannel = function (t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
            }, e.exports = r
        }, {2: 2, 5: 5}], 4: [function (t, e, i) {
            function o(t) {
                var e, i = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = Math.min(i, n, o), r = Math.max(i, n, o),
                    t = r - a;
                return r == a ? e = 0 : i == r ? e = (n - o) / t : n == r ? e = 2 + (o - i) / t : o == r && (e = 4 + (i - n) / t), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + r) / 2, [e, 100 * (r == a ? 0 : n <= .5 ? t / (r + a) : t / (2 - r - a)), 100 * n]
            }

            function n(t) {
                var e, i = t[0], n = t[1], o = t[2], a = Math.min(i, n, o), r = Math.max(i, n, o), s = r - a,
                    t = 0 == r ? 0 : s / r * 1e3 / 10;
                return r == a ? e = 0 : i == r ? e = (n - o) / s : n == r ? e = 2 + (o - i) / s : o == r && (e = 4 + (i - n) / s), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, t, r / 255 * 1e3 / 10]
            }

            function a(t) {
                var e = t[0], i = t[1], n = t[2];
                return [o(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, n))), 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
            }

            function s(t) {
                var e = t[0] / 255, i = t[1] / 255, n = t[2] / 255, t = Math.min(1 - e, 1 - i, 1 - n);
                return [100 * ((1 - e - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * t]
            }

            function l(t) {
                return _[JSON.stringify(t)]
            }

            function u(t) {
                var e = t[0] / 255, i = t[1] / 255, t = t[2] / 255;
                return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (t = .04045 < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * t), 100 * (.0193 * e + .1192 * i + .9505 * t)]
            }

            function d(t) {
                var e = u(t), i = e[0], t = e[1], e = e[2];
                return t /= 100, e /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (t = .008856 < t ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116) - 16, 500 * (i - t), 200 * (t - (e = .008856 < e ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116))]
            }

            function c(t) {
                var e, i, n = t[0] / 360, o = t[1] / 100, t = t[2] / 100;
                if (0 == o) return [i = 255 * t, i, i];
                for (var a, r = 2 * t - (a = t < .5 ? t * (1 + o) : t + o - t * o), s = [0, 0, 0], l = 0; l < 3; l++) (e = n + 1 / 3 * -(l - 1)) < 0 && e++, 1 < e && e--, s[l] = 255 * (i = 6 * e < 1 ? r + 6 * (a - r) * e : 2 * e < 1 ? a : 3 * e < 2 ? r + (a - r) * (2 / 3 - e) * 6 : r);
                return s
            }

            function h(t) {
                var e = t[0] / 60, i = t[1] / 100, n = t[2] / 100, t = Math.floor(e) % 6, e = e - Math.floor(e),
                    o = 255 * n * (1 - i), a = 255 * n * (1 - i * e), r = 255 * n * (1 - i * (1 - e)), n = 255 * n;
                switch (t) {
                    case 0:
                        return [n, r, o];
                    case 1:
                        return [a, n, o];
                    case 2:
                        return [o, n, r];
                    case 3:
                        return [o, a, n];
                    case 4:
                        return [r, o, n];
                    case 5:
                        return [n, o, a]
                }
            }

            function f(t) {
                var e, i, n = t[0] / 360, o = t[1] / 100, a = t[2] / 100, t = o + a;
                switch (1 < t && (o /= t, a /= t), n = 6 * n - (t = Math.floor(6 * n)), i = o + (n = 0 != (1 & t) ? 1 - n : n) * ((e = 1 - a) - o), t) {
                    default:
                    case 6:
                    case 0:
                        r = e, g = i, b = o;
                        break;
                    case 1:
                        r = i, g = e, b = o;
                        break;
                    case 2:
                        r = o, g = e, b = i;
                        break;
                    case 3:
                        r = o, g = i, b = e;
                        break;
                    case 4:
                        r = i, g = o, b = e;
                        break;
                    case 5:
                        r = e, g = o, b = i
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, t = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - t) + t)), 255 * (1 - Math.min(1, i * (1 - t) + t)), 255 * (1 - Math.min(1, n * (1 - t) + t))]
            }

            function m(t) {
                var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, o = 3.2406 * e + -1.5372 * i + -.4986 * n,
                    t = -.9689 * e + 1.8758 * i + .0415 * n, n = .0557 * e + -.204 * i + 1.057 * n;
                return o = .0031308 < o ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : 12.92 * o, t = .0031308 < t ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (o = Math.min(Math.max(0, o), 1)), 255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0], i = t[1], t = t[2];
                return i /= 100, t /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (t = .008856 < t ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116))]
            }

            function x(t) {
                var e, i = t[0], n = t[1], t = t[2],
                    i = i <= 8 ? (e = 100 * i / 903.3) / 100 * 7.787 + 16 / 116 : (e = 100 * Math.pow((i + 16) / 116, 3), Math.pow(e / 100, 1 / 3)),
                    o = o / 95.047 <= .008856 ? 95.047 * (n / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(n / 500 + i, 3),
                    a = a / 108.883 <= .008859 ? 108.883 * (i - t / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - t / 200, 3);
                return [o, e, a]
            }

            function y(t) {
                var e = t[0], i = t[1], n = t[2], t = 360 * Math.atan2(n, i) / 2 / Math.PI;
                return t < 0 && (t += 360), [e, Math.sqrt(i * i + n * n), t]
            }

            function k(t) {
                return m(x(t))
            }

            function w(t) {
                var e = t[0], i = t[1], t = t[2] / 360 * 2 * Math.PI;
                return [e, i * Math.cos(t), i * Math.sin(t)]
            }

            function M(t) {
                return C[t]
            }

            e.exports = {
                rgb2hsl: o,
                rgb2hsv: n,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: d,
                rgb2lch: function (t) {
                    return y(d(t))
                },
                hsl2rgb: c,
                hsl2hsv: function (t) {
                    var e = t[0], i = t[1] / 100, t = t[2] / 100;
                    return 0 != t ? [e, 100 * (2 * (i *= (t *= 2) <= 1 ? t : 2 - t) / (t + i)), 100 * ((t + i) / 2)] : [0, 0, 0]
                },
                hsl2hwb: function (t) {
                    return a(c(t))
                },
                hsl2cmyk: function (t) {
                    return s(c(t))
                },
                hsl2keyword: function (t) {
                    return l(c(t))
                },
                hsv2rgb: h,
                hsv2hsl: function (t) {
                    var e = t[0], i = t[1] / 100, n = t[2] / 100;
                    return t = i * n, [e, 100 * (t = t / ((n = (2 - i) * n) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                },
                hsv2hwb: function (t) {
                    return a(h(t))
                },
                hsv2cmyk: function (t) {
                    return s(h(t))
                },
                hsv2keyword: function (t) {
                    return l(h(t))
                },
                hwb2rgb: f,
                hwb2hsl: function (t) {
                    return o(f(t))
                },
                hwb2hsv: function (t) {
                    return n(f(t))
                },
                hwb2cmyk: function (t) {
                    return s(f(t))
                },
                hwb2keyword: function (t) {
                    return l(f(t))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (t) {
                    return o(p(t))
                },
                cmyk2hsv: function (t) {
                    return n(p(t))
                },
                cmyk2hwb: function (t) {
                    return a(p(t))
                },
                cmyk2keyword: function (t) {
                    return l(p(t))
                },
                keyword2rgb: M,
                keyword2hsl: function (t) {
                    return o(M(t))
                },
                keyword2hsv: function (t) {
                    return n(M(t))
                },
                keyword2hwb: function (t) {
                    return a(M(t))
                },
                keyword2cmyk: function (t) {
                    return s(M(t))
                },
                keyword2lab: function (t) {
                    return d(M(t))
                },
                keyword2xyz: function (t) {
                    return u(M(t))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (t) {
                    return y(v(t))
                },
                lab2xyz: x,
                lab2rgb: k,
                lab2lch: y,
                lch2lab: w,
                lch2xyz: function (t) {
                    return x(w(t))
                },
                lch2rgb: function (t) {
                    return k(w(t))
                }
            };
            var S, C = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, _ = {};
            for (S in C) _[JSON.stringify(C[S])] = S
        }, {}], 5: [function (t, e, i) {
            function o() {
                return new l
            }

            var n, a = t(4);
            for (n in a) {
                o[n + "Raw"] = function (e) {
                    return function (t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                    }
                }(n);
                var r = /(\w+)2(\w+)/.exec(n), s = r[1], r = r[2];
                (o[s] = o[s] || {})[r] = o[n] = function (n) {
                    return function (t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var e = a[n](t);
                        if ("string" == typeof e || void 0 === e) return e;
                        for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                        return e
                    }
                }(n)
            }
            var l = function () {
                this.convs = {}
            };
            l.prototype.routeSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, l.prototype.setValues = function (t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, l.prototype.getValues = function (t) {
                var e, i, n = this.convs[t];
                return n || (e = this.space, i = this.convs[e], n = o[e][t](i), this.convs[t] = n), n
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                l.prototype[e] = function (t) {
                    return this.routeSpace(e, arguments)
                }
            }), e.exports = o
        }, {4: 4}], 6: [function (t, e, i) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 7: [function (t, e, i) {
            var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.platform = t(48), t(31)(n), t(22)(n), t(23)(n), t(24)(n), t(30)(n), t(33)(n), t(32)(n), t(35)(n), t(54)(n), t(52)(n), t(53)(n), t(55)(n), t(56)(n), t(57)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var o = [];
            o.push(t(49)(n), t(50)(n), t(51)(n)), n.plugins.register(o), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.HXLocal_Chart = n), n.canvasHelpers = n.helpers.canvas
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            8: 8,
            9: 9
        }], 8: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Bar = function (t, e) {
                    return e.type = "bar", new i(t, e)
                }
            }
        }, {}], 9: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Bubble = function (t, e) {
                    return e.type = "bubble", new i(t, e)
                }
            }
        }, {}], 10: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Doughnut = function (t, e) {
                    return e.type = "doughnut", new i(t, e)
                }
            }
        }, {}], 11: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Line = function (t, e) {
                    return e.type = "line", new i(t, e)
                }
            }
        }, {}], 12: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.PolarArea = function (t, e) {
                    return e.type = "polarArea", new i(t, e)
                }
            }
        }, {}], 13: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Radar = function (t, e) {
                    return e.type = "radar", new i(t, e)
                }
            }
        }, {}], 14: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Scatter = function (t, e) {
                    return e.type = "scatter", new i(t, e)
                }
            }
        }, {}], 15: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), c = t(45);
            n._set("bar", {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }], yAxes: [{type: "linear"}]
                }
            }), n._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            var i = "";
                            return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        }, label: function (t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    }, mode: "index", axis: "y"
                }
            }), e.exports = function (e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: o.Rectangle, initialize: function () {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    }, update: function (t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    }, updateElement: function (t, e, i) {
                        var n = this, o = n.chart, a = n.getMeta(), r = n.getDataset(), s = t.custom || {},
                            l = o.options.elements.rectangle;
                        t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: r.label,
                            label: o.data.labels[e],
                            borderSkipped: s.borderSkipped || l.borderSkipped,
                            backgroundColor: s.backgroundColor || c.valueAtIndexOrDefault(r.backgroundColor, e, l.backgroundColor),
                            borderColor: s.borderColor || c.valueAtIndexOrDefault(r.borderColor, e, l.borderColor),
                            borderWidth: s.borderWidth || c.valueAtIndexOrDefault(r.borderWidth, e, l.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    }, updateElementGeometry: function (t, e, i) {
                        var n = this, o = t._model, a = n.getValueScale(), r = a.getBasePixel(),
                            s = a.isHorizontal(), t = n._ruler || n.getRuler(),
                            a = n.calculateBarValuePixels(n.index, e), t = n.calculateBarIndexPixels(n.index, e, t);
                        o.horizontal = s, o.base = i ? r : a.base, o.x = s ? i ? r : a.head : t.center, o.y = s ? t.center : i ? r : a.head, o.height = s ? t.size : void 0, o.width = s ? void 0 : t.size
                    }, getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    }, getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    }, getStackCount: function (t) {
                        for (var e, i = this.chart, n = this.getIndexScale().options.stacked, o = void 0 === t ? i.data.datasets.length : t + 1, a = [], r = 0; r < o; ++r) (e = i.getDatasetMeta(r)).bar && i.isDatasetVisible(r) && (!1 === n || !0 === n && -1 === a.indexOf(e.stack) || void 0 === n && (void 0 === e.stack || -1 === a.indexOf(e.stack))) && a.push(e.stack);
                        return a.length
                    }, getStackIndex: function (t) {
                        return this.getStackCount(t) - 1
                    }, getRuler: function () {
                        for (var t = this.getIndexScale(), e = this.getStackCount(), i = this.index, n = [], o = t.isHorizontal(), a = o ? t.left : t.top, o = a + (o ? t.width : t.height), r = 0, s = this.getMeta().data.length; r < s; ++r) n.push(t.getPixelForValue(null, r, i));
                        return {pixels: n, start: a, end: o, stackCount: e, scale: t}
                    }, calculateBarValuePixels: function (t, e) {
                        var i, n, o, a = this.chart, r = this.getMeta(), s = this.getValueScale(),
                            l = a.data.datasets, u = s.getRightValue(l[t].data[e]), d = s.options.stacked,
                            c = r.stack, h = 0;
                        if (d || void 0 === d && void 0 !== c) for (i = 0; i < t; ++i) (n = a.getDatasetMeta(i)).bar && n.stack === c && n.controller.getValueScaleId() === s.id && a.isDatasetVisible(i) && (n = s.getRightValue(l[i].data[e]), (u < 0 && n < 0 || 0 <= u && 0 < n) && (h += n));
                        return o = s.getPixelForValue(h), {
                            size: d = ((r = s.getPixelForValue(h + u)) - o) / 2,
                            base: o,
                            head: r,
                            center: r + d / 2
                        }
                    }, calculateBarIndexPixels: function (t, e, i) {
                        var n, o, a = i.scale.options, r = this.getStackIndex(t), s = i.pixels, l = s[e],
                            u = s.length, d = i.start, t = i.end;
                        return 1 === u ? (n = d < l ? l - d : t - l, o = l < t ? t - l : l - d) : (0 < e && (n = (l - s[e - 1]) / 2, e === u - 1 && (o = n)), e < u - 1 && (o = (s[e + 1] - l) / 2, 0 === e && (n = o))), i = (o = ((n = n * a.categoryPercentage) + o * a.categoryPercentage) / i.stackCount) * a.barPercentage, l -= n, l += o * r, {
                            size: i = Math.min(c.valueOrDefault(a.barThickness, i), c.valueOrDefault(a.maxBarThickness, 1 / 0)),
                            base: l += (o - i) / 2,
                            head: l + i,
                            center: l + i / 2
                        }
                    }, draw: function () {
                        var t = this.chart, e = this.getValueScale(), i = this.getMeta().data,
                            n = this.getDataset(), o = i.length, a = 0;
                        for (c.canvas.clipArea(t.ctx, t.chartArea); a < o; ++a) isNaN(e.getRightValue(n.data[a])) || i[a].draw();
                        c.canvas.unclipArea(t.ctx)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                            t = t._model;
                        t.backgroundColor = n.hoverBackgroundColor || c.valueAtIndexOrDefault(e.hoverBackgroundColor, i, c.getHoverColor(t.backgroundColor)), t.borderColor = n.hoverBorderColor || c.valueAtIndexOrDefault(e.hoverBorderColor, i, c.getHoverColor(t.borderColor)), t.borderWidth = n.hoverBorderWidth || c.valueAtIndexOrDefault(e.hoverBorderWidth, i, t.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                            o = t._model, t = this.chart.options.elements.rectangle;
                        o.backgroundColor = n.backgroundColor || c.valueAtIndexOrDefault(e.backgroundColor, i, t.backgroundColor), o.borderColor = n.borderColor || c.valueAtIndexOrDefault(e.borderColor, i, t.borderColor), o.borderWidth = n.borderWidth || c.valueAtIndexOrDefault(e.borderWidth, i, t.borderWidth)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 16: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), f = t(45);
            n._set("bubble", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                e = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.r + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: o.Point, update: function (i) {
                        var n = this, t = n.getMeta().data;
                        f.each(t, function (t, e) {
                            n.updateElement(t, e, i)
                        })
                    }, updateElement: function (t, e, i) {
                        var n = this, o = n.getMeta(), a = t.custom || {}, r = n.getScaleForId(o.xAxisID),
                            s = n.getScaleForId(o.yAxisID), l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e], o = n.index,
                            n = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, o),
                            u = i ? s.getBasePixel() : s.getPixelForValue(u, e, o);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = o, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: i ? 0 : l.radius,
                            skip: a.skip || isNaN(n) || isNaN(u),
                            x: n,
                            y: u
                        }, t.pivot()
                    }, setHoverStyle: function (t) {
                        var e = t._model, t = t._options;
                        e.backgroundColor = f.valueOrDefault(t.hoverBackgroundColor, f.getHoverColor(t.backgroundColor)), e.borderColor = f.valueOrDefault(t.hoverBorderColor, f.getHoverColor(t.borderColor)), e.borderWidth = f.valueOrDefault(t.hoverBorderWidth, t.borderWidth), e.radius = t.radius + t.hoverRadius
                    }, removeHoverStyle: function (t) {
                        var e = t._model, t = t._options;
                        e.backgroundColor = t.backgroundColor, e.borderColor = t.borderColor, e.borderWidth = t.borderWidth, e.radius = t.radius
                    }, _resolveElementOptions: function (t, e) {
                        for (var i, n = this.chart, o = n.data.datasets[this.index], a = t.custom || {}, r = n.options.elements.point, s = f.options.resolve, t = o.data[e], l = {}, u = {
                            chart: n,
                            dataIndex: e,
                            dataset: o,
                            datasetIndex: this.index
                        }, d = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"], c = 0, h = d.length; c < h; ++c) l[i = d[c]] = s([a[i], o[i], r[i]], u, e);
                        return l.radius = s([a.radius, t ? t.r : void 0, o.radius, r.radius], u, e), l
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 17: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), b = t(45);
            n._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1},
                hover: {mode: "single"},
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var t = t.data, i = t.datasets, n = t.labels;
                    if (i.length) for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function (t, e) {
                                var i = s.getDatasetMeta(0), n = l.datasets[0], o = i.data[e],
                                    a = o && o.custom || {}, r = b.valueAtIndexOrDefault,
                                    o = s.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: a.backgroundColor || r(n.backgroundColor, e, o.backgroundColor),
                                    strokeStyle: a.borderColor || r(n.borderColor, e, o.borderColor),
                                    lineWidth: a.borderWidth || r(n.borderWidth, e, o.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        for (var i, n = e.index, o = this.chart, a = 0, r = (o.data.datasets || []).length; a < r; ++a) (i = o.getDatasetMeta(a)).data[n] && (i.data[n].hidden = !i.data[n].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.labels[t.index], t = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return b.isArray(i) ? (i = i.slice())[0] += t : i += t, i
                        }
                    }
                }
            }), n._set("pie", b.clone(n.doughnut)), n._set("pie", {cutoutPercentage: 0}), e.exports = function (e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: o.Arc, linkScales: b.noop, getRingIndex: function (t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    }, update: function (i) {
                        var t, e, n, o, a, r = this, s = r.chart, l = s.chartArea, u = s.options,
                            d = u.elements.arc, c = l.right - l.left - d.borderWidth,
                            h = l.bottom - l.top - d.borderWidth, f = Math.min(c, h), g = {x: 0, y: 0},
                            p = r.getMeta(), m = u.cutoutPercentage, v = u.circumference;
                        v < 2 * Math.PI && (n = u.rotation % (2 * Math.PI), a = (n += 2 * Math.PI * (n >= Math.PI ? -1 : n < -Math.PI ? 1 : 0)) + v, t = Math.cos(n), e = Math.sin(n), o = Math.cos(a), l = Math.sin(a), d = n <= 0 && 0 <= a || n <= 2 * Math.PI && 2 * Math.PI <= a, u = n <= .5 * Math.PI && .5 * Math.PI <= a || n <= 2.5 * Math.PI && 2.5 * Math.PI <= a, v = n <= -Math.PI && -Math.PI <= a || n <= Math.PI && Math.PI <= a, n = n <= .5 * -Math.PI && .5 * -Math.PI <= a || n <= 1.5 * Math.PI && 1.5 * Math.PI <= a, a = m / 100, v = v ? -1 : Math.min(t * (t < 0 ? 1 : a), o * (o < 0 ? 1 : a)), n = n ? -1 : Math.min(e * (e < 0 ? 1 : a), l * (l < 0 ? 1 : a)), o = d ? 1 : Math.max(t * (0 < t ? 1 : a), o * (0 < o ? 1 : a)), a = u ? 1 : Math.max(e * (0 < e ? 1 : a), l * (0 < l ? 1 : a)), f = Math.min(c / (.5 * (o - v)), h / (.5 * (a - n))), g = {
                            x: -.5 * (o + v),
                            y: -.5 * (a + n)
                        }), s.borderWidth = r.getMaxBorderWidth(p.data), s.outerRadius = Math.max((f - s.borderWidth) / 2, 0), s.innerRadius = Math.max(m ? s.outerRadius / 100 * m : 0, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / s.getVisibleDatasetCount(), s.offsetX = g.x * s.outerRadius, s.offsetY = g.y * s.outerRadius, p.total = r.calculateTotal(), r.outerRadius = s.outerRadius - s.radiusLength * r.getRingIndex(r.index), r.innerRadius = Math.max(r.outerRadius - s.radiusLength, 0), b.each(p.data, function (t, e) {
                            r.updateElement(t, e, i)
                        })
                    }, updateElement: function (t, e, i) {
                        var n = this, o = n.chart, a = o.chartArea, r = o.options, s = r.animation,
                            l = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, d = r.rotation, c = r.rotation,
                            h = n.getDataset(),
                            f = i && s.animateRotate || t.hidden ? 0 : n.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                            g = i && s.animateScale ? 0 : n.innerRadius,
                            p = i && s.animateScale ? 0 : n.outerRadius, a = b.valueAtIndexOrDefault;
                        b.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                x: l + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: d,
                                endAngle: c,
                                circumference: f,
                                outerRadius: p,
                                innerRadius: g,
                                label: a(h.label, e, o.data.labels[e])
                            }
                        });
                        o = t._model;
                        this.removeHoverStyle(t), i && s.animateRotate || (o.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, o.endAngle = o.startAngle + o.circumference), t.pivot()
                    }, removeHoverStyle: function (t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    }, calculateTotal: function () {
                        var i, n = this.getDataset(), t = this.getMeta(), o = 0;
                        return b.each(t.data, function (t, e) {
                            i = n.data[e], isNaN(i) || t.hidden || (o += Math.abs(i))
                        }), o
                    }, calculateCircumference: function (t) {
                        var e = this.getMeta().total;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    }, getMaxBorderWidth: function (t) {
                        for (var e, i = 0, n = this.index, o = t.length, a = 0; a < o; a++) i = (i = i < (e = t[a]._model ? t[a]._model.borderWidth : 0) ? e : i) < (e = t[a]._chart ? t[a]._chart.config.data.datasets[n].hoverBorderWidth : 0) ? e : i;
                        return i
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 18: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), f = t(45);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }), e.exports = function (t) {
                function h(t, e) {
                    return f.valueOrDefault(t.showLine, e.showLines)
                }

                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: o.Line, dataElementType: o.Point, update: function (t) {
                        var e, i, n = this, o = n.getMeta(), a = o.dataset, r = o.data || [], s = n.chart.options,
                            l = s.elements.line, u = n.getScaleForId(o.yAxisID), d = n.getDataset(), c = h(d, s);
                        for (c && (o = a.custom || {}, void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), a._scale = u, a._datasetIndex = n.index, a._children = r, a._model = {
                            spanGaps: d.spanGaps || s.spanGaps,
                            tension: o.tension || f.valueOrDefault(d.lineTension, l.tension),
                            backgroundColor: o.backgroundColor || d.backgroundColor || l.backgroundColor,
                            borderWidth: o.borderWidth || d.borderWidth || l.borderWidth,
                            borderColor: o.borderColor || d.borderColor || l.borderColor,
                            borderCapStyle: o.borderCapStyle || d.borderCapStyle || l.borderCapStyle,
                            borderDash: o.borderDash || d.borderDash || l.borderDash,
                            borderDashOffset: o.borderDashOffset || d.borderDashOffset || l.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle || d.borderJoinStyle || l.borderJoinStyle,
                            fill: o.fill || (void 0 !== d.fill ? d : l).fill,
                            steppedLine: o.steppedLine || f.valueOrDefault(d.steppedLine, l.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode || f.valueOrDefault(d.cubicInterpolationMode, l.cubicInterpolationMode)
                        }, a.pivot()), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);
                        for (c && 0 !== a._model.tension && n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
                    }, getPointBackgroundColor: function (t, e) {
                        var i = this.chart.options.elements.point.backgroundColor, n = this.getDataset(),
                            t = t.custom || {};
                        return t.backgroundColor ? i = t.backgroundColor : n.pointBackgroundColor ? i = f.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    }, getPointBorderColor: function (t, e) {
                        var i = this.chart.options.elements.point.borderColor, n = this.getDataset(),
                            t = t.custom || {};
                        return t.borderColor ? i = t.borderColor : n.pointBorderColor ? i = f.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    }, getPointBorderWidth: function (t, e) {
                        var i = this.chart.options.elements.point.borderWidth, n = this.getDataset(),
                            t = t.custom || {};
                        return isNaN(t.borderWidth) ? !isNaN(n.pointBorderWidth) || f.isArray(n.pointBorderWidth) ? i = f.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = t.borderWidth, i
                    }, updateElement: function (t, e, i) {
                        var n, o = this, a = o.getMeta(), r = t.custom || {}, s = o.getDataset(), l = o.index,
                            u = s.data[e], d = o.getScaleForId(a.yAxisID), c = o.getScaleForId(a.xAxisID),
                            h = o.chart.options.elements.point;
                        void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), n = c.getPixelForValue("object" == typeof u ? u : NaN, e, l), u = i ? d.getBasePixel() : o.calculatePointY(u, e, l), t._xScale = c, t._yScale = d, t._datasetIndex = l, t._index = e, t._model = {
                            x: n,
                            y: u,
                            skip: r.skip || isNaN(n) || isNaN(u),
                            radius: r.radius || f.valueAtIndexOrDefault(s.pointRadius, e, h.radius),
                            pointStyle: r.pointStyle || f.valueAtIndexOrDefault(s.pointStyle, e, h.pointStyle),
                            backgroundColor: o.getPointBackgroundColor(t, e),
                            borderColor: o.getPointBorderColor(t, e),
                            borderWidth: o.getPointBorderWidth(t, e),
                            tension: a.dataset._model ? a.dataset._model.tension : 0,
                            steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
                            hitRadius: r.hitRadius || f.valueAtIndexOrDefault(s.pointHitRadius, e, h.hitRadius)
                        }
                    }, calculatePointY: function (t, e, i) {
                        var n, o = this.chart, a = this.getMeta(), r = this.getScaleForId(a.yAxisID), s = 0, l = 0;
                        if (r.options.stacked) {
                            for (n = 0; n < i; n++) {
                                var u, d = o.data.datasets[n];
                                "line" === (u = o.getDatasetMeta(n)).type && u.yAxisID === r.id && o.isDatasetVisible(n) && ((d = Number(r.getRightValue(d.data[e]))) < 0 ? l += d || 0 : s += d || 0)
                            }
                            a = Number(r.getRightValue(t));
                            return a < 0 ? r.getPixelForValue(l + a) : r.getPixelForValue(s + a)
                        }
                        return r.getPixelForValue(t)
                    }, updateBezierControlPoints: function () {
                        var t, e, i, n, o = this.getMeta(), a = this.chart.chartArea, r = o.data || [];

                        function s(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }

                        if (o.dataset._model.spanGaps && (r = r.filter(function (t) {
                            return !t._model.skip
                        })), "monotone" === o.dataset._model.cubicInterpolationMode) f.splineCurveMonotone(r); else for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = f.splineCurve(f.previousItem(r, t)._model, i, f.nextItem(r, t)._model, o.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = r.length; t < e; ++t) (i = r[t]._model).controlPointPreviousX = s(i.controlPointPreviousX, a.left, a.right), i.controlPointPreviousY = s(i.controlPointPreviousY, a.top, a.bottom), i.controlPointNextX = s(i.controlPointNextX, a.left, a.right), i.controlPointNextY = s(i.controlPointNextY, a.top, a.bottom)
                    }, draw: function () {
                        var t = this.chart, e = this.getMeta(), i = e.data || [], n = t.chartArea, o = i.length,
                            a = 0, r = {
                                left: n.left,
                                right: n.right,
                                top: n.top - (t.options.topClipMargin ?? 0),
                                bottom: n.bottom + (t.options.bottomClipMargin ?? 0)
                            };
                        for (f.canvas.clipArea(t.ctx, r), h(this.getDataset(), t.options) && e.dataset.draw(), f.canvas.unclipArea(t.ctx); a < o; ++a) i[a].draw(n)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                            t = t._model;
                        t.radius = n.hoverRadius || f.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), t.backgroundColor = n.hoverBackgroundColor || f.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, f.getHoverColor(t.backgroundColor)), t.borderColor = n.hoverBorderColor || f.valueAtIndexOrDefault(e.pointHoverBorderColor, i, f.getHoverColor(t.borderColor)), t.borderWidth = n.hoverBorderWidth || f.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, t.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this, i = e.chart.data.datasets[t._datasetIndex], n = t._index, o = t.custom || {},
                            a = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), a.radius = o.radius || f.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), a.backgroundColor = e.getPointBackgroundColor(t, n), a.borderColor = e.getPointBorderColor(t, n), a.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 19: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), b = t(45);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    gridLines: {circular: !0},
                    pointLabels: {display: !1},
                    ticks: {beginAtZero: !0}
                },
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var t = t.data, i = t.datasets, n = t.labels;
                    if (i.length) for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function (t, e) {
                                var i = s.getDatasetMeta(0), n = l.datasets[0], o = i.data[e].custom || {},
                                    a = b.valueAtIndexOrDefault, r = s.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: o.backgroundColor || a(n.backgroundColor, e, r.backgroundColor),
                                    strokeStyle: o.borderColor || a(n.borderColor, e, r.borderColor),
                                    lineWidth: o.borderWidth || a(n.borderWidth, e, r.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        for (var i, n = e.index, o = this.chart, a = 0, r = (o.data.datasets || []).length; a < r; ++a) (i = o.getDatasetMeta(a)).data[n].hidden = !i.data[n].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function (e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: o.Arc, linkScales: b.noop, update: function (i) {
                        var n = this, t = n.chart, e = t.chartArea, o = n.getMeta(), a = t.options,
                            r = a.elements.arc, e = Math.min(e.right - e.left, e.bottom - e.top);
                        t.outerRadius = Math.max((e - r.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), n.outerRadius = t.outerRadius - t.radiusLength * n.index, n.innerRadius = n.outerRadius - t.radiusLength, o.count = n.countVisibleElements(), b.each(o.data, function (t, e) {
                            n.updateElement(t, e, i)
                        })
                    }, updateElement: function (t, e, i) {
                        for (var n = this, o = n.chart, a = n.getDataset(), r = o.options, s = r.animation, l = o.scale, u = o.data.labels, d = n.calculateCircumference(a.data[e]), c = l.xCenter, h = l.yCenter, f = 0, g = n.getMeta(), p = 0; p < e; ++p) isNaN(a.data[p]) || g.data[p].hidden || ++f;
                        var m = r.startAngle, v = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
                            o = m + d * f, r = o + (t.hidden ? 0 : d),
                            d = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[e]);
                        b.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                x: c,
                                y: h,
                                innerRadius: 0,
                                outerRadius: i ? d : v,
                                startAngle: i && s.animateRotate ? m : o,
                                endAngle: i && s.animateRotate ? m : r,
                                label: b.valueAtIndexOrDefault(u, e, u[e])
                            }
                        }), n.removeHoverStyle(t), t.pivot()
                    }, removeHoverStyle: function (t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    }, countVisibleElements: function () {
                        var i = this.getDataset(), t = this.getMeta(), n = 0;
                        return b.each(t.data, function (t, e) {
                            isNaN(i.data[e]) || t.hidden || n++
                        }), n
                    }, calculateCircumference: function (t) {
                        var e = this.getMeta().count;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 20: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(40), u = t(45);
            n._set("radar", {
                scale: {type: "radialLinear"},
                elements: {line: {tension: 0}}
            }), e.exports = function (t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: o.Line, dataElementType: o.Point, linkScales: u.noop, update: function (i) {
                        var n = this, t = n.getMeta(), e = t.dataset, o = t.data, a = e.custom || {},
                            r = n.getDataset(), s = n.chart.options.elements.line, e = n.chart.scale;
                        void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), u.extend(t.dataset, {
                            _datasetIndex: n.index,
                            _scale: e,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: a.tension || u.valueOrDefault(r.lineTension, s.tension),
                                backgroundColor: a.backgroundColor || r.backgroundColor || s.backgroundColor,
                                borderWidth: a.borderWidth || r.borderWidth || s.borderWidth,
                                borderColor: a.borderColor || r.borderColor || s.borderColor,
                                fill: a.fill || (void 0 !== r.fill ? r : s).fill,
                                borderCapStyle: a.borderCapStyle || r.borderCapStyle || s.borderCapStyle,
                                borderDash: a.borderDash || r.borderDash || s.borderDash,
                                borderDashOffset: a.borderDashOffset || r.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle || r.borderJoinStyle || s.borderJoinStyle
                            }
                        }), t.dataset.pivot(), u.each(o, function (t, e) {
                            n.updateElement(t, e, i)
                        }, n), n.updateBezierControlPoints()
                    }, updateElement: function (t, e, i) {
                        var n = this, o = t.custom || {}, a = n.getDataset(), r = n.chart.scale,
                            s = n.chart.options.elements.point, l = r.getPointPositionForValue(e, a.data[e]);
                        void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), u.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: r,
                            _model: {
                                x: i ? r.xCenter : l.x,
                                y: i ? r.yCenter : l.y,
                                tension: o.tension || u.valueOrDefault(a.lineTension, n.chart.options.elements.line.tension),
                                radius: o.radius || u.valueAtIndexOrDefault(a.pointRadius, e, s.radius),
                                backgroundColor: o.backgroundColor || u.valueAtIndexOrDefault(a.pointBackgroundColor, e, s.backgroundColor),
                                borderColor: o.borderColor || u.valueAtIndexOrDefault(a.pointBorderColor, e, s.borderColor),
                                borderWidth: o.borderWidth || u.valueAtIndexOrDefault(a.pointBorderWidth, e, s.borderWidth),
                                pointStyle: o.pointStyle || u.valueAtIndexOrDefault(a.pointStyle, e, s.pointStyle),
                                hitRadius: o.hitRadius || u.valueAtIndexOrDefault(a.pointHitRadius, e, s.hitRadius)
                            }
                        }), t._model.skip = o.skip || isNaN(t._model.x) || isNaN(t._model.y)
                    }, updateBezierControlPoints: function () {
                        var n = this.chart.chartArea, o = this.getMeta();
                        u.each(o.data, function (t, e) {
                            var i = t._model,
                                e = u.splineCurve(u.previousItem(o.data, e, !0)._model, i, u.nextItem(o.data, e, !0)._model, i.tension);
                            i.controlPointPreviousX = Math.max(Math.min(e.previous.x, n.right), n.left), i.controlPointPreviousY = Math.max(Math.min(e.previous.y, n.bottom), n.top), i.controlPointNextX = Math.max(Math.min(e.next.x, n.right), n.left), i.controlPointNextY = Math.max(Math.min(e.next.y, n.bottom), n.top), t.pivot()
                        })
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index,
                            t = t._model;
                        t.radius = i.hoverRadius || u.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), t.backgroundColor = i.hoverBackgroundColor || u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, u.getHoverColor(t.backgroundColor)), t.borderColor = i.hoverBorderColor || u.valueAtIndexOrDefault(e.pointHoverBorderColor, n, u.getHoverColor(t.borderColor)), t.borderWidth = i.hoverBorderWidth || u.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, t.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index,
                            o = t._model, t = this.chart.options.elements.point;
                        o.radius = i.radius || u.valueAtIndexOrDefault(e.pointRadius, n, t.radius), o.backgroundColor = i.backgroundColor || u.valueAtIndexOrDefault(e.pointBackgroundColor, n, t.backgroundColor), o.borderColor = i.borderColor || u.valueAtIndexOrDefault(e.pointBorderColor, n, t.borderColor), o.borderWidth = i.borderWidth || u.valueAtIndexOrDefault(e.pointBorderWidth, n, t.borderWidth)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 21: [function (t, e, i) {
            "use strict";
            t(25)._set("scatter", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                    yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {25: 25}], 22: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(26), a = t(45);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: a.noop,
                    onComplete: a.noop
                }
            }), e.exports = function (t) {
                t.Animation = o.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function (t, e, i, n) {
                        var o, a, r = this.animations;
                        for (e.chart = t, n || (t.animating = !0), o = 0, a = r.length; o < a; ++o) if (r[o].chart === t) return void (r[o] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function (e) {
                        var t = a.findIndex(this.animations, function (t) {
                            return t.chart === e
                        });
                        -1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var t = this;
                        null === t.request && (t.request = a.requestAnimFrame.call(window, function () {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function () {
                        var t = this, e = Date.now(), i = 0;
                        1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                        i = Date.now();
                        t.dropFrames += (i - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                    },
                    advance: function (t) {
                        for (var e, i, n = this.animations, o = 0; o < n.length;) i = (e = n[o]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), a.callback(e.render, [i, e], i), a.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (a.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(o, 1)) : ++o
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function () {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    }, set: function (t) {
                        this.chart = t
                    }
                })
            }
        }, {25: 25, 26: 26, 45: 45}], 23: [function (t, e, i) {
            "use strict";
            var l = t(25), u = t(45), n = t(28), d = t(48);
            e.exports = function (r) {
                var s = r.plugins;

                function a(t) {
                    return "top" === t || "bottom" === t
                }

                r.types = {}, r.instances = {}, r.controllers = {}, u.extend(r.prototype, {
                    construct: function (t, e) {
                        var i = this;
                        (o = (a = (a = e) || {}).data = a.data || {}).datasets = o.datasets || [], o.labels = o.labels || [], a.options = u.configMerge(l.global, l[a.type], a.options || {}), e = a;
                        var n = d.acquireContext(t, e), o = n && n.canvas, a = o && o.height, t = o && o.width;
                        i.id = u.uid(), i.ctx = n, i.canvas = o, i.config = e, i.width = t, i.height = a, i.aspectRatio = a ? t / a : null, i.options = e.options, i._bufferedRender = !1, (i.chart = i).controller = i, r.instances[i.id] = i, Object.defineProperty(i, "data", {
                            get: function () {
                                return i.config.data
                            }, set: function (t) {
                                i.config.data = t
                            }
                        }), n && o ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }, initialize: function () {
                        var t = this;
                        return s.notify(t, "beforeInit"), u.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), s.notify(t, "afterInit"), t
                    }, clear: function () {
                        return u.canvas.clear(this), this
                    }, stop: function () {
                        return r.animationService.cancelAnimation(this), this
                    }, resize: function (t, e) {
                        var i = this, n = i.options, o = i.canvas,
                            a = n.maintainAspectRatio && i.aspectRatio || null,
                            r = Math.max(0, Math.floor(u.getMaximumWidth(o))),
                            a = Math.max(0, Math.floor(a ? r / a : u.getMaximumHeight(o)));
                        e && (a = e), i.width === r && i.height === a || (o.width = i.width = r, o.height = i.height = a, o.style.width = r + "px", o.style.height = a + "px", u.retinaScale(i, n.devicePixelRatio), t || (s.notify(i, "resize", [a = {
                            width: r,
                            height: a
                        }]), i.options.onResize && i.options.onResize(i, a), i.stop(), i.update(i.options.responsiveAnimationDuration)))
                    }, ensureScalesHaveIDs: function () {
                        var t = this.options, e = t.scales || {}, t = t.scale;
                        u.each(e.xAxes, function (t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), u.each(e.yAxes, function (t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), t && (t.id = t.id || "scale")
                    }, buildScales: function () {
                        var n = this, t = n.options, o = n.scales = {}, e = [];
                        t.scales && (e = e.concat((t.scales.xAxes || []).map(function (t) {
                            return {options: t, dtype: "category", dposition: "bottom"}
                        }), (t.scales.yAxes || []).map(function (t) {
                            return {options: t, dtype: "linear", dposition: "left"}
                        }))), t.scale && e.push({
                            options: t.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), u.each(e, function (t) {
                            var e = t.options, i = u.valueOrDefault(e.type, t.dtype),
                                i = r.scaleService.getScaleConstructor(i);
                            i && (a(e.position) !== a(t.dposition) && (e.position = t.dposition), e = new i({
                                id: e.id,
                                options: e,
                                ctx: n.ctx,
                                chart: n
                            }), (o[e.id] = e).mergeTicksOptions(), t.isDefault && (n.scale = e))
                        }), r.scaleService.addScalesToLayout(this)
                    }, buildOrUpdateControllers: function () {
                        var n = this, o = [], a = [];
                        return u.each(n.data.datasets, function (t, e) {
                            var i = n.getDatasetMeta(e), t = t.type || n.config.type;
                            if (i.type && i.type !== t && (n.destroyDatasetMeta(e), i = n.getDatasetMeta(e)), i.type = t, o.push(i.type), i.controller) i.controller.updateIndex(e); else {
                                t = r.controllers[i.type];
                                if (void 0 === t) throw new Error('"' + i.type + '" is not a chart type.');
                                i.controller = new t(n, e), a.push(i.controller)
                            }
                        }, n), a
                    }, resetElements: function () {
                        var i = this;
                        u.each(i.data.datasets, function (t, e) {
                            i.getDatasetMeta(e).controller.reset()
                        }, i)
                    }, reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    }, update: function (t) {
                        var e, i, n = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        }), (i = (e = n).options).scale ? e.scale.options = i.scale : i.scales && i.scales.xAxes.concat(i.scales.yAxes).forEach(function (t) {
                            e.scales[t.id].options = t
                        }), e.tooltip._options = i.tooltips, !1 !== s.notify(n, "beforeUpdate") && (n.tooltip._data = n.data, i = n.buildOrUpdateControllers(), u.each(n.data.datasets, function (t, e) {
                            n.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, n), n.updateLayout(), u.each(i, function (t) {
                            t.reset()
                        }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], s.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                        } : n.render(t))
                    }, updateLayout: function () {
                        !1 !== s.notify(this, "beforeLayout") && (r.layoutService.update(this, this.width, this.height), s.notify(this, "afterScaleUpdate"), s.notify(this, "afterLayout"))
                    }, updateDatasets: function () {
                        if (!1 !== s.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            s.notify(this, "afterDatasetsUpdate")
                        }
                    }, updateDataset: function (t) {
                        var e = this.getDatasetMeta(t), t = {meta: e, index: t};
                        !1 !== s.notify(this, "beforeDatasetUpdate", [t]) && (e.controller.update(), s.notify(this, "afterDatasetUpdate", [t]))
                    }, render: function (t) {
                        var e = this,
                            i = (t = !t || "object" != typeof t ? {duration: t, lazy: arguments[1]} : t).duration,
                            n = t.lazy;
                        if (!1 !== s.notify(e, "beforeRender")) {
                            var o = e.options.animation, a = function (t) {
                                s.notify(e, "afterRender"), u.callback(o && o.onComplete, [t], e)
                            };
                            return o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration) ? (t = new r.Animation({
                                numSteps: (i || o.duration) / 16.66,
                                easing: t.easing || o.easing,
                                render: function (t, e) {
                                    var i = u.easing.effects[e.easing], n = e.currentStep, e = n / e.numSteps;
                                    t.draw(i(e), e, n)
                                },
                                onAnimationProgress: o.onProgress,
                                onAnimationComplete: a
                            }), r.animationService.addAnimation(e, t, i, n)) : (e.draw(), a(new r.Animation({
                                numSteps: 0,
                                chart: e
                            }))), e
                        }
                    }, draw: function (t) {
                        var e = this;
                        e.clear(), u.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== s.notify(e, "beforeDraw", [t]) && (u.each(e.boxes, function (t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, "afterDraw", [t]))
                    }, transition: function (t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    }, drawDatasets: function (t) {
                        var e = this;
                        if (!1 !== s.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            s.notify(e, "afterDatasetsDraw", [t])
                        }
                    }, drawDataset: function (t, e) {
                        var i = this.getDatasetMeta(t), t = {meta: i, index: t, easingValue: e};
                        !1 !== s.notify(this, "beforeDatasetDraw", [t]) && (i.controller.draw(e), s.notify(this, "afterDatasetDraw", [t]))
                    }, _drawTooltip: function (t) {
                        var e = this.tooltip, t = {tooltip: e, easingValue: t};
                        !1 !== s.notify(this, "beforeTooltipDraw", [t]) && (e.draw(), s.notify(this, "afterTooltipDraw", [t]))
                    }, getElementAtEvent: function (t) {
                        return n.modes.single(this, t)
                    }, getElementsAtEvent: function (t) {
                        return n.modes.label(this, t, {intersect: !0})
                    }, getElementsAtXAxis: function (t) {
                        return n.modes["x-axis"](this, t, {intersect: !0})
                    }, getElementsAtEventForMode: function (t, e, i) {
                        e = n.modes[e];
                        return "function" == typeof e ? e(this, t, i) : []
                    }, getDatasetAtEvent: function (t) {
                        return n.modes.dataset(this, t, {intersect: !0})
                    }, getDatasetMeta: function (t) {
                        t = this.data.datasets[t];
                        return t._meta || (t._meta = {}), t._meta[this.id] || (t._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        })
                    }, getVisibleDatasetCount: function () {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    }, isDatasetVisible: function (t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroyDatasetMeta: function (t) {
                        var e = this.id, i = this.data.datasets[t], t = i._meta && i._meta[e];
                        t && (t.controller.destroy(), delete i._meta[e])
                    }, destroy: function () {
                        var t, e, i = this, n = i.canvas;
                        for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                        n && (i.unbindEvents(), u.canvas.clear(i), d.releaseContext(i.ctx), i.canvas = null, i.ctx = null), s.notify(i, "destroy"), delete r.instances[i.id]
                    }, toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    }, initToolTip: function () {
                        var t = this;
                        t.tooltip = new r.Tooltip({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    }, bindEvents: function () {
                        var e = this, i = e._listeners = {}, n = function () {
                            e.eventHandler.apply(e, arguments)
                        };
                        u.each(e.options.events, function (t) {
                            d.addEventListener(e, t, n), i[t] = n
                        }), e.options.responsive && (n = function () {
                            e.resize()
                        }, d.addEventListener(e, "resize", n), i.resize = n)
                    }, unbindEvents: function () {
                        var i = this, t = i._listeners;
                        t && (delete i._listeners, u.each(t, function (t, e) {
                            d.removeEventListener(i, e, t)
                        }))
                    }, updateHoverStyle: function (t, e, i) {
                        for (var n, o = i ? "setHoverStyle" : "removeHoverStyle", a = 0, r = t.length; a < r; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n)
                    }, eventHandler: function (t) {
                        var e = this, i = e.tooltip;
                        if (!1 !== s.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            n |= i && i.handleEvent(t), s.notify(e, "afterEvent", [t]);
                            t = e._bufferedRequest;
                            return t ? e.render(t) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    }, handleEvent: function (t) {
                        var e = this, i = e.options || {}, n = i.hover;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, n.mode, n), u.callback(i.onHover || i.hover.onHover, [t.native, e.active], e), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, n.mode, !1), e.active.length && n.mode && e.updateHoverStyle(e.active, n.mode, !0), n = !u.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, n
                    }
                }), r.Controller = r
            }
        }, {25: 25, 28: 28, 45: 45, 48: 48}], 24: [function (t, e, i) {
            "use strict";
            var r = t(45);
            e.exports = function (t) {
                var n = ["push", "pop", "shift", "splice", "unshift"];

                function a(e, t) {
                    var i = e._chartjs;
                    i && (-1 !== (t = (i = i.listeners).indexOf(t)) && i.splice(t, 1), 0 < i.length || (n.forEach(function (t) {
                        delete e[t]
                    }), delete e._chartjs))
                }

                t.DatasetController = function (t, e) {
                    this.initialize(t, e)
                }, r.extend(t.DatasetController.prototype, {
                    datasetElementType: null, dataElementType: null, initialize: function (t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    }, updateIndex: function (t) {
                        this.index = t
                    }, linkScales: function () {
                        var t = this.getMeta(), e = this.getDataset();
                        null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                    }, getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    }, getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    }, getScaleForId: function (t) {
                        return this.chart.scales[t]
                    }, reset: function () {
                        this.update(!0)
                    }, destroy: function () {
                        this._data && a(this._data, this)
                    }, createMetaDataset: function () {
                        var t = this.datasetElementType;
                        return t && new t({_chart: this.chart, _datasetIndex: this.index})
                    }, createMetaData: function (t) {
                        var e = this.dataElementType;
                        return e && new e({_chart: this.chart, _datasetIndex: this.index, _index: t})
                    }, addElements: function () {
                        for (var t = this.getMeta(), e = this.getDataset().data || [], i = t.data, n = 0, o = e.length; n < o; ++n) i[n] = i[n] || this.createMetaData(n);
                        t.dataset = t.dataset || this.createMetaDataset()
                    }, addElementAndReset: function (t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    }, buildOrUpdateElements: function () {
                        var o, t = this, e = t.getDataset(), i = e.data || (e.data = []);
                        t._data !== i && (t._data && a(t._data, t), e = t, (o = i)._chartjs ? o._chartjs.listeners.push(e) : (Object.defineProperty(o, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {listeners: [e]}
                        }), n.forEach(function (t) {
                            var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1), n = o[t];
                            Object.defineProperty(o, t, {
                                configurable: !0, enumerable: !1, value: function () {
                                    var e = Array.prototype.slice.call(arguments), t = n.apply(this, e);
                                    return r.each(o._chartjs.listeners, function (t) {
                                        "function" == typeof t[i] && t[i].apply(t, e)
                                    }), t
                                }
                            })
                        })), t._data = i), t.resyncElements()
                    }, update: r.noop, transition: function (t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
                        e.dataset && e.dataset.transition(t)
                    }, draw: function () {
                        var t = this.getMeta(), e = t.data || [], i = e.length, n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    }, removeHoverStyle: function (t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex], n = t._index, o = t.custom || {},
                            a = r.valueAtIndexOrDefault, t = t._model;
                        t.backgroundColor = o.backgroundColor || a(i.backgroundColor, n, e.backgroundColor), t.borderColor = o.borderColor || a(i.borderColor, n, e.borderColor), t.borderWidth = o.borderWidth || a(i.borderWidth, n, e.borderWidth)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {},
                            o = r.valueAtIndexOrDefault, a = r.getHoverColor, t = t._model;
                        t.backgroundColor = n.hoverBackgroundColor || o(e.hoverBackgroundColor, i, a(t.backgroundColor)), t.borderColor = n.hoverBorderColor || o(e.hoverBorderColor, i, a(t.borderColor)), t.borderWidth = n.hoverBorderWidth || o(e.hoverBorderWidth, i, t.borderWidth)
                    }, resyncElements: function () {
                        var t = this.getMeta(), e = this.getDataset().data, i = t.data.length, e = e.length;
                        e < i ? t.data.splice(e, i - e) : i < e && this.insertElements(i, e - i)
                    }, insertElements: function (t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    }, onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    }, onDataPop: function () {
                        this.getMeta().data.pop()
                    }, onDataShift: function () {
                        this.getMeta().data.shift()
                    }, onDataSplice: function (t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    }, onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = r.inherits
            }
        }, {45: 45}], 25: [function (t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = {
                _set: function (t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {45: 45}], 26: [function (t, e, i) {
            "use strict";
            var f = t(3), n = t(45);

            function o(t) {
                n.extend(this, t), this.initialize.apply(this, arguments)
            }

            n.extend(o.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var t = this;
                    return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                }, transition: function (t) {
                    var e = this, i = e._model, n = e._start, o = e._view;
                    return i && 1 !== t ? (o = o || (e._view = {}), function (t, e, i, n) {
                        for (var o, a, r, s, l, u, d = Object.keys(i), c = 0, h = d.length; c < h; ++c) if (r = i[o = d[c]], e.hasOwnProperty(o) || (e[o] = r), (l = e[o]) !== r && "_" !== o[0]) {
                            if (t.hasOwnProperty(o) || (t[o] = l), (s = typeof r) == typeof (a = t[o])) if ("string" == s) {
                                if ((l = f(a)).valid && (u = f(r)).valid) {
                                    e[o] = u.mix(l, n).rgbString();
                                    continue
                                }
                            } else if ("number" == s && isFinite(a) && isFinite(r)) {
                                e[o] = a + (r - a) * n;
                                continue
                            }
                            e[o] = r
                        }
                    }(n = n || (e._start = {}), o, i, t)) : (e._view = i, e._start = null), e
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                }
            }), o.extend = n.inherits, e.exports = o
        }, {3: 3, 45: 45}], 27: [function (t, e, i) {
            "use strict";
            var n = t(3), o = t(25), h = t(45);
            e.exports = function (l) {
                function u(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function d(t) {
                    return null != t && "none" !== t
                }

                function e(t, e, i) {
                    var n = document.defaultView, o = t.parentNode, a = n.getComputedStyle(t)[e],
                        r = n.getComputedStyle(o)[e], s = d(a), n = d(r), e = Number.POSITIVE_INFINITY;
                    return s || n ? Math.min(s ? u(a, t, i) : e, n ? u(r, o, i) : e) : "none"
                }

                h.configMerge = function () {
                    return h.merge(h.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            var o = e[t] || {}, a = i[t];
                            "scales" === t ? e[t] = h.scaleMerge(o, a) : "scale" === t ? e[t] = h.merge(o, [l.scaleService.getScaleDefaults(a.type), a]) : h._merger(t, e, i, n)
                        }
                    })
                }, h.scaleMerge = function () {
                    return h.merge(h.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var o, a, r, s = i[t].length;
                                for (e[t] || (e[t] = []), o = 0; o < s; ++o) r = i[t][o], a = h.valueOrDefault(r.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || r.type && r.type !== e[t][o].type ? h.merge(e[t][o], [l.scaleService.getScaleDefaults(a), r]) : h.merge(e[t][o], r)
                            } else h._merger(t, e, i, n)
                        }
                    })
                }, h.where = function (t, e) {
                    if (h.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return h.each(t, function (t) {
                        e(t) && i.push(t)
                    }), i
                }, h.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                    return t.findIndex(e, i)
                } : function (t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, o = t.length; n < o; ++n) if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, h.findNextWhere = function (t, e, i) {
                    for (var n = (i = h.isNullOrUndef(i) ? -1 : i) + 1; n < t.length; n++) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, h.findPreviousWhere = function (t, e, i) {
                    for (var n = (i = h.isNullOrUndef(i) ? t.length : i) - 1; 0 <= n; n--) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, h.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, h.almostEquals = function (t, e, i) {
                    return Math.abs(t - e) < i
                }, h.almostWhole = function (t, e) {
                    var i = Math.round(t);
                    return i - e < t && t < i + e
                }, h.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, h.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, h.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, h.log10 = Math.log10 ? function (t) {
                    return Math.log10(t)
                } : function (t) {
                    return Math.log(t) / Math.LN10
                }, h.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, h.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, h.getAngleFromPoint = function (t, e) {
                    var i = e.x - t.x, e = e.y - t.y, t = Math.sqrt(i * i + e * e), i = Math.atan2(e, i);
                    return i < -.5 * Math.PI && (i += 2 * Math.PI), {angle: i, distance: t}
                }, h.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, h.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, h.splineCurve = function (t, e, i, n) {
                    var o = t.skip ? e : t, a = e, r = i.skip ? e : i,
                        t = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        e = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)), i = t / (t + e),
                        e = e / (t + e), i = n * (i = isNaN(i) ? 0 : i), e = n * (e = isNaN(e) ? 0 : e);
                    return {
                        previous: {x: a.x - i * (r.x - o.x), y: a.y - i * (r.y - o.y)},
                        next: {x: a.x + e * (r.x - o.x), y: a.y + e * (r.y - o.y)}
                    }
                }, h.EPSILON = Number.EPSILON || 1e-14, h.splineCurveMonotone = function (t) {
                    for (var e, i, n, o, a, r, s, l, u = (t || []).map(function (t) {
                        return {model: t._model, deltaK: 0, mK: 0}
                    }), d = u.length, c = 0; c < d; ++c) (o = u[c]).model.skip || (i = 0 < c ? u[c - 1] : null, (n = c < d - 1 ? u[c + 1] : null) && !n.model.skip && (e = n.model.x - o.model.x, o.deltaK = 0 != e ? (n.model.y - o.model.y) / e : 0), !i || i.model.skip ? o.mK = o.deltaK : !n || n.model.skip ? o.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(o.deltaK) ? o.mK = 0 : o.mK = (i.deltaK + o.deltaK) / 2);
                    for (c = 0; c < d - 1; ++c) o = u[c], n = u[c + 1], o.model.skip || n.model.skip || (h.almostEquals(o.deltaK, 0, this.EPSILON) ? o.mK = n.mK = 0 : (a = o.mK / o.deltaK, r = n.mK / o.deltaK, (s = Math.pow(a, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(s), o.mK = a * s * o.deltaK, n.mK = r * s * o.deltaK)));
                    for (c = 0; c < d; ++c) (o = u[c]).model.skip || (i = 0 < c ? u[c - 1] : null, n = c < d - 1 ? u[c + 1] : null, i && !i.model.skip && (l = (o.model.x - i.model.x) / 3, o.model.controlPointPreviousX = o.model.x - l, o.model.controlPointPreviousY = o.model.y - l * o.mK), n && !n.model.skip && (l = (n.model.x - o.model.x) / 3, o.model.controlPointNextX = o.model.x + l, o.model.controlPointNextY = o.model.y + l * o.mK))
                }, h.nextItem = function (t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, h.previousItem = function (t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, h.niceNum = function (t, e) {
                    var i = Math.floor(h.log10(t)), t = t / Math.pow(10, i),
                        t = e ? t < 1.5 ? 1 : t < 3 ? 2 : t < 7 ? 5 : 10 : t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10;
                    return t * Math.pow(10, i)
                }, h.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, h.getRelativePosition = function (t, e) {
                    var i = t.originalEvent || t, n = t.currentTarget || t.srcElement,
                        o = n.getBoundingClientRect(), a = i.touches,
                        r = a && 0 < a.length ? (l = a[0].clientX, a[0].clientY) : (l = i.clientX, i.clientY),
                        s = parseFloat(h.getStyle(n, "padding-left")), t = parseFloat(h.getStyle(n, "padding-top")),
                        a = parseFloat(h.getStyle(n, "padding-right")),
                        i = parseFloat(h.getStyle(n, "padding-bottom")), a = o.right - o.left - s - a,
                        i = o.bottom - o.top - t - i,
                        l = Math.round((l - o.left - s) / a * n.width / e.currentDevicePixelRatio);
                    return {x: l, y: r = Math.round((r - o.top - t) / i * n.height / e.currentDevicePixelRatio)}
                }, h.getConstraintWidth = function (t) {
                    return e(t, "max-width", "clientWidth")
                }, h.getConstraintHeight = function (t) {
                    return e(t, "max-height", "clientHeight")
                }, h.getMaximumWidth = function (t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var i = parseInt(h.getStyle(e, "padding-left"), 10),
                        n = parseInt(h.getStyle(e, "padding-right"), 10), n = e.clientWidth - i - n,
                        t = h.getConstraintWidth(t);
                    return isNaN(t) ? n : Math.min(n, t)
                }, h.getMaximumHeight = function (t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var i = parseInt(h.getStyle(e, "padding-top"), 10),
                        n = parseInt(h.getStyle(e, "padding-bottom"), 10), n = e.clientHeight - i - n,
                        t = h.getConstraintHeight(t);
                    return isNaN(t) ? n : Math.min(n, t)
                }, h.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, h.retinaScale = function (t, e) {
                    var i, n, o = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    1 !== o && (i = t.canvas, n = t.height, e = t.width, i.height = n * o, i.width = e * o, t.ctx.scale(o, o), i.style.height = n + "px", i.style.width = e + "px")
                }, h.fontString = function (t, e, i) {
                    return e + " " + t + "px " + i
                }, h.longestText = function (e, t, i, n) {
                    var o = (n = n || {}).data = n.data || {}, a = n.garbageCollect = n.garbageCollect || [];
                    n.font !== t && (o = n.data = {}, a = n.garbageCollect = [], n.font = t), e.font = t;
                    var r = 0;
                    h.each(i, function (t) {
                        null != t && !0 !== h.isArray(t) ? r = h.measureText(e, o, a, r, t) : h.isArray(t) && h.each(t, function (t) {
                            null == t || h.isArray(t) || (r = h.measureText(e, o, a, r, t))
                        })
                    });
                    var s = a.length / 2;
                    if (s > i.length) {
                        for (var l = 0; l < s; l++) delete o[a[l]];
                        a.splice(0, s)
                    }
                    return r
                }, h.measureText = function (t, e, i, n, o) {
                    var a = e[o];
                    return a || (a = e[o] = t.measureText(o).width, i.push(o)), n = n < a ? a : n
                }, h.numberOfLabelLines = function (t) {
                    var e = 1;
                    return h.each(t, function (t) {
                        h.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, h.color = n ? function (t) {
                    return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, h.getHoverColor = function (t) {
                    return t instanceof CanvasPattern ? t : h.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {25: 25, 3: 3, 45: 45}], 28: [function (t, e, i) {
            "use strict";
            var n = t(45);

            function r(t, e) {
                return t.native ? {x: t.x, y: t.y} : n.getRelativePosition(t, e)
            }

            function s(t, e) {
                for (var i, n, o, a = 0, r = t.data.datasets.length; a < r; ++a) if (t.isDatasetVisible(a)) for (n = 0, o = (i = t.getDatasetMeta(a)).data.length; n < o; ++n) {
                    var s = i.data[n];
                    s._view.skip || e(s)
                }
            }

            function l(t, e) {
                var i = [];
                return s(t, function (t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function u(t, i, n, o) {
                var a = Number.POSITIVE_INFINITY, r = [];
                return s(t, function (t) {
                    var e;
                    n && !t.inRange(i.x, i.y) || (e = t.getCenterPoint(), (e = o(i, e)) < a ? (r = [t], a = e) : e === a && r.push(t))
                }), r
            }

            function d(t) {
                var n = -1 !== t.indexOf("x"), o = -1 !== t.indexOf("y");
                return function (t, e) {
                    var i = n ? Math.abs(t.x - e.x) : 0, e = o ? Math.abs(t.y - e.y) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(e, 2))
                }
            }

            function o(i, t, e) {
                var n = r(t, i);
                e.axis = e.axis || "x";
                var t = d(e.axis), o = e.intersect ? l(i, n) : u(i, n, !1, t), a = [];
                return o.length ? (i.data.datasets.forEach(function (t, e) {
                    !i.isDatasetVisible(e) || (e = i.getDatasetMeta(e).data[o[0]._index]) && !e._view.skip && a.push(e)
                }), a) : []
            }

            e.exports = {
                modes: {
                    single: function (t, e) {
                        var i = r(e, t), n = [];
                        return s(t, function (t) {
                            return t.inRange(i.x, i.y) && (n.push(t), n)
                        }), n.slice(0, 1)
                    }, label: o, index: o, dataset: function (t, e, i) {
                        var n = r(e, t);
                        i.axis = i.axis || "xy";
                        e = d(i.axis), e = i.intersect ? l(t, n) : u(t, n, !1, e);
                        return e = 0 < e.length ? t.getDatasetMeta(e[0]._datasetIndex).data : e
                    }, "x-axis": function (t, e) {
                        return o(t, e, {intersect: !1})
                    }, point: function (t, e) {
                        return l(t, r(e, t))
                    }, nearest: function (t, e, i) {
                        var n = r(e, t);
                        i.axis = i.axis || "xy";
                        e = d(i.axis), e = u(t, n, i.intersect, e);
                        1 < e.length && e.sort(function (t, e) {
                            var i = t.getArea() - e.getArea();
                            return i = 0 === i ? t._datasetIndex - e._datasetIndex : i
                        });
                        let o = e.slice(0, 1);
                        return !i.intersect && 0 < o.length && (i = o[0].getCenterPoint(), (20 < (i = n.y - i.y) || i < -5) && (o = [])), o
                    }, x: function (t, e, i) {
                        var n = r(e, t), o = [], a = !1;
                        return s(t, function (t) {
                            t.inXRange(n.x) && o.push(t), t.inRange(n.x, n.y) && (a = !0)
                        }), o = i.intersect && !a ? [] : o
                    }, y: function (t, e, i) {
                        var n = r(e, t), o = [], a = !1;
                        return s(t, function (t) {
                            t.inYRange(n.y) && o.push(t), t.inRange(n.x, n.y) && (a = !0)
                        }), o = i.intersect && !a ? [] : o
                    }
                }
            }
        }, {45: 45}], 29: [function (t, e, i) {
            "use strict";
            t(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
            }), e.exports = function () {
                function t(t, e) {
                    return this.construct(t, e), this
                }

                return t.Chart = t
            }
        }, {25: 25}], 30: [function (t, e, i) {
            "use strict";
            var B = t(45);
            e.exports = function (t) {
                function L(t, e) {
                    return B.where(t, function (t) {
                        return t.position === e
                    })
                }

                function z(t, n) {
                    t.forEach(function (t, e) {
                        return t._tmpIndex_ = e, t
                    }), t.sort(function (t, e) {
                        var i = n ? e : t, e = n ? t : e;
                        return i.weight === e.weight ? i._tmpIndex_ - e._tmpIndex_ : i.weight - e.weight
                    }), t.forEach(function (t) {
                        delete t._tmpIndex_
                    })
                }

                t.layoutService = {
                    defaults: {}, addBox: function (t, e) {
                        t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                    }, removeBox: function (t, e) {
                        e = t.boxes ? t.boxes.indexOf(e) : -1;
                        -1 !== e && t.boxes.splice(e, 1)
                    }, configure: function (t, e, i) {
                        for (var n, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) i.hasOwnProperty(n = o[r]) && (e[n] = i[n])
                    }, update: function (e, i, t) {
                        if (e) {
                            var n = e.options.layout || {}, o = B.options.toPadding(n.padding), a = o.left,
                                r = o.right, s = o.top, l = o.bottom;
                            for (let t = 0; t < e.boxes.length; t++) e.boxes[t]._dataLimitsCached = !1;
                            var u = L(e.boxes, "left"), d = L(e.boxes, "right"), c = L(e.boxes, "top"),
                                h = L(e.boxes, "bottom"), n = L(e.boxes, "chartArea");
                            z(u, !0), z(d, !1), z(c, !0), z(h, !1);
                            var f = i - a - r, g = t - s - l, p = g / 2, m = (i - f / 2) / (u.length + d.length),
                                v = (t - p) / (c.length + h.length), b = f, x = g, y = [];
                            B.each(u.concat(d, c, h), function (t) {
                                var e, i = t.isHorizontal();
                                i ? (e = t.update(t.fullWidth ? f : b, v), x -= e.height) : (e = t.update(m, p), b -= e.width), y.push({
                                    horizontal: i,
                                    minSize: e,
                                    box: t
                                })
                            });
                            var k = 0, w = 0, M = 0, S = 0;
                            B.each(c.concat(h), function (t) {
                                t.getPadding && (t = t.getPadding(), k = Math.max(k, t.left), w = Math.max(w, t.right))
                            }), B.each(u.concat(d), function (t) {
                                t.getPadding && (t = t.getPadding(), M = Math.max(M, t.top), S = Math.max(S, t.bottom))
                            });
                            var C = a, _ = r, D = s, I = l;
                            B.each(u.concat(d), O), B.each(u, function (t) {
                                C += t.width
                            }), B.each(d, function (t) {
                                _ += t.width
                            }), B.each(c.concat(h), O), B.each(c, function (t) {
                                D += t.height
                            }), B.each(h, function (t) {
                                I += t.height
                            }), B.each(u.concat(d), function (e) {
                                var t = B.findNextWhere(y, function (t) {
                                    return t.box === e
                                }), i = {left: 0, right: 0, top: D, bottom: I};
                                t && e.update(t.minSize.width, x, i)
                            }), C = a, _ = r, D = s, I = l, B.each(u, function (t) {
                                C += t.width
                            }), B.each(d, function (t) {
                                _ += t.width
                            }), B.each(c, function (t) {
                                D += t.height
                            }), B.each(h, function (t) {
                                I += t.height
                            });
                            o = Math.max(k - C, 0);
                            C += o, _ += Math.max(w - _, 0);
                            l = Math.max(M - D, 0);
                            D += l, I += Math.max(S - I, 0);
                            var P = t - D - I, A = i - C - _;
                            A === b && P === x || (B.each(u, function (t) {
                                t.height = P
                            }), B.each(d, function (t) {
                                t.height = P
                            }), B.each(c, function (t) {
                                t.fullWidth || (t.width = A)
                            }), B.each(h, function (t) {
                                t.fullWidth || (t.width = A)
                            }), x = P, b = A);
                            var T = a + o, F = s + l;
                            B.each(u.concat(c), R), T += b, F += x, B.each(d, R), B.each(h, R), e.chartArea = {
                                left: C,
                                top: D,
                                right: C + b,
                                bottom: D + x
                            }, B.each(n, function (t) {
                                t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(b, x)
                            })
                        }

                        function O(e) {
                            var t, i = B.findNextWhere(y, function (t) {
                                return t.box === e
                            });
                            i && (e.isHorizontal() ? (t = {
                                left: Math.max(C, k),
                                right: Math.max(_, w),
                                top: 0,
                                bottom: 0
                            }, e.update(e.fullWidth ? f : b, g / 2, t)) : e.update(i.minSize.width, x))
                        }

                        function R(t) {
                            t.isHorizontal() ? (t.left = t.fullWidth ? a : C, t.right = t.fullWidth ? i - r : C + b, t.top = F, t.bottom = F + t.height, F = t.bottom) : (t.left = T, t.right = T + t.width, t.top = D, t.bottom = D + x, T = t.right)
                        }
                    }
                }
            }
        }, {45: 45}], 31: [function (t, e, i) {
            "use strict";
            var r = t(25), n = t(26), s = t(45);
            r._set("global", {plugins: {}}), e.exports = function (t) {
                t.plugins = {
                    _plugins: [], _cacheId: 0, register: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }), this._cacheId++
                    }, unregister: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            t = e.indexOf(t);
                            -1 !== t && e.splice(t, 1)
                        }), this._cacheId++
                    }, clear: function () {
                        this._plugins = [], this._cacheId++
                    }, count: function () {
                        return this._plugins.length
                    }, getAll: function () {
                        return this._plugins
                    }, notify: function (t, e, i) {
                        for (var n, o, a, r, s = this.descriptors(t), l = s.length, u = 0; u < l; ++u) if ("function" == typeof (r = (o = (n = s[u]).plugin)[e]) && ((a = [t].concat(i || [])).push(n.options), !1 === r.apply(o, a))) return !1;
                        return !0
                    }, descriptors: function (t) {
                        var e = t._plugins || (t._plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var n = [], o = [], t = t && t.config || {}, a = t.options && t.options.plugins || {};
                        return this._plugins.concat(t.plugins || []).forEach(function (t) {
                            var e, i;
                            -1 === n.indexOf(t) && (e = t.id, !1 !== (i = a[e]) && (!0 === i && (i = s.clone(r.global.plugins[e])), n.push(t), o.push({
                                plugin: t,
                                options: i || {}
                            })))
                        }), e.descriptors = o, e.id = this._cacheId, o
                    }
                }, t.pluginService = t.plugins, t.PluginBase = n.extend({})
            }
        }, {25: 25, 26: 26, 45: 45}], 32: [function (t, e, i) {
            "use strict";
            var m = t(25), n = t(26), B = t(45), t = t(34);

            function f(t) {
                for (var e = [], i = 0, n = t.length; i < n; ++i) e.push(t[i].label);
                return e
            }

            function N(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }

            m._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: t.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function (t) {
                function h(t, e, i) {
                    return B.isArray(e) ? B.longestText(t, i, e) : t.measureText(e).width
                }

                function g(t) {
                    var e = B.valueOrDefault, i = m.global, n = e(t.fontSize, i.defaultFontSize),
                        o = e(t.fontStyle, i.defaultFontStyle), i = e(t.fontFamily, i.defaultFontFamily);
                    return {size: n, style: o, family: i, font: B.fontString(n, o, i)}
                }

                function p(t) {
                    return B.options.toLineHeight(B.valueOrDefault(t.lineHeight, 1.2), B.valueOrDefault(t.fontSize, m.global.defaultFontSize))
                }

                t.Scale = n.extend({
                    getPadding: function () {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function () {
                        return this._ticks
                    },
                    mergeTicksOptions: function () {
                        var t, e = this.options.ticks;
                        for (t in !1 === e.minor && (e.minor = {display: !1}), !1 === e.major && (e.major = {display: !1}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                    },
                    beforeUpdate: function () {
                        B.callback(this.options.beforeUpdate, [this])
                    },
                    update: function (t, e, i) {
                        var n, o, a, r, s, l, u = this;
                        for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = B.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u._dataLimitsCached || (u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u._dataLimitsCached = !0), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), a = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.options.ticks.removeEdgeTicks && (a[0] = " ", a[a.length - 1] = " "), n = 0, o = (u.ticks = a).length; n < o; ++n) r = a[n], (l = s[n]) ? l.label = r : s.push(l = {
                            label: r,
                            major: !1
                        });
                        return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                    },
                    afterUpdate: function () {
                        B.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function () {
                        B.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function () {
                        B.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function () {
                        B.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: B.noop,
                    afterDataLimits: function () {
                        B.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function () {
                        B.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: B.noop,
                    afterBuildTicks: function () {
                        B.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function () {
                        B.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function () {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function () {
                        B.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function () {
                        B.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function () {
                        var t = this, e = t.ctx, i = t.options.ticks, n = f(t._ticks), o = g(i);
                        e.font = o.font;
                        var a = i.minRotation || 0;
                        if (n.length && t.options.display && t.isHorizontal()) for (var r = B.longestText(e, o.font, n, t.longestTextCache), s = r, l = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l < s && a < i.maxRotation;) {
                            var u = B.toRadians(a), d = Math.cos(u);
                            if (Math.sin(u) * r > t.maxHeight) {
                                a--;
                                break
                            }
                            a++, s = d * r
                        }
                        t.labelRotation = a
                    },
                    afterCalculateTickRotation: function () {
                        B.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function () {
                        B.callback(this.options.beforeFit, [this])
                    },
                    fit: function () {
                        var t, e = this, i = e.minSize = {width: 0, height: 0}, n = f(e._ticks), o = e.options,
                            a = o.ticks, r = o.scaleLabel, s = o.gridLines, l = o.display, u = e.isHorizontal(),
                            d = g(a), c = o.gridLines.tickMarkLength;
                        i.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : l && s.drawTicks ? c : 0, i.height = u ? l && s.drawTicks ? c : 0 : e.maxHeight, r.display && l && (t = p(r) + B.options.toPadding(r.padding).height, u ? i.height += t : i.width += t), a.display && l && (s = B.longestText(e.ctx, d.font, n, e.longestTextCache), c = B.numberOfLabelLines(n), r = .5 * d.size, t = e.options.ticks.padding, u ? (e.longestLabelWidth = s, l = B.toRadians(e.labelRotation), u = Math.cos(l), c = Math.sin(l) * s + d.size * c + r * (c - 1) + r, i.height = Math.min(e.maxHeight, i.height + c + t), e.ctx.font = d.font, c = h(e.ctx, n[0], d.font), n = h(e.ctx, n[n.length - 1], d.font), 0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? u * c + 3 : u * r + 3, e.paddingRight = "bottom" === o.position ? u * r + 3 : u * n + 3) : (e.paddingLeft = c / 2 + 3, e.paddingRight = n / 2 + 3)) : (a.mirror ? s = 0 : s += t + r, i.width = Math.min(e.maxWidth, i.width + s), e.paddingTop = d.size / 2, e.paddingBottom = d.size / 2)), e.handleMargins(), e.width = i.width, e.height = i.height
                    },
                    handleMargins: function () {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function () {
                        B.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function () {
                        return this.options.fullWidth
                    },
                    getRightValue: function (t) {
                        if (B.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t) if (this.isHorizontal()) {
                            if (void 0 !== t.x) return this.getRightValue(t.x)
                        } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: B.noop,
                    getPixelForValue: B.noop,
                    getValueForPixel: B.noop,
                    getPixelForTick: function (t) {
                        var e = this, i = e.options.offset;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                o = n * t + e.paddingLeft;
                            i && (o += n / 2);
                            o = e.left + Math.round(o);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        o = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (o / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function (t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                i = e.left + Math.round(i);
                            return i += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function () {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function () {
                        var t = this.min, e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                    },
                    _autoSkip: function (t) {
                        var e, i, n, o, a = this, r = a.isHorizontal(), s = a.options.ticks.minor, l = t.length,
                            u = B.toRadians(a.labelRotation), u = Math.cos(u), u = a.longestLabelWidth * u, d = [];
                        for (s.maxTicksLimit && (o = s.maxTicksLimit), r && (e = !1, (u + s.autoSkipPadding) * l > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((u + s.autoSkipPadding) * l / (a.width - (a.paddingLeft + a.paddingRight)))), o && o < l && (e = Math.max(e, Math.floor(l / o)))), i = 0; i < l; i++) n = t[i], (1 < e && 0 < i % e || i % e == 0 && l <= i + e) && i !== l - 1 && delete n.label, d.push(n);
                        return d
                    },
                    draw: function (k) {
                        var o, w, M, S, C, _, D, a, r, s, l, I, t, P, A, T, F, O, R, e, i, n, u, d, c, h, f,
                            L = this, z = L.options;
                        z.display && (o = L.ctx, w = m.global, M = z.ticks.minor, i = z.ticks.major || M, S = z.gridLines, f = z.scaleLabel, C = 0 !== L.labelRotation, _ = L.isHorizontal(), D = M.autoSkip ? L._autoSkip(L.getTicks()) : L.getTicks(), a = B.valueOrDefault(M.fontColor, w.defaultFontColor), r = g(M), s = B.valueOrDefault(i.fontColor, w.defaultFontColor), l = g(i), I = S.drawTicks ? S.tickMarkLength : 0, c = B.valueOrDefault(f.fontColor, w.defaultFontColor), h = g(f), t = B.options.toPadding(f.padding), P = B.toRadians(L.labelRotation), A = [], T = "right" === z.position ? L.left : L.right - I, F = "right" === z.position ? L.left + I : L.right, O = "bottom" === z.position ? L.top : L.bottom - I, R = "bottom" === z.position ? L.top + I : L.bottom, B.each(D, function (t, e) {
                            var i, n, o, a, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y;
                            B.isNullOrUndef(t.label) || (i = t.label, f = e === L.zeroLineIndex && z.offset === S.offsetGridLines ? (n = S.zeroLineWidth, o = S.zeroLineColor, a = S.zeroLineBorderDash, S.zeroLineBorderDashOffset) : (n = B.valueAtIndexOrDefault(S.lineWidth, e), o = B.valueAtIndexOrDefault(S.color, e), a = B.valueOrDefault(S.borderDash, w.borderDash), B.valueOrDefault(S.borderDashOffset, w.borderDashOffset)), p = g = "middle", y = M.padding, _ ? (m = I + y, v = "bottom" === z.position ? (p = C ? "middle" : "top", g = C ? "right" : "center", L.top + m) : (p = C ? "middle" : "bottom", g = C ? "left" : "center", L.bottom - m), (b = N(L, e, S.offsetGridLines && 1 < D.length)) < L.left && (o = "rgba(0,0,0,0)"), b += B.aliasPixel(n), x = L.getPixelForTick(e) + M.labelOffset, r = l = d = h = b, s = O, u = R, c = k.top, m = k.bottom) : (b = "left" === z.position, y = M.mirror ? (g = b ? "left" : "right", y) : (g = b ? "right" : "left", I + y), x = b ? L.right - y : L.left + y, (y = N(L, e, S.offsetGridLines && 1 < D.length)) < L.top && (o = "rgba(0,0,0,0)"), y += B.aliasPixel(n), v = L.getPixelForTick(e) + M.labelOffset, r = T, l = F, d = k.left, h = k.right, s = u = c = m = y), A.push({
                                tx1: r,
                                ty1: s,
                                tx2: l,
                                ty2: u,
                                x1: d,
                                y1: c,
                                x2: h,
                                y2: m,
                                labelX: x,
                                labelY: v,
                                glWidth: n,
                                glColor: o,
                                glBorderDash: a,
                                glBorderDashOffset: f,
                                rotation: -1 * P,
                                label: i,
                                major: t.major,
                                textBaseline: p,
                                textAlign: g
                            }))
                        }), B.each(A, function (t) {
                            if (S.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), S.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), S.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), M.display) {
                                o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = (t.major ? l : r).font, o.fillStyle = t.major ? s : a, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                                var e = t.label;
                                if (B.isArray(e)) for (var i = 0, n = 0; i < e.length; ++i) o.fillText("" + e[i], 0, n), n += 1.5 * r.size; else o.fillText(e, 0, 0);
                                o.restore()
                            }
                        }), f.display && (d = 0, e = p(f) / 2, _ ? (n = L.left + (L.right - L.left) / 2, u = "bottom" === z.position ? L.bottom - e - t.bottom : L.top + e + t.top) : (n = (i = "left" === z.position) ? L.left + e + t.top : L.right - e - t.top, u = L.top + (L.bottom - L.top) / 2, d = i ? -.5 * Math.PI : .5 * Math.PI), o.save(), o.translate(n, u), o.rotate(d), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = c, o.font = h.font, o.fillText(f.labelString, 0, 0), o.restore()), S.drawBorder && (o.lineWidth = B.valueAtIndexOrDefault(S.lineWidth, 0), o.strokeStyle = B.valueAtIndexOrDefault(S.color, 0), u = L.left, d = L.right, c = L.top, h = L.bottom, f = B.aliasPixel(o.lineWidth), _ ? (c = h = "top" === z.position ? L.bottom : L.top, c += f, h += f) : (u = d = "left" === z.position ? L.right : L.left, u += f, d += f), o.beginPath(), o.moveTo(u, c), o.lineTo(d, h), o.stroke()))
                    }
                })
            }
        }, {25: 25, 26: 26, 34: 34, 45: 45}], 33: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(45);
            e.exports = function (i) {
                i.scaleService = {
                    constructors: {}, defaults: {}, registerScaleType: function (t, e, i) {
                        this.constructors[t] = e, this.defaults[t] = o.clone(i)
                    }, getScaleConstructor: function (t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    }, getScaleDefaults: function (t) {
                        return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
                    }, updateScaleDefaults: function (t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
                    }, addScalesToLayout: function (e) {
                        o.each(e.scales, function (t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, i.layoutService.addBox(e, t)
                        })
                    }
                }
            }
        }, {25: 25, 45: 45}], 34: [function (t, e, i) {
            "use strict";
            var u = t(45);
            e.exports = {
                generators: {
                    linear: function (t, e) {
                        var i, n, o = [];
                        n = t.stepSize && 0 < t.stepSize ? t.stepSize : (i = u.niceNum(e.max - e.min, !1), u.niceNum(i / (t.maxTicks - 1), !0));
                        var a = Math.floor(e.min / n) * n, e = Math.ceil(e.max / n) * n;
                        t.min && t.max && t.stepSize && u.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (a = t.min, e = t.max);
                        var r = (e - a) / n,
                            r = u.almostEquals(r, Math.round(r), n / 1e3) ? Math.round(r) : Math.ceil(r);
                        o.push(void 0 !== t.min ? t.min : a);
                        for (var s = 1; s < r; ++s) o.push(a + s * n);
                        return o.push(void 0 !== t.max ? t.max : e), o
                    }, logarithmic: function (t, e) {
                        var i, n, o = [], a = u.valueOrDefault,
                            r = a(t.min, Math.pow(10, Math.floor(u.log10(e.min)))), s = Math.floor(u.log10(e.max)),
                            l = Math.ceil(e.max / Math.pow(10, s));
                        for (0 === r ? (i = Math.floor(u.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(u.log10(r)), n = Math.floor(r / Math.pow(10, i))); o.push(r), 10 === ++n && (n = 1, ++i), r = n * Math.pow(10, i), i < s || i === s && n < l;) ;
                        t = a(t.max, r);
                        return o.push(t), o
                    }
                }, formatters: {
                    values: function (t) {
                        return u.isArray(t) ? t : "" + t
                    }, linear: function (t, e, i) {
                        var i = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                        1 < Math.abs(i) && t !== Math.floor(t) && (i = t - Math.floor(t));
                        var i = u.log10(Math.abs(i));
                        return 0 !== t ? (i = -1 * Math.floor(i), i = Math.max(Math.min(i, 20), 0), t.toFixed(i)) : "0"
                    }, logarithmic: function (t, e, i) {
                        var n = t / Math.pow(10, Math.floor(u.log10(t)));
                        return 0 === t ? "0" : 1 == n || 2 == n || 5 == n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {45: 45}], 35: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(26), T = t(45);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: T.noop,
                        title: function (t, e) {
                            var i = "", n = e.labels, e = n ? n.length : 0;
                            return 0 < t.length && ((t = t[0]).xLabel ? i = t.xLabel : 0 < e && t.index < e && (i = n[t.index])), i
                        },
                        afterTitle: T.noop,
                        beforeBody: T.noop,
                        beforeLabel: T.noop,
                        label: function (t, e) {
                            e = e.datasets[t.datasetIndex].label || "";
                            return e && (e += ": "), e += t.yLabel
                        },
                        labelColor: function (t, e) {
                            t = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {borderColor: t.borderColor, backgroundColor: t.backgroundColor}
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: T.noop,
                        afterBody: T.noop,
                        beforeFooter: T.noop,
                        footer: T.noop,
                        afterFooter: T.noop
                    }
                }
            }), e.exports = function (I) {
                function c(t, e) {
                    t = T.color(t);
                    return t.alpha(e * t.alpha()).rgbaString()
                }

                function r(t, e) {
                    return e && (T.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function P(t) {
                    var e = n.global, i = T.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function A(t, e) {
                    var i = t._chart.ctx, n = 2 * e.yPadding, o = 0, a = e.body, r = a.reduce(function (t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }, 0);
                    r += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length, l = e.footer.length, u = e.titleFontSize, d = e.bodyFontSize,
                        t = e.footerFontSize;
                    n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * d, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * t, n += l ? (l - 1) * e.footerSpacing : 0;

                    function c(t) {
                        o = Math.max(o, i.measureText(t).width + h)
                    }

                    var h = 0;
                    return i.font = T.fontString(u, e._titleFontStyle, e._titleFontFamily), T.each(e.title, c), i.font = T.fontString(d, e._bodyFontStyle, e._bodyFontFamily), T.each(e.beforeBody.concat(e.afterBody), c), h = e.displayColors ? d + 2 : 0, T.each(a, function (t) {
                        T.each(t.before, c), T.each(t.lines, c), T.each(t.after, c)
                    }), h = 0, i.font = T.fontString(t, e._footerFontStyle, e._footerFontFamily), T.each(e.footer, c), {
                        width: o += 2 * e.xPadding,
                        height: n
                    }
                }

                I.Tooltip = o.extend({
                    initialize: function () {
                        this._model = P(this._options), this._lastActive = []
                    }, getTitle: function () {
                        var t = this._options.callbacks, e = t.beforeTitle.apply(this, arguments),
                            i = t.title.apply(this, arguments), n = t.afterTitle.apply(this, arguments),
                            t = r(t = [], e);
                        return t = r(t, i), t = r(t, n)
                    }, getBeforeBody: function () {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return T.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getBody: function (t, i) {
                        var n = this, o = n._options.callbacks, a = [];
                        return T.each(t, function (t) {
                            var e = {before: [], lines: [], after: []};
                            r(e.before, o.beforeLabel.call(n, t, i)), r(e.lines, o.label.call(n, t, i)), r(e.after, o.afterLabel.call(n, t, i)), a.push(e)
                        }), a
                    }, getAfterBody: function () {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return T.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getFooter: function () {
                        var t = this._options.callbacks, e = t.beforeFooter.apply(this, arguments),
                            i = t.footer.apply(this, arguments), n = t.afterFooter.apply(this, arguments),
                            t = r(t = [], e);
                        return t = r(t, i), t = r(t, n)
                    }, update: function (t) {
                        var e, i, n, o, a, r, s, l, u, d, c, h, f = this, g = f._options, p = f._model,
                            m = f._model = P(g), v = f._active, b = f._data,
                            x = {xAlign: p.xAlign, yAlign: p.yAlign}, y = {x: p.x, y: p.y},
                            k = {width: p.width, height: p.height}, w = {x: p.caretX, y: p.caretY};
                        if (v.length) {
                            m.opacity = 1;
                            for (var M = [], S = [], w = I.Tooltip.positioners[g.position].call(f, v, f._eventPosition), C = [], _ = 0, D = v.length; _ < D; ++_) C.push((l = v[_], h = c = d = u = void 0, u = l._xScale, d = l._yScale || l._scale, c = l._index, h = l._datasetIndex, {
                                xLabel: u ? u.getLabelForIndex(c, h) : "",
                                yLabel: d ? d.getLabelForIndex(c, h) : "",
                                index: c,
                                datasetIndex: h,
                                x: l._model.x,
                                y: l._model.y
                            }));
                            g.filter && (C = C.filter(function (t) {
                                return g.filter(t, b)
                            })), g.itemSort && (C = C.sort(function (t, e) {
                                return g.itemSort(t, e, b)
                            })), T.each(C, function (t) {
                                M.push(g.callbacks.labelColor.call(f, t, f._chart)), S.push(g.callbacks.labelTextColor.call(f, t, f._chart))
                            }), m.title = f.getTitle(C, b), m.beforeBody = f.getBeforeBody(C, b), m.body = f.getBody(C, b), m.afterBody = f.getAfterBody(C, b), m.footer = f.getFooter(C, b), m.x = Math.round(w.x), m.y = Math.round(w.y), m.caretPadding = g.caretPadding, m.labelColors = M, m.labelTextColors = S, m.dataPoints = C, x = function (t, e) {
                                var i, n = t._model, o = t._chart, a = t._chart.chartArea, r = "center",
                                    s = "center", l = "nocenter" === t._options?.yAlign ? 11 : 0;
                                n.y < e.height ? s = "top" : n.y > o.height - e.height - l && (s = "bottom");
                                var u = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2,
                                    c = "center" === s ? (i = function (t) {
                                        return t <= u
                                    }, function (t) {
                                        return u < t
                                    }) : (i = function (t) {
                                        return t <= e.width / 2
                                    }, function (t) {
                                        return t >= o.width - e.width / 2
                                    }), h = function (t) {
                                        return t + e.width > o.width
                                    }, l = function (t) {
                                        return t - e.width < 0
                                    }, a = function (t) {
                                        return t <= d ? "top" : "bottom"
                                    };
                                return i(n.x) ? (r = "left", h(n.x) && (r = "center", s = a(n.y))) : c(n.x) && (r = "right", l(n.x) && (r = "center", s = a(n.y))), {
                                    xAlign: (t = t._options).xAlign || r,
                                    yAlign: t.yAlign ? "nocenter" == t.yAlign ? "center" == s ? "top" : s : t.yAlign : s
                                }
                            }(this, k = A(this, m)), i = k, n = x, o = (e = m).x, a = e.y, r = e.caretSize, s = e.caretPadding, p = e.cornerRadius, e = n.xAlign, n = n.yAlign, r += s, s = p + s, "right" === e ? o -= i.width : "center" === e && (o -= i.width / 2), "top" === n ? a += r : a -= "bottom" === n ? i.height + r : i.height / 2, "center" === n ? "left" === e ? o += r : "right" === e && (o -= r) : "left" === e ? o -= s : "right" === e && (o += s), y = {
                                x: o,
                                y: a
                            }
                        } else m.opacity = 0;
                        return m.xAlign = x.xAlign, m.yAlign = x.yAlign, m.x = y.x, m.y = y.y, m.width = k.width, m.height = k.height, m.caretX = w.x, m.caretY = w.y, f._model = m, t && g.custom && g.custom.call(f, m), f
                    }, drawCaret: function (t, e) {
                        var i = this._chart.ctx, n = this._view, n = this.getCaretPosition(t, e, n);
                        i.lineTo(n.x1, n.y1), i.lineTo(n.x2, n.y2), i.lineTo(n.x3, n.y3)
                    }, getCaretPosition: function (t, e, i) {
                        var n, o, a, r, s, l, u = i.caretSize, d = i.cornerRadius, c = i.xAlign, h = i.yAlign,
                            f = t.x, i = t.y, t = e.width, e = e.height;
                        return "center" === h ? (a = i + e / 2, r = "left" === c ? (n = (l = f) - u, s = l, o = a + u, a - u) : (n = (l = f + t) + u, s = l, o = a - u, a + u)) : (s = (l = "left" === c ? (n = f + d + u) - u : "right" === c ? (n = f + t - d - u) - u : (n = f + t / 2) - u, n + u), "top" === h ? (a = (o = i) - u, r = o) : (a = (o = i + e) + u, r = o, u = s, s = l, l = u)), {
                            x1: l,
                            x2: n,
                            x3: s,
                            y1: o,
                            y2: a,
                            y3: r
                        }
                    }, drawTitle: function (t, e, i, n) {
                        var o = e.title;
                        if (o.length) {
                            i.textAlign = e._titleAlign, i.textBaseline = "top";
                            var a, r, s = e.titleFontSize, l = e.titleSpacing;
                            for (i.fillStyle = c(e.titleFontColor, n), i.font = T.fontString(s, e._titleFontStyle, e._titleFontFamily), a = 0, r = o.length; a < r; ++a) i.fillText(o[a], t.x, t.y), t.y += s + l, a + 1 === o.length && (t.y += e.titleMarginBottom - l)
                        }
                    }, drawBody: function (n, o, a, r) {
                        var s = o.bodyFontSize, e = o.bodySpacing, t = o.body;
                        a.textAlign = o._bodyAlign, a.textBaseline = "top", a.font = T.fontString(s, o._bodyFontStyle, o._bodyFontFamily);

                        function l(t) {
                            a.fillText(t, n.x + i, n.y), n.y += s + e
                        }

                        var i = 0;
                        a.fillStyle = c(o.bodyFontColor, r), T.each(o.beforeBody, l);
                        var u = o.displayColors, i = u ? s + 2 : 0;
                        T.each(t, function (t, e) {
                            var i = c(o.labelTextColors[e], r);
                            a.fillStyle = i, T.each(t.before, l), T.each(t.lines, function (t) {
                                u && (a.fillStyle = c(o.legendColorBackground, r), a.fillRect(n.x, n.y, s, s), a.lineWidth = 1, a.strokeStyle = c(o.labelColors[e].borderColor, r), a.strokeRect(n.x, n.y, s, s), a.fillStyle = c(o.labelColors[e].backgroundColor, r), a.fillRect(n.x + 1, n.y + 1, s - 2, s - 2), a.fillStyle = i), l(t)
                            }), T.each(t.after, l)
                        }), i = 0, T.each(o.afterBody, l), n.y -= e
                    }, drawFooter: function (e, i, n, t) {
                        var o = i.footer;
                        o.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = c(i.footerFontColor, t), n.font = T.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), T.each(o, function (t) {
                            n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                        }))
                    }, drawBackground: function (t, e, i, n, o) {
                        i.fillStyle = c(e.backgroundColor, o), i.strokeStyle = c(e.borderColor, o), i.lineWidth = e.borderWidth;
                        var a = e.xAlign, r = e.yAlign, s = t.x, l = t.y, u = n.width, d = n.height,
                            o = e.cornerRadius;
                        i.beginPath(), i.moveTo(s + o, l), "top" === r && this.drawCaret(t, n), i.lineTo(s + u - o, l), i.quadraticCurveTo(s + u, l, s + u, l + o), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(s + u, l + d - o), i.quadraticCurveTo(s + u, l + d, s + u - o, l + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(s + o, l + d), i.quadraticCurveTo(s, l + d, s, l + d - o), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(s, l + o), i.quadraticCurveTo(s, l, s + o, l), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
                    }, draw: function () {
                        var t, e, i, n, o = this._chart.ctx, a = this._view;
                        0 !== a.opacity && (t = {width: a.width, height: a.height}, e = {
                            x: a.x,
                            y: a.y
                        }, (i = Math.abs(a.opacity < .001) ? 0 : a.opacity) < 1 && (i = 0), n = a.title.length || a.beforeBody.length || a.body.length || a.afterBody.length || a.footer.length, this._options.enabled && n && (this.drawBackground(e, a, o, t, i), e.x += a.xPadding, e.y += a.yPadding, this.drawTitle(e, a, o, i), this.drawBody(e, a, o, i), this.drawFooter(e, a, o, i)))
                    }, handleEvent: function (t) {
                        var e = this, i = e._options, n = !1;
                        return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), (n = !T.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active, (i.enabled || i.custom) && (e._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, t = e._model, e.update(!0), e.pivot(), n |= t.x !== e._model.x || t.y !== e._model.y), n)
                    }
                }), I.Tooltip.positioners = {
                    average: function (t) {
                        if (!t.length) return !1;
                        for (var e = 0, i = 0, n = 0, o = 0, a = t.length; o < a; ++o) {
                            var r = t[o];
                            r && r.hasValue() && (e += (r = r.tooltipPosition()).x, i += r.y, ++n)
                        }
                        return {x: Math.round(e / n), y: Math.round(i / n)}
                    }, nearest: function (t, e) {
                        for (var i, n, o = e.x, a = e.y, r = Number.POSITIVE_INFINITY, s = 0, l = t.length; s < l; ++s) {
                            var u, d = t[s];
                            d && d.hasValue() && (u = d.getCenterPoint(), (u = T.distanceBetweenPoints(e, u)) < r && (r = u, i = d))
                        }
                        return i && (o = (n = i.tooltipPosition()).x, a = n.y), {x: o, y: a}
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 36: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(26), r = t(45);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = o.extend({
                inLabelRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                }, inRange: function (t, e) {
                    var i = this._view;
                    if (i) {
                        for (var e = r.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), n = e.angle, e = e.distance, o = i.startAngle, a = i.endAngle; a < o;) a += 2 * Math.PI;
                        for (; a < n;) n -= 2 * Math.PI;
                        for (; n < o;) n += 2 * Math.PI;
                        i = e >= i.innerRadius && e <= i.outerRadius;
                        return o <= n && n <= a && i
                    }
                    return !1
                }, getCenterPoint: function () {
                    var t = this._view, e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, getArea: function () {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                }, tooltipPosition: function () {
                    var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, draw: function () {
                    var t = this._chart.ctx, e = this._view, i = e.startAngle, n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 37: [function (t, e, i) {
            "use strict";
            var n = t(25), o = t(26), d = t(45), c = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: c.defaultColor,
                        borderWidth: 3,
                        borderColor: c.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = o.extend({
                draw: function () {
                    var t, e, i, n, o = this._view, a = this._chart.ctx, r = o.spanGaps, s = this._children.slice(),
                        l = c.elements.line, u = -1;
                    for (this._loop && s.length && s.push(s[0]), a.save(), a.lineCap = o.borderCapStyle || l.borderCapStyle, a.setLineDash && a.setLineDash(o.borderDash || l.borderDash), a.lineDashOffset = o.borderDashOffset || l.borderDashOffset, a.lineJoin = o.borderJoinStyle || l.borderJoinStyle, a.lineWidth = o.borderWidth || l.borderWidth, a.strokeStyle = o.borderColor || c.defaultColor, a.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = d.previousItem(s, t), n = e._view, 0 === t ? n.skip || (a.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? a.moveTo(n.x, n.y) : d.canvas.lineTo(a, i._view, e._view), u = t));
                    a.stroke(), a.restore()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 38: [function (t, e, i) {
            "use strict";
            var d = t(25), n = t(26), c = t(45), h = d.global.defaultColor;

            function o(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
            }

            d._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: h,
                        borderColor: h,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = n.extend({
                inRange: function (t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                }, inLabelRange: o, inXRange: o, inYRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }, getCenterPoint: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                }, draw: function (t) {
                    var e = this._view, i = this._model, n = this._chart.ctx, o = e.pointStyle, a = e.radius,
                        r = e.x, s = e.y, l = c.color, u = 0;
                    e.skip || (n.strokeStyle = e.borderColor || h, n.lineWidth = c.valueOrDefault(e.borderWidth, d.global.elements.point.borderWidth), n.fillStyle = e.backgroundColor || h, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? u = (r - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? u = (i.x - r) / (i.x - t.right) : i.y < t.top ? u = (s - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (u = (i.y - s) / (i.y - t.bottom)), u = Math.round(100 * u) / 100, n.strokeStyle = l(n.strokeStyle).alpha(u).rgbString(), n.fillStyle = l(n.fillStyle).alpha(u).rgbString()), c.canvas.drawPoint(n, o, a, r, s))
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 39: [function (t, e, i) {
            "use strict";
            var n = t(25), t = t(26);

            function r(t) {
                return void 0 !== t._view.width
            }

            function o(t) {
                var e, i, n, o, a = t._view;
                return o = r(t) ? (n = a.width / 2, e = a.x - n, i = a.x + n, n = Math.min(a.y, a.base), Math.max(a.y, a.base)) : (o = a.height / 2, e = Math.min(a.x, a.base), i = Math.max(a.x, a.base), n = a.y - o, a.y + o), {
                    left: e,
                    top: n,
                    right: i,
                    bottom: o
                }
            }

            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = t.extend({
                draw: function () {
                    var t, e, i, n, o, a, r, s, l, u = this._chart.ctx, d = this._view, c = d.borderWidth,
                        h = d.horizontal ? (t = d.base, e = d.x, i = d.y - d.height / 2, n = d.y + d.height / 2, r = t < e ? 1 : -1, a = 1, d.borderSkipped || "left") : (t = d.x - d.width / 2, e = d.x + d.width / 2, r = 1, a = (i = d.y) < (n = d.base) ? 1 : -1, d.borderSkipped || "bottom");
                    c && (o = (c = (l = Math.min(Math.abs(t - e), Math.abs(i - n))) < c ? l : c) / 2, s = i + ("top" !== h ? o * a : 0), l = n + ("bottom" !== h ? -o * a : 0), (a = t + ("left" !== h ? o * r : 0)) !== (r = e + ("right" !== h ? -o * r : 0)) && (i = s, n = l), s !== l && (t = a, e = r)), u.beginPath(), u.fillStyle = d.backgroundColor, u.strokeStyle = d.borderColor, u.lineWidth = c;
                    var f = [[t, n], [t, i], [e, i], [e, n]], g = ["bottom", "left", "top", "right"].indexOf(h, 0);

                    function p(t) {
                        return f[(g + t) % 4]
                    }

                    -1 === g && (g = 0);
                    var m = p(0);
                    u.moveTo(m[0], m[1]);
                    for (var v = 1; v < 4; v++) m = p(v), u.lineTo(m[0], m[1]);
                    u.fill(), c && u.stroke()
                }, height: function () {
                    var t = this._view;
                    return t.base - t.y
                }, inRange: function (t, e) {
                    var i, n = !1;
                    return n = this._view ? t >= (i = o(this)).left && t <= i.right && e >= i.top && e <= i.bottom : n
                }, inLabelRange: function (t, e) {
                    if (!this._view) return !1;
                    var i = o(this);
                    return r(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                }, inXRange: function (t) {
                    var e = o(this);
                    return t >= e.left && t <= e.right
                }, inYRange: function (t) {
                    var e = o(this);
                    return t >= e.top && t <= e.bottom
                }, getCenterPoint: function () {
                    var t, e = this._view,
                        e = r(this) ? (t = e.x, (e.y + e.base) / 2) : (t = (e.x + e.base) / 2, e.y);
                    return {x: t, y: e}
                }, getArea: function () {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }
            })
        }, {25: 25, 26: 26}], 40: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {36: 36, 37: 37, 38: 38, 39: 39}], 41: [function (t, e, i) {
            "use strict";
            t = t(42), i = e.exports = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, roundedRect: function (t, e, i, n, o, a) {
                    var r;
                    a ? (r = Math.min(a, n / 2), a = Math.min(a, o / 2), t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - r, i + o), t.lineTo(e + r, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + r, i)) : t.rect(e, i, n, o)
                }, drawPoint: function (t, e, i, n, o) {
                    var a, r, s, l;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (e) {
                                default:
                                    t.beginPath(), t.arc(n, o, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                                    break;
                                case"triangle":
                                    t.beginPath(), c = (d = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - d / 2, o + c / 3), t.lineTo(n + d / 2, o + c / 3), t.lineTo(n, o - 2 * c / 3), t.closePath(), t.fill();
                                    break;
                                case"rect":
                                    l = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - l, o - l, 2 * l, 2 * l), t.strokeRect(n - l, o - l, 2 * l, 2 * l);
                                    break;
                                case"rectRounded":
                                    var u = i / Math.SQRT2, d = n - u, c = o - u, u = Math.SQRT2 * i;
                                    t.beginPath(), this.roundedRect(t, d, c, u, u, i / 2), t.closePath(), t.fill();
                                    break;
                                case"rectRot":
                                    l = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - l, o), t.lineTo(n, o + l), t.lineTo(n + l, o), t.lineTo(n, o - l), t.closePath(), t.fill();
                                    break;
                                case"cross":
                                    t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                                    break;
                                case"crossRot":
                                    t.beginPath(), r = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(n - r, o - s), t.lineTo(n + r, o + s), t.moveTo(n - r, o + s), t.lineTo(n + r, o - s), t.closePath();
                                    break;
                                case"star":
                                    t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), r = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(n - r, o - s), t.lineTo(n + r, o + s), t.moveTo(n - r, o + s), t.lineTo(n + r, o - s), t.closePath();
                                    break;
                                case"line":
                                    t.beginPath(), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                                    break;
                                case"dash":
                                    t.beginPath(), t.moveTo(n, o), t.lineTo(n + i, o), t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, n - e.width / 2, o - e.height / 2, e.width, e.height)
                }, clipArea: function (t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                }, unclipArea: function (t) {
                    t.restore()
                }, lineTo: function (t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            };
            t.clear = i.clear, t.drawRoundedRectangle = function (t) {
                t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
            }
        }, {42: 42}], 42: [function (t, e, i) {
            "use strict";
            var n, d = {
                noop: function () {
                }, uid: (n = 0, function () {
                    return n++
                }), isNullOrUndef: function (t) {
                    return null == t
                }, isArray: Array.isArray || function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                }, valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                }, valueAtIndexOrDefault: function (t, e, i) {
                    return d.valueOrDefault(d.isArray(t) ? t[e] : t, i)
                }, callback: function (t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                }, each: function (t, e, i, n) {
                    var o, a, r;
                    if (d.isArray(t)) if (a = t.length, n) for (o = a - 1; 0 <= o; o--) e.call(i, t[o], o); else for (o = 0; o < a; o++) e.call(i, t[o], o); else if (d.isObject(t)) for (a = (r = Object.keys(t)).length, o = 0; o < a; o++) e.call(i, t[r[o]], r[o])
                }, arrayEquals: function (t, e) {
                    var i, n, o, a;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i) if (o = t[i], a = e[i], o instanceof Array && a instanceof Array) {
                        if (!d.arrayEquals(o, a)) return !1
                    } else if (o !== a) return !1;
                    return !0
                }, clone: function (t) {
                    if (d.isArray(t)) return t.map(d.clone);
                    if (d.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = d.clone(t[i[o]]);
                        return e
                    }
                    return t
                }, _merger: function (t, e, i, n) {
                    var o = e[t], i = i[t];
                    d.isObject(o) && d.isObject(i) ? d.merge(o, i, n) : e[t] = d.clone(i)
                }, _mergerIf: function (t, e, i) {
                    var n = e[t], i = i[t];
                    d.isObject(n) && d.isObject(i) ? d.mergeIf(n, i) : e.hasOwnProperty(t) || (e[t] = d.clone(i))
                }, merge: function (t, e, i) {
                    var n, o, a, r, s, l = d.isArray(e) ? e : [e], u = l.length;
                    if (!d.isObject(t)) return t;
                    for (n = (i = i || {}).merger || d._merger, o = 0; o < u; ++o) if (e = l[o], d.isObject(e)) for (s = 0, r = (a = Object.keys(e)).length; s < r; ++s) n(a[s], t, e, i);
                    return t
                }, mergeIf: function (t, e) {
                    return d.merge(t, e, {merger: d._mergerIf})
                }, extend: function (i) {
                    for (var t = function (t, e) {
                        i[e] = t
                    }, e = 1, n = arguments.length; e < n; ++e) d.each(arguments[e], t);
                    return i
                }, inherits: function (t) {
                    function e() {
                        this.constructor = n
                    }

                    var i = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return i.apply(this, arguments)
                    };
                    return e.prototype = i.prototype, n.prototype = new e, n.extend = d.inherits, t && d.extend(n.prototype, t), n.__super__ = i.prototype, n
                }
            };
            (e.exports = d).callCallback = d.callback, d.indexOf = function (t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, d.getValueOrDefault = d.valueOrDefault, d.getValueAtIndexOrDefault = d.valueAtIndexOrDefault
        }, {}], 43: [function (t, e, i) {
            "use strict";
            var t = t(42), n = {
                linear: function (t) {
                    return t
                }, easeInQuad: function (t) {
                    return t * t
                }, easeOutQuad: function (t) {
                    return -t * (t - 2)
                }, easeInOutQuad: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }, easeInCubic: function (t) {
                    return t * t * t
                }, easeOutCubic: function (t) {
                    return (t -= 1) * t * t + 1
                }, easeInOutCubic: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, easeInQuart: function (t) {
                    return t * t * t * t
                }, easeOutQuart: function (t) {
                    return -((t -= 1) * t * t * t - 1)
                }, easeInOutQuart: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }, easeInQuint: function (t) {
                    return t * t * t * t * t
                }, easeOutQuint: function (t) {
                    return (t -= 1) * t * t * t * t + 1
                }, easeInOutQuint: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, easeInSine: function (t) {
                    return 1 - Math.cos(t * (Math.PI / 2))
                }, easeOutSine: function (t) {
                    return Math.sin(t * (Math.PI / 2))
                }, easeInOutSine: function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, easeInExpo: function (t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                }, easeOutExpo: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                }, easeInCirc: function (t) {
                    return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                }, easeOutCirc: function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }, easeInOutCirc: function (t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, easeInElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i)))
                }, easeOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i = i || .3, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                }, easeInOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i = i || .45, e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * --t) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                }, easeInBack: function (t) {
                    return t * t * (2.70158 * t - 1.70158)
                }, easeOutBack: function (t) {
                    return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                }, easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                }, easeInBounce: function (t) {
                    return 1 - n.easeOutBounce(1 - t)
                }, easeOutBounce: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, easeInOutBounce: function (t) {
                    return t < .5 ? .5 * n.easeInBounce(2 * t) : .5 * n.easeOutBounce(2 * t - 1) + .5
                }
            };
            e.exports = {effects: n}, t.easingEffects = n
        }, {42: 42}], 44: [function (t, e, i) {
            "use strict";
            var r = t(42);
            e.exports = {
                toLineHeight: function (t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case"px":
                            return t;
                        case"%":
                            t /= 100
                    }
                    return e * t
                }, toPadding: function (t) {
                    var e, i, n, o;
                    return r.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, o = +t.left || 0) : e = i = n = o = +t || 0, {
                        top: e,
                        right: i,
                        bottom: n,
                        left: o,
                        height: e + n,
                        width: o + i
                    }
                }, resolve: function (t, e, i) {
                    for (var n, o = 0, a = t.length; o < a; ++o) if (void 0 !== (n = t[o]) && (void 0 !== e && "function" == typeof n && (n = n(e)), void 0 !== (n = void 0 !== i && r.isArray(n) ? n[i] : n))) return n
                }
            }
        }, {42: 42}], 45: [function (t, e, i) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {41: 41, 42: 42, 43: 43, 44: 44}], 46: [function (t, e, i) {
            e.exports = {
                acquireContext: function (t) {
                    return (t = t && t.canvas ? t.canvas : t) && t.getContext("2d") || null
                }
            }
        }, {}], 47: [function (t, e, i) {
            "use strict";
            var f = t(45), g = "$chartjs", p = "chartjs-", m = p + "render-monitor", v = p + "render-animation",
                b = ["animationstart", "webkitAnimationStart"], r = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function s(t, e) {
                e = f.getStyle(t, e), e = e && e.match(/^(\d+)(\.\d+)?px$/);
                return e ? Number(e[1]) : void 0
            }

            var n = !!function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {
                }
                return t
            }() && {passive: !0};

            function x(t, e, i) {
                t.addEventListener(e, i, n)
            }

            function a(t, e, i) {
                t.removeEventListener(e, i, n)
            }

            function y(t, e, i, n, o) {
                return {
                    type: t,
                    chart: e,
                    native: o || null,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== n ? n : null
                }
            }

            function l(e, t, i) {
                var n, o, a, r, s, l, u, d, c = e[g] || (e[g] = {}), h = c.resizer = function (t) {
                    var e = document.createElement("div"), i = p + "size-monitor",
                        n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var o = e.childNodes[0], a = e.childNodes[1];

                    function r() {
                        e._reset(), t()
                    }

                    return e._reset = function () {
                        o.scrollLeft = 1e6, o.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                    }, x(o, "scroll", r.bind(o, "expand")), x(a, "scroll", r.bind(a, "shrink")), e
                }((n = function () {
                    if (c.resizer) return t(y("resize", i))
                }, r = !1, function () {
                    a = Array.prototype.slice.call(arguments), o = o || this, r || (r = !0, f.requestAnimFrame.call(window, function () {
                        r = !1, n.apply(o, a)
                    }))
                }));
                l = function () {
                    var t;
                    c.resizer && ((t = e.parentNode) && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset())
                }, u = (s = e)[g] || (s[g] = {}), d = u.renderProxy = function (t) {
                    t.animationName === v && l()
                }, f.each(b, function (t) {
                    x(s, t, d)
                }), u.reflow = !!s.offsetParent, s.classList.add(m)
            }

            function o(t) {
                var e, i, n = t[g] || {}, o = n.resizer;
                delete n.resizer, t = (e = t)[g] || {}, (i = t.renderProxy) && (f.each(b, function (t) {
                    a(e, t, i)
                }), delete t.renderProxy), e.classList.remove(m), o && o.parentNode && o.parentNode.removeChild(o)
            }

            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                    var t, e, i = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + v + "{" + i + "}@keyframes " + v + "{" + i + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (e = "/* Chart.js */\n" + e, (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                }, acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]);
                    var i, n, o, a, r = (t = t && t.canvas ? t.canvas : t) && t.getContext && t.getContext("2d");
                    return r && r.canvas === t ? (n = e, a = (i = t).style, e = i.getAttribute("height"), t = i.getAttribute("width"), i[g] = {
                        initial: {
                            height: e,
                            width: t,
                            style: {display: a.display, height: a.height, width: a.width}
                        }
                    }, a.display = a.display || "block", null !== t && "" !== t || void 0 !== (o = s(i, "width")) && (i.width = o), null !== e && "" !== e || ("" === i.style.height ? i.height = i.width / (n.options.aspectRatio || 2) : (n = s(i, "height"), void 0 !== o && (i.height = n))), r) : null
                }, releaseContext: function (t) {
                    var i, n = t.canvas;
                    n[g] && (i = n[g].initial, ["height", "width"].forEach(function (t) {
                        var e = i[t];
                        f.isNullOrUndef(e) ? n.removeAttribute(t) : n.setAttribute(t, e)
                    }), f.each(i.style || {}, function (t, e) {
                        n.style[e] = t
                    }), n.width = n.width, delete n[g])
                }, addEventListener: function (o, t, a) {
                    var e, i = o.canvas;
                    "resize" !== t ? x(i, t, ((e = a[g] || (a[g] = {})).proxies || (e.proxies = {}))[o.id + "_" + t] = function (t) {
                        var e, i, n;
                        a((i = o, n = r[(e = t).type] || e.type, t = f.getRelativePosition(e, i), y(n, i, t.x, t.y, e)))
                    }) : l(i, a, o)
                }, removeEventListener: function (t, e, i) {
                    var n = t.canvas;
                    "resize" !== e ? (t = ((i[g] || {}).proxies || {})[t.id + "_" + e]) && a(n, e, t) : o(n)
                }
            }, f.addEvent = x, f.removeEvent = a
        }, {45: 45}], 48: [function (t, e, i) {
            "use strict";
            var n = t(45), o = t(46), t = t(47), o = t._enabled ? t : o;
            e.exports = n.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, o)
        }, {45: 45, 46: 46, 47: 47}], 49: [function (t, e, i) {
            "use strict";
            var s = t(25), f = t(40), l = t(45);
            s._set("global", {plugins: {filler: {propagate: !0}}}), e.exports = function () {
                var h = {
                    dataset: function (t) {
                        var e = t.fill, i = t.chart, t = i.getDatasetMeta(e),
                            n = t && i.isDatasetVisible(e) && t.dataset._children || [], o = n.length || 0;
                        return o ? function (t, e) {
                            return e < o && n[e]._view || null
                        } : null
                    }, boundary: function (t) {
                        var t = t.boundary, e = t ? t.x : null, i = t ? t.y : null;
                        return function (t) {
                            return {x: null === e ? t.x : e, y: null === i ? t.y : i}
                        }
                    }
                };

                function b(t) {
                    return t && !t.skip
                }

                function x(t, e, i, n, o) {
                    var a;
                    if (n && o) {
                        for (t.moveTo(e[0].x, e[0].y), a = 1; a < n; ++a) l.canvas.lineTo(t, e[a - 1], e[a]);
                        for (t.lineTo(i[o - 1].x, i[o - 1].y), a = o - 1; 0 < a; --a) l.canvas.lineTo(t, i[a], i[a - 1], !0)
                    }
                }

                return {
                    id: "filler", afterDatasetsUpdate: function (t, e) {
                        for (var i, n, o, a, r, s, l = (t.data.datasets || []).length, u = e.propagate, d = [], c = 0; c < l; ++c) o = null, (n = (i = t.getDatasetMeta(c)).dataset) && n._model && n instanceof f.Line && (o = {
                            visible: t.isDatasetVisible(c),
                            fill: function (t, e, i) {
                                var n = (t = t._model || {}).fill;
                                if (!1 === (n = void 0 === n ? !!t.backgroundColor : n) || null === n) return !1;
                                if (!0 === n) return "origin";
                                if (t = parseFloat(n, 10), isFinite(t) && Math.floor(t) === t) return !((t = "-" === n[0] || "+" === n[0] ? e + t : t) === e || t < 0 || i <= t) && t;
                                switch (n) {
                                    case"bottom":
                                        return "start";
                                    case"top":
                                        return "end";
                                    case"zero":
                                        return "origin";
                                    case"origin":
                                    case"start":
                                    case"end":
                                        return n;
                                    default:
                                        return !1
                                }
                            }(n, c, l),
                            chart: t,
                            el: n
                        }), i.$filler = o, d.push(o);
                        for (c = 0; c < l; ++c) (o = d[c]) && (o.fill = function (t, e, i) {
                            var n, o = t[e].fill, a = [e];
                            if (!i) return o;
                            for (; !1 !== o && -1 === a.indexOf(o);) {
                                if (!isFinite(o)) return o;
                                if (!(n = t[o])) return !1;
                                if (n.visible) return o;
                                a.push(o), o = n.fill
                            }
                            return !1
                        }(d, c, u), o.boundary = function (t) {
                            var e = t.el._model || {}, i = t.el._scale || {}, n = t.fill, t = null;
                            if (isFinite(n)) return null;
                            if ("start" === n ? t = void 0 === e.scaleBottom ? i.bottom : e.scaleBottom : "end" === n ? t = void 0 === e.scaleTop ? i.top : e.scaleTop : void 0 !== e.scaleZero ? t = e.scaleZero : i.getBasePosition ? t = i.getBasePosition() : i.getBasePixel && (t = i.getBasePixel()), null != t) {
                                if (void 0 !== t.x && void 0 !== t.y) return t;
                                if ("number" == typeof t && isFinite(t)) return {
                                    x: (i = i.isHorizontal()) ? t : null,
                                    y: i ? null : t
                                }
                            }
                            return null
                        }(o), o.mapper = (s = r = void 0, r = (a = o).fill, !(s = "dataset") === r ? null : (isFinite(r) || (s = "boundary"), h[s](a))))
                    }, beforeDatasetDraw: function (t, e) {
                        var i, n, o, a, r = e.meta.$filler;
                        r && (i = t.ctx, o = (n = r.el)._view, a = n._children || [], e = r.mapper, r = o.backgroundColor || s.global.defaultColor, e && r && a.length && (l.canvas.clipArea(i, t.chartArea), function (t, e, i, n, o, a) {
                            var r, s, l, u, d, c, h = e.length, f = n.spanGaps, g = [], p = [], m = 0, v = 0;
                            for (t.beginPath(), r = 0, s = h + !!a; r < s; ++r) u = i(l = e[c = r % h]._view, c, n), d = b(l), c = b(u), d && c ? (m = g.push(l), v = p.push(u)) : m && v && (f ? (d && g.push(l), c && p.push(u)) : (x(t, g, p, m, v), m = v = 0, g = [], p = []));
                            x(t, g, p, m, v), t.closePath(), t.fillStyle = o, t.fill()
                        }(i, a, e, o, r, n._loop), l.canvas.unclipArea(i)))
                    }
                }
            }
        }, {25: 25, 40: 40, 45: 45}], 50: [function (t, e, i) {
            "use strict";
            var I = t(25), r = t(26), P = t(45);
            I._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e) {
                        var i = e.datasetIndex, n = this.chart, e = n.getDatasetMeta(i);
                        e.hidden = null === e.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (i) {
                            var t = i.data;
                            return P.isArray(t.datasets) ? t.datasets.map(function (t, e) {
                                return {
                                    text: t.label,
                                    fillStyle: P.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !i.isDatasetVisible(e),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: e
                                }
                            }, this) : []
                        }
                    }
                }, legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            }), e.exports = function (n) {
                var o = n.layoutService, t = P.noop;

                function D(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }

                function a(t, e) {
                    var i = new n.Legend({ctx: t.ctx, options: e, chart: t});
                    o.configure(t, i, e), o.addBox(t, i), t.legend = i
                }

                return n.Legend = r.extend({
                    initialize: function (t) {
                        P.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    }, beforeUpdate: t, update: function (t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    }, afterUpdate: t, beforeSetDimensions: t, setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    }, afterSetDimensions: t, beforeBuildLabels: t, buildLabels: function () {
                        var e = this, i = e.options.labels || {},
                            t = P.callback(i.generateLabels, [e.chart], e) || [];
                        i.filter && (t = t.filter(function (t) {
                            return i.filter(t, e.chart.data)
                        })), e.options.reverse && t.reverse(), e.legendItems = t
                    }, afterBuildLabels: t, beforeFit: t, fit: function () {
                        var i, n, o, a, r, s, l, u = this, t = u.options, d = t.labels, e = t.display, c = u.ctx,
                            h = I.global, f = P.valueOrDefault, g = f(d.fontSize, h.defaultFontSize),
                            t = f(d.fontStyle, h.defaultFontStyle), h = f(d.fontFamily, h.defaultFontFamily),
                            t = P.fontString(g, t, h), p = u.legendHitBoxes = [], m = u.minSize,
                            h = u.isHorizontal();
                        h ? (m.width = u.maxWidth, m.height = e ? 10 : 0) : (m.width = e ? 10 : 0, m.height = u.maxHeight), e && (c.font = t, h ? (i = u.lineWidths = [0], n = u.legendItems.length ? g + d.padding : 0, c.textAlign = "left", c.textBaseline = "top", P.each(u.legendItems, function (t, e) {
                            t = D(d, g) + g / 2 + c.measureText(t.text).width;
                            i[i.length - 1] + t + d.padding >= u.width && (n += g + d.padding, i[i.length] = u.left), p[e] = {
                                left: 0,
                                top: 0,
                                width: t,
                                height: g
                            }, i[i.length - 1] += t + d.padding
                        }), m.height += n) : (h = d.padding, o = u.columnWidths = [], a = d.padding, s = r = 0, l = g + h, P.each(u.legendItems, function (t, e) {
                            t = D(d, g) + g / 2 + c.measureText(t.text).width;
                            s + l > m.height && (a += r + d.padding, o.push(r), s = r = 0), r = Math.max(r, t), s += l, p[e] = {
                                left: 0,
                                top: 0,
                                width: t,
                                height: g
                            }
                        }), a += r, o.push(r), m.width += a)), u.width = m.width, u.height = m.height
                    }, afterFit: t, isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    }, draw: function () {
                        var h, f, t, g, e, i, p, m, v, b, x, y = this, k = y.options, w = k.labels, M = I.global,
                            S = M.elements.line, C = y.width, _ = y.lineWidths;
                        k.display && (h = y.ctx, t = (f = P.valueOrDefault)(w.fontColor, M.defaultFontColor), g = f(w.fontSize, M.defaultFontSize), e = f(w.fontStyle, M.defaultFontStyle), i = f(w.fontFamily, M.defaultFontFamily), i = P.fontString(g, e, i), h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = t, h.fillStyle = t, h.font = i, p = D(w, g), m = y.legendHitBoxes, v = y.isHorizontal(), b = v ? {
                            x: y.left + (C - _[0]) / 2,
                            y: y.top + w.padding,
                            line: 0
                        } : {
                            x: y.left + w.padding,
                            y: y.top + w.padding,
                            line: 0
                        }, x = g + w.padding, P.each(y.legendItems, function (t, e) {
                            var i, n, o, a, r, s, l = h.measureText(t.text).width, u = p + g / 2 + l, d = b.x,
                                c = b.y;
                            v ? C <= d + u && (c = b.y += x, b.line++, d = b.x = y.left + (C - _[b.line]) / 2) : c + x > y.bottom && (d = b.x = d + y.columnWidths[b.line] + w.padding, c = b.y = y.top + w.padding, b.line++), i = d, n = c, o = t, isNaN(p) || p <= 0 || (h.save(), h.fillStyle = f(o.fillStyle, M.defaultColor), h.lineCap = f(o.lineCap, S.borderCapStyle), h.lineDashOffset = f(o.lineDashOffset, S.borderDashOffset), h.lineJoin = f(o.lineJoin, S.borderJoinStyle), h.lineWidth = f(o.lineWidth, S.borderWidth), h.strokeStyle = f(o.strokeStyle, M.defaultColor), a = 0 === f(o.lineWidth, S.borderWidth), h.setLineDash && h.setLineDash(f(o.lineDash, S.borderDash)), k.labels && k.labels.usePointStyle ? (s = (r = g * Math.SQRT2 / 2) / Math.SQRT2, P.canvas.drawPoint(h, o.pointStyle, r, i + s, n + s)) : (a || h.strokeRect(i, n, p, g), h.fillRect(i, n, p, g)), h.restore()), m[e].left = d, m[e].top = c, e = t, t = l, d = p + (l = g / 2) + (d = d), l = c + l, h.fillText(e.text, d, l), e.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(d, l), h.lineTo(d + t, l), h.stroke()), v ? b.x += u + w.padding : b.y += x
                        }))
                    }, handleEvent: function (t) {
                        var e = this, i = e.options, n = "mouseup" === t.type ? "click" : t.type, o = !1;
                        if ("mousemove" === n) {
                            if (!i.onHover) return
                        } else {
                            if ("click" !== n) return;
                            if (!i.onClick) return
                        }
                        var a = t.x, r = t.y;
                        if (a >= e.left && a <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (a >= u.left && a <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                if ("click" === n) {
                                    i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                                    break
                                }
                            }
                        }
                        return o
                    }
                }), {
                    id: "legend", beforeInit: function (t) {
                        var e = t.options.legend;
                        e && a(t, e)
                    }, beforeUpdate: function (t) {
                        var e = t.options.legend, i = t.legend;
                        e ? (P.mergeIf(e, I.global.legend), i ? (o.configure(t, i, e), i.options = e) : a(t, e)) : i && (o.removeBox(t, i), delete t.legend)
                    }, afterEvent: function (t, e) {
                        t = t.legend;
                        t && t.handleEvent(e)
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 51: [function (t, e, i) {
            "use strict";
            var x = t(25), r = t(26), y = t(45);
            x._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            }), e.exports = function (n) {
                var o = n.layoutService, t = y.noop;

                function a(t, e) {
                    var i = new n.Title({ctx: t.ctx, options: e, chart: t});
                    o.configure(t, i, e), o.addBox(t, i), t.titleBlock = i
                }

                return n.Title = r.extend({
                    initialize: function (t) {
                        y.extend(this, t), this.legendHitBoxes = []
                    },
                    beforeUpdate: t,
                    update: function (t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: t,
                    beforeSetDimensions: t,
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: t,
                    beforeBuildLabels: t,
                    buildLabels: t,
                    afterBuildLabels: t,
                    beforeFit: t,
                    fit: function () {
                        var t = this, e = y.valueOrDefault, i = t.options, n = i.display,
                            o = e(i.fontSize, x.global.defaultFontSize), a = t.minSize,
                            e = y.isArray(i.text) ? i.text.length : 1, o = y.options.toLineHeight(i.lineHeight, o),
                            i = n ? e * o + 2 * i.padding : 0;
                        t.isHorizontal() ? (a.width = t.maxWidth, a.height = i) : (a.width = i, a.height = t.maxHeight), t.width = a.width, t.height = a.height
                    },
                    afterFit: t,
                    isHorizontal: function () {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function () {
                        var t = this, e = t.ctx, i = y.valueOrDefault, n = t.options, o = x.global;
                        if (n.display) {
                            var a, r, s, l = i(n.fontSize, o.defaultFontSize),
                                u = i(n.fontStyle, o.defaultFontStyle), d = i(n.fontFamily, o.defaultFontFamily),
                                c = y.fontString(l, u, d), h = y.options.toLineHeight(n.lineHeight, l),
                                f = h / 2 + n.padding, g = 0, p = t.top, u = t.left, d = t.bottom, l = t.right;
                            e.fillStyle = i(n.fontColor, o.defaultFontColor), e.font = c, t.isHorizontal() ? (r = u + (l - u) / 2, s = p + f, a = l - u) : (r = "left" === n.position ? u + f : l - f, s = p + (d - p) / 2, a = d - p, g = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, s), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                            var m = n.text;
                            if (y.isArray(m)) for (var v = 0, b = 0; b < m.length; ++b) e.fillText(m[b], 0, v, a), v += h; else e.fillText(m, 0, 0, a);
                            e.restore()
                        }
                    }
                }), {
                    id: "title", beforeInit: function (t) {
                        var e = t.options.title;
                        e && a(t, e)
                    }, beforeUpdate: function (t) {
                        var e = t.options.title, i = t.titleBlock;
                        e ? (y.mergeIf(e, x.global.title), i ? (o.configure(t, i, e), i.options = e) : a(t, e)) : i && (n.layoutService.removeBox(t, i), delete t.titleBlock)
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 52: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                var e = t.Scale.extend({
                    getLabels: function () {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    }, determineDataLimits: function () {
                        var t, e = this, i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    }, buildTicks: function () {
                        var t = this, e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    }, getLabelForIndex: function (t, e) {
                        var i = this, n = i.chart.data, o = i.isHorizontal();
                        return n.yLabels && !o ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                    }, getPixelForValue: function (t, e) {
                        var i, n = this, o = n.options.offset,
                            a = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
                        if ((void 0 !== (i = null != t ? n.isHorizontal() ? t.x : t.y : i) || void 0 !== t && isNaN(e)) && (e = -1 !== (r = n.getLabels().indexOf(t = i || t)) ? r : e), n.isHorizontal()) {
                            var t = n.width / a, r = t * (e - n.minIndex);
                            return o && (r += t / 2), n.left + Math.round(r)
                        }
                        a = n.height / a, e = a * (e - n.minIndex);
                        return o && (e += a / 2), n.top + Math.round(e)
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    }, getValueForPixel: function (t) {
                        var e = this, i = e.options.offset, n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            o = e.isHorizontal(), n = (o ? e.width : e.height) / n;
                        return t -= o ? e.left : e.top, i && (t -= n / 2), (t <= 0 ? 0 : Math.round(t / n)) + e.minIndex
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", e, {position: "bottom"})
            }
        }, {}], 53: [function (t, e, i) {
            "use strict";
            var n = t(25), c = t(45), o = t(34);
            e.exports = function (t) {
                var e = {position: "left", ticks: {callback: o.formatters.linear}}, i = t.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        var r = this, s = r.options, l = r.chart, t = l.data.datasets, e = r.isHorizontal();

                        function u(t) {
                            return e ? t.xAxisID === r.id : t.yAxisID === r.id
                        }

                        r.min = null, r.max = null;
                        var d, n = s.stacked;
                        void 0 === n && c.each(t, function (t, e) {
                            var i;
                            n || (i = l.getDatasetMeta(e), l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (n = !0))
                        }), s.stacked || n ? (d = {}, c.each(t, function (t, e) {
                            var i = l.getDatasetMeta(e),
                                n = [i.type, void 0 === s.stacked && void 0 === i.stack ? e : "", i.stack].join(".");
                            void 0 === d[n] && (d[n] = {positiveValues: [], negativeValues: []});
                            var o = d[n].positiveValues, a = d[n].negativeValues;
                            l.isDatasetVisible(e) && u(i) && c.each(t.data, function (t, e) {
                                t = +r.getRightValue(t);
                                isNaN(t) || i.data[e].hidden || (o[e] = o[e] || 0, a[e] = a[e] || 0, s.relativePoints ? o[e] = 100 : t < 0 ? a[e] += t : o[e] += t)
                            })
                        }), c.each(d, function (t) {
                            var e = t.positiveValues.concat(t.negativeValues), t = c.min(e), e = c.max(e);
                            r.min = null === r.min ? t : Math.min(r.min, t), r.max = null === r.max ? e : Math.max(r.max, e)
                        })) : c.each(t, function (t, e) {
                            var i = l.getDatasetMeta(e);
                            l.isDatasetVisible(e) && u(i) && c.each(t.data, function (t, e) {
                                t = +r.getRightValue(t);
                                isNaN(t) || i.data[e].hidden || ((null === r.min || t < r.min) && (r.min = t), (null === r.max || t > r.max) && (r.max = t))
                            })
                        }), r.min = isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = isFinite(r.max) && !isNaN(r.max) ? r.max : 1, this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var t, e = this.options.ticks;
                        return this.isHorizontal() ? Math.min(e.maxTicksLimit || 11, Math.ceil(this.width / 50)) : (t = c.valueOrDefault(e.fontSize, n.global.defaultFontSize), Math.min(e.maxTicksLimit || 11, Math.ceil(this.height / (2 * t))))
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForValue: function (t) {
                        var e, i = this, n = i.start, o = +i.getRightValue(t), t = i.end - n;
                        return e = i.isHorizontal() ? i.left + i.width / t * (o - n) : i.bottom - i.height / t * (o - n), Math.round(e)
                    }, getValueForPixel: function (t) {
                        var e = this, i = e.isHorizontal(), n = i ? e.width : e.height,
                            n = (i ? t - e.left : e.bottom - t) / n;
                        return e.start + (e.end - e.start) * n
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
                t.scaleService.registerScaleType("linear", i, e)
            }
        }, {25: 25, 34: 34, 45: 45}], 54: [function (t, e, i) {
            "use strict";
            var o = t(45), n = t(34);
            e.exports = function (e) {
                var t = o.noop;
                e.LinearScaleBase = e.Scale.extend({
                    getRightValue: function (t) {
                        return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                    }, handleTickRangeOptions: function () {
                        var t = this, e = t.options.ticks;
                        e.beginAtZero && (i = o.sign(t.min), n = o.sign(t.max), i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0));
                        var i = void 0 !== e.min || void 0 !== e.suggestedMin,
                            n = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), i != n && t.min >= t.max && (i ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    }, getTickLimit: t, handleDirectionalChanges: t, buildTicks: function () {
                        var t = this, e = t.options.ticks, i = t.getTickLimit(), i = {
                            maxTicks: i = Math.max(2, i),
                            min: e.min,
                            max: e.max,
                            stepSize: o.valueOrDefault(e.fixedStepSize, e.stepSize)
                        }, i = t.ticks = n.generators.linear(i, t);
                        t.handleDirectionalChanges(), t.max = o.max(i), t.min = o.min(i), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    }, convertTicksToLabels: function () {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        }, {34: 34, 45: 45}], 55: [function (t, e, i) {
            "use strict";
            var d = t(45), n = t(34);
            e.exports = function (t) {
                var e = {position: "left", ticks: {callback: n.formatters.logarithmic}}, i = t.Scale.extend({
                    determineDataLimits: function () {
                        var a = this, r = a.options, t = r.ticks, s = a.chart, e = s.data.datasets,
                            i = d.valueOrDefault, n = a.isHorizontal();

                        function l(t) {
                            return n ? t.xAxisID === a.id : t.yAxisID === a.id
                        }

                        a.min = null, a.max = null, a.minNotZero = null;
                        var u, o = r.stacked;
                        void 0 === o && d.each(e, function (t, e) {
                            var i;
                            o || (i = s.getDatasetMeta(e), s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (o = !0))
                        }), r.stacked || o ? (u = {}, d.each(e, function (t, e) {
                            var n = s.getDatasetMeta(e),
                                o = [n.type, void 0 === r.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                            s.isDatasetVisible(e) && l(n) && (void 0 === u[o] && (u[o] = []), d.each(t.data, function (t, e) {
                                var i = u[o], t = +a.getRightValue(t);
                                isNaN(t) || n.data[e].hidden || (i[e] = i[e] || 0, r.relativePoints ? i[e] = 100 : i[e] += t)
                            }))
                        }), d.each(u, function (t) {
                            var e = d.min(t), t = d.max(t);
                            a.min = null === a.min ? e : Math.min(a.min, e), a.max = null === a.max ? t : Math.max(a.max, t)
                        })) : d.each(e, function (t, e) {
                            var i = s.getDatasetMeta(e);
                            s.isDatasetVisible(e) && l(i) && d.each(t.data, function (t, e) {
                                t = +a.getRightValue(t);
                                isNaN(t) || i.data[e].hidden || ((null === a.min || t < a.min) && (a.min = t), (null === a.max || t > a.max) && (a.max = t), 0 != t && (null === a.minNotZero || t < a.minNotZero) && (a.minNotZero = t))
                            })
                        }), a.min = i(t.min, a.min), a.max = i(t.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(d.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(d.log10(a.max)) + 1)) : (a.min = 1, a.max = 10))
                    }, buildTicks: function () {
                        var t = this, e = t.options.ticks, i = {min: e.min, max: e.max},
                            i = t.ticks = n.generators.logarithmic(i, t);
                        t.isHorizontal() || i.reverse(), t.max = d.max(i), t.min = d.min(i), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.tickValues[t])
                    }, getPixelForValue: function (t) {
                        var e, i, n = this, o = n.start, a = +n.getRightValue(t), t = n.options.ticks,
                            n = n.isHorizontal() ? (i = d.log10(n.end) - d.log10(o), 0 == a ? n.left : (e = n.width, n.left + e / i * (d.log10(a) - d.log10(o)))) : (e = n.height, 0 !== o || t.reverse ? 0 === n.end && t.reverse ? (i = d.log10(n.start) - d.log10(n.minNotZero), a === n.end ? n.top : a === n.minNotZero ? n.top + .02 * e : n.top + .02 * e + .98 * e / i * (d.log10(a) - d.log10(n.minNotZero))) : 0 == a ? t.reverse ? n.top : n.bottom : (i = d.log10(n.end) - d.log10(o), e = n.height, n.bottom - e / i * (d.log10(a) - d.log10(o))) : (i = d.log10(n.end) - d.log10(n.minNotZero), a === o ? n.bottom : a === n.minNotZero ? n.bottom - .02 * e : n.bottom - .02 * e - .98 * e / i * (d.log10(a) - d.log10(n.minNotZero))));
                        return n
                    }, getValueForPixel: function (t) {
                        var e, i = this, n = d.log10(i.end) - d.log10(i.start),
                            i = i.isHorizontal() ? (e = i.width, i.start * Math.pow(10, (t - i.left) * n / e)) : (e = i.height, Math.pow(10, (i.bottom - t) * n / e) / i.start);
                        return i
                    }
                });
                t.scaleService.registerScaleType("logarithmic", i, e)
            }
        }, {34: 34, 45: 45}], 56: [function (t, e, i) {
            "use strict";
            var a = t(25), m = t(45), s = t(34);
            e.exports = function (e) {
                var f = a.global, t = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    gridLines: {circular: !1},
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: s.formatters.linear
                    },
                    pointLabels: {
                        display: !0, fontSize: 10, callback: function (t) {
                            return t
                        }
                    }
                };

                function g(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function p(t) {
                    var e = t.options.pointLabels, i = m.valueOrDefault(e.fontSize, f.defaultFontSize),
                        t = m.valueOrDefault(e.fontStyle, f.defaultFontStyle),
                        e = m.valueOrDefault(e.fontFamily, f.defaultFontFamily);
                    return {size: i, style: t, family: e, font: m.fontString(i, t, e)}
                }

                function h(t, e, i, n, o) {
                    return t === n || t === o ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || o < t ? {start: e - i - 5, end: e} : {start: e, end: e + i + 5}
                }

                function i(t) {
                    var e, i = p(t), n = Math.min(t.height / 2, t.width / 2),
                        o = {r: t.width, l: 0, t: t.height, b: 0}, a = {};
                    t.ctx.font = i.font, t._pointLabelSizes = [];
                    for (var r = g(t), s = 0; s < r; s++) {
                        e = t.getPointPosition(s, n), l = t.ctx, d = i.size, u = t.pointLabels[s] || "", c = m.isArray(u) ? {
                            w: m.longestText(l, l.font, u),
                            h: u.length * d + 1.5 * (u.length - 1) * d
                        } : {w: l.measureText(u).width, h: d}, t._pointLabelSizes[s] = c;
                        var l = t.getIndexAngle(s), u = m.toDegrees(l) % 360, d = h(u, e.x, c.w, 0, 180),
                            c = h(u, e.y, c.h, 90, 270);
                        d.start < o.l && (o.l = d.start, a.l = l), d.end > o.r && (o.r = d.end, a.r = l), c.start < o.t && (o.t = c.start, a.t = l), c.end > o.b && (o.b = c.end, a.b = l)
                    }
                    t.setReductions(n, o, a)
                }

                function n(t) {
                    var e = t.ctx, i = m.valueOrDefault, n = t.options, o = n.angleLines, a = n.pointLabels;
                    e.lineWidth = o.lineWidth, e.strokeStyle = o.color;
                    var r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), s = p(t);
                    e.textBaseline = "top";
                    for (var l, u, d, c, h = g(t) - 1; 0 <= h; h--) o.display && (d = t.getPointPosition(h, r), e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(d.x, d.y), e.stroke(), e.closePath()), a.display && (l = t.getPointPosition(h, r + 5), c = i(a.fontColor, f.defaultFontColor), e.font = s.font, e.fillStyle = c, u = t.getIndexAngle(h), d = m.toDegrees(u), e.textAlign = 0 === (c = d) || 180 === c ? "center" : c < 180 ? "left" : "right", u = d, c = t._pointLabelSizes[h], d = l, 90 === u || 270 === u ? d.y -= c.h / 2 : (270 < u || u < 90) && (d.y -= c.h), function (t, e, i, n) {
                        if (m.isArray(e)) for (var o = i.y, a = 1.5 * n, r = 0; r < e.length; ++r) t.fillText(e[r], i.x, o), o += a; else t.fillText(e, i.x, i.y)
                    }(e, t.pointLabels[h] || "", l, s.size))
                }

                function r(t) {
                    return m.isNumber(t) ? t : 0
                }

                var o = e.LinearScaleBase.extend({
                    setDimensions: function () {
                        var t = this, e = t.options, i = e.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var n = m.min([t.height, t.width]), o = m.valueOrDefault(i.fontSize, f.defaultFontSize);
                        t.drawingArea = e.display ? n / 2 - (o / 2 + i.backdropPaddingY) : n / 2
                    }, determineDataLimits: function () {
                        var n = this, o = n.chart, a = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
                        m.each(o.data.datasets, function (t, e) {
                            var i;
                            o.isDatasetVisible(e) && (i = o.getDatasetMeta(e), m.each(t.data, function (t, e) {
                                t = +n.getRightValue(t);
                                isNaN(t) || i.data[e].hidden || (a = Math.min(t, a), r = Math.max(t, r))
                            }))
                        }), n.min = a === Number.POSITIVE_INFINITY ? 0 : a, n.max = r === Number.NEGATIVE_INFINITY ? 0 : r, n.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var t = this.options.ticks, e = m.valueOrDefault(t.fontSize, f.defaultFontSize);
                        return Math.min(t.maxTicksLimit || 11, Math.ceil(this.drawingArea / (1.5 * e)))
                    }, convertTicksToLabels: function () {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, fit: function () {
                        var t, e;
                        this.options.pointLabels.display ? i(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    }, setReductions: function (t, e, i) {
                        var n = e.l / Math.sin(i.l), o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            a = -e.t / Math.cos(i.t), i = -Math.max(e.b - this.height, 0) / Math.cos(i.b), n = r(n),
                            o = r(o), a = r(a), i = r(i);
                        this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (a + i) / 2)), this.setCenterPoint(n, o, a, i)
                    }, setCenterPoint: function (t, e, i, n) {
                        var o = this, e = o.width - e - o.drawingArea, t = t + o.drawingArea, i = i + o.drawingArea,
                            n = o.height - n - o.drawingArea;
                        o.xCenter = Math.round((t + e) / 2 + o.left), o.yCenter = Math.round((i + n) / 2 + o.top)
                    }, getIndexAngle: function (t) {
                        return t * (2 * Math.PI / g(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    }, getDistanceFromCenterForValue: function (t) {
                        var e = this;
                        if (null === t) return 0;
                        var i = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                    }, getPointPosition: function (t, e) {
                        t = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(t) * e) + this.xCenter,
                            y: Math.round(Math.sin(t) * e) + this.yCenter
                        }
                    }, getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    }, getBasePosition: function () {
                        var t = this.min, e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
                    }, draw: function () {
                        var o, a, r, t, e, s, l = this, i = l.options, u = i.gridLines, d = i.ticks,
                            c = m.valueOrDefault;
                        i.display && (o = l.ctx, a = this.getIndexAngle(0), r = c(d.fontSize, f.defaultFontSize), t = c(d.fontStyle, f.defaultFontStyle), e = c(d.fontFamily, f.defaultFontFamily), s = m.fontString(r, t, e), m.each(l.ticks, function (t, e) {
                            var i, n;
                            (0 < e || d.reverse) && (i = l.getDistanceFromCenterForValue(l.ticksAsNumbers[e]), u.display && 0 !== e && function (t, e, i, n) {
                                var o = t.ctx;
                                if (o.strokeStyle = m.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = m.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke(); else {
                                    var a = g(t);
                                    if (0 !== a) {
                                        o.beginPath();
                                        var r = t.getPointPosition(0, i);
                                        o.moveTo(r.x, r.y);
                                        for (var s = 1; s < a; s++) r = t.getPointPosition(s, i), o.lineTo(r.x, r.y);
                                        o.closePath(), o.stroke()
                                    }
                                }
                            }(l, u, i, e), d.display && (n = c(d.fontColor, f.defaultFontColor), o.font = s, o.save(), o.translate(l.xCenter, l.yCenter), o.rotate(a), d.showLabelBackdrop && (e = o.measureText(t).width, o.fillStyle = d.backdropColor, o.fillRect(-e / 2 - d.backdropPaddingX, -i - r / 2 - d.backdropPaddingY, e + 2 * d.backdropPaddingX, r + 2 * d.backdropPaddingY)), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = n, o.fillText(t, 0, -i), o.restore()))
                        }), (i.angleLines.display || i.pointLabels.display) && n(l))
                    }
                });
                e.scaleService.registerScaleType("radialLinear", o, t)
            }
        }, {25: 25, 34: 34, 45: 45}], 57: [function (t, e, i) {
            "use strict";
            var b = "function" == typeof (b = t(1)) ? b : window.HXLocal_moment, o = t(25), g = t(45),
                p = Number.MIN_SAFE_INTEGER || -9007199254740991, m = Number.MAX_SAFE_INTEGER || 9007199254740991,
                x = {
                    millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                    second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 30]},
                    minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 30]},
                    hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                    day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                    week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                    month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                    quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                    year: {common: !0, size: 3154e7}
                }, y = Object.keys(x);

            function v(t, e) {
                return t - e
            }

            function k(t) {
                for (var e, i = {}, n = [], o = 0, a = t.length; o < a; ++o) i[e = t[o]] || (i[e] = !0, n.push(e));
                return n
            }

            function w(t, e, i, n) {
                var o = function (t, e, i) {
                        for (var n, o, a, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                            if (o = t[(n = r + s >> 1) - 1] || null, a = t[n], !o) return {lo: null, hi: a};
                            if (a[e] < i) r = 1 + n; else {
                                if (!(o[e] > i)) return {lo: o, hi: a};
                                s = n - 1
                            }
                        }
                        return {lo: a, hi: null}
                    }(t, e, i), a = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                    o = o.lo ? o.hi || t[t.length - 1] : t[1], t = o[e] - a[e], t = t ? (i - a[e]) / t : 0,
                    t = (o[n] - a[n]) * t;
                return a[n] + t
            }

            var n = new Map;

            function a(t, e) {
                var i = e.parser, e = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof e ? b(t, e) : !(t = !(t instanceof b) ? function (t) {
                    let e;
                    return void 0 !== t && (n.has(t) ? e = n.get(t) : (e = b(t), n.set(t, e))), e
                }(t) : t).isValid() && "function" == typeof e ? e(t) : t
            }

            function M(t, e) {
                if (g.isNullOrUndef(t)) return null;
                var i = e.options.time, t = a(e.getRightValue(t), i);
                return t.isValid() ? (i.round && t.startOf(i.round), t.valueOf()) : null
            }

            function S(t) {
                for (var e = y.indexOf(t) + 1, i = y.length; e < i; ++e) if (x[y[e]].common) return y[e]
            }

            function C(t, e, i, n) {
                var o, a = n.time, r = a.unit || function (t, e, i, n) {
                        for (var o, a, r = y.length, s = y.indexOf(t); s < r - 1; ++s) if (a = (o = x[y[s]]).steps ? o.steps[o.steps.length - 1] : m, o.common && Math.ceil((i - e) / (a * o.size)) <= n) return y[s];
                        return y[r - 1]
                    }(a.minUnit, t, e, i), s = S(r), l = g.valueOrDefault(a.stepSize, a.unitStepSize),
                    u = "week" === r && a.isoWeekday, d = n.ticks.major.enabled, c = x[r], n = b(t), h = b(e),
                    f = [], l = l || function (t, e, i, n) {
                        var o, a, r, s = e - t, l = (i = x[i]).size, u = i.steps;
                        if (!u) return Math.ceil(s / ((n || 1) * l));
                        for (o = 0, a = u.length; o < a && (r = u[o], !(Math.ceil(s / (l * r)) <= n)); ++o) ;
                        return r
                    }(t, e, r, i);
                for (u && (n = n.isoWeekday(u), h = h.isoWeekday(u)), n = n.startOf(u ? "day" : r), (h = h.startOf(u ? "day" : r)) < e && h.add(1, r), o = b(n), d && s && !u && !a.round && (o.startOf(s), o.add(~~((n - o) / (c.size * l)) * l, r)); o < h; o.add(l, r)) f.push(+o);
                return f.push(+o), f
            }

            e.exports = function (e) {
                var t = e.Scale.extend({
                    initialize: function () {
                        if (!b) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    }, update: function () {
                        var t = this.options;
                        return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
                    }, getRightValue: function (t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    }, determineDataLimits: function () {
                        for (var t, e, i, n, o = this, a = o.chart, r = o.options.time, s = m, l = p, u = [], d = [], c = [], h = 0, f = a.data.labels.length; h < f; ++h) c.push(M(a.data.labels[h], o));
                        for (h = 0, f = (a.data.datasets || []).length; h < f; ++h) if (a.isDatasetVisible(h)) if (i = a.data.datasets[h].data, g.isObject(i[0])) for (d[h] = [], t = 0, e = i.length; t < e; ++t) n = M(i[t], o), u.push(n), d[h][t] = n; else u.push.apply(u, c), d[h] = c.slice(0); else d[h] = [];
                        c.length && (c = k(c).sort(v), s = Math.min(s, c[0]), l = Math.max(l, c[c.length - 1])), u.length && (u = k(u).sort(v), s = Math.min(s, u[0]), l = Math.max(l, u[u.length - 1])), s = M(r.min, o) || s, l = M(r.max, o) || l, s = s === m ? +b().startOf("day") : s, l = l === p ? +b().endOf("day") + 1 : l, o.min = Math.min(s, l), o.max = Math.max(s + 1, l), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = {
                            data: u,
                            datasets: d,
                            labels: c
                        }
                    }, buildTicks: function () {
                        var t, e, i, n, o, a, r, s, l, u, d, c = this, h = c.min, f = c.max, g = c.options,
                            p = g.time, m = [], v = [];
                        switch (g.ticks.source) {
                            case"data":
                                m = c._timestamps.data;
                                break;
                            case"labels":
                                m = c._timestamps.labels;
                                break;
                            default:
                                m = C(h, f, c.getLabelCapacity(h), g)
                        }
                        for ("ticks" === g.bounds && m.length && (h = m[0], f = m[m.length - 1]), h = M(p.min, c) || h, f = M(p.max, c) || f, t = 0, e = m.length; t < e; ++t) h <= (i = m[t]) && i <= f && v.push(i);
                        return c.min = h, c.max = f, c._unit = p.unit || function (t, e, i, n) {
                            for (var o, a = b.duration(b(n).diff(b(i))), r = y.length - 1; r >= y.indexOf(e); r--) if (o = y[r], x[o].common && a.as(o) >= t.length) return o;
                            return y[e ? y.indexOf(e) : 0]
                        }(v, p.minUnit, c.min, c.max), c._majorUnit = S(c._unit), c._table = function (t, e, i, n) {
                            if ("linear" === n || !t.length) return [{time: e, pos: 0}, {time: i, pos: 1}];
                            for (var o, a, r, s = [], l = [e], u = 0, d = t.length; u < d; ++u) e < (a = t[u]) && a < i && l.push(a);
                            for (l.push(i), u = 0, d = l.length; u < d; ++u) r = l[u + 1], o = l[u - 1], a = l[u], void 0 !== o && void 0 !== r && Math.round((r + o) / 2) === a || s.push({
                                time: a,
                                pos: u / (d - 1)
                            });
                            return s
                        }(c._timestamps.data, h, f, g.distribution), c._offsets = (n = c._table, o = v, a = h, r = f, d = u = 0, (p = g).offset && o.length && (p.time.min || (s = 1 < o.length ? o[1] : r, l = o[0], u = (w(n, "time", s, "pos") - w(n, "time", l, "pos")) / 2), p.time.max || (s = o[o.length - 1], l = 1 < o.length ? o[o.length - 2] : a, d = (w(n, "time", s, "pos") - w(n, "time", l, "pos")) / 2)), {
                            left: u,
                            right: d
                        }), function (t, e) {
                            for (var i, n, o = [], a = 0, r = t.length; a < r; ++a) i = t[a], n = !!e && i === +b(i).startOf(e), o.push({
                                value: i,
                                major: n
                            });
                            return o
                        }(v, c._majorUnit)
                    }, getLabelForIndex: function (t, e) {
                        var i = this.chart.data, n = this.options.time,
                            o = i.labels && t < i.labels.length ? i.labels[t] : "", t = i.datasets[e].data[t];
                        return g.isObject(t) && (o = this.getRightValue(t)), o = n.tooltipFormat ? a(o, n).format(n.tooltipFormat) : o
                    }, tickFormatFunction: function (t, e, i, n) {
                        var o = this.options, a = t.valueOf(), r = o.time.displayFormats, s = r[this._unit],
                            l = this._majorUnit, u = r[l], d = t.clone().startOf(l).valueOf(), r = o.ticks.major,
                            d = r.enabled && l && u && a === d, s = t.format(n || (d ? u : s)),
                            o = d ? r : o.ticks.minor, o = g.valueOrDefault(o.callback, o.userCallback);
                        return o ? o(s, e, i) : s
                    }, convertTicksToLabels: function (t) {
                        for (var e = [], i = 0, n = t.length; i < n; ++i) e.push(this.tickFormatFunction(b(t[i].value), i, t));
                        return e
                    }, getPixelForOffset: function (t) {
                        var e = this, i = e._horizontal ? e.width : e.height, n = e._horizontal ? e.left : e.top,
                            t = w(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + t) / (e._offsets.left + 1 + e._offsets.right)
                    }, getPixelForValue: function (t, e, i) {
                        var n = null;
                        if (null !== (n = null === (n = void 0 !== e && void 0 !== i ? this._timestamps.datasets[i][e] : n) ? M(t, this) : n)) return this.getPixelForOffset(n)
                    }, getPixelForTick: function (t) {
                        var e = this.getTicks();
                        return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    }, getValueForPixel: function (t) {
                        var e = this, i = e._horizontal ? e.width : e.height, n = e._horizontal ? e.left : e.top,
                            i = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            i = w(e._table, "pos", i, "time");
                        return b(i)
                    }, getLabelWidth: function (t) {
                        var e = this.options.ticks, i = this.ctx.measureText(t).width,
                            n = g.toRadians(e.maxRotation), t = Math.cos(n), n = Math.sin(n);
                        return i * t + g.valueOrDefault(e.fontSize, o.global.defaultFontSize) * n
                    }, getLabelCapacity: function (t) {
                        var e = this, i = e.options.time.displayFormats.millisecond,
                            i = e.tickFormatFunction(b(t), 0, [], i), i = e.getLabelWidth(i),
                            e = e.isHorizontal() ? e.width : e.height;
                        return Math.floor(e / i)
                    }
                });
                e.scaleService.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                })
            }
        }, {1: 1, 25: 25, 45: 45}]
    }, {}, [7])(7)
});