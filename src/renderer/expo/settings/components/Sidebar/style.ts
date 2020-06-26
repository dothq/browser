import styled from "styled-components";

export const StyledSidebar = styled.div`
    height: 100%;
    width: 64px;
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
    display: flex;
    position: absolute;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 64px;
        width: 64px;
        height: 100px;
        background-color: white;
        z-index: 10;
        left: 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 64px;
    z-index: 11;
    flex-direction: column;
`;