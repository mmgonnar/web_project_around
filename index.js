
//Variables
const buttonEdit = document.querySelector(".button__type-edit");
const popupProfile = document.querySelector(".popup__content_edit-profile");
const buttonAdd = document.querySelector('.button__type-add');
//const buttonLike = document.querySelector('.button__type-like')
const buttonClose = document.querySelector('.button__type-close');
//const buttonSubmit = document.querySelector('.button__type-submit')
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job")
const currentName = profileName.textContent;
const currentJob = profileJob.textContent;
const cardsArea = document.querySelector(".cards");
/* const cardsData = [
  [
    link:"", title; ""
  ]
] */

inputName.value = currentName;
inputJob.value = currentJob;

//Funciones
function togglePopup(popup){
    popup.classList.toggle("popup_show");
}

//Event Listeners
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

//Clonar Node
//buscar nodo de la imagen
//buscar nodo del titulo
//buscar nodo del boton like
//buscar nodo del boton borrar


//a la imagen poner src = link
//textconten = titulo
//botón borrar agregar event listener de click que haga que se borre el nodo node.remover()
//boton like agregar event listener del clic en donde imagen del popup se le ponga src = link
//el titulo del popup de la imagen = title
//return nodo


