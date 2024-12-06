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