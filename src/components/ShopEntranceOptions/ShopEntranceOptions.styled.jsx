import styled from 'styled-components';

import { Button } from '@base-components';

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainTitle = styled.p`
  margin: 0;
  font-size: 2em;
`;

export const ModeSelectionContainer = styled.div`
  height: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 10px;
`;

export const UserGuideText = styled.p`
  width: 75%;
  margin: 0;
  font-size: 1.2em;
  white-space: pre-line;
`;

export const ButtonsTitle = styled.p`
  margin: 0;
  font-size: 1.5em;
  white-space: pre-line;
`;

export const ButtonsContainer = styled.div`

`;

export const EntranceOptionButton = styled(Button)`

`;
