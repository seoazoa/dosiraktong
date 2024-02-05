window.onload = function () {
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
  const htmlRoot = document.querySelector("html")
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani")
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active")
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active")
      // // 스크롤이 되었다면
      // if (scy > 0) {
      //   header.classList.add("active");
      //   mbt.classList.add("active");
      // }else{
      //   header.classList.remove("active");
      //   mbt.classList.remove("active");
      // }
    }else{
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani")
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active")
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active")
    }

  });

  // swiper적용
  const swiper = new Swiper(".sw-visual",{
    effect:"fade",
    loop:true,
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
  })
};