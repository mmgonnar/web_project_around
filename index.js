//VARIABLES
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
const buttons = [];
const form = document.querySelector(".popup__form");

//FORM

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

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
  togglePopup(popupElement);
}

function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

initialCards.forEach(function (card) {
  createCard(card.name, card.link);
});

//Crear Card
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
//Form Validator

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
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

//close with esc
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

//close with click outside modal
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    const openPopup = overlay.closest(".popup");
    togglePopup(openPopup);
  });
});

//----------------------- Validation

function hideError(form, errorSelector, config) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

function showError(form, errorSelector, config, errorMessage) {
  const errorElement = form.querySelector(errorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function toggleButton(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);
  if (inputs.every((item) => item.validity.valid)) {
    submitButton.disabled = false;
    submitButton.classList.remove(config.inactiveButtonClass);
  } else {
    submitButton.disabled = true;
    submitButton.classList.add(config.inactiveButtonClass);
  }
}

function checkInputValidity(input, config) {
  if (input.validity.valid) {
    //esto es válido

    //hide error
    hideError(input.form, `#input__error-${input.name}`, config);
  } else {
    //esto es inválido
    //show error
    showError(
      input.form,
      `#input__error-${input.name}`,
      config,
      input.validationMessage
    );
    //showError("input__error-job", config, input.validationMessage);
    //showError("input__error-title", "Please fill out this field", config);
    //showError("input__error-url", "Please enter a web url", config);
  }
  toggleButton(input.form, config);
}

function enableValidation(config) {
  const forms = Array.from(document.forms);

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, config);
      });
    });
    toggleButton(form, config);
  });
}

enableValidation({
  //formSelector: ".form",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button__submit_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: ".popup__input_error",
});
