// logic for the input //
document.querySelector("button").addEventListener("click" , () => {
   document.querySelectorAll("input").forEach((inputs) => {
        inputs.value = "";
   } )
})


// this is for scrollign effect
const circle = document.querySelector('.sticker');
let totalScroll = 0;
function handleScroll() {
  
    const currentScroll = window.scrollY;

    const scrollDifference = currentScroll - totalScroll;

    totalScroll += scrollDifference;

    const rotationAngle = totalScroll;

    gsap.to(circle, {
        rotation: rotationAngle,
        duration: 0,
        ease: "none"
    });
}


window.addEventListener('scroll', handleScroll);






// GSAP and ScrollTrigger Registration
gsap.registerPlugin(ScrollTrigger);

// Scrolling effect for rotation
gsap.to(".sticker", {
  rotation: 360, // Rotate 360 degrees
  scrollTrigger: {
    trigger: ".sticker",
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Smoothly scrubs the animation with scroll
  },
});

// Popping effect
document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".upper-text",
    {
      scale: 0,
      opacity: 0,
    },
    {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: "bounce.out",
    }
  );

  gsap.fromTo(
    ".lower-text",
    {
      scale: 0,
      opacity: 0,
    },
    {
      duration: 1.9,
      scale: 1,
      opacity: 1,
      ease: "bounce.out",
    }
  );

  gsap.fromTo(
    ".bowl",
    {
      scale: 0,
      opacity: 0,
    },
    {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      ease: "bounce.out",
    }
  );

  gsap.fromTo(
    ".fixed",
    {
      y: "100px",
    },
    {
      y: "0",
      ease: "power1.out",
      delay: 0.5,
    }
  );

  gsap.fromTo(
    ".sticker",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.6,
    }
  );
});

// Throttling Function
const throttleFunction = (func, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      func(...args);
    }
  };
};

// Mousemove effect
const handleMouseMove = (event) => {
  const div = document.createElement("div");
  div.classList.add("effect");
  div.style.left = `${event.clientX}px`;
  div.style.top = `${event.clientY}px`;

  const divImage = document.createElement("img");
  divImage.classList.add("imageEffect");
  divImage.setAttribute(
    "src",
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  div.appendChild(divImage);

  gsap.to(divImage, {
    y: "0",
    ease: "power1.out",
    duration: 0.6,
  });

  gsap.to(divImage, {
    y: "100%",
    delay: 0.6,
    ease: "power2.out",
  });

  setTimeout(() => div.remove(), 800);
  document.body.appendChild(div);
};

document
  .querySelector(".bowl")
  .addEventListener("mousemove", throttleFunction(handleMouseMove, 100));

// One-by-One Appearance
gsap.from(".image-one", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".image-one",
    start: "top 80%",
    once: true,
  },
});

// Circular Image Popping
gsap.from(".circular-image-2", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".circular-image-2",
    start: "top 80%",
    once: true,
  },
});

