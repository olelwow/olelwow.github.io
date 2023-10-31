const body  = document.body;
const content = document.getElementsByClassName("omMig");
const head = document.getElementsByClassName("huvud");
const foot = document.getElementsByClassName("fot");

const paragraf = content[0].childNodes;
function toggleDark () {
    
    body.classList.toggle("dark");
    console.log(body.classList);
    console.log(content);
    console.log(paragraf);
    console.log(head);
    head[0].classList.toggle("darkHead");
    head[0].firstElementChild.classList.toggle("darkNav");
    head[0].lastElementChild.classList.toggle("darkMeny");


    
    
    
    
    
    
    
}