import {
  buttonEdit,
  buttonAdd,
  profileForm,
  addForm,
  initialCards,
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
import { api } from "./utils/Api.js";

console.log(api);
console.log(initialCards);
//Events
buttonEdit.addEventListener("click", () => {
  profilePopup.setInputValues();
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  addPopup.open();
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
          name,
          link,
          "#cards-template",
          function () {
            imagePopup.open(link, name);
          },
          function addLikeCallback(cardId, buttonLike, counterNode) {
            console.log("Dar like...");
            api.likeCard(cardId).then((data) => {
              buttonLike.classList.add("liked");
              counterNode.textContent = data.likes.length;
            });
          },
          function removeLikeCallback() {
            console.log("Quitar like...");
            let likes = 0;

            return function () {
              if (likes > 0) {
                likes--;
                console.log("Quitar like...");
              } else {
                console.log("No tienes likes");
              }
            };

            const unlikeCallback = removeLikeCallback();

            unlikeCallback();
          },
          function () {
            console.log("Click al bote de basura...");
            return null;
          },
          {
            id: _id,
            likes,
            owner,
            createdAt,
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

const userInfo = new UserInfo(".profile__name", ".profile__job");

const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

//Adds new Card
const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  /* return api.addCard(data.url, data.title).then(card => {

     const newCard = new Card(
       data.title,
       data.url,
       "#cards-template",
       function () {
         imagePopup.open(data.url, data.name, data.api);
       },
       (handleCardClick) => {
         handleCardClick();
       }

       (handleDeleteCard) => {
         handleDeleteCard();
       }

     );
     const cardElement = newCard.generateCard();
     cardSection.addItem(cardElement, true);
     addPopup.close()
  return Promise.resolve();
   }) */
});

const imagePopup = new PopupWithImage(popupImageSelector);
const avatarPopup = new PopupWithForm(popupAvatarSelector);

avatarPopup.open();

//Forms Validator
const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();
