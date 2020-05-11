import styled from 'styled-components';

export const BoxImage = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 12em;
  height: 14em;
  position: relative;
  margin-top: -14em;

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
