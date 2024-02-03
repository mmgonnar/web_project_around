import { openPopup } from "./utils.js";

export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return templateSelector;
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
    buttonImage.addEventListener("click", this._handleCardClick);
  }

  generateCard() {
    const cardElement = this.getTemplate();
    this._cardElement = cardElement;

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title-strong");

    cardImage.src = this._link;
    cardImage.alt = this._name;

    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}
