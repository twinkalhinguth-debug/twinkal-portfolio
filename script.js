// Mobile navigation: open and close the menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Dark mode feature.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

// Contact form validation (front-end demonstration only).
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = "Please complete all fields before submitting.";
    formFeedback.style.color = "#c0392b";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = "#c0392b";
    return;
  }

  formFeedback.textContent = "Thank you! Your form is valid. (Demo only — no message is sent.)";
  formFeedback.style.color = "#16803c";
  contactForm.reset();
});

// Set the current year automatically.
document.getElementById("year").textContent = new Date().getFullYear();
