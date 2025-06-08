$(document).ready(function() {
    $(".AnimTrigger1").waypoint(function() {
        $(".FirstSection").addClass("animate__animated animate__backInUp");
    })
})
$(document).ready(function() {
    $(".FirstSection").waypoint(function() {
        $(".SecondSection").addClass("animate__animated animate__backInLeft");
    })
})
$(document).ready(function() {
    $(".SecondSection").waypoint(function() {
        $(".ThirdSection").addClass("animate__animated animate__backInRight");
    })
})
$(document).ready(function() {
    $(".ThirdSection").waypoint(function() {
        $(".FourthSection").addClass("animate__animated animate__backInLeft");
    })
})
$(document).ready(function() {
    $(".FourthSection").waypoint(function() {
        $(".FifthSection").addClass("animate__animated animate__backInRight");
    }, {offset:"35%"})
})