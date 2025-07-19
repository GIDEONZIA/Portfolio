
  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".bar-fill");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute("data-width");
          fill.style.width = width;
          fill.style.transition = "width 2s ease-out";
        }
      });
    }, {
      threshold: 0.6
    });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });

    // Typewriter-like hero animation
    const heroText = document.querySelector(".hero h2");
    const message = heroText.textContent;
    heroText.textContent = "";
    let i = 0;
    function typeEffect() {
      if (i < message.length) {
        heroText.textContent += message.charAt(i);
        i++;
        setTimeout(typeEffect, 50); // speed
      }
    }
    setTimeout(typeEffect, 300); // delay before typing

    // Testimonial fade-in effect
    const testimonial = document.querySelector(".testimonials-section blockquote");
    testimonial.style.opacity = 0;
    testimonial.style.transition = "opacity 1.5s ease-in-out";

    const testimonialObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          testimonial.style.opacity = 1;
        }
      });
    }, { threshold: 0.5 });

    testimonialObserver.observe(testimonial);
  });

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar-fill");

  const animateBars = () => {
    bars.forEach(bar => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  };

  const skillsSection = document.querySelector(".skills-section");

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        animateBars();
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", () => {
  // Animate skill bars
  const bars = document.querySelectorAll(".bar-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.6
  });

  bars.forEach(bar => {
    observer.observe(bar);
  });

  // Fade-in animation for hero card
  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    setTimeout(() => {
      heroCard.style.opacity = "1";
      heroCard.style.transform = "translateY(0)";
    }, 500);
  }
});

