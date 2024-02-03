import Popup from "./Popup.js";
import { profileJob, profileName } from "./const.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    console.log(this._popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");

    this.setEventListeners();
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setInputValues() {
    const inputName = this._inputList[0];
    const inputJob = this._inputList[1];
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
