// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen gambar dan gambar-gambar lainnya
    var slideshowContainer = document.querySelector('.card-head');
    var images = ['11.png', '12.jpg', '13.jpg']; 

    var currentImageIndex = 0;

    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        var imageUrl = images[currentImageIndex];
        slideshowContainer.querySelector('img').src = imageUrl;
    }

    
    setInterval(showNextImage, 3000); 

});
