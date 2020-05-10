import { Icon, Grid } from '@material-ui/core';
import { Language } from '@material-ui/icons';
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
