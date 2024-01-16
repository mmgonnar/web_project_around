//Creates cards
/* function createCard(title, link) {
  cardTitle.innerText = title;
  cardImage.src = link;
} */

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
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const popupImageElement = document.querySelector(".popup__element");
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
      popupImageElement.src = cardImage.src;
      popupButtonSwitch(popupImage);
      popupImageElement.setAttribute("alt", title);

      popupImageTitle.textContent = cardTitle.textContent;
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

/*
export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const template = document.querySelector(this._templateSelector").content;
    const card = template.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const popupImageElement = document.querySelector(".popup__element");

    return card;
  }

  _setEventListeners() {
    const buttonLike = this.card.querySelector(".button_like");
    buttonLike.addEventListener("click", () => {
      buttonLike.classList.toggle("liked");
    });

    const buttonDelete = this.card.querySelector(".button_delete");
    buttonDelete.addEventListener("click", () => {
      const card = buttonDelete.closest(".card");
      card.remove();
    });

    const buttonImage = this.card.querySelector(".card__image");
    buttonImage.addEventListener("click", () => {
      popupImageElement.src = cardImage.src;
      popupButtonSwitch(popupImage);
      popupImageElement.setAttribute("alt", title);

      popupImageTitle.textContent = cardTitle.textContent;
    });
  }

  renderCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    return this._card;
  }
}
 */
