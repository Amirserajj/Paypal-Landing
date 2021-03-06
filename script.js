// Navigation

const dropdownItems = document.querySelectorAll(".dropdown-hover");
dropdownItems.forEach((dropdownItems) => {
  dropdownItems.addEventListener("mouseover", () => {
    dropdownItems.lastElementChild.style.cssText =
      "opacity:1; visibility:visible;";
    document.querySelector(".navbar-wrapper").style.background =
      "linear-gradient(to right, #066399, #2f8fdf, #066399)";
  });
  dropdownItems.addEventListener("mouseout", () => {
    dropdownItems.lastElementChild.style.cssText =
      "opacity:0; visibility:hidden;";
    document.querySelector(".navbar-wrapper").style.background = "none";
  });
});

// Navigation End
