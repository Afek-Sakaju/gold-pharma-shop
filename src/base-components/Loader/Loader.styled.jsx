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

export const LoaderTitle = styled('h2').withConfig({
  shouldForwardProp: (prop) => prop !== 'titleColor',
})(({ titleColor }) => ({
  fontSize: '1.7em',
  ...(titleColor ? { color: 'titleColor' } : { color: 'rgba(0,0,0,0.7)' }),
}));

export const AnimatedLoader = styled(RingLoader)`
  margin-bottom: 20px;
  margin-right: 37px;
`;
