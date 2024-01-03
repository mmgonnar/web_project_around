/* alert(
  "Espero haber entendido todas tus instrucciones, el tercer punto sobre todo. Ojalá sea la última correccción, si sí ¡Feliz navidad!"
); */
//VARIABLES
//-----> Popup Edit Profile
const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup_edit");
//PopupAdd Edit Img
const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");

const buttonClose = popupProfile.querySelector(".button_close");
const buttonCloseAdd = popupAdd.querySelector(".button_close");

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
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const buttonCloseImage = popupImage.querySelector(".button_close");
const popupImageTitle = document.querySelector(".popup__title_img");
let lastInputName = currentName;
let lastInputJob = currentJob;
const popupOverlay = document.querySelector(".popup__overlay");

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
    togglePopup(popupImage);
    popupImageTitle.textContent = cardTitle.textContent;
  });
}

initialCards.forEach(function (cardData) {
  createCard(cardData.name, cardData.link);
});

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
  inputName.value = lastInputName;
  inputJob.value = lastInputJob;
});
buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  lastInputName = inputName.value;
  lastInputJob = inputJob.value;
  profileForm.reset();
  togglePopup(popupProfile);
});

//PopupAdd--------------
buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
  console.log(buttonAdd);
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

//Close actions
buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

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

popupOverlay.addEventListener("click", function (event) {
  if (event.target === popupOverlay) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
        console.log(popups);
      }
    });
  }
});
