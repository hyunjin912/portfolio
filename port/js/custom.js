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
$(".title-bar").find("div > div").hide().eq(0).show();

$(".title-bar a").click(function(e){
    e.preventDefault();
    $(this).addClass("active").next().show().parent().siblings().find("a").removeClass("active").next().hide();
});




