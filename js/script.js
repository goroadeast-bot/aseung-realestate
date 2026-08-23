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

  var LISTING_DATA = {
    // ── 전문분야 (8개 분야 카드 전용) ──
    "nohyeong-apt": {
      title: "아파트",
      items: [
        { photo: "images/listings/apartment/apt-oil-1.jpg", desc: "서사라사거리 · 한성베르뜨2차아파트 매매", link: "https://www.jejuall.com/CProperty/detail?num=6204684" },
        { photo: "images/listings/apartment/apt-oil-2.png", desc: "신제주로터리 · 코스모스태홍누리안5차 · 탑층", link: "https://www.jejuall.com/CProperty/detail?num=6359532" },
        { photo: "images/listings/apartment/apt-oil-9.jpg", desc: "노형동 · 노형e-편한세상 · 급매 · 리모델링 · 백록초학군", link: "https://www.jejuall.com/CProperty/detail?num=6389256" },
        { photo: "images/listings/apartment/apt-oil-10.jpg", desc: "노형동 · 노형벨라시티 · 쓰리룸 · 고층 · 신축", link: "https://www.jejuall.com/CProperty/detail?num=6389240" },
        { photo: "images/listings/apartment/apt-oil-11.jpg", desc: "이도이동 · 신산하이츠힐 · 광양초 인근 · 방4개", link: "https://www.jejuall.com/CProperty/detail?num=6388047" },
        { photo: "images/listings/apartment/apt-oil-6.jpg", desc: "한림초 · 옹포사거리 · 한림오션캐슬 신축급", link: "https://www.jejuall.com/CProperty/detail?num=6379915" }
      ]
    },
    "presale": {
      title: "분양",
      items: [
        { photo: "images/listings/presale/presale-oil-1.jpg", desc: "마크힐노형분양 · 마지막 1세대 · 중개보수없음", link: "https://www.jejuall.com/CProperty/detail?num=6338024" },
        { photo: "images/listings/presale/presale-oil-5.jpg", desc: "마크힐노형분양 · 잔여1세대 · 중개보수없음", link: "https://www.jejuall.com/CProperty/detail?num=6379552" },
        { photo: "images/listings/presale/presale-oil-2.jpg", desc: "마크힐애월2차 · 리모델링세대 · 분양가", link: "https://www.jejuall.com/CProperty/detail?num=6273897" },
        { photo: "images/listings/presale/presale-oil-3.jpg", desc: "노형생활권 신축빌라분양 · 한라산뷰 · 풀옵션", link: "https://www.jejuall.com/CProperty/detail?num=5442114" },
        { photo: "images/listings/presale/presale-oil-4.jpg", desc: "오등봉위파크제주1단지 분양권84B · 고층 · 무피", link: "https://www.jejuall.com/CProperty/detail?num=5926741" }
      ]
    },
    "samhwa-house": {
      title: "주택",
      items: [
        { photo: "images/listings/house/house-oil-1.jpg", desc: "조천읍 와산리 · 전원주택 · 먼바다조망", link: "https://www.jejuall.com/CProperty/detail?num=6102922" },
        { photo: "images/listings/house/house-oil-3.jpg", desc: "연동 · 신제주초 인근 단독주택", link: "https://www.jejuall.com/CProperty/detail?num=5928113" },
        { photo: "images/listings/house/house-oil-2.jpg", desc: "해안초 인근 · 마당 넓은 단독주택 · 옵션있음", link: "https://www.jejuall.com/CProperty/detail?num=5890406" },
        { photo: "images/listings/house/house-oil-4.jpg", desc: "애월 소길리 · 독채펜션 2개동 · 리모델링", link: "https://www.jejuall.com/CProperty/detail?num=5438388" },
        { photo: "images/listings/house/house-oil-7.jpg", desc: "구좌읍 평대리 · 마당 넓은 단독주택 · 반려동물가능", link: "https://www.jejuall.com/CProperty/detail?num=6380354" },
        { photo: "images/listings/house/house-oil-5.jpg", desc: "한림 동명리 · 단독주택+토지 매매", link: "https://www.jejuall.com/CProperty/detail?num=6363714" }
      ]
    },
    "villa": {
      title: "빌라",
      items: [
        { photo: "images/listings/villa/villa-oil-12.jpg", desc: "오라삼동 · 그랑플라스 · 신축급빌라", link: "https://www.jejuall.com/CProperty/detail?num=6389217" },
        { photo: "images/listings/villa/villa-oil-13.jpg", desc: "용담이동 · 한양아트빌라 · 방3개", link: "https://www.jejuall.com/CProperty/detail?num=5822026" },
        { photo: "images/listings/villa/villa-oil-7.jpg", desc: "아라일동 · 한성베르뜨3차 · 연립주택 · 쓰리룸", link: "https://www.jejuall.com/CProperty/detail?num=6386179" },
        { photo: "images/listings/villa/villa-oil-8.jpg", desc: "노형동 · 마크힐노형 · 탑층 · 신축빌라", link: "https://www.jejuall.com/CProperty/detail?num=6381093" },
        { photo: "images/listings/villa/villa-oil-9.jpg", desc: "애월 하귀2리 · 민형파인즈 복층 · 쓰리룸", link: "https://www.jejuall.com/CProperty/detail?num=6380295" },
        { photo: "images/listings/villa/villa-oil-10.jpg", desc: "노형동 · 마크힐노형분양 · 잔여1세대", link: "https://www.jejuall.com/CProperty/detail?num=6379552" }
      ]
    },
    "nohyeong-oneroom": {
      title: "딱 필요한 만큼 원룸 투룸",
      items: [
        { photo: "images/listings/oneroom/oneroom-oil-5.jpg", desc: "연동 · 청목더웰 · 원룸 월세 · 풀옵션", link: "https://www.jejuall.com/CProperty/detail?num=6386125" },
        { photo: "images/listings/oneroom/oneroom-oil-6.jpg", desc: "서귀포 중앙로터리 · 더그레이튼 오피스텔 · 풀옵션", link: "https://www.jejuall.com/CProperty/detail?num=6377694" },
        { photo: "images/listings/oneroom/oneroom-oil-2.jpg", desc: "노형동 · 분리형원룸 · 서울사우나 인근", link: "https://www.jejuall.com/CProperty/detail?num=6355000" },
        { photo: "images/listings/oneroom/oneroom-oil-4.jpg", desc: "노형오거리 · 하와이오피스텔 · 막힘없는 뷰", link: "https://www.jejuall.com/CProperty/detail?num=6012998" }
      ]
    },
    "sinsigaji-sanga": {
      title: "상가",
      items: [
        { photo: "images/listings/sanga/sanga-oil-1.jpg", desc: "오라삼동 · 상가건물 매매 · 공실없음", link: "https://www.jejuall.com/CProperty/detail?num=6344401" },
        { photo: "images/listings/sanga/sanga-oil-12.jpg", desc: "한림읍 수원리 · 해안도로상가 · 카페음식점", link: "https://www.jejuall.com/CProperty/detail?num=6388034" },
        { photo: "images/listings/sanga/sanga-oil-13.jpg", desc: "아라일동 · 제대인근 1층상가점포 · 주차편리", link: "https://www.jejuall.com/CProperty/detail?num=6389203" },
        { photo: "images/listings/sanga/sanga-oil-14.jpg", desc: "노형동 · 무권리 상가임대 · 노형오거리 인근", link: "https://www.jejuall.com/CProperty/detail?num=6389188" },
        { photo: "images/listings/sanga/sanga-oil-15.jpg", desc: "노형동 · 노형2지구 · 도로접 · 상가임대", link: "https://www.jejuall.com/CProperty/detail?num=6388057" },
        { photo: "images/listings/sanga/sanga-oil-7.jpg", desc: "연동 · 대형상가임대 · 병의원 가능", link: "https://www.jejuall.com/CProperty/detail?num=6384774" }
      ]
    },
    "land": {
      title: "토지",
      items: [
        { photo: "images/listings/land/land-oil-7.jpg", desc: "아라이동 · 주거지역토지매매 · 연북로접", link: "https://www.jejuall.com/CProperty/detail?num=5810104" },
        { photo: "images/listings/land/land-oil-1.jpg", desc: "애월 해안도로 인근 · 가문동포구 · 대지1필지 포함", link: "https://www.jejuall.com/CProperty/detail?num=6124481" },
        { photo: "images/listings/land/land-oil-2.jpg", desc: "협재리 타운하우스부지 · 한림읍 대형토지", link: "https://www.jejuall.com/CProperty/detail?num=6123435" },
        { photo: "images/listings/land/land-oil-3.jpg", desc: "봉성리 · 농지+임야 · 계획관리지역", link: "https://www.jejuall.com/CProperty/detail?num=6123418" },
        { photo: "images/listings/land/land-oil-4.jpg", desc: "애월 소길리 · 전·임야 2필지 · 도로접", link: "https://www.jejuall.com/CProperty/detail?num=5865841" },
        { photo: "images/listings/land/land-oil-5.png", desc: "이도이동 · 한일베라체 인근 · 기반시설있음", link: "https://www.jejuall.com/CProperty/detail?num=5865817" }
      ]
    },
    "warehouse": {
      title: "사업확장의 열쇠 알짜 창고 매물",
      items: [
        { photo: "images/listings/warehouse/warehouse-oil-1.jpg", desc: "일도이동 · 창고형사무실 · 반지하 임대", link: "https://www.jejuall.com/CProperty/detail?num=6356575" },
        { photo: "images/listings/warehouse/warehouse-oil-2.jpg", desc: "애월읍 애월리 · 신축 창고 매매", link: "https://www.jejuall.com/CProperty/detail?num=6328388" },
        { photo: "images/listings/warehouse/warehouse-oil-3.jpg", desc: "삼양일동 · 2종근린 · 창고용지", link: "https://www.jejuall.com/CProperty/detail?num=6218716" },
        { photo: "images/listings/warehouse/warehouse-oil-4.jpg", desc: "외도일동 · 창고 & 단독주택지 추천", link: "https://www.jejuall.com/CProperty/detail?num=6123352" },
        { photo: "images/listings/warehouse/warehouse-oil-5.png", desc: "오등동 · 애조로 인근 · 창고시설 매매", link: "https://www.jejuall.com/CProperty/detail?num=4762800" }
      ]
    },

    // ── 대표매물 ("지금 소개하는 매물" 3개 카드 전용) ──
    "featured-apt": {
      title: "인기만점 제주 아파트",
      items: [
        { photo: "images/listings/apartment/apt-oil-1.jpg", desc: "[오일장] 서사라사거리 · 한성베르뜨2차아파트 매매", link: "https://www.jejuall.com/CProperty/detail?num=6204684" },
        { photo: "images/listings/apartment/apt-oil-2.png", desc: "[오일장] 신제주로터리 · 코스모스태홍누리안5차 · 탑층", link: "https://www.jejuall.com/CProperty/detail?num=6359532" },
        { photo: "images/listings/apartment/apt-oil-9.jpg", desc: "[오일장] 노형동 · 노형e-편한세상 · 급매 · 리모델링", link: "https://www.jejuall.com/CProperty/detail?num=6389256" },
        { photo: "images/listings/apartment/apt-kcr-9.jpg", desc: "[교차로] 한성베르뜨2차 1동 · 서사라사거리", link: "https://land.jejukcr.com/offer/86521746" },
        { photo: "images/listings/apartment/apt-kcr-4.jpg", desc: "[교차로] 노형벨라시티 1동 · 쓰리룸 · 고층", link: "https://land.jejukcr.com/offer/86521740" },
        { photo: "images/listings/apartment/apt-kcr-6.jpg", desc: "[교차로] 코스모스태홍누리안5차 1동 · 신제주로터리", link: "https://land.jejukcr.com/offer/86521732" }
      ]
    },
    "featured-house": {
      title: "제주로망 전원주택/타운하우스",
      items: [
        { photo: "images/listings/house/house-oil-1.jpg", desc: "[오일장] 조천읍 와산리 · 전원주택 · 먼바다조망", link: "https://www.jejuall.com/CProperty/detail?num=6102922" },
        { photo: "images/listings/house/house-oil-3.jpg", desc: "[오일장] 연동 · 신제주초 인근 단독주택", link: "https://www.jejuall.com/CProperty/detail?num=5928113" },
        { photo: "images/listings/house/house-oil-2.jpg", desc: "[오일장] 해안초 인근 · 마당 넓은 단독주택", link: "https://www.jejuall.com/CProperty/detail?num=5890406" },
        { photo: "images/listings/house/house-kcr-8.jpg", desc: "[교차로] 노형동 라메종타운하우스 · 전세", link: "https://land.jejukcr.com/offer/86565558" },
        { photo: "images/listings/house/house-kcr-14.jpg", desc: "[교차로] 성산읍 다가구주택 · 해안도로뷰", link: "https://land.jejukcr.com/offer/86586728" },
        { photo: "images/listings/house/house-kcr-15.jpg", desc: "[교차로] 서광리 신축단독주택 · 영어교육도시 인근", link: "https://land.jejukcr.com/offer/86586720" }
      ]
    },
    "featured-sanga": {
      title: "새출발 든든한 상가",
      items: [
        { photo: "images/listings/sanga/sanga-oil-1.jpg", desc: "[오일장] 오라삼동 · 상가건물 매매 · 공실없음", link: "https://www.jejuall.com/CProperty/detail?num=6344401" },
        { photo: "images/listings/sanga/sanga-oil-12.jpg", desc: "[오일장] 한림읍 수원리 · 해안도로상가 · 카페음식점", link: "https://www.jejuall.com/CProperty/detail?num=6388034" },
        { photo: "images/listings/sanga/sanga-oil-13.jpg", desc: "[오일장] 아라일동 · 제대인근 1층상가점포", link: "https://www.jejuall.com/CProperty/detail?num=6389203" },
        { photo: "images/listings/sanga/sanga-kcr-1.jpg", desc: "[교차로] 제주공항 인근 · 대형상가 임대", link: "https://land.jejukcr.com/offer/86299148" },
        { photo: "images/listings/sanga/sanga-kcr-2.jpg", desc: "[교차로] 노형동 신축상가 · 대형상가 임대", link: "https://land.jejukcr.com/offer/86299128" },
        { photo: "images/listings/sanga/sanga-kcr-3.jpg", desc: "[교차로] 도남초 인근 · 해모로리치힐", link: "https://land.jejukcr.com/offer/86298965" }
      ]
    },

    // ── 추천매물 (히어로 우측 6개 카드 전용) ──
    "hero-apt": {
      title: "인기있는 제주도 아파트",
      items: [
        { photo: "images/listings/apartment/apt-kcr-9.jpg", desc: "한성베르뜨2차 1동 · 서사라사거리", link: "https://land.jejukcr.com/offer/86521746" },
        { photo: "images/listings/apartment/apt-kcr-4.jpg", desc: "노형벨라시티 1동 · 쓰리룸 · 고층 · 신축", link: "https://land.jejukcr.com/offer/86521740" },
        { photo: "images/listings/apartment/apt-kcr-6.jpg", desc: "코스모스태홍누리안5차 1동 · 신제주로터리 · 제주도청 인근", link: "https://land.jejukcr.com/offer/86521732" },
        { photo: "images/listings/apartment/apt-kcr-8.jpg", desc: "해밀마루 1동 · 외도 신축급 투룸", link: "https://land.jejukcr.com/offer/86521715" },
        { photo: "images/listings/apartment/apt-kcr-3.jpg", desc: "노형2차아이파크 202동 · 한라산전망 · 컨디션최상", link: "https://land.jejukcr.com/offer/86521653" },
        { photo: "images/listings/apartment/apt-kcr-2.jpg", desc: "노형아이파크 4동 · 한라초 인근", link: "https://land.jejukcr.com/offer/86521636" }
      ]
    },
    "hero-sanga": {
      title: "사업잘되는 상가 소개",
      items: [
        { photo: "images/listings/sanga/sanga-kcr-1.jpg", desc: "제주공항 인근 · 대형상가 임대 · 주차편리", link: "https://land.jejukcr.com/offer/86299148" },
        { photo: "images/listings/sanga/sanga-kcr-2.jpg", desc: "노형동 신축상가 · 대형상가 임대", link: "https://land.jejukcr.com/offer/86299128" },
        { photo: "images/listings/sanga/sanga-kcr-3.jpg", desc: "도남초 인근 · 해모로리치힐 · 주차편리", link: "https://land.jejukcr.com/offer/86298965" },
        { photo: "images/listings/sanga/sanga-kcr-4.jpg", desc: "외도일동 1층상가 · 임대 · 주차편리", link: "https://land.jejukcr.com/offer/86298719" },
        { photo: "images/listings/sanga/sanga-kcr-5.jpg", desc: "외도동 상가·사무실 임대 · 우대혜택", link: "https://land.jejukcr.com/offer/86298619" },
        { photo: "images/listings/sanga/sanga-kcr-6.jpg", desc: "마리나사거리 · 프랜차이즈 상가 · 주차장완비", link: "https://land.jejukcr.com/offer/86298602" }
      ]
    },
    "hero-house": {
      title: "마당있는 삶 단독주택",
      items: [
        { photo: "images/listings/house/house-kcr-8.jpg", desc: "노형동 라메종타운하우스 · 전세", link: "https://land.jejukcr.com/offer/86565558" },
        { photo: "images/listings/house/house-kcr-14.jpg", desc: "성산읍 · 다가구주택 · 해안도로뷰 · 성산일출봉 인근", link: "https://land.jejukcr.com/offer/86586728" },
        { photo: "images/listings/house/house-kcr-15.jpg", desc: "서광리 · 신축단독주택 · 영어교육도시 인근", link: "https://land.jejukcr.com/offer/86586720" },
        { photo: "images/listings/house/house-kcr-16.jpg", desc: "애월 · 안끄레힐1차 · 개별등기 타운하우스", link: "https://land.jejukcr.com/offer/86586714" },
        { photo: "images/listings/house/house-kcr-17.jpg", desc: "협재 · 더마라칸 · 풀옵션 타운하우스", link: "https://land.jejukcr.com/offer/86586705" },
        { photo: "images/listings/house/house-kcr-18.jpg", desc: "이도이동 단독주택 · 제주시청 인근", link: "https://land.jejukcr.com/offer/86586697" }
      ]
    },
    "hero-villa": {
      title: "멋과 실속 프리미엄 빌라",
      items: [
        { photo: "images/listings/villa/villa-kcr-14.jpg", desc: "마크힐애월2차 204동 · 오션뷰", link: "https://land.jejukcr.com/offer/86565507" },
        { photo: "images/listings/villa/villa-kcr-15.jpg", desc: "마크힐애월3차 3동 · 오션뷰세대", link: "https://land.jejukcr.com/offer/86565504" },
        { photo: "images/listings/villa/villa-kcr-16.jpg", desc: "마크힐노형 102동 · 태양광 · 전세대", link: "https://land.jejukcr.com/offer/86565499" },
        { photo: "images/listings/villa/villa-kcr-17.jpg", desc: "마크힐애월2차 204동 · 탑층 · 서부경찰서 인근", link: "https://land.jejukcr.com/offer/86565495" },
        { photo: "images/listings/villa/villa-kcr-18.jpg", desc: "마크힐노형 104동 · 잔여1세대 · 중개보수없음", link: "https://land.jejukcr.com/offer/86565494" },
        { photo: "images/listings/villa/villa-kcr-2.jpg", desc: "JDS빌리지 102동 · 도평동 · 올리모델링", link: "https://land.jejukcr.com/offer/86448998" }
      ]
    },
    "hero-presale": {
      title: "투자자가 먼저 아는 신축 분양",
      items: [
        { photo: "images/listings/presale/presale-oil-1.jpg", desc: "마크힐노형분양 · 마지막 1세대 · 중개보수없음", link: "https://www.jejuall.com/CProperty/detail?num=6338024" },
        { photo: "images/listings/presale/presale-oil-5.jpg", desc: "마크힐노형분양 · 잔여1세대 · 중개보수없음", link: "https://www.jejuall.com/CProperty/detail?num=6379552" },
        { photo: "images/listings/presale/presale-oil-2.jpg", desc: "마크힐애월2차 · 리모델링세대 · 분양가", link: "https://www.jejuall.com/CProperty/detail?num=6273897" },
        { photo: "images/listings/presale/presale-oil-3.jpg", desc: "노형생활권 신축빌라분양 · 한라산뷰 · 풀옵션", link: "https://www.jejuall.com/CProperty/detail?num=5442114" },
        { photo: "images/listings/presale/presale-oil-4.jpg", desc: "오등봉위파크제주1단지 분양권84B · 고층 · 무피", link: "https://www.jejuall.com/CProperty/detail?num=5926741" }
      ]
    },
    "hero-land": {
      title: "마음에 쏙 제주토지",
      items: [
        { photo: "images/listings/land/land-kcr-1.jpg", desc: "용담동 · 나대지 전 · 용두암해안도로 인근", link: "https://land.jejukcr.com/offer/86521604" },
        { photo: "images/listings/land/land-kcr-2.png", desc: "한경면 용수리 · 용수포구 인근 대지", link: "https://land.jejukcr.com/offer/86521596" },
        { photo: "images/listings/land/land-kcr-3.jpg", desc: "오라삼동 · 공동주택지 · 자연취락지구", link: "https://land.jejukcr.com/offer/86521580" },
        { photo: "images/listings/land/land-kcr-4.jpg", desc: "한림읍 동명리 · 서부소방서 인근", link: "https://land.jejukcr.com/offer/86521360" },
        { photo: "images/listings/land/land-kcr-5.jpg", desc: "도남동 · 단독주택·상가주택지", link: "https://land.jejukcr.com/offer/86521243" },
        { photo: "images/listings/land/land-kcr-6.jpg", desc: "애월해안도로 인근 · 대지포함 · 가문동포구 인근", link: "https://land.jejukcr.com/offer/86521230" }
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
