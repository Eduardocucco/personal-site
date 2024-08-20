import { textsAndConfigs } from '../textsAndConfigs'
import {
  Container,
  CategoryTitle,
  CategoryText,
  ListUl,
  ListLi,
  ListTitle,
  ListShortText,
  ListLongText,
} from '../style/global'

export default function Experience() {
  return (
    <Container id='experience'>
      <CategoryTitle>Experience</CategoryTitle>
      <CategoryText>My Experience as a Developer</CategoryText>
      <ListUl>
        {textsAndConfigs.experiences.map((job) => {
          return (
            <ListLi key={job.name} noHeight>
              <ListTitle>{job.name}</ListTitle>
              <ListShortText primary marginBottom>{`${job.started} - ${job.end}`}</ListShortText>
              <ListShortText>{job.techs}</ListShortText>
              <ListLongText>{job.text}</ListLongText>
            </ListLi>
          )
        })}
      </ListUl>
    </Container>
  )
}
