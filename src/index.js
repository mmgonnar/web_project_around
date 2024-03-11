import {
  buttonEdit,
  buttonEditAvatar,
  buttonAdd,
  profileForm,
  addForm,
  initialCards,
  popupAddSelector,
  popupProfileSelector,
  popupImageSelector,
  popupAvatarSelector,
  counterNode,
  popupConfirmationSelector,
  profileName,
  profileAvatar,
  profileJob,
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
//import Api from "./utils/Api.js";

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);
//let user = new UserInfo(profileName, profileJob, profileAvatar);
//console.log(userInfo)

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
  console.log(data);
  //userInfo.setUserInfo()
  //user = data;
});

//Renders Inital Cards
api.getCards().then((cards) => {
  const cardSection = new Section(
    {
      items: cards,
      renderer: ({
        likes,
        _id,
        name,
        link,
        createdAt,
        owner: { name: owner, about, avatar, _id: ownerId, cohort },
      }) => {
        const card = new Card(
          name, //name
          link, //link
          "#cards-template", //templateSelector

          function () {
            imagePopup.open(link, name);
          }, //handleCardClick
          _id, //cardId
          {
            id: _id,
            likes,
            owner,
            createdAt,
            avatar,
          }
        );

        const cardElement = card.generateCard();

        cardSection.addItem(cardElement);
      },
    },
    ".cards"
  );

  cardSection.renderer();

  // const data = cardSection.renderer(cards);
  // console.log(data);
});

const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  return api.updateUser(data.name, data.job).then((data) => {
    userInfo.getUserInfo(data);
  });
});

//Adds new Card
const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  return api.addCard(data.url, data.title).then((request) => {
    const newCard = new Card(
      data.title,
      data.url,
      "#cards-template",
      function () {
        imagePopup.open(data.url, data.name, data.api);
      },
      () => {}, // cardId??
      function (
        likes,
        _id,
        owner,
        createdAt,
        avatar //array cardsData
      ) {
        console.log("Dar like...");
      },
      {
        id: _id,
        likes,
        owner,
        createdAt,
        avatar,
      }, //array cardsData
      () => {}, //handleLike
      () => {}, //handleRemoveLike
      () => {} //handleDeleteCard?
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
    //userInfo.setA(data);
    //avatarPopup.close();
  });
  /* return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve();
    }, 1000);
    }) */
});
//avatarPopup.open();
//const confirmationPopup = new PopupWithForm(popupConfirmationSelector);
//confirmationPopup.open();

//Forms Validator
const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();
