// Inject CSS styles when the module is imported
function injectStyles() {
  // Prevent duplicate injection
  if (document.getElementById('basic-dropdown-styles')) return;
  
  const styles = `
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-title {
      cursor: pointer;
      padding: 8px 12px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
      user-select: none;
    }
    
    .dropdown-title:hover {
      background-color: #e9e9e9;
    }
    
    .dropdown-items-list {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 100%;
      background-color: white;
      border: 1px solid #ccc;
      border-top: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    
    .dropdown-items-list.hidden {
      display: none;
    }
    
    .dropdown-items-list.visible {
      display: block;
    }
    
    .dropdown-item {
      padding: 8px 12px;
      cursor: pointer;
    }
    
    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.id = 'basic-dropdown-styles';
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export function initializeDropdowns() {

  // Inject styles first
  injectStyles();

  // initialize outside click handler
  clickOutsideClosesMenu();

  const dropdowns = document.querySelectorAll(".dropdown");
  if (!dropdowns.length) return; // Changed from !dropdowns (NodeList is always truthy)

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

  // Prevent duplicate event listeners
  if (document._basicDropdownInitialized) return;
  document._basicDropdownInitialized = true;

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

// Export individual functions for more flexibility
export { injectStyles };

// Default export for convenience
export default initializeDropdowns;