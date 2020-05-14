import { Grid, Paper, List } from '@material-ui/core';
import styled from 'styled-components';

export const CoverPicture = styled(Grid)`
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: 100% auto;
  height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    > div {
      visibility: visible !important;
    }
  }
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

export const HeaderContainer = styled.div`
  margin-bottom: 1em;
`;

export const PaperActions = styled(Paper)`
  display: flex;
  justify-content: center;
`;

export const ListStyled = styled(List)`
  display: flex;

  li {
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
  }
`;

export const BoxTabs = styled.div`
  width: 90%;
`;

export const BoxConfig = styled.div`
  display: flex;
  align-items: center;

  > svg {
    cursor: pointer;
  }
`
