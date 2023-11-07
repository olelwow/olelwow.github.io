// const body  = document.body;
// const content = document.getElementsByClassName("omMig");
// const head = document.getElementsByClassName("huvud");
// const foot = document.getElementsByClassName("fot");

// const menyContents = head[0].childNodes[3];
// const menyText1 = menyContents.childNodes[1].childNodes[1].childNodes[1];
// const menyText2 = menyContents.childNodes[1].childNodes[3].childNodes[1];
// const menyText3 = menyContents.childNodes[1].childNodes[5].childNodes[1];
// const facebook = foot[0].childNodes[1].children[0];
// const instagram = foot[0].childNodes[1].children[1];
// const linkedIn = foot[0].childNodes[1].children[2];

// const darkModeToggle = document.getElementById("darkModeToggle");
// let darkCookie = document.cookie = "isDark=false; SameSite=Lax;";

// function toggleDarkMode () {
    
//     if (document.cookie.endsWith("false")) {
//     darkModeToggle.href = "./css/darkStyle.css";
//     darkCookie = document.cookie = "isDark=true; SameSite=Lax;";
//     }
//     else if (document.cookie.endsWith("true")) {
//         darkModeToggle.href = "./css/style.css";
//         darkCookie = document.cookie = "isDark=false; SameSite=Lax";
//     }
    
    
// }

const darkModeToggle = document.getElementById("darkModeToggle");
let isDark = getCookie("isDark");


if (isDark === "true") {
    darkModeToggle.href = "./css/darkStyle.css";
} else {
    darkModeToggle.href = "./css/style.css";
}

function toggleDarkMode() {
    isDark = getCookie("isDark");
    if (isDark === "true") {
        darkModeToggle.href = "./css/style.css";
        setCookie("isDark", "false");
    } else {
        darkModeToggle.href = "./css/darkStyle.css";
        setCookie("isDark", "true");
    }
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + "; SameSite=Lax; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// DARKMODE ^

const datum = document.getElementById("date");
const klocka = document.getElementById("clock");

function updateClock () {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours: hours;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;

    let currentTime = 
              hours
              + ":"
              + minutes
              + ":" 
              + seconds;

    klocka.innerHTML = currentTime;          
}

function updateDate () {


    const date = new Date();

    let sweMonths = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    let sweDays = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
    // Svenska namn på månader och dagar. 
    let todayDate = date.getDate();
    // Tar in dagens datum i siffror, t.ex dag 07

    todayDate = todayDate < 10 ? "0" + todayDate: todayDate;
    // Lägger till 0 ifall datumet är under 10.

    let newDate = sweDays[date.getDay()] + " " + todayDate + " " + sweMonths[date.getMonth()] + " " + date.getFullYear();

    datum.innerHTML = newDate;


}

// KLOCKA ^

const klockIkon = document.getElementById("clockIkon");


let visaInfo = (e) => {
    datum.style.display = "block";
    datum.classList.remove("animateOut");
    datum.classList.add("animateIn");
    klocka.style.display = "block";
    klocka.classList.remove("animateOut");
    klocka.classList.add("animateIn");
    klockIkon.style.display = "none";
    klockIkon.classList.remove("animateIn");
    klockIkon.classList.add("animateOut");
}

let hideInfo = (e) => {
    datum.style.display = "none";
    datum.classList.remove("animateIn");
    datum.classList.add("animateOut");
    klocka.style.display = "none";
    klocka.classList.remove("animateIn");
    klocka.classList.add("animateOut");
    klockIkon.style.display = "block";
    klockIkon.classList.remove("animateOut");
    klockIkon.classList.add("animateIn");
}

klockIkon.addEventListener('click', visaInfo);
klocka.addEventListener('click', hideInfo);


// Animation för klocka ^

updateClock();
setInterval(updateClock, 1000);
updateDate();
setInterval(updateDate, 100000);
