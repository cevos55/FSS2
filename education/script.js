// -------------------------------actualités-----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Your code here

const scrollContainer = document.querySelector('.scroll-container');
const scrollButtonLeft = document.querySelector('.scroll-button.left');
const scrollButtonRight = document.querySelector('.scroll-button.right');

const scrollAmount = 300; // Adjust scroll amount as needed

scrollButtonRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

scrollButtonLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
});
// ------------------------------animation compteurs------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//   const counterElements = document.querySelectorAll('.counter-value');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const counter = new CountUp(".valeurFinal", 0, entry.target.dataset.targetvalue, {
//           delay: 2,
//           time: 2000,
//         });
//         counter.start();
//       }
//     });
//   });
  
//   console.log(counterElements)
//   counterElements.forEach((element) => {
//     if (element.dataset.targetvalue) {
//       observer.observe(element);
//     } else {
//       console.warn(`Counter element ${element} missing data-targetValue attribute.`);
//     }
//   });
// });

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
