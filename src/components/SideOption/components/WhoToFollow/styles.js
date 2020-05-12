import styled from 'styled-components';

export const AvatarStyled = styled.div`
  width: 3em;
  height: 4em;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
`;

export const BoxFollow = styled.div`
  svg {
    color: #2aa9e0;
  }
  button {
    font-weight: bold;
    color: #2aa9e0;
  }
  display: flex;
  justify-content: flex-end;
`;
