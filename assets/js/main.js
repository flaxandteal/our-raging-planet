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

// SCROLL TO TOP BUTTON BEHAVIOUR

const scrollToTop = () => {
    window.scrollTo(0, 0);
}

// MENU SCROLL BEHAVIOUR

const menuScrollHandler = () => {
    const scroll = $(window).scrollTop();
    const topHeight = parseInt($(".landing #content-bg").css("height"));

    if (scroll >= topHeight) {
        $("header").removeClass("scroll-top", 250, "easeInBack");
        $("#header-clear").show();
        $(".btn-scroll-top").show();
    } else {
        $("header").addClass("scroll-top", 250, "easeInBack");
        $("#header-clear").hide();
        $(".btn-scroll-top").hide();
    }
}

// SECTION SCROLL BEHAVIOUR

// const sectionScrollHandler = () => {
//     const scroll = $(window).scrollTop();
//     const menuHeight = parseInt($("nav").css("height"));

//     const about = $("#about");
//     const features = $("#features");
//     const featuresList = $("#features-list");
//     const resources = $("#resources");

//     if (about.length === 0 && features.length === 0 && featuresList.length === 0 && resources.length === 0) return;

//     if (about.visible()) {
//         $("#about .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     } else if (scroll >= about.offset().top - menuHeight) {
//         $("#about .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     }

//     if (features.visible()) {
//         $("#features .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     } else if (scroll >= features.offset().top - menuHeight) {
//         $("#features .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     }

//     if (featuresList.visible()) {
//         $("#features-list .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     } else if (scroll >= featuresList.offset().top - menuHeight) {
//         $("#features-list .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     }

//     if (resources.visible()) {
//         $("#resources .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     } else if (scroll >= resources.offset().top - menuHeight) {
//         $("#resources .content")
//             .css("opacity", "1")
//             .css("transform", "scale(1)");
//     }
// }

// CALLING SCROLL HANDLERS

const scrollHandlers = () => {
    menuScrollHandler();
    // sectionScrollHandler();
}

$(window).on("scroll", scrollHandlers);

/* INITIALISING TOOLTIPS */

const tooltipInit = () => {
    $('[data-bs-toggle="tooltip"]').tooltip();
}

// TRIMMING WHITESPACE IN AUTHOR BOX FOR BLOG POSTS

const trimAuthorSpace = () => {
    const authorSpace = document.getElementsByClassName("author-whitespace");
    for (const space of authorSpace) {
        space.innerHTML = null;
    }
}

// DEMO VIDEO BEHAVIOUR

$("#video-modal").on("show.bs.collapse", () => {
    $("#top-video")[0].play();
});

$("#video-modal").on("hidden.bs.collapse", () => {
    $("#top-video")[0].pause();
    $("#top-video")[0].currentTime = 0;
});

// READY DOCUMENT FUNCTION CALLS 

$(document).ready(() => {
    tooltipInit();
    trimAuthorSpace();
});