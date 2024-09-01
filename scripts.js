// 3D Parallax Effect on Header
document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll(".hero h1, .hero p");
    layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')) || 0.5;
        const x = ((window.innerWidth - e.pageX * speed) / 100).toFixed(2);
        const y = ((window.innerHeight - e.pageY * speed) / 100).toFixed(2);
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Slideshow Functionality
let slideIndex = 0;
showSlides(); // Initial call to display the first slide

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
        slides[i].style.transform = "scale(1)"; // Reset scaling
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    slides[slideIndex - 1].style.transform = "scale(1.05)"; // 3D effect: slight zoom
    slides[slideIndex - 1].style.transition = "transform 1s ease"; // Smooth transition for zoom
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Additional Slide Controls (Optional)
function plusSlides(n) {
    showSlides(slideIndex += n); // Update the slide index and display the new slide
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

