import styled from 'styled-components';
import { Close } from '@material-ui/icons';

export const BoxImage = styled.div`
  background: #fff;
  border-radius: 10px;
  position: relative;
  width: 6em;
  height: 8em;

  @media (min-width: 1070px) {
    width: 12em;
    height: 14em;
    margin-top: -14em;
  }

  &:hover {
    > div {
      visibility: visible !important;
    }
  }
`;

export const ProfileImage = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const BoxDetail = styled.div`
  color: #555554;
  margin-top: 2em;
`;

export const BoxIconInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.4em;
  }
`;

export const InfoName = styled.div`
  margin-bottom: 1em;

  h2 {
    margin: 0;
  }
`;

export const InfoBio = styled.div`
  margin-bottom: 1em;
`;

export const BoxEdit = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  cursor: pointer;
  visibility: hidden;

  svg {
    color: #fff;
  }
`;

export const BoxName = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    > svg {
      visibility: visible !important;
    }
  }

  > svg {
    visibility: hidden;
    margin-left: 0.4em;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
`;
