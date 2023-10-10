import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
`;

export const PriceInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  position: relative;
  &::after {
    content: '$';
    color: green;
    position: absolute;
    right: 0;
    font-size: 1.6em;
    margin-right: 35px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px rgba(black, 0.4) solid;
  padding: 10px;
`;

export const InputLabel = styled.input`
  word-wrap: break-word;
  user-select: none;
`;
