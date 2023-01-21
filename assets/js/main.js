$(document).ready(function(){
    let navbar=document.querySelectorAll(".nav-link");
    let navCollapse=document.querySelector(".navbar-collapse.collapse");
    navbar.forEach(function(a){
    a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
    });
    });
    });