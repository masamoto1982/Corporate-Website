const yearElm =  document.querySelector('.thisYear'); // <span class="thisYear"></span>を取得
const thisYear = new Date().getFullYear(); // 今の年を取得
yearElm.innerHTML = thisYear; // <span class="thisYear"></span>の中に年を表示

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
