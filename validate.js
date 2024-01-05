//Hides any error messages for the given form and input.
function hideError(form, errorSelector, config) {
  const errorElement = form.querySelector(errorSelector); //Select error element
  errorElement.textContent = ""; //Deletes error message content
  errorElement.classList.remove(config.errorClass); //removes error class
}

//Shows an error message for the given form and input.
function showError(form, errorSelector, config, errorMessage) {
  const errorElement = form.querySelector(errorSelector); //Selects error element
  errorElement.textContent = errorMessage; //Stablish error message
  errorElement.classList.add(config.errorClass); //Adds error class
}

//Shows submit button if inputs are valid
function toggleButton(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector)); //Gets all inputs
  const submitButton = form.querySelector(config.submitButtonSelector); //Selects submit button
  if (inputs.every((item) => item.validity.valid)) {
    submitButton.disabled = false; //Enable submit button
    submitButton.classList.remove(config.inactiveButtonClass);
  } else {
    submitButton.disabled = true; //Disable submit button
    submitButton.classList.add(config.inactiveButtonClass); //Adds idle class
  }
}

//Validate inputs
function checkInputValidity(input, config) {
  if (input.validity.valid) {
    hideError(input.form, `#input__error-${input.name}`, config);
  } else {
    showError(
      input.form,
      `#input__error-${input.name}`,
      config,
      input.validationMessage
    );
  }
  toggleButton(input.form, config);
}

//Enable form validation
function enableValidation(config) {
  const forms = Array.from(document.forms); //Gets all forms

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //Avoid submittinf the form
    });

    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, config); //Validate input
      });
    });
    toggleButton(form, config); //Shows or hide subbmit button
  });
}
//Starts validation of the form with the provided settings.
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button__submit_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: ".popup__input_error",
});
