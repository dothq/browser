import styled from "styled-components";
import { BOOKMARKS_BAR_HEIGHT, NAVIGATION_HEIGHT } from "../../../constants/window";
import { BookmarksTitle } from "../BookmarksItem/style";

export const StyledBookmarks = styled.div`
    display: flex;
    width: -webkit-fill-available;
    height: ${BOOKMARKS_BAR_HEIGHT}px;
    background-color: #ffffff;
    position: absolute;
    top: ${NAVIGATION_HEIGHT}px;
    padding: 0 8px;
`;

export const BookmarksPlaceholder = styled(BookmarksTitle)`
    margin-left: 5px;
    margin-top: 5px;
    opacity: 0.8;
`;