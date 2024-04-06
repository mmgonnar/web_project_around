import {
  buttonEdit,
  buttonEditAvatar,
  buttonAdd,
  profileForm,
  addForm,
  popupAddSelector,
  popupProfileSelector,
  popupImageSelector,
  popupAvatarSelector,
} from "./scripts/const.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { validationConfig } from "./scripts/utils.js";
import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import "./pages/index.css";
import Api from "./utils/api.js";
import { confirmationPopup } from "./scripts/PopupWithConfirmation.js";

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);
let loggedUser = null;
let cardSection = null;

//Events
buttonEdit.addEventListener("click", () => {
  profilePopup.setInputValues();
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  addPopup.open();
});

buttonEditAvatar.addEventListener("click", () => {
  avatarPopup.open();
});

export const api = new Api(
  "https://around.nomoreparties.co/v1/web_es_11",
  "728c172f-3008-42b7-a44c-cc238ba60a2f"
);

await api.getUserInfo().then((data) => {
  loggedUser = data._id;
  userInfo.setUserInfo({
    name: data.name,
    job: data.about,
    avatar: data.avatar,
  });
  //Renders Inital Cards
  api.getCards().then((cards) => {
       cardSection = new Section(
      {
        items: cards,
        renderer: ({ likes, _id, name, link, createdAt, owner }) => {
          const card = new Card(
            name, //name
            link, //link
            "#cards-template", //templateSelector

            function () {
              imagePopup.open(link, name);
            }, //handleCardClick
            _id, //cardId
            owner,
            likes,
            loggedUser,
            function (cardId) {
              return api.likeCard(cardId);
            },
            function (cardId) {
              return api.deleteLikeCard(cardId);
            },
            function (cardId, callback) {
              confirmationPopup.open(() => {
                api.deleteCard(cardId).then(() =>{callback()});
              });
            }
          );

          const cardElement = card.generateCard();

          cardSection.addItem(cardElement);
        },
      },
      ".cards"
    );

    cardSection.renderer();
  });
});

const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  return api.updateUser(data.name, data.job).then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      job: data.about,
      avatar: data.avatar,
    });
  });
});

//Adds new Card
const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  return api.addCard(data.url, data.title).then((cardResponse) => {
    const newCard = new Card(
      data.title,
      data.url,
      "#cards-template",
      function () {
        imagePopup.open(data.url, data.name, data.api);
      },
      cardResponse._id,
      cardResponse.owner,
      cardResponse.likes,
      loggedUser,
      function (cardId) {
        return api.likeCard(cardId);
      },
      function (cardId) {
        return api.deleteLikeCard(cardId);
      },
      function (cardId, callback) {
        confirmationPopup.open(() => {
          api.deleteCard(cardId).then(() =>{callback()});
        });
      }
    );
    const cardElement = newCard.generateCard();
    cardSection.addItem(cardElement, true);
    addPopup.close();
    return Promise.resolve();
  });
});

const imagePopup = new PopupWithImage(popupImageSelector);
const avatarPopup = new PopupWithForm(popupAvatarSelector, (inputValues) => {
  return api.updateAvatar(inputValues.url).then((data) => {
    //console.log(data)
    userInfo.updateAvatarUrl(inputValues.url);
  });
});

//Forms Validator
const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();
