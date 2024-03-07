const sliderImages = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
const sliderImage = document.getElementById('sliderImage');
let currentImageIndex = 0;

function updateSliderImage() {
    sliderImage.style.backgroundImage = `url(${sliderImages[currentImageIndex]}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    updateSliderImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSliderImage();
}

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

updateSliderImage();
