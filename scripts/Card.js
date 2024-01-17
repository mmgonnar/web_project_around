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
    const cardImage = this._cardElement.querySelector(".card__image");
    const cardTitle = this._cardElement.querySelector(".card__title");
    const popupImageElement = document.querySelector(".popup_image");
    cardImage.src = this._link;
    popupButtonSwitch(popupImageElement);
    cardImage.setAttribute("alt", this._name);
    cardTitle.textContent = cardTitle.textContent;
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

  closePopup() {}

  /**
    generateCard() {
      this._templateSelector = this.getTemplate();
      this.setEventListeners();
      return this.?
    }
  */

  generateCard() {
    //
    const cardElement = this.getTemplate();
    this._cardElement = cardElement;

    // Esta es una etiqueta <img />
    const cardImage = cardElement.querySelector(".card__image");

    // Esta es una etiqueta <h6></h6>
    const cardTitle = cardElement.querySelector(".card__title");

    // Desarrollo de atributos en <img src="" alt="" />
    cardImage.src = this._link;
    cardImage.alt = this._name;

    // <h6>{this._name}</h6>
    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}
