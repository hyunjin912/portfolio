TextColor();

var s = skrollr.init();

/* cursor */
const cursor = $(".cursor")

// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();


let adsf = $(".circle-wrap1").offset().top
let qwer = $(".circle-wrap1").offset().left


$(window).on("mousemove", function(e){
    x = e.pageX;  //마우스 X축 좌표값
    y = e.pageY;  //마우스 Y축 좌표값

    // 원이 커서를 따라다니기 위해 left, top값 필요
    gsap.to(cursor,{duration: 0.3, left: x-100, top: y-100});


   
   
    // gsap.to(".circle-wrap1.active2",{duration: 3, left: qwer + Math.max(-50, Math.min(50, qwer + $('.circle-wrap1').width()/2 - x)) , top: adsf - $("#section1").offset().top + Math.max(-50, Math.min(50, (adsf + $('.circle-wrap1').height()/2) - y))});
    gsap.to(".circle-wrap1",{duration: 3, left: qwer + Math.max(-50, Math.min(50, qwer + $('.circle-wrap1').width()/2 - x)) , top: adsf - $("#section1").offset().top + Math.max(-50, Math.min(50, (adsf + $('.circle-wrap1').height()/2) - y))});
    
    console.log((adsf - $("#section1").offset().top)  / 2);
    console.log("커서와이 : "+y)
    console.log("써클오프" + adsf); 
    console.log("전체오프:"+$("#section1").offset().top)                                                                             
});

$(".sec1-circleAll").each(function(){

    $(this).click(function(e){
        e.preventDefault();
        $(this).addClass("active2").siblings().removeClass("active2");
    });
});


/* scroll */
$(window).scroll(function(){
    // scroll 값
    const scrollTop = $(window).scrollTop();
    let secTop = $("#section1").offset().top;

    $(".scrollTop").text(parseInt(scrollTop));
    /* reveal */
    $(".box").each(function(){
        if ( $(window).scrollTop() + $(window).height() / 2 >= $("#big-title").offset().top){
            $(this).addClass("reveal");
        } else {
            $(this).removeClass("reveal");
        }
    });
    $(".big-title svg text").each(function(){
        if ( $(window).scrollTop() + $(window).height() / 2 >= $("#big-title").offset().top){
            $(this).addClass("reveal");
        } else {
            $(this).removeClass("reveal");
        }
    });

    /* titleMove */
    $(".left-title").each(function(){
        if ( $(window).scrollTop() >= $(this).offset().top / 2 ){
            $(this).addClass("titMove").removeClass("titFadeOut");
        } else {
            $(this).removeClass("titMove").addClass("titFadeOut");
        }
    });

    if( $(window).scrollTop() >= $("#section1").offset().top / 2 ){
       

    //    gsap.to(".left-num-wrap", {duration: 0.1, top: scrollTop / 3})
       
        gsap.to(".left-title", {duration: 0.4, left: Math.max(-260, -scrollTop / 5)})
       
    }

    
});

// let timer = setTimeout(function(){
//     $(window).scroll(function(){
//         $("html, body").animate({scrollTop: $("#big-title").offset().top}, 600, "easeInOutExpo");
//     });
// });
// clearTimeout(timer);

// $('#big-title').on('scroll touchmove mousewheel', function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     return false;
// });
    
// $('#big-title').off('scroll touchmove mousewheel');


/* split */
$(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});

let hWidth = $("#header").outerWidth() /  2;
let hHeight = $("#header").outerHeight() / 2;

console.log("헤더너비 : "+hWidth);
console.log("헤더높이 : "+hHeight);
setTimeout(function(){
    gsap.to(".header-title h1 strong span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05});
    gsap.to(".header-title h1 em span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05, delay: 0.5});
    gsap.to(".sub-tit span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, stagger: 0.05, delay: 1.5});
    gsap.to(".desc", 0.3, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05, delay: 3.5});
    gsap.to(".cursorbg", 1, {opacity: 0, stagger: 0.05, delay: 4});
    // 원이 200px로 작아지면서 보이는 첫 화면에서의 위치를 중앙으로하기 위해 top, left값이 필요
    gsap.to(".cursor", 1, {ease: "bounce.out", borderRadius: "50%", top: hHeight-100, left: hWidth-100, opacity: 1, width: 200, height: 200, stagger: 0.05, delay: 4});
},2000);
