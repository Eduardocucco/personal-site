import React, { Component } from "react";
import Email from "./sendEmail";
import { FaPaperPlane } from "react-icons/fa";
import {
  Form,
  Submit,
  InputTextEmail,
  TextArea,
  Icon,
} from "../../style/contact";
import { Container, CategoryTitle, CategoryText } from "../../style/global";
import { Fade } from "react-awesome-reveal";

export default class Contact extends Component {
  email = (event) => {
    event.preventDefault();
    const newEmailToSend = new Email(
      event.target.name.value,
      event.target.email.value,
      event.target.message.value
    );
    newEmailToSend.sendEmail().then((returnMessage) => {
      alert(returnMessage);
    });
  };

  render() {
    return (
      <Container finalCategory id="contact">
        <Fade direction="up" triggerOnce duration={1000} damping={1}>
          <CategoryTitle>Contato</CategoryTitle>
          <CategoryText>
            Did you like what you saw? Contact me and let's talk.
          </CategoryText>
          <Form id="form" onSubmit={this.email}>
            <Icon>
              <FaPaperPlane />
            </Icon>
            <InputTextEmail
              id="name"
              type="text"
              placeholder="Nome"
            ></InputTextEmail>
            <InputTextEmail
              id="email"
              type="email"
              placeholder="Email"
            ></InputTextEmail>
            <TextArea id="message" placeholder="Mensagem"></TextArea>
            <Submit type="submit" value="Enviar"></Submit>
          </Form>
        </Fade>
      </Container>
    );
  }
}
