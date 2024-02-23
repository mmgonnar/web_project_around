import { openPopup } from "./utils.js";
import { confirmationPopup } from "./PopupWithConfirmation.js";

export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    handleLike,
    handleRemoveLike,
  /*   handleDeleteCard, */
    { id, likes, owner, createdAt }
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleRemove = handleRemoveLike;
    /* this._handleDelete = handleDeleteCard; */
    this._id = id;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;
  }

  getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return templateSelector;
  }

  handleDelete(cardElement) {
    const card = cardElement.closest(".card");
    confirmationPopup.open(card);
    /* card.remove(); */
  }

  _setEventListeners(cardElement) {
    const buttonLike = cardElement.querySelector(".button_like");
    buttonLike.addEventListener("click", () => {
      const isLiked = buttonLike.classList.contains("liked");

      if (isLiked) {
        this._handleRemoveLike();
      } else {
        this._handleLike(this._id, buttonLike);
      }

      //  buttonLike.classList.toggle("liked");
    });

    const buttonDelete = cardElement.querySelector(".button_delete");
    buttonDelete.addEventListener("click", () => {
      /* onfirmationPopup.open(); */
      this.handleDelete(cardElement);
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
