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
  var LISTING_DATA = {
    "nohyeong-apt": {
      "title": "아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-oil-5926717.jpg",
          "desc": "동홍동 · 동홍동센트레빌아파트 매매 · 서귀포신축급아파트매매 · 서귀포아파트매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926717"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6510223.jpg",
          "desc": "삼도일동 · 서사라사거리 · 한성베르뜨2차아파트매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6510223"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6507990.jpg",
          "desc": "외도일동 · 외도에이스아크로빌2차아파트 매매 · 외도아파트매매 · 도시가스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507990"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6507944.jpg",
          "desc": "외도일동 · 외도부영1차아파트 · 리모델링세대 · 배관교체 · 외도부영아파트고층",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507944"
        },
        {
          "photo": "images/listings/apartment/apt-oil-5926741.jpg",
          "desc": "오라이동 · 오등봉위파크제주1단지분양권84B · 오라이동위파크 · 고층 · 무피 · 전망좋음",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926741"
        },
        {
          "photo": "images/listings/apartment/apt-oil-5926732.jpg",
          "desc": "도남동 · 이도주공인근 · 영산홍아파트 매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926732"
        }
      ]
    },
    "presale": {
      "title": "분양",
      "emptyMessage": "현재 등록된 분양권 매물이 없습니다.",
      "items": []
    },
    "samhwa-house": {
      "title": "주택",
      "items": [
        {
          "photo": "images/listings/house/house-oil-5928113.jpg",
          "desc": "연동 · 연동신제주초인근 · 연동단독주택매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5928113"
        },
        {
          "photo": "images/listings/house/house-oil-5935161.jpg",
          "desc": "이도이동 · 제주시청인근 · 이도이동단독주택매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5935161"
        },
        {
          "photo": "images/listings/house/house-oil-6498565.jpg",
          "desc": "구좌읍 세화리 · 구좌읍단독주택매매 · 세화리주택매매 · 제주도세컨하우스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6498565"
        },
        {
          "photo": "images/listings/house/house-oil-5920263.jpg",
          "desc": "아라이동 · 아라이동단독주택매매 · 아라아이파크인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=5920263"
        },
        {
          "photo": "images/listings/house/house-oil-6493984.jpg",
          "desc": "외도일동 · 외도단독주택매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6493984"
        },
        {
          "photo": "images/listings/house/house-oil-6493980.jpg",
          "desc": "오등동 · 오등동고급타운하우스*제주도고급타운하우스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6493980"
        }
      ]
    },
    "villa": {
      "title": "빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-oil-6513982.jpg",
          "desc": "한림읍 옹포리 · 한림고 · 옹포리서해파스텔복층매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6513982"
        },
        {
          "photo": "images/listings/villa/villa-oil-6513924.jpg",
          "desc": "한림읍 옹포리 · 한림고 · 옹포리서해파스텔 · 한림쓰리룸",
          "link": "https://www.jejuall.com/CProperty/detail?num=6513924"
        },
        {
          "photo": "images/listings/villa/villa-oil-6504002.jpg",
          "desc": "애월읍 상귀리 · 마크힐애월2차 · 탑층 · 오션뷰 · 서부경찰서인근 · 전자제품옵션",
          "link": "https://www.jejuall.com/CProperty/detail?num=6504002"
        },
        {
          "photo": "images/listings/villa/villa-oil-6506326.jpg",
          "desc": "외도일동 · 외도오렌지카운티매매 · 외도분리형원룸매매 · 제주시원룸매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6506326"
        },
        {
          "photo": "images/listings/villa/villa-oil-6506307.jpg",
          "desc": "오라이동 · 오라이동정실 · 노브힐하우스오라매매 · 제주시고급형주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=6506307"
        },
        {
          "photo": "images/listings/villa/villa-oil-6506287.jpg",
          "desc": "삼도일동 · 중앙초등인근 · 삼도이동서아빌라 · 삼도이동복층형투룸매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6506287"
        }
      ]
    },
    "nohyeong-oneroom": {
      "title": "딱 필요한 만큼 원룸 투룸",
      "items": [
        {
          "photo": "images/listings/oneroom/oneroom-oil-6496762.jpg",
          "desc": "일도이동 · 인화초인근 · 일도지구 · 인제 · 일도이동투룸년세",
          "link": "https://www.jejuall.com/CProperty/detail?num=6496762"
        },
        {
          "photo": "images/listings/oneroom/oneroom-oil-6486882.jpg",
          "desc": "일도이동 · 인화초인근 · 일도지구 · 인제 · 일도이동투룸년세",
          "link": "https://www.jejuall.com/CProperty/detail?num=6486882"
        },
        {
          "photo": "images/listings/oneroom/oneroom-oil-6474354.jpg",
          "desc": "한림읍 금능리 · 한림분리형원룸 · 넓고깨끗한분리형원룸 · 금능해수욕장",
          "link": "https://www.jejuall.com/CProperty/detail?num=6474354"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845568.jpg",
          "desc": "일도이동 다가구형 투룸",
          "link": "https://land.jejukcr.com/offer/87845568"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845554.jpg",
          "desc": "아라일동 다가구형 원룸",
          "link": "https://land.jejukcr.com/offer/87845554"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845490.jpg",
          "desc": "한림읍 다가구형 투베이",
          "link": "https://land.jejukcr.com/offer/87845490"
        }
      ]
    },
    "sinsigaji-sanga": {
      "title": "상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6507965.jpg",
          "desc": "외도일동 · 외도상가임대 · 외도사무실임대 · 외도학원병원임대우대혜택있음 · 편리한전용주차",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507965"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6507915.jpg",
          "desc": "외도일동 · 추천 · 임대지원혜택 · 외도일동1층상가임대 · 건물내주차편리 · 다양한업종 · 동물병원 · 음식점",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507915"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6507237.jpg",
          "desc": "외도일동 · 제주상가건물매매 · 외도일동상가건물매매 · 공실없음 · 주차장완비",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507237"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6507236.jpg",
          "desc": "구좌읍 평대리 · 구좌바다뷰상가임대*해안도로상가임대(임대료협의가능)*뷰최상*최신시설무권리*오션뷰카페",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507236"
        },
        {
          "photo": "images/listings/no-photo.jpg",
          "desc": "서홍동 · 서귀포시천지연폭포인근 · 서귀포상가건물매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5933153"
        },
        {
          "photo": "images/listings/no-photo.jpg",
          "desc": "노형동 · 노형동상가건물매매*병의원입점*노형2지구공실없는건물매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5933234"
        }
      ]
    },
    "land": {
      "title": "토지",
      "items": [
        {
          "photo": "images/listings/no-photo.jpg",
          "desc": "애월읍 하가리 · 애월읍맹지 · 연화못인근 · 하가리토지매매 · 더럭초",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507240"
        },
        {
          "photo": "images/listings/land/land-oil-5922523.jpg",
          "desc": "용담삼동 · 용담주거지역토지매매 · 나대지+전 · 용두암해안도로인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=5922523"
        },
        {
          "photo": "images/listings/land/land-oil-6503475.jpg",
          "desc": "조천읍 조천리 · 추천*조천리기반시설갖춘소형토지매매*제주도토지",
          "link": "https://www.jejuall.com/CProperty/detail?num=6503475"
        },
        {
          "photo": "images/listings/land/land-oil-5879452.jpg",
          "desc": "외도일동 · 외도일동토지매매 · 높은지대한라산뷰 · 투자용추천 · 외도신축빌라단지경계",
          "link": "https://www.jejuall.com/CProperty/detail?num=5879452"
        },
        {
          "photo": "images/listings/land/land-oil-5865817.png",
          "desc": "이도이동 · 이도한일베라체인근 · 임야매매 · 기반시설있음",
          "link": "https://www.jejuall.com/CProperty/detail?num=5865817"
        },
        {
          "photo": "images/listings/land/land-oil-5865871.jpg",
          "desc": "중문동 · 서귀포중문토지매매*서귀포농지매매*중문관광단지인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=5865871"
        }
      ]
    },
    "warehouse": {
      "title": "사업확장의 열쇠 알짜 창고 매물",
      "items": [
        {
          "photo": "images/listings/warehouse/warehouse-oil-6486884.jpg",
          "desc": "애월읍 신엄리 · 신엄리신축급창고임대 · 중산간도로인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=6486884"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-6404017.jpg",
          "desc": "조천읍 와흘리 · 제주도공장매매 · 조천공장매매 · 3306m2공장용지",
          "link": "https://www.jejuall.com/CProperty/detail?num=6404017"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-6328388.jpg",
          "desc": "애월읍 애월리 · 애월창고매매 · 애월신축급창고",
          "link": "https://www.jejuall.com/CProperty/detail?num=6328388"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-4762800.png",
          "desc": "오등동 · 애조로인근*창고시설매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=4762800"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-87808568.jpg",
          "desc": "조천읍 공장",
          "link": "https://land.jejukcr.com/offer/87808568"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-87684424.jpg",
          "desc": "애월읍 창고",
          "link": "https://land.jejukcr.com/offer/87684424"
        }
      ]
    },
    "featured-apt": {
      "title": "인기만점 제주 아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-oil-5926717.jpg",
          "desc": "[오일장] 동홍동 · 동홍동센트레빌아파트 매매 · 서귀포신축급아파트매매 · 서귀포아파트매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926717"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6510223.jpg",
          "desc": "[오일장] 삼도일동 · 서사라사거리 · 한성베르뜨2차아파트매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6510223"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6507990.jpg",
          "desc": "[오일장] 외도일동 · 외도에이스아크로빌2차아파트 매매 · 외도아파트매매 · 도시가스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507990"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845801.jpg",
          "desc": "[교차로] 아라일동 염광 4동",
          "link": "https://land.jejukcr.com/offer/87845801"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845765.jpg",
          "desc": "[교차로] 노형동 대원상록수5차 1동",
          "link": "https://land.jejukcr.com/offer/87845765"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845723.jpg",
          "desc": "[교차로] 삼도일동 한성베르뜨2차 1동",
          "link": "https://land.jejukcr.com/offer/87845723"
        }
      ]
    },
    "featured-house": {
      "title": "제주로망 전원주택/타운하우스",
      "items": [
        {
          "photo": "images/listings/house/house-oil-5928113.jpg",
          "desc": "[오일장] 연동 · 연동신제주초인근 · 연동단독주택매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5928113"
        },
        {
          "photo": "images/listings/house/house-oil-5935161.jpg",
          "desc": "[오일장] 이도이동 · 제주시청인근 · 이도이동단독주택매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5935161"
        },
        {
          "photo": "images/listings/house/house-oil-6498565.jpg",
          "desc": "[오일장] 구좌읍 세화리 · 구좌읍단독주택매매 · 세화리주택매매 · 제주도세컨하우스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6498565"
        },
        {
          "photo": "images/listings/house/house-kcr-87808930.jpg",
          "desc": "[교차로] 삼도이동 단독",
          "link": "https://land.jejukcr.com/offer/87808930"
        },
        {
          "photo": "images/listings/house/house-kcr-87846701.jpg",
          "desc": "[교차로] 한림읍 단독",
          "link": "https://land.jejukcr.com/offer/87846701"
        },
        {
          "photo": "images/listings/house/house-kcr-87846251.jpg",
          "desc": "[교차로] 해안동 단독",
          "link": "https://land.jejukcr.com/offer/87846251"
        }
      ]
    },
    "featured-sanga": {
      "title": "새출발 든든한 상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6507965.jpg",
          "desc": "[오일장] 외도일동 · 외도상가임대 · 외도사무실임대 · 외도학원병원임대우대혜택있음 · 편리한전용주차",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507965"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6507915.jpg",
          "desc": "[오일장] 외도일동 · 추천 · 임대지원혜택 · 외도일동1층상가임대 · 건물내주차편리 · 다양한업종 · 동물병원 · 음식점",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507915"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6507237.jpg",
          "desc": "[오일장] 외도일동 · 제주상가건물매매 · 외도일동상가건물매매 · 공실없음 · 주차장완비",
          "link": "https://www.jejuall.com/CProperty/detail?num=6507237"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808747.jpg",
          "desc": "[교차로] 도남동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808747"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808709.jpg",
          "desc": "[교차로] 노형동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808709"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808579.jpg",
          "desc": "[교차로] 외도일동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808579"
        }
      ]
    },
    "hero-apt": {
      "title": "인기있는 제주도 아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-kcr-87845801.jpg",
          "desc": "아라일동 염광 4동",
          "link": "https://land.jejukcr.com/offer/87845801"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845765.jpg",
          "desc": "노형동 대원상록수5차 1동",
          "link": "https://land.jejukcr.com/offer/87845765"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845723.jpg",
          "desc": "삼도일동 한성베르뜨2차 1동",
          "link": "https://land.jejukcr.com/offer/87845723"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845705.jpg",
          "desc": "노형동 노형벨라시티 1동",
          "link": "https://land.jejukcr.com/offer/87845705"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87762986.jpg",
          "desc": "중문동 중문남해오네뜨오션힐 102동",
          "link": "https://land.jejukcr.com/offer/87762986"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87762972.jpg",
          "desc": "노형동 노형아이파크 4동",
          "link": "https://land.jejukcr.com/offer/87762972"
        }
      ]
    },
    "hero-sanga": {
      "title": "사업잘되는 상가 소개",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-kcr-87808747.jpg",
          "desc": "도남동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808747"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808709.jpg",
          "desc": "노형동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808709"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808579.jpg",
          "desc": "외도일동 일반상가",
          "link": "https://land.jejukcr.com/offer/87808579"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87722969.jpg",
          "desc": "노형동 일반상가",
          "link": "https://land.jejukcr.com/offer/87722969"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87722921.jpg",
          "desc": "연동 일반상가",
          "link": "https://land.jejukcr.com/offer/87722921"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87722916.jpg",
          "desc": "외도일동 일반상가",
          "link": "https://land.jejukcr.com/offer/87722916"
        }
      ]
    },
    "hero-house": {
      "title": "마당있는 삶 단독주택",
      "items": [
        {
          "photo": "images/listings/house/house-kcr-87808930.jpg",
          "desc": "삼도이동 단독",
          "link": "https://land.jejukcr.com/offer/87808930"
        },
        {
          "photo": "images/listings/house/house-kcr-87846701.jpg",
          "desc": "한림읍 단독",
          "link": "https://land.jejukcr.com/offer/87846701"
        },
        {
          "photo": "images/listings/house/house-kcr-87846251.jpg",
          "desc": "해안동 단독",
          "link": "https://land.jejukcr.com/offer/87846251"
        },
        {
          "photo": "images/listings/house/house-kcr-87846239.jpg",
          "desc": "한경면 단독",
          "link": "https://land.jejukcr.com/offer/87846239"
        },
        {
          "photo": "images/listings/house/house-kcr-87841426.jpg",
          "desc": "한림읍 단독",
          "link": "https://land.jejukcr.com/offer/87841426"
        },
        {
          "photo": "images/listings/house/house-kcr-87808917.jpg",
          "desc": "아라이동 단독",
          "link": "https://land.jejukcr.com/offer/87808917"
        }
      ]
    },
    "hero-villa": {
      "title": "멋과 실속 프리미엄 빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-kcr-87809059.jpg",
          "desc": "애월읍 다세대",
          "link": "https://land.jejukcr.com/offer/87809059"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87809042.jpg",
          "desc": "애월읍 연립",
          "link": "https://land.jejukcr.com/offer/87809042"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87746413.jpg",
          "desc": "오라삼동 다세대",
          "link": "https://land.jejukcr.com/offer/87746413"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87744903.jpg",
          "desc": "오등동 다세대",
          "link": "https://land.jejukcr.com/offer/87744903"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87716389.jpg",
          "desc": "애월읍 연립",
          "link": "https://land.jejukcr.com/offer/87716389"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87716358.jpg",
          "desc": "애월읍 연립",
          "link": "https://land.jejukcr.com/offer/87716358"
        }
      ]
    },
    "hero-presale": {
      "title": "투자자가 먼저 아는 신축 분양",
      "emptyMessage": "현재 등록된 분양권 매물이 없습니다.",
      "items": []
    },
    "hero-land": {
      "title": "마음에 쏙 제주토지",
      "items": [
        {
          "photo": "images/listings/land/land-kcr-87808672.jpg",
          "desc": "애월읍 임야",
          "link": "https://land.jejukcr.com/offer/87808672"
        },
        {
          "photo": "images/listings/land/land-kcr-87808587.jpg",
          "desc": "도남동 과수원",
          "link": "https://land.jejukcr.com/offer/87808587"
        },
        {
          "photo": "images/listings/no-photo.jpg",
          "desc": "구좌읍 전",
          "link": "https://land.jejukcr.com/offer/87846714"
        },
        {
          "photo": "images/listings/land/land-kcr-87846631.png",
          "desc": "이도이동 임야",
          "link": "https://land.jejukcr.com/offer/87846631"
        },
        {
          "photo": "images/listings/land/land-kcr-87846566.jpg",
          "desc": "해안동 과수원",
          "link": "https://land.jejukcr.com/offer/87846566"
        },
        {
          "photo": "images/listings/land/land-kcr-87846542.jpg",
          "desc": "애월읍 전",
          "link": "https://land.jejukcr.com/offer/87846542"
        }
      ]
    }
  };

  // ===== 구글 폼/시트 연동 (실제 매물 자동 반영) =====
  // 대표님이 구글 폼을 만들고 응답 시트를 "웹에 게시(CSV)" 하신 뒤,
  // 그 URL을 아래 SHEET_CSV_URL 에 넣으면 폼에 등록하는 즉시 모달에 자동 반영됩니다.
  // 비워두면(기본값) 지금처럼 예시 데이터가 계속 보입니다 — 켜고 끄는 스위치 역할.
  var SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH1IjfKscO2Zv94YvVxTmIRumzx7rgb9ZtE7qw4itU2EQ6ccuXDFJKSCk9hJ3GRn5ZHiUvtz3KIWPs/pub?gid=91521370&single=true&output=csv";

  // 구글 폼 "매물유형" × "노출 위치" 조합 → 사이트 내부 카테고리 키 매핑
  // (각 위치별로 서로 다른 카테고리 키를 쓰기 때문에, 같은 매물이어도
  //  전문분야 / 대표매물 / 추천매물에 각각 독립적으로 쌓입니다)
  var TYPE_LOCATION_TO_KEY = {
    "아파트": { "전문분야": "nohyeong-apt", "대표매물": "featured-apt", "추천매물": "hero-apt" },
    "분양": { "전문분야": "presale" },
    "주택": { "전문분야": "samhwa-house", "대표매물": "featured-house", "추천매물": "hero-house" },
    "빌라": { "전문분야": "villa", "추천매물": "hero-villa" },
    "원룸·투룸": { "전문분야": "nohyeong-oneroom" },
    "원룸투룸": { "전문분야": "nohyeong-oneroom" },
    "상가": { "전문분야": "sinsigaji-sanga", "대표매물": "featured-sanga", "추천매물": "hero-sanga" },
    "토지": { "전문분야": "land", "추천매물": "hero-land" },
    "창고": { "전문분야": "warehouse" }
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
