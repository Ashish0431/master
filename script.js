// --- 1. Load Saved Prices ---
window.onload = () => {
    for (let i = 1; i <= 10; i++) {
        let currentId = 'p' + i; 
        let saved = localStorage.getItem(currentId);
        if (saved) {
            let element = document.getElementById(currentId);
            if(element) element.innerText = '₹' + saved;
        }
    }
};

// --- 2. Update Price Function ---
function updatePrice(id, name) {
    let newPrice = prompt("Enter new price for " + name + ":");
    if(newPrice && newPrice.trim() !== "") {
        document.getElementById(id).innerText = '₹' + newPrice;
        localStorage.setItem(id, newPrice);
        alert(name + " ka price successfully update ho gaya!");
    }
}

// --- 3. Manager Panel (Password: 1999) ---
function showAdmin() {
    let pass = prompt("Manager Password enter karein (Hint: Shop ka establishing year):");
    if (pass === "1999") {
        let panel = document.getElementById('admin');
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    } else if (pass !== null) {
        alert("Galat Password! Aapko access nahi hai.");
    }
}

// --- 4. Image Slider Logic ---
document.addEventListener("DOMContentLoaded", () => {
    let sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        let images = slider.querySelectorAll('.slider-images img');
        let prevBtn = slider.querySelector('.prev-btn');
        let nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;
        let autoPlayTimer;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        function startTimer() {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(nextImage, 3000); 
        }

        nextBtn.addEventListener('click', () => {
            nextImage();
            startTimer(); 
        });

        prevBtn.addEventListener('click', () => {
            prevImage();
            startTimer();
        });

        if(images.length > 0) {
            startTimer();
        }
    });

    // --- 5. Star Rating Logic ---
    let stars = document.querySelectorAll('#star-rating span');
    let ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            let value = this.getAttribute('data-value');
            ratingValue.value = value; 

            stars.forEach(s => s.style.color = '#ccc');
            for (let i = 0; i < value; i++) {
                stars[i].style.color = '#FFD700';
            }
        });
    });
});
    // --- 6. NAYA: Header (Dukaan) Auto Slider Logic ---
    let headerImages = document.querySelectorAll('.header-images img');
    let currentHeaderIndex = 0;

    if (headerImages.length > 0) {
        setInterval(() => {
            headerImages[currentHeaderIndex].classList.remove('active');
            currentHeaderIndex = (currentHeaderIndex + 1) % headerImages.length;
            headerImages[currentHeaderIndex].classList.add('active');
        }, 4000); // Har 4 second mein photo badlegi
                }
        
