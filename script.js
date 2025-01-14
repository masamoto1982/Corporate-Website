const yearElm =  document.querySelector('.thisYear'); // <span class="thisYear"></span>���擾
const thisYear = new Date().getFullYear(); // ���̔N���擾
yearElm.innerHTML = thisYear; // <span class="thisYear"></span>�̒��ɔN��\��

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
