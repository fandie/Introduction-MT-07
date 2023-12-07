const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll ke posisi target dengan smooth scrolling
        targetElement.scrollIntoView({ behavior: "smooth" });

        // Hapus 'active' class dari semua link
        navLinks.forEach((link) => link.classList.remove("active"));

        // Tambah 'active' class ke link yang diklik
        this.classList.add("active");
    });
});

const slides = document.querySelector('.slides');
let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.children.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
  showSlide(currentSlide);
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 3000); 
