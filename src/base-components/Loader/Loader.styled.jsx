import styled from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 700px;
  width: 99vw;
`;

export const LoaderTitle = styled.h2`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.7em;
`;

export const AnimatedLoader = styled(RingLoader)`
  margin-bottom: 20px;
  margin-right: 37px;
`;
