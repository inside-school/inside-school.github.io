// --------------- карточки ---------
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

// ---------------------------