import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
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

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupConfirmation.querySelector(".popup__button").textContent =
        "Saving...";
    }

    .addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLoading
    })
  }
}

export const confirmationPopup = new PopupWithConfirmation(
  ".popup_type_confirmation"
);

export { confirmationPopup };
