window.onscroll=function(){
  const navbar =document.querySelector(".navbar-con");
  const header= document.querySelector(".header")
    if(window.scrollY>header.scrollTop+header.offsetHeight)
        navbar.classList.add("scrolly");
    
    else{
    navbar.classList.remove("scrolly");
  }
}

const buttons = document.querySelectorAll(".pagination button");
const bages = document.querySelectorAll(".bage");

function showpage(index) {
   buttons.forEach((btn) => {
    btn.classList.remove("activebage");
  });
  bages.forEach((bage) => {
    bage.classList.add("d-none");
  });
  if(buttons[index]){
    buttons[index].classList.add("activebage")
  }
  if (bages[index-1]) {
    bages[index-1].classList.remove("d-none");
  }
}
buttons.forEach((btn) => {
  if (btn.classList.contains("b-first")||btn.classList.contains("b-1")) {
    btn.onclick = () => showpage(1);
  } else if (btn.classList.contains("b-last")||btn.classList.contains("b-6")) {
    btn.onclick = () => showpage(6);
  } else if (btn.classList.contains("b-2")){
    btn.onclick = () => showpage(2);
  }else if (btn.classList.contains("b-3")){
    btn.onclick = () => showpage(3);
  }else if (btn.classList.contains("b-4")){
    btn.onclick = () => showpage(4);
  }else if (btn.classList.contains("b-5")){
    btn.onclick = () => showpage(5);
  }
});