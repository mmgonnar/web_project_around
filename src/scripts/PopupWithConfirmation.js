
import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(handleConfirmation) {
    super.open();
    this._submitCallback = handleConfirmation;
  }

  close() {
    super.close();
    this._form.removeEventListener("submit", this._submitCallback);
  }

  setEventListeners() {
    super.setEventListeners();
    if (!this._form) {
      this._form = this._popupElement.querySelector(".popup__form");
    }
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback();
      this.close();
    });
  }
}

export const confirmationPopup = new PopupWithConfirmation(
  ".popup_confirmation"
);
