class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }
  getUserInfo() {
    return fetch(this._url + '/user/me' {
      headers: {
        Autorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(response => response.json())
  }
}
