const navbar = document.querySelector(".page-header .navbar");
const sectionFeatures = document.querySelector(".section-features");

window.addEventListener("scroll", () => (
  handleScroll(sectionFeatures, direction => {
    if (direction === "after") {
      navbar.classList.add("fixed-top");
    } else if(direction === "before") {
      navbar.classList.remove("fixed-top");
    }
  }, 62)
));

handleScroll = (element, callback, userOffset = 0) => {
  const elOffset = element.getBoundingClientRect().top;
  const scrollPosition = (elOffset - userOffset) >= 0 ? "before" : "after";
  callback(scrollPosition);
}