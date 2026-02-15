document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrambleTextPlugin, TextPlugin);

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });

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

  const textAnimation1 = gsap.to(".animate-text", 1.8, {
    delay: 0,
    scrambleText: {
      text: "web",
      lefttoRight: true,
    },
  });

  const textAnimation2 = gsap.to(".animate-text2", 3, {
    delay: 0,
    scrambleText: {
      text: "poster",
      lefttoRight: true,
    },
  });

  const textAnimation3 = gsap.to(".animate-text3", 3.5, {
    delay: 0,
    scrambleText: {
      text: "generative",
      lefttoRight: true,
    },
  });
});
