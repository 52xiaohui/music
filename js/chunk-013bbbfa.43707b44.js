(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-013bbbfa"], {
		"0908": function(t, e, i) {
			"use strict";
			i("9cb9")
		},
		1148: function(t, e, i) {
			"use strict";
			var r = i("a691"),
				n = i("1d80");
			t.exports = "".repeat || function(t) {
				var e = String(n(this)),
					i = "",
					s = r(t);
				if (s < 0 || s == 1 / 0) throw RangeError("Wrong number of repetitions");
				for (; s > 0;
					(s >>>= 1) && (e += e)) 1 & s && (i += e);
				return i
			}
		},
		"132b": function(t, e, i) {},
		"1a26": function(t, e, i) {
			"use strict";
			i("c7d1")
		},
		2262: function(t, e, i) {
			t.exports = i.p + "img/player_cover.373e0739.png"
		},
		"3b36": function(t, e, i) {
			"use strict";
			i("132b")
		},
		"408a": function(t, e, i) {
			var r = i("c6b6");
			t.exports = function(t) {
				if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
				return +t
			}
		},
		"429f": function(t, e, i) {},
		"4d21": function(t, e, i) {
			"use strict";
			i("e0ca")
		},
		"7bdd": function(t, e, i) {
			"use strict";
			i("429f")
		},
		"9cb9": function(t, e, i) {},
		b680: function(t, e, i) {
			"use strict";
			var r = i("23e7"),
				n = i("a691"),
				s = i("408a"),
				c = i("1148"),
				o = i("d039"),
				a = 1..toFixed,
				u = Math.floor,
				l = function(t, e, i) {
					return 0 === e ? i : e % 2 === 1 ? l(t, e - 1, i * t) : l(t * t, e / 2, i)
				},
				m = function(t) {
					var e = 0,
						i = t;
					while (i >= 4096) e += 12, i /= 4096;
					while (i >= 2) e += 1, i /= 2;
					return e
				},
				d = function(t, e, i) {
					var r = -1,
						n = i;
					while (++r < 6) n += e * t[r], t[r] = n % 1e7, n = u(n / 1e7)
				},
				h = function(t, e) {
					var i = 6,
						r = 0;
					while (--i >= 0) r += t[i], t[i] = u(r / e), r = r % e * 1e7
				},
				f = function(t) {
					var e = 6,
						i = "";
					while (--e >= 0)
						if ("" !== i || 0 === e || 0 !== t[e]) {
							var r = String(t[e]);
							i = "" === i ? r : i + c.call("0", 7 - r.length) + r
						} return i
				},
				v = a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) ||
					"1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !o((function() {
					a.call({})
				}));
			r({
				target: "Number",
				proto: !0,
				forced: v
			}, {
				toFixed: function(t) {
					var e, i, r, o, a = s(this),
						u = n(t),
						v = [0, 0, 0, 0, 0, 0],
						p = "",
						y = "0";
					if (u < 0 || u > 20) throw RangeError("Incorrect fraction digits");
					if (a != a) return "NaN";
					if (a <= -1e21 || a >= 1e21) return String(a);
					if (a < 0 && (p = "-", a = -a), a > 1e-21)
						if (e = m(a * l(2, 69, 1)) - 69, i = e < 0 ? a * l(2, -e, 1) : a / l(2, e, 1), i *= 4503599627370496, e =
							52 - e, e > 0) {
							d(v, 0, i), r = u;
							while (r >= 7) d(v, 1e7, 0), r -= 7;
							d(v, l(10, r, 1), 0), r = e - 1;
							while (r >= 23) h(v, 1 << 23), r -= 23;
							h(v, 1 << r), d(v, 1, 1), h(v, 2), y = f(v)
						} else d(v, 0, i), d(v, 1 << -e, 0), y = f(v) + c.call("0", u);
					return u > 0 ? (o = y.length, y = p + (o <= u ? "0." + c.call("0", u - o) + y : y.slice(0, o - u) + "." + y.slice(
						o - u))) : y = p + y, y
				}
			})
		},
		b76b: function(t, e, i) {
			"use strict";
			i.r(e);
			var r = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "music"
					}, [i("div", {
						staticClass: "music-content"
					}, [i("div", {
						staticClass: "music-left"
					}, [i("music-btn", {
						on: {
							onClickLyric: t.handleOpenLyric
						}
					}), i("keep-alive", [t.$route.meta.keepAlive ? i("router-view", {
						staticClass: "music-list"
					}) : t._e()], 1), t.$route.meta.keepAlive ? t._e() : i("router-view", {
						key: t.$route.path,
						staticClass: "music-list"
					})], 1), i("div", {
						staticClass: "music-right",
						class: {
							show: t.lyricVisible
						}
					}, [i("div", {
						staticClass: "close-lyric",
						on: {
							click: t.handleCloseLyric
						}
					}, [t._v("关闭歌词")]), i("lyric", {
						ref: "lyric",
						attrs: {
							lyric: t.lyric,
							nolyric: t.nolyric,
							"lyric-index": t.lyricIndex
						}
					})], 1)]), i("div", {
						staticClass: "music-bar",
						class: {
							disable: !t.musicReady || !t.currentMusic.id
						}
					}, [i("div", {
						staticClass: "music-bar-btns"
					}, [i("mm-icon", {
						staticClass: "pointer",
						attrs: {
							type: "prev",
							size: 36,
							title: "上一曲 Ctrl + Left"
						},
						on: {
							click: t.prev
						}
					}), i("div", {
						staticClass: "control-play pointer",
						attrs: {
							title: "播放暂停 Ctrl + Space"
						},
						on: {
							click: t.play
						}
					}, [i("mm-icon", {
						attrs: {
							type: t.playing ? "pause" : "play",
							size: 24
						}
					})], 1), i("mm-icon", {
						staticClass: "pointer",
						attrs: {
							type: "next",
							size: 36,
							title: "下一曲 Ctrl + Right"
						},
						on: {
							click: t.next
						}
					})], 1), i("div", {
						staticClass: "music-music"
					}, [i("div", {
						staticClass: "music-bar-info"
					}, [t.currentMusic && t.currentMusic.id ? [t._v(" " + t._s(t.currentMusic.name) + " "), i("span", [t._v(
						"- " + t._s(t.currentMusic.singer))])] : [t._v("欢迎使用小辉在线音乐播放器")]], 2), t.currentMusic.id ? i("div", {
						staticClass: "music-bar-time"
					}, [t._v(" " + t._s(t._f("format")(t.currentTime)) + "/" + t._s(t._f("format")(t.currentMusic.duration %
						3600)) + " ")]) : t._e(), i("mm-progress", {
						staticClass: "music-progress",
						attrs: {
							percent: t.percentMusic,
							"percent-progress": t.currentProgress
						},
						on: {
							percentChange: t.progressMusic,
							percentChangeEnd: t.progressMusicEnd
						}
					})], 1), i("mm-icon", {
						staticClass: "icon-color pointer mode",
						attrs: {
							type: t.getModeIconType(),
							title: t.getModeIconTitle(),
							size: 30
						},
						on: {
							click: t.modeChange
						}
					}), i("mm-icon", {
						staticClass: "icon-color pointer comment",
						attrs: {
							type: "comment",
							size: 30
						},
						on: {
							click: t.openComment
						}
					}), i("div", {
						staticClass: "music-bar-volume",
						attrs: {
							title: "音量加减 [Ctrl + Up / Down]"
						}
					}, [i("volume", {
						attrs: {
							volume: t.volume
						},
						on: {
							volumeChange: t.volumeChange
						}
					})], 1)], 1), i("div", {
						staticClass: "mmPlayer-bg",
						style: {
							backgroundImage: t.picUrl
						}
					}), i("div", {
						staticClass: "mmPlayer-mask"
					})])
				},
				n = [],
				s = (i("c740"), i("a9e3"), i("b680"), i("ade3")),
				c = i("5530"),
				o = i("365c"),
				a = i("db49"),
				u = 1,
				l = {
					initAudio: function(t) {
						var e = t.audioEle;
						e.onprogress = function() {
							try {
								if (e.buffered.length > 0) {
									var i = t.currentMusic.duration,
										r = 0;
									e.buffered.end(0), r = e.buffered.end(0) > i ? i : e.buffered.end(0), t.currentProgress = r / i
								}
							} catch (n) {}
						}, e.onplay = function() {
							var e;
							clearTimeout(e), e = setTimeout((function() {
								t.musicReady = !0
							}), 100)
						}, e.ontimeupdate = function() {
							t.currentTime = e.currentTime
						}, e.onended = function() {
							t.mode === a["f"].loop ? t.loop() : t.next()
						}, e.onerror = function() {
							if (0 === u) {
								var i = "当前音乐不可播放，已自动播放下一曲";
								1 === t.playlist.length && (i = "没有可播放的音乐哦~"), t.$mmToast(i), t.next(!0)
							} else console.log("重试一次"), u -= 1, e.url = t.currentMusic.url, e.load()
						}, e.onstalled = function() {
							var i;
							e.load(), t.setPlaying(!1), clearTimeout(i), i = setTimeout((function() {
								t.setPlaying(!0)
							}), 10)
						}, e.oncanplay = function() {
							u = 1, 0 !== t.historyList.length && t.currentMusic.id === t.historyList[0].id || t.setHistory(t.currentMusic)
						}, e.onstalled = function() {
							var i;
							e.load(), t.setPlaying(!1), clearTimeout(i), i = setTimeout((function() {
								t.setPlaying(!0)
							}), 10)
						}, e.onpause = function() {
							t.setPlaying(!1)
						}
					}
				},
				m = l,
				d = i("ca00"),
				h = i("5d2d"),
				f = i("2f62"),
				v = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						ref: "mmProgress",
						staticClass: "mmProgress",
						on: {
							click: t.barClick
						}
					}, [i("div", {
						staticClass: "mmProgress-bar"
					}), i("div", {
						ref: "mmPercentProgress",
						staticClass: "mmProgress-outer"
					}), i("div", {
						ref: "mmProgressInner",
						staticClass: "mmProgress-inner"
					}, [i("div", {
						staticClass: "mmProgress-dot",
						on: {
							mousedown: t.barDown,
							touchstart: function(e) {
								return e.preventDefault(), t.barDown(e)
							}
						}
					})])])
				},
				p = [],
				y = 10,
				g = {
					name: "MmProgress",
					props: {
						percent: {
							type: [Number],
							default: 0
						},
						percentProgress: {
							type: [Number],
							default: 0
						}
					},
					data: function() {
						return {
							move: {
								status: !1,
								startX: 0,
								left: 0
							}
						}
					},
					watch: {
						percent: function(t) {
							if (t >= 0 && !this.move.status) {
								var e = this.$refs.mmProgress.clientWidth - y,
									i = t * e;
								this.moveSilde(i)
							}
						},
						percentProgress: function(t) {
							var e = this.$refs.mmProgress.clientWidth * t;
							this.$refs.mmPercentProgress.style.width = "".concat(e, "px")
						}
					},
					mounted: function() {
						var t = this;
						this.$nextTick((function() {
							t.bindEvents();
							var e = t.$refs.mmProgress.clientWidth - y,
								i = t.percent * e;
							t.moveSilde(i)
						}))
					},
					beforeDestroy: function() {
						this.unbindEvents()
					},
					methods: {
						bindEvents: function() {
							document.addEventListener("mousemove", this.barMove), document.addEventListener("mouseup", this.barUp),
								document.addEventListener("touchmove", this.barMove), document.addEventListener("touchend", this.barUp)
						},
						unbindEvents: function() {
							document.removeEventListener("mousemove", this.barMove), document.removeEventListener("mouseup", this.barUp),
								document.removeEventListener("touchmove", this.barMove), document.removeEventListener("touchend", this.barUp)
						},
						barClick: function(t) {
							var e = this.$refs.mmProgress.getBoundingClientRect(),
								i = Math.min(this.$refs.mmProgress.clientWidth - y, Math.max(0, t.clientX - e.left));
							this.moveSilde(i), this.commitPercent(!0)
						},
						barDown: function(t) {
							this.move.status = !0, this.move.startX = t.clientX || t.touches[0].pageX, this.move.left = this.$refs.mmProgressInner
								.clientWidth
						},
						barMove: function(t) {
							if (!this.move.status) return !1;
							t.preventDefault();
							var e = t.clientX || t.touches[0].pageX,
								i = e - this.move.startX,
								r = Math.min(this.$refs.mmProgress.clientWidth - y, Math.max(0, this.move.left + i));
							this.moveSilde(r), this.commitPercent()
						},
						barUp: function(t) {
							this.move.status && (this.commitPercent(!0), this.move.status = !1)
						},
						moveSilde: function(t) {
							this.$refs.mmProgressInner.style.width = "".concat(t, "px")
						},
						commitPercent: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								e = this.$refs,
								i = e.mmProgress,
								r = e.mmProgressInner,
								n = i.clientWidth - y,
								s = r.clientWidth / n;
							this.$emit(t ? "percentChangeEnd" : "percentChange", s)
						}
					}
				},
				b = g,
				C = (i("0908"), i("2877")),
				M = Object(C["a"])(b, v, p, !1, null, null, null),
				P = M.exports,
				x = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "music-btn"
					}, [i("router-link", {
						attrs: {
							to: "/music/playlist",
							tag: "span"
						}
					}, [t._v("正在播放")]), i("router-link", {
						attrs: {
							to: "/music/toplist",
							tag: "span"
						}
					}, [t._v("推荐")]), i("router-link", {
						attrs: {
							to: "/music/search",
							tag: "span"
						}
					}, [t._v("搜索")]), i("router-link", {
						attrs: {
							to: "/music/userlist",
							tag: "span"
						}
					}, [t._v(" 我的歌单 ")]), i("span", {
						staticClass: "show-960",
						on: {
							click: function(e) {
								return t.$emit("onClickLyric")
							}
						}
					}, [t._v("歌词")]), i("router-link", {
						attrs: {
							to: "/music/historylist",
							tag: "span"
						}
					}, [t._v("我听过的")])], 1)
				},
				_ = [],
				T = {},
				k = T,
				E = (i("3b36"), Object(C["a"])(k, x, _, !1, null, "a4e61d46", null)),
				w = E.exports,
				I = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", [i("dl", {
						staticClass: "music-info"
					}, [i("dt", [i("img", {
						attrs: {
							src: t.musicPicUrl
						}
					})]), t.currentMusic.id ? [i("dd", [t._v("歌曲名：" + t._s(t.currentMusic.name))]), i("dd", [t._v("歌手名：" + t._s(
						t.currentMusic.singer))]), i("dd", [t._v("专辑名：" + t._s(t.currentMusic.album))])] : [i("dd", [t._v(
						"小辉在线音乐播放器")]), i("dd", [i("a", {
						staticClass: "hover",
						attrs: {
							target: "_blank",
							href: "http://wpa.qq.com/msgrd?v=3&uin=3255819212&site=qq&menu=yes"
						}
					}, [i("mm-icon", {
						attrs: {
							type: "",
							size: 14
						}
					}), t._v(" Xiao_Hui ")], 1)])]], 2), i("div", {
						ref: "musicLyric",
						staticClass: "music-lyric"
					}, [i("div", {
						staticClass: "music-lyric-items",
						style: t.lyricTop
					}, [t.currentMusic.id ? t.nolyric ? i("p", [t._v("暂无歌词！")]) : t.lyric.length > 0 ? t._l(t.lyric, (
						function(e, r) {
							return i("p", {
								key: r,
								class: {
									on: t.lyricIndex === r
								}
							}, [t._v(" " + t._s(e.text) + " ")])
						})) : i("p", [t._v("歌词加载失败！")]) : i("p", [t._v("还没有播放音乐哦！")])], 2)])])
				},
				L = [],
				O = {
					name: "Lyric",
					props: {
						lyric: {
							type: Array,
							default: function() {
								return []
							}
						},
						nolyric: {
							type: Boolean,
							default: !1
						},
						lyricIndex: {
							type: Number,
							default: 0
						}
					},
					data: function() {
						return {
							top: 0
						}
					},
					computed: Object(c["a"])({
						musicPicUrl: function() {
							return this.currentMusic.id ? "".concat(this.currentMusic.image, "?param=300y300") : i("2262")
						},
						lyricTop: function() {
							return "transform :translate3d(0, ".concat(-34 * (this.lyricIndex - this.top), "px, 0)")
						}
					}, Object(f["c"])(["currentMusic"])),
					mounted: function() {
						var t = this;
						window.addEventListener("resize", (function() {
							clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout((function() {
								return t.clacTop()
							}), 60)
						})), this.$nextTick((function() {
							return t.clacTop()
						}))
					},
					methods: {
						clacTop: function() {
							var t = this.$refs.musicLyric,
								e = window.getComputedStyle(t),
								i = e.display,
								r = void 0 === i ? "" : i;
							if ("none" !== r) {
								var n = t.offsetHeight;
								this.top = Math.floor(n / 34 / 2)
							}
						}
					}
				},
				$ = O,
				j = (i("4d21"), Object(C["a"])($, I, L, !1, null, "4f8466fe", null)),
				R = j.exports,
				V = function() {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "volume"
					}, [i("mm-icon", {
						staticClass: "pointer volume-icon",
						attrs: {
							type: t.getVolumeIconType(),
							size: 30
						},
						on: {
							click: t.handleToggleVolume
						}
					}), i("div", {
						staticClass: "volume-progress-wrapper"
					}, [i("mm-progress", {
						attrs: {
							percent: t.volumeProgress
						},
						on: {
							percentChangeEnd: t.handleVolumeChange,
							percentChange: t.handleVolumeChange
						}
					})], 1)], 1)
				},
				S = [],
				N = {
					name: "Volume",
					components: {
						MmProgress: P
					},
					props: {
						volume: {
							type: Number,
							required: !0
						}
					},
					computed: {
						volumeProgress: function() {
							return this.volume
						},
						isMute: {
							get: function() {
								return 0 === this.volumeProgress
							},
							set: function(t) {
								var e = t ? 0 : this.lastVolume;
								t && (this.lastVolume = this.volumeProgress), this.handleVolumeChange(e)
							}
						}
					},
					methods: {
						getVolumeIconType: function() {
							return this.isMute ? "volume-off" : "volume"
						},
						handleToggleVolume: function() {
							this.isMute = !this.isMute
						},
						handleVolumeChange: function(t) {
							this.$emit("volumeChange", t)
						}
					}
				},
				U = N,
				z = (i("7bdd"), Object(C["a"])(U, V, S, !1, null, "256fedce", null)),
				D = z.exports,
				W = {
					name: "Music",
					components: {
						MmProgress: P,
						MusicBtn: w,
						Lyric: R,
						Volume: D
					},
					filters: {
						format: d["b"]
					},
					data: function() {
						var t = Object(h["f"])();
						return {
							musicReady: !1,
							currentTime: 0,
							currentProgress: 0,
							lyricVisible: !1,
							lyric: [],
							nolyric: !1,
							lyricIndex: 0,
							isMute: !1,
							volume: t
						}
					},
					computed: Object(c["a"])({
						picUrl: function() {
							return this.currentMusic.id && this.currentMusic.image ? "url(".concat(this.currentMusic.image,
								"?param=300y300)") : "url(".concat(a["b"], ")")
						},
						percentMusic: function() {
							var t = this.currentMusic.duration;
							return this.currentTime && t ? this.currentTime / t : 0
						}
					}, Object(f["c"])(["audioEle", "mode", "playing", "playlist", "orderList", "currentIndex", "currentMusic",
						"historyList"
					])),
					watch: {
						currentMusic: function(t, e) {
							var i = this;
							t.id ? t.id !== e.id && (this.audioEle.src = t.url, this.lyricIndex = this.currentTime = this.currentProgress =
								0, Object(d["e"])(this.audioEle.play()), this.$nextTick((function() {
									i._getLyric(t.id)
								}))) : this.lyric = []
						},
						playing: function(t) {
							var e = this,
								i = this.audioEle;
							this.$nextTick((function() {
								t ? Object(d["e"])(i.play()) : i.pause(), e.musicReady = !0
							}))
						},
						currentTime: function(t) {
							if (!this.nolyric) {
								for (var e = 0, i = 0; i < this.lyric.length; i++) t > this.lyric[i].time && (e = i);
								this.lyricIndex = e
							}
						},
						$route: function() {
							this.lyricVisible = !1
						}
					},
					mounted: function() {
						var t = this;
						this.$nextTick((function() {
							m.initAudio(t), t.initKeyDown(), t.volumeChange(t.volume)
						}))
					},
					methods: Object(c["a"])(Object(c["a"])({
						initKeyDown: function() {
							var t = this;
							document.onkeydown = function(e) {
								switch (e.ctrlKey && e.keyCode) {
									case 32:
										t.play();
										break;
									case 37:
										t.prev();
										break;
									case 38:
										var i = Number((t.volume += .1).toFixed(1));
										i > 1 && (i = 1), t.volumeChange(i);
										break;
									case 39:
										t.next();
										break;
									case 40:
										var r = Number((t.volume -= .1).toFixed(1));
										r < 0 && (r = 0), t.volumeChange(r);
										break;
									case 79:
										t.modeChange();
										break
								}
							}
						},
						prev: function() {
							if (this.musicReady)
								if (1 === this.playlist.length) this.loop();
								else {
									var t = this.currentIndex - 1;
									t < 0 && (t = this.playlist.length - 1), this.setCurrentIndex(t), !this.playing && this.musicReady &&
										this.setPlaying(!0), this.musicReady = !1
								}
						},
						play: function() {
							this.musicReady && this.setPlaying(!this.playing)
						},
						next: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							if (this.musicReady) {
								var e = this.playlist.length;
								if (e - 1 === this.currentIndex && this.mode === a["f"].order || 1 === e && t) return this.setCurrentIndex(
									-1), void this.setPlaying(!1);
								if (1 === e) this.loop();
								else {
									var i = this.currentIndex + 1;
									i === e && (i = 0), !this.playing && this.musicReady && this.setPlaying(!0), this.setCurrentIndex(i),
										this.musicReady = !1
								}
							}
						},
						loop: function() {
							this.audioEle.currentTime = 0, Object(d["e"])(this.audioEle.play()), this.setPlaying(!0), this.lyric.length >
								0 && (this.lyricIndex = 0)
						},
						progressMusic: function(t) {
							this.currentTime = this.currentMusic.duration * t
						},
						progressMusicEnd: function(t) {
							this.audioEle.currentTime = this.currentMusic.duration * t
						},
						modeChange: function() {
							var t = (this.mode + 1) % 4;
							if (this.setPlayMode(t), t !== a["f"].loop) {
								var e = [];
								switch (t) {
									case a["f"].listLoop:
									case a["f"].order:
										e = this.orderList;
										break;
									case a["f"].random:
										e = Object(d["d"])(this.orderList);
										break
								}
								this.resetCurrentIndex(e), this.setPlaylist(e)
							}
						},
						resetCurrentIndex: function(t) {
							var e = this,
								i = t.findIndex((function(t) {
									return t.id === e.currentMusic.id
								}));
							this.setCurrentIndex(i)
						},
						openComment: function() {
							if (!this.currentMusic.id) return this.$mmToast("还没有播放歌曲哦！"), !1;
							this.$router.push("/music/comment/".concat(this.currentMusic.id))
						},
						volumeChange: function(t) {
							this.isMute = 0 === t, this.volume = t, this.audioEle.volume = t, Object(h["l"])(t)
						},
						getModeIconType: function() {
							var t;
							return (t = {}, Object(s["a"])(t, a["f"].listLoop, "loop"), Object(s["a"])(t, a["f"].order, "sequence"),
								Object(s["a"])(t, a["f"].random, "random"), Object(s["a"])(t, a["f"].loop, "loop-one"), t)[this.mode]
						},
						getModeIconTitle: function() {
							var t, e = "Ctrl + O";
							return (t = {}, Object(s["a"])(t, a["f"].listLoop, "列表循环 ".concat(e)), Object(s["a"])(t, a["f"].order,
								"顺序播放 ".concat(e)), Object(s["a"])(t, a["f"].random, "随机播放 ".concat(e)), Object(s["a"])(t, a["f"].loop,
								"单曲循环 ".concat(e)), t)[this.mode]
						},
						handleOpenLyric: function() {
							var t = this;
							this.lyricVisible = !0, this.$nextTick((function() {
								t.$refs.lyric.clacTop()
							}))
						},
						handleCloseLyric: function() {
							this.lyricVisible = !1
						},
						_getLyric: function(t) {
							var e = this;
							Object(o["b"])(t).then((function(t) {
								t.nolyric ? e.nolyric = !0 : (e.nolyric = !1, e.lyric = Object(d["c"])(t.lrc.lyric)), Object(d["e"])(
									e.audioEle.play())
							}))
						}
					}, Object(f["d"])({
						setPlaying: "SET_PLAYING",
						setPlaylist: "SET_PLAYLIST",
						setCurrentIndex: "SET_CURRENTINDEX"
					})), Object(f["b"])(["setHistory", "setPlayMode"]))
				},
				X = W,
				F = (i("1a26"), Object(C["a"])(X, r, n, !1, null, null, null));
			e["default"] = F.exports
		},
		c7d1: function(t, e, i) {},
		e0ca: function(t, e, i) {}
	}
]);
//# sourceMappingURL=chunk-013bbbfa.43707b44.js.map
