const fadeZoom = () => {
    setTimeout(() => {
        $(".content")
            .css("opacity", "1")
            .css("transform", "scale(1)");
    }, 250);
};

window.onload = fadeZoom();