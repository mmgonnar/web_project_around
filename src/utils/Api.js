class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(this._url + "/user/me", {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getCards() {
    return fetch(this._url + "/cards", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  updateUser(name, job) {
    return fetch(this._url + "/user/me", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((response) => response.json());
  }

  addCard(link, title) {
    return fetch(this._url + "/cards", {
      headers: {
        Authorization: this._token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: title,
        link,
      }),
    }).then((response) => response.json());
  }
}
