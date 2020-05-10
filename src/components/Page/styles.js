import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

export const ContainerApp = styled(Paper)`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
  height: 32em;
  background: #fff;

  @media (min-height: 800px) {
    height: 60em;
  }
`;

export const BoxContent = styled(Grid)`
  width: 100% !important
`
