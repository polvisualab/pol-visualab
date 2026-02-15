document.addEventListener("DOMContentLoaded", (event) => {
  const cursor = document.querySelector(".cursor");
  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 1,
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      duration: 0.5,
      overwrite: "auto",
      x: e.clientX,
      y: e.clientY,
      stagger: 0.05,
      ease: "ease",
    });
  });
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
});
