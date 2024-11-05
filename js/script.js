$(".sub").hide()
$(".menu>li").mouseover(function(){
 $(this).children(".sub").stop().slideDown(300)
})
$(".menu>li").mouseout(function(){
 $(this).children(".sub").stop().slideUp(300)
})

$(".sitemap_bg").hide()
$(".m_btn").click(function(){
 $(".sitemap_bg").slideDown()
})
$(".close").click(function(){
 $(".sitemap_bg").slideUp()
})


let winWidth=$(window).outerWidth();
if(winWidth<=992){
 $(".sitemap_bg").addClass("mobile")
 $(".mobile .site_sub").hide()
 $(".mobile .site_menu>li").click(function(){
  $(this).children(".site_sub").slideToggle()
  $(this).siblings().children(".site_sub").slideUp()
  $(this).toggleClass("site_toggle")
  $(this).siblings().removeClass("site_toggle")
 })

}//if end

/* $(window).resize(function(){
 location.reload();
})//사이즈 바뀔때마다 새로고침시키는 것 */

let resizeTimer=null;//setTimeout함수 저장될 변수 null은 빈값
function rload(){
  location.reload();
}
$(window).resize(function(){
  clearTimeout(resizeTimer);//실행중인 setTimeout을 취소하는 함수
  resizeTimer = setTimeout(rload, 400);//0.4초뒤 호출
})

const main=new Swiper('.main .swiper',{
 loop:true,
 autoplay:{delay:3000},
 pagination: {
  el: ".btns .swiper-pagination",
  type: "fraction",
},
navigation: {
 nextEl: '.main .btn_next',
 prevEl: '.main .btn_prev',
},
})

const pagingSwiper=new Swiper('.main .swiper',{
 loop:true,
 pagination:{
  el:".ctrlbox>.swiper-pagination",
  type:"progressbar",
 },
})

main.controller.control=pagingSwiper;
/* swiper 2개 연결하여 pagination 사용 */

$(".family_list").hide();
$(".family_btn").click(function(){
  $(".family_list").slideToggle();
  $(".family_btn").toggleClass("toggle")
})
/* top */
$(".top_btn").hide()
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".top_btn").fadeIn()
    } else {
      $(".top_btn").fadeOut()
    }
  })
})

$(".top_btn").click(function(){
  $("html").animate({scrollTop:0},500)
})


$(".con1-1-2, .con1-1-3, .con1-1-4").hide()
$(".con1_list>li:nth-child(1)").click(function(){
  $(".con1-1-2, .con1-1-3, .con1-1-4").hide()
  $(".con1-1-1").show()
})
$(".con1_list>li:nth-child(2)").click(function(){
  $(".con1-1-1, .con1-1-3, .con1-1-4").hide()
  $(".con1-1-2").show()
})
$(".con1_list>li:nth-child(3)").click(function(){
  $(".con1-1-1, .con1-1-2, .con1-1-4").hide()
  $(".con1-1-3").show()
})
$(".con1_list>li:nth-child(4)").click(function(){
  $(".con1-1-1, .con1-1-2, .con1-1-3").hide()
  $(".con1-1-4").show()
})


/* aos */
AOS.init();