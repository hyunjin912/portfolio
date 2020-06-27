/* cursor */
const cursor = $(".cursor")

// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

$("#section1").on("mousemove", function(e){
    gsap.to(cursor,{duration: 0.3, left: e.pageX - (circleWidth / 2), top: e.pageY - (circleHeight / 2)});
});

$(window).scroll(function(){
    // scroll 값
    const scrollTop = $(window).scrollTop();
    $(".scrollTop").text(parseInt(scrollTop));

    // 커서 hidden
    let sectionTop1 = $("#big-title").offset().top;
    if( scrollTop >= 900 ){
        cursor.addClass("hidden");
    } else {
        cursor.removeClass("hidden");
    }
});

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
$(".code.lh1").html(htmlText[0]);

$(".s2-circleAll").click(function(e){
    e.preventDefault();
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
$(".code.lh2").html(htmlText2[0]);

$(".s3-circleAll").click(function(e){
    e.preventDefault();
    console.log($("code.lh2"));
    $("code.lh2").html(htmlText2[$(this).index()]);
    $("code.lc2").html(cssText2[$(this).index()]);
    // $(".lj2").html(jsText2[$(this).index()]);
    TextColor();
});
