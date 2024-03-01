import { api } from "../index.js";
import Popup from "./Popup.js";
//import { api } from "../utils/api.js";
import { popupConfirmationSelector } from "./const.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }
  open(card) {
    super.open();
    this._card = card;
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
      this._submitCallback(this._card);
    });
  }
}

export const confirmationPopup = new PopupWithConfirmation(
  ".popup_confirmation",
  (card) => {
    return api.deleteCard(card.id)
      .then(() => {
        card.remove();
        confirmationPopup.close();
      })
      .catch((error) => {
        console.error("Error al borrar la tarjeta:", error);
      });
  }
);
