import styled, { css } from 'styled-components';
import { centerIcon } from '../../../../shared/mixins';
import { icons } from '../../app/constants';

export const StyledApp = styled.div`
    height: 98vh;
    display: flex;
    transition: 0.2s opacity, 0.2s transform;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        transform: ${visible ? 'translateY(0px)' : 'translateY(8px)'};
    `}
`;

export const Preview = styled.div`
    width: 700px;
    display: block;
    float: left;
    background-color: #fff;
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

export const TitleWrapper = styled.div`
    display: flex;
    line-height: 8px;
    margin-bottom: 20px;
`;

export const ListItem = styled.div`
    display: flex;
    line-height: 8px;
    margin-top: 20px;
`;

export const Icon = styled.div`
  ${centerIcon(24)};
  height: 32px;
  width: 32px;
  border-radius: 50px;
  filter: grayscale(1) brightness(0.2);

  ${({ icon, opacity, hoverable, selected }: { icon: any; opacity: number; hoverable: boolean; selected: boolean; }) => css`
    mask-image: url(${icon});
    opacity: ${opacity};

    background-color: #0087ff;
    -webkit-mask-size: 24px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;

    ${selected == true ? 'filter: none;' : ''};

    &:hover {
        filter: ${hoverable ? 
            selected == false ? 
            'grayscale(1) brightness(0.2)' : 'none' 
        : 'grayscale(1) brightness(5)'};
    }
    
  `}
`;

export const CloseIcon = styled.div`
  ${centerIcon(24)};
  height: 32px;
  width: 32px;
  border-radius: 50px;
  background-image: url(${icons.close})
`;