//import { openPopup } from "./utils.js";
import { confirmationPopup } from "./PopupWithConfirmation.js";
//import { api } from "../utils.js";

export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    cardId,
    { id, likes, owner, createdAt },
    handleLike,
    handleRemoveLike,
    user
    /*   handleDeleteCard, */
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = cardId;
    this._id = id;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;
    this._handleLike = handleLike;
    this._handleRemove = handleRemoveLike;
    this._user = user;
    /* this._handleDelete = handleDeleteCard; */
    //console.log(this)
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
  }

  _handleRemoveLike() {
    const counterNode = document.querySelector(".card__counter");
    const isLiked = buttonLike.classList.contains("liked");

    api.deleteLikeCard().then((data) => {
      buttonLike.classList.remove("liked");
      card.setLikes(data.likes);
      counterNode.textContent = data.likes.length;
      if (counterNode.length > 0) {
      } else {
      }
    });
  }

  _handleLike() {
    const counterNode = document.querySelector(".card__counter");
    const isLiked = buttonLike.classList.contains("liked");

    api.likeCard(cardId).then((data) => {
      buttonLike.classList.add("liked");
      card.setLikes(data.likes);
      counterNode.textContent = data.likes.length;
      if (counterNode.length > 0) {
      } else {
      }
    });
  }

  _setEventListeners(cardElement) {
    const buttonLike = cardElement.querySelector(".button_like");
    buttonLike.addEventListener("click", () => {
      const isLiked = buttonLike.classList.contains("liked");

      if (isLiked) {
        //this._handleLike(this, this._id, buttonLike);
        this._handleRemoveLike(this, this._id, buttonLike);
      } else {
        //buttonLike.classList.remove("liked")
        this._handleLike(this, this._id, buttonLike);
      }
    });

    const buttonDelete = cardElement.querySelector(".button_delete");
    buttonDelete.addEventListener("click", () => {
      this.handleDelete(cardElement);
    });

    const buttonImage = cardElement.querySelector(".card__image");
    buttonImage.addEventListener("click", this._handleCardClick);
  }

  _hasLikeOwner() {
    return this._likes.some((like) => like._id === this._user._id);
  }

  generateCard() {
    const cardElement = this.getTemplate();
    this._cardElement = cardElement;

    cardElement.id = this._cardId;

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title-strong");

    const buttonLike = cardElement.querySelector(".button_like");
    const counterNode = document.querySelector(".card__counter");

    if (counterNode.length > 0) {
      counterNode.textContent = this.likes.length;

      buttonLike.addEventListener("click", () => {
        if (buttonLike.classList.contains("liked")) {
          this._likes = this._likes.filter(
            (like) => like._id !== this._user._id
          );
        } else {
          this._likes.push({ _id: this._user._id });
        }

        counterNode.textContent = this._likes.length;

        buttonLike.classList.toggle("liked");
      });
    }

    if (this._hasLikeOwner()) {
      buttonLike.classList.add("liked");
    } else {
      buttonLike.classList.remove("liked");
    }

    cardImage.src = this._link;
    cardImage.alt = this._name;

    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }

  setLikes(likes) {
    this._likes = likes;
  }
}
