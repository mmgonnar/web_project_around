import {
  buttonEdit,
  buttonAdd,
  profileForm,
  addForm,
  initialCards,
  popupAddSelector,
  popupProfileSelector,
  popupImageSelector,
} from "./scripts/const.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { validationConfig } from "./scripts/utils.js";
import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import "./pages/index.css";

//Events
buttonEdit.addEventListener("click", () => {
  profilePopup.setInputValues();
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  addPopup.open();
});

//Renders Inital Cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = new Card(
        data.name,
        data.link,
        "#cards-template",
        function () {
          imagePopup.open(data.link, data.name);
        }
      );
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".cards"
);
cardSection.renderer();

const userInfo = new UserInfo(".profile__name", ".profile__job");

const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

//Adds new Card
const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  const newCard = new Card(
    data.title,
    data.url,
    "#cards-template",
    function () {
      imagePopup.open(data.url, data.name);
    }
  );
  const cardElement = newCard.generateCard();
  cardSection.addItem(cardElement, true);
});

const imagePopup = new PopupWithImage(popupImageSelector);

//Forms Validator
const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();
