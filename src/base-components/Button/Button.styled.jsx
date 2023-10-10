import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 49%;
  border: 1px solid rgba(black, 0.3) !important;
  background-color: #92c492;
  font-size: 0.9em !important;
  font-weight: bold;
  border-radius: 5px !important;
  box-shadow: 5px 5px 10px 1px rgba(black, 0.15) !important;
  user-select: none;
  opacity: 0.95;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border: 1px solid rgba(black, 0.6) !important;
    box-shadow: 5px 5px 10px 2px rgba(black, 0.3);
    opacity: 1;
  }
`;




//  &.warning {
//    background-color: #fe5a3de3;
//  }
// }
