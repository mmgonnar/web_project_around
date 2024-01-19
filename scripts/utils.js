export const popupImageElement = document.querySelector(".popup__element");

//Hide or shows popups
export function togglePopup(popup) {
  popup.classList.toggle("popup_show");
  if (popup.classList.contains("popup_show")) {
    document.addEventListener("keydown", keydownHandler);
  } else {
    document.removeEventListener("keydown", keydownHandler);
  }
}

export function openPopup(data) {
  const popupImageElement = document.querySelector(".popup_image");
  const popupImageImg = popupImageElement.querySelector(".popup__element");
  const popupImageTitle = popupImageElement.querySelector(".popup__title");
  popupImageImg.src = data._link;
  popupImageImg.setAttribute("alt", data._name);
  popupImageTitle.textContent = data._name;
  popupButtonSwitch(popupImageElement);
}

//Starts validation of the form with the provided settings.
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_submit-disabled",
  inputErrorClass: "popup__input_has-error",
  errorClass: "popup__error",
};

//Switch popup
export function popupButtonSwitch(popupElement) {
  togglePopup(popupElement);
}

export function keydownHandler(event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
      }
    });
  }
}
