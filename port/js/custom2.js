/* set */
TextColor();
var s = skrollr.init();


/* mousemove */
// cursor
const cursor = $(".cursor")
// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

// circlemove
let adsf = $(".circle-wrap1").offset().top
let qwer = $(".circle-wrap1").offset().left

$(window).on("mousemove", function(e){
    x = e.pageX;  //마우스 X축 좌표값
    y = e.pageY;  //마우스 Y축 좌표값

    // 원이 커서를 따라다니기 위해 left, top값 필요
    gsap.to(cursor,{duration: 0.3, left: x-100, top: y-100});

    // gsap.to(".circle-wrap1.active2",{duration: 3, left: qwer + Math.max(-50, Math.min(50, qwer + $('.circle-wrap1').width()/2 - x)) , top: adsf - $("#section1").offset().top + Math.max(-50, Math.min(50, (adsf + $('.circle-wrap1').height()/2) - y))});
    // gsap.to(".circle-wrap1",{duration: 3, left: qwer + Math.max(-50, Math.min(50, qwer + $('.circle-wrap1').width()/2 - x)) , top: adsf - $("#section1").offset().top + Math.max(-50, Math.min(50, (adsf + $('.circle-wrap1').height()/2) - y))});
    
    console.log((adsf - $("#section1").offset().top)  / 2);
    console.log("커서와이 : "+y)
    console.log("써클오프" + adsf); 
    console.log("전체오프:"+$("#section1").offset().top)                                                                             
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

    /* titleMove */
    $(".left-title").each(function(){
        if ( $(window).scrollTop() >= $(this).offset().top / 2 ){
            $(this).addClass("titMove").removeClass("titFadeOut");
        } else {
            $(this).removeClass("titMove").addClass("titFadeOut");
        }
    });

    /* sideMove about scroll */
    if( $(window).scrollTop() >= $("#section1").offset().top / 2 ){
        // gsap.to(".left-num-wrap", {duration: 0.1, top: scrollTop / 3})
        gsap.to(".left-title", {duration: 0.4, left: Math.max(-260, -scrollTop / 5)})
       
    }

});


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
// 크롬 상단 탭 메뉴
$(".title-bar a").click(function(e){
    e.preventDefault();
    $(this).addClass("active").next().show().parent().siblings().find("a").removeClass("active").next().hide();
});

// code
let htmlText = [];
htmlText.push(`&lt;!-- 스킵 네비게이션 --&gt;
&lt;div id="skip"&gt;
    &lt;a href="#"&gt;전체 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;배너 메뉴 바로가기&lt;/a&gt;
    &lt;a href="#"&gt;컨텐츠 메뉴 바로가기&lt;/a&gt;
&lt;/div&gt;
&lt;!-- //스킵 네비게이션 --&gt;`);

htmlText.push(`&lt;div class="header-icon"&gt;
    &lt;a href="#" class="icon1"&gt;&lt;span class="ir_pm"&gt;icon1&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon2"&gt;&lt;span class="ir_pm"&gt;icon2&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon3"&gt;&lt;span class="ir_pm"&gt;icon3&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#" class="icon4"&gt;&lt;span class="ir_pm"&gt;icon4&lt;/span&gt;&lt;/a&gt;
&lt;/div&gt;`);

htmlText.push(`&lt;div class="ban"&gt;
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
cssText.push(`/* 스킵 내비게이션 */
#skip {position: relative;}
#skip a {
    border: 1px solid #fff; background-color: #333; 
    color: #fff; position: absolute; left: 0; top: -50px; 
    width: 140px; text-align: center; 
    font-size: 14px; padding: 10px;
}
#skip a:active,            
#skip a:focus {top: 0px;}  /* 탭 버튼 누를 경우 나타남 */`);

cssText.push(`.header .header-icon a {
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

cssText.push(`.ban {position: relative; padding: 24px 0;}
.ban .slick-prev {position: absolute; left: -80px; top: 70px; width: 43px; height: 43px;
    background: url(../img/icon.png) -150px 0; text-indent: -9999px; cursor: pointer;}
.ban .slick-next {position: absolute; right: -80px; top: 70px; width: 43px; height: 43px; 
    background: url(../img/icon.png) -150px -43px; text-indent: -9999px; cursor: pointer;}

.ban .slick-prev:hover {background-position: -193px 0;}
.ban .slick-next:hover {background-position: -193px -43px;}
.ban img {border: 4px solid #dcdcdc;}
.ban img:hover {border-color: #98bcdc;}

.ban .slick-slide {margin: 10px;} 
.ban .slick-dots {position: absolute; bottom: 5px; display: block; width: 100%; text-align: center;}
.ban .slick-dots li {display: inline-block; margin: 5px;}
.ban .slick-dots li button {font-size: 0; line-height: 0; display: block; width: 15px; height: 15px; background: #5debc4; border-radius: 50%; cursor: pointer;}
.ban .slick-dots li.slick-active button {background: #2bc8a3;}`);

cssText.push(`.ad h4 {font-size: 14px; color: #0093bd; padding-bottom: 3px; font-weight: bold; margin-top: 15px;}
.lightbox {
    display:grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
}
.lightbox a img {width: 100%;}`);

// 코드 처음 보이는 화면
$(".sec1-title-bar").find("div > div").hide().eq(0).show();
$("code.lh1").html(htmlText[0]);
$("code.lc1").html(cssText[0]);

// circle and chrome-code tapMenu
$(".sec1-circleAll").click(function(e){
    e.preventDefault();
    
    // circle-Tap
    $(this).addClass("active2").siblings().removeClass("active2");

    // chrome-code-tap-content
    $("code.lh1").html(htmlText[$(this).index()]);
    $("code.lc1").html(cssText[$(this).index()]);
    // $(".lj1").html(jsText[$(this).index()]);
    TextColor();
});
