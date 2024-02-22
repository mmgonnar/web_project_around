import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupConfirmation = this._popup.querySelector('.popup__confirmation');
  }
open() {
  super.open();{
  });
}

  close() {
    super.close();
    this._form.reset();
  }
}
