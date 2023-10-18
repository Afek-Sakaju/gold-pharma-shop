import styled from 'styled-components';
import { PiShoppingCartSimple } from 'react-icons/pi';

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedItemsContainer = styled.div`
  position: relative;
  display: flex;

  &::before {
    content: '';
    width: 2px;
    height: 50px;
    display: block;
    margin: 0 13px;
    background-color: black;
  }
`;

export const CartIcon = styled(PiShoppingCartSimple)`
  color: #ffbd59;
  font-size: 3.2em;
`;

export const TotalPrice = styled.p`
  margin: 0;
  font-size: 1.35em;
`;

export const DollarSign = styled.p`
  margin: 0;
  margin-right: 3px;
  color: #ffbd59;
  font-size: 1.3em;
`;

export const TotalSelected = styled.div`
  position: absolute;
  top: -8.5px;
  right: 8px;
  width: 35px;
  text-align: center;
  font-size: 0.9em;
`;
