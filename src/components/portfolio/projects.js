import React, { Component } from 'react'
import { textsAndConfigs } from '../../textsAndConfigs'
import PdfResume from './pdfResume'
import {
  ExternalLinks,
  ExternalLinksIcons,
} from '../../style/portfolio'
import { ListUl, ListLi, ListTitle, ListShortText, ListLongText } from '../../style/global'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default class Projects extends Component {
  componentDidMount = () => {
    this.setState({ projects: textsAndConfigs.projects })
  }

  createExternalLinks = (url, Icon) => {
    if (!url) return null
    return (
      <ExternalLinksIcons href={url}>
        <Icon />
      </ExternalLinksIcons>
    )
  }

  state = {
    projects: [],
  }

  render = () => {
    return (
      <ListUl>
        {this.state.projects.map((repository) => {
          return (
            <ListLi key={repository.name}>
              <div>
                <ListTitle>{repository.name}</ListTitle>
                <ListShortText>{repository.tech}</ListShortText>
                <ListLongText>{repository.description}</ListLongText>
              </div>
              <ExternalLinks>
                {this.createExternalLinks(repository.github, FaGithub)}
                {this.createExternalLinks(repository.link, FaExternalLinkAlt)}
              </ExternalLinks>
            </ListLi>
          )
        })}
        <ListLi center>
          <PdfResume />
        </ListLi>
      </ListUl>
    )
  }
}
