export const popupImageElement = document.querySelector(".popup__element");

//Hide or shows popups
export function togglePopup(popup) {
  popup.classList.toggle("popup_show");
  //document.addEventListener("keydown", keydownHandler); //Event for keydown esc
  //document.removeEventListener("keydown", keydownHandler);
  if (popup.classList.contains("popup_show")) {
    document.addEventListener("keydown", keydownHandler);
  } else {
    document.removeEventListener("keydown", keydownHandler);
  }
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
  //unir con toggle popup
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
