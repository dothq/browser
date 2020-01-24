import * as React from 'react';
import { StyledError, Container } from '../components/Error/style';
import { Title, ErrorIcon, Subtitle } from '../style';
import { Buttons } from '../components/Buttons';


const Error = () => (
  <StyledError>
    <Container>
      <ErrorIcon />
      <Title>Something went wrong</Title>
      <Subtitle>We can't seem to display this webpage.</Subtitle>
      <Buttons />
    </Container>
  </StyledError>
)

export default Error;