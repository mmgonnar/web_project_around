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
    // logica esc -> this.close()
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

// First try
/* export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this.popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListener() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
} */
