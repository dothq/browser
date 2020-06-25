import styled from "styled-components";

export const StyledToolbar = styled.div`
    height: 64px;
    width: 100%;
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
    display: flex;
    background-color: white;
    position: absolute;
    top: 0;
    z-index: 10;

    &::after {
        content: "";
        position: absolute;
        top: 64px;
        left: 64px;
        background-image: url(${require("../../../../../resources/icons/tab_corner_left.svg").default});
        transform: rotate(180deg);
        width: 18px;
        height: 18px;
        background-size: cover;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 14px;
    display: flex;
    align-items: center;
`;