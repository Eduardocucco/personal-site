import React, { Component } from "react";
import { VscFilePdf } from "react-icons/vsc";
import resumePdfFile from "../../others/cvatt.pdf";

import {
  PdfResumeContainer,
  PdfResumeContainerIcon,
} from "../../style/portfolio";

export default class PdfResume extends Component {
  render() {
    return (
      <a href={resumePdfFile}>
        <PdfResumeContainer>
          <PdfResumeContainerIcon>
            <VscFilePdf />
          </PdfResumeContainerIcon>
            View my CV in PDF
        </PdfResumeContainer>
      </a>
    );
  }
}
