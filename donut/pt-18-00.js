let wrapper = document.querySelector('.wrapper');
let countP = document.querySelector('.count-p');
let div = document.querySelector('#no');
let img = document.querySelector('.img-donut');

let i = 1;
let count = 0;
let imgArr = ['donut-1.png', 'donut-2.png', 'donut-3.png',
    'donut-4.png', 'donut-5.png'];

function changePosistion() {
    let maxLeft = wrapper.clientWidth - div.clientWidth;
    let maxTop = wrapper.clientHeight - div.clientHeight;

    let newX = maxLeft * Math.random() + 'px';
    let newY = maxTop * Math.random() + 'px';

    div.style.left = newX;
    div.style.top = newY;

    div.style.width = div.clientWidth + 10 + 'px';
    if (div.clientWidth >= (wrapper.clientWidth - 50) ||
        div.clientHeight >= (wrapper.clientHeight - 50)) {
     
        div.style.width = '50px';
        count++;
        countP.innerHTML = count;
        img.src = imgArr[i];
        i++;
        if (i >= imgArr.length){
            i = 0
        }        
    }
}

div.onpointerenter = function () {
    changePosistion();
}