import styled from 'styled-components';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;

  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;
`;

export const NavChildrenContainer = styled.div`
  margin-right: 20px;
`;

export const NavLogo = styled.img`
  width: 130px;
  margin-left: 18px;
  padding-bottom: 8px;
`;
