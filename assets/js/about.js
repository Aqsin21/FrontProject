let currentImageIndex = 0;
const images = [
  "images/foto1.jpg",
  "images/foto2.jpg",
  // "images/foto3.jpg"  // Yeni eklenen fotoğrafı buraya eklemeyin, çünkü zaten HTML dosyasında var
];

const galleryImg1 = document.getElementById("galleryImg1");
const galleryImg2 = document.getElementById("galleryImg2");

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  if (currentImageIndex === 0) {
    galleryImg1.style.animation = "slideFromTop 0.5s ease"; // Yukarıdan aşağıya kaydırma animasyonu
    galleryImg1.style.display = "block";
    galleryImg2.style.display = "none";
  } else {
    galleryImg2.style.animation = "slideFromTop 0.5s ease"; // Yukarıdan aşağıya kaydırma animasyonu
    galleryImg1.style.display = "none";
    galleryImg2.style.display = "block";
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  if (currentImageIndex === 0) {
    galleryImg1.style.animation = "slideFromTop 0.5s ease"; // Yukarıdan aşağıya kaydırma animasyonu
    galleryImg1.style.display = "block";
    galleryImg2.style.display = "none";
  } else {
    galleryImg2.style.animation = "slideFromTop 0.5s ease"; // Yukarıdan aşağıya kaydırma animasyonu
    galleryImg1.style.display = "none";
    galleryImg2.style.display = "block";
  }
}




