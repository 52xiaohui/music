(function(t) {
	function e(e) {
		for (var r, i, u = e[0], c = e[1], s = e[2], l = 0, d = []; l < u.length; l++) i = u[l], Object.prototype.hasOwnProperty
			.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
		for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
		f && f(e);
		while (d.length) d.shift()();
		return a.push.apply(a, s || []), n()
	}

	function n() {
		for (var t, e = 0; e < a.length; e++) {
			for (var n = a[e], r = !0, i = 1; i < n.length; i++) {
				var u = n[i];
				0 !== o[u] && (r = !1)
			}
			r && (a.splice(e--, 1), t = c(c.s = n[0]))
		}
		return t
	}
	var r = {},
		i = {
			app: 0
		},
		o = {
			app: 0
		},
		a = [];

	function u(t) {
		return c.p + "js/" + ({} [t] || t) + "." + {
			"chunk-013bbbfa": "43707b44",
			"chunk-540e805e": "eaf466fc",
			"chunk-5fbc8a8b": "3dfb1959",
			"chunk-607b8983": "2e507f47",
			"chunk-658aee7c": "310aa33d",
			"chunk-66f0f839": "d15d220c",
			"chunk-70fe2629": "268ef339",
			"chunk-88b12574": "09a3e1a7"
		} [t] + ".js"
	}

	function c(e) {
		if (r[e]) return r[e].exports;
		var n = r[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports
	}
	c.e = function(t) {
		var e = [],
			n = {
				"chunk-013bbbfa": 1,
				"chunk-540e805e": 1,
				"chunk-5fbc8a8b": 1,
				"chunk-607b8983": 1,
				"chunk-658aee7c": 1,
				"chunk-66f0f839": 1,
				"chunk-70fe2629": 1,
				"chunk-88b12574": 1
			};
		i[t] ? e.push(i[t]) : 0 !== i[t] && n[t] && e.push(i[t] = new Promise((function(e, n) {
			for (var r = "css/" + ({} [t] || t) + "." + {
					"chunk-013bbbfa": "72197c42",
					"chunk-540e805e": "1b392e3a",
					"chunk-5fbc8a8b": "bb4360c9",
					"chunk-607b8983": "6e3027f1",
					"chunk-658aee7c": "06891d9a",
					"chunk-66f0f839": "aa74aa66",
					"chunk-70fe2629": "4c90705f",
					"chunk-88b12574": "c6d6d7d6"
				} [t] + ".css", o = c.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
				var s = a[u],
					l = s.getAttribute("data-href") || s.getAttribute("href");
				if ("stylesheet" === s.rel && (l === r || l === o)) return e()
			}
			var d = document.getElementsByTagName("style");
			for (u = 0; u < d.length; u++) {
				s = d[u], l = s.getAttribute("data-href");
				if (l === r || l === o) return e()
			}
			var f = document.createElement("link");
			f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function(e) {
				var r = e && e.target && e.target.src || o,
					a = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
				a.code = "CSS_CHUNK_LOAD_FAILED", a.request = r, delete i[t], f.parentNode.removeChild(f), n(a)
			}, f.href = o;
			var m = document.getElementsByTagName("head")[0];
			m.appendChild(f)
		})).then((function() {
			i[t] = 0
		})));
		var r = o[t];
		if (0 !== r)
			if (r) e.push(r[2]);
			else {
				var a = new Promise((function(e, n) {
					r = o[t] = [e, n]
				}));
				e.push(r[2] = a);
				var s, l = document.createElement("script");
				l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = u(t);
				var d = new Error;
				s = function(e) {
					l.onerror = l.onload = null, clearTimeout(f);
					var n = o[t];
					if (0 !== n) {
						if (n) {
							var r = e && ("load" === e.type ? "missing" : e.type),
								i = e && e.target && e.target.src;
							d.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")", d.name = "ChunkLoadError", d.type = r,
								d.request = i, n[1](d)
						}
						o[t] = void 0
					}
				};
				var f = setTimeout((function() {
					s({
						type: "timeout",
						target: l
					})
				}), 12e4);
				l.onerror = l.onload = s, document.head.appendChild(l)
			} return Promise.all(e)
	}, c.m = t, c.c = r, c.d = function(t, e, n) {
		c.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, c.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, c.t = function(t, e) {
		if (1 & e && (t = c(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (c.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) c.d(n, r, function(e) {
				return t[e]
			}.bind(null, r));
		return n
	}, c.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return c.d(e, "a", e), e
	}, c.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, c.p = "", c.oe = function(t) {
		throw console.error(t), t
	};
	var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
		l = s.push.bind(s);
	s.push = e, s = s.slice();
	for (var d = 0; d < s.length; d++) e(s[d]);
	var f = l;
	a.push([0, "chunk-vendors"]), n()
})({
	0: function(t, e, n) {
		t.exports = n("56d7")
	},
	"093b": function(t, e, n) {
		"use strict";
		var r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("transition", {
					attrs: {
						name: "mm-dialog-fade"
					}
				}, [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.dialogShow,
						expression: "dialogShow"
					}],
					staticClass: "mm-dialog-box"
				}, [n("div", {
					staticClass: "mm-dialog-wrapper"
				}, [n("div", {
					staticClass: "mm-dialog-content"
				}, [n("div", {
					staticClass: "mm-dialog-head",
					domProps: {
						textContent: t._s(t.headText)
					}
				}), t._t("default", [n("div", {
					staticClass: "mm-dialog-text",
					domProps: {
						innerHTML: t._s(t.bodyText)
					}
				})]), n("div", {
					staticClass: "mm-dialog-btns"
				}, ["alert" !== t.dialogType ? n("div", {
					staticClass: "mm-btn-cancel",
					domProps: {
						textContent: t._s(t.cancelBtnText)
					},
					on: {
						click: t.cancel
					}
				}) : t._e(), t._t("btn"), n("div", {
					staticClass: "mm-btn-confirm",
					domProps: {
						textContent: t._s(t.confirmBtnText)
					},
					on: {
						click: t.confirm
					}
				})], 2)], 2)])])])
			},
			i = [],
			o = {
				name: "MmDialog",
				props: {
					type: {
						type: String,
						default: "confirm"
					},
					headText: {
						type: String,
						default: "提示"
					},
					bodyText: {
						type: String,
						default: ""
					},
					cancelBtnText: {
						type: String,
						default: "取消"
					},
					confirmBtnText: {
						type: String,
						default: "确定"
					},
					appendToBody: {
						type: Boolean,
						default: !0
					}
				},
				data: function() {
					return {
						dialogShow: !1
					}
				},
				computed: {
					dialogType: function() {
						return this.type.toLowerCase()
					}
				},
				watch: {
					dialogShow: function(t) {
						t && this.appendToBody && document.body.appendChild(this.$el)
					}
				},
				mounted: function() {
					this.dialogShow && this.appendToBody && document.body.appendChild(this.$el)
				},
				destroyed: function() {
					this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
				},
				methods: {
					show: function() {
						this.dialogShow = !0
					},
					hide: function() {
						this.dialogShow = !1
					},
					cancel: function() {
						this.hide(), this.$emit("cancel")
					},
					confirm: function() {
						this.hide(), this.$emit("confirm")
					}
				}
			},
			a = o,
			u = (n("0eb6"), n("2877")),
			c = Object(u["a"])(a, r, i, !1, null, null, null);
		e["a"] = c.exports
	},
	"0eb6": function(t, e, n) {
		"use strict";
		n("a316")
	},
	"2a81": function(t, e, n) {
		"use strict";
		n("90c6")
	},
	"2ff8": function(t, e, n) {
		"use strict";
		n("f5a8")
	},
	"365c": function(t, e, n) {
		"use strict";
		n.d(e, "f", (function() {
			return l
		})), n.d(e, "d", (function() {
			return d
		})), n.d(e, "e", (function() {
			return f
		})), n.d(e, "h", (function() {
			return m
		})), n.d(e, "i", (function() {
			return h
		})), n.d(e, "g", (function() {
			return p
		})), n.d(e, "c", (function() {
			return b
		})), n.d(e, "b", (function() {
			return v
		})), n.d(e, "a", (function() {
			return g
		}));
		n("d81d"), n("fb6a"), n("d3b7"), n("25f0");
		var r = n("bc3a"),
			i = n.n(r),
			o = n("2b0e"),
			a = i.a.create({
				baseURL: "https://netease-cloud-music-api-gray.vercel.app/"
			});
		a.interceptors.response.use((function(t) {
			return window.response = t, 200 === t.status && 200 === t.data.code ? t.data : Promise.reject(t)
		}), (function(t) {
			throw o["a"].prototype.$mmToast(t.message), t
		}));
		var u = a,
			c = n("db49"),
			s = n("eb4d");

		function l() {
			return u.get("/toplist/detail")
		}

		function d() {
			return u.get("/personalized")
		}

		function f(t) {
			return new Promise((function(e, n) {
				u.get("/playlist/detail", {
					params: {
						id: t
					}
				}).then((function(t) {
					var e = t.playlist;
					return e
				})).then((function(t) {
					var n = t.trackIds,
						r = t.tracks;
					if (r.length === n.length) return t.tracks = Object(s["c"])(t.tracks), void e(t);
					var i = n.slice(0, 500).map((function(t) {
						return t.id
					})).toString();
					b(i).then((function(n) {
						var r = n.songs;
						t.tracks = Object(s["c"])(r), e(t)
					}))
				}))
			}))
		}

		function m(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c["c"];
			return u.get("/search", {
				params: {
					offset: e * n,
					limit: n,
					keywords: t
				}
			})
		}

		function h() {
			return u.get("/search/hot")
		}

		function p(t) {
			return u.get("/user/playlist", {
				params: {
					uid: t
				}
			})
		}

		function b(t) {
			return u.get("/song/detail", {
				params: {
					ids: t
				}
			})
		}

		function v(t) {
			var e = "/lyric";
			return u.get(e, {
				params: {
					id: t
				}
			})
		}

		function g(t, e) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c["c"];
			return u.get("/comment/music", {
				params: {
					offset: e * n,
					limit: n,
					id: t
				}
			})
		}
		u.defaults.baseURL = "https://netease-cloud-music-api-gray.vercel.app/"
	},
	"36ba": function(t, e, n) {
		var r = {
			"./bg-1.jpg": "3b2f",
			"./bg-2.jpg": "cb9c"
		};

		function i(t) {
			var e = o(t);
			return n(e)
		}

		function o(t) {
			if (!n.o(r, t)) {
				var e = new Error("Cannot find module '" + t + "'");
				throw e.code = "MODULE_NOT_FOUND", e
			}
			return r[t]
		}
		i.keys = function() {
			return Object.keys(r)
		}, i.resolve = o, t.exports = i, i.id = "36ba"
	},
	"3b2f": function(t, e, n) {
		t.exports = n.p + "img/bg-1.cf743e29.jpg"
	},
	"56d7": function(t, e, n) {
		"use strict";
		n.r(e);
		var r = {};
		n.r(r), n.d(r, "audioEle", (function() {
			return d
		})), n.d(r, "mode", (function() {
			return f
		})), n.d(r, "playing", (function() {
			return m
		})), n.d(r, "playlist", (function() {
			return h
		})), n.d(r, "orderList", (function() {
			return p
		})), n.d(r, "currentIndex", (function() {
			return b
		})), n.d(r, "currentMusic", (function() {
			return v
		})), n.d(r, "historyList", (function() {
			return g
		})), n.d(r, "uid", (function() {
			return y
		}));
		var i = {};
		n.r(i), n.d(i, "setPlaylist", (function() {
			return E
		})), n.d(i, "selectPlay", (function() {
			return I
		})), n.d(i, "selectAddPlay", (function() {
			return U
		})), n.d(i, "clearPlayList", (function() {
			return M
		})), n.d(i, "removerPlayListItem", (function() {
			return D
		})), n.d(i, "setHistory", (function() {
			return _
		})), n.d(i, "removeHistory", (function() {
			return N
		})), n.d(i, "clearHistory", (function() {
			return Y
		})), n.d(i, "setPlayMode", (function() {
			return V
		})), n.d(i, "setUid", (function() {
			return R
		}));
		n("caad"), n("b0c0"), n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var o = n("2b0e"),
			a = n("2f62"),
			u = (n("a9e3"), n("db49")),
			c = n("5d2d"),
			s = {
				audioEle: null,
				mode: Number(Object(c["c"])()) || u["f"].listLoop,
				playing: !1,
				playlist: [],
				orderList: [],
				currentIndex: -1,
				historyList: Object(c["b"])() || [],
				uid: Object(c["d"])() || null
			},
			l = s,
			d = function(t) {
				return t.audioEle
			},
			f = function(t) {
				return t.mode
			},
			m = function(t) {
				return t.playing
			},
			h = function(t) {
				return t.playlist
			},
			p = function(t) {
				return t.orderList
			},
			b = function(t) {
				return t.currentIndex
			},
			v = function(t) {
				return t.playlist[t.currentIndex] || {}
			},
			g = function(t) {
				return t.historyList
			},
			y = function(t) {
				return t.uid
			},
			w = (n("c740"), n("2909")),
			A = "SET_AUDIOELE",
			O = "SET_PLAYMODE",
			k = "SET_PLAYING",
			x = "SET_PLAYLIST",
			j = "SET_ORDERLIST",
			T = "SET_CURRENTINDEX",
			P = "SET_HISTORYLIST",
			C = "SET_UID";

		function L(t, e) {
			return t.findIndex((function(t) {
				return t.id === e.id
			}))
		}
		var S, E = function(t, e) {
				var n = t.commit,
					r = e.list;
				n(x, r), n(j, r)
			},
			I = function(t, e) {
				var n = t.commit,
					r = e.list,
					i = e.index;
				n(x, r), n(j, r), n(T, i), n(k, !0)
			},
			U = function(t, e) {
				var n = t.commit,
					r = t.state,
					i = Object(w["a"])(r.playlist),
					o = L(i, e);
				o > -1 ? n(T, o) : (i.unshift(e), n(x, i), n(j, i), n(T, 0)), n(k, !0)
			},
			M = function(t) {
				var e = t.commit;
				e(k, !1), e(T, -1), e(x, []), e(j, [])
			},
			D = function(t, e) {
				var n = t.commit,
					r = t.state,
					i = e.list,
					o = e.index,
					a = r.currentIndex;
				(o < r.currentIndex || i.length === r.currentIndex) && (a--, n(T, a)), n(x, i), n(j, i), i.length ? n(k, !0) : n(
					k, !1)
			},
			_ = function(t, e) {
				var n = t.commit;
				n(P, Object(c["h"])(e))
			},
			N = function(t, e) {
				var n = t.commit;
				n(P, Object(c["g"])(e))
			},
			Y = function(t) {
				var e = t.commit;
				e(P, Object(c["a"])())
			},
			V = function(t, e) {
				var n = t.commit;
				n(O, Object(c["i"])(e))
			},
			R = function(t, e) {
				var n = t.commit;
				n(C, Object(c["j"])(e))
			},
			F = n("ade3"),
			H = (S = {}, Object(F["a"])(S, A, (function(t, e) {
				t.audioEle = e
			})), Object(F["a"])(S, O, (function(t, e) {
				t.mode = e
			})), Object(F["a"])(S, k, (function(t, e) {
				t.playing = e
			})), Object(F["a"])(S, x, (function(t, e) {
				t.playlist = e
			})), Object(F["a"])(S, j, (function(t, e) {
				t.orderList = e
			})), Object(F["a"])(S, T, (function(t, e) {
				t.currentIndex = e
			})), Object(F["a"])(S, P, (function(t, e) {
				t.historyList = e
			})), Object(F["a"])(S, C, (function(t, e) {
				t.uid = e
			})), S),
			Q = H,
			B = n("b054"),
			q = n.n(B),
			W = !1;
		o["a"].use(a["a"]);
		var K = new a["a"].Store({
				state: l,
				getters: r,
				mutations: Q,
				actions: i,
				strict: W,
				plugins: W ? [q()()] : []
			}),
			Z = (n("d3b7"), n("8c4f"));
		o["a"].use(Z["a"]);
		var z, J, G, X, $ = [{
				path: "/",
				redirect: "/music"
			}, {
				path: "/music",
				component: function() {
					return n.e("chunk-013bbbfa").then(n.bind(null, "b76b"))
				},
				redirect: "/music/playlist",
				children: [{
					path: "/music/playlist",
					component: function() {
						return n.e("chunk-540e805e").then(n.bind(null, "8184"))
					},
					meta: {
						keepAlive: !0
					}
				}, {
					path: "/music/userlist",
					component: function() {
						return n.e("chunk-607b8983").then(n.bind(null, "5fdd"))
					},
					meta: {
						title: "我的歌单",
						keepAlive: !0
					}
				}, {
					path: "/music/toplist",
					component: function() {
						return n.e("chunk-658aee7c").then(n.bind(null, "eb37"))
					},
					meta: {
						title: "排行榜",
						keepAlive: !0
					}
				}, {
					path: "/music/details/:id",
					component: function() {
						return n.e("chunk-66f0f839").then(n.bind(null, "4eef"))
					}
				}, {
					path: "/music/historylist",
					component: function() {
						return n.e("chunk-88b12574").then(n.bind(null, "1a25"))
					},
					meta: {
						title: "我听过的"
					}
				}, {
					path: "/music/search",
					component: function() {
						return n.e("chunk-70fe2629").then(n.bind(null, "650b"))
					},
					meta: {
						title: "搜索",
						keepAlive: !0
					}
				}, {
					path: "/music/comment/:id",
					component: function() {
						return n.e("chunk-5fbc8a8b").then(n.bind(null, "a3ad"))
					},
					meta: {
						title: "评论详情"
					}
				}]
			}],
			tt = new Z["a"]({
				linkActiveClass: "active",
				linkExactActiveClass: "active",
				routes: $
			}),
			et = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					attrs: {
						id: "app"
					}
				}, [n("mm-header"), n("router-view", {
					staticClass: "router-view"
				}), n("mm-dialog", {
					ref: "versionDialog",
					attrs: {
						type: "alert",
						"head-text": "更新提示",
						"body-text": t.versionInfo
					}
				}), n("audio", {
					ref: "mmPlayer"
				})], 1)
			},
			nt = [],
			rt = (n("99af"), n("fb6a"), n("159b"), n("5530")),
			it = n("365c"),
			ot = n("eb4d"),
			at = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("header", {
					staticClass: "mm-header"
				}, [t._m(0), n("dl", {
					staticClass: "user"
				}, [t.user.userId ? [n("router-link", {
					staticClass: "user-info",
					attrs: {
						to: "/music/userlist",
						tag: "dt"
					}
				}, [n("img", {
					staticClass: "avatar",
					attrs: {
						src: t.user.avatarUrl + "?param=50y50"
					}
				}), n("span", [t._v(t._s(t.user.nickname))])]), n("dd", {
					staticClass: "user-btn",
					on: {
						click: function(e) {
							return t.openDialog(2)
						}
					}
				}, [t._v("退出")])] : n("dd", {
					staticClass: "user-btn",
					on: {
						click: function(e) {
							return t.openDialog(0)
						}
					}
				}, [t._v("登录")])], 2), n("mm-dialog", {
					ref: "loginDialog",
					attrs: {
						"head-text": "登录",
						"confirm-btn-text": "登录",
						"cancel-btn-text": "关闭"
					},
					on: {
						confirm: t.login
					}
				}, [n("div", {
					staticClass: "mm-dialog-text"
				}, [n("input", {
					directives: [{
						name: "model",
						rawName: "v-model.trim",
						value: t.uidValue,
						expression: "uidValue",
						modifiers: {
							trim: !0
						}
					}],
					staticClass: "mm-dialog-input",
					attrs: {
						type: "number",
						autofocus: "",
						placeholder: "请输入您的网易云 UID"
					},
					domProps: {
						value: t.uidValue
					},
					on: {
						keyup: function(e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.login(e)
						},
						input: function(e) {
							e.target.composing || (t.uidValue = e.target.value.trim())
						},
						blur: function(e) {
							return t.$forceUpdate()
						}
					}
				})]), n("div", {
					attrs: {
						slot: "btn"
					},
					on: {
						click: function(e) {
							return t.openDialog(1)
						}
					},
					slot: "btn"
				}, [t._v("帮助")])]), n("mm-dialog", {
					ref: "helpDialog",
					attrs: {
						"head-text": "登录帮助",
						"confirm-btn-text": "去登录",
						"cancel-btn-text": "关闭"
					},
					on: {
						confirm: function(e) {
							return t.openDialog(0)
						}
					}
				}, [n("div", {
					staticClass: "mm-dialog-text"
				}, [n("p", [t._v(" 1、 "), n("a", {
					attrs: {
						target: "_blank",
						href: "https://music.163.com"
					}
				}, [t._v(" 点我(https://music.163.com) ")]), t._v(" 打开网易云音乐官网 ")]), n("p", [t._v("2、点击页面右上角的“登录”")]), n("p",
					[t._v("3、点击您的头像，进入我的主页")]), n("p", [t._v("4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）")])])]), n("mm-dialog", {
					ref: "outDialog",
					attrs: {
						"body-text": "确定退出当前用户吗？"
					},
					on: {
						confirm: t.out
					}
				})], 1)
			},
			ut = [function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("h1", {
					staticClass: "header"
				}, [n("a", {
					attrs: {
						href: "http://wpa.qq.com/msgrd?v=3&uin=3255819212&site=qq&menu=yes",
						target: "_blank"
					}
				}, [t._v("网抑云音乐")])])
			}],
			ct = n("093b"),
			st = n("ca00"),
			lt = {
				name: "MmHeader",
				components: {
					MmDialog: ct["a"]
				},
				data: function() {
					return {
						user: {},
						uidValue: ""
					}
				},
				computed: Object(rt["a"])({}, Object(a["c"])(["uid"])),
				created: function() {
					this.uid && this._getUserPlaylist(this.uid)
				},
				methods: Object(rt["a"])({
					openDialog: function(t) {
						switch (t) {
							case 0:
								this.$refs.loginDialog.show();
								break;
							case 1:
								this.$refs.loginDialog.hide(), this.$refs.helpDialog.show();
								break;
							case 2:
								this.$refs.outDialog.show();
								break;
							case 3:
								this.$refs.loginDialog.hide();
								break
						}
					},
					out: function() {
						this.user = {}, this.setUid(null), this.$mmToast("退出成功！")
					},
					login: function() {
						if ("" === this.uidValue) return this.$mmToast("UID 不能为空"), void this.openDialog(0);
						this.openDialog(3), this._getUserPlaylist(this.uidValue)
					},
					_getUserPlaylist: function(t) {
						var e = this;
						Object(it["g"])(t).then((function(n) {
							var r = n.playlist,
								i = void 0 === r ? [] : r;
							if (e.uidValue = "", 0 !== i.length && i[0].creator) {
								var o = i[0].creator;
								e.setUid(t), o.avatarUrl = Object(st["f"])(o.avatarUrl), e.user = o, setTimeout((function() {
									e.$mmToast("".concat(e.user.nickname, " 欢迎使用 mmPlayer"))
								}), 200)
							} else e.$mmToast("未查询找 UID 为 ".concat(t, " 的用户信息"))
						}))
					}
				}, Object(a["b"])(["setUid"]))
			},
			dt = lt,
			ft = (n("2ff8"), n("2877")),
			mt = Object(ft["a"])(dt, at, ut, !1, null, null, null),
			ht = mt.exports,
			pt = ('<div class="mm-dialog-text text-left">\n版本号：'.concat(u["a"], "（").concat("2021-02-28",
				"）<br/>\n1、 采用新版图标<br>\n2、 增加移动端歌词显示<br>\n3、 修复背景图白边<br>\n4、 修复音乐进度条点击无效问题\n</div>"), {
				name: "App",
				components: {
					MmHeader: ht,
					MmDialog: ct["a"]
				},
				created: function() {
					var t = this;
					Object(it["e"])(u["d"]).then((function(e) {
						var n = e.tracks.slice(0, 100);
						t.setPlaylist({
							list: n
						})
					})), this.$nextTick((function() {
						t.setAudioele(t.$refs.mmPlayer)
					}));
					var e = document.querySelector("#appLoading");
					if (e) {
						var n = function() {
							e.removeEventListener("animationend", n), e.removeEventListener("webkitAnimationEnd", n), document.body.removeChild(
								e), e = null;
							var t = Object(c["e"])();
							null !== t ? (Object(c["k"])(u["a"]), t !== u["a"] && this.$refs.versionDialog.show()) : (Object(c["k"])(u[
								"a"]), this.$refs.versionDialog.show())
						}.bind(this);
						e.addEventListener("animationend", n), e.addEventListener("webkitAnimationEnd", n), e.classList.add(
							"removeAnimate")
					}
				},
				methods: Object(rt["a"])(Object(rt["a"])({
					_formatSongs: function(t) {
						var e = [];
						return t.forEach((function(t) {
							var n = t;
							n.id && e.push(Object(ot["a"])(n))
						})), e
					}
				}, Object(a["d"])({
					setAudioele: "SET_AUDIOELE"
				})), Object(a["b"])(["setPlaylist"]))
			}),
			bt = pt,
			vt = (n("7c55"), Object(ft["a"])(bt, et, nt, !1, null, null, null)),
			gt = vt.exports,
			yt = n("fe3c"),
			wt = n.n(yt),
			At = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("transition", {
					attrs: {
						name: "toast-fade"
					}
				}, [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.visible,
						expression: "visible"
					}],
					staticClass: "mm-toast",
					class: t.positionClasss
				}, [t._v(t._s(t.message))])])
			},
			Ot = [],
			kt = {
				name: "MmToast",
				data: function() {
					return {
						position: "center",
						message: "",
						duration: 1500,
						visible: !1
					}
				},
				computed: {
					positionClasss: function() {
						return "mm-toast-" + this.position
					}
				}
			},
			xt = kt,
			jt = (n("b916"), Object(ft["a"])(xt, At, Ot, !1, null, null, null)),
			Tt = jt.exports,
			Pt = !1,
			Ct = {
				install: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = Tt.data();
					Object.assign(n, e), t.prototype.$mmToast = function(e, r) {
						Pt && (clearTimeout(J), z.vm.visible = Pt = !1, document.body.removeChild(z.vm.$el)), e && (n.message = e), r &&
							(n.position = r);
						var i = t.extend(Tt);
						z = new i({
							data: n
						}), z.vm = z.$mount(), document.body.appendChild(z.vm.$el), z.vm.visible = Pt = !0, J = setTimeout((function() {
							z.vm.visible = Pt = !1, document.body.removeChild(z.vm.$el)
						}), n.duration)
					}
				}
			},
			Lt = Ct,
			St = {
				name: "MmIcon",
				props: {
					type: {
						type: String,
						required: !0
					},
					size: {
						type: Number,
						default: 16
					}
				},
				methods: {
					getIconCls: function() {
						return "icon-".concat(this.type)
					},
					getIconStyle: function() {
						return {
							fontSize: this.size + "px"
						}
					},
					onClick: function(t) {
						this.$emit("click", t)
					}
				},
				render: function() {
					var t = arguments[0],
						e = t("i", {
							on: {
								click: this.onClick
							},
							class: "iconfont ".concat(this.getIconCls()),
							style: this.getIconStyle()
						});
					return e
				}
			},
			Et = St,
			It = (n("2a81"), Object(ft["a"])(Et, G, X, !1, null, null, null)),
			Ut = It.exports,
			Mt = n("caf9");
		n("a4b1");
		wt.a.attach(document.body), o["a"].use(Lt), o["a"].component(Ut.name, Ut), o["a"].use(Mt["a"], {
			preLoad: 1,
			loading: n("ee87")
		}), window._hmt && window._hmt.push(["_setCustomVar", 1, "version", u["a"], 1]);
		var Dt = ["/music/details", "/music/comment"];
		tt.beforeEach((function(t, e, n) {
			window._hmt && t.path && window._hmt.push(["_trackPageview", "/#" + t.fullPath]), Dt.includes(t.path) || (
				document.title = t.meta.title && "".concat(t.meta.title, " - 网抑云音乐") || "网抑云音乐"), n()
		})), window.mmPlayer = window.mmplayer = "欢迎使用 小辉音乐!\n当前版本为：V".concat(u["a"],
			"\n作者：小辉\n歌曲来源于网易云音乐 (https://music.163.com)"), console.info("%c".concat(window.mmplayer), "color:blue"), new o[
			"a"]({
			el: "#mmPlayer",
			store: K,
			router: tt,
			render: function(t) {
				return t(gt)
			}
		})
	},
	"5ba8": function(t, e, n) {},
	"5d2d": function(t, e, n) {
		"use strict";
		n.d(e, "b", (function() {
			return c
		})), n.d(e, "h", (function() {
			return s
		})), n.d(e, "g", (function() {
			return l
		})), n.d(e, "a", (function() {
			return d
		})), n.d(e, "c", (function() {
			return m
		})), n.d(e, "i", (function() {
			return h
		})), n.d(e, "d", (function() {
			return b
		})), n.d(e, "j", (function() {
			return v
		})), n.d(e, "e", (function() {
			return y
		})), n.d(e, "k", (function() {
			return w
		})), n.d(e, "f", (function() {
			return O
		})), n.d(e, "l", (function() {
			return k
		}));
		n("c740"), n("a434"), n("a9e3");
		var r = n("db49"),
			i = window.localStorage,
			o = {
				get: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					if (i) return i.getItem(t) ? Array.isArray(e) ? JSON.parse(i.getItem(t)) : i.getItem(t) : e
				},
				set: function(t, e) {
					i && i.setItem(t, e)
				},
				clear: function(t) {
					i && i.removeItem(t)
				}
			},
			a = "__mmPlayer_historyList__",
			u = 200;

		function c() {
			return o.get(a)
		}

		function s(t) {
			var e = o.get(a),
				n = e.findIndex((function(e) {
					return e.id === t.id
				}));
			return 0 === n || (n > 0 && e.splice(n, 1), e.unshift(t), u && e.length > u && e.pop(), o.set(a, JSON.stringify(e))),
				e
		}

		function l(t) {
			return o.set(a, JSON.stringify(t)), t
		}

		function d() {
			return o.clear(a), []
		}
		var f = "__mmPlayer_mode__";

		function m() {
			return o.get(f, null)
		}

		function h(t) {
			return o.set(f, t), t
		}
		var p = "__mmPlayer_userID__";

		function b() {
			return Number(o.get(p, null))
		}

		function v(t) {
			return o.set(p, t), t
		}
		var g = "__mmPlayer_version__";

		function y() {
			var t = o.get(g, null);
			return Array.isArray(t) ? null : t
		}

		function w(t) {
			return o.set(g, t), t
		}
		var A = "__mmPlayer_volume__";

		function O() {
			var t = o.get(A, r["e"]);
			return Number(t)
		}

		function k(t) {
			return o.set(A, t), t
		}
	},
	"7c55": function(t, e, n) {
		"use strict";
		n("5ba8")
	},
	"90c6": function(t, e, n) {},
	a316: function(t, e, n) {},
	a4b1: function(t, e, n) {},
	a85e: function(t, e, n) {},
	b916: function(t, e, n) {
		"use strict";
		n("a85e")
	},
	ca00: function(t, e, n) {
		"use strict";
		n.d(e, "d", (function() {
			return i
		})), n.d(e, "a", (function() {
			return o
		})), n.d(e, "c", (function() {
			return u
		})), n.d(e, "b", (function() {
			return c
		})), n.d(e, "e", (function() {
			return l
		})), n.d(e, "f", (function() {
			return f
		}));
		n("99af"), n("ac1f"), n("5319"), n("1276"), n("498a");

		function r(t, e) {
			var n = -1,
				r = t.length;
			e || (e = new Array(r));
			while (++n < r) e[n] = t[n];
			return e
		}
		var i = function(t) {
			var e = null == t ? 0 : t.length;
			if (!e) return [];
			var n = -1,
				i = e - 1,
				o = r(t);
			while (++n < e) {
				var a = n + Math.floor(Math.random() * (i - n + 1)),
					u = o[a];
				o[a] = o[n], o[n] = u
			}
			return o
		};

		function o(t) {
			return t < 10 ? "0" + t : t
		}
		var a = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;

		function u(t) {
			for (var e = t.split("\n"), n = [], r = 0; r < e.length; r++) {
				var i = e[r],
					o = a.exec(i);
				if (o) {
					var u = i.replace(a, "").trim();
					u && n.push({
						time: (6e4 * o[1] + 1e3 * o[2] + 1 * (o[3] || 0)) / 1e3,
						text: u
					})
				}
			}
			return n
		}

		function c(t) {
			var e = Math.floor(t / 60),
				n = Math.floor(t % 60);
			return "".concat(o(e), ":").concat(o(n))
		}

		function s(t) {
			return void 0 !== t && null !== t && "function" === typeof t.then
		}

		function l(t) {
			s(t) && t.then(null, (function() {}))
		}

		function d(t) {
			return "string" === typeof t
		}

		function f(t) {
			return d(t) ? t.replace("http://", "https://") : t
		}
	},
	cb9c: function(t, e, n) {
		t.exports = n.p + "img/bg-2.a1183040.jpg"
	},
	db49: function(t, e, n) {
		"use strict";
		n.d(e, "a", (function() {
			return r
		})), n.d(e, "d", (function() {
			return i
		})), n.d(e, "c", (function() {
			return o
		})), n.d(e, "b", (function() {
			return s
		})), n.d(e, "e", (function() {
			return l
		})), n.d(e, "f", (function() {
			return d
		}));
		n("d81d"), n("d3b7"), n("ddb0");
		var r = "1.8.1",
			i = 3778678,
			o = 30,
			a = function(t) {
				return t.keys().map(t)
			},
			u = n("36ba"),
			c = a(u),
			s = c[Math.floor(Math.random() * c.length)],
			l = .8,
			d = {
				listLoop: 0,
				order: 1,
				random: 2,
				loop: 3
			}
	},
	eb4d: function(t, e, n) {
		"use strict";
		n.d(e, "a", (function() {
			return c
		})), n.d(e, "c", (function() {
			return l
		}));
		n("a15b"), n("b0c0"), n("159b");
		var r = n("d4ec"),
			i = n("ca00");

		function o(t) {
			var e = [];
			return t.forEach((function(t) {
				e.push(t.name)
			})), e.join("/")
		}
		var a = function t(e) {
			var n = e.id,
				i = e.name,
				o = e.singer,
				a = e.album,
				u = e.image,
				c = e.duration,
				s = e.url;
			Object(r["a"])(this, t), this.id = n, this.name = i, this.singer = o, this.album = a, this.image = u, this.duration =
				c, this.url = s
		};

		function u(t) {
			return new a({
				id: t.id,
				name: t.name,
				singer: t.artists.length > 0 && o(t.artists),
				album: t.album.name,
				image: Object(i["f"])(t.album.picUrl) || null,
				duration: t.duration / 1e3,
				url: "https://music.163.com/song/media/outer/url?id=".concat(t.id, ".mp3")
			})
		}

		function c(t) {
			return new a({
				id: t.id,
				name: t.name,
				singer: t.ar.length > 0 && o(t.ar),
				album: t.al.name,
				image: Object(i["f"])(t.al.picUrl),
				duration: t.dt / 1e3,
				url: "https://music.163.com/song/media/outer/url?id=".concat(t.id, ".mp3")
			})
		}
		var s = function(t) {
				var e = [];
				return t.forEach((function(t) {
					var n = t;
					n.id && e.push(u(n))
				})), e
			},
			l = function(t) {
				var e = [];
				return t.forEach((function(t) {
					var n = t;
					n.id && e.push(c(n))
				})), e
			};
		e["b"] = s
	},
	ee87: function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	f5a8: function(t, e, n) {}
});
//# sourceMappingURL=app.368a50cb.js.map
