// ! Generate Pin
function generatePin() {
  // Math.round() diye eta kora jabe but eta to string kora lgbe tai ekbareee toFixed diye string kore diyechi
  const generatedPin = (Math.random() * 10000).toFixed(0);
  return generatedPin;
}
function getPin() {
  let pin = generatePin();
  // pin er length er 4 digit er hole output dibe 4 digit er kom hole function abar chalabe
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
}

//! Show Pin
document.getElementById("btn-generate").addEventListener("click", function () {
  const pin = getPin();
  //  display pin
  const displayPin = document.getElementById("input-generate");
  displayPin.value = pin;
});

//! Calculator Functionality
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const character = event.target.innerText;
    const inputCalculatorElement = document.getElementById("input-calculator");
    const previousInputCalculator = inputCalculatorElement.value;

    // * Click numbers and character
    if (isNaN(character)) {
      //? C dile sob clear hoye jabe
      if (character === "C") {
        inputCalculatorElement.value = "";
      } else if (character === "<") {
        //?   <   dile last er ta delete hbe
        // Note : split("") eta use korle prottekta element alada alada hoye ekta array gothon korbe
        const digits = previousInputCalculator.split("");
        digits.pop();
        // note : join("") alada hoya element gula abr ekhsthe korbe
        const remainingDigits = digits.join("");
        inputCalculatorElement.value = remainingDigits;
      }
    }

    // * Show clicked number in input-field
    else {
      // previous&character value duita jog na korle character gulate click korar por ekta onno take replace kore felbe
      const newInputCalculator = previousInputCalculator + character;
      inputCalculatorElement.value = newInputCalculator;
    }
  });

// * Submit button for verify
document.getElementById("btn-verify").addEventListener("click", function () {
  //  getting pin input and calculator input value
  const displayPin = document.getElementById("input-generate");
  const displayPinValue = displayPin.value;
  const calculatorInput = document.getElementById("input-calculator");
  const calculatorInputValue = calculatorInput.value;
  // getting message id
  const succsesMessage = document.getElementById("pin-succsed");
  const failedMessage = document.getElementById("pin-failed");
  if (displayPinValue === calculatorInputValue) {
    // showing messages
    succsesMessage.style.display = "block";
    failedMessage.style.display = "none";
  } else {
    succsesMessage.style.display = "none";
    failedMessage.style.display = "block";
  }
});
