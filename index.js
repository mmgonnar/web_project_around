//PSEUDOCODE
//FUNCIONALIDADES
//1. Hacer clic en button__type-edit y que se muestre el popup
//2. Hacer clic en el botón cerrar y que se cierre el popup
//3. Hacer clic afuera del modal (popup) y que se cierre
//4. escribir un input y que se muestre en la pantalla

//console.log
//console.dir ??


//Funciones
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
  profileForm.textContent = inputName.value;
  profileForm.textContent = inputJob.value;
  profileForm.reset();
  togglePopup(popupProfile);
})




/*
function hacerClick () {
    console.log("hiciste click")
}

let button = document.querySelector(".button__type-edit");

button.addEventListener("click", click); */



//ASIGNAR EVENTOS
//1. seleccionar el elemento (querrySelector, getElementById, etc)
//2. aasignar el evento (addEventListener)


//MODIFICAR ELEMENTOS
//Seleccionar elemento (querySelector, getElementById, etc)
//Modificar elemento (innerHTML, value, etc)
//*console.dir sobre elemnto, deja ver sus propiedades *

// HINT
//1 console.dir muestra un elemnto de html en formato de objeto
//2. la mayorñia de atributos de un elemnto de html son propiedades que voy a encontrar en el objeto
