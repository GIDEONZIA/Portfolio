document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".journey, .career-path, .passion, .future");

  let delay = 0.3;

  sections.forEach((section) => {
    section.style.animationDelay = `${delay}s`;
    delay += 0.4;
  });
});
