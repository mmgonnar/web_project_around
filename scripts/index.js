import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  validationConfig,
  popupButtonSwitch,
  togglePopup,
  keydownHandler,
} from "./utils.js";

const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup_edit");
const popupOverlayProfile = popupProfile.querySelector(".popup__overlay");
const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");
const popupOverlayAdd = popupAdd.querySelector(".popup__overlay");
const buttonClose = popupProfile.querySelector(".button_close");
const buttonCloseAdd = popupAdd.querySelector(".button_close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const popupOverlayImage = popupImage.querySelector(".popup__overlay");
const buttonCloseImage = popupImage.querySelector(".button_close");
const container = document.querySelector(".cards");
const overlays = [popupOverlayProfile, popupOverlayAdd, popupOverlayImage];

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
initialCards.forEach(function ({ name, link }) {
  const cardTemplate = new Card(name, link, "#cards-template");

  const cardElement = cardTemplate.generateCard();
  container.prepend(cardElement);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  popupButtonSwitch(popupProfile);
});

buttonEdit.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupButtonSwitch(popupProfile);
});

buttonClose.addEventListener("click", () => {
  popupButtonSwitch(popupProfile);
  //document.removeEventListener("keydown", keydownHandler);
});

buttonAdd.addEventListener("click", () => popupButtonSwitch(popupAdd));

buttonCloseAdd.addEventListener("click", () => {
  popupButtonSwitch(popupAdd);
  //document.removeEventListener("keydown", keydownHandler);
});

buttonCloseImage.addEventListener("click", () => {
  popupButtonSwitch(popupImage);
  //  document.removeEventListener("keydown", keydownHandler);
});

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //createCard(inputTitle.value, inputImage.value);

  const cardTemplate = new Card(
    inputTitle.value,
    inputImage.value,
    "#cards-template"
  );
  container.prepend(cardTemplate.generateCard());

  addForm.reset();
  popupButtonSwitch(popupAdd);
});

//Close with click outside modal
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const openPopup = overlay.closest(".popup");
    togglePopup(openPopup);
  });
});

const formValidatorProfile = new FormValidator(validationConfig, profileForm);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(validationConfig, addForm);
formValidatorNewCard.enableValidation();
