import styled from 'styled-components';

export const StyledButtons = styled.div`
    margin: 0 auto;
    margin-top: 52px;
    padding: 0 118px;

    >:first-child {
        box-shadow: none;
        float: right;
        text-transform: none;
        font-family: 'Google Sans';
        letter-spacing: 0.5px;
        padding: 6px 22px;
    }

    >:last-child {
        box-shadow: none;
        float: left;
        margin-right: 18px;
        text-transform: none;
        font-family: 'Google Sans';
        letter-spacing: 0.5px;
        padding: 6px 12px;
        border: none !important;
    }
`;