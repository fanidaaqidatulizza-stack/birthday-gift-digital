// ========================
// PINDAH HALAMAN
// ========================

function nextPage(page){

    const pages=document.querySelectorAll(".page");

    pages.forEach(function(p){

        p.classList.remove("active");

    });

    document.getElementById("page"+page).classList.add("active");

}


// ========================
// PLAY MUSIC
// ========================

function playMusic(){

    const music=document.getElementById("music");

    music.play().catch(function(err){

        console.log("Autoplay diblokir browser.");

    });

}


// ========================
// HATI BERTERBANGAN
// ========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

}

setInterval(createHeart,300);


// ========================
// CONFETTI HALAMAN TERAKHIR
// ========================

function createConfetti(){

    const conf=document.createElement("div");

    conf.innerHTML="🎉";

    conf.style.position="fixed";

    conf.style.left=Math.random()*100+"vw";

    conf.style.top="-30px";

    conf.style.fontSize=(18+Math.random()*20)+"px";

    conf.style.animation="love 6s linear";

    document.body.appendChild(conf);

    setTimeout(function(){

        conf.remove();

    },6000);

}

setInterval(function(){

    if(document.getElementById("page5").classList.contains("active")){

        createConfetti();

    }

},300);


// ========================
// LILIN BERKEDIP
// ========================

setInterval(function(){

    const fire=document.querySelector(".fire");

    if(fire){

        fire.style.opacity=Math.random()>0.5 ? "1":"0.6";

    }

},250);


// ========================
// EFEK KLIK TOMBOL
// ========================

const buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

    btn.addEventListener("mousedown",function(){

        btn.style.transform="scale(.95)";

    });

    btn.addEventListener("mouseup",function(){

        btn.style.transform="scale(1)";

    });

});
