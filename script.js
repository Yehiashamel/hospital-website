let menuBtn = document.querySelector('#nav-btn');
let nav = document.querySelector('#ul');
let icon = document.querySelector('#icon');

menuBtn.onclick = function(){
    nav.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
}
document.body.onscroll = () =>{
    nav.classList.remove("active");
    icon.classList.remove("fa-xmark");
};
