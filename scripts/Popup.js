export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".button_close");
  }

  //DRY
  open() {
    this._popupElement.classList.add("popup_show");
  }

  close() {
    this._popupElement.classList.remove("popup_show");
  }

  _handleEscClose(evt) {
    // lógica esc -> this.close()
    if (evt.key === "Escape") {
      this.close();
    }
    console.log(this._handleEscClose);
  }

  setEventListeners() {
    this._popupCloseButtonElement.addEventListener(
      ("click",
      () => {
        this._popupElement.close();
        this.removeEventListeners();
      })
    );
  }

  removeEventListeners() {
    this._popupCloseButtonElement.removeEventListeners();
  }
}

const popup = new Popup(".popup");
