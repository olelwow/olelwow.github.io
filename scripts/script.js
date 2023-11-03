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
const isDark = getCookie("isDark");


if (isDark === "true") {
    darkModeToggle.href = "./css/darkStyle.css";
} else {
    darkModeToggle.href = "./css/style.css";
}

function toggleDarkMode() {
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

    document.getElementById("clock").innerHTML = currentTime;          
}

function updateDate () {
    const date = new Date();

    document.getElementById("date").innerHTML = date.toDateString();


}

updateClock();
setInterval(updateClock, 1000);
updateDate();
setInterval(updateDate, 100000);
