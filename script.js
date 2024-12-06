const items = document.querySelectorAll(".header-slider .header-item");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;
let slideInterval;

function changeslide() {
    items.forEach((item, index) => {
        item.style.display = (index === n) ? 'block' : 'none';
    });
}

// Function to move to the next slide automatically
function autoChangeSlide() {
    n = (n < items.length - 1) ? n + 1 : 0; // Loop back to the first slide when at the end
    changeslide();
}

// Start or reset the automatic slide change timer
function startSlideInterval() {
    clearInterval(slideInterval); // Clear any existing interval
    slideInterval = setInterval(autoChangeSlide, 5000); // Start a new interval
}

// Initialize the first slide as visible and start the timer
changeslide();
startSlideInterval();

// Event listeners for manual navigation (with timer reset)
prev_btn.addEventListener('click', (e) => {
    e.preventDefault();
    n = (n > 0) ? n - 1 : items.length - 1; // Wrap around to the last slide if at the first
    changeslide();
    startSlideInterval(); // Reset the timer
});

next_btn.addEventListener('click', (e) => {
    e.preventDefault();
    n = (n < items.length - 1) ? n + 1 : 0; // Go back to the first slide when at the last
    changeslide();
    startSlideInterval(); // Reset the timer
});


// nav-bar-drones

document.addEventListener("DOMContentLoaded", function() {
    const cameraDroneLink = document.getElementById("camera-drone-link");
    const navBarDrones = document.querySelector(".nav-bar-drones");

    // Ensure the navBarDrones is hidden initially
    navBarDrones.style.display = "none"; // Optional but ensures starting hidden

    cameraDroneLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Toggle the display style of nav-bar-drones
        if (navBarDrones.style.display === "none" || navBarDrones.style.display === "") {
            navBarDrones.style.display = "flex"; // Show the drone options
        } else {
            navBarDrones.style.display = "none"; // Hide the drone options
        }
    });
});

// search bar

document.querySelector(".nav-bar-search-icon").addEventListener("click", function() {
    const searchBar = document.querySelector(".nav-bar-search");
    searchBar.classList.toggle("active");
    const searchInput = document.querySelector(".nav-search-input");
    if (searchBar.classList.contains("active")) {
        searchInput.focus(); // Focus the input when expanded
    }
});