import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const form = this._popupElement.querySelector(".popup__form");
    const inputs = form.querySelectorAll(".popup__input");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector(".popup__form");

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    const form = this._popupElement.querySelector(".popup__form");
    form.reset();
  }
}
