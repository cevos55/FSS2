
// -------------------------------Actualités-------------------------------------------------------------

// -------------------------------Temoignages-----------------------------------------------------------
var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup:3,
  loop: true,
  fade:'true',
  grabCursor:'true',
  loopFillGroupWithBlank:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ------------------------------animation compteurs------------------------------------------------
$(document).ready(()=> {
  $('.counter-number-value').counterUp({
    time:1500
  });
});

// ----------------------------------animation texte compteurs--------------------------------------------------

let textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => textObserver.observe(el));
console.log(textObserver)

// -----------------------------animation slider----------------------------------------
var carousel = document.querySelector('.carousel');
var carouselItems = document.querySelectorAll('.carousel-item');

var currentIndex = 0;
var totalItems = carouselItems.length;

function showNextSlide() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 4000);
