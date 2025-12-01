document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".contact-container, .slideUp");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
            }, 2500);
          }, 3000); // Initial delay after fade-in
        }
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});
