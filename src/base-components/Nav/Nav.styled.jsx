import styled from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 82px;
  display: flex;
  align-items: center;
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

export const NavTitle = styled.p`
  margin: 0 auto;
  font-size: 1.9em;
`;

export const NavLogo = styled('img').withConfig({
  shouldForwardProp: (prop) => prop !== 'isClickable',
})(({ isClickable }) => ({
  position: 'absolute',
  left: '18px',
  width: '130px',
  paddingBottom: '8px',
  ...(isClickable && { cursor: 'pointer' }),
}));
