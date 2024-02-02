import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import {
  validationConfig,
  popupProfileSelector,
  popupAddSelector,
  popupImageSelector,
  overlaySelector,
} from "./scripts/utils.js";
import Section from "./scripts/Section.js";

import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";

const userInfo = new UserInfo(".profile__name", ".profile__job");

const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  const newCard = new Card(
    data.title,
    data.image,
    "#cards-template",
    imagePopup
  );
  const cardElement = newCard.generateCard();
  defaultCard.addItem(cardElement, true);
});

const imagePopup = new PopupWithImage(popupImageSelector);

const buttonEdit = document.querySelector(".button_edit"); //Opens popupEdit
const popupProfile = document.querySelector(".popup_edit");
const buttonAdd = document.querySelector(".button_add"); //Opens popupAdd
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const addForm = document.querySelector(".popup__form_add");

/* //Adds value to inputs ??
inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent; */

//Array with all initial cards
const initialCards = [
  {
    name: "Chicago",
    link: "./images/places/chicago.png",
  },
  {
    name: "Arizona",
    link: "./images/places/arizona.png",
  },
  {
    name: "Miami",
    link: "./images/places/miami.png",
  },
  {
    name: "Santa Monica",
    link: "./images/places/santa_monica.png",
  },
  {
    name: "Las Vegas",
    link: "./images/places/vegas.png",
  },
  {
    name: "Yellowstone",
    link: "./images/places/yellowstone_np.png",
  },
];

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
});

function setInputValues() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

buttonEdit.addEventListener("click", () => {
  setInputValues();
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  addPopup.open();
});

const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();

//instancia Section?
const defaultCard = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, "#cards-template", function (
        event
      ) {
        imagePopup.open(item.link, item.name);
      });
      const cardElement = card.generateCard();
      defaultCard.addItem(cardElement);
    },
  },
  ".cards"
);

defaultCard.renderer();
