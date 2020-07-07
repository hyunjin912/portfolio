/* cursor */
const cursor = $(".cursor")

// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

$("#header").on("mousemove", function(e){
    gsap.to(cursor,{duration: 0.3, left: e.pageX - 100, top: e.pageY - 100});
});

/* scroll */
$(window).scroll(function(){
    // scroll 값
    const scrollTop = $(window).scrollTop();

    $(".scrollTop").text(parseInt(scrollTop));

    /* reveal */
    $(".box").each(function(){
        if ( $(window).scrollTop() >= $("#big-title").offset().top){
            $(this).addClass("reveal");
        } else {
            $(this).removeClass("reveal");
        }
    });
    $(".big-title div").each(function(){
        if ( $(window).scrollTop() >= $("#big-title").offset().top){
            $(this).addClass("reveal");
        } else {
            $(this).removeClass("reveal");
        }
    });
    
});

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
    gsap.to(".desc", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05, delay: 3.5});
    gsap.to(".cursorbg", 1, {opacity: 0, stagger: 0.05, delay: 3.5});
    gsap.to(".cursor", 1, {ease: "bounce.out", top: hHeight-100, left: hWidth-100, opacity: 1, width: 200, height: 200, stagger: 0.05, delay: 3.5});
},2000);

