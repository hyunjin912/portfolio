/* cursor */
const cursor = $(".cursor")

// 원의 크기를 구해서 반지름 값을 변수화
let circleWidth = cursor.width();
let circleHeight = cursor.height();

$("body").on("mousemove", function(e){
    gsap.to(cursor,{duration: 0.3, left: e.pageX - (circleWidth / 2), top: e.pageY - (circleHeight / 2)});
});

/* split */
$(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});