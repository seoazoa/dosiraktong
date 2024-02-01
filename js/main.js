window.onload = function (){
    //상단 스크롤 기능 
    const header = document.querySelector(".header");
    let scy = 0
    // 2.class 적용 여부 결정
   window.addEventListener("scroll" ,function(){
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    if(scy > 0){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
   })
    
 }