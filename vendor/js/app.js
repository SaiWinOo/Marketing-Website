$(document).ready(function () {

    let screenHeight = $(window).height();
    // console.log(screenHeight)

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if (currentPosition >= screenHeight) {
            $(".header").addClass("header-on-scroll");
        } else {
            $(".header").removeClass("header-on-scroll");
        }
    })
});

$(".navbar-toggler").click(function () {
    let result = $(".navbar-toggler").hasClass("collapsed");
    console.log(result);

    if (result) {
        $(".navbar-toggler").html(`<i class="fas fa-bars  menu-icon " style="font-size: 2rem;" ></i>`)
    } else {
        $(".navbar-toggler").html(`<i class="fas fa-close  menu-icon " style="font-size: 2rem;" ><m/i>`)
    }
});

$(".nav-item").click(function () {
    let result = $(".navbar-collapse").hasClass("show");

    if (result) {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").html(`<i class="fas fa-bars  menu-icon " style="font-size: 2rem;" ></i>`)
    } else {
        $(".nav-bar-collapse").addClass("show")
    }
})

function setActive(current) {

    $(`.nav-link[href="# ${current}]`).addClass("active")

}

function navScroll() {
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSection = $(this.element).attr("id");
            console.log(currentSection)
            setActive(currentSection)
        }
    })
};

navScroll();

$(window).on("load",function(){
    $(".loader-container").fadeOut(500,function(){
        
        $(this).remove();
    });
});