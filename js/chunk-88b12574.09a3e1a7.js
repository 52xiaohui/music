(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-88b12574"], {
		"1a25": function(t, s, i) {
			"use strict";
			i.r(s);
			var e = function() {
					var t = this,
						s = t.$createElement,
						i = t._self._c || s;
					return i("div", {
						staticClass: "historyList"
					}, [i("music-list", {
						attrs: {
							list: t.historyList,
							"list-type": 1
						},
						on: {
							select: t.selectItem,
							del: t.deleteItem
						}
					}, [i("div", {
						staticClass: "list-btn",
						attrs: {
							slot: "listBtn"
						},
						slot: "listBtn"
					}, [i("span", {
						on: {
							click: function(s) {
								return t.$refs.dialog.show()
							}
						}
					}, [t._v("清空列表")])])]), i("mm-dialog", {
						ref: "dialog",
						attrs: {
							"body-text": "是否清空播放历史列表",
							"confirm-btn-text": "清空"
						},
						on: {
							confirm: t.clearList
						}
					})], 1)
				},
				l = [],
				n = (i("a434"), i("2909")),
				c = i("5530"),
				a = i("2f62"),
				o = i("5362"),
				r = i("093b"),
				u = {
					name: "HistoryList",
					components: {
						MusicList: o["a"],
						MmDialog: r["a"]
					},
					computed: Object(c["a"])({}, Object(a["c"])(["historyList", "playing", "currentMusic"])),
					methods: Object(c["a"])(Object(c["a"])({
						clearList: function() {
							this.clearHistory(), this.$mmToast("列表清空成功")
						},
						selectItem: function(t, s) {
							this.selectPlay({
								list: this.historyList,
								index: s
							})
						},
						deleteItem: function(t) {
							var s = Object(n["a"])(this.historyList);
							s.splice(t, 1), this.removeHistory(s), this.$mmToast("删除成功")
						}
					}, Object(a["d"])({
						setPlaying: "SET_PLAYING"
					})), Object(a["b"])(["selectPlay", "clearHistory", "removeHistory"]))
				},
				m = u,
				p = (i("2f81"), i("2877")),
				f = Object(p["a"])(m, e, l, !1, null, "2d87d009", null);
			s["default"] = f.exports
		},
		"2f81": function(t, s, i) {
			"use strict";
			i("c2ab")
		},
		5362: function(t, s, i) {
			"use strict";
			var e = function() {
					var t = this,
						s = t.$createElement,
						i = t._self._c || s;
					return i("div", {
						staticClass: "musicList"
					}, [t.list.length > 0 ? [i("div", {
						staticClass: "list-item list-header"
					}, [i("span", {
						staticClass: "list-name"
					}, [t._v("歌曲")]), i("span", {
						staticClass: "list-artist"
					}, [t._v("歌手")]), 1 === t.listType ? i("span", {
						staticClass: "list-time"
					}, [t._v("时长")]) : i("span", {
						staticClass: "list-album"
					}, [t._v("专辑")])]), i("div", {
						ref: "listContent",
						staticClass: "list-content",
						on: {
							scroll: function(s) {
								return t.listScroll(s)
							}
						}
					}, [t._l(t.list, (function(s, e) {
						return i("div", {
							key: s.id,
							staticClass: "list-item",
							class: {
								on: t.playing && t.currentMusic.id === s.id
							},
							on: {
								dblclick: function(i) {
									return t.selectItem(s, e, i)
								}
							}
						}, [i("span", {
							staticClass: "list-num",
							domProps: {
								textContent: t._s(e + 1)
							}
						}), i("div", {
							staticClass: "list-name"
						}, [i("span", [t._v(t._s(s.name))]), i("div", {
							staticClass: "list-menu"
						}, [i("mm-icon", {
							staticClass: "hover",
							attrs: {
								type: t.getPlayIconType(s),
								size: 40
							},
							on: {
								click: function(i) {
									return i.stopPropagation(), t.selectItem(s, e)
								}
							}
						})], 1)]), i("span", {
							staticClass: "list-artist"
						}, [t._v(t._s(s.singer))]), 1 === t.listType ? i("span", {
							staticClass: "list-time"
						}, [t._v(" " + t._s(t._f("format")(s.duration % 3600)) + " "), i("mm-icon", {
							staticClass: "hover list-menu-icon-del",
							attrs: {
								type: "delete-mini",
								size: 40
							},
							on: {
								click: function(s) {
									return s.stopPropagation(), t.deleteItem(e)
								}
							}
						})], 1) : i("span", {
							staticClass: "list-album"
						}, [t._v(t._s(s.album))])])
					})), t._t("listBtn")], 2)] : i("mm-no-result", {
						attrs: {
							title: "弄啥呢，怎么啥也没有！！！"
						}
					})], 2)
				},
				l = [],
				n = (i("a9e3"), i("5530")),
				c = i("2f62"),
				a = i("ca00"),
				o = i("5af1"),
				r = {
					name: "MusicList",
					components: {
						MmNoResult: o["a"]
					},
					filters: {
						format: a["b"]
					},
					props: {
						list: {
							type: Array,
							default: function() {
								return []
							}
						},
						listType: {
							type: Number,
							default: 0
						}
					},
					data: function() {
						return {
							lockUp: !0
						}
					},
					computed: Object(n["a"])({}, Object(c["c"])(["playing", "currentMusic"])),
					watch: {
						list: function(t, s) {
							2 === this.listType && (t.length !== s.length || t[t.length - 1].id !== s[s.length - 1].id) && (this.lockUp = !
								1)
						}
					},
					activated: function() {
						this.scrollTop && this.$refs.listContent && (this.$refs.listContent.scrollTop = this.scrollTop)
					},
					methods: Object(n["a"])({
						listScroll: function(t) {
							var s = t.target.scrollTop;
							if (this.scrollTop = s, 2 === this.listType && !this.lockUp) {
								var i = t.target,
									e = i.scrollHeight,
									l = i.offsetHeight;
								s + l >= e - 50 && (this.lockUp = !0, this.$emit("pullUp"))
							}
						},
						scrollTo: function() {
							this.$refs.listContent.scrollTop = 0
						},
						selectItem: function(t, s, i) {
							i && /list-menu-icon-del/.test(i.target.className) || (this.currentMusic.id && t.id === this.currentMusic.id ?
								this.setPlaying(!this.playing) : this.$emit("select", t, s))
						},
						getPlayIconType: function(t) {
							var s = t.id,
								i = this.playing,
								e = this.currentMusic.id;
							return i && e === s ? "pause-mini" : "play-mini"
						},
						deleteItem: function(t) {
							this.$emit("del", t)
						}
					}, Object(c["d"])({
						setPlaying: "SET_PLAYING"
					}))
				},
				u = r,
				m = (i("7786"), i("2877")),
				p = Object(m["a"])(u, e, l, !1, null, "707b2810", null);
			s["a"] = p.exports
		},
		"5af1": function(t, s, i) {
			"use strict";
			var e = function() {
					var t = this,
						s = t.$createElement,
						i = t._self._c || s;
					return i("div", {
						staticClass: "mm-no-result"
					}, [i("p", {
						staticClass: "mm-no-result-text"
					}, [t._v(t._s(t.title))])])
				},
				l = [],
				n = {
					name: "MmNoResult",
					props: {
						title: {
							type: String,
							default: ""
						}
					}
				},
				c = n,
				a = (i("9673"), i("2877")),
				o = Object(a["a"])(c, e, l, !1, null, null, null);
			s["a"] = o.exports
		},
		7786: function(t, s, i) {
			"use strict";
			i("7915")
		},
		7915: function(t, s, i) {},
		9673: function(t, s, i) {
			"use strict";
			i("f045")
		},
		c2ab: function(t, s, i) {},
		f045: function(t, s, i) {}
	}
]);
//# sourceMappingURL=chunk-88b12574.09a3e1a7.js.map
