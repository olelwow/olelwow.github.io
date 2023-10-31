const body  = document.body;
const content = document.getElementsByClassName("omMig");
const head = document.getElementsByClassName("huvud");
const foot = document.getElementsByClassName("fot");
const menyContents = head[0].childNodes[1];
const menyText = menyContents.childNodes[3].childNodes[1];
const facebook = foot[0].childNodes[1].children[0];
const instagram = foot[0].childNodes[1].children[1];
const linkedIn = foot[0].childNodes[1].children[2];


function toggleDark () {
    
    body.classList.toggle("dark");
    
     console.log(content[0]);
     console.log(head);
     console.log(menyContents.childNodes[3])
     console.log(menyText);
     console.log(facebook);
    content[0].classList.toggle("darkParagraf");
    head[0].classList.toggle("darkHead");
    foot[0].classList.toggle("darkFoot");
    facebook.classList.toggle("darkFb");
    instagram.classList.toggle("darkInsta");
    linkedIn.classList.toggle("darkLinkedIn");
  
    

    
}