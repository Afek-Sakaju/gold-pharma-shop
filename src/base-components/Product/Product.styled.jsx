import styled from 'styled-components';
import Button from '../Button/Button';

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 265px;
  flex: 1 1 auto;
  border: 1px solid rgba(black, 0.2);
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
`;

export const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.7em 0.8em 0.7em;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  min-width: 100%;
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
  margin: 8.5px 0;
`;

export const ProductImage = styled.img`
  display: flex;
  width: 70%;
  justify-self: center;
  align-self: center;
`;

export const AddProductButton = styled(Button)`
  position: absolute;
  top: -1.6px;
  left: 103px;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  color: #13690a;
  background-color: #fafafa;
  border: 1px solid #13690ac8;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(19, 105, 10, 0.2),
    0px 2.5px 5px rgba(19, 105, 10, 0.1);
  font-size: 1.1em;
`;

export const RemoveProductButton = styled(Button)`
  position: absolute;
  top: -1.6px;
  left: 57px;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  color: #fe5a3de3;
  background-color: #fafafa;
  border: 1px solid #fe5a3de3;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(254, 90, 61, 0.2),
    0px 2.5px 5px rgba(254, 90, 61, 0.1);
  font-size: 1.1em;

  &.disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

export const SelectedCount = styled.p`
  position: absolute;
  top: -11px;
  right: 50px;
  font-size: 0.95em;
  color: #787878;
`;
