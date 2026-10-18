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
  var LISTING_DATA = {
    "nohyeong-apt": {
      "title": "아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-oil-6568530.jpg",
          "desc": "제주시 외도일동 · 외도일동차밍1차아파트 매매/외도아파트매매/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6568530"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6564785.jpg",
          "desc": "제주시 노형동 · 노형아이파크아파트 전세/한라초/제주시아파트/노형동아파트",
          "link": "https://www.jejuall.com/CProperty/detail?num=6564785"
        },
        {
          "photo": "images/listings/apartment/apt-oil-5991642.jpg",
          "desc": "제주시 애월읍 하귀1리 · 애월하귀기룡비치하임아파트매매/애월아파트매매/도시가스난방",
          "link": "https://www.jejuall.com/CProperty/detail?num=5991642"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6562344.jpg",
          "desc": "제주시 노형동 · 이화1차아파트 매매/노형초인근/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6562344"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6560111.jpg",
          "desc": "제주시 일도이동 · 일도삼주아파트 매매/올리모델링",
          "link": "https://www.jejuall.com/CProperty/detail?num=6560111"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6568530.jpg",
          "desc": "제주시 연동 · 대림1차/연동대림1차고층/대림1차이편한세상/한라초/연동아파트/노형동아파트",
          "link": "https://www.jejuall.com/CProperty/detail?num=6559482"
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
          "photo": "images/listings/house/house-oil-6565612.jpg",
          "desc": "제주시 한림읍 협재리 · 한림한수풀타운하우스/협재풀옵션년세/제주단독주택년세/타운하우스년세",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565612"
        },
        {
          "photo": "images/listings/house/house-oil-6563381.jpg",
          "desc": "제주시 일도이동 · 인화초인근/일도이동단독주택/구도심단독주택/제주시단독주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563381"
        },
        {
          "photo": "images/listings/house/house-oil-6549639.jpg",
          "desc": "제주시 삼도일동 · 급매/삼도이동단독주택매매/중앙여중인근/마당있는단독주택매매/제주도구옥",
          "link": "https://www.jejuall.com/CProperty/detail?num=6549639"
        },
        {
          "photo": "images/listings/house/house-oil-5968317.jpg",
          "desc": "서귀포시 안덕면 서광리 · *서광리신축단독주택매매*영어교육도시인근단독주택매매*서광초인근*",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968317"
        },
        {
          "photo": "images/listings/house/house-oil-5968334.jpg",
          "desc": "서귀포시 안덕면 사계리 · *산방산인근*게스트하우스매매*산방산뷰안덕상가주택매매*",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968334"
        },
        {
          "photo": "images/listings/house/house-oil-5968367.jpg",
          "desc": "서귀포시 표선면 가시리 · *표선면단독주택매매*에어비앤비운영중*수영장있는단독주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968367"
        }
      ]
    },
    "villa": {
      "title": "빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-oil-6568531.jpg",
          "desc": "제주시 도련일동 · 도련벨라시티/도련초/삼화지구/도시가스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6568531"
        },
        {
          "photo": "images/listings/villa/villa-oil-6567487.jpg",
          "desc": "제주시 애월읍 상귀리 · 애월상귀교차로/마크힐애월1차매매/마크힐매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6567487"
        },
        {
          "photo": "images/listings/villa/villa-oil-6564623.jpg",
          "desc": "제주시 삼도일동 · 중앙초등인근/삼도이동서아빌라/삼도이동쓰리룸매매/도배완료",
          "link": "https://www.jejuall.com/CProperty/detail?num=6564623"
        },
        {
          "photo": "images/listings/villa/villa-oil-6563024.jpg",
          "desc": "제주시 애월읍 상귀리 · 애월고급주택매매/마크힐애월2차/마크힐매매/전자제품옵션/3층",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563024"
        },
        {
          "photo": "images/listings/villa/villa-oil-6562346.jpg",
          "desc": "제주시 아라일동 · 아라휴안8차매매/아라동빌라매매/관리잘되어있음/아라초/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6562346"
        },
        {
          "photo": "images/listings/villa/villa-oil-6558143.jpg",
          "desc": "제주시 오등동 · 오등휴안2차/아라초학군/제주시쓰리룸매매/제주빌라매매",
          "link": "https://www.jejuall.com/CProperty/detail?num=6558143"
        }
      ]
    },
    "nohyeong-oneroom": {
      "title": "딱 필요한 만큼 원룸 투룸",
      "items": [
        {
          "photo": "images/listings/oneroom/oneroom-oil-6568528.jpg",
          "desc": "제주시 일도이동 · 인화초인근/일도지구/인제/일도이동투룸년세/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6568528"
        },
        {
          "photo": "images/listings/oneroom/oneroom-oil-6563844.jpg",
          "desc": "제주시 애월읍 하귀2리 · 하귀넓은투룸년세/방2욕실2/오션뷰가능/반려동물가능/가전제품옵션/신축급",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563844"
        },
        {
          "photo": "images/listings/oneroom/oneroom-oil-6474354.jpg",
          "desc": "제주시 한림읍 금능리 · 한림분리형원룸/넓고깨끗한분리형원룸/금능해수욕장",
          "link": "https://www.jejuall.com/CProperty/detail?num=6474354"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346544.jpg",
          "desc": "한림읍 협재리 · 제주시 한림읍 아파트형 투룸 - 년세 500만원/1,000만원",
          "link": "https://land.jejukcr.com/offer/88346544"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346538.jpg",
          "desc": "애월읍 하귀2리 · 제주시 애월읍 다가구형 투룸 - 년세 2,000만원/1,600만원",
          "link": "https://land.jejukcr.com/offer/88346538"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346550.jpg",
          "desc": "아라일동 · 제주시 아라일동 다가구형 원룸 - 월세 200만원/45만원",
          "link": "https://land.jejukcr.com/offer/88346550"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346549.jpg",
          "desc": "일도이동 · 제주시 일도이동 다가구형 투룸 - 년세 500만원/800만원",
          "link": "https://land.jejukcr.com/offer/88346549"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346547.jpg",
          "desc": "이도이동 · 제주시 이도이동 다가구형 투베이 - 월세 200만원/55만원",
          "link": "https://land.jejukcr.com/offer/88346547"
        },
        {
          "photo": "images/listings/oneroom/oneroom-kcr-88346546.jpg",
          "desc": "노형동 · 제주시 노형동 다가구형 원룸 - 월세 200만원/55만원",
          "link": "https://land.jejukcr.com/offer/88346546"
        }
      ]
    },
    "sinsigaji-sanga": {
      "title": "상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6565611.jpg",
          "desc": "제주시 외도일동 · 외도상가임대/외도사무실임대/외도학원병원임대우대혜택있음/편리한전용주차/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565611"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6565610.jpg",
          "desc": "제주시 연동 · 제주공항인근/대형상가임대/노출최상/주차편리/마리나사거리/대형오피스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565610"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6565179.jpg",
          "desc": "제주시 도두이동 · 도두해안도로상가임대/제주오션뷰상가임대/미용실/웨딩샵/스튜디오",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565179"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6563098.jpg",
          "desc": "제주시 외도일동 · 추천/임대지원혜택/외도일동1층상가임대/건물내주차편리/다양한업종/동물병원/음식점",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563098"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6555411.jpg",
          "desc": "제주시 용담삼동 · 용담해안도로상가/상가건물임대/해안도로/제주공항인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=6555411"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6547398.jpg",
          "desc": "제주시 애월읍 하귀2리 · *하귀다이소인근*뷰좋은2층상가임대*",
          "link": "https://www.jejuall.com/CProperty/detail?num=6547398"
        }
      ]
    },
    "land": {
      "title": "토지",
      "items": [
        {
          "photo": "images/listings/land/land-oil-5968379.jpg",
          "desc": "서귀포시 하효동 · 서귀포주거지역토지매매/효돈초인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968379"
        },
        {
          "photo": "images/listings/land/land-oil-5968470.jpg",
          "desc": "서귀포시 서호동 · 서호동토지매매/2종일반주거지역/",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968470"
        },
        {
          "photo": "images/listings/land/land-oil-6533318.jpg",
          "desc": "제주시 애월읍 하가리 · 애월읍맹지/연화못인근/하가리토지매매/더럭초",
          "link": "https://www.jejuall.com/CProperty/detail?num=6533318"
        },
        {
          "photo": "images/listings/land/land-oil-6529383.jpg",
          "desc": "제주시 도남동 · *도남동토지매매*도남동단독주택,상가주택지*제주도토지",
          "link": "https://www.jejuall.com/CProperty/detail?num=6529383"
        },
        {
          "photo": "images/listings/land/land-oil-5922523.jpg",
          "desc": "제주시 용담삼동 · 용담주거지역토지매매/나대지+전/용두암해안도로인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=5922523"
        },
        {
          "photo": "images/listings/land/land-oil-6503475.jpg",
          "desc": "제주시 조천읍 조천리 · *추천*조천리기반시설갖춘소형토지매매*제주도토지",
          "link": "https://www.jejuall.com/CProperty/detail?num=6503475"
        }
      ]
    },
    "warehouse": {
      "title": "사업확장의 열쇠 알짜 창고 매물",
      "items": [
        {
          "photo": "images/listings/warehouse/warehouse-oil-6558354.jpg",
          "desc": "제주시 애월읍 신엄리 · 신엄리신축급창고임대/중산간도로인근/애월창고임대",
          "link": "https://www.jejuall.com/CProperty/detail?num=6558354"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-6404017.jpg",
          "desc": "제주시 조천읍 와흘리 · 제주도공장매매/조천공장매매/3306m2공장용지",
          "link": "https://www.jejuall.com/CProperty/detail?num=6404017"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-6328388.jpg",
          "desc": "제주시 애월읍 애월리 · 애월창고매매/애월신축급창고",
          "link": "https://www.jejuall.com/CProperty/detail?num=6328388"
        },
        {
          "photo": "images/listings/warehouse/warehouse-oil-4762800.png",
          "desc": "제주시 오등동 · *애조로인근*창고시설매매*",
          "link": "https://www.jejuall.com/CProperty/detail?num=4762800"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-88375024.jpg",
          "desc": "애월읍 신엄리 · 제주시 애월읍 창고 - 임대(년세) 1,000만원/1,600만원",
          "link": "https://land.jejukcr.com/offer/88375024"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-88000863.png",
          "desc": "오등동 · 제주시 오등동 창고 - 매매 15억원",
          "link": "https://land.jejukcr.com/offer/88000863"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-88000862.jpg",
          "desc": "애월읍 애월리 · 제주시 애월읍 창고 - 매매 5억 7,000만원",
          "link": "https://land.jejukcr.com/offer/88000862"
        },
        {
          "photo": "images/listings/warehouse/warehouse-kcr-88000859.jpg",
          "desc": "조천읍 와흘리 · 제주시 조천읍 공장 - 매매 19억 3,000만원",
          "link": "https://land.jejukcr.com/offer/88000859"
        }
      ]
    },
    "featured-apt": {
      "title": "인기만점 제주 아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-oil-6568530.jpg",
          "desc": "제주시 외도일동 · 외도일동차밍1차아파트 매매/외도아파트매매/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6568530"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6564785.jpg",
          "desc": "제주시 노형동 · 노형아이파크아파트 전세/한라초/제주시아파트/노형동아파트",
          "link": "https://www.jejuall.com/CProperty/detail?num=6564785"
        },
        {
          "photo": "images/listings/apartment/apt-oil-5991642.jpg",
          "desc": "제주시 애월읍 하귀1리 · 애월하귀기룡비치하임아파트매매/애월아파트매매/도시가스난방",
          "link": "https://www.jejuall.com/CProperty/detail?num=5991642"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6562344.jpg",
          "desc": "제주시 노형동 · 이화1차아파트 매매/노형초인근/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6562344"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6560111.jpg",
          "desc": "제주시 일도이동 · 일도삼주아파트 매매/올리모델링",
          "link": "https://www.jejuall.com/CProperty/detail?num=6560111"
        },
        {
          "photo": "images/listings/apartment/apt-oil-6568530.jpg",
          "desc": "제주시 연동 · 대림1차/연동대림1차고층/대림1차이편한세상/한라초/연동아파트/노형동아파트",
          "link": "https://www.jejuall.com/CProperty/detail?num=6559482"
        }
      ]
    },
    "featured-house": {
      "title": "제주로망 전원주택/타운하우스",
      "items": [
        {
          "photo": "images/listings/house/house-oil-6565612.jpg",
          "desc": "제주시 한림읍 협재리 · 한림한수풀타운하우스/협재풀옵션년세/제주단독주택년세/타운하우스년세",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565612"
        },
        {
          "photo": "images/listings/house/house-oil-6563381.jpg",
          "desc": "제주시 일도이동 · 인화초인근/일도이동단독주택/구도심단독주택/제주시단독주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563381"
        },
        {
          "photo": "images/listings/house/house-oil-6549639.jpg",
          "desc": "제주시 삼도일동 · 급매/삼도이동단독주택매매/중앙여중인근/마당있는단독주택매매/제주도구옥",
          "link": "https://www.jejuall.com/CProperty/detail?num=6549639"
        },
        {
          "photo": "images/listings/house/house-oil-5968317.jpg",
          "desc": "서귀포시 안덕면 서광리 · *서광리신축단독주택매매*영어교육도시인근단독주택매매*서광초인근*",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968317"
        },
        {
          "photo": "images/listings/house/house-oil-5968334.jpg",
          "desc": "서귀포시 안덕면 사계리 · *산방산인근*게스트하우스매매*산방산뷰안덕상가주택매매*",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968334"
        },
        {
          "photo": "images/listings/house/house-oil-5968367.jpg",
          "desc": "서귀포시 표선면 가시리 · *표선면단독주택매매*에어비앤비운영중*수영장있는단독주택",
          "link": "https://www.jejuall.com/CProperty/detail?num=5968367"
        }
      ]
    },
    "featured-sanga": {
      "title": "새출발 든든한 상가",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-oil-6565611.jpg",
          "desc": "제주시 외도일동 · 외도상가임대/외도사무실임대/외도학원병원임대우대혜택있음/편리한전용주차/",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565611"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6565610.jpg",
          "desc": "제주시 연동 · 제주공항인근/대형상가임대/노출최상/주차편리/마리나사거리/대형오피스",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565610"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6565179.jpg",
          "desc": "제주시 도두이동 · 도두해안도로상가임대/제주오션뷰상가임대/미용실/웨딩샵/스튜디오",
          "link": "https://www.jejuall.com/CProperty/detail?num=6565179"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6563098.jpg",
          "desc": "제주시 외도일동 · 추천/임대지원혜택/외도일동1층상가임대/건물내주차편리/다양한업종/동물병원/음식점",
          "link": "https://www.jejuall.com/CProperty/detail?num=6563098"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6555411.jpg",
          "desc": "제주시 용담삼동 · 용담해안도로상가/상가건물임대/해안도로/제주공항인근",
          "link": "https://www.jejuall.com/CProperty/detail?num=6555411"
        },
        {
          "photo": "images/listings/sanga/sanga-oil-6547398.jpg",
          "desc": "제주시 애월읍 하귀2리 · *하귀다이소인근*뷰좋은2층상가임대*",
          "link": "https://www.jejuall.com/CProperty/detail?num=6547398"
        }
      ]
    },
    "hero-apt": {
      "title": "인기있는 제주도 아파트",
      "items": [
        {
          "photo": "images/listings/apartment/apt-kcr-88372317.jpg",
          "desc": "노형동 · 제주시 노형동 노형아이파크 104동 - 전세 4억 6,000만원",
          "link": "https://land.jejukcr.com/offer/88372317"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-88346607.jpg",
          "desc": "이도이동 · 제주시 이도이동 성원 1동 - 매매 2억 9,500만원",
          "link": "https://land.jejukcr.com/offer/88346607"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-88346596.jpg",
          "desc": "노형동 · 제주시 노형동 대원상록수5차 1동 - 매매 4억 1,000만원",
          "link": "https://land.jejukcr.com/offer/88346596"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-88346594.jpg",
          "desc": "아라일동 · 제주시 아라일동 염광 4동 - 매매 2억 1,500만원",
          "link": "https://land.jejukcr.com/offer/88346594"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-88346577.jpg",
          "desc": "노형동 · 제주시 노형동 노형벨라시티 1동 - 매매 5억 7,000만원",
          "link": "https://land.jejukcr.com/offer/88346577"
        },
        {
          "photo": "images/listings/apartment/apt-kcr-88346565.jpg",
          "desc": "노형동 · 제주시 노형동 노형2차아이파크 202동 - 매매 11억원",
          "link": "https://land.jejukcr.com/offer/88346565"
        }
      ]
    },
    "hero-sanga": {
      "title": "사업잘되는 상가 소개",
      "items": [
        {
          "photo": "images/listings/sanga/sanga-kcr-88383577.jpg",
          "desc": "노형동 · 제주시 노형동 일반상가 - 임대(년세) 2,200만원/2,200만원",
          "link": "https://land.jejukcr.com/offer/88383577"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-88307469.jpg",
          "desc": "외도일동 · 제주시 외도일동 일반상가 - 임대(년세) 2,000만원/2,400만원",
          "link": "https://land.jejukcr.com/offer/88307469"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-88307463.jpg",
          "desc": "외도일동 · 제주시 외도일동 일반상가 - 임대(년세) 1,500만원/1,500만원",
          "link": "https://land.jejukcr.com/offer/88307463"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-88307459.jpg",
          "desc": "도남동 · 제주시 도남동 일반상가 - 임대(년세) 2,000만원/2,000만원",
          "link": "https://land.jejukcr.com/offer/88307459"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-88257723.jpg",
          "desc": "도남동 · 제주시 도남동 일반상가 - 임대(년세) 2,500만원/2,500만원",
          "link": "https://land.jejukcr.com/offer/88257723"
        },
        {
          "photo": "images/listings/sanga/sanga-kcr-88254970.jpg",
          "desc": "노형동 · 제주시 노형동 일반상가 - 임대 1,000만원/90만원",
          "link": "https://land.jejukcr.com/offer/88254970"
        }
      ]
    },
    "hero-house": {
      "title": "마당있는 삶 단독주택",
      "items": [
        {
          "photo": "images/listings/house/house-kcr-88005444.jpg",
          "desc": "애월읍 수산리 · 제주시 애월읍 단독 - 매매 6억원",
          "link": "https://land.jejukcr.com/offer/88005444"
        },
        {
          "photo": "images/listings/house/house-kcr-88354903.jpg",
          "desc": "일도이동 · 제주시 일도이동 단독 - 매매 2억 6,000만원",
          "link": "https://land.jejukcr.com/offer/88354903"
        },
        {
          "photo": "images/listings/house/house-kcr-88202828.jpg",
          "desc": "삼도이동 · 제주시 삼도이동 단독 - 매매 1억 9,500만원",
          "link": "https://land.jejukcr.com/offer/88202828"
        },
        {
          "photo": "images/listings/house/house-kcr-88005479.jpg",
          "desc": "도련일동 · 제주시 도련일동 단독 - 매매 8억원",
          "link": "https://land.jejukcr.com/offer/88005479"
        },
        {
          "photo": "images/listings/house/house-kcr-88005471.jpg",
          "desc": "아라이동 · 제주시 아라이동 단독 - 매매 6억 9,000만원",
          "link": "https://land.jejukcr.com/offer/88005471"
        },
        {
          "photo": "images/listings/house/house-kcr-88005458.jpg",
          "desc": "한림읍 상대리 · 제주시 한림읍 단독 - 매매 2억 5,000만원",
          "link": "https://land.jejukcr.com/offer/88005458"
        }
      ]
    },
    "hero-villa": {
      "title": "멋과 실속 프리미엄 빌라",
      "items": [
        {
          "photo": "images/listings/villa/villa-kcr-88408684.jpg",
          "desc": "아라일동 · 제주시 아라일동 연립 - 아라휴안8차 1동 - 매매 4억원",
          "link": "https://land.jejukcr.com/offer/88408684"
        },
        {
          "photo": "images/listings/villa/villa-kcr-88408654.jpg",
          "desc": "오등동 · 제주시 오등동 다세대 - 오등휴안2차 101동 - 매매 3억 2,000만원",
          "link": "https://land.jejukcr.com/offer/88408654"
        },
        {
          "photo": "images/listings/villa/villa-kcr-88408643.jpg",
          "desc": "노형동 · 제주시 노형동 다세대 - 엔알파라디빌7차 1동 - 매매 3억 8,500만원",
          "link": "https://land.jejukcr.com/offer/88408643"
        },
        {
          "photo": "images/listings/villa/villa-kcr-88408630.jpg",
          "desc": "아라일동 · 제주시 아라일동 연립 - 아라한성베르뜨3차 105동 - 매매 2억 8,500만원",
          "link": "https://land.jejukcr.com/offer/88408630"
        },
        {
          "photo": "images/listings/villa/villa-kcr-88408619.jpg",
          "desc": "노형동 · 제주시 노형동 연립 - 마크힐노형 102동 - 매매 5억 6,900만원",
          "link": "https://land.jejukcr.com/offer/88408619"
        },
        {
          "photo": "images/listings/villa/villa-kcr-88408575.jpg",
          "desc": "애월읍 상귀리 · 제주시 애월읍 연립 - 마크힐애월3차 3동 - 매매 3억 8,500만원",
          "link": "https://land.jejukcr.com/offer/88408575"
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
          "photo": "images/listings/land/land-kcr-88254989.jpg",
          "desc": "애월읍 상귀리 · 제주시 애월읍 임야 - 매매 2억 600만원",
          "link": "https://land.jejukcr.com/offer/88254989"
        },
        {
          "photo": "images/listings/land/land-kcr-88254927.jpg",
          "desc": "도남동 · 제주시 도남동 과수원 - 매매 14억원",
          "link": "https://land.jejukcr.com/offer/88254927"
        },
        {
          "photo": "images/listings/land/land-kcr-87846714.png",
          "desc": "구좌읍 김녕리 · 제주시 구좌읍 전 - 매매 9,000만원",
          "link": "https://land.jejukcr.com/offer/87846714"
        },
        {
          "photo": "images/listings/land/land-kcr-87846631.png",
          "desc": "이도이동 · 제주시 이도이동 임야 - 매매 9억원",
          "link": "https://land.jejukcr.com/offer/87846631"
        },
        {
          "photo": "images/listings/land/land-kcr-87846566.jpg",
          "desc": "해안동 · 제주시 해안동 과수원 - 매매 7억 5,000만원",
          "link": "https://land.jejukcr.com/offer/87846566"
        },
        {
          "photo": "images/listings/land/land-kcr-87846542.jpg",
          "desc": "애월읍 광령리 · 제주시 애월읍 전 - 매매 4억 9,500만원",
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
