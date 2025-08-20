import "./styles.css";

function addDropDownListener() {
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

addDropDownListener();
