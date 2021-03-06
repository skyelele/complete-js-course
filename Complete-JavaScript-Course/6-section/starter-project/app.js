// BUDGET CONTROLLRE
const budgetController = (function() {
  // Some code
})();

// UI CONTROLLER
const UIController = (function() {
  // Some code
  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        // inc or exp
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputType).value,
        value: document.querySelector(DONstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
const controller = (function(budgetCtrl, UICtrl) {
  const setupEventListeners = function() {
    const DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  const ctrlAddItem = function() {
    // 1. Get the filed input data.
    const input = UICtrl.getInput();

    // 2. Add the item to the budget controller.
    // 3. Add the item to the UI.
    // 4. Calculate the budget.
    // 5. Display the budget on the UI.
  };

  return {
    init: function() {
      console.log("Application has started.");
    }
  };
})(budgetController, UIController);
