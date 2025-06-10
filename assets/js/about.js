window.onscroll=function(){
  const navbar =document.querySelector(".navbar-con");
  const header= document.querySelector(".header")
    if(window.scrollY>header.scrollTop+header.offsetHeight)
        navbar.classList.add("scrolly");
    
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
}