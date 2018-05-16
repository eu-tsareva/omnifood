const navbar = document.querySelector(".page-header .navbar");
const sectionFeatures = document.querySelector(".section-features");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  window.dispatchEvent(new Event("scroll"));

  document.querySelector("#scrollToPlans").addEventListener("click", (e) => {
    e.preventDefault();
    animateScroll(document.querySelector("#sectionPlan"), 1000)
  });
  document.querySelector("#scrollToFeatures").addEventListener("click", (e) => {
    e.preventDefault();
    animateScroll(document.querySelector("#sectionFeatures"), 500)
  });
  document.querySelectorAll(".page-header .nav-item a").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      const element = document.querySelector(href);
      animateScroll(element, 1000);
    });
  });
});

window.addEventListener("scroll", () => {
  handleScroll(sectionFeatures, direction => {
    if (direction === "after") {
      navbar.classList.add("fixed-top");
    } else if(direction === "before") {
      navbar.classList.remove("fixed-top");
    }
  }, 62);
});

handleScroll = (element, callback, userOffset = 0) => {
  const elOffset = element.getBoundingClientRect().top;
  const scrollPosition = (elOffset - userOffset) >= 0 ? "before" : "after";
  callback(scrollPosition);
}

animateScroll = (element, duration) => {
  const elOffset = element.getBoundingClientRect().top + window.scrollY;
  const increment = 20;
  let currentTime = 0;

  animate = () => {
    const change = elOffset - body.scrollTop;
    currentTime += increment;
    body.scrollTop += Math.easeInOutQuad(currentTime, change, duration);
    if (currentTime < duration) {
      setTimeout(animate, increment);
    }
  }
  animate();
}

Math.easeInOutQuad = (time, change, duration) => {
  time /= duration;
  if (time < 0.5) {
    return 2*time*time*change;
  } else {
    return (-1+(4-2*time)*time)*change;
  }
}