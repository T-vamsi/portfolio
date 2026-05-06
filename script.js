// Smooth scroll for navbar
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Skills → Certifications
function goToCerts() {
  document.getElementById("certifications")
    .scrollIntoView({ behavior: "smooth" });
}
