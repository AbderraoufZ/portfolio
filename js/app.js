
const home = document.querySelector(".home");
let height = home.clientHeight;


const c = document.getElementById("myDIV");
const nav = document.querySelector(".header");
const contact = document.querySelector(".contact");

c.addEventListener("scroll", myFunction);

function myFunction() {
  console.log(c.scrollTop);
  if (c.scrollTop+80 > height){
    nav.classList.add('scroll');
    contact.classList.add('animation');
  }else{
    nav.classList.remove('scroll');
    contact.classList.add('animation');
  }


}