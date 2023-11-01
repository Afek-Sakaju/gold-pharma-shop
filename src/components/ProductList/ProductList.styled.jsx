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

  @media screen and (max-width: 1300px) {
    gap: 50px;
    padding: 15px 40px;
  }

  @media screen and (max-width: 1000px) {
    gap: 70px;
    padding: 20px 30px;
  }

  @media screen and (max-width: 800px) {
    gap: 40px;
  }

  @media screen and (max-width: 400px) {
    gap: 20px;
    padding: 20px 0px;
  }
`;
