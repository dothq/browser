import styled, { css } from 'styled-components';
import { centerIcon, overline } from '~/shared/mixins';
import store from '../../store'


export const StyledCard = styled.div`
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  width: 245px;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21);
  background-color: rgba(255,255,255,0.08);
`;

export const Offline = styled.div`

`;

export const Header = styled.div`
  width: 100%;
  padding: 24px;

  ${({ time }: { time: number }) => {
    // Day/Sunny
    if(time == 0) {
      return css`
        background-image: linear-gradient(to bottom right, #64b5f6, #1e88e5)
      `;
    } else if(time == 1) {
      return css`
        background-image: linear-gradient(to bottom right, #fe9900, #ffd079fa)
      `;
    } else if(time == 2) {
      return css`
        background-image: linear-gradient(to bottom right, #646ff6, #1e64e56b)
      `;
    } else if(time == 3) {
      return css`
        background-image: linear-gradient(to bottom right, #101010, #282828b3)
      `;
    }
    else {
      return css`
        background-image: linear-gradient(to bottom right, #64b5f6, #1e88e5)
      `;
    }
  }}
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 8px;
`;

export const Degrees = styled.div`
  font-size: 64px;
  font-weight: 500;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  ${centerIcon()};
  width: 80px;
  height: 80px;
`;

export const SmallIcon = styled.div`
  ${centerIcon()};
  width: 32px;
  height: 32px;
  margin-top: 16px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const SmallDegrees = styled.div`
  font-size: 14px;
  color: var(--general-title);

  ${({ night }: { night?: boolean }) => css`
    margin-top: ${night ? 4 : 16}px;
    opacity: ${night ? 0.54 : 1};
  `};
`;

export const Overline = styled.div`
  ${overline()};
  color: var(--general-title);
`;
