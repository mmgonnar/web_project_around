export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".button_close");
  }

  //DRY
  open() {
    this._popupElement.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    // lógica esc -> this.close()
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }

  /* removeEventListeners() {
    this._popupCloseButtonElement.removeEventListeners();
  } */
}

//const popup = new Popup(".popup");
