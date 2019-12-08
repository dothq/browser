import * as React from 'react';
import { StyledError, Container } from '../components/Error/style';
import { Title, ErrorIcon, Subtitle } from '../style';

const secretEasterEgg = () => {
  const canvas = document.createElement("canvas");
  canvas.id = 'cvs';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.position = 'fixed';

  document.getElementById("egg").appendChild(canvas);

  const ctx = document.getElementById("cvs").getContext('2d');

};
  export const Error = () => (
  <StyledError>
    <Container>
      <ErrorIcon onClick={() => secretEasterEgg()} />
      <Title>Cannot connect to the internet</Title>
      <Subtitle>Try restarting your router or reconnecting to Wi-Fi.</Subtitle>
    </Container>
  </StyledError>
)
