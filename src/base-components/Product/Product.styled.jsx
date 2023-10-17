import styled from 'styled-components';
import Button from '../Button/Button';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  flex: 1 1 auto;
  border: 1px solid rgba(black, 0.2);
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 10px -1px rgba(black, 0.15);
  transition: all 0.2s ease;
  opacity: 0.95;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(black, 0.4);
    box-shadow: 5px 5px 12px 2px rgba(black, 0.15);
    transform: translateY(-1px);
    opacity: 1;
  }
`;

export const ProductContentContainer = styled.div`
  padding: 0 0.6em 0.6em 0.6em;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: 0.9em;
  user-select: none;
  text-transform: capitalize;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  user-select: none;
  margin: 10px 0;
`;

export const ProductImage = styled.img`
  display: flex;
  width: 70%;
  justify-self: center;
  align-self: center;
`;

export const AddProductButton = styled(Button)`
  height: 40px;
`;

export const RemoveProductButton = styled(Button)`
  height: 40px;
  background-color: #fe5a3de3;
`;
