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
$(".title-bar").find("div > div").hide().eq(0).show();
$(".language-html").html(htmlText[0]);

$(".circleAll").click(function(e){
    e.preventDefault();
    $(".language-html").html(htmlText[$(this).index()]);
    $(".language-css").html(cssText[$(this).index()]);
    // $(".language-js").html(jsText[$(this).index()]);
});