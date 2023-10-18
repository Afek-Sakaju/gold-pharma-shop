import styled from 'styled-components';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  z-index: 3;

  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

export const NavChildrenContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 20px;
`;

export const ShopLogo = styled.img`
  width: 130px;
  display: flex;
  justify-self: center;
  align-self: center;
  margin-left: 18px;
  margin-bottom: 8px;
  transition: transform 0.25s ease-in-out;
`;
