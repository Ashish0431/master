// Load Saved Prices (Loop ka use karke 1 se 10 tak)
window.onload = () => {
    for (let i = 1; i <= 10; i++) {
        let currentId = 'p' + i; // Ye khud p1, p2, p3 ban jayega
        let saved = localStorage.getItem(currentId);
        if (saved) {
            let element = document.getElementById(currentId);
            if(element) element.innerText = '₹' + saved;
        }
    }
};

// Price Update Function
function updatePrice(id, name) {
    let newPrice = prompt("Enter new price for " + name + ":");
    if(newPrice && newPrice.trim() !== "") {
        document.getElementById(id).innerText = '₹' + newPrice;
        localStorage.setItem(id, newPrice);
        alert(name + " ka price successfully update ho gaya!");
    }
}

// Show/Hide Admin Panel with Password Lock (Password: 1999)
function showAdmin() {
    let pass = prompt("Manager Password enter karein (Hint: Shop ka establishing year):");
    
    if (pass === "1999") {
        let panel = document.getElementById('admin');
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    } else if (pass !== null) {
        alert("Galat Password! Aapko access nahi hai.");
    }
}
