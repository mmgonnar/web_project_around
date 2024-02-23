import Popup from "./Popup.js";
import { api } from "../utils/api.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }
  open(card) {
    super.open();
    this._card = card;
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
      this._submitCallback(this._card);
    });
  }
}

export const confirmationPopup = new PopupWithConfirmation(
  ".popup_confirmation",
  (card) => {
    console.log(card)

    return api.deleteCard(card)
      .then(() => {
        console.log("La tarjeta se borró");
        card.remove();
      })
      .catch((error) => {
        console.error("Error al borrar la tarjeta:", error);
      });
  }
);
