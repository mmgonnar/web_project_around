//VARIABLES
//Popup Edit Profile
const buttonEdit = document.querySelector(".button__type-edit");
const popupProfile = document.querySelector(".popup__content_edit-profile");
//PopupAdd Edit Img
const buttonAdd = document.querySelector(".button__type-add");
const popupAdd = document.querySelector(".popup-add__content_edit");

const buttonClose = popupProfile.querySelector(".button__type-close");
const buttonCloseAdd = popupAdd.querySelector(".button__type-close");

//const buttonSubmit = document.querySelector('.button__type-submit')
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
//const currentTitle = "addTitle.textContent";
//const currentImage = addImage.link;

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
  console.log(link);

  const template = document.querySelector("#cards-template").content;
  const card = template.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");

  const buttonLike = card.querySelector(".button__type-like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("liked");
  });

  const buttonDelete = card.querySelector(".button__type-delete");
  buttonDelete.addEventListener("click", function () {
    const card = buttonDelete.closest(".card");
    card.remove();
  });

  cardTitle.innerText = title;
  cardImage.src = link;

  container.append(card);
}

initialCards.forEach(function (cardData) {
  createCard(cardData.name, cardData.link);
});

//-------------------------------------------------------------------
//-------------------------------------------------------------------

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
//PopUp Profile > finish ---------

//PopupAdd--------------
buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  createCard(inputTitle.value, inputImage.value);

  addForm.reset();
  togglePopup(popupProfile);
});
