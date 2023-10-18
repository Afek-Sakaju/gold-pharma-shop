import styled from 'styled-components';
import { PiShoppingCartSimple } from 'react-icons/pi';

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  font-size: 2em;
  user-select: none;
`;

export const CartInnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 2px;
    height: 50px;
    background-color: black;
    margin: 0 13px;
  }
`;

export const CartIcon = styled(PiShoppingCartSimple)`
  color: #ffbd59;
  font-size: 1.6em;
`;

export const CartTotalPrice = styled.p`
  margin: 0;
  font-size: 0.72em;
`;

export const DollarSign = styled.p`
  color: #ffbd59;
  margin: 0;
  margin-right: 3px;
  font-size: 0.7em;
`;

export const CartTotalItems = styled.div`
  text-align: center;
  width: 35px;
  position: absolute;
  top: -11px;
  right: 8px;
  font-size: 0.55em;
  margin: 0;
`;
