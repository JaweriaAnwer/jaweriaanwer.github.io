// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal animation
const sections = document.querySelectorAll("section");

const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});