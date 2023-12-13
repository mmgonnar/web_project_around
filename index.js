
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
const cardsData = [
  [
    link:'', title; ''
  ]
]

//Initial Cards
const initialCards = [
  {
    name: "Chicago",
    link: "https://images.unsplash.com/photo-1597933534024-debb6104af15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Arizona",
    link: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Miami",
    link: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Santa Monica",
    link: "https://images.unsplash.com/photo-1565096940315-d3831bee0fb1?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Las Vegas",
    link: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  },
  {
    name: "Yellostone",
    link: "https://images.unsplash.com/photo-1529439322271-42931c09bce1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

//Template
//Clonar Node
//buscar nodo de la imagen
//buscar nodo del titulo
//buscar nodo del boton like
//buscar nodo del boton borrar
function createCard(title, link) {
  const cardsTemplate = document.querySelector(".cards-template").content;
  const cardsElement = cardsTemplate.querySelector(".cards").cloneNode(true);

  cardsElement.querrySelector(".card__image").content = link:
  cardsElement.querySelector(".card__title").textContent = title;
  cardsElement.querySelector(".button__type-like").content = ??;
  cardsElement.querySelector(".button__type-delete").content = ??;

  cardsContainer.apend(cardsElement);
}

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




//a la imagen poner src = link
//textconten = titulo
//botón borrar agregar event listener de click que haga que se borre el nodo node.remover()
//boton like agregar event listener del clic en donde imagen del popup se le ponga src = link
//el titulo del popup de la imagen = title
//return nodo


