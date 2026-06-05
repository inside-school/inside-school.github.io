let btnDetails = document.querySelectorAll('.btn-details');
let divAboutCoffee = document.querySelectorAll('.about-coffee');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutCoffee.length; i++) {
    divAboutCoffee[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(0%)'
    }
}

ScrollReveal().reveal('.anim-right', {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
    delay: 1000,
});
ScrollReveal().reveal('.anim-left', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    delay: 1000,

});
let h3More = document.querySelector('.read-more-h3');
let divMore = document.querySelector('.read-more-div');
let heMin = document.querySelector('.read-min-h3');

h3More.onclick = ()=>{
    divMore.style.display = 'block';
}
heMin.onclick = ()=>{
    divMore.style.display = 'none';

}


let windowJuke = document.querySelector('.window-juke');
let moreBtnJuke = document.querySelector('.more-btn-juke');

moreBtnJuke.onclick = function(){
    windowJuke.classList.add('show')
}
windowJuke.onclick = function(){
    windowJuke.classList.remove('show')

}