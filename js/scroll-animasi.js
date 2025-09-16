// document.addEventListener("DOMContentLoaded", function () {
// const items = document.querySelectorAll(".facility-item");

// const observer = new IntersectionObserver((entries) => {
// entries.forEach(entry => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//     }
//     });
// }, { threshold: 0.2 });

// items.forEach(item => observer.observe(item));
// });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

window.onload = () => {
  document.querySelector(".nav-links").classList.add("show");
};
