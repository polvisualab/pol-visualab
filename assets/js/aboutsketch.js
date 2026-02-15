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

  gsap.registerPlugin(ScrambleTextPlugin, TextPlugin);

  const textAnimation = gsap.to(".animate-text", 3, {
    delay: 0,
    scrambleText: {
      text: "HEY!",
      lefttoRight: true,
    },
  });
});
