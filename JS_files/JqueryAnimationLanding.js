$(document).ready(function() {
    $(".AnimTrigger1").waypoint(function() {
        $(".Anim1").addClass("animate__animated animate__backInUp");
    })
})


//     First line of Bank intro     //

$(document).ready(function() {
    $(".IntroHalvesContainer").waypoint(function() {
        $(".Anim2").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "45%"})
})

$(document).ready(function() {
    $(".IntroHalvesContainer").waypoint(function() {
        $(".Anim3").addClass("animate__animated animate__fadeInRight");
    }, {offset: "35%"})
})


//     Second line of bank intro     //

$(document).ready(function() {
    $(".Anim2").waypoint(function() {
        $(".Anim4").addClass("animate__animated animate__fadeInLeft");
    }, {offset: "25%"})
})
$(document).ready(function() {
    $(".Anim2").waypoint(function() {
        $(".Anim5").addClass("animate__animated animate__fadeInRight");
    }, {offset: "15%"})
})


//     Upcoming app div     //
$(document).ready(function() {
    $(".Anim3").waypoint(function() {
        $(".AppContainer").addClass("animate__animated animate__fadeInUp");
    })
})

$(document).ready(function () {
    $(".mainheader").waypoint(function () {
        $(".ButtonContainer").addClass("animate__animated animate__bounceIn");
    })
})