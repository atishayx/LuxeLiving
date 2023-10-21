var loader = document.querySelector("#loader")
window.addEventListener("load", function () {
  loader.style.display = "none"
})

let clip = document.querySelectorAll(".vid")

clip.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (e) {
        elem.play()
        elem.playbackRate += .5;
    })
    elem.addEventListener("mouseout", function (e) {
        elem.pause();
    })
})


let clipp = document.querySelector(".vid1")


clipp.addEventListener("mouseenter", function (e) {
    clipp.play()
    // clipp.playbackRate += .5;
})
clipp.addEventListener("mouseout", function (e) {
    clipp.pause();
})





