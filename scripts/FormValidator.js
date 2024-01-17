import { validationConfig } from "../utils/constants.js";"

export default class FormValidator {
  constructor(validationConfig, formElement) {
    this.validationConfig = validationConfig;
    this._formElement = formElement;
  }
}
