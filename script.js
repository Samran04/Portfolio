// Scroll animation
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
faders.forEach(el => observer.observe(el));

// Hamburger menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark mode toggle using PNG
const toggleBtn = document.getElementById("darkModeToggle");
const toggleIcon = toggleBtn.querySelector("img");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  toggleIcon.src = newTheme === "dark" ? "assets/brightness.png" : "assets/dark-mode.png";
});
