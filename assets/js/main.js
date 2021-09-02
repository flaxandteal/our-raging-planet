// GET CURRENT YEAR

const year = new Date().getFullYear();
$("#current-year").html(year);

// TOP SECTION ZOOM BEHAVIOUR

const fadeZoom = () => {
    setTimeout(() => {
        $("#home .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }, 250);
};

$(window).on("load", fadeZoom);

// MENU SCROLL BEHAVIOUR

const menuScrollHandler = () => {
    const scroll = $(window).scrollTop();
    const topHeight = parseInt($(".landing #content-bg").css("height"));

    if (scroll >= topHeight) {
        $("header").removeClass("scroll-top", 250, "easeInBack");
        $("#header-clear").show();
    } else {
        $("header").addClass("scroll-top", 250, "easeInBack");
        $("#header-clear").hide();
    }
}

// SECTION SCROLL BEHAVIOUR

const sectionScrollHandler = () => {
    const about = $("#about").visible();
    const features = $("#features").visible();
    const featuresList = $("#features-list").visible();
    const resources = $("#resources").visible();

    if (about) {
        $("#about .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }
    if (features) {
        $("#features .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }
    if (featuresList) {
        $("#features-list .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }
    if (resources) {
        $("#resources .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }
}

// CALLING SCROLL HANDLERS

const scrollHandlers = () => {
    menuScrollHandler();
    sectionScrollHandler();
}

$(window).on("scroll", scrollHandlers);