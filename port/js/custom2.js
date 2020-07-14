/* set */
TextColor();
// var s = skrollr.init();

// if ($(window).width() > 800) {
//     skrollr.init();
// }
    
$(window).resize(function() {
    if ( $(window).width() > 800 ) {
        var s = skrollr.init(); 
    } else {
        skrollr.init().destroy(); 
    }
});

/* link delay */
$(".link").click(function(e){
    e.preventDefault();

    let target = $(this);
    setTimeout(function(){
        target.addClass("blank").siblings().removeClass("blank");
    }, 600)
    
    let targetIndex = $(this).index() 
    let linkList = [];
    linkList.push("https://hyunjin912.github.io/portfolio/site-webstandard/index.html")
    linkList.push("https://www.figma.com/proto/knnrHvG9ZKTt33OSGKBC3h/webstandard?node-id=1%3A2&viewport=610%2C485%2C0.05899874493479729&scaling=contain")
    
    if ( $(this).hasClass("blank") ){
        setTimeout(function() {
            window.open(linkList[targetIndex], "_blank");
        }, 100); 
    } else {
        setTimeout(function() {
            window.open(linkList[targetIndex], "_blank");
        }, 800);
    }
});
$(".rightBtn").click(function(){
    $(this).addClass("movebg");
    $(".leftBtn").addClass("movebg");
});
$(".leftBtn").click(function(){
    $(this).removeClass("movebg");
    $(".rightBtn").removeClass("movebg");
});
    



/* mousemove */
// cursor
const cursor = $(".cursor")
// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

// circlemove
let adsf = $(".circle-wrap1").offset().top
let qwer = $(".circle-wrap1").offset().left - $(".circlebox").offset().left

$(window).on("mousemove", function(e){
    x = e.pageX;  //마우스 X축 좌표값
    y = e.pageY;  //마우스 Y축 좌표값

    // 원이 커서를 따라다니기 위해 left, top값 필요
    gsap.to(cursor,{duration: 0.3, left: x-100, top: y-100});

    // cirlceMove about mousemove
    // gsap.to(".circle-wrap1",{duration: 3, left: qwer + Math.max(-40, Math.min(40, qwer + $('.circle-wrap1').width()/2 - x)) , top: adsf - $("#section1").offset().top + Math.max(-40, Math.min(40, (adsf + $('.circle-wrap1').height()/2) - y))});

    
    
    // console.log((adsf - $("#section1").offset().top)  / 2);
    // console.log("커서와이 : "+y)
    // console.log("써클오프" + adsf); 
    // console.log("전체오프:"+$("#section1").offset().top)                                                                             
});


/* scroll */
$(window).scroll(function(){
    // scroll 값
    const scrollTop = $(window).scrollTop();
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

    /* titMove about scroll */
    $(".left-title").each(function(){
        if ( $(window).scrollTop() >= $(this).offset().top / 2 ){
            $(this).addClass("titMove").removeClass("titFadeOut");
        } else if( $(this).hasClass("titMove") ){
            $(this).removeClass("titMove").addClass("titFadeOut");
        }
    });

    /* imgMove about scroll */
    $(".img-wrap").each(function(){
        if ( $(window).scrollTop() >= $(".left-title").offset().top / 2 ){
            $(this).addClass("imgMove").removeClass("imgFadeOut");
        } else if( $(this).hasClass("imgMove") ){
            $(this).removeClass("imgMove").addClass("imgFadeOut");
        }
    });



    /* titleSideMove about scroll */
    if( $(window).scrollTop() >= $("#section1").offset().top / 2 && $(window).width() > 800 ){
        gsap.to(".left-num-wrap", {duration: 0.4, top: scrollTop / 3 })
        // gsap.to(".left-title.titMove", {duration: 0.4, left: Math.max(-250, -scrollTop / 5)})
    }
    // if( $(window).scrollTop() >= $("#section1").offset().top / 2 && $(window).width() >= 1680){
    //     gsap.to(".left-num-wrap", {duration: 0.1, top: scrollTop / 3 })
    //     gsap.to(".left-title.titMove", {duration: 0.4, left: Math.max(-250, -scrollTop / 5)})
    // }
    // if( $(window).scrollTop() >= $("#section1").offset().top / 2 && $(window).width() <= 1024){
    //     gsap.to(".left-title.titMove", {duration: 0.4, left: Math.max(-240, -scrollTop / 5)})
       
    // }

    /* code opacity */
    if( $(window).scrollTop() >= $(".codecontainer").offset().top * 0.8 ){
        $(".codecontainer").removeClass("opacity0").addClass("opacity1");
    } else {
        $(".codecontainer").removeClass("opacity1").addClass("opacity0");
    }
    
    console.log("스크롤/3 : "+$(window).scrollTop() / 3)

});
console.log( "윈도우 스크롤 탑 : "+$(window).scrollTop() )
console.log( "윈도우 스크롤 탑 + 하프높이: "+$(window).scrollTop() + $(window).height() / 2 )
console.log( "코드컨테이너 오프셋 탑"+$(".codecontainer").offset().top  * 0.7)
console.log( "윈도우 너비 : "+$(window).width() ) 
console.log( "윈도우 아우터 너비 : "+$(window).outerWidth() ) 
console.log( "섹션1 오프셋 탑 : "+$("#section1").offset().top / 4 )
console.log( "레프트 타이틀 너비 : "+$(".left-title h2").width() / 3.5 )


/* header */
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


/* section1 */
// theme 변경 탭 메뉴
$(".choice svg").hide().eq(1).show();
$(".theme").click(function(){
    $(this).toggleClass("rotate");
    $(".themelist").slideToggle(300);
});
// $(".themelist .theme-name").click(function(e){
//     e.preventDefault();
//     let themebg = ["owl", "Monokai", "owlLight"];
//     $(".theme").removeClass("rotate");
//     $(".themelist").slideUp(500).stop();
//     $(".editor-code").addClass(themebg[$(this).index()]);
// });
$(".themelist .theme-name:nth-child(1)").click(function(e){
    e.preventDefault();
    $(".themelist").slideUp(300).stop();
    $(".editor").removeClass("Monokai").removeClass("owlLight").addClass("owl");
    $(".theme .current-theme").text("Owl");
    $(this).find(".choice svg").show().parents("li.theme-name").siblings().find(".choice svg").hide();
});
$(".themelist .theme-name:nth-child(2)").click(function(e){
    e.preventDefault();
    $(".themelist").slideUp(300).stop();
    $(".editor").removeClass("owl").removeClass("owlLight");
    $(".theme .current-theme").text("Monokai");
    $(this).find(".choice svg").show().parents("li.theme-name").siblings().find(".choice svg").hide();
});
$(".themelist .theme-name:nth-child(3)").click(function(e){
    e.preventDefault();
    $(".themelist").slideUp(300).stop();
    $(".editor").removeClass("Monokai").removeClass("owl").addClass("owlLight");
    $(".theme .current-theme").text("Owl Light");
    $(this).find(".choice svg").show().parents("li.theme-name").siblings().find(".choice svg").hide();
});

$(".themelist a").click(function(){
    console.log( $(this).index() )
});

// 코드 상단 탭 메뉴
$(".menu li").click(function(e){
    e.preventDefault();
    $(this).find("a").addClass("active").next().show().parent().siblings().find("a").removeClass("active").next().hide();
});

// code
let htmlText = [];
htmlText.push(`&lt;!-- 
스킵 네비게이션은 링크를 건너뛰기 위해 제공되는 메뉴를 의미합니다.
웹 접근성을 준수하기 위해 원하는 영역으로 바로 이동할 수 있는 건너뛰기 링크를 반드시 제공해야 합니다.
--&gt;

&lt;div id="skip"&gt;
    &lt;a href="#"&gt;전체 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;배너 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;컨텐츠 메뉴 바로가기&lt;/a&gt;
&lt;/div&gt;`);

htmlText.push(`&lt;!--
이미지 스프라이트(image sprite)란 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하는 이미지를
의미합니다.
--&gt;

&lt;div class="header-icon"&gt;
    &lt;a href="#" class="icon1"&gt;&lt;span class="ir_pm"&gt;icon1&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon2"&gt;&lt;span class="ir_pm"&gt;icon2&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon3"&gt;&lt;span class="ir_pm"&gt;icon3&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon4"&gt;&lt;span class="ir_pm"&gt;icon4&lt;/span&gt;&lt;/a&gt;
&lt;/div&gt;`);

htmlText.push(`&lt;!--
slick.js는 제이쿼리 플러그인입니다. 이것을 이용해 이미지 슬라이드를 구성할 수 있습니다.
--&gt;

&lt;div class="ban"&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link1.jpg" alt="웹 표준 지침서 보기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link2.jpg" alt="CSS 버튼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
    &lt;div&gt;&lt;a href="#"&gt;&lt;img src="img/banner_link3.jpg" alt="로그인 폼 만들기"&gt;&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;`);

htmlText.push(`&lt;div class="lightbox"&gt;
    &lt;a href="img/sban07.jpg"&gt;&lt;img src="img/sban07.jpg" alt="이미지7"&gt;&lt;/a&gt;
    &lt;a href="img/sban08.jpg"&gt;&lt;img src="img/sban08.jpg" alt="이미지8"&gt;&lt;/a&gt;
    &lt;a href="img/sban09.jpg"&gt;&lt;img src="img/sban09.jpg" alt="이미지9"&gt;&lt;/a&gt;
&lt;/div&gt;`);

let cssText = [];
cssText.push(`/* 
스킵 네비게이션은 링크를 건너뛰기 위해 제공되는 메뉴를 의미합니다.
웹 접근성을 준수하기 위해 원하는 영역으로 바로 이동할 수 있는 건너뛰기 링크를 반드시 제공해야 합니다. 
*/

#skip {position: relative;}
#skip a {
    border: 1px solid #fff; background-color: #333; 
    color: #fff; position: absolute; left: 0; top: -50px; 
    width: 140px; text-align: center; 
    font-size: 14px; padding: 10px;
}
#skip a:active,            
#skip a:focus {top: 0px;}  /* 탭 버튼 누를 경우 나타남 */`);

cssText.push(`/*
이미지 스프라이트(image sprite)란 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하는 이미지를
의미합니다.
*/

.header .header-icon a {
    display: inline-block; width: 60px; height: 60px; 
    background-image: url(../img/icon.png);
}                             /* position값으로 이미지 변경 */
.header .header-icon a.icon1 {background-position: 0 0;}
.header .header-icon a.icon2 {background-position: 0 -60px;}
.header .header-icon a.icon3 {background-position: 0 -120px;}
.header .header-icon a.icon4 {background-position: 0 -180px;}
.header .header-icon a.icon1:hover {background-position: -60px 0;}
.header .header-icon a.icon2:hover {background-position: -60px -60px;}
.header .header-icon a.icon3:hover {background-position: -60px -120px;}
.header .header-icon a.icon4:hover {background-position: -60px -180px;}`);

cssText.push(`/*
slick.js는 제이쿼리 플러그인입니다. 이것을 이용해 이미지 슬라이드를 구성할 수 있습니다.
*/

.ban {position: relative; padding: 24px 0;}
.ban .slick-prev {
    position: absolute; left: -80px; top: 70px; width: 43px; height: 43px;
    background: url(../img/icon.png) -150px 0; text-indent: -9999px; cursor: pointer;
}
.ban .slick-next {
    position: absolute; right: -80px; top: 70px; width: 43px; height: 43px; 
    background: url(../img/icon.png) -150px -43px; text-indent: -9999px; cursor: pointer;
}

.ban .slick-prev:hover {background-position: -193px 0;}
.ban .slick-next:hover {background-position: -193px -43px;}
.ban img {border: 4px solid #dcdcdc;}
.ban img:hover {border-color: #98bcdc;}

.ban .slick-slide {margin: 10px;} 
.ban .slick-dots {
    position: absolute; bottom: 5px; 
    display: block; width: 100%; text-align: center;
}
.ban .slick-dots li {display: inline-block; margin: 5px;}
.ban .slick-dots li button {
    font-size: 0; line-height: 0; display: block; 
    width: 15px; height: 15px; 
    background: #5debc4; border-radius: 50%; cursor: pointer;
}
.ban .slick-dots li.slick-active button {background: #2bc8a3;}`);

cssText.push(`.ad h4 {
    font-size: 14px; color: #0093bd; 
    padding-bottom: 3px; font-weight: bold; margin-top: 15px;
}
.lightbox {
    display:grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
}
.lightbox a img {width: 100%;}`);

let jsText = [];
jsText.push(`// 스킵 네비게이션은 script를 사용하지 않습니다.`);
jsText.push(`// 이미지 스프라이트는 script를 사용하지 않습니다.`);
jsText.push(`/*
slick.js는 제이쿼리 플러그인입니다. 이것을 이용해 이미지 슬라이드를 구성할 수 있습니다.
*/

$('.ban').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});`);
jsText.push(`$(".lightbox").lightGallery();`);

// 코드 처음 보이는 화면
$(".code-content").hide().eq(0).show();
$("code.lh1").html(htmlText[0]);
$("code.lc1").html(cssText[0]);
$("code.lj1").html(jsText[0]);


// circle and code tapMenu
$(".sec1-circleAll").click(function(e){
    e.preventDefault();
    // circle-Tap
    $(this).addClass("active2").siblings().removeClass("active2");

    // code-tap-content
    $("code.lh1").html(htmlText[$(this).index()]);
    $("code.lc1").html(cssText[$(this).index()]);
    $("code.lj1").html(jsText[$(this).index()]);
    TextColor();
});
