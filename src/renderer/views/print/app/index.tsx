import * as React from 'react';
import { StyledApp } from '../../app/components/App/style';
import { Preview, PrintController, Page } from './style';
import { Title } from '../components/Typography/style'
import { Printers } from '../components/Printers';

export const App = () => (
  <StyledApp>
    <Preview>
      <Page />
    </Preview>
    <PrintController>
      <Title>Print</Title>
      <Printers />
    </PrintController>
  </StyledApp>
)