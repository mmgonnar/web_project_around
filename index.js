
//Variables
const buttonEdit = document.querySelector(".button__type-edit");
const popupProfile = document.querySelector(".popup__content_edit-profile");
const buttonAdd = document.querySelector('.button__type-add');

const buttonClose = document.querySelector('.button__type-close');

//const buttonSubmit = document.querySelector('.button__type-submit')
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job")
const currentName = profileName.textContent;
const currentJob = profileJob.textContent;

//Initial Cards
const initialCards = [
  {
    name: "Chicago",
    link: "./images/places/chicago.png"
  },
  {
    name: "Arizona",
    link: "./images/places/arizona.png"
  },
  {
    name: "Miami",
    link: "./images/places/miami.png"
  },
  {
    name: "Santa Monica",
    link: "./images/places/santa_monica.png"
  },
  {
    name: "Las Vegas",
    link: "./images/places/vegas.png"
  },
  {
    name: "Yellowstone",
    link: "./images/places/yellowstone_np.png"
  }
];

//Template
const container = document.querySelector(".cards");

initialCards.forEach(function (cardData){
  const template = document.querySelector("#cards-template").content;
  const card = template.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");

  const buttonLike = card.querySelector('.button__type-like')
  buttonLike.addEventListener("click", function(){
    buttonLike.classList.toggle("liked");
  })

  const buttonDelete = card.querySelector(".button__type-delete")
  buttonDelete.addEventListener("click", function(){
    const card = buttonDelete.closest(".card");
    card.remove();
  })

  cardImage.src = cardData.link
  cardTitle.innerText = cardData.name

  container.append(card)

  console.log(buttonLike)
})
//Like Button
/* document.getElementById("#buton-like").addEventListener("click", funcion(){
  var buttonLike = document.querySelector(".button__type-like");

  if(buttonLike.style.background === "url(./images/heart__button.svg)") {
    buttonLike.style.background = "url(./images/like-black.svg)";
  } else {
    buttonLike.style.background = "url(./images/heart__button.svg)";
  }
})
 */


//botón borrar agregar event listener de click que haga que se borre el nodo node.remover()
//boton like agregar event listener del clic en donde imagen del popup se le ponga src = link
//el titulo del popup de la imagen = title
//return nodo


//PopUp ---------------
inputName.value = currentName;
inputJob.value = currentJob;
//Funciones popUp
function togglePopup(popup){
    popup.classList.toggle("popup_show");
}
//Event Listeners popUp
buttonEdit.addEventListener('click', function(){
  togglePopup(popupProfile);
});
buttonClose.addEventListener("click", function(){
  togglePopup(popupProfile);
});
profileForm.addEventListener("submit", function(event){
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  togglePopup(popupProfile);
})
//PopUp finished ---------




