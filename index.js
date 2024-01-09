import "./validate.js";
//VARIABLE
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
const addTitle = document.querySelector(".card__title");
const addImage = document.querySelector(".card__image");
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const popupOverlayImage = popupImage.querySelector(".popup__overlay");
const buttonCloseImage = popupImage.querySelector(".button_close");
const popupImageTitle = document.querySelector(".popup__title_img");
const popupOverlay = document.querySelector(".popup__overlay");
const container = document.querySelector(".cards");
const overlays = [popupOverlayProfile, popupOverlayAdd, popupOverlayImage];
const form = document.querySelector(".popup__form");

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

//Close popup
function popupButtonClose(popupElement) {
  togglePopup(popupElement);
}
//Hide or shows popups
function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

//Creates initial cards
initialCards.forEach(function (card) {
  createCard(card.name, card.link);
});

//Creates cards
function createCard(title, link) {
  const template = document.querySelector("#cards-template").content;
  const card = template.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const popupImageElement = document.querySelector(".popup__element");

  const buttonLike = card.querySelector(".button_like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("liked");
  });

  const buttonDelete = card.querySelector(".button_delete");
  buttonDelete.addEventListener("click", function () {
    const card = buttonDelete.closest(".card");
    card.remove();
  });

  cardTitle.innerText = title;
  cardImage.src = link;

  container.prepend(card);

  const buttonImage = card.querySelector(".card__image");
  buttonImage.addEventListener("click", function () {
    popupImageElement.src = cardImage.src;
    popupButtonClose(popupImage);
    popupImageTitle.textContent = cardTitle.textContent;
  });
}
//EVENT LISTENERS
//Sends profile form info
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  popupButtonClose(popupProfile);
});

/* const buttons =[buttonEdit, buttonClose, buttonAdd, buttonCloseAdd, buttonCloseImage];

buttons.forEach(fucntion (buttons){
  button.addEventListener("click", function (event) {
    const popupClose = button.closest(".button_close");
    togglePopup(popupClose)
  })
}) */

buttonEdit.addEventListener("click", () => popupButtonClose(popupProfile));

buttonClose.addEventListener("click", () => popupButtonClose(popupProfile));

buttonAdd.addEventListener("click", () => popupButtonClose(popupAdd));

buttonCloseAdd.addEventListener("click", () => popupButtonClose(popupAdd));

buttonCloseImage.addEventListener("click", () => popupButtonClose(popupImage));

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createCard(inputTitle.value, inputImage.value);

  addForm.reset();
  popupButtonClose(popupAdd);
});

//close modal with esc key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
      }
    });
  }
});

function keydownHandler(event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
      }
    });
  }
}

document.addEventListener("keydown", keydownHandler); //Event for keydown esc
document.removeEventListener("keydown", keydownHandler); //Remove event for keydown esc

//Close with click outside modal
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const openPopup = overlay.closest(".popup");
    togglePopup(openPopup);
  });
});
