import styled from 'styled-components';
import { Delete } from '@material-ui/icons';

export const FrameImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxDrag = styled.div`
  border: 2px dashed #025eab;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxActions = styled.div`
  display: flex;
  margin-top: 1em;
`;

export const IconDelete = styled(Delete)`
  cursor: pointer;
  color: #025EAB;
`
