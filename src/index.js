import "./styles.css";
export function initializeDropdowns() {
  clickOutsideClosesMenu();

  const dropdowns = document.querySelectorAll(".dropdown");
  if (!dropdowns) return;

  dropdowns.forEach(dropdown => {

    const title = dropdown.querySelector(".dropdown-title");
    const itemsList = dropdown.querySelector(".dropdown-items-list");
    if (!title || !itemsList) return;

    // initialize the items with the hidden class
    itemsList.classList.add("hidden");
    itemsList.classList.remove("visible");

    // add event listener that toggles the class on/off
    const handleClick = function () {
      itemsList.classList.toggle("hidden");
      itemsList.classList.toggle("visible");
    }

    title.addEventListener("click", handleClick);
  })
}

function clickOutsideClosesMenu() {
  document.addEventListener("click", function (e) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        const itemsList = dropdown.querySelector(".dropdown-items-list");
        if (itemsList) {
          itemsList.classList.add("hidden");
          itemsList.classList.remove("visible");
        }
      }
    });
  });
}

// initializeDropdowns();
