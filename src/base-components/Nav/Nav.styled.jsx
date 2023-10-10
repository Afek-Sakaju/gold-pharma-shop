import styled from 'styled-components';

export const NavContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  padding: 0 1em;
  margin-bottom: 10px;
  z-index: 1;

  box-shadow: 5px 5px 10px -1px rgba(black, 0.15);
  border-radius: 0 0 7px 7px;
  background-color: white;
  border: 2px solid rgba(black, 0.2);
  user-select: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavChildrenContainer = styled.div`
  display: flex;
  gap: 30px;
`;
