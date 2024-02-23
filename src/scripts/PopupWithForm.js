import Popup from "./Popup.js";
import { profileJob, profileName } from "./const.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;

  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setInputValues() {
    super.setEventListeners();
    const inputName = this._inputList[0];
    const inputJob = this._inputList[1];
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    if (!this._form) {
      this._form = this._popupElement.querySelector(".popup__form");
      this._inputList = this._form.querySelectorAll(".popup__input");
    }
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._submitCallback) {
        this.renderLoading(true);
      }
      // se pone el texto de guardando
      this._submitCallback(this._getInputValues()).finally(() => {
        this.renderLoading(false);
        //se vuelve a poner guardar
        this.close();
      })
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._form.querySelector(".button_submit").textContent =
        "Saving...";
    } else {}
  }

  close() {
    super.close();
    this._form.reset();
  }
}
