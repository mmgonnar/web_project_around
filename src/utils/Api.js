class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getCards() {
    return fetch(this._url + "/cards", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  updateUser(name, job) {
    return fetch(this._url + "/users/me", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        job,
      }),
    }).then((response) => response.json());
  }

  updateAvatar(avatar) {
    return fetch(this._url + "/users/me/avatar", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        avatar
      }),
    }).then((response) => response.json());
  }

  addCard(link, title) {
    return fetch(this._url + "/cards", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: title,
        link,
      }),
    }).then((response) => response.json());
  }

  deleteCard(idCard) {
    return fetch(this._url + "/cards/" + idCard, {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }

  likeCard(idCard) {
    return fetch(this._url + "/cards/likes/" + idCard, {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((response) => response.json());
  }

  deleteLikeCard(idCard) {
    return fetch(this._url + "/cards/likes/" + idCard, {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }
}

export const api = new Api(
  "https://around.nomoreparties.co/v1/web_es_11",
  "728c172f-3008-42b7-a44c-cc238ba60a2f"
);
