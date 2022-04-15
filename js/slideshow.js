var images = [];
images[0] = "/images/slide/wallpaper1.jpg";
images[1] = "/images/slide/wallpaper2.jpg";
images[2] = "/images/slide/wallpaper3.jpg";
images[3] = "/images/slide/wallpaper4.jpg";
images[4] = "/images/slide/wallpaper5.jpg";
var i = 0;
var timer = 30000;

function changeImage() {
  document.diapo.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", timer);
}
window.onload = changeImage;
