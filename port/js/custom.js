/* cursor */
const cursor = $(".cursor")

// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

$("body").on("mousemove", function(e){
    gsap.to(cursor,{duration: 0.3, left: e.pageX - (circleWidth / 2), top: e.pageY - (circleHeight / 2)});
});

/* scroll */
$(window).scroll(function(){
    // scroll 값
    const scrollTop = $(window).scrollTop();

    $(".scrollTop").text(parseInt(scrollTop));

    /* reveal */
    // $(".left-desc-wrap").each(function(){
    //     if ( $(window).scrollTop() + $(window).height() > $(this).offset().top ){
    //         $(this).addClass("reveal");
    //     } else {
    //         $(this).removeClass("reveal");
    //     }
    // });
    
    // $(".right-desc-wrap").each(function(){
    //     if ( $(window).scrollTop() + $(window).height() > $(this).offset().top ){
    //         $(this).addClass("reveal");
    //     } else {
    //         $(this).removeClass("reveal");
    //     }
    // });

    // $(".script-text").each(function(){
    //     if ( $(window).scrollTop() >= 20927 ){
    //         $(this).addClass("script-reveal");
    //     } else {
    //         $(this).removeClass("script-reveal");
    //     }
    // });


    /* titleMove */
    $(".left-title").each(function(){
        if ( $(window).scrollTop() + $(window).height() > $(this).offset().top ){
            $(this).addClass("titMove");
        } else {
            $(this).removeClass("titMove");
        }
    });
    $(".right-title").each(function(){
        if ( $(window).scrollTop() + $(window).height() > $(this).offset().top ){
            $(this).addClass("titMove");
        } else {
            $(this).removeClass("titMove");
        }
    });

    // if ( $(window).scrollTop() >= 21264) {
    //     $(".script-text").css({position: "fixed"})
    //     $(".script-num .snum1").css({position: "fixed"})
    //     $(".script-num .snum2").css({position: "fixed"})
    // } else {
    //     $(".script-text").css({position: "absolute"})
    //     $(".script-num .snum1").css({position: "absolute"})
    //     $(".script-num .snum2").css({position: "absolute"})
    // }
});

/* header */
/* split */
$(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});
setTimeout(function(){
    gsap.to(".split", 0.6, {opacity: 1});
    gsap.to(".header-title h1 strong span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05});
    gsap.to(".header-title h1 em span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05, delay: 0.5});
    gsap.to(".sub-tit span", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, stagger: 0.05, delay: 1.5});
    gsap.to(".desc", 0.6, {ease: Back.easeOut.config(1.7), opacity: 1, y: 0, stagger: 0.05, delay: 3.5});
},2000);


/* section2 */
/* code tap-menu */
$(".title-bar a").click(function(e){
    e.preventDefault();
    $(this).addClass("active").next().show().parent().siblings().find("a").removeClass("active").next().hide();
});

/* code content tap-menu */
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

// 처음 보이기 위한 화면
$(".s2-title-bar").find("div > div").hide().eq(0).show();
$("code.lh1").html(htmlText[0]);
$("code.lc1").html(cssText[0]);

$(".s2-circleAll").click(function(e){
    e.preventDefault();
    $(this).addClass("active2").siblings().removeClass("active2");
    console.log($("code.lh1"));
    $("code.lh1").html(htmlText[$(this).index()]);
    $("code.lc1").html(cssText[$(this).index()]);
    // $(".lj1").html(jsText[$(this).index()]);
    TextColor();
});


/* section3 */
let htmlText2 = [];
htmlText2.push(`&lt;header id="header"&gt;
    &lt;div class="container"&gt;
        &lt;div class="row"&gt;
            &lt;div class="header"&gt;
                &lt;div class="header-menu"&gt;
                    &lt;a href="#"&gt;Blog&lt;/a&gt;
                    &lt;a href="#"&gt;Github&lt;/a&gt;
                    &lt;a href="#"&gt;Webstandard&lt;/a&gt;
                &lt;/div&gt;
                &lt;!-- //header-menu --&gt;
                &lt;div class="header-tit"&gt;
                    &lt;h1&gt;Professional Web Publisher&lt;/h1&gt;&lt;br&gt;
                    &lt;a href="https://hyunjin912.github.io/Save/html/index.html"&gt;hyunjin912.github.io/Save/html/index.html&lt;/a&gt;
                &lt;/div&gt;
                &lt;!-- //header-tit --&gt;
                &lt;div class="header-icon"&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#"&gt;&lt;i class="fab fa-html5"&gt;&lt;/i&gt;&lt;span&gt;HTML5&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;&lt;i class="fas fa-air-freshener"&gt;&lt;/i&gt;&lt;span&gt;Github&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;&lt;i class="fas fa-home"&gt;&lt;/i&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;&lt;i class="fas fa-baby"&gt;&lt;/i&gt;&lt;span&gt;Twitter&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;!-- //header-icon --&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;/header&gt;

    &lt;nav id="nav"&gt;
    &lt;div class="container"&gt;
        &lt;div class="row"&gt;
            &lt;div class="nav"&gt;
                &lt;h2 class="ir_so"&gt;전체 메뉴&lt;/h2&gt;
                &lt;div&gt;
                    &lt;h3&gt;HTML Reference&lt;/h3&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML 태그&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;블록 요소/인라인 요소&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;DTD 선언&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;언어 속성 설정&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;title&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;meta&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;특수문자&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;하이퍼링크&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;style&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;html&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;head&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;div&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;table&gt;&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;HTML &lt;li&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;h3&gt;CSS Reference&lt;/h3&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS 선택자&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS 단위&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS 색상&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS 선언 방법&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;상대주소/절대주소&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;CSS float&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;이미지 표현방법&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;이미지 스프라이트&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;이미지 IR 효과&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;이미지 최적화&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;background&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;border&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;font&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;text-align&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;h3&gt;Webstandard&lt;/h3&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#"&gt;웹 표준&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;웹 접근성&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;W3C&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;웹 접근성 연구소&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;네이버 널리&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;다음 다룸&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#"&gt;웹 호환성&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;`);

htmlText2.push(`&lt;!-- 미디어쿼리에 관한 html은 없습니다. --&gt;`);

htmlText2.push(`&lt;section id="cont-right"&gt;
    &lt;h3 class="ir_so"&gt;반응형 사이트 오른쪽 사이트&lt;/h3&gt;
    &lt;article class="column col7"&gt;
        &lt;h4 class="col-tit"&gt;Effect1&lt;/h4&gt;
        &lt;p class="col-desc"&gt;CSS의 transform을 이용한 마우스 오버효과입니다.&lt;/p&gt;
        &lt;!-- 사이드1 --&gt;
        &lt;div class="side1"&gt;
            &lt;figure&gt;
                &lt;img src="assets/img/side1.jpg" alt="이미지1"&gt;
            &lt;/figure&gt;
        &lt;/div&gt;
        &lt;!-- //사이드1 --&gt;
    &lt;/article&gt;
    &lt;article class="column col8"&gt;
        &lt;h4 class="col-tit"&gt;Effect2&lt;/h4&gt;
        &lt;p class="col-desc"&gt;CSS의 transform을 이용한 마우스 오버효과입니다.&lt;/p&gt;
        &lt;!-- 사이드2 --&gt;
        &lt;div class="side2"&gt;
            &lt;figure class="front"&gt;
                &lt;img src="assets/img/side2.jpg" alt="이미지2"&gt;
                &lt;figcaption&gt;
                    &lt;h3&gt;Mouse Hover Front&lt;/h3&gt;
                    &lt;p&gt;마우스 오버 효과입니다.&lt;/p&gt;
                &lt;/figcaption&gt;
            &lt;/figure&gt;
            &lt;figure class="back"&gt;
                &lt;img src="assets/img/side2.jpg" alt="이미지2"&gt;
                &lt;figcaption&gt;
                    &lt;h3&gt;Mouse Hover Front&lt;/h3&gt;
                    &lt;p&gt;마우스 오버 효과입니다.&lt;/p&gt;
                &lt;/figcaption&gt;
            &lt;/figure&gt;
        &lt;/div&gt;
        &lt;!-- //사이드2 --&gt;
    &lt;/article&gt;
    &lt;article class="column col9"&gt;
        &lt;h4 class="col-tit"&gt;Effect3&lt;/h4&gt;
        &lt;p class="col-desc"&gt;CSS의 transform을 이용한 마우스 오버효과입니다.&lt;/p&gt;
        &lt;!-- 사이드3 --&gt;
        &lt;div class="side3"&gt;
            &lt;figure class="front"&gt;
                &lt;img src="assets/img/side3.jpg" alt="이미지3"&gt;
                &lt;figcaption&gt;
                    &lt;h3&gt;Mouse Hover&lt;/h3&gt;
                    &lt;p&gt;마우스 오버 효과입니다.&lt;/p&gt;
                &lt;/figcaption&gt;
            &lt;/figure&gt;
            &lt;figure class="back"&gt;
                &lt;img src="assets/img/side3.jpg" alt="이미지3"&gt;
                &lt;figcaption&gt;
                    &lt;h3&gt;Mouse Hover&lt;/h3&gt;
                    &lt;p&gt;마우스 오버 효과입니다.&lt;/p&gt;
                &lt;/figcaption&gt;
            &lt;/figure&gt;
        &lt;/div&gt;
        &lt;!-- //사이드3 --&gt;
    &lt;/article&gt;
&lt;/section&gt;`);

let cssText2 = [];
cssText2.push(`/* 시맨틱 태그에 관한 css는 없습니다. */`);

cssText2.push(`/* 미디어 쿼리 */
@media (max-width: 1220px){
    .container {width: 100%;}
    .row {padding: 0 15px;}

    #contents .container {border: 0;}

    .lightbox {grid-template-columns: repeat(4, 1fr);}
    .lightbox a:nth-child(5n) {display: none;}

}

@media (max-width: 1024px){
    .lightbox {grid-template-columns: repeat(3, 1fr);}
    .lightbox a:nth-child(10) {display: block;}

}

@media (max-width: 960px){
    .nav > div {float: none; width: 100%;}
    .nav > div li {width: 33.3333%;}
    .nav > div:last-of-type {width: 100%;}
    .nav > div:last-of-type li {width: 33.3333%;}
    .nav > div ul {margin-bottom: 10px;}

    #cont-right {
        overflow: hidden; position: static; width: 100%;
        border-top: 1px solid #dbdbdb; 
    }
    #cont-right .column {float: left; width: 33.3333%; box-sizing: border-box;}
    #cont-right .column.col7 {border-right: 1px solid #dbdbdb; border-bottom: 0;}
    #cont-right .column.col8 {border-right: 1px solid #dbdbdb; border-bottom: 0;}
    #cont-center {margin-right: 0; border-right: 0;}
}

@media (max-width: 768px){
    #cont-left {float: none; width: 100%;}
    #cont-center {border-left: 0;} 
}

@media (max-width: 600px){
    .nav > div li {width: 50%;}
    .nav > div:last-of-type li {width: 50%;}

    .header {height: auto;}
    .header .header-tit {display: none;}
    .header .header-icon {display: none;}

    .title .btn {display: none;}

    #cont-right .column {width: 50%;}
    #cont-right .column.col8 {border-right: 0;}
    #cont-right .column.col9 {display: none;}

    .column.col1 .col-tit {display: none;}
    .column.col1 .col-desc {display: none;}
    .column.col1 {padding: 0; border-bottom: 0;}
    .column.col1 .menu li a i {display: none;}
    .column.col1 .menu ul {overflow: hidden;}
    .column.col1 .menu ul li {float: left; width: 33.3333%; text-align: center; border-right: 1px solid #dbdbdb; box-sizing: border-box;}
    .column.col1 .menu ul li a {color: #fff; text-shadow: 0 0 5px rgba(0,0,0,0.7);}
    .column.col1 .menu ul li a:hover {box-shadow: none; background: rgba(36,130,174,0.6);}
    .column.col1 .menu ul li:nth-child(3n) {border-right: 0;}
    .column.col2 {background: #fff;}

    .lightbox {grid-template-columns: repeat(2, 1fr);}
    .lightbox a:nth-child(9) {display: none;}
}

@media (max-width: 320px){
    .lightbox {grid-template-columns: repeat(1, 1fr);}

    #cont-right .column {width: 100%;}
    #cont-right .column.col7 {border-right: 0; border-bottom: 1px solid #dbdbdb;}
}`);

cssText2.push(`/* cont-right 이미지 Mouse Hover Effect1 */
.side1 figure {
    position: relative;
    overflow: hidden;
}
.side1 figure {
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
   
.side1 figure::before {
    position: absolute; content: "";
    width: 60px; height: 1px; background: #000;
    left: 50%; top: 50%; z-index: 1;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}
.side1 figure::after {
    position: absolute; content: "";
    width: 1px; height: 60px; background: #000;
    left: 50%; top: 50%; z-index: 1;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

.side1 figure img{transition: all 0.3s ease; }
.side1 figure:hover img{opacity: 0.6}
.side1 figure:first-child:before {left: -20%;}
.side1 figure:hover:first-child:before {left: 50%;}
.side1 figure:first-child:after {top: -20%;}
.side1 figure:hover:first-child:after {top: 50%;}

/* cont-right 이미지 Mouse Hover Effect2 */
.side2 {position: relative; perspective: 1000px;}
.side2 .front{}
.side2 .back{position: absolute; left: 0; top: 0; z-index: -1;}
.side2 .front{transform: rotatey(0);transition: transform 0.6s ease; backface-visibility: hidden;}
.side2:hover .front {transform: rotatey(180deg);}
.side2 .back {transform: rotatey(-180deg); transition: transform 0.6s ease;}
.side2:hover .back {transform: rotateY(0deg);}
.side2 figcaption {
    position: absolute; bottom: 0; left: 0;
    background: rgba(0,0,0,0.4);
    width: 100%; padding: 20px;
    box-sizing: border-box;
    color: #fff;
} 
.side2 figcaption h3 {
    font-size: 20px; padding-bottom: 5px;
    color: #fff;
} 
.side2 figcaption p {font-size: 16px;} 

/* cont-right 이미지 Mouse Hover Effect3 */
.side3 {position: relative; perspective: 1000px;}
.side3 .front {
    position: absolute; left: 0; top: 0; z-index:10;
    transform-style: preserve-3d;
}
.side3 .front img {}
.side3 .front figcaption {
    position: absolute; left: 50%; top: 50%; 
    transform: translate(-50%, -50%) translatez(100px);
    background: rgba(0,0,0,0.5);
    text-align: center;
    backface-visibility: hidden;
    color: #fff;
    padding: 1rem;
    white-space: nowrap;
}
.side3 .front figcaption h3 {
    font-size: 1.3rem;
    padding-bottom: 0.4rem;
    color: #fff;
}
.side3 .front figcaption p {}

.side3 .back {
    position: absolute; left: 0; top: 0;
    transform-style: preserve-3d;
}
.side3 .back img {}
.side3 .back figcaption {
    position: absolute; left: 50%; top: 50%; 
    transform: translate(-50%, -50%) translatez(100px);
    background: rgba(0,0,0,0.5);
    text-align: center;
    backface-visibility: hidden;
    color: #fff;
    padding: 1rem;
    white-space: nowrap;
}
.side3 .back figcaption h3 {
    font-size: 1.3rem;
    padding-bottom: 0.4rem;
    color: #fff;
}
.side3 .back figcaption p {}

.side3 .front {
    transform: rotatey(0);
    transition: transform 1s;
    backface-visibility: hidden;
  }
  .side3:hover .front {
    transform: rotatey(180deg);
}
.side3 .back{
    transform: rotatey(-180deg);
    transition: transform 1s;
    backface-visibility: hidden;
  }
  .side3:hover .back{
    transform: rotatey(0deg);
  }`);

// // 처음 보이기 위한 화면
$(".s3-title-bar").find("div > div").hide().eq(0).show();
$("code.lh2").html(htmlText2[0]);
$("code.lc2").html(cssText2[0]);

$(".s3-circleAll").click(function(e){
    e.preventDefault();
    $(this).addClass("active3").siblings().removeClass("active3");
    console.log($("code.lh2"));
    $("code.lh2").html(htmlText2[$(this).index()]);
    $("code.lc2").html(cssText2[$(this).index()]);
    // $(".lj2").html(jsText2[$(this).index()]);
    TextColor();
});


/* section4 */
/* code tap-menu */
$(".title-bar2 a").click(function(e){
    e.preventDefault();
    $(this).addClass("active2").next().show().parent().siblings().find("a").removeClass("active2").next().hide();

});

let htmlText3 = [];
htmlText3.push(`&lt;ul class="menu-wrap"&gt;
    &lt;li class="color"&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;전체&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;면&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;스낵&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;음료&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;냉동식품&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;국내영업&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;해외(수출,수입)&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;해외상품&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;홈페이지&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;견학&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;기업 일반 정보&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;채용&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#menu-name" class="menu-name"&gt;기타&lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;`);

htmlText3.push(`&lt;header id="header"&gt;
    &lt;div class="header"&gt;
        &lt;h1 title="메인으로 가기"&gt;
            &lt;a href="https://hyunjin912.github.io/Save/html/nongshim/index.html"&gt;
            &lt;svg x="0px" y="0px" width="133.5px" height="42.66px" viewBox="0 0 133.5 42.66"&gt;
                &lt;path class="tx" d="M122.1,20.287c0.016,1.912,1.549,3.463,3.461,3.463c1.914,0,3.463-1.55,3.463-3.463v-9.566
                    c0-1.913-1.549-3.463-3.463-3.463c-1.912,0-3.461,1.55-3.461,3.463l0.016,5.645c0,0-0.436,1.881-2.495,1.961
                    c-2.062,0.079-7.646-2.813-9.688-8.158c-0.73-1.786-1.748-2.495-3.326-2.495c-1.562,0-2.883,0.995-3.313,2.456
                    c-1.935,6.374-6.489,8.345-7.916,8.444c-1.11,0.109-1.862,0.833-1.862,1.812c0,0.98,0.752,1.624,1.902,1.624
                    c2.495,0,7.487-1.544,11.25-5.585C110.667,20.347,118.896,23.912,122.1,20.287" /&gt;
                &lt;path class="tx"
                    d="M57.05,16.928c-1,0-1.81-0.81-1.81-1.81l0.011-4.872c0-1.912,1.55-3.463,3.463-3.463
                    c1.912,0,3.424,1.551,3.424,3.463v3.09h19.838c2.229,0,2.908-0.488,3.615-0.713c0.989-0.317,2.092-0.103,2.512,0.84
                    c0.42,0.943-0.072,1.885-0.875,2.404c-0.805,0.519-2.607,1.034-5.252,1.034h-7.575v1.902l13.726,0.032c1,0,1.81,0.81,1.81,1.81
                    c0,0.999-0.81,1.809-1.81,1.809H54.673c-0.999,0-1.809-0.81-1.809-1.809c0-1,0.81-1.81,1.809-1.81l12.954-0.032V16.9L57.05,16.928z" /&gt;
                &lt;path class="tx" d="M54.529,30.211c0-3.925,7.487-7.108,16.723-7.108c9.234,0,16.722,3.183,16.722,7.108
                    s-7.487,7.107-16.722,7.107C62.017,37.318,54.529,34.136,54.529,30.211 M71.252,33.908c5.383,0,9.748-1.655,9.748-3.697
                    s-4.365-3.697-9.748-3.697c-5.385,0-9.749,1.655-9.749,3.697S65.867,33.908,71.252,33.908" /&gt;
                &lt;path class="tx"
                    d="M96.835,25.754c0-1,0.81-1.809,1.81-1.809h28.641c0.999,0,1.809,0.809,1.809,1.809v8.022
                    c0,0.999-0.81,1.81-1.809,1.81H98.645c-1,0-1.81-0.811-1.81-1.81V25.754z M103.695,31.994h18.42v-4.517h-18.42V31.994z" /&gt;
                &lt;path fill="#FFFFFF" d="M25.378,42.66c13.35,0,24.171-9.229,24.171-20.609c0-11.383-10.821-20.61-24.171-20.61
                    c-13.349,0-24.171,9.227-24.171,20.61C1.207,33.432,12.029,42.66,25.378,42.66" /&gt;
                &lt;path fill="#E50013"
                    d="M2.938,22.051c0-10.568,10.047-19.134,22.44-19.134c12.394,0,22.44,8.566,22.44,19.134
                    c0,10.566-10.046,19.133-22.44,19.133C12.985,41.184,2.938,32.617,2.938,22.051 M25.378,25.294c3.937,0,7.128-4.593,7.128-10.259
                    c0-5.665-3.191-10.259-7.128-10.259s-7.127,4.594-7.127,10.259C18.251,20.701,21.441,25.294,25.378,25.294" /&gt;
            &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/h1&gt;
        &lt;nav id="nav" class="nav"&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="https://eodnd1597.github.io/port99/nongsim/sub/subpage.html"&gt;&lt;span&gt;농심소개&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="https://eodnd1597.github.io/port99/nongsim/sub/subpage2.html"&gt;&lt;span&gt;지속가능경영&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="https://tmdrb487.github.io/Save/html/nongsimme/index.html"&gt;&lt;span&gt;홍보센터&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="https://tmdrb487.github.io/Save/html/nongsimme2/index.html"&gt;&lt;span&gt;투자정보&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li class="underline"&gt;&lt;a href="#"&gt;&lt;span&gt;고객지원&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li class="live"&gt;&lt;a href="../sub2/index.html"&gt;N.LIVE&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
        &lt;ul class="side-nav"&gt;
            &lt;li&gt;
                &lt;a href="#"&gt;
                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25px"
                        height="25px"&gt;
                        &lt;path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /&gt;
                        &lt;path d="M0 0h24v24H0z" fill="none" /&gt;
                    &lt;/svg&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href="#"&gt;
                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25px"
                        height="25px"&gt;
                        &lt;path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /&gt;
                        &lt;path d="M0 0h24v24H0z" fill="none" /&gt;
                    &lt;/svg&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href="#"&gt;
                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25px"
                        height="25px"&gt;
                        &lt;path d="M0 0h24v24H0z" fill="none" /&gt;
                        &lt;path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /&gt;
                    &lt;/svg&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href="#"&gt;
                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="25px"
                        height="25px"&gt;
                        &lt;path d="M0 0h24v24H0V0z" fill="none" /&gt;
                        &lt;path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" /&gt;
                    &lt;/svg&gt;
                &lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;div id="nav2-wrap"&gt;
            &lt;div class="nav2-container"&gt;
                &lt;ul class="nav2-contents"&gt;
                    &lt;li&gt;
                        &lt;a href="#" class="b-arrow" title="뒤로가기"&gt;
                        &lt;svg class="icon-arrow-svg" alt="뒤로가기"  viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;&lt;g stroke="none" stroke-width="1" fill-rule="evenodd"&gt;&lt;path d="M5.7996,0.25 L6.4996,0.945 L1.9056,5.5 L15.5,5.5002 L15.5,6.5002 L1.9056,6.5 L6.4996,11.056 L5.7996,11.75 L-0.0004,6 L5.7996,0.25 Z"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt;
                        &lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li&gt;&lt;span&gt;고객지원&lt;/span&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;span&gt;자주묻는 질문&lt;/span&gt;&lt;/li&gt;
                    &lt;li&gt;
                        &lt;a href="#" class="m-arrow" title="메뉴 펼쳐보기"&gt;
                            &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
                            &lt;/svg&gt;
                        &lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li&gt;
                        &lt;a href="#" class="d-more"&gt;
                            &lt;i class="fas fa-ellipsis-v"&gt;&lt;/i&gt;
                        &lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="up-btn"&gt;
            &lt;a href="#"&gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                    &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                    &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
                &lt;/svg&gt;
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/header&gt;`);

htmlText3.push(`&lt;ul class="sub-name"&gt;
    &lt;li class="li-1"&gt;
        &lt;a href="#li-1" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 새우깡과 매운 새우깡의 열량이 차이가 나는 이유는 매운 맛 때문인가요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;매운새우깡과 새우깡의 열량차는 단순히 DHA 첨가에 기인하지는 않으며 매운새우깡의 시즈닝의 경우도 단순한 매운맛 시즈닝이 아닌 복합된 원료를 사용합니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-2"&gt;
        &lt;a href="#li-2" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 견학 신청은 어떻게 해야하나요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;공장 견학 신청은 매달 1~4일 농심 홈페이지 [홍보센터] &gt; [공장견학] &gt; [견학신청] 에서 로그인 후 신청하실 수 있습니다. 신청자들을 대상으로 추첨을 통해 선정하고 있습니다. &lt;a href="#"&gt;[농심 공장견학 신청 바로가기] 링크&lt;/a&gt;&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-3"&gt;
        &lt;a href="#li-3" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 공장 견학 시 중식 제공을 하나요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;중식은 제공되지 않습니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-4"&gt;
        &lt;a href="#li-4" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 공장 견학 시 제품 시식 기회가 주어지나요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;농심 공장을 견학하시면 견학을 마친 후에 저희가 마련한 답례품을 드립니다. 답례품은 농심에서 생산한 주요 제품들로 구성되어 있습니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-5"&gt;
        &lt;a href="#li-5" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 견학 가능한 대상은 어떠한가요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;견학 대상 인원은 견학을 희망하는 모든 2~30명 이상의 단체(초등학교 3학년 이상)면 가능합니다. 공장별로 가능 대상이 조금씩 차이나니 [견학신청] 페이지를 확인해주세요. http://www.nongshim.com/tour/tour_introduction 링크&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-6"&gt;
        &lt;a href="#li-6" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 새우깡의 깡의 기원에 대해서 궁금합니다.&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;새우깡은 우리 민족 고유의 간식과자라 할 수 있는 뻥튀기 제품에서 착안해 상품화한 것입니다. 개발 당시 농심 회장의 어린 딸이 '아리랑'이란 노래를 '아리깡 아리깡 아라리요~'라고 부르는 것에 힌트를 얻었고 우리 민족 고유의 음식 이름 중 '깡보리밥' 등에서 쓰이는 깡이란 말이 신선하고 부드럽게 느껴져 '새우+깡'이 결합되어 새우깡이라는 단어가 생겨난 것입니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-7"&gt;
        &lt;a href="#li-7" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 견학을 주말에도 할 수 있나요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;견학 가능 공장은 안양, 안성, 아산, 구미, 부산 공장이며 견학은 평일 (공휴일 제외)만 가능합니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-8"&gt;
        &lt;a href="#li-8" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 농심 공장 견학을 가족끼리 하고 싶은데 가능한가요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;공장견학은 단체견학만 접수 받고 있습니다. 또한 견학 인원이 2~30명 이상이 되어야 견학이 가능합니다.&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-9"&gt;
        &lt;a href="#li-9" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 농심의 채용 시기는 언제인가요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;㈜농심의 채용은 크게 공개채용과 수시채용으로 나누어 운영하고 있습니다. [공개채용] * 채용대상 : 4년제 대졸이상 학력소지자 * 채용시기 : 하반기 10월 실시 * 채용공고 : 홈페이지, 취업포탈사이트, 대학교 취업게시판 * 접수방법 : 홈페이지 접수 * 합격자 통보방법 : e-mail, SMS(문자서비스) 등 [수시채용] * 채용대상 : 고졸, 전문대졸, 대졸이상 * 채용시기 : 결원 인력발생시 수시발생 * 채용공고 : 농심 채용홈페이지, 취업포탈사이트, 대학교 취업게시판 * 접수방법 : 우편접수 및 e-mail 접수 * 합격자 통보방법 : SMS(문자서비스) 및 유선(전화)&lt;/div&gt;
    &lt;/li&gt;
    &lt;li class="li-10"&gt;
        &lt;a href="#li-10" class="clearfix"&gt;&lt;img src="assets/img/question.jpg" alt=""&gt;&lt;span&gt;[전체] 견학 담당자와 직접 연락이 가능한가요?&lt;/span&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"&gt;
                &lt;path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;
                &lt;path d="M0 0h24v24H0z" fill="none"/&gt;
            &lt;/svg&gt;
        &lt;/a&gt;
        &lt;div class="opencont"&gt;견학 담당자와 직접 연락을 원하시면 농심 홍보팀 혹은 해당 공장으로 연락하여 주시기 바랍니다. 안양공장 031)450-5515 안성공장 031)8046-6515 아산공장 041)540-4713 구미공장 054)469-5017 부산공장 051)366-5326 홍 보 팀 02)820-7567&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href="#contmore" class="contmore"&gt;&lt;img src="assets/img/more.jpg" alt="리스트 더보기"&gt;&lt;br&gt;&lt;span&gt;리스트 더보기(1/16)&lt;/span&gt;&lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;`);

let cssText3 = [];
cssText3.push(`.contents-wrap ul.menu-wrap {
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(7, 1fr);
}
.contents-wrap ul.menu-wrap > li {
    height: 62px;
    line-height: 62px;
    border: 1px solid #ddd;
    font-size: 16px;
    margin-left: -1px;
    margin-top: -1px;
}
.contents-wrap ul.menu-wrap > li.color{
    background: #ca0202;
}
.contents-wrap ul.menu-wrap > li.color a.menu-name{
    color: #fff;
}
.contents-wrap ul.menu-wrap > li.color a.menu-name:hover{
    color: #fff;
}
.contents-wrap ul.menu-wrap > li > a.menu-name {
    display: block;
    width: inherit;
    text-align: center;
    text-decoration: none
}
.contents-wrap ul.menu-wrap > li > a.menu-name:hover {
    color: #000;
}`);

cssText3.push(`/* 헤더 */
.header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.header h1 {
    width: 140px; 
    margin: 18px 0 0 20px;
}
.header h1 svg {
    fill: #000; 
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.header h1 svg:hover {
  /* fill: #000; */
}
.header .nav li {
    display: inline;
}
.header .nav li a {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    padding: 26px 20px;
    display: inline-block;
}
.header .nav li a span {
    position: relative;
}
.header .nav li a span::before {
    content: '';
    display: block;
    position: absolute; bottom: -3px; left: 50%;
    width: 0%; height: 0;
    border-bottom: 2px solid #d83832;
    transform: translateX(-50%);
    transition: width 0.3s;
}
.header .nav li a span:hover::before {
    width: 100%;
}
.header .nav li:nth-child(5) a span::before {
    display: none;
}
.header .nav li.live a {
    padding: 4px 20px 6px 20px;
    display: inline-block;
    border: 1px solid #000;
    border-radius: 20px;
}
.header .nav li.underline span {
    border-bottom: 2px solid #d83832;
    padding-bottom: 2px;
}
.header .side-nav {
    margin-right: 40px;
}

.header .side-nav li {
    display: inline;
}
.header .side-nav li a {
    width: 25px;
    display: inline-block;
    padding: 28px 10px 20px 20px;
}
.header .side-nav li a svg {
    fill: #000;
}
.header .up-btn {
    transform: rotate(90deg);
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1000;
}
.header .up-btn a {
    display: block;
    width: 50px; height: 50px;
    background: #fff;
    text-align: center;
    border: 1px solid #000;
    box-sizing: border-box;
}
.header .up-btn svg {
    width: 30px; height: 30px;
    margin-top: 8px;
}

/* 헤더 메뉴2 */
#nav2-wrap {
    position: fixed;
    left: 0;
    top: 76px;
    z-index: 1000;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
}
#nav2-wrap.on {
    position: fixed; top: -80px; 
}
.nav2-container {
    position: relative;
} 
.nav2-contents {
    transition: background 0.5s;
}
.nav2-contents:hover {
    background: #fff;
}
.nav2-contents:hover li .b-arrow {
    border-color: #ccc;
}
.nav2-contents:hover .b-arrow svg {
    fill: #333;
}
.nav2-contents:hover li span {
    color: #333;
}
.nav2-contents:hover li:nth-child(2)::after {
    color: #333;
}
.nav2-contents:hover li .m-arrow svg {
    fill: #333;
}
.nav2-contents:hover .d-more {
    border-color: #ccc;
}
.nav2-contents:hover .d-more i {
    color: #333;
}
.nav2-contents li {
    display: inline-block;
    padding: 14px 17px 14px 17px;
}
.nav2-contents li:nth-child(1) {
    padding: 14px 4px 14px 26px;
}
.nav2-contents li:nth-child(2) {
    position: relative;
}
.nav2-contents li:nth-child(2)::after {
    content: '/';
    position: absolute; top: 15px; right: -5px;
    color: #fff;
}
.nav2-contents li:nth-child(4) {
    position: absolute; top: 9px; left: 250px;
}
.nav2-contents li:nth-child(5) {
    position: absolute; top: 1px; right: 40px;
}
.nav2-contents li .b-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; height: 40px;
    border: 1px solid #fff;
}
.nav2-contents .b-arrow svg {
    width: 16px; height: 12px;
    fill: #fff;
}
.nav2-contents li span {
    color: #fff;
    font-size: 14px;
}
.nav2-contents li .m-arrow {
    transition: border 0.4s
}
.nav2-contents li .m-arrow:hover {
    border-bottom : 2px solid red;
}
.nav2-contents li .m-arrow svg {
    transform: rotate(-90deg);
    fill: #fff;
    width: 25px; height: 25px;
}
.nav2-contents li .d-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; height: 40px;
    border: 1px solid #fff;
    transition: border 0.4s
}
.nav2-contents li .d-more:hover {
    border-bottom : 2px solid red;
}
.nav2-contents li .d-more i {
    color: #fff;
    font-size: 20px;
}`);

cssText3.push(`.menu-wrap .sub-name {
    position: absolute; left: 0; top: 290px;
}
.menu-wrap .sub-name li {
    /* position: relative; 없어도 되는 것 같다. */
}
.menu-wrap .sub-name li a {
    position: relative;
    text-decoration: none;
    display: block;
    width: 1200px;
    padding: 14px 90px 14px 35px;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
}
.menu-wrap .sub-name li:last-child {
    position: relative;
}
.menu-wrap .sub-name li:last-child a.contmore {
    border: 0;
    height: 200px;
    display: block;
}
.menu-wrap .sub-name li:last-child a.contmore img{
    width: 50px;
    position: absolute; top: 50%; left: 45%;
    translate: translate(-50%, -50%);
}
.menu-wrap .sub-name li:last-child a.contmore span{
    font-size: 20px;
    float: none;
    position: absolute; top: 80%; left: 40%;
    translate: translate(-50%, -50%);
}
.menu-wrap .sub-name li:nth-child(1) a {
    border-top: 1px solid #e4e4e4;
}
.menu-wrap .sub-name li a:hover {
    color: #000;
}
.menu-wrap .sub-name li a img {
    display: block;
    width: 20px;
    float: left;
    margin: 13px 8px 0 0;
}
.menu-wrap .sub-name li a span {
    display: block;
    float: left;
}
.menu-wrap .sub-name li a svg {
    fill: #999;
    width: 40px; height: 40px;
    position: absolute; top: 50%; right: 4%;
    transform: translate(50%, -50%) rotate(-90deg);
}
.menu-wrap .sub-name li .opencont {
    width: 1200px;
    padding: 60px 83px 60px 35px;
    line-height: 2;
    border-bottom: 1px solid #ca0202;
    box-sizing: border-box;
    color: #777;
}
.menu-wrap .sub-name li .opencont a {
    border: 0;
    padding: 0;
    display: inline;
}`);

let jsText3 = [];
jsText3.push(`//제목 분류 탭 색깔
$(".menu-wrap > li").click(function(){
   $(this).addClass("color").siblings().removeClass("color"); 
});`);

jsText3.push(`let wHeight = $(window).height();         //브라우저 높이
let dHeight = $(document).height();       //문서 자체 높이
let hHeight = $("#header").outerHeight(); //헤더 높이

let moveScroll;   //스크롤 값을 감지하기 위한 변수 
let lastScrollTop = 0;  //스크롤의 마지막 위치의 값

$(window).scroll(function(){
moveScroll = true;
//console.log(moveScroll);
});

setInterval(function(){
if(moveScroll){
    hasScroll();
    moveScroll = false;
}
    
moveScroll = 0;
//console.log(moveScroll);
},250);

function hasScroll(){
let wScroll = $(this).scrollTop();
//스크롤을 내렸을 때
if(wScroll > lastScrollTop){
    $("#header").addClass("on");
    $("#nav2-wrap").addClass("on");
} else {
    //스크롤을 올렸을 때
    if( wScroll + wHeight < dHeight ){
    $("#header").removeClass("on");
    $("#nav2-wrap").removeClass("on");
    }
}
lastScrollTop = wScroll;
}`);

jsText3.push(`//내용 아코디언
$(".sub-name > li > div").hide();
$(".sub-name > li > a").click(function(){
    $(this).next().slideToggle(400).parent().siblings().find(".opencont").slideUp();
});`);

// // 처음 보이기 위한 화면
$(".s4-title-bar").find("div > div").hide().eq(0).show();
$("code.lh3").html(htmlText3[0]);
$("code.lc3").html(cssText3[0]);
$("code.lj3").html(jsText3[0]);

$(".s4-circleAll").click(function(e){
    e.preventDefault();
    $(this).addClass("active4").siblings().removeClass("active4");
    console.log($("code.lh3"));
    $("code.lh3").html(htmlText3[$(this).index()]);
    $("code.lc3").html(cssText3[$(this).index()]);
    $("code.lj3").html(jsText3[$(this).index()]);
    TextColor();
});

/* section5 */
/* code tap-menu */
$(".title-bar2 a").click(function(e){
    e.preventDefault();
    $(this).addClass("active2").next().show().parent().siblings().find("a").removeClass("active2").next().hide();

});

let htmlText4 = [];
htmlText4.push(`&lt;!-- slider --&gt;
&lt;div class="slider-wrap"&gt;
    &lt;div class="slider-img"&gt;
        &lt;div class="slides s1"&gt;&lt;img src="img/about_hover.jpg" alt="이미지1"&gt;&lt;/div&gt;
        &lt;div class="slides s2"&gt;&lt;img src="img/model_hover.jpg" alt="이미지2"&gt;&lt;/div&gt;
        &lt;div class="slides s3"&gt;&lt;img src="img/event_hover.jpg" alt="이미지3"&gt;&lt;/div&gt;
        &lt;div class="slides s4"&gt;&lt;img src="img/support_hover.jpg" alt="이미지4"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div id="main"&gt;
    &lt;div class="notice"&gt;
        &lt;div class="notice-cont"&gt;
            이 사이트는 포트폴리오를 위해 만들어진 사이트 입니다.
        &lt;/div&gt;
        &lt;div class="notice-btn"&gt;
            &lt;a class="notice-btn" href="#"&gt;&lt;i class="fas fa-times"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
       
    &lt;/div&gt;
    &lt;div class="container"&gt;
        &lt;header class="header"&gt;
            &lt;h1&gt;&lt;a href="main.html"&gt;&lt;img src="img/logo.png" alt="로고"&gt;&lt;/a&gt;&lt;/h1&gt;
            &lt;ul class="nav"&gt;
                &lt;li&gt;&lt;a href="about.html" class="link1"&gt;about&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="works.html"&gt;works&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="consulting.html"&gt;consulting&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="contact.html"&gt;contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/header&gt;
        &lt;div class="stit"&gt;
            Beyond design,&lt;br&gt;
            Presentation paradigm
        &lt;/div&gt;
        &lt;div class="btit"&gt;
            프레젠테이션&lt;br&gt;
            패러다임을 바꾸다!
        &lt;/div&gt;
        &lt;div class="imgWrap"&gt;
            &lt;img src="img/line.png" alt=""&gt;
        &lt;/div&gt;
        &lt;ul class="hoverText"&gt;
            &lt;li&gt;&lt;a href="#" class="hover1"&gt;about&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#" class="hover2"&gt;model&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#" class="hover3"&gt;event&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#" class="hover4"&gt;support&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;`);

htmlText4.push(`&lt;div class="two-cont"&gt;
    &lt;div class="ourservice-tit"&gt;Our Service .&lt;/div&gt;
    &lt;div class="ourservice-cont"&gt;
        &lt;div class="mid-cont mid-cont1"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c1.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;Conference Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;컨퍼런스 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 모터쇼 / 제품 / 사내행사 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 전략발표 / 경영회의 / 마케팅 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 키노트 / 영상 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mid-cont mid-cont2"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c2.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;PR, Marketing Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;홍보 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 회사소개서 프레젠테이션 기획/ 디자인 &lt;!-- ㄱ한자로 미드 닷 사용 --&gt;
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 정부 및 기관 홍보 프레젠테이션 기획 / 디자인
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 신제품 런칭 / 서비스 소개 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mid-cont mid-cont3"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c3.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;Proposal Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;컨퍼런스 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 모터쇼 / 제품 / 사내행사 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 전략발표 / 경영회의 / 마케팅 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 키노트 / 영상 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mid-cont mid-cont4"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c4.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;Conference Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;컨퍼런스 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 모터쇼 / 제품 / 사내행사 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 전략발표 / 경영회의 / 마케팅 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 키노트 / 영상 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mid-cont mid-cont5"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c5.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;Conference Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;컨퍼런스 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 모터쇼 / 제품 / 사내행사 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 전략발표 / 경영회의 / 마케팅 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 키노트 / 영상 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mid-cont mid-cont6"&gt;
            &lt;div class="mid-cont-img"&gt;&lt;img src="img/about_c6.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-tit-eng"&gt;Conference Presentation&lt;/div&gt;
            &lt;div class="mid-cont-tit-kor"&gt;컨퍼런스 프레젠테이션 제작 컨설팅&lt;/div&gt;
            &lt;div class="mid-cont-line"&gt;&lt;img src="img/about_line.jpg" alt=""&gt;&lt;/div&gt;
            &lt;div class="mid-cont-cont"&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 모터쇼 / 제품 / 사내행사 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 전략발표 / 경영회의 / 마케팅 컨퍼런스
                &lt;br&gt;
                &lt;strong&gt;·&lt;/strong&gt;&nbsp; 키노트 / 영상 프레젠테이션
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- //two-cont --&gt;`);

htmlText4.push(`&lt;!-- Google Map API의 html은 제공된 태그만 사용합니다. --&gt;
&lt;div id="map"&gt;&lt;/div&gt;`);

let cssText4 = [];
cssText4.push(`ul.hoverText {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
}
ul.hoverText li {
    margin-bottom: 10px;
}
ul.hoverText li:last-child {
    margin-bottom: 0;
}
ul.hoverText li a {
    color: #fff;
}`);

cssText4.push(`.two-cont {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 27% 73%;
        grid-template-columns: 27% 73%;
}
.two-cont .ourservice-tit {
    padding-top: 105px;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #1d1d1d;
}
.two-cont .ourservice-cont {
    padding-top: 100px;
    margin-left: -2px;
    display: -ms-grid;
    display: grid;
    -ms-grid-rows: (1fr)[2];
        grid-template-rows: repeat(2, 1fr);
    -ms-grid-columns: (1fr)[3];
        grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
.mid-cont {
    padding-right: 10px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
.mid-cont .mid-cont-img {
    width: 100%;
}
.mid-cont .mid-cont-tit-eng {
    font-size: 18.5px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-top: 15px;
}
.mid-cont .mid-cont-tit-kor {
    font-size: 16px;
    letter-spacing: -1.5px;
}
.mid-cont .mid-cont-line img {
    margin: 20px 0;
    width: 20px;
}
.mid-cont .mid-cont-cont {
    font-size: 14.5px;
    letter-spacing: -1.2px;
    color: #545454;
    margin-top: 0px;
    line-height: 23px;
}
.mid-cont4, .mid-cont5, .mid-cont6 {
    margin-top: 15px;
}
.three-cont {
    padding: 100px 0 250px 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 27% 73%;
        grid-template-columns: 27% 73%;
}
.three-cont .clients-tit {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #1d1d1d;
}
.three-cont .clients-cont img {
    width: 100%;
}`);

cssText4.push(`/* Google Map API에 관한 css는 없습니다.*/`);

let jsText4 = [];
jsText4.push(`//메인화면 이미지 체인지
let slideWrap = $(".slide-wrap");
let slideImg = $(".slide-img");
let slides = $(".slides");

let previousIndex = 0;           
let slideCount = slides.length;  

$(".hoverText").on("mouseover","a", function(e){
    e.preventDefault();
    shak();
});

function shak(){
    let currentIndex = (previousIndex - 1) % slideCount;
    slides.eq(previousIndex).fadeOut(700);
    slides.eq(currentIndex).fadeIn(700);

    console.log("previousIndex :"+previousIndex)
    console.log("currentIndex :"+currentIndex)

    previousIndex = currentIndex;
}`);

jsText4.push(`// 그리드에 관한 script는 없습니다.`);

jsText4.push(`// Initialize and add the map
function initMap() {
// The location of Uluru
var uluru = {lat: -25.344, lng: 131.036};
// The map, centered at Uluru
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({position: uluru, map: map});
}

&lt;!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
--&gt;
&lt;script async defer
src="https://maps.googleapis.com/maps/api/js?key=개인 key 번호"&gt;
&lt;/script&gt;`);

// // 처음 보이기 위한 화면
$(".s5-title-bar").find("div > div").hide().eq(0).show();
$("code.lh4").html(htmlText4[0]);
$("code.lc4").html(cssText4[0]);
$("code.lj4").html(jsText4[0]);

$(".s5-circleAll").click(function(e){
    e.preventDefault();
    $(this).addClass("active5").siblings().removeClass("active5");
    console.log($("code.lh4"));
    $("code.lh4").html(htmlText4[$(this).index()]);
    $("code.lc4").html(cssText4[$(this).index()]);
    $("code.lj4").html(jsText4[$(this).index()]);
    TextColor();
});

/* section6 */
// aniTextMove1();
// function aniTextMove1(){
//     let Width =$(".ani1-1").outerWidth();
//     $(".aniText1").animate({left: -Width}, 100000, "linear", function(){
//         $(".aniText1 p:first-child").appendTo(".aniText1");
//         $(this).css({left: "0"});
//     });
// }
// setInterval(aniTextMove1, 100000);

let Width =$(".ani1-1").outerWidth();
console.log("width : "+Width);

/* section7 */
// $(".scriptview-wrap").mouseover(function(){
//     $(".script-text").css({display: "none"});
// }).mouseout(function(){
//     $(".script-text").css({display: "block"});
// });

$(".script-btn > a").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index() + 3;
    $(this).addClass("btnactive").siblings().removeClass("btnactive")
    $(".ifr1").attr("src", "../script/parallax/parallax"+index+".html");
});

$(".script-btn > a.slidebtn").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index() + 1;
    $(this).addClass("btnactive").siblings().removeClass("btnactive")
    $(".ifr2").attr("src", "../slider/slide0"+index+".html");
});

$(".script-btn > a.mousebtn").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index() + 1;
    $(this).addClass("btnactive").siblings().removeClass("btnactive")
    $(".ifr3").attr("src", "../mouse/mouse0"+index+".html");
});