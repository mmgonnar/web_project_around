//import { openPopup } from "./utils.js";

import { api } from "../index.js";
import { confirmationPopup } from "./PopupWithConfirmation.js";
//import { api } from "../utils.js";

export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    cardId,
    { id, likes, owner, createdAt }
  )
  {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = cardId;
    this._id = id;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;
    //this._handleLike = handleLike;
    //this._handleRemove = handleRemoveLike;
    //this._owner = user;
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

  handleDelete() {
    const card = this._cardElement.closest(".card");
    confirmationPopup.open(card);

    /* if ((this._owner === this._id)) {
			buttonDelete.remove();
    }  */// ????
  }

  _handleRemoveLike() {
    //const counterNumber = document.querySelector(".card__counter");
    console.log("remove like");
    //const isLiked = buttonLike.classList.contains("liked");
    //const buttonLike = this._cardElement.querySelector(".button_like");
    console.log(buttonLike);

    api.deleteLikeCard(this._cardId).then((data) => {
      this._buttonLike.classList.remove("liked");
      this.setLikes(data.likes || []);
      this._counterNumber.textContent = data.likes ? data.likes.length : 0;
      if (data.likes) {
        this._counterNumber.textContent = data.likes.length;
      } else {
        this._counterNumber.textContent = data.likes.length;
        //return this._cardElement;
      }

      this._counterNumber.textContent = this._likes.length;
      this._buttonLike.classList.add("liked");
    });
  }

  _handleLike() {
    //const counterNumber = document.querySelector(".card__counter");
    //console.log("add like");
    //const isLiked = buttonLike.classList.contains("liked");
    //const buttonLike = this._cardElement.querySelector(".button_like");

    api.likeCard(this._cardId).then((data) => {
      this._buttonLike.classList.add("liked");
      this.setLikes(data.likes);
      this._counterNumber.textContent = data.likes.length;
      if (this._counterNumber.length > 0) {
        this._counterNumber.textContent = data.likes.length;
      } else {
        this._counterNumber.textContent = data.likes.length;
      }
    });
  }




  generateCard() {
    //const cardElement = this.getTemplate();
    this._cardElement = this.getTemplate();
    this._cardElement.id = this._cardId;

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title-strong");
    this._buttonLike = this._cardElement.querySelector(".button_like");
    this._counterNumber = this._cardElement.querySelector(".card__counter");
    this._buttonDelete = this._cardElement.querySelector(".button_delete");


    if (!(this._owner === this._id)) {
			this._buttonDelete.remove();
		}

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardImage.id = this._id;
    this._counterNumber.textContent = this.setLikes();

    if (this._likes.some((like) => like._id === this._id)) {
			this._buttonLike.classList.add("liked");
		}
    this._setEventListeners();

    return this._cardElement;

  }

  setLikes() {
    //this._likes = likes;
    return (Array.isArray(this._likes) && this._likes.length) || 0;
  }

  _setEventListeners() {
    //const buttonLike = cardElement.querySelector(".button_like");
    this._buttonLike.addEventListener("click", () => {
      if (
        this._likes.some((like) => {
          return like._id === this._id;
        })
      ) {
       this._handleRemoveLike(this.id)

      } else {
        this._handleLike(this.id)
      }
    });



      /* const isLiked = buttonLike.classList.contains("liked");

      if (isLiked) {
        this._handleRemoveLike(this._id);
        this._likes = this._likes.filter((like) => like._id !== this._id);
        buttonLike.classList.remove("liked");
      } else {
        this._handleLike(this._id);
        this._likes.push({
          name: this._owner,
          _id: this._id,
        });
      } */

    //const buttonDelete = cardElement.querySelector(".button_delete");
    this._buttonDelete.addEventListener("click", () => {
      this.handleDelete();
    });

    //const buttonImage = cardElement.querySelector(".card__image");
    this._cardImage.addEventListener("click", this._handleCardClick);
  }


}
