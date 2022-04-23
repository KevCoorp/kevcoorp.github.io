let images = [
  "/images/slide/wallpaper1.jpg",
  "/images/slide/wallpaper2.jpg",
  "/images/slide/wallpaper3.jpg",
  "/images/slide/wallpaper4.jpg",
  "/images/slide/wallpaper5.jpg"
]
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
