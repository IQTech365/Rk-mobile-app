export default class Validator {
  static emailRegExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
  static amountRegExp = /^[1-9][\d]+$/gi;
  static numberRegExp = /^[\d]+$/;
  static alphaNumericRegExp = /^[a-z0-9]+$/i;

  constructor() {}

  validateEmail(email: string) {
    return Validator.emailRegExp.test(email);
  }

  validateAmount(amount:string) {
    return Validator.amountRegExp.test(amount);
  }

  validateLandlineNumber(number:string) {
    const regex = /^[0]{1}[\d]{10}$/;
    return regex.test(number.toString());
  }

  validateTollFreeNumber(number:string) {
    const regex = /^[\d]{10,11}$/;
    return regex.test(number.toString());
  }

  validateAlphaNumericOnly(text:string) {
    if (Validator.alphaNumericRegExp.test(text)) {
      return text;
    }
    return '';
  }

  validateContactNumber(text:string, length:number) {
    if (Validator.numberRegExp.test(text)) {
      if (length) return text.slice(0, length);
      return text;
    }
    return '';
  }
}
