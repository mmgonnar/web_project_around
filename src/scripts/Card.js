import { openPopup } from "./utils.js";
import { confirmationPopup } from "./PopupWithConfirmation.js";

export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    counterSelector,
    handleCardClick,
    cardId,
    { id, likes, owner, createdAt, avatar, ownerId },
    handleLike,
    handleRemoveLike
    /*   handleDeleteCard, */
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._counterSelector = counterSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = cardId;
    this._id = id;
    this._likes = likes;
    this._owner = owner;
    this._ownerId = ownerId;
    this._createdAt = createdAt;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    /* this._handleDelete = handleDeleteCard; */
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
    console.log(buttonLike);
    buttonLike.addEventListener("click", () => {
      // Evaluación de owner sobre el like
      // const isLiked = buttonLike.classList.contains("liked");

      // Comparar en el arreglo de likes, si el ownerId ya aparece en uno de los objetos, entonces, significa que "isLiked", si no aparece, significa que no es "isLiked" y entonces, le damos otro evento
      const isLiked = this._likes.some((elem) => elem._id === this._ownerId);
      console.log(isLiked);

      // const isLiked =
      if (isLiked) {
        console.log("Quitar like...");
        this._handleRemoveLike(this._id, buttonLike);

        // this._updateLikes()
      } else {
        console.log("Poner like...");
        console.log(this._templateSelector);
        // console.log(this._counterSelector);
        this._handleLike(this._id, buttonLike);
        // this._updateLikes()
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

    cardElement.id = this._cardId;

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title-strong");

    cardImage.src = this._link;
    cardImage.alt = this._name;

    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}
