let menuBtn = document.querySelector('.nav-button');
let nav = document.querySelector('#ul');
menuBtn.onclick = function(){
    nav.classList.toggle("active");
}
document.body.onscroll = () =>{
    nav.classList.remove("active")
};