//Validate
function hideError(form, errorSelector, config) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

function showError(form, errorSelector, config, errorMessage) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

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

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button__submit_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: ".popup__input_error",
});
