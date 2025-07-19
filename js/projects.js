
  const cards = document.querySelectorAll('.project-card');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


// Animate skill bars on load
window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent;
  });
});
