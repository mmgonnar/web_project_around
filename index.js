//VARIABLES
//Popup Edit Profile
const buttonEdit = document.querySelector(".button__type_edit");
const popupProfile = document.querySelector(".popup__content_edit");
//PopupAdd Edit Img
const buttonAdd = document.querySelector(".button__type_add");
const popupAdd = document.querySelector(".popup-add__content_edit");

const buttonClose = popupProfile.querySelector(".button__type_close");
const buttonCloseAdd = popupAdd.querySelector(".button__type_close");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const currentName = profileName.textContent;
const currentJob = profileJob.textContent;
//PopupAdd Img
//const popupAdd = document.querySelector(".popup-add");
const addTitle = document.querySelector(".card__title");
const addImage = document.querySelector(".card__image");
const addForm = document.querySelector(".popup-add__form");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const buttonCloseImage = popupImage.querySelector(".button__type_close");
const popupImageTitle = document.querySelector(".popup-image__title");

//Initial Cards
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

//Template Cards
const container = document.querySelector(".cards");

function createCard(title, link) {
  const template = document.querySelector("#cards-template").content;
  const card = template.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const popupImageElement = document.querySelector(".popup-image__element");

  const buttonLike = card.querySelector(".button__type_like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("liked");
  });

  const buttonDelete = card.querySelector(".button__type_delete");
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
    togglePopup(popupImage);
    popupImageTitle.textContent = cardTitle.textContent;
  });
}

initialCards.forEach(function (cardData) {
  createCard(cardData.name, cardData.link);
});
//-------------------------------------------------------------------
//const popup = document.querySelector(".popup");
//popup.classList.add("popup_show");
//Popup Profile > start ---------------
inputName.value = currentName;
inputJob.value = currentJob;
//Funciones
function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}
//Event Listeners
buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});
buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  togglePopup(popupProfile);
});

//PopupAdd--------------
buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createCard(inputTitle.value, inputImage.value);

  addForm.reset();
  togglePopup(popupAdd);
});
//--------------------------------------

//Popup Image
buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
});
