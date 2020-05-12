import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

export const ContainerApp = styled(Paper)`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
  max-height: 38em;
  background: #fff;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #bbbbbb;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }

  @media (min-height: 800px) {
    height: 60em;
  }
`;

export const BoxContent = styled(Grid)`
  width: 100% !important
`
