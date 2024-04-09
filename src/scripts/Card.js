export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    cardId,
    owner,
    likes,
    loggedUser,
    handleLike,
    handleRemoveLike,
    handleDeleteCard
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = cardId;
    this._likes = likes;
    this._owner = owner;
    this._loggedUser = loggedUser;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDelete = handleDeleteCard;
  }

  getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return templateSelector;
  }

  generateCard() {
    this._cardElement = this.getTemplate();
    this._cardElement.id = this._cardId;

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title-strong");
    this._buttonLike = this._cardElement.querySelector(".button_like");
    this._counterNumber = this._cardElement.querySelector(".card__counter");
    this._buttonDelete = this._cardElement.querySelector(".button_delete");

    if (this._loggedUser !== this._owner._id) {
      this._buttonDelete.remove();
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardImage.id = this._id;
    this._counterNumber.textContent = this._likes.length;

    if (this._hasOwnerLike()) {
      this._buttonLike.classList.add("liked");
    }
    this._setEventListeners();

    return this._cardElement;
  }

  _hasOwnerLike() {
    return this._likes.some((like) => like._id === this._loggedUser);
  }

  _setEventListeners() {

    this._buttonLike.addEventListener("click", () => {
      if (this._hasOwnerLike()) {
        this._handleRemoveLike(this._cardId).then((card) => {
          this._likes = card.likes;
          this._counterNumber.textContent = this._likes.length;
          this._buttonLike.classList.remove("liked");
        });
      } else {
        this._handleLike(this._cardId).then((card) => {
          this._likes = card.likes;
          this._counterNumber.textContent = this._likes.length;
          this._buttonLike.classList.add("liked");
        });
      }
    });

    this._buttonDelete.addEventListener("click", () => {
      this._handleDelete(this._cardId, () => {
        this._cardElement.remove();
      });
    });

    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}
