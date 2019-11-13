$(document).ready(() => {
    $(".menu-icon").on("click", () => {
        $("ul.Desplegable").toggleClass("MenuDesp");
    });
});

$(Window).on("scroll", () => {
    if ($(window).scrollTop()) {
        $("div.MainNavBar").addClass("black");
    } else {
        $("div.MainNavBar").removeClass("black");
    }
});

