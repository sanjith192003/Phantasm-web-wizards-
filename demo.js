// Toggle the side menu when the hamburger icon is clicked
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");
    
    sideMenu.classList.add("open");
    overlay.style.display = "block";  // Show the overlay to dim background

    // Hide the hamburger icon when side menu is opened
    document.querySelector('.hamburger').style.display = 'none';
}

// Close the side menu when the "X" button or overlay is clicked
function closeMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    sideMenu.classList.remove("open");
    overlay.style.display = "none";  // Hide the overlay

    // Show the hamburger icon when side menu is closed
    document.querySelector('.hamburger').style.display = 'block';
}
