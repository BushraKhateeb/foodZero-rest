window.onscroll=function(){
  const navbar =document.querySelector(".navbar");
  if(window.scrollY>navbar.scrollTop){
    navbar.classList.add("scrolly");
    }
  else{
    navbar.classList.remove("scrolly");
  }
}



const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}//toast enable

const countdown=()=>{
  const now= new Date();
  const date=new Date("2030-07-19T04:00:00");
  const diff=date-now;
  const month=Math.floor(diff/(1000*60*60*24*30));
  const day=Math.floor((diff%(1000*60*60*24*30))/(1000*60*60*24));
  const hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const minute=Math.floor((diff%(1000*60*60))/(1000*60));  
  const secound=Math.floor((diff%(1000*60))/(1000)) ;

  document.querySelector('.month-no').textContent=month;
  document.querySelector('.day-no').textContent=day;
  document.querySelector('.hour-no').textContent=hour;
  document.querySelector('.minute-no').textContent=minute;
  document.querySelector('.secound-no').textContent=secound;
}
setInterval(()=>{
  countdown();
},1000)
