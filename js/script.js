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

  // 2026-09-23: 오일장 유형/검색 결과와 교차로 매물종류 필터의 노출 순위로 갱신.
  var LISTING_DATA = {
    // ── 전문분야 (8개 분야 카드 전용) ──
    "nohyeong-apt": {
      title: "아파트",
      items: [
        { photo: "images/listings/apartment/apt-oil-12.jpg", desc: "노형동 · 노형중흥에스클래스 · 미리내마을 · 백록초", link: "https://www.jejuall.com/CProperty/detail?num=6493423" },
        { photo: "images/listings/apartment/apt-oil-13.jpg", desc: "노형동 · 노형벨라시티 · 쓰리룸 · 고층", link: "https://www.jejuall.com/CProperty/detail?num=6490704" },
        { photo: "images/listings/apartment/apt-oil-14.jpg", desc: "노형동 · 노형벨라시티 · 투룸 · 옵션포함", link: "https://www.jejuall.com/CProperty/detail?num=6490703" },
        { photo: "images/listings/apartment/apt-oil-15.jpg", desc: "외도일동 · 외도부영1차 · 중층 · 즉시입주", link: "https://www.jejuall.com/CProperty/detail?num=6490692" },
        { photo: "images/listings/apartment/apt-oil-16.jpg", desc: "삼도일동 · 한성베르뜨2차 · 서사라사거리", link: "https://www.jejuall.com/CProperty/detail?num=6486374" },
        { photo: "images/listings/apartment/apt-oil-17.jpg", desc: "노형동 · 대원상록수5차 · 노형초 인근", link: "https://www.jejuall.com/CProperty/detail?num=6484182" }
      ]
    },
    "presale": {
      title: "분양",
      items: [
        { photo: "images/listings/presale/presale-oil-6.jpg", desc: "애월읍 상귀리 · 마크힐애월2차 · 리모델링세대", link: "https://www.jejuall.com/CProperty/detail?num=6478751" },
        { photo: "images/listings/presale/presale-oil-3.jpg", desc: "도평동 · 노형생활권 신축빌라 · 한라산뷰", link: "https://www.jejuall.com/CProperty/detail?num=5442114" },
        { photo: "images/listings/presale/presale-oil-4.jpg", desc: "오라이동 · 오등봉위파크제주1단지 · 84B 분양권", link: "https://www.jejuall.com/CProperty/detail?num=5926741" }
      ]
    },
    "samhwa-house": {
      title: "주택",
      items: [
        { photo: "images/listings/house/house-oil-8.jpg", desc: "아라이동 · 단독주택 · 아라아이파크 인근", link: "https://www.jejuall.com/CProperty/detail?num=5920263" },
        { photo: "images/listings/house/house-oil-9.jpg", desc: "외도일동 · 단독주택 매매", link: "https://www.jejuall.com/CProperty/detail?num=6493984" },
        { photo: "images/listings/house/house-oil-10.jpg", desc: "오등동 · 고급 타운하우스", link: "https://www.jejuall.com/CProperty/detail?num=6493980" },
        { photo: "images/listings/house/house-oil-11.jpg", desc: "도평동 · 단독주택 년세 · 노형생활권", link: "https://www.jejuall.com/CProperty/detail?num=6486362" },
        { photo: "images/listings/house/house-oil-12.jpg", desc: "노형동 · 라메종 타운하우스 · 전세", link: "https://www.jejuall.com/CProperty/detail?num=6486353" },
        { photo: "images/listings/house/house-oil-13.jpg", desc: "애월읍 상가리 · 안끄레힐1차 · 타운하우스", link: "https://www.jejuall.com/CProperty/detail?num=6482312" }
      ]
    },
    "villa": {
      title: "빌라",
      items: [
        { photo: "images/listings/villa/villa-oil-14.jpg", desc: "이호일동 · 휴레스트타운빌 · 도리초 인근", link: "https://www.jejuall.com/CProperty/detail?num=6489726" },
        { photo: "images/listings/villa/villa-oil-15.jpg", desc: "삼도일동 · 서아빌라 · 복층형 투룸", link: "https://www.jejuall.com/CProperty/detail?num=6489623" },
        { photo: "images/listings/villa/villa-oil-16.jpg", desc: "중문동 · 중문카렌시아 · 오션뷰", link: "https://www.jejuall.com/CProperty/detail?num=6489608" },
        { photo: "images/listings/villa/villa-oil-17.jpg", desc: "해안동 · 브리즈스테이2차 · 한라산 조망", link: "https://www.jejuall.com/CProperty/detail?num=5915517" },
        { photo: "images/listings/villa/villa-oil-18.jpg", desc: "월평동 · 월평베티모루 · 월평초 인근", link: "https://www.jejuall.com/CProperty/detail?num=5915532" },
        { photo: "images/listings/villa/villa-oil-19.jpg", desc: "오라이동 · 노브힐하우스 · 정실 인근", link: "https://www.jejuall.com/CProperty/detail?num=5915543" }
      ]
    },
    "nohyeong-oneroom": {
      title: "딱 필요한 만큼 원룸 투룸",
      items: [
        { photo: "images/listings/oneroom/oneroom-oil-7.jpg", desc: "외도일동 · 오렌지카운티 · 분리형 원룸", link: "https://www.jejuall.com/CProperty/detail?num=6486392" },
        { photo: "images/listings/oneroom/oneroom-oil-8.jpg", desc: "한림읍 금능리 · 분리형 원룸 · 금능해수욕장", link: "https://www.jejuall.com/CProperty/detail?num=6474354" },
        { photo: "images/listings/oneroom/oneroom-oil-9.jpg", desc: "서귀포 중앙로터리 · 더그레이튼 오피스텔 · 풀옵션", link: "https://www.jejuall.com/CProperty/detail?num=6424883" },
        { photo: "images/listings/oneroom/oneroom-oil-4.jpg", desc: "노형오거리 · 하와이오피스텔 · 막힘없는 뷰", link: "https://www.jejuall.com/CProperty/detail?num=6012998" }
      ]
    },
    "sinsigaji-sanga": {
      title: "상가",
      items: [
        { photo: "images/listings/sanga/sanga-oil-16.jpg", desc: "연동 · 근린생활시설 포함 상가주택 매매", link: "https://www.jejuall.com/CProperty/detail?num=6493983" },
        { photo: "images/listings/sanga/sanga-oil-17.jpg", desc: "조천읍 와흘리 · 상가건물 · 물류창고", link: "https://www.jejuall.com/CProperty/detail?num=6489648" },
        { photo: "images/listings/sanga/sanga-oil-18.jpg", desc: "도두이동 · 해안도로 상가임대 · 2층", link: "https://www.jejuall.com/CProperty/detail?num=6486399" },
        { photo: "images/listings/sanga/sanga-oil-19.jpg", desc: "이도이동 · 상가임대 · 미용실 시설", link: "https://www.jejuall.com/CProperty/detail?num=6486384" },
        { photo: "images/listings/sanga/sanga-oil-20.jpg", desc: "아라일동 · 제대 인근 1층 상가 · 주차편리", link: "https://www.jejuall.com/CProperty/detail?num=6484864" },
        { photo: "images/listings/sanga/sanga-oil-21.jpg", desc: "노형동 · 1층 상가임대 · 월랑마을", link: "https://www.jejuall.com/CProperty/detail?num=6484862" }
      ]
    },
    "land": {
      title: "토지",
      items: [
        { photo: "images/listings/land/land-oil-8.jpg", desc: "조천읍 조천리 · 기반시설 갖춘 소형 토지", link: "https://www.jejuall.com/CProperty/detail?num=6467092" },
        { photo: "images/listings/land/land-oil-9.jpg", desc: "외도일동 · 토지 · 한라산 조망", link: "https://www.jejuall.com/CProperty/detail?num=5879452" },
        { photo: "images/listings/land/land-oil-5.png", desc: "이도이동 · 한일베라체 인근 · 기반시설있음", link: "https://www.jejuall.com/CProperty/detail?num=5865817" },
        { photo: "images/listings/land/land-oil-10.jpg", desc: "서귀포 중문동 · 토지 · 중문관광단지 인근", link: "https://www.jejuall.com/CProperty/detail?num=5865871" },
        { photo: "images/listings/land/land-oil-11.jpg", desc: "한경면 청수리 · 건축 가능 · 토지", link: "https://www.jejuall.com/CProperty/detail?num=5865905" },
        { photo: "images/listings/land/land-oil-12.jpg", desc: "노형동 · 지구단위계획구역 · 대지", link: "https://www.jejuall.com/CProperty/detail?num=5865926" }
      ]
    },
    "warehouse": {
      title: "사업확장의 열쇠 알짜 창고 매물",
      items: [
        { photo: "images/listings/sanga/sanga-oil-17.jpg", desc: "조천읍 와흘리 · 상가건물 · 물류창고", link: "https://www.jejuall.com/CProperty/detail?num=6489648" },
        { photo: "images/listings/warehouse/warehouse-oil-6.jpg", desc: "애월읍 신엄리 · 신축급 창고 임대", link: "https://www.jejuall.com/CProperty/detail?num=6486884" },
        { photo: "images/listings/warehouse/warehouse-oil-1.jpg", desc: "일도이동 · 창고형 사무실 · 반지하 임대", link: "https://www.jejuall.com/CProperty/detail?num=6356575" },
        { photo: "images/listings/warehouse/warehouse-oil-2.jpg", desc: "애월읍 애월리 · 신축급 창고 매매", link: "https://www.jejuall.com/CProperty/detail?num=6328388" },
        { photo: "images/listings/warehouse/warehouse-oil-3.jpg", desc: "삼양일동 · 2종 근린 · 창고용지", link: "https://www.jejuall.com/CProperty/detail?num=6218716" },
        { photo: "images/listings/warehouse/warehouse-oil-4.jpg", desc: "외도축구장 인근 · 창고 및 단독주택지", link: "https://www.jejuall.com/CProperty/detail?num=6123352" }
      ]
    },

    // ── 대표매물 ("지금 소개하는 매물" 3개 카드 전용) ──
    "featured-apt": {
      title: "인기만점 제주 아파트",
      items: [
        { photo: "images/listings/apartment/apt-oil-12.jpg", desc: "[오일장] 노형동 · 노형중흥에스클래스 · 미리내마을", link: "https://www.jejuall.com/CProperty/detail?num=6493423" },
        { photo: "images/listings/apartment/apt-oil-13.jpg", desc: "[오일장] 노형동 · 노형벨라시티 · 쓰리룸 · 고층", link: "https://www.jejuall.com/CProperty/detail?num=6490704" },
        { photo: "images/listings/apartment/apt-oil-14.jpg", desc: "[오일장] 노형동 · 노형벨라시티 · 투룸 · 옵션포함", link: "https://www.jejuall.com/CProperty/detail?num=6490703" },
        { photo: "images/listings/apartment/apt-kcr-37.jpg", desc: "[교차로] 노형중흥에스클래스 107동 · 미리내마을", link: "https://land.jejukcr.com/offer/87649309" },
        { photo: "images/listings/apartment/apt-kcr-38.jpg", desc: "[교차로] 외도부영1차 102동 · 중층 · 즉시입주", link: "https://land.jejukcr.com/offer/87602895" },
        { photo: "images/listings/apartment/apt-kcr-39.jpg", desc: "[교차로] 노형중흥에스클래스 108동 · 미리내마을", link: "https://land.jejukcr.com/offer/87511379" }
      ]
    },
    "featured-house": {
      title: "제주로망 전원주택/타운하우스",
      items: [
        { photo: "images/listings/house/house-oil-8.jpg", desc: "[오일장] 아라이동 · 단독주택 · 아라아이파크 인근", link: "https://www.jejuall.com/CProperty/detail?num=5920263" },
        { photo: "images/listings/house/house-oil-9.jpg", desc: "[오일장] 외도일동 · 단독주택 매매", link: "https://www.jejuall.com/CProperty/detail?num=6493984" },
        { photo: "images/listings/house/house-oil-10.jpg", desc: "[오일장] 오등동 · 고급 타운하우스", link: "https://www.jejuall.com/CProperty/detail?num=6493980" },
        { photo: "images/listings/house/house-kcr-29.jpg", desc: "[교차로] 삼도이동 단독주택 · 급매 · 마당", link: "https://land.jejukcr.com/offer/87683957" },
        { photo: "images/listings/house/house-kcr-30.jpg", desc: "[교차로] 한림 단독주택 · 금능해수욕장 인근", link: "https://land.jejukcr.com/offer/87684041" },
        { photo: "images/listings/house/house-kcr-31.jpg", desc: "[교차로] 아라이동 단독주택 · 아라아이파크 인근", link: "https://land.jejukcr.com/offer/87684027" }
      ]
    },
    "featured-sanga": {
      title: "새출발 든든한 상가",
      items: [
        { photo: "images/listings/sanga/sanga-oil-16.jpg", desc: "[오일장] 연동 · 근린생활시설 포함 상가주택 매매", link: "https://www.jejuall.com/CProperty/detail?num=6493983" },
        { photo: "images/listings/sanga/sanga-oil-17.jpg", desc: "[오일장] 조천읍 와흘리 · 상가건물 · 물류창고", link: "https://www.jejuall.com/CProperty/detail?num=6489648" },
        { photo: "images/listings/sanga/sanga-oil-18.jpg", desc: "[오일장] 도두이동 · 해안도로 상가임대 · 2층", link: "https://www.jejuall.com/CProperty/detail?num=6486399" },
        { photo: "images/listings/sanga/sanga-kcr-35.jpg", desc: "[교차로] 외도 · 상가/사무실 임대 · 전용주차", link: "https://land.jejukcr.com/offer/87683925" },
        { photo: "images/listings/sanga/sanga-kcr-34.jpg", desc: "[교차로] 노형동 1층 상가임대 · 월랑마을", link: "https://land.jejukcr.com/offer/87602771" },
        { photo: "images/listings/sanga/sanga-kcr-36.jpg", desc: "[교차로] 도남동 4층 상가임대 · 카페/사무실", link: "https://land.jejukcr.com/offer/87519643" }
      ]
    },

    // ── 추천매물 (히어로 우측 6개 카드 전용) ──
    "hero-apt": {
      title: "인기있는 제주도 아파트",
      items: [
        { photo: "images/listings/apartment/apt-kcr-37.jpg", desc: "노형중흥에스클래스(미리내마을) 107동 · 백록초", link: "https://land.jejukcr.com/offer/87649309" },
        { photo: "images/listings/apartment/apt-kcr-38.jpg", desc: "외도부영1차 102동 · 중층 · 막힘없는 뷰", link: "https://land.jejukcr.com/offer/87602895" },
        { photo: "images/listings/apartment/apt-kcr-39.jpg", desc: "노형중흥에스클래스(미리내마을) 108동", link: "https://land.jejukcr.com/offer/87511379" },
        { photo: "images/listings/apartment/apt-kcr-39.jpg", desc: "노형중흥에스클래스(미리내마을) 105동", link: "https://land.jejukcr.com/offer/87511367" },
        { photo: "images/listings/apartment/apt-kcr-40.jpg", desc: "아이린7차 1동 · 고층 오션뷰 · 방4개", link: "https://land.jejukcr.com/offer/87511352" },
        { photo: "images/listings/apartment/apt-kcr-41.jpg", desc: "제주아라아이파크 107동 · 리모델링", link: "https://land.jejukcr.com/offer/87511328" }
      ]
    },
    "hero-sanga": {
      title: "사업잘되는 상가 소개",
      items: [
        { photo: "images/listings/sanga/sanga-kcr-35.jpg", desc: "외도 · 상가/사무실 임대 · 전용주차", link: "https://land.jejukcr.com/offer/87683925" },
        { photo: "images/listings/sanga/sanga-kcr-34.jpg", desc: "노형동 · 1층 상가임대 · 월랑마을", link: "https://land.jejukcr.com/offer/87602771" },
        { photo: "images/listings/sanga/sanga-kcr-36.jpg", desc: "도남동 · 4층 상가임대 · 카페/사무실", link: "https://land.jejukcr.com/offer/87519643" },
        { photo: "images/listings/sanga/sanga-kcr-37.jpg", desc: "연동 · 제원신축상가 · 병의원 임대", link: "https://land.jejukcr.com/offer/87602805" },
        { photo: "images/listings/sanga/sanga-kcr-38.jpg", desc: "도남동 · 3층 상가임대 · 사무실", link: "https://land.jejukcr.com/offer/87575852" },
        { photo: "images/listings/sanga/sanga-kcr-36.jpg", desc: "도남동 · 대형 1층 상가임대 · 쇼룸", link: "https://land.jejukcr.com/offer/87519795" }
      ]
    },
    "hero-house": {
      title: "마당있는 삶 단독주택",
      items: [
        { photo: "images/listings/house/house-kcr-29.jpg", desc: "삼도이동 단독주택 · 급매 · 중앙여중 인근 · 마당", link: "https://land.jejukcr.com/offer/87683957" },
        { photo: "images/listings/house/house-kcr-30.jpg", desc: "한림 단독주택 · 금능해수욕장 인근", link: "https://land.jejukcr.com/offer/87684041" },
        { photo: "images/listings/house/house-kcr-31.jpg", desc: "아라이동 단독주택 · 아라아이파크 인근", link: "https://land.jejukcr.com/offer/87684027" },
        { photo: "images/listings/house/house-kcr-23.jpg", desc: "애월읍 수산리 · 수산봉 인근 · 마당 넓은 단독주택", link: "https://land.jejukcr.com/offer/87603080" },
        { photo: "images/listings/house/house-kcr-27.jpg", desc: "한림읍 명월리 · 리모델링 단독주택", link: "https://land.jejukcr.com/offer/87559782" },
        { photo: "images/listings/house/house-kcr-32.jpg", desc: "조천읍 와흘리 · 수영장 전원주택", link: "https://land.jejukcr.com/offer/87559736" }
      ]
    },
    "hero-villa": {
      title: "멋과 실속 프리미엄 빌라",
      items: [
        { photo: "images/listings/villa/villa-kcr-52.jpg", desc: "진아타운2차 가동 · 오라삼동 · 쓰리룸", link: "https://land.jejukcr.com/offer/87684080" },
        { photo: "images/listings/villa/villa-kcr-53.jpg", desc: "마크힐애월3차 3동 · 애월 오션뷰", link: "https://land.jejukcr.com/offer/87684059" },
        { photo: "images/listings/villa/villa-kcr-54.jpg", desc: "외도 오렌지카운티 102동 · 분리형 원룸", link: "https://land.jejukcr.com/offer/87683890" },
        { photo: "images/listings/villa/villa-kcr-48.jpg", desc: "중문카렌시아 1동 · 고층 오션뷰 · 중문초 인근", link: "https://land.jejukcr.com/offer/87575747" },
        { photo: "images/listings/villa/villa-kcr-40.jpg", desc: "마크힐노형 102동 · 신축 · 전세대 태양광", link: "https://land.jejukcr.com/offer/87575740" },
        { photo: "images/listings/villa/villa-kcr-46.jpg", desc: "마크힐애월2차 204동 · 탑층 오션뷰 · 서부경찰서 인근", link: "https://land.jejukcr.com/offer/87575737" }
      ]
    },
    "hero-presale": {
      title: "투자자가 먼저 아는 신축 분양",
      items: [
        { photo: "images/listings/presale/presale-oil-6.jpg", desc: "애월읍 상귀리 · 마크힐애월2차 · 리모델링세대", link: "https://www.jejuall.com/CProperty/detail?num=6478751" },
        { photo: "images/listings/presale/presale-oil-3.jpg", desc: "도평동 · 노형생활권 신축빌라 · 한라산뷰", link: "https://www.jejuall.com/CProperty/detail?num=5442114" },
        { photo: "images/listings/presale/presale-oil-4.jpg", desc: "오라이동 · 오등봉위파크제주1단지 · 84B 분양권", link: "https://www.jejuall.com/CProperty/detail?num=5926741" }
      ]
    },
    "hero-land": {
      title: "마음에 쏙 제주토지",
      items: [
        { photo: "images/listings/land/land-kcr-16.png", desc: "한경면 용수리 · 대지 · 용수포구 인근", link: "https://land.jejukcr.com/offer/87602815" },
        { photo: "images/listings/land/land-kcr-10.jpg", desc: "외도 · 농지 답 · 지역주택조합단지 인근", link: "https://land.jejukcr.com/offer/87382669" },
        { photo: "images/listings/land/land-kcr-11.jpg", desc: "대지 · 건축바로가능 · 영어교육도시 인근", link: "https://land.jejukcr.com/offer/87382665" },
        { photo: "images/listings/land/land-kcr-14.jpg", desc: "하귀초 인근 · 애월해안도로 입구 · 건축허가 득", link: "https://land.jejukcr.com/offer/87382659" },
        { photo: "images/listings/land/land-kcr-15.jpg", desc: "외도축구장 인근 · 창고 및 단독주택지 추천", link: "https://land.jejukcr.com/offer/87382637" },
        { photo: "images/listings/land/land-kcr-17.jpg", desc: "애월읍 상귀리 · 임야 · 근린시설 가능", link: "https://land.jejukcr.com/offer/87382614" }
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
      currentItems = data.items;
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
