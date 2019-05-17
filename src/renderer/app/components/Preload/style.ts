import styled from 'styled-components';

import { Section } from '../Overlay/style';

export const Sections = styled.div`
  margin-left: 300px;
  width: calc(100% - 300px);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 5px
`;

export const Title = styled.h1`
  font-weight: 100
`;

export const Buttons = styled.div`
  float: right;
`;

export const Button = styled.a`
  
`;

export const A = styled.a`
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const AboutWrapper = styled.div`

`;

export const InputField = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 17px;
  font-family: Roboto;
  width: 82%

  &:focus {
    outline: none !important;
  }
`;

export const NavDILine_Profile = styled.div`
  background: #fffff;
  height: 16px;
  width: 3px;
  margin-inline-end: -4px;
  position: relative;
  border-radius: 2px;
  margin-top: 7px;
  margin-inline-start: 1px;
`;

export const SettingsSection = styled.div`
  padding: 24px;
  background-color: rgba(255,255,255,0.08);
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  padding: 8px 0px;
  margin-top: 48px;
`;

export const ListItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 24px;
  height: 48px;
  background-color: transparent;  
`;

export const StyledNavigationDrawerItem = styled.div`
  padding: 0 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  height: 42px;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
