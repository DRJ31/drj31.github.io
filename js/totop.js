$(function() {
    var totop = $("#totop"),
        canvas = $("#totop-canvas"),
        percent = $("#totop-percent"),
        width = canvas.width(),
        height = canvas.height(),
        center = width / 2,
        radius = parseInt((width - 3) / 2),
        ctx = canvas[0].getContext("2d");

    function drawCircle(color, percent) {
        ctx.beginPath();
        ctx.arc(center, center, radius, - Math.PI / 2, Math.PI * 2 * percent - Math.PI / 2, false);
        ctx.strokeStyle = color;
        ctx.lineCap = "round"; // butt, round or square
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    totop.click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
    });

    totop.on('mouseenter', () => {
        percent.html("<i class='fas fa-arrow-up'></i>");
    })

    totop.on('mouseleave', () => {
        var docHeight = $(document).height() - $(window).height(),
            scrollTop = $(window).scrollTop(),
            per = parseInt(scrollTop / docHeight * 100);
        percent.html(per);
    })

    $(window).scroll(function() {
        var docHeight = $(document).height() - $(window).height(),
            scrollTop = $(window).scrollTop(),
            per = parseInt(scrollTop / docHeight * 100);
        if (scrollTop >= 200) {
            totop.addClass("display");
            ctx.clearRect(0, 0, width, height);
            drawCircle("#efefef", 1);
            drawCircle("#2d96bd", per/100);
        } else
            totop.removeClass("display");
        percent.html(per);
    });
});