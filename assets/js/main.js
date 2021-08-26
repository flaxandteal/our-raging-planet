// GET CURRENT YEAR

const year = new Date().getFullYear();
$("#current-year").html(year);

// TOP SECTION ZOOM BEHAVIOUR

const fadeZoom = () => {
    setTimeout(() => {
        $(".content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }, 250);
};

$(window).on("load", fadeZoom);

// MENU SCROLL BEHAVIOUR

const menuScrollHandler = () => {
    const scroll = $(window).scrollTop();
    const topHeight = parseInt($(".landing #content-bg").css("height"));

    if (scroll >= (topHeight)) {
        $("header").removeClass("scroll-top", 250, "easeInBack");
        $("#header-clear").show();
    } else {
        $("header").addClass("scroll-top", 250, "easeInBack");
        $("#header-clear").hide();
    }
}

// SECTION SCROLL BEHAVIOUR

// CALLING SCROLL HANDLERS

const scrollHandlers = () => {
    menuScrollHandler();
}

$(window).on("scroll", scrollHandlers);