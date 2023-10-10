import styled from 'styled-components';
import Button from '../Button/Button';

export const AddProductButton = styled(Button)`
  min-height: 40px;
  max-height: 40px;
`;

export const RemoveProductButton = styled(Button)`
  min-height: 40px;
  max-height: 40px;
  background-color: #fe5a3de3;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  width: 230px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em 0.5em 0.5em;
`;

export const ProductName = styled.p`
  height: 36px;
  font-size: 1em;
  user-select: none;
  text-align: center;
  margin-top: 3px;
`;

export const ProductPrice = styled.p`
  font-size: 1.4em;
  user-select: none;
`;

export const ProductImage = styled.img`
  display: flex;
  width: 70%;
  justify-self: center;
  align-self: center;
`;
