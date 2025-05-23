!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("." + a.subMenuParent).each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            e(this).addClass(a.subMenuParent),
            e(this).addClass(a.thSubMenuParent),
            e(this).children("a").append(a.appendElement);
        });
        var s = "." + a.thSubMenuParent + " > a";
        e(s).each(function () {
          e(this).on("click", function (t) {
            var n, s;
            t.preventDefault(),
              (n = e(this).parent()),
              (s = n.children("ul")).length > 0 &&
                (n.toggleClass(a.subMenuParentToggle),
                s.slideToggle(a.toggleSpeed),
                s.toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(".menu-expand").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(), e(".category-menu").toggleClass("open-category");
      });
    }),
    e(".scroll-top").length > 0)
  ) {
    var t = document.querySelector(".scroll-top"),
      a = document.querySelector(".scroll-top path"),
      n = a.getTotalLength();
    (a.style.transition = a.style.WebkitTransition = "none"),
      (a.style.strokeDasharray = n + " " + n),
      (a.style.strokeDashoffset = n),
      a.getBoundingClientRect(),
      (a.style.transition = a.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var s = function () {
      var t = e(window).scrollTop(),
        s = e(document).height() - e(window).height(),
        i = n - (t * n) / s;
      a.style.strokeDashoffset = i;
    };
    s(), e(window).scroll(s);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  function i() {
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
      e("[data-ani-delay]").each(function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t);
      });
  }
  function i() {
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
      e("[data-ani-delay]").each(function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t);
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-theme-color]").length > 0 &&
      e("[data-theme-color]").each(function () {
        var t = e(this).attr("data-theme-color");
        e(this).get(0).style.setProperty("--theme-color", t),
          e(this).removeAttr("data-theme-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        n = t.find(".slider-prev"),
        s = t.find(".slider-next"),
        i =
          (t.find(".slider-pagination.pagi-number"),
          t.find(".slider-pagination").get(0)),
        o = t.find(".slider-pagination2").get(0),
        r = a.paginationType ? a.paginationType : "bullets",
        l = a.autoplay,
        c = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: l || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: s.get(0), prevEl: n.get(0) },
          pagination: {
            el: i,
            type: r,
            clickable: !0,
            renderBullet: function (e, t) {
              var a = e + 1;
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (a < 10 ? "0" + a : a) +
                '"></span>'
              );
            },
          },
          on: {
            init: function () {
              var t = this.slides.length;
              e(o).html(
                '<span class="current-slide">01</span> <span class="total-slides">' +
                  (t < 10 ? "0" + t : t) +
                  "</span>"
              );
            },
            slideChange: function () {
              var t = this.activeIndex + 1,
                a = this.slides.length;
              e(o).html(
                '<span class="current-slide">' +
                  (t < 10 ? "0" + t : t) +
                  '</span> <span class="total-slides">' +
                  (a < 10 ? "0" + a : a) +
                  "</span>"
              );
            },
          },
        },
        d = JSON.parse(t.attr("data-slider-options"));
      d = e.extend({}, c, d);
      new Swiper(t.get(0), d);
      e(".slider-area").length > 0 &&
        e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }),
    i(),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var n = a[0].swiper;
        n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
      }
    }),
    i(),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var n = a[0].swiper;
        n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
      }
    });
  var o,
    r,
    l,
    c = ".ajax-contact",
    d = '[name="email"]',
    u = e(".form-messages");
  function h() {
    var t = e(c).serialize();
    (function () {
      var t,
        a = !0;
      function n(n) {
        n = n.split(",");
        for (var s = 0; s < n.length; s++)
          (t = c + " " + n[s]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (a = !0))
              : (e(t).addClass("is-invalid"), (a = !1));
      }
      n(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(d).val() &&
        e(d)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(d).removeClass("is-invalid"), (a = !0))
          : (e(d).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: e(c).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          u.removeClass("error"),
            u.addClass("success"),
            u.text(t),
            e(c + ' input:not([type="submit"]),' + c + " textarea").val("");
        })
        .fail(function (e) {
          u.removeClass("success"),
            u.addClass("error"),
            "" !== e.responseText
              ? u.html(e.responseText)
              : u.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function p(t, a, n, s) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(s);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(s);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(s);
      }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(s);
      });
  }
  function m(e) {
    return parseInt(e, 10);
  }
  e(c).on("submit", function (e) {
    e.preventDefault(), h();
  }),
    (o = ".popup-search-box"),
    (r = ".searchClose"),
    (l = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(o).addClass(l);
    }),
    e(o).on("click", function (t) {
      t.stopPropagation(), e(o).removeClass(l);
    }),
    e(o)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(o).addClass(l);
      }),
    e(r).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(o).removeClass(l);
    }),
    p(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"),
    p(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    (e.fn.sectionPosition = function (t, a) {
      e(this).each(function () {
        var n,
          s,
          i,
          o,
          r,
          l = e(this);
        (n = Math.floor(l.height() / 2)),
          (s = l.attr(t)),
          (i = l.attr(a)),
          (o = m(e(i).css("padding-top"))),
          (r = m(e(i).css("padding-bottom"))),
          "top-half" === s
            ? (e(i).css("padding-bottom", r + n + "px"),
              l.css("margin-top", "-" + n + "px"))
            : "bottom-half" === s &&
              (e(i).css("padding-top", o + n + "px"),
              l.css("margin-bottom", "-" + n + "px"));
      });
    });
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: {},
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          n = t.data("right"),
          s = t.data("bottom"),
          i = t.data("left");
        t.css({ top: a, right: n, bottom: s, left: i })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "100%" }
    ),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var s = setInterval(function () {
          var e = new Date().getTime(),
            i = a - e,
            o = Math.floor(i / 864e5),
            r = Math.floor((i % 864e5) / 36e5),
            l = Math.floor((i % 36e5) / 6e4),
            c = Math.floor((i % 6e4) / 1e3);
          o < 10 && (o = "0" + o),
            r < 10 && (r = "0" + r),
            l < 10 && (l = "0" + l),
            c < 10 && (c = "0" + c),
            i < 0
              ? (clearInterval(s),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (n(".day").html(o),
                n(".hour").html(r),
                n(".minute").html(l),
                n(".seconds").html(c));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown();
  const f = {};
  function g() {
    const t = e(this),
      a = t.attr("src");
    if (!f[a]) {
      const t = e.Deferred();
      e.get(a, (a) => {
        t.resolve(e(a).find("svg"));
      }),
        (f[a] = t.promise());
    }
    f[a].then((a) => {
      const n = e(a).clone();
      t.attr("id") && n.attr("id", t.attr("id")),
        t.attr("class") && n.attr("class", t.attr("class")),
        t.attr("style") && n.attr("style", t.attr("style")),
        t.attr("width") &&
          (n.attr("width", t.attr("width")),
          t.attr("height") || n.removeAttr("height")),
        t.attr("height") &&
          (n.attr("height", t.attr("height")),
          t.attr("width") || n.removeAttr("width")),
        n.insertAfter(t),
        t.trigger("svgInlined", n[0]),
        t.remove();
    });
  }
  (e.fn.inlineSvg = function () {
    return this.each(g), this;
  }),
    e(".svg-img").inlineSvg(),
    e(".color-switch-btns button").each(function () {
      const t = e(this),
        a = t.data("color");
      t.css("--theme-color", a),
        t.on("click", function () {
          const t = e(this).data("color");
          e(":root").css("--theme-color", t);
        });
    }),
    e("#thcolorpicker").on("input", function () {
      const t = e(this).val();
      var a;
      (a = t), e(":root").css("--theme-color", a);
    }),
    e(document).on("click", ".switchIcon", function () {
      e(".color-scheme").toggleClass("active");
    }),
    e(".tilt-active").tilt({ maxTilt: 7, perspective: 1e3 });
  document.getElementById("filt-monthly"),
    document.getElementById("filt-yearly"),
    document.getElementById("switcher"),
    document.getElementById("monthly"),
    document.getElementById("yearly");
  e(".pricing-tabs").length &&
    (e(document).on("click", "#filt-monthly", function () {
      e("#switcher").prop("checked", !1),
        e("#filt-monthly").addClass("toggler--is-active"),
        e("#filt-yearly").removeClass("toggler--is-active"),
        e("#monthly").removeClass("hide"),
        e("#yearly").addClass("hide");
    }),
    e(document).on("click", "#filt-yearly", function () {
      e("#switcher").prop("checked", !0),
        e("#filt-yearly").addClass("toggler--is-active"),
        e("#filt-monthly").removeClass("toggler--is-active"),
        e("#monthly").addClass("hide"),
        e("#yearly").removeClass("hide");
    }),
    e(document).on("click", "#switcher", function () {
      e("#filt-yearly, #filt-monthly").toggleClass("toggler--is-active"),
        e("#monthly, #yearly").toggleClass("hide");
    })),
    e(".gallery-wrapper").on(
      "mouseenter",
      ".gallery-wrapper__item",
      function () {
        e(".gallery-wrapper__item").removeClass("active"),
          e(this).addClass("active");
      }
    ),
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".circular-progress").forEach((e) => {
        const t = e.querySelector(".circle"),
          a = e.querySelector(".percentage"),
          n = parseInt(e.getAttribute("data-target"), 10);
        let s = 0;
        const i = () => {
          if (s <= n) {
            const e = 100 - (100 * s) / 100;
            (t.style.strokeDashoffset = e),
              (a.textContent = s + "%"),
              s++,
              requestAnimationFrame(i);
          }
        };
        i();
      });
    }),
    e(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "d-m-y",
      step: 10,
    }),
    e(".time-pick").datetimepicker({ datepicker: !1, format: "H:i", step: 30 }),
    e(".date-time-pick").datetimepicker({}),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        isNaN(n) || a.val(n + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        !isNaN(n) && n > 1 && a.val(n - 1);
      });
    }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    )
    // (document.onkeydown = function (e) {
    //   return (
    //     123 != event.keyCode &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
    //     (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
    //     (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
    //     void 0
    //   );
    // });
})(jQuery);
