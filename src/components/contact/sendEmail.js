import emailjs from "emailjs-com";

export default class Email {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.sentReturnMessage = "Sent";
    this.returnVerifyNotPassed = "There can be no empty space";
    this.returnMessageEmailJSError =
      "Message not sent. My email: eduardocucco9@gmail.com";

    this.clientEmailMessageObject = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
  }

  async sendEmail() {
    return new Promise((resolve) => {
      if (!this.verifyEmailMessage())
        return resolve(this.returnVerifyNotPassed);
      this.sendToEmailJS()
        .then(() => {
          resolve(this.sentReturnMessage);
        })
        .catch(() => {
          resolve(this.returnMessageEmailJSError);
        });
    });
  }

  async sendToEmailJS() {
    return emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        this.clientEmailMessageObject,
        process.env.REACT_APP_USER
      )
      .then(
        (response) => {
          return Promise.resolve(response);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
  }

  verifyEmailMessage() {
    if (!this.name || !this.email || !this.message) return false;
    else return true;
  }
}
