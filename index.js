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
//import Popup from "./scripts/Popup.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
const userInfo = new UserInfo(".profile__name", ".profile__job");

//cntl + space = ,muestra sugerencias autocomplete

// instancias de popup
const profilePopup = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});
//profilePopup.open();
const addPopup = new PopupWithForm(popupAddSelector, (data) => {
  const newCard = new Card(
    inputTitle.value,
    inputImage.value,
    "#cards-template",
    function (event) {
      imagePopup.open(inputTitle.value, inputImage.value);
    }
  );
  defaultCard.addItem(cardTemplate.generateCard(), true);
});

//popupAdd.open();
const imagePopup = new PopupWithImage(popupImageSelector);
//imagePopup.open();

//const card = new Card(name, link, templateSelector, imagePopup;)

//const closeOverlay

//const popupCloseOverlay = new PopupWithForm(popup)

const buttonEdit = document.querySelector(".button_edit"); //Opens popupEdit
const popupProfile = document.querySelector(".popup_edit");
//const popupOverlayProfile = popupProfile.querySelector(".popup__overlay");
const buttonAdd = document.querySelector(".button_add"); //Opens popupAdd
//const popupAdd = document.querySelector(".popup_add");
//const popupOverlayAdd = popupAdd.querySelector(".popup__overlay");
const buttonClose = popupProfile.querySelector(".button_close");
//const buttonCloseAdd = popupAdd.querySelector(".button_close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
//const popupOverlayImage = popupImage.querySelector(".popup__overlay");
//const buttonCloseImage = popupImage.querySelector(".button_close");
const container = document.querySelector(".cards");
//const closeOverlay = document.querySelector(".popup__overlay");
//const overlays = new [popupOverlayProfile, popupOverlayAdd, popupOverlayImage,]();

//Adds value to inputs
inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

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

//Creates initial cards
/*
initialCards.forEach(function ({ name, link }) {
  const cardTemplate = new Card(name, link, "#cards-template", function (
    event
  ) {
    imagePopup.open(name, link);
  });

  const cardElement = cardTemplate.generateCard();
  container.prepend(cardElement);
});
*/

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  // popupButtonSwitch(popupProfile);
});

//Adds value to inputs
/* inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent; */
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
/*
buttonClose.addEventListener("click", () => {
  profilePopup.close();
  addPopup.close();
  imagePopup.close();
});
*/
/* closeOverlay.forEach(function (overlay) {} => {
  profilePopup.close();
  popupAdd.close();
  //imagePopup.close();
}) */

//Close with click outside modal
/* overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const openPopup = overlay.closest(".popup");
    togglePopup(openPopup);
  });
}); */

//buttonAdd.addEventListener("click", () => popupButtonSwitch(popupAdd));

/* buttonCloseAdd.addEventListener("click", () => {
  popupAdd.close();
}); */

/* buttonCloseImage.addEventListener("click", () => {
  popupButtonSwitch(popupImage);
}); */

/* addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardTemplate = new Card(
    inputTitle.value,
    inputImage.value,
    "#cards-template",
    function (event) {
      imagePopup.open(inputTitle.value, inputImage.value);
    }
  );
  defaultCard.addItem(cardTemplate.generateCard(), true);

  addForm.reset();
  popupButtonSwitch(popupAdd);
}); */

//Close with click outside modal
/* overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const openPopup = overlay.closest(".popup");
    togglePopup(openPopup);
  });
}); */

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
