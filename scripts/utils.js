export const popupImageElement = document.querySelector(".popup__element");

//Hide or shows popups
export function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

//Form Validator

//Starts validation of the form with the provided settings.
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit-disabled",
  inputErrorClass: "popup__input_has-error",
  errorClass: "popup__error",
};
