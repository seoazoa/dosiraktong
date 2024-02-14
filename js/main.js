window.onload = function () {
  // AOS적용
  AOS.init();
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  let scy = 0;
  // 2.class 적용 여부 결정
  // 웹버전일때
  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  // 반응형 (1024px) 햄버거바가 생겼을때
  // 햄버거버튼을 클릭했을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active");
      // // 스크롤이 되었다면
      // if (scy > 0) {
      //   header.classList.add("active");
      //   mbt.classList.add("active");
      // }else{
      //   header.classList.remove("active");
      //   mbt.classList.remove("active");
      // }
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
    }
  });

  // 비주얼 슬라이드
  // 1. 슬라이드(.swiper-slide) 개수 만큼 li 를 생성하기
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide"
  ).length;

  // 2. li 태그 출력 장소(UL 태그) 저장
  const swSlidePgUl = document.querySelector(".sw-visual-pg-list");

  // 3. li 에 html 로 작성할 글자를 생성한다.
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
  }

  // 4. html 을 추가해 준다.
  swSlidePgUl.innerHTML = swVisualHtml;

  // 5. 페이지네이션 관련 (코딩으로 생성한 li 태그 저장)
  const swViusalPgLi = document.querySelectorAll(".sw-visual-pg-list > li");
  // console.log(swViusalPgLi);
  //비주얼 swiper적용
  const swiper = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });
  // swiper 가 최초 생성될때
  swViusalPgLi[0].classList.add("active");
  // swiper가 바뀔때 마다 실행
  // swiper의 api 를 참조해서 작성
  swiper.on("slideChange" , function(){
    swViusalPgLi.forEach((item, index)=>{
      if(swiper.realIndex === index){
        item.classList.add("active")
      }
      else{
        item.classList.remove("active")
      }
    })
  })
// li에 클릭했을때 스와퍼가 적용
swViusalPgLi.forEach((item ,index)=>{
  item.addEventListener("click" , ()=>{
    swiper.slideToLoop(index, 500 )
  })
})
  // ========================================================
  // besiness 스와퍼 적용
  const swBusiness = new Swiper(".sw-business", {
    breakpoints: {
      slidesPerView: 1,
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // =======위로가기 버튼 기능
  const gotop = document.querySelector(".gotop");
  gotop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  let footer = document.querySelector(".footer");
  let footerY = footer.offsetTop;
  // console.log(footerY);
  let waypoint_footer = new Waypoint({
    element: document.querySelector(".footer"),
    handler: function (direction) {
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
    },
    offset: "95%",
  });
  let waypoint_service = new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "80%",
  });

  // business모달 기능
  const businessModal = document.querySelector(".business-modal");
  businessModal.addEventListener("click",function(){
    businessModal.style.display = "none"
  })
};