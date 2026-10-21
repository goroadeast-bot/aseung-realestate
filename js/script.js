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
  // 2026-10-21: 5일장·제주교차로 최신 유형별 순위를 반영.
  var LISTING_DATA = {
  "nohyeong-apt": {
    "title": "\uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-oil-6008100.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8/\uc77c\uc8fc\uc11c\ub85c\uc811/\uc560\uc6d4\uc544\ud30c\ud2b8/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6008100"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6574377.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc28\ubc0d1\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6574377"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6574195.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc774\ub3c4\uc131\uc6d0\uc544\ud30c\ud2b8/\uc774\ub3c4\uc8fc\uacf5\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\uc544\ud30c\ud2b8/\ub9ac\ubaa8\ub378\ub9c1/\ub0a8\uad11\ucd08/\uc81c\uc8fc\uc77c\uc911",
        "link": "https://www.jejuall.com/CProperty/detail?num=6574195"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6573218.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc77c\ub3c4\uc0bc\uc8fc\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573218"
      },
      {
        "photo": "images/listings/apartment/apt-oil-5991642.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uc560\uc6d4\ud558\uadc0\uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8\ub9e4\ub9e4/\uc560\uc6d4\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub3c4\uc2dc\uac00\uc2a4\ub09c\ubc29",
        "link": "https://www.jejuall.com/CProperty/detail?num=5991642"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6568530.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \ub300\ub9bc1\ucc28/\uc5f0\ub3d9\ub300\ub9bc1\ucc28\uace0\uce35/\ub300\ub9bc1\ucc28\uc774\ud3b8\ud55c\uc138\uc0c1/\ud55c\ub77c\ucd08/\uc5f0\ub3d9\uc544\ud30c\ud2b8/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8",
        "link": "https://www.jejuall.com/CProperty/detail?num=6559482"
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
        "photo": "images/listings/house/house-oil-6573083.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uba85\uc6d4\ub9ac \u00b7 *\ud55c\ub9bc\uc62c\ub9ac\ubaa8\ub378\ub9c1\ub2e8\ub3c5\uc8fc\ud0dd*\ud55c\ub9bc\ubbfc\ubc15\uc9d1\uc6b4\uc601*\uba85\uc6d4\uad50\ucc28\ub85c\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573083"
      },
      {
        "photo": "images/listings/house/house-oil-6573072.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uae08\ub2a5\ub9ac \u00b7 \ud55c\ub9bc\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\ub9bc\uc0c1\uac00\uac74\ubb3c\ub9e4\ub9e4/\uae08\ub2a5\ud574\uc218\uc695\uc7a5\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573072"
      },
      {
        "photo": "images/listings/house/house-oil-6565612.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud611\uc7ac\ub9ac \u00b7 \ud55c\ub9bc\ud55c\uc218\ud480\ud0c0\uc6b4\ud558\uc6b0\uc2a4/\ud611\uc7ac\ud480\uc635\uc158\ub144\uc138/\uc81c\uc8fc\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138/\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub144\uc138",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565612"
      },
      {
        "photo": "images/listings/house/house-oil-6563381.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd/\uad6c\ub3c4\uc2ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc81c\uc8fc\uc2dc\ub2e8\ub3c5\uc8fc\ud0dd",
        "link": "https://www.jejuall.com/CProperty/detail?num=6563381"
      },
      {
        "photo": "images/listings/house/house-oil-6549639.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc0bc\ub3c4\uc77c\ub3d9 \u00b7 \uae09\ub9e4/\uc0bc\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc911\uc559\uc5ec\uc911\uc778\uadfc/\ub9c8\ub2f9\uc788\ub294\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc81c\uc8fc\ub3c4\uad6c\uc625",
        "link": "https://www.jejuall.com/CProperty/detail?num=6549639"
      },
      {
        "photo": "images/listings/house/house-oil-5968317.jpg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc11c\uad11\ub9ac \u00b7 *\uc11c\uad11\ub9ac\uc2e0\ucd95\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*\uc601\uc5b4\uad50\uc721\ub3c4\uc2dc\uc778\uadfc\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*\uc11c\uad11\ucd08\uc778\uadfc*",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968317"
      }
    ]
  },
  "villa": {
    "title": "\ube4c\ub77c",
    "items": [
      {
        "photo": "images/listings/villa/villa-oil-6581268.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc624\ub80c\uc9c0\uce74\uc6b4\ud2f0\ub9e4\ub9e4/\uc678\ub3c4\ubd84\ub9ac\ud615\uc6d0\ub8f8\ub9e4\ub9e4/\uc81c\uc8fc\uc2dc\uc6d0\ub8f8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6581268"
      },
      {
        "photo": "images/listings/villa/villa-oil-6581266.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ud3a0\ub9ac\uccb4\uc5f0\ub9bd\uc8fc\ud0dd\ub9e4\ub9e4/\ubc31\ub85d\ucd08/\ubbf8\ub9ac\ub0b4\ub9c8\uc744\uc544\ud30c\ud2b8\uc778\uadfc/\ubc295\uac1c\ubcf5\uce35\ube4c\ub77c\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6581266"
      },
      {
        "photo": "images/listings/villa/villa-oil-6581220.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uad11\ub839\ub9ac \u00b7 \uc560\uc6d4\uc81c\uc77c\ube4c\ub9ac\uc9c0\ub9e4\ub9e4/\uad11\ub839\ub9ac\uc81c\uc77c\ube4c\ub9ac\uc9c0\ub9e4\ub9e4/\ud480\uc635\uc158\ud22c\ub8f8\ub9e4\ub9e4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6581220"
      },
      {
        "photo": "images/listings/villa/villa-oil-6578027.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub9c8\ud06c\ud790\uc560\uc6d46\ucc28/\ud558\uadc0\uc2e0\ucd95/\ud558\uadc0\ucd08\uadc0\uc77c\uc911/\uc804\uc138\ub300\ud0dc\uc591\uad11\uc2dc\uc124",
        "link": "https://www.jejuall.com/CProperty/detail?num=6578027"
      },
      {
        "photo": "images/listings/villa/villa-oil-6578026.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc544\ub77c\uc77c\ub3d9 \u00b7 \uc544\ub77c\ud734\uc5488\ucc28\ub9e4\ub9e4/\uc544\ub77c\ub3d9\ube4c\ub77c\ub9e4\ub9e4/\uad00\ub9ac\uc798\ub418\uc5b4\uc788\uc74c/\uc544\ub77c\ucd08/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6578026"
      },
      {
        "photo": "images/listings/villa/villa-oil-6578025.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uc0c1\uadc0\ub9ac \u00b7 \uc560\uc6d4\uace0\uae09\uc8fc\ud0dd\ub9e4\ub9e4/\ub9c8\ud06c\ud790\uc560\uc6d42\ucc28/\ub9c8\ud06c\ud790\ub9e4\ub9e4/\uc804\uc790\uc81c\ud488\uc635\uc158/3\uce35",
        "link": "https://www.jejuall.com/CProperty/detail?num=6578025"
      }
    ]
  },
  "nohyeong-oneroom": {
    "title": "\ub531 \ud544\uc694\ud55c \ub9cc\ud07c \uc6d0\ub8f8 \ud22c\ub8f8",
    "items": [
      {
        "photo": "images/listings/oneroom/oneroom-oil-6568528.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc9c0\uad6c/\uc778\uc81c/\uc77c\ub3c4\uc774\ub3d9\ud22c\ub8f8\ub144\uc138/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6568528"
      },
      {
        "photo": "images/listings/oneroom/oneroom-oil-6563844.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ud558\uadc0\ub113\uc740\ud22c\ub8f8\ub144\uc138/\ubc292\uc695\uc2e42/\uc624\uc158\ubdf0\uac00\ub2a5/\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uac00\uc804\uc81c\ud488\uc635\uc158/\uc2e0\ucd95\uae09",
        "link": "https://www.jejuall.com/CProperty/detail?num=6563844"
      },
      {
        "photo": "images/listings/oneroom/oneroom-oil-6474354.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uae08\ub2a5\ub9ac \u00b7 \ud55c\ub9bc\ubd84\ub9ac\ud615\uc6d0\ub8f8/\ub113\uace0\uae68\ub057\ud55c\ubd84\ub9ac\ud615\uc6d0\ub8f8/\uae08\ub2a5\ud574\uc218\uc695\uc7a5",
        "link": "https://www.jejuall.com/CProperty/detail?num=6474354"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88346544.jpg",
        "desc": "\ud55c\ub9bc\uc74d \ud611\uc7ac\ub9ac \u00b7 \uc544\ud30c\ud2b8\ud615 \ud22c\ub8f8 \ud55c\ub9bc\ud22c\ub8f8\ub144\uc138/\ud55c\ub9bc\ud22c\ub8f8\uc544\ud30c\ud2b8\ub144\uc138/\ud55c\ub9bc\ud480\uc635\uc158/j\ube14\ub8e8\uc624\uc158\uc544\ud30c\ud2b8 72/59",
        "link": "https://land.jejukcr.com/offer/88346544"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88346538.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub2e4\uac00\uad6c\ud615 \ud22c\ub8f8 \ud558\uadc0\ub113\uc740\ud22c\ub8f8\ub144\uc138/\ubc292\uc695\uc2e42/\uc624\uc158\ubdf0\uac00\ub2a5/\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uac00\uc804\uc81c\ud488\uc635\uc158/\uc2e0\ucd95\uae09 90/81",
        "link": "https://land.jejukcr.com/offer/88346538"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88492430.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub2e4\uc138\ub300\ud615 \uc6d0\ub8f8 \ub178\ud615\ub3d9\uc6d0\ub8f8\uc784\ub300/\ud55c\ub77c\ub300/\ud480\uc635\uc158/\ub113\uc740\uc6d0\ub8f8 62/51",
        "link": "https://land.jejukcr.com/offer/88492430"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88491864.jpg",
        "desc": "\uc544\ub77c\uc77c\ub3d9 \u00b7 \ub2e4\uac00\uad6c\ud615 \uc6d0\ub8f8 \uc81c\ub300\uc778\uadfc/\uc18c\ud615\ubc18\ub824\ub3d9\ubb3c\uac00\ub2a5/\uc544\ub77c\uc77c\ub3d9\uc6d0\ub8f8\uc784\ub300 27/26",
        "link": "https://land.jejukcr.com/offer/88491864"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88456029.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub2e4\uac00\uad6c\ud615 \uc6d0\ub8f8 \uc81c\uc8fc\uc77c\uace0\uc778\uadfc/\ub178\ud615\ub3d9\uc6d0\ub8f8/\uc8fc\ucc28\ud3b8\ub9ac 34/34",
        "link": "https://land.jejukcr.com/offer/88456029"
      },
      {
        "photo": "images/listings/oneroom/oneroom-kcr-88346549.jpg",
        "desc": "\uc77c\ub3c4\uc774\ub3d9 \u00b7 \ub2e4\uac00\uad6c\ud615 \ud22c\ub8f8 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc9c0\uad6c/\uc778\uc81c/\uc77c\ub3c4\uc774\ub3d9\ud22c\ub8f8\ub144\uc138/ 48/48",
        "link": "https://land.jejukcr.com/offer/88346549"
      }
    ]
  },
  "sinsigaji-sanga": {
    "title": "\uc0c1\uac00",
    "items": [
      {
        "photo": "images/listings/sanga/sanga-oil-6581059.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc3d\uace0\uc784\ub300/\uc81c\uc8fc\uc2dc\ucc3d\uace0\uc784\ub300",
        "link": "https://www.jejuall.com/CProperty/detail?num=6581059"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6580970.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub0b4\ub3c4\ub3d9 \u00b7 *\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc*\uc54c\uc791\uc9c0\ud574\uc548\ub85c\uc778\uadfc*1\uce35\ub9c8\ub2f9\ub113\uc740\uc0c1\uac00\uc784\ub300*",
        "link": "https://www.jejuall.com/CProperty/detail?num=6580970"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6563098.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \ucd94\ucc9c/\uc784\ub300\uc9c0\uc6d0\ud61c\ud0dd/\uc678\ub3c4\uc77c\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uac74\ubb3c\ub0b4\uc8fc\ucc28\ud3b8\ub9ac/\ub2e4\uc591\ud55c\uc5c5\uc885/\ub3d9\ubb3c\ubcd1\uc6d0/\uc74c\uc2dd\uc810",
        "link": "https://www.jejuall.com/CProperty/detail?num=6563098"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6575064.png",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \ud55c\ub77c\uc218\ubaa9\uc6d0\uc778\uadfc/\uc5f0\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uc5f0\ub3d9\uc74c\uc2dd\uc810\uc784\ub300/\uc8fc\ucc28\ud3b8\ub9ac",
        "link": "https://www.jejuall.com/CProperty/detail?num=6575064"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6565611.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc0c1\uac00\uc784\ub300/\uc678\ub3c4\uc0ac\ubb34\uc2e4\uc784\ub300/\uc678\ub3c4\ud559\uc6d0\ubcd1\uc6d0\uc784\ub300\uc6b0\ub300\ud61c\ud0dd\uc788\uc74c/\ud3b8\ub9ac\ud55c\uc804\uc6a9\uc8fc\ucc28/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565611"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6565610.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \uc81c\uc8fc\uacf5\ud56d\uc778\uadfc/\ub300\ud615\uc0c1\uac00\uc784\ub300/\ub178\ucd9c\ucd5c\uc0c1/\uc8fc\ucc28\ud3b8\ub9ac/\ub9c8\ub9ac\ub098\uc0ac\uac70\ub9ac/\ub300\ud615\uc624\ud53c\uc2a4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565610"
      }
    ]
  },
  "land": {
    "title": "\ud1a0\uc9c0",
    "items": [
      {
        "photo": "images/listings/land/land-oil-5968379.jpg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \ud558\ud6a8\ub3d9 \u00b7 \uc11c\uadc0\ud3ec\uc8fc\uac70\uc9c0\uc5ed\ud1a0\uc9c0\ub9e4\ub9e4/\ud6a8\ub3c8\ucd08\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968379"
      },
      {
        "photo": "images/listings/land/land-oil-5968470.jpg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \uc11c\ud638\ub3d9 \u00b7 \uc11c\ud638\ub3d9\ud1a0\uc9c0\ub9e4\ub9e4/2\uc885\uc77c\ubc18\uc8fc\uac70\uc9c0\uc5ed/",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968470"
      },
      {
        "photo": "images/listings/land/land-oil-6533318.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uac00\ub9ac \u00b7 \uc560\uc6d4\uc74d\ub9f9\uc9c0/\uc5f0\ud654\ubabb\uc778\uadfc/\ud558\uac00\ub9ac\ud1a0\uc9c0\ub9e4\ub9e4/\ub354\ub7ed\ucd08",
        "link": "https://www.jejuall.com/CProperty/detail?num=6533318"
      },
      {
        "photo": "images/listings/land/land-oil-6529383.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub3c4\ub0a8\ub3d9 \u00b7 *\ub3c4\ub0a8\ub3d9\ud1a0\uc9c0\ub9e4\ub9e4*\ub3c4\ub0a8\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd,\uc0c1\uac00\uc8fc\ud0dd\uc9c0*\uc81c\uc8fc\ub3c4\ud1a0\uc9c0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6529383"
      },
      {
        "photo": "images/listings/land/land-oil-5922523.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc6a9\ub2f4\uc0bc\ub3d9 \u00b7 \uc6a9\ub2f4\uc8fc\uac70\uc9c0\uc5ed\ud1a0\uc9c0\ub9e4\ub9e4/\ub098\ub300\uc9c0+\uc804/\uc6a9\ub450\uc554\ud574\uc548\ub3c4\ub85c\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=5922523"
      },
      {
        "photo": "images/listings/land/land-oil-6503475.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \uc870\ucc9c\ub9ac \u00b7 *\ucd94\ucc9c*\uc870\ucc9c\ub9ac\uae30\ubc18\uc2dc\uc124\uac16\ucd98\uc18c\ud615\ud1a0\uc9c0\ub9e4\ub9e4*\uc81c\uc8fc\ub3c4\ud1a0\uc9c0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6503475"
      }
    ]
  },
  "warehouse": {
    "title": "\uc0ac\uc5c5\ud655\uc7a5\uc758 \uc5f4\uc1e0 \uc54c\uc9dc \ucc3d\uace0 \ub9e4\ubb3c",
    "items": [
      {
        "photo": "images/listings/warehouse/warehouse-oil-6573530.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub178\ud615\ub3d9 \u00b7 \uc81c\uc8fc\ub3c4\ucc3d\uace0\uc784\ub300/\ub178\ud615\ub3d9\ucc3d\uace0\uc784\ub300/\ucc3d\uace0\ubc0f\uadfc\ub9b0\uc0dd\ud65c\uc2dc\uc124/\ub300\ud615\ucc3d\uace0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573530"
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
        "photo": "images/listings/warehouse/warehouse-oil-6328388.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uc560\uc6d4\ub9ac \u00b7 \uc560\uc6d4\ucc3d\uace0\ub9e4\ub9e4/\uc560\uc6d4\uc2e0\ucd95\uae09\ucc3d\uace0",
        "link": "https://www.jejuall.com/CProperty/detail?num=6328388"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88499185.jpg",
        "desc": "\uc870\ucc9c\uc74d \uc640\ud758\ub9ac \u00b7 \uacf5\uc7a5 \uc81c\uc8fc\ub3c4\uacf5\uc7a5\ub9e4\ub9e4/\uc870\ucc9c\uacf5\uc7a5\ub9e4\ub9e4/ 6,384/311",
        "link": "https://land.jejukcr.com/offer/88499185"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88499145.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ucc3d\uace0 \uc81c\uc8fc\ub3c4\ucc3d\uace0\uc784\ub300/\ub178\ud615\ub3d9\ucc3d\uace0\uc784\ub300/\ucc3d\uace0\ubc0f\uadfc\ub9b0\uc0dd\ud65c\uc2dc\uc124/\ub300\ud615\ucc3d\uace0 2,258/448",
        "link": "https://land.jejukcr.com/offer/88499145"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88499174.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc2e0\uc5c4\ub9ac \u00b7 \ucc3d\uace0 \uc2e0\uc5c4\ub9ac\uc2e0\ucd95\uae09\ucc3d\uace0\uc784\ub300/\uc911\uc0b0\uac04\ub3c4\ub85c\uc778\uadfc 661/166",
        "link": "https://land.jejukcr.com/offer/88499174"
      },
      {
        "photo": "images/listings/warehouse/warehouse-kcr-88000863.png",
        "desc": "\uc624\ub4f1\ub3d9 \u00b7 \ucc3d\uace0 \uc560\uc870\ub85c\uc778\uadfc/\ucc3d\uace0\uc2dc\uc124\ub9e4\ub9e4 1,157/230",
        "link": "https://land.jejukcr.com/offer/88000863"
      }
    ]
  },
  "featured-apt": {
    "title": "\uc778\uae30\ub9cc\uc810 \uc81c\uc8fc \uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-oil-6008100.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8/\uc77c\uc8fc\uc11c\ub85c\uc811/\uc560\uc6d4\uc544\ud30c\ud2b8/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6008100"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6574377.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc28\ubc0d1\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6574377"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6574195.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc774\ub3c4\uc774\ub3d9 \u00b7 \uc774\ub3c4\uc131\uc6d0\uc544\ud30c\ud2b8/\uc774\ub3c4\uc8fc\uacf5\uc778\uadfc/\uc774\ub3c4\uc774\ub3d9\uc544\ud30c\ud2b8/\ub9ac\ubaa8\ub378\ub9c1/\ub0a8\uad11\ucd08/\uc81c\uc8fc\uc77c\uc911",
        "link": "https://www.jejuall.com/CProperty/detail?num=6574195"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6573218.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc77c\ub3c4\uc0bc\uc8fc\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573218"
      },
      {
        "photo": "images/listings/apartment/apt-oil-5991642.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc01\ub9ac \u00b7 \uc560\uc6d4\ud558\uadc0\uae30\ub8e1\ube44\uce58\ud558\uc784\uc544\ud30c\ud2b8\ub9e4\ub9e4/\uc560\uc6d4\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub3c4\uc2dc\uac00\uc2a4\ub09c\ubc29",
        "link": "https://www.jejuall.com/CProperty/detail?num=5991642"
      },
      {
        "photo": "images/listings/apartment/apt-oil-6568530.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \ub300\ub9bc1\ucc28/\uc5f0\ub3d9\ub300\ub9bc1\ucc28\uace0\uce35/\ub300\ub9bc1\ucc28\uc774\ud3b8\ud55c\uc138\uc0c1/\ud55c\ub77c\ucd08/\uc5f0\ub3d9\uc544\ud30c\ud2b8/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8",
        "link": "https://www.jejuall.com/CProperty/detail?num=6559482"
      }
    ]
  },
  "featured-house": {
    "title": "\uc81c\uc8fc\ub85c\ub9dd \uc804\uc6d0\uc8fc\ud0dd/\ud0c0\uc6b4\ud558\uc6b0\uc2a4",
    "items": [
      {
        "photo": "images/listings/house/house-oil-6573083.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uba85\uc6d4\ub9ac \u00b7 *\ud55c\ub9bc\uc62c\ub9ac\ubaa8\ub378\ub9c1\ub2e8\ub3c5\uc8fc\ud0dd*\ud55c\ub9bc\ubbfc\ubc15\uc9d1\uc6b4\uc601*\uba85\uc6d4\uad50\ucc28\ub85c\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573083"
      },
      {
        "photo": "images/listings/house/house-oil-6573072.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uae08\ub2a5\ub9ac \u00b7 \ud55c\ub9bc\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\ub9bc\uc0c1\uac00\uac74\ubb3c\ub9e4\ub9e4/\uae08\ub2a5\ud574\uc218\uc695\uc7a5\uc778\uadfc",
        "link": "https://www.jejuall.com/CProperty/detail?num=6573072"
      },
      {
        "photo": "images/listings/house/house-oil-6565612.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud611\uc7ac\ub9ac \u00b7 \ud55c\ub9bc\ud55c\uc218\ud480\ud0c0\uc6b4\ud558\uc6b0\uc2a4/\ud611\uc7ac\ud480\uc635\uc158\ub144\uc138/\uc81c\uc8fc\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138/\ud0c0\uc6b4\ud558\uc6b0\uc2a4\ub144\uc138",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565612"
      },
      {
        "photo": "images/listings/house/house-oil-6563381.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc77c\ub3c4\uc774\ub3d9 \u00b7 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd/\uad6c\ub3c4\uc2ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc81c\uc8fc\uc2dc\ub2e8\ub3c5\uc8fc\ud0dd",
        "link": "https://www.jejuall.com/CProperty/detail?num=6563381"
      },
      {
        "photo": "images/listings/house/house-oil-6549639.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc0bc\ub3c4\uc77c\ub3d9 \u00b7 \uae09\ub9e4/\uc0bc\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc911\uc559\uc5ec\uc911\uc778\uadfc/\ub9c8\ub2f9\uc788\ub294\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc81c\uc8fc\ub3c4\uad6c\uc625",
        "link": "https://www.jejuall.com/CProperty/detail?num=6549639"
      },
      {
        "photo": "images/listings/house/house-oil-5968317.jpg",
        "desc": "\uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc11c\uad11\ub9ac \u00b7 *\uc11c\uad11\ub9ac\uc2e0\ucd95\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*\uc601\uc5b4\uad50\uc721\ub3c4\uc2dc\uc778\uadfc\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4*\uc11c\uad11\ucd08\uc778\uadfc*",
        "link": "https://www.jejuall.com/CProperty/detail?num=5968317"
      }
    ]
  },
  "featured-sanga": {
    "title": "\uc0c8\ucd9c\ubc1c \ub4e0\ub4e0\ud55c \uc0c1\uac00",
    "items": [
      {
        "photo": "images/listings/sanga/sanga-oil-6581059.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc77c\ub3d9\ucc3d\uace0\uc784\ub300/\uc81c\uc8fc\uc2dc\ucc3d\uace0\uc784\ub300",
        "link": "https://www.jejuall.com/CProperty/detail?num=6581059"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6580970.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \ub0b4\ub3c4\ub3d9 \u00b7 *\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc*\uc54c\uc791\uc9c0\ud574\uc548\ub85c\uc778\uadfc*1\uce35\ub9c8\ub2f9\ub113\uc740\uc0c1\uac00\uc784\ub300*",
        "link": "https://www.jejuall.com/CProperty/detail?num=6580970"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6563098.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \ucd94\ucc9c/\uc784\ub300\uc9c0\uc6d0\ud61c\ud0dd/\uc678\ub3c4\uc77c\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uac74\ubb3c\ub0b4\uc8fc\ucc28\ud3b8\ub9ac/\ub2e4\uc591\ud55c\uc5c5\uc885/\ub3d9\ubb3c\ubcd1\uc6d0/\uc74c\uc2dd\uc810",
        "link": "https://www.jejuall.com/CProperty/detail?num=6563098"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6575064.png",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \ud55c\ub77c\uc218\ubaa9\uc6d0\uc778\uadfc/\uc5f0\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uc5f0\ub3d9\uc74c\uc2dd\uc810\uc784\ub300/\uc8fc\ucc28\ud3b8\ub9ac",
        "link": "https://www.jejuall.com/CProperty/detail?num=6575064"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6565611.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc678\ub3c4\uc0c1\uac00\uc784\ub300/\uc678\ub3c4\uc0ac\ubb34\uc2e4\uc784\ub300/\uc678\ub3c4\ud559\uc6d0\ubcd1\uc6d0\uc784\ub300\uc6b0\ub300\ud61c\ud0dd\uc788\uc74c/\ud3b8\ub9ac\ud55c\uc804\uc6a9\uc8fc\ucc28/",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565611"
      },
      {
        "photo": "images/listings/sanga/sanga-oil-6565610.jpg",
        "desc": "\uc81c\uc8fc\uc2dc \uc5f0\ub3d9 \u00b7 \uc81c\uc8fc\uacf5\ud56d\uc778\uadfc/\ub300\ud615\uc0c1\uac00\uc784\ub300/\ub178\ucd9c\ucd5c\uc0c1/\uc8fc\ucc28\ud3b8\ub9ac/\ub9c8\ub9ac\ub098\uc0ac\uac70\ub9ac/\ub300\ud615\uc624\ud53c\uc2a4",
        "link": "https://www.jejuall.com/CProperty/detail?num=6565610"
      }
    ]
  },
  "hero-apt": {
    "title": "\uc778\uae30\uc788\ub294 \uc81c\uc8fc\ub3c4 \uc544\ud30c\ud2b8",
    "items": [
      {
        "photo": "images/listings/apartment/apt-kcr-88470530.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \ucc28\ubc0d1\ucc28 1\ub3d9 \uc678\ub3c4\uc77c\ub3d9\ucc28\ubc0d1\ucc28\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc678\ub3c4\uc544\ud30c\ud2b8\ub9e4\ub9e4/ 98/84",
        "link": "https://land.jejukcr.com/offer/88470530"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88470458.jpg",
        "desc": "\uc544\ub77c\uc77c\ub3d9 \u00b7 \uc5fc\uad11 4\ub3d9 \uc5fc\uad11\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc62c\ub9ac\ubaa8\ub378\ub9c1/\uc544\ub77c\uc77c\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4 62/46",
        "link": "https://land.jejukcr.com/offer/88470458"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88470456.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub300\uc6d0\uc0c1\ub85d\uc2185\ucc28 1\ub3d9 \ub178\ud615\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub178\ud615\ucd08/\ub300\uc6d0\uc0c1\ub85d\uc2185\ucc28\uc544\ud30c\ud2b8 108/84",
        "link": "https://land.jejukcr.com/offer/88470456"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88470443.jpg",
        "desc": "\uc911\ubb38\ub3d9 \u00b7 \uc911\ubb38\ub0a8\ud574\uc624\ub124\ub728\uc624\uc158\ud790 102\ub3d9 \uc911\ubb38\ub0a8\ud574\uc624\ub124\ub728\uc624\uc158\ud790\uc544\ud30c\ud2b8 \ub9e4\ub9e4/\uc911\ubb38\ucd08/\ub0a8\ud574\uc624\ub124\ub728 109/84",
        "link": "https://land.jejukcr.com/offer/88470443"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88470433.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub178\ud6152\ucc28\uc544\uc774\ud30c\ud06c 202\ub3d9 \ub178\ud6152\ucc28\uc544\uc774\ud30c\ud06c/\ubc294\uac1c/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8\ub9e4\ub9e4/\uc800\uce35 139/115",
        "link": "https://land.jejukcr.com/offer/88470433"
      },
      {
        "photo": "images/listings/apartment/apt-kcr-88470414.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \ub178\ud615\ubca8\ub77c\uc2dc\ud2f0 1\ub3d9 \ub178\ud615\ubca8\ub77c\uc2dc\ud2f0/\uc4f0\ub9ac\ub8f8/\uace0\uce35/\ub178\ud615\uc2e0\ucd95\uc544\ud30c\ud2b8\ub9e4\ub9e4/\ub178\ud615\ub3d9\uc544\ud30c\ud2b8 115/84",
        "link": "https://land.jejukcr.com/offer/88470414"
      }
    ]
  },
  "hero-sanga": {
    "title": "\uc0ac\uc5c5\uc798\ub418\ub294 \uc0c1\uac00 \uc18c\uac1c",
    "items": [
      {
        "photo": "images/listings/sanga/sanga-kcr-88538906.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ucc3d\uace0) \uc678\ub3c4\uc77c\ub3d9\ucc3d\uace0\uc784\ub300/\uc81c\uc8fc\uc2dc\ucc3d\uace0\uc784\ub300 125/125",
        "link": "https://land.jejukcr.com/offer/88538906"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88495549.jpg",
        "desc": "\uc678\ub3c4\uc77c\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\uaf43\uc9d1/\uc57d\uad6d/\uc81c\uacfc/\uc0ac\uc9c4\uad00) \ucd94\ucc9c/\uc678\ub3c4\uc77c\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uac74\ubb3c\ub0b4\uc8fc\ucc28\ud3b8\ub9ac 125/125",
        "link": "https://land.jejukcr.com/offer/88495549"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88495522.jpg",
        "desc": "\ub3c4\ub450\uc774\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ubbf8\uc6a9\uc2e4/\ud654\uc7a5\ud488) \ub3c4\ub450\ud574\uc548\ub3c4\ub85c\uc0c1\uac00\uc784\ub300/\uc81c\uc8fc\uc624\uc158\ubdf0\uc0c1\uac00\uc784\ub300/\ubbf8\uc6a9\uc2e4/\uc6e8\ub529\uc0f5/\uc2a4\ud29c\ub514\uc624 169/169",
        "link": "https://land.jejukcr.com/offer/88495522"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88495504.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ub2e4\uc6a9\ub3c4/\ube48\uc810\ud3ec) \ub178\ud615\ub3d9\uc2e0\ucd95\uc0c1\uac00\uc784\ub300/\ub300\ud615\uc0c1\uac00/\uc81c\uc8fc\uc2dc\ubcd1\uc758\uc6d0/\uc0ac\ubb34\uc2e4\uc784\ub300/ 124/124",
        "link": "https://land.jejukcr.com/offer/88495504"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88495427.jpg",
        "desc": "\ub178\ud615\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ubd80\ub3d9\uc0b0/\uc0ac\ubb34\uc2e4) \ub178\ud615\ub3d91\uce35\uc0c1\uac00\uc784\ub300/\uc18c\ub9e4\uc810/\uc77c\uc8fc\uc11c\ub85c\uc778\uadfc/\uc6d4\ub791\ub9c8\uc744 43/43",
        "link": "https://land.jejukcr.com/offer/88495427"
      },
      {
        "photo": "images/listings/sanga/sanga-kcr-88495398.jpg",
        "desc": "\uc5f0\ub3d9 \u00b7 \uc77c\ubc18\uc0c1\uac00 (\ubd80\ub3d9\uc0b0/\uc0ac\ubb34\uc2e4) \uc81c\uc8fc\uacf5\ud56d\uc778\uadfc/\ub300\ud615\uc0c1\uac00\uc784\ub300/\uc0ac\ubb34\uc2e4/\uc8fc\ucc28\ud3b8\ub9ac/\ub9c8\ub9ac\ub098\uc0ac\uac70\ub9ac 449/449",
        "link": "https://land.jejukcr.com/offer/88495398"
      }
    ]
  },
  "hero-house": {
    "title": "\ub9c8\ub2f9\uc788\ub294 \uc0b6 \ub2e8\ub3c5\uc8fc\ud0dd",
    "items": [
      {
        "photo": "images/listings/house/house-kcr-88005444.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc218\uc0b0\ub9ac \u00b7 \ub2e8\ub3c5 \uc560\uc6d4\uc218\uc0b0\ub9ac\ub3c5\ucc44\ud39c\uc158\ub9e4\ub9e4/SNS\uacc4\uc815\uc778\uacc4/\ub2e8\ub3c52\uac1c\ub3d9\uad6c\uc870 372/162",
        "link": "https://land.jejukcr.com/offer/88005444"
      },
      {
        "photo": "images/listings/house/house-kcr-88539643.jpg",
        "desc": "\uc11c\ud64d\ub3d9 \u00b7 \ub2e8\ub3c5 \uc11c\uadc0\uc11c\ucd08\ub4f1\uc778\uadfc/\uc11c\uadc0\ud3ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc11c\uadc0\ud3ec2\uce35\ub2e8\ub3c5/\uc11c\uadc0\ud3ec\uc2dc\uccad\uc778\uadfc 211/76",
        "link": "https://land.jejukcr.com/offer/88539643"
      },
      {
        "photo": "images/listings/house/house-kcr-88478179.jpg",
        "desc": "\uc774\ud638\uc774\ub3d9 \u00b7 \ub2e8\ub3c5 \uc774\ud638\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138/\uc81c\uc8fc\uc2dc\ub2e8\ub3c5\uc8fc\ud0dd\ub144\uc138 84/84",
        "link": "https://land.jejukcr.com/offer/88478179"
      },
      {
        "photo": "images/listings/house/house-kcr-88454422.jpg",
        "desc": "\ud55c\ub9bc\uc74d \uae08\ub2a5\ub9ac \u00b7 \ub2e8\ub3c5 \ud55c\ub9bc\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\ud55c\ub9bc\uc0c1\uac00\uac74\ubb3c\ub9e4\ub9e4/\uae08\ub2a5\ud574\uc218\uc695\uc7a5\uc778\uadfc 1,857/246",
        "link": "https://land.jejukcr.com/offer/88454422"
      },
      {
        "photo": "images/listings/house/house-kcr-88354903.jpg",
        "desc": "\uc77c\ub3c4\uc774\ub3d9 \u00b7 \ub2e8\ub3c5 \uc778\ud654\ucd08\uc778\uadfc/\uc77c\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd/\uad6c\ub3c4\uc2ec\ub2e8\ub3c5\uc8fc\ud0dd/\uc81c\uc8fc\uc2dc\ub2e8\ub3c5\uc8fc\ud0dd 152/59",
        "link": "https://land.jejukcr.com/offer/88354903"
      },
      {
        "photo": "images/listings/house/house-kcr-88202828.jpg",
        "desc": "\uc0bc\ub3c4\uc774\ub3d9 \u00b7 \ub2e8\ub3c5 \uae09\ub9e4/\uc0bc\ub3c4\uc774\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4/\uc911\uc559\uc5ec\uc911\uc778\uadfc/\ub9c8\ub2f9\uc788\ub294\ub2e8\ub3c5\uc8fc\ud0dd\ub9e4\ub9e4 149",
        "link": "https://land.jejukcr.com/offer/88202828"
      }
    ]
  },
  "hero-villa": {
    "title": "\uba4b\uacfc \uc2e4\uc18d \ud504\ub9ac\ubbf8\uc5c4 \ube4c\ub77c",
    "items": [
      {
        "photo": "images/listings/villa/villa-kcr-88544495.jpg",
        "desc": "\uc624\ub4f1\ub3d9 \u00b7 \ub2e4\uc138\ub300 - \uc624\ub4f1\ud734\uc5482\ucc28 101\ub3d9 \uc624\ub4f1\ud734\uc5482\ucc28/\uc544\ub77c\ucd08\ud559\uad70/\uc81c\uc8fc\uc2dc\uc4f0\ub9ac\ub8f8\ub9e4\ub9e4/\uc81c\uc8fc\ube4c\ub77c\ub9e4\ub9e4 82/72",
        "link": "https://land.jejukcr.com/offer/88544495"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88544461.jpg",
        "desc": "\uc624\ub77c\uc0bc\ub3d9 \u00b7 \ub2e4\uc138\ub300 - \uc9c4\uc544\ud0c0\uc6b42\ucc28 \uac00\ub3d9 \uc624\ub77c\uc0bc\ub3d9\uacf5\ub3d9\uc8fc\ud0dd/\uc624\ub77c\ucd08/\uc624\ub77c\ub3d9\uc4f0\ub9ac\ub8f8\ube4c\ub77c/\uc9c4\uc544\ud0c0\uc6b42\ucc28\ub9e4\ub9e4/ 82/71",
        "link": "https://land.jejukcr.com/offer/88544461"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88544433.jpg",
        "desc": "\ub3c4\ub828\uc77c\ub3d9 \u00b7 \uc5f0\ub9bd - \ub3c4\ub828\ubca8\ub77c\uc2dc\ud2f0 107\ub3d9 \ub3c4\ub828\ubca8\ub77c\uc2dc\ud2f0/\ub3c4\ub828\ucd08/\uc0bc\ud654\uc9c0\uad6c/\ub3c4\uc2dc\uac00\uc2a4 92/64",
        "link": "https://land.jejukcr.com/offer/88544433"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88544429.jpg",
        "desc": "\uc911\ubb38\ub3d9 \u00b7 \uc5f0\ub9bd - \uce74\ub80c\uc2dc\uc544 1\ub3d9 \uace0\uce35\uc624\uc158\ubdf0/\uc9c0\ud558\uc8fc\ucc28\uc7a5/\uc911\ubb38\uce74\ub80c\uc2dc\uc544 137/83",
        "link": "https://land.jejukcr.com/offer/88544429"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88544424.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub2e4\uc138\ub300 - \ub9c8\ud06c\ud790\uc560\uc6d46\ucc28 102\ub3d9 \ub9c8\ud06c\ud790\uc560\uc6d46\ucc28/\ud558\uadc0\uc2e0\ucd95/\ud558\uadc0\ucd08\uadc0\uc77c\uc911/\uc804\uc138\ub300\ud0dc\uc591\uad11\uc2dc\uc124 108/84",
        "link": "https://land.jejukcr.com/offer/88544424"
      },
      {
        "photo": "images/listings/villa/villa-kcr-88544421.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc0c1\uadc0\ub9ac \u00b7 \uc5f0\ub9bd - \ub9c8\ud06c\ud790\uc560\uc6d43\ucc28 3\ub3d9 \ub9c8\ud06c\ud790\uc560\uc6d43\ucc28\uc624\uc158\ubdf0\uc138\ub300/\uc560\uc6d4\uc5f0\ub9bd\uc8fc\ud0dd\ub9e4\ub9e4/\uc560\uc6d4\uc624\uc158\ubdf0\uc8fc\ud0dd 110/89",
        "link": "https://land.jejukcr.com/offer/88544421"
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
        "photo": "images/listings/land/land-kcr-88499283.jpg",
        "desc": "\uc560\uc6d4\uc74d \ud558\uadc02\ub9ac \u00b7 \ub2f5 \ud558\uadc0\ucd08\uc778\uadfc/\uc560\uc6d4\ud574\uc548\ub3c4\ub85c\uc785\uad6c/\uac74\ucd95\ud5c8\uac00\ub4dd/\uc560\uc6d4\ud1a0\uc9c0/\uc81c\uc8fc\ub3c4\ud1a0\uc9c0 1,340",
        "link": "https://land.jejukcr.com/offer/88499283"
      },
      {
        "photo": "images/listings/land/land-kcr-88499283.jpg",
        "desc": "\uc560\uc6d4\uc74d \uc0c1\uadc0\ub9ac \u00b7 \uc784\uc57c \uc560\uc6d4\uc74d\uac74\ucd95\ud5c8\uac00\ub4dd\ud1a0\uc9c0/\uc0c1\uadc0\ub2e8\ub3c5\ubc0f\uadfc\ub9b0\uc2dc\uc124 358",
        "link": "https://land.jejukcr.com/offer/88499269"
      },
      {
        "photo": "images/listings/land/land-kcr-88499283.jpg",
        "desc": "\uc560\uc6d4\uc74d \uad11\ub839\ub9ac \u00b7 \uc7a1\uc885\uc9c0 \ud3c9\ud654\ub85c\uc778\uadfc/\uad11\ub839\ub9ac\uc7a1\uc885\uc9c0/\uc560\uc6d4\ud1a0\uc9c0\ub9e4\ub9e4/\uc560\uc6d4\uc57c\uc801\uc7a5/\uacc4\ud68d\uad00\ub9ac\uc9c0\uc5ed 3,967",
        "link": "https://land.jejukcr.com/offer/88499258"
      },
      {
        "photo": "images/listings/land/land-kcr-88254927.jpg",
        "desc": "\ub3c4\ub0a8\ub3d9 \u00b7 \uacfc\uc218\uc6d0 \ub3c4\ub0a8\ub3d9\ud1a0\uc9c0\ub9e4\ub9e4/\ub3c4\ub0a8\ub3d9\ub2e8\ub3c5\uc8fc\ud0dd,\uc0c1\uac00\uc8fc\ud0dd\uc9c0 1,352",
        "link": "https://land.jejukcr.com/offer/88254927"
      },
      {
        "photo": "images/listings/land/land-kcr-87846714.png",
        "desc": "\uad6c\uc88c\uc74d \uae40\ub155\ub9ac \u00b7 \uc804 \uae40\ub155\uc911\uc778\uadfc/\uc77c\uc8fc\ub3d9\ub85c\uc778\uadfc/\ub18d\uc9c0\ub9e4\ub9e4 479",
        "link": "https://land.jejukcr.com/offer/87846714"
      },
      {
        "photo": "images/listings/land/land-kcr-87846631.png",
        "desc": "\uc774\ub3c4\uc774\ub3d9 \u00b7 \uc784\uc57c \uc774\ub3c4\ud55c\uc77c\ubca0\ub77c\uccb4\uc778\uadfc/\uc784\uc57c\ub9e4\ub9e4/\uae30\ubc18\uc2dc\uc124\uc788\uc74c 496",
        "link": "https://land.jejukcr.com/offer/87846631"
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
    if (!SHEET_CSV_URL) return;
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
