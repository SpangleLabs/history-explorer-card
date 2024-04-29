var Chart = window.HXLocal_Chart;
var moment = window.HXLocal_moment;
const helpers = Chart.helpers;
const isArray = helpers.isArray;
var _color = Chart.helpers.color;
var TimelineConfig = {
    position: "bottom",
    tooltips: {mode: "nearest"},
    adapters: {},
    time: {
        parser: false,
        format: false,
        unit: false,
        round: false,
        displayFormat: false,
        isoWeekday: false,
        minUnit: "millisecond",
        distribution: "linear",
        bounds: "data",
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
    ticks: {autoSkip: true}
};
var _tl_momentCache = new Map;

function tl_momentCache(t) {
    let e;
    if (t !== undefined) {
        if (!_tl_momentCache.has(t)) {
            e = moment(t);
            _tl_momentCache.set(t, e)
        } else e = _tl_momentCache.get(t)
    }
    return e
}

function momentify(t, e) {
    var a = e.parser;
    var r = e.parser || e.format;
    if (typeof a === "function") {
        return a(t)
    }
    if (typeof t === "string" && typeof r === "string") {
        return moment(t, r)
    }
    if (!(t instanceof moment)) {
        t = tl_momentCache(t)
    }
    if (t.isValid()) {
        return t
    }
    if (typeof r === "function") {
        return r(t)
    }
    return t
}

function parse(t, e) {
    if (helpers.isNullOrUndef(t)) {
        return null
    }
    var a = e.options.time;
    var r = momentify(e.getRightValue(t), a);
    if (!r.isValid()) {
        return null
    }
    if (a.round) {
        r.startOf(a.round)
    }
    return r.valueOf()
}

function arrayUnique(t) {
    var e = {};
    var a = [];
    var r, i, o;
    for (r = 0, i = t.length; r < i; ++r) {
        o = t[r];
        if (!e[o]) {
            e[o] = true;
            a.push(o)
        }
    }
    return a
}

var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
var TimelineScale = Chart.scaleService.getScaleConstructor("time").extend({
    determineDataLimits: function () {
        var t = this;
        var e = t.chart;
        var a = t.options.time;
        var r = t.chart.options.elements;
        var i = MAX_INTEGER;
        var o = MIN_INTEGER;
        var n = [];
        var s = {};
        var l = [];
        var d, h, c, u, f, m, g;
        for (d = 0, c = (e.data.datasets || []).length; d < c; ++d) {
            if (e.isDatasetVisible(d)) {
                f = e.data.datasets[d].data;
                l[d] = [];
                for (h = 0, u = f.length; h < u; ++h) {
                    m = parse(f[h][r.keyStart], t);
                    g = parse(f[h][r.keyEnd], t);
                    if (m > g) {
                        [m, g] = [g, m]
                    }
                    if (i > m && m) {
                        i = m
                    }
                    if (o < g && g) {
                        o = g
                    }
                    l[d][h] = [m, g, f[h][r.keyValue]];
                    if (Object.prototype.hasOwnProperty.call(s, m)) {
                        s[m] = true;
                        n.push(m)
                    }
                    if (Object.prototype.hasOwnProperty.call(s, g)) {
                        s[g] = true;
                        n.push(g)
                    }
                }
            } else {
                l[d] = []
            }
        }
        if (n.size) {
            n.sort(function (t, e) {
                return t - e
            })
        }
        i = parse(a.min, t) || i;
        o = parse(a.max, t) || o;
        i = i === MAX_INTEGER ? +moment().startOf("day") : i;
        o = o === MIN_INTEGER ? +moment().endOf("day") + 1 : o;
        t.min = Math.min(i, o);
        t.max = Math.max(i + 1, o);
        t._horizontal = t.isHorizontal();
        t._table = [];
        t._timestamps = {data: n, datasets: l, labels: []}
    }
});
Chart.scaleService.registerScaleType("timeline", TimelineScale, TimelineConfig);
Chart.controllers.timeline = Chart.controllers.bar.extend({
    getBarBounds: function (t) {
        var e = t._view;
        var a, r, i, o;
        a = e.x;
        r = e.x + e.width;
        i = e.y;
        o = e.y + e.height;
        return {left: a, top: i, right: r, bottom: o}
    }, update: function (a) {
        var r = this;
        var e = r.getMeta();
        var t = r.chart.options;
        if (t.textPadding || t.minBarWidth || t.showText || t.colorFunction) {
            var i = r.chart.options.elements;
            i.textPadding = t.textPadding || i.textPadding;
            i.minBarWidth = t.minBarWidth || i.minBarWidth;
            i.colorFunction = t.colorFunction || i.colorFunction;
            i.minBarWidth = t.minBarWidth || i.minBarWidth;
            if (Chart._tl_depwarn !== true) {
                console.log("Timeline Chart: Configuration deprecated. Please check document on Github.");
                Chart._tl_depwarn = true
            }
        }
        if (e.data.length > 0) {
            let t = r.getRuler(0);
            r.barHeight = r.calculateBarHeight(t) + 4;
            helpers.each(e.data, function (t, e) {
                r.updateElement(t, e, a)
            }, r)
        }
    }, updateElement: function (t, e, a) {
        var i = this;
        var r = i.getMeta();
        var o = i.getScaleForId(r.xAxisID);
        var n = i.getScaleForId(r.yAxisID);
        var s = i.getDataset();
        var l = s.data[e];
        var d = t.custom || {};
        var h = i.index;
        var c = i.chart.options;
        var u = c.elements || Chart.defaults.timeline.elements;
        var f = u.rectangle;
        var m = u.textPadding;
        var g = u.minBarWidth;
        t._xScale = o;
        t._yScale = n;
        t._datasetIndex = i.index;
        t._index = e;
        var v = u.textFunction(l[u.keyValue], i.chart.data.datasets, h);
        var p = o.getPixelForValue(l[u.keyStart]);
        var x = o.getPixelForValue(l[u.keyEnd]);
        var y = n.getPixelForValue(l, h, h);
        var b = x - p;
        var w = i.barHeight;
        var _ = _color(u.colorFunction(v, l, i.chart.data.datasets, h));
        var k = u.showText;
        var C = u.font;
        if (!C) {
            C = 'bold 12px "Helvetica Neue", Helvetica, Arial, sans-serif'
        }
        var M = y - w / 2;
        t._model = {
            x: a ? p - b : p,
            y: M,
            width: Math.max(b, g),
            height: w,
            base: p + b,
            backgroundColor: _.rgbaString(),
            borderSkipped: d.borderSkipped ? d.borderSkipped : f.borderSkipped,
            borderColor: d.borderColor ? d.borderColor : helpers.getValueAtIndexOrDefault(s.borderColor, e, f.borderColor),
            borderWidth: d.borderWidth ? d.borderWidth : helpers.getValueAtIndexOrDefault(s.borderWidth, e, f.borderWidth),
            label: i.chart.data.labels[e],
            datasetLabel: s.label,
            text: v,
            textColor: _.luminosity() > .5 ? "#333333" : "#ffffff"
        };
        t.draw = function () {
            var t = this._chart.ctx;
            var e = this._view;
            var a = t.globalAlpha;
            var r = t.globalCompositeOperation;
            t.fillStyle = e.backgroundColor;
            t.lineWidth = e.borderWidth;
            t.globalCompositeOperation = "destination-over";
            t.fillRect(e.x, e.y, e.width, e.height);
            t.globalAlpha = .5;
            t.globalCompositeOperation = "source-over";
            t.fillRect(e.x, e.y, e.width, e.height);
            t.globalAlpha = a;
            t.globalCompositeOperation = r;
            if (k) {
                t.beginPath();
                var i = t.measureText(e.text);
                if (i.width > 0 && i.width + m + 2 < e.width) {
                    t.font = C;
                    t.fillStyle = e.textColor;
                    t.lineWidth = 0;
                    t.strokeStyle = e.textColor;
                    t.textBaseline = "middle";
                    t.fillText(e.text, e.x + m, e.y + e.height / 2)
                }
                t.fill()
            }
        };
        t.inXRange = function (t) {
            var e = i.getBarBounds(this);
            return t >= e.left && t <= e.right
        };
        t.tooltipPosition = function () {
            var t = this.getCenterPoint();
            return {x: t.x, y: t.y}
        };
        t.getCenterPoint = function () {
            var t = this._view;
            var e, a;
            e = t.x + t.width / 2;
            a = t.y + t.height / 2;
            return {x: e, y: a}
        };
        t.inRange = function (t, e) {
            var a = false;
            if (this._view) {
                var r = i.getBarBounds(this);
                a = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
            }
            return a
        };
        t.pivot()
    }, getBarCount: function () {
        var r = this;
        var i = 0;
        helpers.each(r.chart.data.datasets, function (t, e) {
            var a = r.chart.getDatasetMeta(e);
            if (a.bar && r.chart.isDatasetVisible(e)) {
                ++i
            }
        }, r);
        return i
    }, draw: function (t) {
        var e, a;
        var r = this.getMeta().data;
        for (e = 0, a = r.length; e < a; e++) {
            r[e].draw()
        }
    }, calculateBarHeight: function (t) {
        var e = this;
        var a = e.getScaleForId(e.getMeta().yAxisID);
        if (a.options.barThickness) {
            return a.options.barThickness
        }
        return a.options.stacked ? t.categoryHeight : t.barHeight
    }, removeHoverStyle: function (t) {
    }, setHoverStyle: function (t) {
    }
});
Chart.defaults.timeline = {
    elements: {
        colorFunction: function () {
            return _color("black")
        }, showText: true, textPadding: 4, minBarWidth: 1, keyStart: 0, keyEnd: 1, keyValue: 2
    },
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
    legend: {display: false},
    scales: {
        xAxes: [{
            type: "timeline",
            position: "bottom",
            distribution: "linear",
            categoryPercentage: .8,
            barPercentage: .9,
            gridLines: {display: true, drawBorder: true, drawTicks: true},
            ticks: {maxRotation: 0},
            unit: "day"
        }],
        yAxes: [{
            type: "category",
            position: "left",
            barThickness: 20,
            categoryPercentage: .8,
            barPercentage: .9,
            offset: true,
            gridLines: {display: true, offsetGridLines: true, drawBorder: true, drawTicks: true}
        }]
    },
    tooltips: {
        callbacks: {
            title: function (t, e) {
                var a = this._chart.options.elements;
                var r = e.labels[t[0].datasetIndex];
                return r
            }, label: function (t, e) {
                var a = this._chart.options.elements;
                var r = e.datasets[t.datasetIndex].data[t.index];
                return [r[a.keyValue], moment(r[a.keyStart]).format("D MMM, HH:mm:ss"), moment(r[a.keyEnd]).format("D MMM, HH:mm:ss")]
            }
        }
    }
};
var ArrowlineConfig = {
    position: "bottom",
    tooltips: {mode: "nearest"},
    adapters: {},
    time: {
        parser: false,
        format: false,
        unit: false,
        round: false,
        displayFormat: false,
        isoWeekday: false,
        minUnit: "millisecond",
        distribution: "linear",
        bounds: "data",
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
    ticks: {autoSkip: true}
};
var ArrowlineScale = Chart.scaleService.getScaleConstructor("time").extend({
    determineDataLimits: function () {
        var t = this;
        var e = t.chart;
        var a = t.options.time;
        var r = t.chart.options.elements;
        var i = MAX_INTEGER;
        var o = MIN_INTEGER;
        var n = [];
        var s = {};
        var l = [];
        var d, h, c, u, f, m, g;
        for (d = 0, c = (e.data.datasets || []).length; d < c; ++d) {
            if (e.isDatasetVisible(d)) {
                f = e.data.datasets[d].data;
                l[d] = [];
                for (h = 0, u = f.length; h < u; ++h) {
                    m = parse(f[h][r.keyStart], t);
                    g = parse(f[h][r.keyEnd], t);
                    if (m > g) {
                        [m, g] = [g, m]
                    }
                    if (i > m && m) {
                        i = m
                    }
                    if (o < g && g) {
                        o = g
                    }
                    l[d][h] = [m, g, f[h][r.keyValue]];
                    if (Object.prototype.hasOwnProperty.call(s, m)) {
                        s[m] = true;
                        n.push(m)
                    }
                    if (Object.prototype.hasOwnProperty.call(s, g)) {
                        s[g] = true;
                        n.push(g)
                    }
                }
            } else {
                l[d] = []
            }
        }
        if (n.size) {
            n.sort(function (t, e) {
                return t - e
            })
        }
        i = parse(a.min, t) || i;
        o = parse(a.max, t) || o;
        i = i === MAX_INTEGER ? +moment().startOf("day") : i;
        o = o === MIN_INTEGER ? +moment().endOf("day") + 1 : o;
        t.min = Math.min(i, o);
        t.max = Math.max(i + 1, o);
        t._horizontal = t.isHorizontal();
        t._table = [];
        t._timestamps = {data: n, datasets: l, labels: []}
    }
});
var arrowImageMap = new Map;
Chart.scaleService.registerScaleType("arrowline", ArrowlineScale, ArrowlineConfig);
Chart.controllers.arrowline = Chart.controllers.bar.extend({
    getBarBounds: function (t) {
        var e = t._view;
        var a, r, i, o;
        a = e.x;
        r = e.x + e.width;
        i = e.y;
        o = e.y + e.height;
        return {left: a, top: i, right: r, bottom: o}
    }, update: function (a) {
        var r = this;
        var e = r.getMeta();
        if (e.data.length > 0) {
            let t = r.getRuler(0);
            r.barHeight = r.calculateBarHeight(t) + 4;
            helpers.each(e.data, function (t, e) {
                r.updateElement(t, e, a)
            }, r)
        }
    }, updateElement: function (t, e, a) {
        var i = this;
        var r = i.getMeta();
        var o = i.getScaleForId(r.xAxisID);
        var n = i.getScaleForId(r.yAxisID);
        var s = i.getDataset();
        var l = s.data[e];
        var d = t.custom || {};
        var h = i.index;
        var c = i.chart.options;
        var u = c.elements || Chart.defaults.timeline.elements;
        var f = u.rectangle;
        var m = u.minBarWidth;
        t._xScale = o;
        t._yScale = n;
        t._datasetIndex = i.index;
        t._index = e;
        var g = l[u.keyValue];
        var v = o.getPixelForValue(l[u.keyStart]);
        var p = o.getPixelForValue(l[u.keyEnd]);
        var x = n.getPixelForValue(l, h, h);
        var y = p - v;
        var b = i.barHeight;
        var w = x - b / 2;
        t._model = {
            x: a ? v - y : v,
            y: w,
            width: Math.max(y, m),
            height: b,
            base: v + y,
            backgroundColor: "#000000",
            borderSkipped: d.borderSkipped ? d.borderSkipped : f.borderSkipped,
            borderColor: d.borderColor ? d.borderColor : helpers.getValueAtIndexOrDefault(s.borderColor, e, f.borderColor),
            borderWidth: d.borderWidth ? d.borderWidth : helpers.getValueAtIndexOrDefault(s.borderWidth, e, f.borderWidth),
            label: i.chart.data.labels[e],
            datasetLabel: s.label,
            text: g,
            textColor: "#ffffff"
        };
        t.getPosition = function (t) {
            return this._view.x + (t ? this._view.width : 0)
        };
        t.getMidPosition = function () {
            return this._view.y + this._view.height / 2
        };
        t.getValue = function () {
            return this._view.text
        };
        t.inXRange = function (t) {
            var e = i.getBarBounds(this);
            return t >= e.left && t <= e.right
        };
        t.tooltipPosition = function () {
            var t = this.getCenterPoint();
            return {x: t.x, y: t.y}
        };
        t.getCenterPoint = function () {
            var t = this._view;
            var e, a;
            e = t.x + t.width / 2;
            a = t.y + t.height / 2;
            return {x: e, y: a}
        };
        t.inRange = function (t, e) {
            var a = false;
            if (this._view) {
                var r = i.getBarBounds(this);
                a = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
            }
            return a
        };
        t.pivot()
    }, getBarCount: function () {
        var r = this;
        var i = 0;
        helpers.each(r.chart.data.datasets, function (t, e) {
            var a = r.chart.getDatasetMeta(e);
            if (a.bar && r.chart.isDatasetVisible(e)) {
                ++i
            }
        }, r);
        return i
    }, draw: function (t) {
        let o = this.index < this.chart.data.datasets.length ? this.chart.data.datasets[this.index].arrowColor : undefined;
        let e = this.index < this.chart.data.datasets.length ? this.chart.data.datasets[this.index].arrowBackground : undefined;
        if (!arrowImageMap.has(o)) {
            let t = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="${o ?? this.chart.options.elements.arrowColor}" d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" /></svg>`;
            let e = new Blob([t], {type: "image/svg+xml;charset=utf-8"});
            let a = window.URL || window.webkitURL || window;
            let r = a.createObjectURL(e);
            let i = new Image;
            i.onload = () => {
                arrowImageMap.set(o, i)
            };
            i.src = r
        }
        var r = this.getMeta().data;
        if (!r.length || !arrowImageMap.has(o)) return;
        const i = arrowImageMap.get(o);
        const n = this.chart.chartArea;
        const s = 30;
        const a = Math.ceil((n.right - n.left) / s);
        const l = r[0].getMidPosition();
        if (e) {
            const m = l - i.height / 2;
            this.chart.ctx.fillStyle = e;
            this.chart.ctx.lineWidth = 0;
            this.chart.ctx.fillRect(n.left, m - 3, n.right - n.left, i.height + 6)
        }
        const d = this.chart.ctx.getTransform();
        let h = this.getScaleForId(this.getMeta().xAxisID);
        let c = h.getPixelForValue(moment().startOf("day"));
        let u = c % s;
        let f = 0;
        for (let t = 0; t < a; t++) {
            let a = null;
            const g = t * s + n.left + u;
            const m = l - i.height / 2;
            const v = g + i.width / 2;
            for (; f < r.length; f++) {
                const g = r[f].getPosition(0);
                const p = r[f].getPosition(1);
                if (p > v) {
                    if (v >= g) {
                        a = r[f].getValue() * 1
                    }
                    break
                }
            }
            if (a != null) {
                let t = g + i.width / 2;
                let e = m + i.height / 2;
                this.chart.ctx.setTransform(d);
                this.chart.ctx.translate(t, e);
                this.chart.ctx.rotate((a + 180) / 180 * Math.PI);
                this.chart.ctx.translate(-t, -e);
                this.chart.ctx.drawImage(i, g, m, i.width, i.height)
            }
        }
        this.chart.ctx.setTransform(d)
    }, calculateBarHeight: function (t) {
        var e = this;
        var a = e.getScaleForId(e.getMeta().yAxisID);
        if (a.options.barThickness) {
            return a.options.barThickness
        }
        return a.options.stacked ? t.categoryHeight : t.barHeight
    }, removeHoverStyle: function (t) {
    }, setHoverStyle: function (t) {
    }
});

Chart.defaults.arrowline = {
    elements: {minBarWidth: 1, keyStart: 0, keyEnd: 1, keyValue: 2},
    layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
    legend: {display: false},
    scales: {
        xAxes: [{
            type: "timeline",
            position: "bottom",
            distribution: "linear",
            categoryPercentage: .8,
            barPercentage: .9,
            gridLines: {display: true, drawBorder: true, drawTicks: true},
            ticks: {maxRotation: 0},
            unit: "day"
        }],
        yAxes: [{
            type: "category",
            position: "left",
            barThickness: 20,
            categoryPercentage: .8,
            barPercentage: .9,
            offset: true,
            gridLines: {display: true, offsetGridLines: true, drawBorder: true, drawTicks: true}
        }]
    }
};
