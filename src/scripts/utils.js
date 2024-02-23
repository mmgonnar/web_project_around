/* export function openPopup(data) {
  const popupImageElement = document.querySelector(".popup_image");
  const popupImageImg = popupImageElement.querySelector(".popup__element");
  const popupImageTitle = popupImageElement.querySelector(".popup__title");
  popupImageImg.src = data._link;
  popupImageImg.setAttribute("alt", data._title);
  popupImageTitle.textContent = data._title;
} */

//Starts validation of the form with the provided settings.
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit-disabled",
  inputErrorClass: "popup__input_has-error",
  errorClass: "popup__error",
};
