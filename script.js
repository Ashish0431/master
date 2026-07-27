// --- 1. Load Saved Prices (1 to 10 items) ---
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

// --- 2. Price Update Function ---
function updatePrice(id, name) {
    let newPrice = prompt("Enter new price for " + name + ":");
    if(newPrice && newPrice.trim() !== "") {
        document.getElementById(id).innerText = '₹' + newPrice;
        localStorage.setItem(id, newPrice);
        alert(name + " ka price successfully update ho gaya!");
    }
}

// --- 3. Manager Panel (Password Lock: 1999) ---
function showAdmin() {
    let pass = prompt("Manager Password enter karein (Hint: Shop ka establishing year):");
    if (pass === "1999") {
        let panel = document.getElementById('admin');
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    } else if (pass !== null) {
        alert("Galat Password! Aapko access nahi hai.");
    }
}

// --- 4. NAYA: Image Slider Logic (Auto & Manual) ---
document.addEventListener("DOMContentLoaded", () => {
    let sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        let images = slider.querySelectorAll('.slider-images img');
        let prevBtn = slider.querySelector('.prev-btn');
        let nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;
        let autoPlayTimer;

        // Image dikhane ka function
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        // Agli Image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Pichli Image
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        // Har 3 second baad photo apne aap change hogi
        function startTimer() {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(nextImage, 3000); 
        }

        // Customer Button Dabayega tab ka logic
        nextBtn.addEventListener('click', () => {
            nextImage();
            startTimer(); // Button dabane par timer reset hoga
        });

        prevBtn.addEventListener('click', () => {
            prevImage();
            startTimer();
        });

        // Timer shuru karo
        if(images.length > 0) {
            startTimer();
        }
    });
});
