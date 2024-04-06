import { profileJob, profileName, profileAvatar } from "./const.js";

export default class UserInfo {
  constructor(profileName, profileJob, profileAvatar) {
    this._userName = document.querySelector(profileName);
    this._userJob = document.querySelector(profileJob);
    this._userAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
      avatar: this._userAvatar.src
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.job;
    this._userAvatar.src = data.avatar;
  }

  updateAvatarUrl(avatarUrl) {
    this._userAvatar.src = avatarUrl;
  }
}
