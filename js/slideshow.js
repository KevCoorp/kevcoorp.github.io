let images = [
  "/images/slide/images1.jpg",
  "/images/slide/images2.jpg",
  "/images/slide/images3.jpg",
  "/images/slide/images4.jpg",
  "/images/slide/images5.jpg",
];
var i = 0;
var timer = 10000;

function changeImage() {
  document.body.style.backgroundImage = `url(${images[i]})`;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", timer);
}
window.onload = changeImage;
