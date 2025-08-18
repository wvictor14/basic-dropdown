import "./styles.css";

function makeDropDownItemsHidden() {
  const dropdownDiv = document.querySelector(".dropdown");
  const itemsList = dropdownDiv.querySelector(".dropdown-items-list");
  itemsList.classList.remove("visible");
  itemsList.classList.add("hidden");
}

function addDropDownListener() {
  const dropdownDiv = document.querySelector(".dropdown");
  const title = dropdownDiv.querySelector(".dropdown-title");
  const itemsList = dropdownDiv.querySelector(".dropdown-items-list");

  title.addEventListener("click", () => {
      itemsList.style.display = 'block';
    
  });
}

window.addEventListener("click", function (e) {
  const dropdownDiv = document.querySelector(".dropdown");
  const itemsList = dropdownDiv.querySelector(".dropdown-items-list");

  if (itemsList.contains(e.target)) {
    // Clicked in box
  } else {
    // // Clicked outside the box
    // itemsList.style.display = 'none';
    // itemsList.classList.add("hidden");
  }
});

makeDropDownItemsHidden();
addDropDownListener();
