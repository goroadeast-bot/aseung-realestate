(function () {
  "use strict";

  // ===== Mobile menu =====
  var menuBtn = document.getElementById("menuBtn");
  var closeBtn = document.getElementById("menuCloseBtn");
  var mobileMenu = document.getElementById("mobileMenu");

  function openMenu() {
    mobileMenu.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
  }
  function closeMenu() {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // ===== Hero video: respect reduced motion =====
  var heroVideo = document.querySelector(".hero-video");
  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }

  // ===== Listing modal =====
  var OILJANG_LINK = "https://www.jejuall.com/CProperty/myHome/params/num/165834";
  var PAGE_SIZE = 6;

  // 2026-09-30: 오일장·제주교차로 최신 유형별 순위로 갱신.
  // 2026-10-12: 오일장·제주교차로 최신 유형별 순위를 반영.
  // 2026-10-18: 5일장·제주교차로 최신 유형별 순위를 반영.
  // 2026-11-06: 5일장·제주교차로 최신 유형별 순위를 반영.
  var LISTING_DATA = {
  "nohyeong-apt": {
    "title": "\uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-oil-6631120.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc28\ubc0d1\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6631120"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6627290.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \uc81c\uc8fc\uc138\uae30\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uace0\uce35\uc624\uc158\ubdf0\uc138\ub300/\uc5f0\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6627290"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6611154.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc624\ub77c\uc774\ub3d9 \u00b7 \uc624\ub4f1\ubd09\uc704\ud30c\ud06c\uc81c\uc8fc1\ub2e8\uc9c0\ubd84\uc591\uad8c84B/\uc624\ub77c\uc774\ub3d9\uc704\ud30c\ud06c/\uace0\uce35/\ubb34\ud53c/\uc804\ub9dd\uc88b\uc74c",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611154"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6603770.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc774\ub3c4\uc131\uc6d0\uc544\ud30c\ud2b8/\uc774\ub3c4\uc8fc\uacf5\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\uc544\ud30c\ud2b8/\ub9ac\ubaa8\ub378\ub9c1/\ub0a8\uad11\ucd08/\uc81c\uc8fc\uc77c\uc911",
        "link": "https://www.jejuall.com/CProperty/detail?num=6603770"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6587603.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc77c\ub3c4\uc0bc\uc8fc\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1",
        "link": "https://www.jejuall.com/CProperty/detail?num=6587603"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6008100.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8/\uc77c\uc8fc\uc11c\ub85c\uc811/\uc560\uc6d4\uc544\ud30c\ud2b8/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6008100"
      }
    ]
  },
  "presale": {
    "title": "\ubd84\uc591",
    "emptyMessage": "\ud604\uc7ac \ub4f1\ub85d\ub41c \ubd84\uc591\uad8c \ub9e4\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
    "items": []
  },
  "samhwa-house": {
    "title": "\uc8fc\ud0dd",
    "items": [
      {
        "photo": "images/listings/house/house-oil-4779977.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uc5b4\uc74c\ub9ac \u00b7 *\uc560\uc6d4\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*\uc5b4\uc74c\ub9ac\ud0c0\uc6b4\ud558\uc6b0\uc2a4",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779977"
      },
      {
        "photo": "images/listings/house/house-oil-4779941.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc6a9\ub2f4\uc774\ub3d9 \u00b7 *\uc6a9\ubb38\ub85c\ud0c0\ub9ac\uc778\uadfc*\uad6c\uc625\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779941"
      },
      {
        "photo": "images/listings/house/house-oil-4779936.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uacfd\uc9c0\ub9ac \u00b7 *\uacfd\uc9c0\ud574\uc218\uc695\uc7a5\uc778\uadfc*\uc560\uc6d4\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*\uacfd\uc9c0\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779936"
      },
      {
        "photo": "images/listings/house/house-oil-6627292.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \uc870\uc218\ub9ac \u00b7 \uc81c\uc8fc\ub3c4\uc804\uc6d0\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\uacbd\uba74\uc870\uc218\ub9ac\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\uacbd\uba74\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6627292"
      },
      {
        "photo": "images/listings/house/house-oil-6623385.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc81c\uc8fc\uc2dc\uccad\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6623385"
      },
      {
        "photo": "images/listings/house/house-oil-4779823.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uad6c\uc5c4\ub9ac \u00b7 *\uc560\uc6d4\ub113\uc740\ub9c8\ub2f9\ub2e8\ub3c5\uc8fc\ud0dd*\uad6c\uc5c4\uad50\ucc28\ub85c\uc778\uadfc*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779823"
      }
    ]
  },
  "villa": {
    "title": "\ube4c\ub77c",
    "items": [
      {
        "photo": "images/listings/villa/villa-oil-6631123.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc624\ub80c\uc9c0\uce74\uc6b4\ud2f0\ub9e4\ub9e4/\uc678\ub3c4\ubd84\ub9ac\ud615\uc6d0\ub8f8\ub9e4\ub9e4/\uc81c\uc8fc\uc2dc\uc6d0\ub8f8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6631123"
      },
      {
        "photo": "images/listings/villa/villa-oil-6627294.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ud3c9\ub3d9 \u00b7 \ub3c4\ud3c9\ub3d9JDS\ube4c\ub9ac\uc9c0\ub9e4\ub9e4/jds\ube4c\ub9ac\uc9c0/\uc62c\ub9ac\ubaa8\ub378\ub9c1/\uc794\ub514\ub9c8\ub2f9/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6627294"
      },
      {
        "photo": "images/listings/villa/villa-oil-6626817.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uc639\ud3ec\ub9ac \u00b7 \ud55c\ub9bc\uace0/\uc639\ud3ec\ub9ac\uc11c\ud574\ud30c\uc2a4\ud154/\ud55c\ub9bc\uc4f0\ub9ac\ub8f8",
        "link": "https://www.jejuall.com/CProperty/detail?num=6626817"
      },
      {
        "photo": "images/listings/villa/villa-oil-6624454.jpg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \ub300\uc815\uc74d \uad6c\uc5b5\ub9ac \u00b7 \uae09\ub9e4/\ub300\uc815\ub9ac\uc624\ud330\ub9ac\uc2a4\ub9e4\ub9e4/\uc601\uc5b4\uad50\uc721\ub3c4\uc2dc\uc778\uadfc/\ub300\uc815\uc4f0\ub9ac\ub8f8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6624454"
      },
      {
        "photo": "images/listings/villa/villa-oil-6619460.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc624\ub4f1\ub3d9 \u00b7 \uc624\ub4f1\ud734\uc5482\ucc28/\uc544\ub77c\ucd08\ud559\uad70/\uc81c\uc8fc\uc2dc\uc4f0\ub9ac\ub8f8\ub9e4\ub9e4/\uc81c\uc8fc\ube4c\ub77c\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6619460"
      },
      {
        "photo": "images/listings/villa/villa-oil-6619459.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc624\ub77c\uc0bc\ub3d9 \u00b7 \uc624\ub77c\uc0bc\ub3d9\uacf5\ub3d9\uc8fc\ud0dd/\uc624\ub77c\ucd08/\uc624\ub77c\ub3d9\uc4f0\ub9ac\ub8f8\ube4c\ub77c/\uc9c4\uc544\ud0c0\uc6b42\ucc28\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6619459"
      }
    ]
  },
  "nohyeong-oneroom": {
    "title": "\ub531 \ud544\uc694\ud55c \ub9cc\ud07c \uc6d0\ub8f8 \ud22c\ub8f8",
    "items": [
      {
        "photo": "images/listings/oneroom/oneroom-oil-6623938.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ud558\uadc0\ub113\uc740\ud22c\ub8f8\ub144\uc138/\ubc292\uc695\uc2e42/\uc624\uc158\ubdf0\uac00\ub2a5/\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uac00\uc804\uc81c\ud488\uc635\uc158/\uc2e0\ucd95\uae09",
        "link": "https://www.jejuall.com/CProperty/detail?num=6623938"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88983673.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub2e4\uac00\uad6c\ud615 \ud22c\ub8f8 \ud558\uadc0\ub113\uc740\ud22c\ub8f8\ub144\uc138/\ubc292\uc695\uc2e42/\uc624\uc158\ubdf0\uac00\ub2a5/\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uac00\uc804\uc81c\ud488\uc635\uc158/\uc2e0\ucd95\uae09 90/81",
        "link": "https://land.jejukcr.com/offer/88983673"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88818594.jpg",
        "desc": "\uc544\ub77c\uc77c\ub3d9 \u00b7 \ub2e4\uac00\uad6c\ud615 \uc6d0\ub8f8 \uc81c\ub300\uc778\uadfc/\uc18c\ud615\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uc544\ub77c\uc77c\ub3d9\uc6d0\ub8f8\uc784\ub300 27/26",
        "link": "https://land.jejukcr.com/offer/88818594"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88818587.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub2e4\uac00\uad6c\ud615 \uc6d0\ub8f8 \uc81c\uc8fc\uc77c\uace0\uc778\uadfc/\ub178\ud615\ub3d9\uc6d0\ub8f8/\uc8fc\ucc28\ud3b8\ub9ac 34/34",
        "link": "https://land.jejukcr.com/offer/88818587"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88818585.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub2e4\uc138\ub300\ud615 \uc6d0\ub8f8 \ub178\ud615\ub3d9\uc6d0\ub8f8\uc784\ub300/\ud55c\ub77c\ub300/\ud480\uc635\uc158/\ub113\uc740\uc6d0\ub8f8 62/51",
        "link": "https://land.jejukcr.com/offer/88818585"
      }
    ]
  },
  "sinsigaji-sanga": {
    "title": "\uc0c1\uac00",
    "items": [
      {
        "photo": "images/listings/sanga/sanga-oil-6631122.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub450\uc77c\ub3d9 \u00b7 \ub3c4\ub450\uc77c\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\uc81c\uc8fc\uacf5\ud56d\uc778\uadfc/\ud3b8\uc758\uc810/\ud734\uac8c\uc74c\uc2dd\uc810/\uc0ac\ubb34\uc2e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6631122"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6615532.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc0c1\uac00\uc784\ub300/\uc678\ub3c4\uc0ac\ubb34\uc2e4\uc784\ub300/\uc678\ub3c4\ud559\uc6d0\ubcd1\uc6d0\uc784\ub300\uc6b0\ub300\ud61c\ud0dd\uc788\uc74c/\ud3b8\ub9ac\ud55c\uc804\uc6a9\uc8fc\ucc28/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6615532"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6613559.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub0b4\ub3c4\ub3d9 \u00b7 *\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc*\uc54c\uc791\uc9c0\ud574\uc548\ub85c\uc778\uadfc*1\uce35\ub9c8\ub2f9\ub113\uc740\uc0c1\uac00\uc784\ub300*",
        "link": "https://www.jejuall.com/CProperty/detail?num=6613559"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6611153.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\ub300\ud615\uc0c1\uac00/\uc81c\uc8fc\uc2dc\ubcd1\uc758\uc6d0/\uc0ac\ubb34\uc2e4\uc784\ub300/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611153"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6611152.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ub3d9\uc0c1\uac00\uc784\ub300/\ub178\ud615\uc624\uac70\ub9ac\uc0c1\uac00/\ub178\ud615\uce74\ud398\uc784\ub300",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611152"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6609829.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub450\uc774\ub3d9 \u00b7 \ub3c4\ub450\ud574\uc548\ub3c4\ub85c\uc0c1\uac00\uc784\ub300/\uc81c\uc8fc\uc624\uc158\ubdf0\uc0c1\uac00\uc784\ub300/\ubbf8\uc6a9\uc2e4/\uc6e8\ub529\uc0f5/\uc2a4\ud29c\ub514\uc624",
        "link": "https://www.jejuall.com/CProperty/detail?num=6609829"
      }
    ]
  },
  "land": {
    "title": "\ud1a0\uc9c0",
    "items": [
      {
        "photo": "images/listings/land/land-oil-6623384.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc6a9\ub2f4\uc0bc\ub3d9 \u00b7 \uc6a9\ub2f4\uc8fc\uac70\uc9c0\uc5ed\ud1a0\uc9c0\ub9e4\ub9e4/\ub098\ub300\uc9c0+\uc804/\uc6a9\ub450\uc554\ud574\uc548\ub3c4\ub85c\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=6623384"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\ubd80\uc601\uc544\ud30c\ud2b8\uc778\uadfc/\uc6b0\ud3c9\ub85c\uc778\uadfc/\uc678\ub3c4\uc7a1\uc885\uc9c0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6600183"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uac00\ub9ac \u00b7 \uc560\uc6d4\uc74d\ub9f9\uc9c0/\uc5f0\ud654\ubabb\uc778\uadfc/\ud558\uac00\ub9ac\ud1a0\uc9c0\ub9e4\ub9e4/\ub354\ub7ed\ucd08",
        "link": "https://www.jejuall.com/CProperty/detail?num=6600181"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \ud558\ud6a8\ub3d9 \u00b7 \uc11c\uadc0\ud3ec\uc8fc\uac70\uc9c0\uc5ed\ud1a0\uc9c0\ub9e4\ub9e4/\ud6a8\ub3c8\ucd08\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968379"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \uc11c\ud638\ub3d9 \u00b7 \uc11c\ud638\ub3d9\ud1a0\uc9c0\ub9e4\ub9e4/2\uc885\uc77c\ubc18\uc8fc\uac70\uc9c0\uc5ed/",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968470"
      },
      {
        "photo": "images/listings/land/land-oil-6529383.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub0a8\ub3d9 \u00b7 *\ub3c4\ub0a8\ub3d9\ud1a0\uc9c0\ub9e4\ub9e4*\ub3c4\ub0a8\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd,\uc0c1\uac00\uc8fc\ud0dd\uc9c0*\uc81c\uc8fc\ub3c4\ud1a0\uc9c0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6529383"
      }
    ]
  },
  "warehouse": {
    "title": "\uc0ac\uc5c5\ud655\uc7a5\uc758 \uc5f4\uc1e0 \uc54c\uc9dc \ucc3d\uace0 \ub9e4\ubb3c",
    "items": [
      {
        "photo": "images/listings/warehouse/warehouse-oil-4762800.png",
        "desc": "\uc81c\uc8fc\uc2dc \uc624\ub4f1\ub3d9 \u00b7 *\uc560\uc870\ub85c\uc778\uadfc*\ucc3d\uace0\uc2dc\uc124\ub9e4\ub9e4*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4762800"
      },
      {
        "photo": "images/listings/warehouse/warehouse-oil-6588656.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \uc81c\uc8fc\ub3c4\ucc3d\uace0\uc784\ub300/\ub178\ud615\ub3d9\ucc3d\uace0\uc784\ub300/\ucc3d\uace0\ubc0f\uadfc\ub9b0\uc0dd\ud65c\uc2dc\uc124/\ub300\ud615\ucc3d\uace0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6588656"
      },
      {
        "photo": "images/listings/warehouse/warehouse-oil-6570478.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uc2e0\uc5c4\ub9ac \u00b7 \uc2e0\uc5c4\ub9ac\uc2e0\ucd95\uae09\ucc3d\uace0\uc784\ub300/\uc911\uc0b0\uac04\ub3c4\ub85c\uc778\uadfc/\uc560\uc6d4\ucc3d\uace0\uc784\ub300",
        "link": "https://www.jejuall.com/CProperty/detail?num=6570478"
      },
      {
        "photo": "images/listings/warehouse/warehouse-oil-6404017.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \uc640\ud758\ub9ac \u00b7 \uc81c\uc8fc\ub3c4\uacf5\uc7a5\ub9e4\ub9e4/\uc870\ucc9c\uacf5\uc7a5\ub9e4\ub9e4/3306m2\uacf5\uc7a5\uc6a9\uc9c0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6404017"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88984531.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc2e0\uc5c4\ub9ac \u00b7 \ucc3d\uace0 \uc2e0\uc5c4\ub9ac\uc2e0\ucd95\uae09\ucc3d\uace0\uc784\ub300/\uc911\uc0b0\uac04\ub3c4\ub85c\uc778\uadfc 661/166",
        "link": "https://land.jejukcr.com/offer/88984531"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88841965.jpg",
        "desc": "\uc870\ucc9c\uc74d \uc640\ud758\ub9ac \u00b7 \uacf5\uc7a5 \uc81c\uc8fc\ub3c4\uacf5\uc7a5\ub9e4\ub9e4/\uc870\ucc9c\uacf5\uc7a5\ub9e4\ub9e4/ 6,384/311",
        "link": "https://land.jejukcr.com/offer/88841965"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88842000.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc560\uc6d4\ub9ac \u00b7 \ucc3d\uace0 \uc560\uc6d4\ucc3d\uace0\ub9e4\ub9e4/\uc560\uc6d4\ucc3d\uace0\uadfc\uc0dd\ub9e4\ub9e4/\uc2e0\ucd95\uae09 398/158",
        "link": "https://land.jejukcr.com/offer/88842000"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88841990.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ucc3d\uace0 \uc81c\uc8fc\ub3c4\ucc3d\uace0\uc784\ub300/\ub178\ud615\ub3d9\ucc3d\uace0\uc784\ub300/\ucc3d\uace0\ubc0f\uadfc\ub9b0\uc0dd\ud65c\uc2dc\uc124/\ub300\ud615\ucc3d\uace0 2,258/448",
        "link": "https://land.jejukcr.com/offer/88841990"
      }
    ]
  },
  "featured-apt": {
    "title": "\uc778\uae30\ub9cc\uc810 \uc81c\uc8fc \uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-oil-6631120.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc28\ubc0d1\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6631120"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6627290.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \uc81c\uc8fc\uc138\uae30\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uace0\uce35\uc624\uc158\ubdf0\uc138\ub300/\uc5f0\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6627290"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6611154.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc624\ub77c\uc774\ub3d9 \u00b7 \uc624\ub4f1\ubd09\uc704\ud30c\ud06c\uc81c\uc8fc1\ub2e8\uc9c0\ubd84\uc591\uad8c84B/\uc624\ub77c\uc774\ub3d9\uc704\ud30c\ud06c/\uace0\uce35/\ubb34\ud53c/\uc804\ub9dd\uc88b\uc74c",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611154"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6603770.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc774\ub3c4\uc131\uc6d0\uc544\ud30c\ud2b8/\uc774\ub3c4\uc8fc\uacf5\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\uc544\ud30c\ud2b8/\ub9ac\ubaa8\ub378\ub9c1/\ub0a8\uad11\ucd08/\uc81c\uc8fc\uc77c\uc911",
        "link": "https://www.jejuall.com/CProperty/detail?num=6603770"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6587603.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc77c\ub3c4\uc0bc\uc8fc\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1",
        "link": "https://www.jejuall.com/CProperty/detail?num=6587603"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6008100.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8/\uc77c\uc8fc\uc11c\ub85c\uc811/\uc560\uc6d4\uc544\ud30c\ud2b8/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6008100"
      }
    ]
  },
  "featured-house": {
    "title": "\uc81c\uc8fc\ub85c\ub9dd \uc804\uc6d0\uc8fc\ud0dd/\ud0c0\uc6b4\ud558\uc6b0\uc2a4",
    "items": [
      {
        "photo": "images/listings/house/house-oil-4779977.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uc5b4\uc74c\ub9ac \u00b7 *\uc560\uc6d4\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*\uc5b4\uc74c\ub9ac\ud0c0\uc6b4\ud558\uc6b0\uc2a4",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779977"
      },
      {
        "photo": "images/listings/house/house-oil-4779941.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc6a9\ub2f4\uc774\ub3d9 \u00b7 *\uc6a9\ubb38\ub85c\ud0c0\ub9ac\uc778\uadfc*\uad6c\uc625\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779941"
      },
      {
        "photo": "images/listings/house/house-oil-4779936.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uacfd\uc9c0\ub9ac \u00b7 *\uacfd\uc9c0\ud574\uc218\uc695\uc7a5\uc778\uadfc*\uc560\uc6d4\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*\uacfd\uc9c0\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub9e4\ub9e4*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779936"
      },
      {
        "photo": "images/listings/house/house-oil-6627292.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \uc870\uc218\ub9ac \u00b7 \uc81c\uc8fc\ub3c4\uc804\uc6d0\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\uacbd\uba74\uc870\uc218\ub9ac\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\uacbd\uba74\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6627292"
      },
      {
        "photo": "images/listings/house/house-oil-6623385.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc81c\uc8fc\uc2dc\uccad\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6623385"
      },
      {
        "photo": "images/listings/house/house-oil-4779823.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uad6c\uc5c4\ub9ac \u00b7 *\uc560\uc6d4\ub113\uc740\ub9c8\ub2f9\ub2e8\ub3c5\uc8fc\ud0dd*\uad6c\uc5c4\uad50\ucc28\ub85c\uc778\uadfc*",
        "link": "https://www.jejuall.com/CProperty/detail?num=4779823"
      }
    ]
  },
  "featured-sanga": {
    "title": "\uc0c8\ucd9c\ubc1c \ub4e0\ub4e0\ud55c \uc0c1\uac00",
    "items": [
      {
        "photo": "images/listings/sanga/sanga-oil-6631122.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub450\uc77c\ub3d9 \u00b7 \ub3c4\ub450\uc77c\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\uc81c\uc8fc\uacf5\ud56d\uc778\uadfc/\ud3b8\uc758\uc810/\ud734\uac8c\uc74c\uc2dd\uc810/\uc0ac\ubb34\uc2e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6631122"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6615532.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc0c1\uac00\uc784\ub300/\uc678\ub3c4\uc0ac\ubb34\uc2e4\uc784\ub300/\uc678\ub3c4\ud559\uc6d0\ubcd1\uc6d0\uc784\ub300\uc6b0\ub300\ud61c\ud0dd\uc788\uc74c/\ud3b8\ub9ac\ud55c\uc804\uc6a9\uc8fc\ucc28/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6615532"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6613559.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub0b4\ub3c4\ub3d9 \u00b7 *\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc*\uc54c\uc791\uc9c0\ud574\uc548\ub85c\uc778\uadfc*1\uce35\ub9c8\ub2f9\ub113\uc740\uc0c1\uac00\uc784\ub300*",
        "link": "https://www.jejuall.com/CProperty/detail?num=6613559"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6611153.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\ub300\ud615\uc0c1\uac00/\uc81c\uc8fc\uc2dc\ubcd1\uc758\uc6d0/\uc0ac\ubb34\uc2e4\uc784\ub300/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611153"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6611152.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ub3d9\uc0c1\uac00\uc784\ub300/\ub178\ud615\uc624\uac70\ub9ac\uc0c1\uac00/\ub178\ud615\uce74\ud398\uc784\ub300",
        "link": "https://www.jejuall.com/CProperty/detail?num=6611152"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6609829.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub450\uc774\ub3d9 \u00b7 \ub3c4\ub450\ud574\uc548\ub3c4\ub85c\uc0c1\uac00\uc784\ub300/\uc81c\uc8fc\uc624\uc158\ubdf0\uc0c1\uac00\uc784\ub300/\ubbf8\uc6a9\uc2e4/\uc6e8\ub529\uc0f5/\uc2a4\ud29c\ub514\uc624",
        "link": "https://www.jejuall.com/CProperty/detail?num=6609829"
      }
    ]
  },
  "hero-apt": {
    "title": "\uc778\uae30\uc788\ub294 \uc81c\uc8fc\ub3c4 \uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-kcr-89039131.jpg",
        "desc": "\uc544\ub77c\uc77c\ub3d9 \u00b7 \uc5fc\uad11 4\ub3d9 \uc5fc\uad11\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1/\uc544\ub77c\uc77c\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4 62/46",
        "link": "https://land.jejukcr.com/offer/89039131"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-89039127.jpg",
        "desc": "\uc5f0\ub3d9 \u00b7 \ub300\ub9bce\ud3b8\ud55c\uc138\uc0c11\ucc28 101\ub3d9 \ub300\ub9bc1\ucc28/\uc5f0\ub3d9\ub300\ub9bc1\ucc28\uace0\uce35/\ub300\ub9bc1\ucc28\uc774\ud3b8\ud55c\uc138\uc0c1/\ud55c\ub77c\ucd08/\uc5f0\ub3d9\uc544\ud30c\ud2b8/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8 112/84",
        "link": "https://land.jejukcr.com/offer/89039127"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88984756.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub178\ud6152\ucc28\uc544\uc774\ud30c\ud06c 202\ub3d9 \ub178\ud6152\ucc28\uc544\uc774\ud30c\ud06c/\ubc294\uac1c/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4/\uc800\uce35 139/115",
        "link": "https://land.jejukcr.com/offer/88984756"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88776665.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ubca8\ub77c\uc2dc\ud2f0 1\ub3d9 \ub178\ud615\ubca8\ub77c\uc2dc\ud2f0/\uc4f0\ub9ac\ub8f8/\uace0\uce35/\ub178\ud615\uc2e0\ucd95\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8 115/84",
        "link": "https://land.jejukcr.com/offer/88776665"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88689894.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc5d0\uc774\uc2a4\uc544\ud06c\ub85c\ube4c2\ucc28 1\ub3d9 \uc678\ub3c4\uc5d0\uc774\uc2a4\uc544\ud06c\ub85c\ube4c2\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub3c4\uc2dc\uac00\uc2a4 104/84",
        "link": "https://land.jejukcr.com/offer/88689894"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-89039145.jpg",
        "desc": "\uc774\ub3c4\uc774\ub3d9 \u00b7 \uc131\uc6d0 1\ub3d9 \uc774\ub3c4\uc131\uc6d0\uc544\ud30c\ud2b8/\uc774\ub3c4\uc8fc\uacf5\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\uc544\ud30c\ud2b8/\ub9ac\ubaa8\ub378\ub9c1/\ub0a8\uad11\ucd08/\uc81c\uc8fc\uc77c\uc911 93/84",
        "link": "https://land.jejukcr.com/offer/89039145"
      }
    ]
  },
  "hero-sanga": {
    "title": "\uc0ac\uc5c5\uc798\ub418\ub294 \uc0c1\uac00 \uc18c\uac1c",
    "items": [
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\ub3c4\ub0a8\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ub2e4\uc6a9\ub3c4/\ube48\uc810\ud3ec) \ub300\ud615\uc0c1\uac00\uc784\ub300/1\uce35\uc0c1\uac00/\uc1fc\ub8f8/\ub113\uc740\uc8fc\ucc28\uc7a5\ud655\ubcf4/\ub300\ub3c4\ub85c/\uc815\ubd80\uc885\ud569\uccad\uc0ac 266/266",
        "link": "https://land.jejukcr.com/offer/89055104"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-89039324.png",
        "desc": "\uc5f0\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\uc74c\uc2dd\uc810/\uc2dd\ub2f9) \ud55c\ub77c\uc218\ubaa9\uc6d0\uc778\uadfc/\uc5f0\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uc5f0\ub3d9\uc74c\uc2dd\uc810\uc784\ub300/\uc8fc\ucc28\ud3b8\ub9ac 68/68",
        "link": "https://land.jejukcr.com/offer/89039324"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88984493.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ucc3d\uace0) \uc678\ub3c4\uc77c\ub3d9\ucc3d\uace0\uc784\ub300/\uc81c\uc8fc\uc2dc\ucc3d\uace0\uc784\ub300 125/125",
        "link": "https://land.jejukcr.com/offer/88984493"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88984367.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ubd80\ub3d9\uc0b0/\uc0ac\ubb34\uc2e4) \ub178\ud615\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uc18c\ub9e4\uc810/\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc/\uc6d4\ub791\ub9c8\uc744 43/43",
        "link": "https://land.jejukcr.com/offer/88984367"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88984345.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ub2e4\uc6a9\ub3c4/\ube48\uc810\ud3ec) \ub178\ud615\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\ub300\ud615\uc0c1\uac00/\uc81c\uc8fc\uc2dc\ubcd1\uc758\uc6d0/\uc0ac\ubb34\uc2e4\uc784\ub300/ 124/124",
        "link": "https://land.jejukcr.com/offer/88984345"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88984317.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ub2e4\uc6a9\ub3c4/\ube48\uc810\ud3ec) \uc678\ub3c4\uc0c1\uac00\uc784\ub300/\uc678\ub3c4\uc0ac\ubb34\uc2e4\uc784\ub300/\uc678\ub3c4\ud559\uc6d0\ubcd1\uc6d0\uc784\ub300\uc6b0\ub300\ud61c\ud0dd\uc788\uc74c/\ud3b8\ub9ac\ud55c\uc804\uc6a9\uc8fc\ucc28/ 171/171",
        "link": "https://land.jejukcr.com/offer/88984317"
      }
    ]
  },
  "hero-house": {
    "title": "\ub9c8\ub2f9\uc788\ub294 \uc0b6 \ub2e8\ub3c5\uc8fc\ud0dd",
    "items": [
      {
        "photo": "images/listings/house/house-kcr-89039055.jpg",
        "desc": "\uc11c\ud64d\ub3d9 \u00b7 \ub2e8\ub3c5 \uc11c\uadc0\uc11c\ucd08\ub4f1\uc778\uadfc/\uc11c\uadc0\ud3ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc11c\uadc0\ud3ec2\uce35\ub2e8\ub3c5/\uc11c\uadc0\ud3ec\uc2dc\uccad\uc778\uadfc 211/76",
        "link": "https://land.jejukcr.com/offer/89039055"
      },
      {
        "photo": "images/listings/house/house-kcr-89039047.jpg",
        "desc": "\uc0bc\ub3c4\uc774\ub3d9 \u00b7 \ub2e8\ub3c5 \uae09\ub9e4/\uc0bc\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc911\uc559\uc5ec\uc911\uc778\uadfc/\ub9c8\ub2f9\uc788\ub294\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4 149",
        "link": "https://land.jejukcr.com/offer/89039047"
      },
      {
        "photo": "images/listings/house/house-kcr-89038913.jpg",
        "desc": "\uc77c\ub3c4\uc774\ub3d9 \u00b7 \ub2e8\ub3c5 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd/\uad6c\ub3c4\uc2ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc81c\uc8fc\uc2dc\ub2e8\ub3c5\uc8fc\ud0dd 152/59",
        "link": "https://land.jejukcr.com/offer/89038913"
      },
      {
        "photo": "images/listings/house/house-kcr-89039036.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub2e8\ub3c5 \ub178\ud615\ub3d9\ud0c0\uc6b4\ud558\uc6b0\uc2a4\uc804\uc138/\ub178\ud615\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\uc804\uc138/\ub77c\uba54\uc885\ud0c0\uc6b4\ud558\uc6b0\uc2a4/\ubc31\ub85d\ucd08 191",
        "link": "https://land.jejukcr.com/offer/89039036"
      },
      {
        "photo": "images/listings/house/house-kcr-89038978.jpg",
        "desc": "\uc560\uc6d4\uc74d \uad11\ub839\ub9ac \u00b7 \ub2e8\ub3c5 \uc560\uc6d4\ubbf8\ud558\uc2a4\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub144\uc138/\uc560\uc6d4\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138/\uc560\uc6d4\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uad11\ub839\ub9ac\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138 216",
        "link": "https://land.jejukcr.com/offer/89038978"
      },
      {
        "photo": "images/listings/house/house-kcr-89038962.jpg",
        "desc": "\uad6c\uc88c\uc74d \ud589\uc6d0\ub9ac \u00b7 \ub2e8\ub3c5 \uad6c\uc88c\uc74d\ub2e8\ub3c5\uc8fc\ud0dd/\uc81c\uc8fc\ub3c4\uc804\uc6d0\uc8fc\ud0dd/\uc6d4\uc815\ub9ac\uc778\uadfc/\uc81c\uc8fc\ub3c4\ub2e8\ub3c5\uc8fc\ud0dd 948/152",
        "link": "https://land.jejukcr.com/offer/89038962"
      }
    ]
  },
  "hero-villa": {
    "title": "\uba4b\uacfc \uc2e4\uc18d \ud504\ub9ac\ubbf8\uc5c4 \ube4c\ub77c",
    "items": [
      {
        "photo": "images/listings/villa/villa-kcr-88984262.jpg",
        "desc": "\uc544\ub77c\uc77c\ub3d9 \u00b7 \uc5f0\ub9bd - \uc544\ub77c\ud734\uc5488\ucc28 1\ub3d9 \uc544\ub77c\ud734\uc5488\ucc28\ub9e4\ub9e4/\uc544\ub77c\ub3d9\ube4c\ub77c\ub9e4\ub9e4/\uad00\ub9ac\uc798\ub418\uc5b4\uc788\uc74c/\uc544\ub77c\ucd08/ 100/84",
        "link": "https://land.jejukcr.com/offer/88984262"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88984246.jpg",
        "desc": "\uc624\ub4f1\ub3d9 \u00b7 \ub2e4\uc138\ub300 - \uc624\ub4f1\ud734\uc5482\ucc28 101\ub3d9 \uc624\ub4f1\ud734\uc5482\ucc28/\uc544\ub77c\ucd08\ud559\uad70/\uc81c\uc8fc\uc2dc\uc4f0\ub9ac\ub8f8\ub9e4\ub9e4/\uc81c\uc8fc\ube4c\ub77c\ub9e4\ub9e4 82/72",
        "link": "https://land.jejukcr.com/offer/88984246"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88984160.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \uc5f0\ub9bd - \ub178\ud615\ud3a0\ub9ac\uccb4 102\ub3d9 \ub178\ud615\ud3a0\ub9ac\uccb4/\ub178\ud615\ub3d9\uc4f0\ub9ac\ub8f8\ube4c\ub77c/\ubc31\ub85d\ucd08 84/58",
        "link": "https://land.jejukcr.com/offer/88984160"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88983632.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub2e4\uc138\ub300 - \ub9c8\ud06c\ud790\uc560\uc6d46\ucc28 102\ub3d9 \ub9c8\ud06c\ud790\uc560\uc6d46\ucc28/\ud558\uadc0\uc2e0\ucd95/\ud558\uadc0\ucd08\uadc0\uc77c\uc911/\uc804\uc138\ub300\ud0dc\uc591\uad11\uc2dc\uc124 108/84",
        "link": "https://land.jejukcr.com/offer/88983632"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88896468.jpg",
        "desc": "\uc911\ubb38\ub3d9 \u00b7 \uc5f0\ub9bd - \uce74\ub80c\uc2dc\uc544 1\ub3d9 \uace0\uce35\uc624\uc158\ubdf0/\uc9c0\ud558\uc8fc\ucc28\uc7a5/\uc911\ubb38\uce74\ub80c\uc2dc\uc544 137/83",
        "link": "https://land.jejukcr.com/offer/88896468"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88896461.jpg",
        "desc": "\ub3c4\ud3c9\ub3d9 \u00b7 \uc5f0\ub9bd - JDS\ube4c\ub9ac\uc9c0 102\ub3d9 \ub3c4\ud3c9\ub3d9JDS\ube4c\ub9ac\uc9c0\ub9e4\ub9e4/jds\ube4c\ub9ac\uc9c0/\uc62c\ub9ac\ubaa8\ub378\ub9c1/\uc794\ub514\ub9c8\ub2f9/ 100/84",
        "link": "https://land.jejukcr.com/offer/88896461"
      }
    ]
  },
  "hero-presale": {
    "title": "\ud22c\uc790\uc790\uac00 \uba3c\uc800 \uc544\ub294 \uc2e0\ucd95 \ubd84\uc591",
    "emptyMessage": "\ud604\uc7ac \ub4f1\ub85d\ub41c \ubd84\uc591\uad8c \ub9e4\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
    "items": []
  },
  "hero-land": {
    "title": "\ub9c8\uc74c\uc5d0 \uc3d9 \uc81c\uc8fc\ud1a0\uc9c0",
    "items": [
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc560\uc6d4\uc74d \uad11\ub839\ub9ac \u00b7 \uc7a1\uc885\uc9c0 \ud3c9\ud654\ub85c\uc778\uadfc/\uad11\ub839\ub9ac\uc7a1\uc885\uc9c0/\uc560\uc6d4\ud1a0\uc9c0\ub9e4\ub9e4/\uc560\uc6d4\uc57c\uc801\uc7a5/\uacc4\ud68d\uad00\ub9ac\uc9c0\uc5ed 3,967",
        "link": "https://land.jejukcr.com/offer/88926828"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc7a1\uc885\uc9c0 \uc678\ub3c4\ubd80\uc601\uc544\ud30c\ud2b8\uc778\uadfc/\uc6b0\ud3c9\ub85c\uc778\uadfc/\uc678\ub3c4\uc7a1\uc885\uc9c0 727",
        "link": "https://land.jejukcr.com/offer/89039240"
      },
      {
        "photo": "images/listings/land/land-kcr-89039227.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc804 \uc678\ub3c4\ucd95\uad6c\uc7a5\uc778\uadfc/\ucc3d\uace0\ubc0f\ub2e8\ub3c5\uc8fc\ud0dd\uc9c0\ucd94\ucc9c 2,158",
        "link": "https://land.jejukcr.com/offer/89039227"
      },
      {
        "photo": "images/listings/land/land-kcr-89039214.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \ub2f5 \uc678\ub3c4\uc9c0\uc5ed\uc8fc\ud0dd\uc870\ud569\ub2e8\uc9c0\uc778\uadfc/\uc678\ub3c4\ub18d\uc9c0\ub9e4\ub9e4 2,079",
        "link": "https://land.jejukcr.com/offer/89039214"
      },
      {
        "photo": "images/listings/land/land-kcr-88983756.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \uc804 \uc560\uc6d4\ud574\uc548\ub3c4\ub85c\uc778\uadfc/\ub300\uc9c0\ud3ec\ud568/\uac00\ubb38\ub3d9\ud3ec\uad6c\uc778\uadfc\ud1a0\uc9c0\ubc0f\uac74\ucd95\ubb3c\ub9e4\ub9e4 1,847",
        "link": "https://land.jejukcr.com/offer/88983756"
      },
      {
        "photo": "images/listings/photo-unavailable.svg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \uc804 \uc560\uc6d4\ud1a0\uc9c0\ub9e4\ub9e4/\ud558\uadc0\ud1a0\uc9c0\ub9e4\ub9e4/\uac00\ubb38\ub3d9\uae38/2\ucc28\uc120\ub3c4\ub85c\ud655\uc7a5\uc608\uc815 571",
        "link": "https://land.jejukcr.com/offer/88983737"
      }
    ]
  }
};

  // 매물유형별 사진 저장 폴더 — 시트엔 파일명만 적으면 이 폴더에서 자동으로 찾음
  var CATEGORY_LABEL_TO_FOLDER = {
    "아파트": "apartment",
    "분양": "presale",
    "주택": "house",
    "빌라": "villa",
    "원룸·투룸": "oneroom",
    "원룸투룸": "oneroom",
    "상가": "sanga",
    "토지": "land",
    "창고": "warehouse"
  };

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var field = "";
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else { inQuotes = false; }
        } else {
          field += c;
        }
      } else if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field);
        field = "";
        if (row.length > 1 || row[0] !== "") rows.push(row);
        row = [];
      } else {
        field += c;
      }
    }
    if (field !== "" || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function syncLiveListings() {
    if (typeof SHEET_CSV_URL === "undefined" || !SHEET_CSV_URL) return;
    fetch(SHEET_CSV_URL)
      .then(function (res) { return res.text(); })
      .then(function (text) {
        var rows = parseCsv(text);
        if (rows.length < 2) return;
        var header = rows[0].map(function (h) { return h.trim(); });
        function findCol(needles, exclude) {
          for (var i = 0; i < header.length; i++) {
            if (exclude && exclude.indexOf(i) > -1) continue;
            var h = header[i].replace(/\s+/g, "");
            for (var j = 0; j < needles.length; j++) {
              if (h.indexOf(needles[j]) > -1) return i;
            }
          }
          return -1;
        }
        var idxType = findCol(["매물유형"]);
        var idxDesc = findCol(["한줄특징", "특징"]);
        // "사진"이 들어간 칸을 먼저 확정한 뒤, 그 칸은 제외하고 오일장/교차로 링크 칸을 찾음
        // (사진 칸 이름이 "사진 링크"이어도 "링크"라는 단어 때문에 서로 헷갈리지 않도록)
        var idxPhoto = findCol(["사진링크", "사진URL", "사진주소", "드라이브", "사진파일명", "사진"]);
        var idxLink = findCol(["오일장", "교차로", "상세페이지", "링크"], idxPhoto > -1 ? [idxPhoto] : null);
        var idxLocation = findCol(["노출위치", "노출"]);
        if (idxType === -1 || idxDesc === -1) return;

        var grouped = {};
        for (var r = 1; r < rows.length; r++) {
          var cols = rows[r];
          if (!cols || !cols.length) continue;
          var typeLabel = (cols[idxType] || "").trim();
          var locationMap = TYPE_LOCATION_TO_KEY[typeLabel];
          var desc = (cols[idxDesc] || "").trim();
          if (!locationMap || !desc) continue;
          var photoRaw = idxPhoto > -1 ? (cols[idxPhoto] || "").trim() : "";
          var folder = CATEGORY_LABEL_TO_FOLDER[typeLabel];
          var link = idxLink > -1 ? (cols[idxLink] || "").trim() : "";
          var locationRaw = idxLocation > -1 ? (cols[idxLocation] || "") : "";
          // 체크박스 항목은 "전문분야, 대표매물" 처럼 쉼표로 여러 개 들어옴
          var locations = locationRaw.split(",").map(function (s) { return s.trim(); }).filter(Boolean);

          locations.forEach(function (loc) {
            var key = locationMap[loc];
            if (!key || !LISTING_DATA[key]) return;
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push({
              photo: LISTING_DATA[key].items[0].photo, // 링크/파일이 없거나 못 찾을 때 쓸 기본 사진
              photoRaw: photoRaw,
              photoFolder: folder,
              desc: desc,
              link: link || OILJANG_LINK
            });
          });
        }
        Object.keys(grouped).forEach(function (key) {
          if (LISTING_DATA[key] && grouped[key].length) {
            LISTING_DATA[key].items = grouped[key];
          }
        });
      })
      .catch(function () {
        // 네트워크/시트 오류 시 기존 예시 데이터를 그대로 유지
      });
  }
  syncLiveListings();

  var modal = document.getElementById("listingModal");
  if (modal) {
    var modalTitle = document.getElementById("listingModalTitle");
    var modalGrid = document.getElementById("listingModalGrid");
    var modalPagination = document.getElementById("listingModalPagination");
    var lastFocusedEl = null;
    var currentItems = [];
    var currentPage = 0;
    var currentEmptyMessage = "현재 등록된 매물이 없습니다.";

    function linkSiteLabel(url) {
      if (url.indexOf("jejukcr.com") > -1) return "제주교차로에서 보기";
      if (url.indexOf("jejuall.com") > -1) return "오일장에서 보기";
      return "매물 보기";
    }

    // 시트에 파일명 적을 때 확장자를 빠뜨려도(예: "apt1") 자동으로 .jpg/.jpeg/.png/.webp를 순서대로 시도해서 찾아줌
    // (구버전 "로컬 폴더" 방식 — 링크 방식으로 전환한 뒤에도 하위 호환용으로 남겨둠)
    var PHOTO_EXTS = [".jpg", ".jpeg", ".png", ".webp"];
    function resolveLocalPhoto(path, thumbEl) {
      if (/\.(jpe?g|png|webp)$/i.test(path)) {
        thumbEl.style.backgroundImage = "url('" + path + "')";
        return;
      }
      var i = 0;
      function tryNext() {
        if (i >= PHOTO_EXTS.length) return; // 못 찾으면 빈 상태로 둠 (사이트는 안 깨짐)
        var candidate = path + PHOTO_EXTS[i++];
        var img = new Image();
        img.onload = function () { thumbEl.style.backgroundImage = "url('" + candidate + "')"; };
        img.onerror = tryNext;
        img.src = candidate;
      }
      tryNext();
    }

    // 구글 드라이브 공유 링크 → 이미지로 바로 쓸 수 있는 직링크로 자동 변환
    function toDirectImageUrl(url) {
      var m = url.match(/drive\.google\.com\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
      if (m) return "https://lh3.googleusercontent.com/d/" + m[1] + "=w1000";
      return url; // 이미 직링크(imgur, 블로그 이미지 등)면 그대로 사용
    }

    // 시트의 "사진 링크" 값 하나를 실제 화면에 적용 — URL이면 링크로, 아니면(구버전) 로컬 파일명으로 처리
    function resolvePhoto(raw, folder, thumbEl, fallbackPhoto) {
      var val = (raw || "").trim();
      if (!val) {
        thumbEl.style.backgroundImage = "url('" + fallbackPhoto + "')";
        return;
      }
      if (/^https?:\/\//i.test(val)) {
        thumbEl.style.backgroundImage = "url('" + toDirectImageUrl(val) + "')";
        return;
      }
      resolveLocalPhoto("images/listings/" + folder + "/" + val, thumbEl);
    }

    function renderPage(page) {
      currentPage = page;
      modalGrid.innerHTML = "";
      var start = page * PAGE_SIZE;
      var pageItems = currentItems.slice(start, start + PAGE_SIZE);
      if (!pageItems.length) {
        var emptyMessage = document.createElement("p");
        emptyMessage.className = "listing-modal-empty";
        emptyMessage.setAttribute("role", "status");
        emptyMessage.textContent = currentEmptyMessage;
        modalGrid.appendChild(emptyMessage);
      }
      pageItems.forEach(function (item) {
        var el = document.createElement("a");
        el.className = "listing-modal-item";
        var href = item.link || OILJANG_LINK;
        el.href = href;
        el.target = "_blank";
        el.rel = "noopener";
        el.innerHTML =
          '<div class="thumb"></div>' +
          '<div class="info"><div class="desc">' + item.desc + '</div><div class="arrow">' + linkSiteLabel(href) + ' →</div></div>';
        resolvePhoto(item.photoRaw, item.photoFolder, el.querySelector(".thumb"), item.photo);
        modalGrid.appendChild(el);
      });

      modalPagination.innerHTML = "";
      var pageCount = Math.ceil(currentItems.length / PAGE_SIZE);
      if (pageCount > 1) {
        for (var i = 0; i < pageCount; i++) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "listing-modal-page-btn" + (i === page ? " active" : "");
          btn.textContent = String(i + 1);
          btn.addEventListener("click", (function (idx) {
            return function () { renderPage(idx); };
          })(i));
          modalPagination.appendChild(btn);
        }
      }
    }

    function openModal(categoryKey) {
      var data = LISTING_DATA[categoryKey];
      if (!data) return;
      lastFocusedEl = document.activeElement;
      modalTitle.textContent = data.title;
      currentItems = data.items || [];
      currentEmptyMessage = data.emptyMessage || "현재 등록된 매물이 없습니다.";
      renderPage(0);
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      var closeBtn = modal.querySelector(".listing-modal-close");
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocusedEl) lastFocusedEl.focus();
    }

    document.querySelectorAll("[data-listing-category]").forEach(function (el) {
      el.addEventListener("click", function () {
        openModal(el.getAttribute("data-listing-category"));
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(el.getAttribute("data-listing-category"));
        }
      });
    });

    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });

    // ===== Site search: local category match + external fallback =====
    // num=165834 은 아승공인중개사 제주오일장 프로필 ID — 이 값으로 검색 범위를 대표님 매물로만 한정함
    var OILJANG_SEARCH_URL = "https://www.jejuall.com/CProperty/myHome?num=165834&gubun=1&dong_chk=NO&dong=NO&keyword=";
    var searchForm = document.getElementById("siteSearchForm");
    var searchInput = document.getElementById("siteSearchInput");
    var searchResults = document.getElementById("siteSearchResults");

    function externalSearchUrl(query) {
      return OILJANG_SEARCH_URL + encodeURIComponent(query);
    }

    function renderSearchResults(query) {
      var q = query.trim();
      searchResults.innerHTML = "";
      if (!q) {
        searchResults.hidden = true;
        return;
      }
      var matches = Object.keys(LISTING_DATA).filter(function (key) {
        return LISTING_DATA[key].title.indexOf(q) !== -1;
      });

      matches.slice(0, 5).forEach(function (key) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "discover-search-item";
        btn.innerHTML = LISTING_DATA[key].title + '<span class="hint">예시 보기</span>';
        btn.addEventListener("click", function () {
          openModal(key);
          searchResults.hidden = true;
          searchInput.value = "";
        });
        searchResults.appendChild(btn);
      });

      var extBtn = document.createElement("button");
      extBtn.type = "button";
      extBtn.className = "discover-search-item is-external";
      extBtn.innerHTML = '제주오일장에서 "' + q + '" 검색<span class="hint">전체 매물 ↗</span>';
      extBtn.addEventListener("click", function () {
        window.open(externalSearchUrl(q), "_blank", "noopener");
        searchResults.hidden = true;
      });
      searchResults.appendChild(extBtn);

      searchResults.hidden = false;
    }

    if (searchForm && searchInput && searchResults) {
      searchInput.addEventListener("input", function () {
        renderSearchResults(searchInput.value);
      });
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = searchInput.value.trim();
        if (!q) return;
        window.open(externalSearchUrl(q), "_blank", "noopener");
        searchResults.hidden = true;
      });
      document.addEventListener("click", function (e) {
        if (!searchForm.parentElement.contains(e.target)) {
          searchResults.hidden = true;
        }
      });
      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Escape") searchResults.hidden = true;
      });
    }
  }

  // ===== Phone consult: dial on mobile, popup on desktop =====
  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  var phoneModal = document.getElementById("phoneModal");
  var phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  if (phoneModal && phoneLinks.length) {
    var phoneLastFocused = null;

    function openPhoneModal() {
      phoneLastFocused = document.activeElement;
      phoneModal.classList.add("open");
      phoneModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      var closeBtn = phoneModal.querySelector(".listing-modal-close");
      if (closeBtn) closeBtn.focus();
    }
    function closePhoneModal() {
      phoneModal.classList.remove("open");
      phoneModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (phoneLastFocused) phoneLastFocused.focus();
    }

    phoneLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (!isMobileDevice()) {
          e.preventDefault();
          openPhoneModal();
        }
        // 모바일: 기본 동작(전화 앱 연결)을 그대로 둠
      });
    });

    phoneModal.querySelectorAll("[data-phone-modal-close]").forEach(function (el) {
      el.addEventListener("click", closePhoneModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && phoneModal.classList.contains("open")) closePhoneModal();
    });

    var copyBtn = document.getElementById("phoneCopyBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var number = "010-9347-1345";
        var done = function () {
          copyBtn.classList.add("copied");
          copyBtn.lastChild.textContent = " 복사 완료!";
          setTimeout(function () {
            copyBtn.classList.remove("copied");
            copyBtn.lastChild.textContent = " 번호 복사하기";
          }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(number).then(done).catch(function () {});
        }
      });
    }
  }

  // ===== Scroll reveal =====
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
