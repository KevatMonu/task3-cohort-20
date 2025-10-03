function CustomCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
}

function CursorHoverEffects() {
  const cursor = document.querySelector(".cursor");

  document
    .querySelectorAll("a, button, .nav-icon, .stat, .sound-toggle")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("expand"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("expand")
      );
    });
}

function HeroTimeline() {
  const tl = gsap.timeline();
  const infoSection = document.querySelector(".info-section");
  tl.to(".hero-content", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.5,
  }).to(
    ".info-section",
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=3"
  );

  gsap.to(infoSection, {
    bottom: "4vw",
    duration: 1,
    ease: "power2.out",
    delay: 4,
  });
}

function VideoSoundControl() {
  const video = document.getElementById("bgVideo");
  const soundToggle = document.getElementById("soundToggle");
  let isMuted = true;

  video.muted = false;
  video.play().catch(() => {
    video.muted = true;
    isMuted = true;
    video.play();
  });

  soundToggle.addEventListener("click", () => {
    isMuted = !isMuted;
    video.muted = isMuted;
    soundToggle.innerHTML = isMuted
      ? '<i class="ri-volume-mute-line"></i>'
      : '<i class="ri-volume-up-line"></i>';
  });
}

function CarEntrance() {
  gsap.to(".car-image", {
    left: "80vw",
    duration: 5,
    ease: "power3.out",
  });
  gsap.to(".car2-image", {
    left: "70vw",
    duration: 5,
    delay: 1.5,
    ease: "power3.out",
  });
  gsap.to(".car3-image", {
    left: "60vw",
    duration: 5,
    delay: 2,
    ease: "power3.out",
  });
}

function CarGlow() {
  const cars = document.querySelectorAll(
    ".car-image, .car2-image, .car3-image"
  );

  if (!cars.length) return;

  cars.forEach((car) => {
    car.addEventListener("mouseenter", () => {
      gsap.to(car, {
        scale: 1.05,
        filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.6))",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    car.addEventListener("mouseleave", () => {
      gsap.to(car, {
        scale: 1,
        filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });
}
function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger-menu");
  const back = document.querySelector("#back-menu");
  const menu = document.querySelector("#menu");

  menu.addEventListener("click", () => {
    gsap.to(hamburger, {
      right: "0",
      duration: 0.3,
      ease: "power3.out",
    });
  });

  back.addEventListener("click", () => {
    gsap.to(hamburger, {
      right: "-30vw",
      duration: 0.3,
      ease: "power3.in",
    });
  });
}

function ResponsiveCode() {
  if (window.innerWidth <= 767) {
    gsap.to(".info-section", {
      bottom: "35vw",
      duration: 1,
      ease: "power2.out",
      delay: 4,
    });
    gsap.to(".car-image", { left: "60vw", duration: 5, ease: "power3.out" });
    gsap.to(".car2-image", {
      left: "40vw",
      duration: 5,
      delay: 1.5,
      ease: "power3.out",
    });
    gsap.to(".car3-image", {
      left: "20vw",
      duration: 5,
      delay: 2,
      ease: "power3.out",
    });

  
  } else {
    gsap.to(".car-image", { left: "80vw", duration: 5, ease: "power3.out" });
    gsap.to(".car2-image", {
      left: "70vw",
      duration: 5,
      delay: 1.5,
      ease: "power3.out",
    });
    gsap.to(".car3-image", {
      left: "60vw",
      duration: 5,
      delay: 2,
      ease: "power3.out",
    });
  }
}

function ResponsiveHamburger() {
    const hamburger = document.querySelector(".hamburger-menu");
    const back = document.querySelector("#back-menu");
    const menu = document.querySelector("#menu");

    let menuWidth, hiddenRight;
    if (window.innerWidth <= 767) { 
        menuWidth = "50vw";
        hiddenRight = "-60vw";
    } else { 
        menuWidth = "20vw";
        hiddenRight = "-30vw";
    }

  
    hamburger.style.width = menuWidth;
    hamburger.style.right = hiddenRight;

    menu.addEventListener("click", () => {
        gsap.to(hamburger, {
            right: "0",
            duration: 0.3,
            ease: "power3.out",
        });
    });

    back.addEventListener("click", () => {
        gsap.to(hamburger, {
            right: hiddenRight,
            duration: 0.3,
            ease: "power3.in",
        });
    });
}

function AllAnimations() {
  CustomCursor();
  CursorHoverEffects();
  HeroTimeline();
  VideoSoundControl();
  CarEntrance();
  CarGlow();
  hamburgerMenu();
  ResponsiveCode();
  ResponsiveHamburger();
}

document.addEventListener("DOMContentLoaded", AllAnimations);
