(function initializeBillSplitter() {
  function getEl(id) {
    return typeof document !== "undefined" ? document.getElementById(id) : null;
  }

  function calculateBill() {
  }

  function toggleTheme() {
  }

  function fillPeopleDropdown() {
  }

  function setupEvents() {
    const calculateBtn = getEl("calculate");
    const toggleThemeBtn = getEl("toggle-theme");

    if (calculateBtn) {
      calculateBtn.addEventListener("click", calculateBill);
    }

    if (toggleThemeBtn) {
      toggleThemeBtn.addEventListener("click", toggleTheme);
    }
  }

  function init() {
    fillPeopleDropdown();
    setupEvents();
  }

  // Initialize in browser
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  // Expose for test cases (jsdom in Node)
  if (typeof window !== "undefined") {
    window.calculateBill = calculateBill;
    window.fillPeopleDropdown = fillPeopleDropdown;
    window.toggleTheme = toggleTheme;
  }
})();
