let menuBtn = document.querySelector('#nav-btn');
let nav = document.querySelector('#ul');
let icon = document.querySelector('#icon');

menuBtn.onclick = function(){
    nav.classList.toggle("active");
    icon.classList.toggle("fa-xmark-large");
}
document.body.onscroll = () =>{
    nav.classList.remove("active")
};
