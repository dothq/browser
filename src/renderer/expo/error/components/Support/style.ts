import styled, { css } from 'styled-components';

export const StyledSupport = styled.div`
    justify-content: center;
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

export const SupportContainer = styled.div`
    text-align: center;
    margin-bottom: 28px;
`;

export const SupportHeading = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    opacity: 0.7;
`;

export const SupportItem = styled(SupportHeading)`
    font-weight: normal;
    font-size: 13px;
`;