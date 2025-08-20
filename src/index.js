import "./styles.css";

function makeDropDownItemsHidden() {
  const dropdownDiv = document.querySelector(".dropdown");
  const itemsList = dropdownDiv.querySelector(".dropdown-items-list");
  itemsList.classList.remove("visible");
  itemsList.classList.add("hidden");
}

function addDropDownListener() {
  const dropdownDiv = document.querySelector(".dropdown");
  if (!dropdownDiv) return;

  const title = dropdownDiv.querySelector(".dropdown-title");
  const itemsList = dropdownDiv.querySelector(".dropdown-items-list");
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
}


makeDropDownItemsHidden();
addDropDownListener();
