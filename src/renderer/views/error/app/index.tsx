import * as React from 'react';
import { StyledError, Container } from '../components/Error/style';
import { Title, ErrorIcon, Subtitle } from '../style';
import { hot } from 'react-hot-loader/root';

const Error = () => (
  <StyledError>
    <Container>
      <ErrorIcon />
      <Title>Cannot connect to the internet</Title>
      <Subtitle>Try restarting your router or reconnecting to Wi-Fi.</Subtitle>
    </Container>
  </StyledError>
)

export default hot(Error);