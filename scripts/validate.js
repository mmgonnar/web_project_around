//Hides any error messages for the given form and input.
function hideError(form, errorSelector, config) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

//Shows an error message for the given form and input.
function showError(form, errorSelector, config, errorMessage) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

//Shows submit button if inputs are valid
function toggleButton(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);

  if (inputs.every((item) => item.validity.valid)) {
    submitButton.disabled = false;
    submitButton.classList.remove(config.inactiveButtonClass);
  } else {
    submitButton.disabled = true;
    submitButton.classList.add(config.inactiveButtonClass);
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
  const forms = Array.from(document.forms);

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, config);
      });
    });
    toggleButton(form, config);
  });
}

//Starts validation of the form with the provided settings.
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit-disabled",
  inputErrorClass: "popup__input_has-error",
  errorClass: "popup__error",
});
