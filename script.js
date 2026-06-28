// =====================================
// Jishnu ❤️ Aswathy Wedding Website
// Premium Script
// =====================================

// Wedding Date
const weddingDate = new Date("August 23, 2026 11:20:00").getTime();

// Countdown
const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("timer").innerHTML =
        "<h2>💍 Wedding Day Has Arrived 💍</h2>";

    }

},1000);


// =====================================
// Background Music
// =====================================

const music = document.getElementById("bgmusic");

document.querySelector(".btn").addEventListener("click",function(){

    if(music){

        music.play();

    }

});


// =====================================
// Gallery Click Zoom
// =====================================

document.querySelectorAll(".images img").forEach(function(img){

img.addEventListener("click",function(){

window.open(this.src,"_blank");

});

});


// =====================================
// Smooth Fade
// =====================================

window.addEventListener("load",function(){

document.body.style.opacity="1";

});


// =====================================
// Console Message
// =====================================

console.log("Jishnu ❤️ Aswathy Wedding Website Loaded Successfully");
