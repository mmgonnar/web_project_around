export const buttonEdit = document.querySelector(".button_edit");
export const popupProfile = document.querySelector(".popup_edit");
export const buttonAdd = document.querySelector(".button_add");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const profileForm = document.querySelector(".popup__form");
export const addForm = document.querySelector(".popup__form_add");
export const popupImageElement = document.querySelector(".popup__element");
export const popupProfileSelector = ".popup_edit";
export const popupAddSelector = ".popup_add";
export const popupImageSelector = ".popup_image";
export const popupAvatarSelector = ".popup_avatar";

import Chicago from "../images/places/chicago.png";
import Arizona from "../images/places/arizona.png";
import Miami from "../images/places/miami.png";
import SantaMonica from "../images/places/santa_monica.png";
import LasVegas from "../images/places/vegas.png";
import Yellowstone from "../images/places/yellowstone_np.png";

export const initialCards = [
  {
    name: "Chicago",
    link: Chicago,
  },
  {
    name: "Arizona",
    link: Arizona,
  },
  {
    name: "Miami",
    link: Miami,
  },
  {
    name: "Santa Monica",
    link: SantaMonica,
  },
  {
    name: "Las Vegas",
    link: LasVegas,
  },
  {
    name: "Yellowstone",
    link: Yellowstone,
  },
];
