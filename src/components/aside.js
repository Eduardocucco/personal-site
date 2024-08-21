import React, { Component } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

import { LinkIconContainers, IconsLinks } from "../style/aside";

export default class Aside extends Component {
  render() {
    return (
      <LinkIconContainers>
        <IconsLinks href="https://www.linkedin.com/in/emerson-eduardo-cucco-8b9b1717a/">
          <FaLinkedinIn />
        </IconsLinks>
        <IconsLinks href="https://wa.me/5548996373621?text=Oi%20%3A)">
          <FaWhatsapp />
        </IconsLinks>
        <IconsLinks href="https://github.com/Eduardocucco">
          <FaGithub />
        </IconsLinks>
      </LinkIconContainers>
    );
  }
}
