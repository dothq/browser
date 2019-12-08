import styled from 'styled-components';

export const StyledApp = styled.div`
    height: 98vh;
    display: flex;
`;

export const Preview = styled.div`
    width: 700px;
    display: block;
    float: left;
    background-color: #f9f9f9;
    border: 1px solid lightgray;
    border-radius: 4px 0 0 4px;
`;

export const Page = styled.div`
    width: 350px;
    height: 500px;
`;

export const PrintController = styled.div`
    display: block;
    float: left;
    background-color: white;
    padding: 30px;
    border: 1px solid lightgray;
    border-left: none;
    border-radius: 0 4px 4px 0;
`;