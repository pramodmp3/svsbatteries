// Update current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(footer);
});
