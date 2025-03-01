const menu = document.getElementById("menu");
const header = document.getElementById("header");
const top1 = document.getElementById("top"); 
var html = document.documentElement;

menu.addEventListener("click", () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('toggle');
})

window.addEventListener("scroll", () => {
  menu.classList.remove('fa-times');
  header.classList.remove('toggle');
  if (html.scrollTop > 0){
    top1.style.display = "block";
  }else{
    top1.style.display = "none";
  }
})
