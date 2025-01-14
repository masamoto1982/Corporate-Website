const yearElm =  document.querySelector('.thisYear'); // <span class="thisYear"></span>‚ğæ“¾
const thisYear = new Date().getFullYear(); // ¡‚Ì”N‚ğæ“¾
yearElm.innerHTML = thisYear; // <span class="thisYear"></span>‚Ì’†‚É”N‚ğ•\¦

var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var currentIndex = 0;

function showImage(index) {
  images[currentIndex].style.opacity = 0;
  currentIndex = (index + images.length) % images.length;
  images[currentIndex].style.opacity = 1;
}

showImage(0);

setInterval(function() {
  showImage(currentIndex + 1);
}, 5000);
