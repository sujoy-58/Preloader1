$(document).ready(function () {
    function all() {
        gsap.from("#main h1", {
            y: 30,
            opacity: 0,
            delay: 5
        })
    }

    var counter = 0;
    var count = 0;

    var i = setInterval(function () {
        $(".loader .loader-counter h1").html(count + "%");
        $(".loader").css("width", count + "%");
        counter++;
        count++;
        if (counter == 101) {
            clearInterval(i);
            gsap.to(".loader", {
                height: "100%",
                duration: 0.5,
            })
            document.querySelector("#preloader").classList.add("hide");
        }

    }, 40);
    all();

   



});