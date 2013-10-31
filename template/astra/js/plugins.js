jQuery(document).ready(function() {
	"use strict";
	jQuery.magnificPopup && (jQuery(".w-gallery-tnails-h").magnificPopup({
		type: "image",
		delegate: "a",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1]
		},
		removalDelay: 300,
		mainClass: "mfp-fade"
	}), jQuery("a[ref=magnificPopup][class!=direct-link]").magnificPopup({
		type: "image"
	})), jQuery().carousello && jQuery(".w-listing.type_carousel, .w-clients.type_carousel, .w-portfolio.type_carousel").carousello();
	if (jQuery().isotope) {
		var e = jQuery(".w-portfolio.type_sortable .w-portfolio-list-h");
		e && (e.imagesLoaded(function() {
			e.isotope({
				itemSelector: ".w-portfolio-item",
				layoutMode: "fitRows"
			})
		}), jQuery(".w-filters-item").each(function() {
			var t = jQuery(this),
				n = t.find(".w-filters-item-link");
			n.click(function() {
				if (!t.hasClass("active")) {
					jQuery(".w-filters-item").removeClass("active"), t.addClass("active");
					var n = jQuery(this).attr("data-filter");
					return e.isotope({
						filter: n
					}), !1
				}
			})
		}), jQuery(".w-portfolio-item-meta-tags a").each(function() {
			jQuery(this).click(function() {
				var t = jQuery(this).attr("data-filter"),
					n = jQuery('a[class="w-filters-item-link"][data-filter="' + t + '"]'),
					r = n.parent(".w-filters-item");
				if (!r.hasClass("active")) return jQuery(".w-filters-item").removeClass("active"), r.addClass("active"), e.isotope({
					filter: t
				}), !1
			})
		}));
		var t = jQuery(".w-blog.type_masonry .w-blog-list");
		if (t.length) {
			t.imagesLoaded(function() {
				t.isotope({
					itemSelector: ".w-blog-entry",
					layoutMode: "masonry"
				})
			});
			var n;
			jQuery(window).resize(function() {
				window.clearTimeout(n), n = window.setTimeout(function() {
					t.isotope("reLayout")
				}, 50)
			})
		}
		var r = jQuery(".w-gallery.type_masonry .w-gallery-tnails-h");
		if (r.length) {
			r.imagesLoaded(function() {
				r.isotope({
					layoutMode: "masonry"
				})
			});
			var i;
			jQuery(window).resize(function() {
				window.clearTimeout(i), i = window.setTimeout(function() {
					r.isotope("reLayout")
				}, 50)
			})
		}
	}
	jQuery().revolution && (jQuery.fn.cssOriginal !== undefined && (jQuery.fn.css = jQuery.fn.cssOriginal), jQuery(".fullwidthbanner").revolution({
		delay: 9e3,
		startwidth: 1e3,
		startheight: 500,
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,
		onHoverStop: "on",
		fullWidth: "on",
		hideThumbs: !1,
		shadow: 0
	})), jQuery("iframe").each(function() {
		var e = jQuery(this).attr("src"),
			t = "?";
		jQuery.inArray("?", e) !== -1 && (t = "&"), jQuery(this).attr("src", e + t + "wmode=transparent")
	}), jQuery().waypoint && jQuery("body").imagesLoaded(function() {
		jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function() {
			if (!jQuery(this).hasClass("animate_start")) {
				var e = jQuery(this);
				setTimeout(function() {
					e.addClass("animate_start")
				}, 20)
			}
		}, {
			offset: "85%",
			triggerOnce: !0
		})
	});
	var s = !1,
		o = function() {
			var e = parseInt(jQuery(window).scrollTop(), 10),
				t = jQuery(window).height() - 0,
				n = jQuery(window).width() - 0;
			e >= t ? jQuery(".w-toplink").addClass("active") : jQuery(".w-toplink").removeClass("active");
			if (jQuery(".l-canvas").hasClass("headerpos_fixed")) {
				var r, i;
				e > 0 && n > 1023 ? (jQuery(".l-header").hasClass("state_sticky") || jQuery(".l-header").addClass("state_sticky"), jQuery(".l-canvas").hasClass("headertype_extended") && (e > 40 ? (r = Math.max(76 - e, 0), jQuery(".l-subheader.at_top").css({
					height: r + "px",
					overflow: "hidden"
				})) : jQuery(".l-subheader.at_top").css({
					height: "",
					overflow: ""
				})), i = Math.max(Math.round(90 - e), 50), jQuery(".l-subheader.at_middle,.w-nav-item-h").css({
					height: i + "px",
					"line-height": i + "px"
				})) : (jQuery(".l-header").hasClass("state_sticky") && jQuery(".l-header").removeClass("state_sticky"), jQuery(".l-subheader.at_middle,.w-nav-item-h").css({
					height: "",
					"line-height": ""
				}), jQuery(".l-subheader.at_top").css({
					height: "",
					overflow: ""
				}))
			}
		}, u = function() {
			jQuery(".l-header .w-nav").each(function() {
				var e = jQuery(this),
					t = e.find(".w-nav-control"),
					n = e.find(".w-nav-list.level_1"),
					r = n.find(".w-nav-item.with_sublevel .w-nav-list"),
					i = jQuery(window).width() - 0,
					s = !1,
					o = !1;
				if (i < 1e3) {
					var u, a = !1,
						f = n.find(".w-nav-item.with_sublevel .w-nav-hint");
					e.hasClass("touch_enabled") || (e.addClass("touch_enabled"), n.css({
						display: "none"
					}), r.css({
						display: "none"
					})), t.off("click").click(function() {
						s || (s = !0, a ? (n.slideUp(250, function() {
							s = !1
						}), a = !1) : (n.slideDown(250, function() {
							s = !1
						}), a = !0))
					}), f.off("click").click(function() {
						if (!s) {
							s = !0;
							var e = jQuery(this).closest(".w-nav-item-h").find(".w-nav-list").first(),
								t = e.data("subListOpen"),
								n = e.data("subListHeight");
							t ? (e.slideUp(250, function() {
								s = !1
							}), t = !1) : (e.slideDown(250, function() {
								s = !1
							}), t = !0), e.data("subListOpen", t), e.data("subListHeight", n)
						}
						return !1
					})
				} else e.removeClass("touch_enabled"), n.css({
					height: "",
					display: ""
				}), r.css({
					height: "",
					display: ""
				}), t.off("click")
			})
		};
	o(), u(), jQuery(window).scroll(function() {
		o()
	}), jQuery(window).resize(function() {
		s !== !1 && window.clearTimeout(s), s = window.setTimeout(function() {
			o(), u()
		}, 5)
	}), jQuery(".w-toplink").click(function(e) {
		e.preventDefault(), e.stopPropagation(), jQuery.smoothScroll({
			scrollTarget: "#"
		})
	})
});