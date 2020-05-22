import styled from "styled-components";
import { TOOLBAR_HEIGHT } from "../../constants/window";

import dot from '../../store'

export const StyledNavigation = styled.div`
    display: flex;
    width: 100%;
    height: ${TOOLBAR_HEIGHT - 2}px;
    background-color: #ffffff;
    border: 1px solid #EAEAEA;
    ${dot.confettiMode ? `
        position: absolute;
        bottom: 44px;
    ` : ''};
`;