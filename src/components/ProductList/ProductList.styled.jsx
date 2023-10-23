import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProductListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 60px;
  gap: 20px;
  overflow-y: auto;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`;
