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

  // const logoMenu = document.querySelector(".logomenu-svg");
  // const logoMenuSVG = logoMenu.querySelector("svg");
  // const logoMenuPath = logoMenuSVG.querySelector("path");

  // const logoWrapper = document.querySelector(".logo-container");
  // const logoSVG = logoWrapper.querySelector("svg");
  // const logoSVGPath = logoSVG.querySelector("path");

  // gsap.set(logoSVGPath, {
  //   fill: "#D2FF02",
  //   stroke: "none",
  // });

  // logoMenu.addEventListener("mouseenter", (e) => {
  //   gsap.to(logoMenuPath, {
  //     fill: "#D9D9D9",
  //   });
  // });

  const project01 = document.querySelector(".project01");
  const project02 = document.querySelector(".project02");
  const project03 = document.querySelector(".project03");
  const project04 = document.querySelector(".project04");
  const project05 = document.querySelector(".project05");

  const imgCover01 = document.querySelector(".project01-img");
  const imgCover02 = document.querySelector(".project02-img");
  const imgCover03 = document.querySelector(".project03-img");
  const imgCover04 = document.querySelector(".project04-img");
  const imgCover05 = document.querySelector(".project05-img");

  gsap.set([imgCover01, imgCover02, imgCover03, imgCover04, imgCover05], {
    opacity: 0,
  });

  project01.addEventListener("mouseenter", (e) => {
    gsap.to(imgCover01, {
      opacity: 1,
      duration: 0.1,
    });
  });
  project01.addEventListener("mouseleave", (e) => {
    gsap.to(imgCover01, {
      opacity: 0,
      duration: 0.1,
    });
  });

  project02.addEventListener("mouseenter", (e) => {
    gsap.to(imgCover02, {
      opacity: 1,
      duration: 0.1,
    });
  });
  project02.addEventListener("mouseleave", (e) => {
    gsap.to(imgCover02, {
      opacity: 0,
      duration: 0.1,
    });
  });

  project03.addEventListener("mouseenter", (e) => {
    gsap.to(imgCover03, {
      opacity: 1,
      duration: 0.1,
    });
  });
  project03.addEventListener("mouseleave", (e) => {
    gsap.to(imgCover03, {
      opacity: 0,
      duration: 0.1,
    });
  });

  project04.addEventListener("mouseenter", (e) => {
    gsap.to(imgCover04, {
      opacity: 1,
      duration: 0.1,
    });
  });
  project04.addEventListener("mouseleave", (e) => {
    gsap.to(imgCover04, {
      opacity: 0,
      duration: 0.1,
    });
  });

  project05.addEventListener("mouseenter", (e) => {
    gsap.to(imgCover05, {
      opacity: 1,
      duration: 0.1,
    });
  });
  project05.addEventListener("mouseleave", (e) => {
    gsap.to(imgCover05, {
      opacity: 0,
      duration: 0.1,
    });
  });

  const openIMG = document.querySelectorAll(".open-img");

  gsap.to(openIMG, {
    rotation: 360,
    transformOrigin: "center",
    ease: "none",
    duration: 20,
    repeat: -1,
  });

  console.log(".open-img-2");

  gsap.to(".open-img-2", {
    rotation: 360,
    duration: 20,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%",
  });

  // --- PROJECTS IMG

  // const videoWrapper = document.querySelector(".lab-cover");
  // const videoMenu = document.querySelector(".archive");

  // gsap.set(videoWrapper, {
  //   opacity: 0,
  // });

  // videoMenu.addEventListener("mouseenter", (e) => {
  //   gsap.to(videoWrapper, {
  //     opacity: 1,
  //   });
  // });

  // videoMenu.addEventListener("mouseleave", (e) => {
  //   gsap.to(videoWrapper, {
  //     opacity: 0,
  //   });
  // });

  // const nProject = document.querySelectorAll(".n-project");

  // const nProjectP = nProject.querySelectorAll("p");

  // nProject.addEventListener("mouseenter", (e) => {
  //   gsap.to(nProjectP, {
  //     color: "black",
  //     scale: 4,
  //   });
  // });
});
