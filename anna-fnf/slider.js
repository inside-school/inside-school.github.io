
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
   if (slider.scrollLeft <= 0) {
      slider.scrollLeft += slider.scrollWidth;
   }
   else {
      slider.scrollLeft -= 400;
   }

})


toRight.addEventListener('click', function () {
   let maxScrollRight = slider.scrollWidth - slider.clientWidth;
   if (slider.scrollLeft >= maxScrollRight - 1) {
      slider.scrollLeft -= slider.scrollWidth;
   }
   else {
      slider.scrollLeft += 400;
   }
})

