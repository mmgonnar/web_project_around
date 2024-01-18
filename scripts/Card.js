import { popupButtonSwitch } from "./utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return templateSelector;
  }

  openPopup() {
    //const cardImage = this._cardElement.querySelector(".card__image");
    //const cardTitle = this._cardElement.querySelector(".card__title");
    const popupImageElement = document.querySelector(".popup_image");
    const popupImageImg = popupImageElement.querySelector(".popup__element");
    const popupImageTitle = popupImageElement.querySelector(".popup__title");
    popupImageImg.src = this._link;
    popupButtonSwitch(popupImageElement);
    popupImageImg.setAttribute("alt", this._name);
    popupImageTitle.textContent = this._name;
  }

  _setEventListeners(cardElement) {
    const buttonLike = cardElement.querySelector(".button_like");
    buttonLike.addEventListener("click", () => {
      buttonLike.classList.toggle("liked");
    });

    const buttonDelete = cardElement.querySelector(".button_delete");
    buttonDelete.addEventListener("click", () => {
      const card = buttonDelete.closest(".card");
      card.remove();
    });

    const buttonImage = cardElement.querySelector(".card__image");
    buttonImage.addEventListener("click", () => {
      this.openPopup();
    });
  }

  generateCard() {
    //
    const cardElement = this.getTemplate();
    this._cardElement = cardElement;

    const cardImage = cardElement.querySelector(".card__image"); //Etiqueta img

    const cardTitle = cardElement.querySelector(".card__title"); //etiqueta h6

    // Desarrollo de atributos en <img src="" alt="" />
    cardImage.src = this._link;
    cardImage.alt = this._name;

    // <h6>{this._name}</h6>
    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}
