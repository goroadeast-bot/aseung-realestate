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
  // 2026-10-05: 오일장·제주교차로 최신 유형별 순위를 반영.
  var LISTING_DATA =   {
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
          "photo": "images/listings/apartment/apt-oil-5926741.jpg",
          "desc": "오라이동 · 오등봉위파크제주1단지분양권84B · 오라이동위파크 · 고층 · 무피 · 전망좋음",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926741"
        },
        {
          "photo": "images/listings/apartment/apt-oil-5926732.jpg",
          "desc": "도남동 · 이도주공인근 · 영산홍아파트 매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926732"
        },
        {
          "photo": "images/listings/no-photo.jpg",
          "desc": "동홍동 · 동홍주공1단지아파트 매매 · 리모델링,즉시입주",
          "link": "https://www.jejuall.com/CProperty/detail?num=5926750"
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
          "photo": "images/listings/house/house-oil-5951095.jpg",
          "desc": "도평동 · 도평동단독주택매매 · 노형생활권 · 제주시전원주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=5951095"
        },
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
        }
      ]
    },
    "villa": {
      "title": "빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-oil-6526178.jpg",
          "desc": "노형동 · 노형동복층다세대주택매매 · 쓰리룸매매 · 엔알파라디빌7차",
          "link": "https://www.jejuall.com/CProperty/detail?num=6526178"
        },
        {
          "photo": "images/listings/villa/villa-oil-6526177.jpg",
          "desc": "노형동 · 이안더프리미스노형매매 · 노형동신축빌라매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6526177"
        },
        {
          "photo": "images/listings/villa/villa-oil-6526176.jpg",
          "desc": "도평동 · 도평동JDS빌리지매매 · jds빌리지 · 올리모델링 · 잔디마당",
          "link": "https://www.jejuall.com/CProperty/detail?num=6526176"
        },
        {
          "photo": "images/listings/villa/villa-oil-6520575.jpg",
          "desc": "애월읍 광령리 · 애월읍광령리투룸매매 · 제일빌리지 · 리모델링세대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6520575"
        },
        {
          "photo": "images/listings/villa/villa-oil-6518121.jpg",
          "desc": "외도일동 · 외도오렌지카운티매매 · 외도분리형원룸매매 · 제주시원룸매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6518121"
        },
        {
          "photo": "images/listings/villa/villa-oil-6515976.jpg",
          "desc": "노형동 · 마크힐노형매매 · 마크힐노형탑층 · 노형동신축빌라",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515976"
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
          "desc": "일도이동 다가구형 투룸 · 인화초인근 · 일도지구 · 인제 · 일도이동투룸년세",
          "link": "https://land.jejukcr.com/offer/87845568"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845554.jpg",
          "desc": "아라일동 다가구형 원룸 · 제대인근 · 소형반려동물가능 · 아라일동원룸임대",
          "link": "https://land.jejukcr.com/offer/87845554"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845490.jpg",
          "desc": "한림읍 다가구형 투베이 · 한림분리형원룸 · 넓고깨끗한분리형원룸 · 금능해수욕장",
          "link": "https://land.jejukcr.com/offer/87845490"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87845444.jpg",
          "desc": "일도이동 다가구형 투룸 · 인화초인근 · 일도지구 · 인제 · 일도이동투룸년세",
          "link": "https://land.jejukcr.com/offer/87845444"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-87343619.jpg",
          "desc": "아라일동 다가구형 원룸 · 제대인근 · 소형반려동물가능 · 아라일동원룸임대",
          "link": "https://land.jejukcr.com/offer/87343619"
        }
      ]
    },
    "sinsigaji-sanga": {
      "title": "상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6515954.jpg",
          "desc": "노형동 · 노형동신축상가임대 · 대형상가 · 제주시병의원 · 사무실임대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515954"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6515939.jpg",
          "desc": "노형동 · 노형동상가임대 · 노형오거리상가 · 노형카페임대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515939"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6515924.jpg",
          "desc": "노형동 · 노형동1층상가임대 · 소매점 · 사무실 · 미용실 · 카페 · 한라대인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515924"
        },
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
          "photo": "images/listings/warehouse/warehouse-kcr-87876439.jpg",
          "desc": "애월읍 창고 · 신엄리신축급창고임대 · 중산간도로인근",
          "link": "https://land.jejukcr.com/offer/87876439"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-87876425.jpg",
          "desc": "조천읍 공장 · 제주도공장매매 · 조천공장매매",
          "link": "https://land.jejukcr.com/offer/87876425"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-87575831.jpg",
          "desc": "애월읍 창고 · 애월창고매매 · 애월창고근생매매 · 신축급",
          "link": "https://land.jejukcr.com/offer/87575831"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-86340150.png",
          "desc": "오등동 창고 · 애조로인근 · 창고시설매매",
          "link": "https://land.jejukcr.com/offer/86340150"
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
          "desc": "[교차로] 아라일동 염광 4동 · 염광아파트 매매 · 올리모델링 · 아라일동아파트매매",
          "link": "https://land.jejukcr.com/offer/87845801"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845765.jpg",
          "desc": "[교차로] 노형동 대원상록수5차 1동 · 노형동아파트매매 · 노형초 · 대원상록수5차아파트",
          "link": "https://land.jejukcr.com/offer/87845765"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845723.jpg",
          "desc": "[교차로] 삼도일동 한성베르뜨2차 1동 · 서사라사거리 · 한성베르뜨2차아파트매매",
          "link": "https://land.jejukcr.com/offer/87845723"
        }
      ]
    },
    "featured-house": {
      "title": "제주로망 전원주택/타운하우스",
      "items": [
        {
          "photo": "images/listings/house/house-oil-5951095.jpg",
          "desc": "[오일장] 도평동 · 도평동단독주택매매 · 노형생활권 · 제주시전원주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=5951095"
        },
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
          "photo": "images/listings/house/house-kcr-87876898.jpg",
          "desc": "[교차로] 애월읍 단독 · 애월수산리독채펜션매매 · SNS계정인계 · 단독2개동구조",
          "link": "https://land.jejukcr.com/offer/87876898"
        },
        {
          "photo": "images/listings/house/house-kcr-87876941.jpg",
          "desc": "[교차로] 이도이동 단독 · 이도이동단독주택매매 · 남광초인근단독",
          "link": "https://land.jejukcr.com/offer/87876941"
        },
        {
          "photo": "images/listings/house/house-kcr-87876917.jpg",
          "desc": "[교차로] 구좌읍 단독 · 구좌읍단독주택 · 제주도전원주택 · 월정리인근 · 제주도단독주택",
          "link": "https://land.jejukcr.com/offer/87876917"
        }
      ]
    },
    "featured-sanga": {
      "title": "새출발 든든한 상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6515954.jpg",
          "desc": "[오일장] 노형동 · 노형동신축상가임대 · 대형상가 · 제주시병의원 · 사무실임대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515954"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6515939.jpg",
          "desc": "[오일장] 노형동 · 노형동상가임대 · 노형오거리상가 · 노형카페임대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515939"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6515924.jpg",
          "desc": "[오일장] 노형동 · 노형동1층상가임대 · 소매점 · 사무실 · 미용실 · 카페 · 한라대인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=6515924"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87876869.jpg",
          "desc": "[교차로] 노형동 일반상가 · 노형동신축상가임대 · 대형상가 · 제주시병의원 · 사무실임대",
          "link": "https://land.jejukcr.com/offer/87876869"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808747.jpg",
          "desc": "[교차로] 도남동 일반상가 · 도남초인근 · 해모로리치힐아파트인근 · 주차편리 · 4층상가임대 · 카페 · 프랜차이즈 · 사",
          "link": "https://land.jejukcr.com/offer/87808747"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808709.jpg",
          "desc": "[교차로] 노형동 일반상가 · 노형동1층상가임대 · 소매점 · 일주서로인근 · 월랑마을",
          "link": "https://land.jejukcr.com/offer/87808709"
        }
      ]
    },
    "hero-apt": {
      "title": "인기있는 제주도 아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-kcr-87845801.jpg",
          "desc": "아라일동 염광 4동 · 염광아파트 매매 · 올리모델링 · 아라일동아파트매매",
          "link": "https://land.jejukcr.com/offer/87845801"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845765.jpg",
          "desc": "노형동 대원상록수5차 1동 · 노형동아파트매매 · 노형초 · 대원상록수5차아파트",
          "link": "https://land.jejukcr.com/offer/87845765"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845723.jpg",
          "desc": "삼도일동 한성베르뜨2차 1동 · 서사라사거리 · 한성베르뜨2차아파트매매",
          "link": "https://land.jejukcr.com/offer/87845723"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87845705.jpg",
          "desc": "노형동 노형벨라시티 1동 · 노형벨라시티 · 쓰리룸 · 고층 · 노형신축아파트매매 · 노형동아파트",
          "link": "https://land.jejukcr.com/offer/87845705"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87762986.jpg",
          "desc": "중문동 중문남해오네뜨오션힐 102동 · 중문남해오네뜨오션힐아파트 매매 · 중문초 · 남해오네뜨",
          "link": "https://land.jejukcr.com/offer/87762986"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-87762972.jpg",
          "desc": "노형동 노형아이파크 4동 · 노형아이파크아파트 매매 · 한라초 · 제주시아파트 · 노형동아파트",
          "link": "https://land.jejukcr.com/offer/87762972"
        }
      ]
    },
    "hero-sanga": {
      "title": "사업잘되는 상가 소개",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-kcr-87876869.jpg",
          "desc": "노형동 일반상가 · 노형동신축상가임대 · 대형상가 · 제주시병의원 · 사무실임대",
          "link": "https://land.jejukcr.com/offer/87876869"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808747.jpg",
          "desc": "도남동 일반상가 · 도남초인근 · 해모로리치힐아파트인근 · 주차편리 · 4층상가임대 · 카페 · 프랜차이즈 · 사",
          "link": "https://land.jejukcr.com/offer/87808747"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808709.jpg",
          "desc": "노형동 일반상가 · 노형동1층상가임대 · 소매점 · 일주서로인근 · 월랑마을",
          "link": "https://land.jejukcr.com/offer/87808709"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87808579.jpg",
          "desc": "외도일동 일반상가 · 외도상가임대 · 외도사무실임대 · 외도학원병원임대우대혜택있음 · 편리한전용주차",
          "link": "https://land.jejukcr.com/offer/87808579"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87722921.jpg",
          "desc": "연동 일반상가 · 제주공항인근 · 대형상가임대 · 사무실 · 주차편리 · 마리나사거리",
          "link": "https://land.jejukcr.com/offer/87722921"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-87722916.jpg",
          "desc": "외도일동 일반상가 · 추천 · 외도일동1층상가임대 · 건물내주차편리",
          "link": "https://land.jejukcr.com/offer/87722916"
        }
      ]
    },
    "hero-house": {
      "title": "마당있는 삶 단독주택",
      "items": [
        {
          "photo": "images/listings/house/house-kcr-87876898.jpg",
          "desc": "애월읍 단독 · 애월수산리독채펜션매매 · SNS계정인계 · 단독2개동구조",
          "link": "https://land.jejukcr.com/offer/87876898"
        },
        {
          "photo": "images/listings/house/house-kcr-87876941.jpg",
          "desc": "이도이동 단독 · 이도이동단독주택매매 · 남광초인근단독",
          "link": "https://land.jejukcr.com/offer/87876941"
        },
        {
          "photo": "images/listings/house/house-kcr-87876917.jpg",
          "desc": "구좌읍 단독 · 구좌읍단독주택 · 제주도전원주택 · 월정리인근 · 제주도단독주택",
          "link": "https://land.jejukcr.com/offer/87876917"
        },
        {
          "photo": "images/listings/house/house-kcr-87876886.jpg",
          "desc": "애월읍 단독 · 애월펜션임대 · 신엄리펜션임대 · 애월해안로인근",
          "link": "https://land.jejukcr.com/offer/87876886"
        },
        {
          "photo": "images/listings/house/house-kcr-87876879.jpg",
          "desc": "애월읍 단독 · 애월단독주택 · 애월읍전원주택 · 제주도전원주택",
          "link": "https://land.jejukcr.com/offer/87876879"
        },
        {
          "photo": "images/listings/house/house-kcr-87876634.jpg",
          "desc": "조천읍 단독 · 신촌초인근 · 단독주택2동 · 농지포함 · 제주도단독주택 · 전원주택",
          "link": "https://land.jejukcr.com/offer/87876634"
        }
      ]
    },
    "hero-villa": {
      "title": "멋과 실속 프리미엄 빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-kcr-87965102.jpg",
          "desc": "애월읍 다세대 · 마크힐애월6차 · 하귀신축 · 하귀초귀일중 · 전세대태양광시설",
          "link": "https://land.jejukcr.com/offer/87965102"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87965093.jpg",
          "desc": "오등동 다세대 · 오등휴안2차 · 아라초학군 · 제주시쓰리룸매매 · 제주빌라매매",
          "link": "https://land.jejukcr.com/offer/87965093"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87965042.jpg",
          "desc": "오라삼동 다세대 · 오라삼동공동주택 · 오라초 · 오라동쓰리룸빌라 · 진아타운2차매매",
          "link": "https://land.jejukcr.com/offer/87965042"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87965033.jpg",
          "desc": "삼도일동 다세대 · 중앙초등인근 · 삼도이동서아빌라 · 삼도이동쓰리룸매매 · 즉시입주가능",
          "link": "https://land.jejukcr.com/offer/87965033"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87965027.jpg",
          "desc": "노형동 다세대 · 노형동복층다세대주택매매 · 쓰리룸매매 · 엔알파라디빌7차",
          "link": "https://land.jejukcr.com/offer/87965027"
        },
        {
          "photo": "images/listings/villa/villa-kcr-87965014.jpg",
          "desc": "노형동 연립 · 마크힐노형매매 · 마크힐노형탑층 · 노형동신축빌라",
          "link": "https://land.jejukcr.com/offer/87965014"
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
          "desc": "애월읍 임야 · 애월읍건축허가득토지 · 상귀단독및근린시설",
          "link": "https://land.jejukcr.com/offer/87808672"
        },
        {
          "photo": "images/listings/land/land-kcr-87808587.jpg",
          "desc": "도남동 과수원 · 도남동토지매매 · 도남동단독주택,상가주택지",
          "link": "https://land.jejukcr.com/offer/87808587"
        },
        {
          "photo": "images/listings/land/land-kcr-87846714.jpg",
          "desc": "구좌읍 전 · 김녕중인근 · 일주동로인근 · 농지매매",
          "link": "https://land.jejukcr.com/offer/87846714"
        },
        {
          "photo": "images/listings/land/land-kcr-87846631.png",
          "desc": "이도이동 임야 · 이도한일베라체인근 · 임야매매 · 기반시설있음",
          "link": "https://land.jejukcr.com/offer/87846631"
        },
        {
          "photo": "images/listings/land/land-kcr-87846566.jpg",
          "desc": "해안동 과수원 · 해안동과수원매매 · 해안동단독주택지추천 · 해안초쪽",
          "link": "https://land.jejukcr.com/offer/87846566"
        },
        {
          "photo": "images/listings/land/land-kcr-87846542.jpg",
          "desc": "애월읍 전 · 광령리농지매매",
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
