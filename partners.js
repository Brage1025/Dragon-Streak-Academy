// partners.js - Fixed hover behavior
document.addEventListener("DOMContentLoaded", function () {
  const partnersSlide = document.querySelector(".partners-slide");
  const partnerLogos = document.querySelectorAll(".partner-logo");

  if (partnersSlide) {
    // Handle logo hover to pause animation
    partnerLogos.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        partnersSlide.style.animationPlayState = "paused";
      });

      logo.addEventListener("mouseleave", () => {
        partnersSlide.style.animationPlayState = "running";
      });
    });

    // Handle tab visibility for performance
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        partnersSlide.style.animationPlayState = "paused";
      } else {
        partnersSlide.style.animationPlayState = "running";
      }
    });
  }
});
