document.querySelector(".fa-bars").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.add("nav-open");
})
document.querySelector(".cancel-symbol").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.remove("nav-open");
})