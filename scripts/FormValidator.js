//import { validationConfig } from "./utils.js";

export default class FormValidator {
  constructor(validationConfig, formElement) {
    this.validationConfig = validationConfig;
    this.formElement = formElement;
  }

  //Hides any error messages for the given form and input.
  _hideError(form, errorSelector) {
    const errorElement = form.querySelector(errorSelector);
    errorElement.textContent = "";
    errorElement.classList.remove(this.validationConfig.errorClass);
  }

  //Shows an error message for the given form and input.
  _showError(form, errorSelector, config, errorMessage) {
    const errorElement = form.querySelector(errorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  }

  //Shows submit button if inputs are valid
  _toggleButton(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);

    if (inputs.every((item) => item.validity.valid)) {
      submitButton.disabled = false;
      submitButton.classList.remove(config.inactiveButtonClass);
    } else {
      submitButton.disabled = true;
      submitButton.classList.add(config.inactiveButtonClass);
    }

    //Validate inputs
    _checkInputValidity(input, config);
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

    //Enable form validation
    _enableValidation(config);
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
}
