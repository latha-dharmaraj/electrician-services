document.querySelector(".fa-bars").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.add("nav-open");
})
document.querySelector(".cancel-symbol").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.remove("nav-open");
})

document.querySelector(".about-page").addEventListener("click",function(){
    window.location.href= "about.html";
})
document.querySelector(".home-page").addEventListener("click",function(){
    window.location.href= "index.html";
})
document.querySelector(".contact-page").addEventListener("click", function(){
    window.location.href= "contact-page.html";
})  