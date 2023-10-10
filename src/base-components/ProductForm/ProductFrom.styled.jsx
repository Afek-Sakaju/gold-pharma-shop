import styled from 'styled-components';
import Button from '../Button/Button';

export const ProductForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: start;
  box-shadow: 5px 5px 10px -1px rgba(black, 0.15);
  background-color: white;
  justify-self: center;
  align-self: center;
  height: 500px;
  width: 400px;
  padding: 2em;
  border-radius: 15px;
  border: 1px solid rgba(black, 0.25);

  &:hover {
    .create-icon {
      transform: scaleY(1.02);
      transform: scaleX(1.01);
    }
  }
`;

export const SubmitButton = styled(Button)`
    min-height: 55px;
    max-height: 55px;
`;