(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-5fbc8a8b"], {
		2332: function(t, e, a) {
			"use strict";
			a("77a3")
		},
		"77a3": function(t, e, a) {},
		"8d3b": function(t, e, a) {
			"use strict";
			a("c4ad")
		},
		a3ad: function(t, e, a) {
			"use strict";
			a.r(e);
			var s = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("div", {
						staticClass: "comment"
					}, [a("mm-loading", {
						model: {
							value: t.mmLoadShow,
							callback: function(e) {
								t.mmLoadShow = e
							},
							expression: "mmLoadShow"
						}
					}), t.hotComments.length > 0 ? a("dl", {
						staticClass: "comment-list",
						on: {
							scroll: function(e) {
								return t.listScroll(e)
							}
						}
					}, [a("dt", {
						staticClass: "comment-title"
					}, [t._v("精彩评论")]), t._l(t.hotComments, (function(e) {
						return a("dd", {
							key: e.commentId,
							staticClass: "comment-item"
						}, [a("a", {
							attrs: {
								target: "_blank",
								href: "https://music.163.com/#/user/home?id=" + e.user.userId
							}
						}, [a("img", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy",
								value: e.user.avatarUrl + "?param=50y50",
								expression: "`${item.user.avatarUrl}?param=50y50`"
							}],
							staticClass: "comment-item-pic"
						}), a("h2", {
							staticClass: "comment-item-title"
						}, [t._v(t._s(e.user.nickname))])]), a("p", {
							staticClass: "comment-item-disc"
						}, [t._v(t._s(e.content))]), a("div", {
							staticClass: "comment-item-opt"
						}, [a("span", {
							staticClass: "comment-opt-date"
						}, [t._v(t._s(t._f("format")(e.time)))]), a("span", {
							staticClass: "comment-opt-liked"
						}, [a("mm-icon", {
							attrs: {
								type: "good"
							}
						}), t._v(" " + t._s(e.likedCount) + " ")], 1)])])
					})), a("dt", {
						staticClass: "comment-title"
					}, [t._v("最新评论（" + t._s(t.total) + "）")]), t._l(t.commentList, (function(e) {
						return a("dd", {
							key: e.commentId,
							staticClass: "comment-item"
						}, [a("a", {
							staticClass: "comment-item-pic",
							attrs: {
								target: "_blank",
								href: "https://music.163.com/#/user/home?id=" + e.user.userId
							}
						}, [a("img", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy",
								value: e.user.avatarUrl + "?param=50y50",
								expression: "`${item.user.avatarUrl}?param=50y50`"
							}],
							staticClass: "cover-img"
						})]), a("h2", {
							staticClass: "comment-item-title"
						}, [a("a", {
							attrs: {
								target: "_blank",
								href: "https://music.163.com/#/user/home?id=" + e.user.userId
							}
						}, [t._v(" " + t._s(e.user.nickname) + " ")])]), a("p", {
							staticClass: "comment-item-disc"
						}, [t._v(t._s(e.content))]), t._l(e.beReplied, (function(e) {
							return a("div", {
								key: e.user.userId,
								staticClass: "comment-item-replied"
							}, [a("a", {
								attrs: {
									target: "_blank",
									href: "https://music.163.com/#/user/home?id=" + e.user.userId
								}
							}, [t._v(" " + t._s(e.user.nickname) + " ")]), t._v(" ：" + t._s(e.content) + " ")])
						})), a("div", {
							staticClass: "comment-item-opt"
						}, [a("span", {
							staticClass: "comment-opt-date"
						}, [t._v(t._s(t._f("format")(e.time)))]), e.likedCount > 0 ? a("span", {
							staticClass: "comment-opt-liked"
						}, [a("mm-icon", {
							attrs: {
								type: "good"
							}
						}), t._v(" " + t._s(e.likedCount) + " ")], 1) : t._e()])], 2)
					}))], 2) : t._e()], 1)
				},
				n = [],
				c = (a("99af"), a("2909")),
				i = a("365c"),
				o = a("ca00"),
				m = a("f904"),
				r = a("ac0d"),
				l = {
					name: "Comment",
					components: {
						MmLoading: m["a"]
					},
					filters: {
						format: function(t) {
							var e, a = new Date(t),
								s = {
									year: a.getFullYear(),
									month: a.getMonth(),
									date: a.getDate(),
									hours: a.getHours(),
									minutes: a.getMinutes()
								},
								n = new Date,
								c = n.getTime() - t;
							return e = n.getDate() === s.date && c < 6e4 ? "刚刚" : n.getDate() === s.date && c > 6e4 && c < 36e5 ? "".concat(
								Math.floor(c / 6e4), "分钟前") : n.getDate() === s.date && c > 36e5 && c < 864e5 ? "".concat(Object(o["a"])(s
								.hours), ":").concat(Object(o["a"])(s.minutes)) : n.getDate() !== s.date && c < 864e5 ? "昨天".concat(Object(
								o["a"])(s.hours), ":").concat(Object(o["a"])(s.minutes)) : n.getFullYear() === s.year ? "".concat(s.month +
								1, "月").concat(s.date, "日") : "".concat(s.year, "年").concat(s.month + 1, "月").concat(s.date, "日"), e
						}
					},
					mixins: [r["a"]],
					data: function() {
						return {
							lockUp: !0,
							page: 0,
							hotComments: [],
							commentList: [],
							total: null
						}
					},
					watch: {
						commentList: function(t, e) {
							t.length !== e.length && (this.lockUp = !1)
						}
					},
					created: function() {
						this.initData()
					},
					methods: {
						initData: function() {
							var t = this;
							Object(i["a"])(this.$route.params.id, this.page).then((function(e) {
								t.hotComments = e.hotComments, t.commentList = e.comments, t.total = e.total, t.lockUp = !0, t._hideLoad()
							}))
						},
						listScroll: function(t) {
							if (!this.lockUp) {
								var e = t.target,
									a = e.scrollTop,
									s = e.scrollHeight,
									n = e.offsetHeight;
								a + n >= s - 100 && (this.lockUp = !0, this.page += 1, this.pullUp())
							}
						},
						pullUp: function() {
							var t = this;
							Object(i["a"])(this.$route.params.id, this.page).then((function(e) {
								var a = e.comments;
								t.commentList = [].concat(Object(c["a"])(t.commentList), Object(c["a"])(a))
							}))
						}
					}
				},
				u = l,
				d = (a("8d3b"), a("2877")),
				h = Object(d["a"])(u, s, n, !1, null, "197b1e4b", null);
			e["default"] = h.exports
		},
		ac0d: function(t, e, a) {
			"use strict";
			a.d(e, "a", (function() {
				return c
			}));
			var s = a("5530"),
				n = a("2f62"),
				c = (Object(s["a"])({}, Object(n["c"])(["playing", "currentMusic"])), Object(s["a"])(Object(s["a"])({
					selectItem: function(t, e) {
						t.id === this.currentMusic.id && this.playing ? this.setPlaying(!1) : this.selectPlay({
							list: this.list,
							index: e
						})
					}
				}, Object(n["d"])({
					setPlaying: "SET_PLAYING"
				})), Object(n["b"])(["selectPlay"])), {
					data: function() {
						return {
							mmLoadShow: !0
						}
					},
					methods: {
						_hideLoad: function() {
							var t, e = this;
							clearTimeout(t), t = setTimeout((function() {
								e.mmLoadShow = !1
							}), 200)
						}
					}
				})
		},
		c4ad: function(t, e, a) {},
		f904: function(t, e, a) {
			"use strict";
			var s = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.value,
							expression: "value"
						}],
						staticClass: "mm-loading",
						style: {
							backgroundColor: t.loadingBgColor
						}
					}, [a("div", {
						staticClass: "mm-loading-content"
					}, [a("svg", {
						staticClass: "circular",
						attrs: {
							viewBox: "25 25 50 50"
						}
					}, [a("circle", {
						staticClass: "path",
						attrs: {
							cx: "50",
							cy: "50",
							r: "20",
							fill: "none"
						}
					})])])])
				},
				n = [],
				c = {
					name: "MmLoading",
					props: {
						value: {
							type: Boolean,
							default: !0
						},
						loadingBgColor: {
							type: String,
							default: ""
						}
					}
				},
				i = c,
				o = (a("2332"), a("2877")),
				m = Object(o["a"])(i, s, n, !1, null, null, null);
			e["a"] = m.exports
		}
	}
]);
//# sourceMappingURL=chunk-5fbc8a8b.3dfb1959.js.map
