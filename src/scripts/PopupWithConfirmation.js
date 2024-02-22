import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }
  open() {
    super.open();
    /* if (this._popupConfirmation) {
      this._popupConfirmation.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleSubmit();
      });
    } else {
      console.log("No confirmation form");
      return;
    } */
  }

  /* close() {
    super.close();
  } */

  setEventListeners() {
    super.setEventListeners();
    if (!this._form) {
      this._form = this._popupElement.querySelector(".popup__form");
    }
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback();
    });
  }
}

export const confirmationPopup = new PopupWithConfirmation(
  ".popup_confirmation"
);
