import styled from 'styled-components';
import { TbSquareRoundedPlus as MyCreateIcon } from 'react-icons/tb';

// eslint-disable-next-line import/prefer-default-export
export const CreateIcon = styled(MyCreateIcon)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: start;
  box-shadow: 5px 5px 10px -1px rgba(black, 0.15);
  background-color: white;
  margin: auto;

  &:hover {
    transform: scaleY(1.02);
    transform: scaleX(1.01);
  }
`;
