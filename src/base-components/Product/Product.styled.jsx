import styled from 'styled-components';
import {
  LiaCartPlusSolid as RiAddToCartIcon,
  LiaCartArrowDownSolid as RiRemoveFromCartIcon,
} from 'react-icons/lia';

import { COMPONENTS_CLASSES } from '@utils';
import Button from '../Button/Button';

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 270px;
  max-width: 270px;
  height: 285px;
  flex: 1 1 auto;
  border: 1px solid rgba(black, 0.2);
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    .${COMPONENTS_CLASSES.PRODUCT_IMAGE} {
      transform: scale(1.16);
    }

    .${COMPONENTS_CLASSES.PRODUCT_NAME} {
      &::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }

  @media screen and (max-width: 400px) {
    min-width: 245px;
    max-width: 245px;
    height: 260px;
  }
`;

export const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  z-index: 2;

  @media screen and (max-width: 400px) {
    margin-top: 0.8em;
  }
`;

export const ButtonsContainer = styled.div`
  position: relative;
  min-width: 100%;
`;

export const ProductName = styled.p`
  position: relative;
  margin: 0;
  font-size: 0.9em;
  user-select: none;
  text-transform: capitalize;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #a4a4a4;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

export const ProductPrice = styled.p`
  margin: 10px 6px 0 0;
  font-size: 1em;
  user-select: none;

  @media screen and (max-width: 400px) {
    margin: 5px 6px 0 0;
  }
`;

export const ProductImage = styled.img`
  display: flex;
  height: 47%;
  justify-self: center;
  align-self: center;
  margin-top: 20px;
  transition: transform 0.25s ease-in-out;
`;

export const AddProductButton = styled(Button)`
  position: absolute;
  top: 7px;
  left: 138px;
  justify-content: space-between;
  gap: 10px;
  padding: 5.5px;
  font-size: 1.4em;
  color: #13690a;
  background-color: #fafafa;
  border: 1px solid #13690ac8;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(19, 105, 10, 0.2),
    0px 2.5px 5px rgba(19, 105, 10, 0.1);
  transition: 0.23s ease-in-out;

  &:hover {
    color: #fafafa;
    background-color: #13690ac8;
    border: 1px solid #13690a;
    box-shadow: 0px 3px 6px rgba(19, 105, 10, 0.3),
      0px 3px 6px rgba(19, 105, 10, 0.2);
  }

  @media screen and (max-width: 400px) {
    top: 5.5px;
    left: 129px;
    padding: 4px;
    font-size: 1.3em;
  }
`;

export const RemoveProductButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDisabledButton',
})(({ isDisabledButton }) => ({
  position: 'absolute',
  top: '7px',
  left: '90px',
  // Check necessity
  justifyContent: 'space-between',
  gap: '10px',
  padding: '5.5px',
  fontSize: '1.4em',
  color: '#fe5a3d',
  backgroundColor: '#fafafa',
  border: '1px solid #fe5a3de3',
  borderRadius: '74% 26% 68% 32% / 24% 59% 41% 76%',
  boxShadow:
    '0px 2.5px 5px rgba(254, 90, 61, 0.2), 0px 2.5px 5px rgba(254, 90, 61, 0.1)',
  transition: '0.23s ease-in-out',

  ...(isDisabledButton
    ? {
        cursor: 'default',
        opacity: '0.6',
      }
    : {
        '&:hover': {
          color: '#fafafa',
          backgroundColor: '#fe5a3de3',
          border: '1px solid #fe5a3d',
          boxShadow:
            '0px 3px 6px rgba(254, 90, 61, 0.3), 0px 3px 6px rgba(254, 90, 61, 0.2)',
        },
      }),

  '@media (max-width: 400px)': {
    top: '5.5px',
    left: '83px',
    padding: '4px',
    fontSize: '1.3em',
  },
}));

export const SelectedCount = styled.p`
  position: absolute;
  top: -8px;
  right: 56px;
  z-index: 2;
  font-size: 0.95em;
  color: #787878;
`;

export const AddToCartIcon = RiAddToCartIcon;

export const RemoveFromCartIcon = RiRemoveFromCartIcon;
