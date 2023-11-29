burger=document.querySelector(".burger");
vlist=document.querySelector(".option");
navlist=document.querySelector(".navbar");


burger.addEventListener('click',()=>{
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    vlist.classList.toggle('v-hidden');
    navlist.classList.toggle("navh");



})

    function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 250;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);
    function ontype(id){
        document.getElementById(id).style.display="block";
        document.getElementById("dul").style.filter = "brightness(0.5)";

    }
    function offtype(id){
        document.getElementById(id).style.display="none";
        document.getElementById("dul").style.filter = "brightness(1)";
     

    }
    