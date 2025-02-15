function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");
    
    sideMenu.classList.add("open");
    overlay.style.display = "block";
    document.querySelector('.hamburger').style.display = 'none';
}

function closeMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    sideMenu.classList.remove("open");
    overlay.style.display = "none";

    document.querySelector('.hamburger').style.display = 'block';
}
