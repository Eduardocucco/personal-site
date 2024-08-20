import React, { Component } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import {
  MenuMain,
  MenuContainer,
  MenuLabel,
  Title,
  MenuLink,
  MenuIcon,
  MenuModal,
  CloseModal,
} from "../style/menu";

export default class Menu extends Component {
  modalHiddenShow = () => {
    return this.setState({ modalOpen: this.state.modalOpen ? false : true });
  };

  createNavLinks = () => {
    return (
      <>
        {this.state.links.map((item) => {
          return (
            <MenuLink
              key={item.name}
              href={item.link}
              onClick={this.modalHiddenShow}
            >
              {item.name}
            </MenuLink>
          );
        })}
      </>
    );
  };

  state = {
    modalOpen: false,
    links: [
      { name: "About me", link: "#about" },
      { name: "Experience", link: "#experience" },
      { name: "Skills", link: "#skills" },
      { name: "Portfolio", link: "#portfolio" },
      { name: "Contact", link: "#contact" },
    ],
  };

  render() {
    return (
      <MenuMain>
        <MenuContainer>
          <Title>Emerson</Title>

          <MenuIcon onClick={this.modalHiddenShow}>
            <MenuLabel> Menu </MenuLabel>
            <FaBars />
          </MenuIcon>

          <MenuModal MenuModal visible={this.state.modalOpen}>
            {this.createNavLinks()}
            <CloseModal onClick={this.modalHiddenShow}>
              <FaRegTimesCircle />
            </CloseModal>
          </MenuModal>
        </MenuContainer>
      </MenuMain>
    );
  }
}
