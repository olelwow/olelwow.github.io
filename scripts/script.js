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

const darkModeToggle = document.getElementById("darkModeToggle");
let darkCookie = document.cookie = "isDark=false; SameSite=Lax;";







function toggleDarkMode () {
    
    if (document.cookie.endsWith("false")) {
    darkModeToggle.href = "./css/darkStyle.css";
    darkCookie = document.cookie = "isDark=true; SameSite=Lax;";
    }
    else if (document.cookie.endsWith("true")) {
        darkModeToggle.href = "./css/style.css";
        darkCookie = document.cookie = "isDark=false; SameSite=Lax";
    }
    console.log(darkCookie);
    // body.classList.toggle("dark");
    // content[0].classList.toggle("darkParagraf");
    // head[0].classList.toggle("darkHead");
    // foot[0].classList.toggle("darkFoot");
    // facebook.classList.toggle("darkFb");
    // instagram.classList.toggle("darkInsta");
    // linkedIn.classList.toggle("darkLinkedIn");
    // menyText1.classList.toggle("darkModeText");
    // menyText2.classList.toggle("darkModeText");
    // menyText3.classList.toggle("darkModeText");
    
}

