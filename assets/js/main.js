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
    const scroll = $(window).scrollTop();
    const menuHeight = parseInt($("nav").css("height"));

    const about = $("#about");
    const features = $("#features");
    const featuresList = $("#features-list");
    const resources = $("#resources");

    if (about.visible()) {
        $("#about .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    } else if (scroll >= about.offset().top - menuHeight) {
        $("#about .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }

    if (features.visible()) {
        $("#features .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    } else if (scroll >= features.offset().top - menuHeight) {
        $("#features .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }

    if (featuresList.visible()) {
        $("#features-list .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    } else if (scroll >= featuresList.offset().top - menuHeight) {
        $("#features-list .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }

    if (resources.visible()) {
        $("#resources .content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    } else if (scroll >= resources.offset().top - menuHeight) {
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