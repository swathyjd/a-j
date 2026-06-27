// ===============================
// Wedding Countdown
// ===============================

const weddingDate = new Date("August 23, 2026 11:20:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("timer").innerHTML =
        "<h2>🎉 Today is Our Wedding Day 🎉</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();


// ===============================
// Smooth Fade Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

sections.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(60px)";
    sec.style.transition="all 1s ease";

    observer.observe(sec);

});


// ===============================
// Gallery Zoom Effect
// ===============================

const images = document.querySelectorAll(".images img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});


// ===============================
// Welcome Message
// ===============================

window.onload=function(){

console.log("Welcome to Jishnu ❤️ Aswathy Wedding");

};


// ===============================
// Floating Hearts
// ===============================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-30px";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.animation="fall 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,1200);