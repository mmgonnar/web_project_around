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

const PROFILE_DATA = {
  name: profileName.textContent,
  job: profileJob.textContent,
};

let lastInputName = profileName.textContent;
let lastInputJob = profileJob.textContent;

const addTitle = document.querySelector(".card__title");
const addImage = document.querySelector(".card__image");
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const buttonCloseImage = popupImage.querySelector(".button_close");
const popupImageTitle = document.querySelector(".popup__title_img");
const popupOverlay = document.querySelector(".popup__overlay");
const container = document.querySelector(".cards");

//form
const form = document.querySelector("form");
const formInput = form.querySelector(".popup__input");
//const formError = form.querySelector(?);

const showError = ".popup__input_error";

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

function popupButtonClose(popupElement) {
  console.log(popupElement);
  togglePopup(popupElement);
}

function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

//Template Cards

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

function enableValidation(config) {}
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

//Funciones
//Event Listeners
buttonEdit.addEventListener("click", () => popupButtonClose(popupProfile));
buttonClose.addEventListener("click", () => popupButtonClose(popupProfile));

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;
  lastInputName = inputNameValue;
  lastInputJob = inputJobValue;
  profileForm.reset();
  popupButtonClose(popupProfile);
});

//PopupAdd--------------
buttonAdd.addEventListener("click", () => popupButtonClose(popupAdd));
buttonCloseAdd.addEventListener("click", () => popupButtonClose(popupAdd));

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createCard(inputTitle.value, inputImage.value);

  addForm.reset();
  popupButtonClose(popupAdd);
});
//--------------------------------------

//Close actions
buttonCloseImage.addEventListener("click", () => popupButtonClose(popupImage));

//close popup outside modal
/* popupOverlay.addEventListener("click", function (event) {
  if (event.target === popupOverlay) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
      if (popup.classList.contains("popup_show")) {
        togglePopup(popup);
        console.log(popups);
      }
    });
  }
}); */

//revisar porqué no funciona
/* popupOverlay.addEventListener("click", function (event) {
  const popup = document.querySelector(".popup.popup_show");
  if (popup && event.target === popupOverlay) {
    popup.classList.remove("popup_show");
  }
}); */

popupOverlay.addEventListener("click", function (event) {
  console.log("Click on popupOverlay");
  const openPopups = document.querySelectorAll(".popup.popup_show");
  openPopups.forEach(function (popup) {
    togglePopup(popup);
  });
});

//EnableValidation

//Habilitar validación
//validación input
//error input
//toggle button habilitar-deshabilitar botones

/* function enableValidation(config) {
  const forms = Array.form(document.form);

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const inputs = form.querySelectorAll(config.inputSelector);

    inputs.forEach((input) => {

      input.addEventListener("input", ()=>{
        checkInputValidity(input);
    });
  });
} */

formInput.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
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

document.addEventListener("DOMContentLoaded", function () {
  inputName.value = PROFILE_DATA.name;
  inputJob.value = PROFILE_DATA.job;
});

initialCards.forEach(function (cardData) {
  createCard(cardData.name, cardData.link);
});
