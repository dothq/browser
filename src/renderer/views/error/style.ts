import { icons } from '../app/constants';
import styled from 'styled-components';

export const ErrorIcon = styled.div`
    width: 80px;
    height: 80px;
    opacity: 0.8;
    background-size: 135px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${icons.close})
`;

export const Title = styled.h1`
    text-align: left;
    opacity: 0.8;
    font-size: 2rem;
    font-weight: 500;
`;

export const Subtitle = styled.h1`
    text-align: left;
    opacity: 0.6;
    font-size: 1.4rem;
    font-weight: 300;
    margin-top: -16px;
`;