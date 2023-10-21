import styled from 'styled-components';
import Button from '../Button/Button';

export const FormContainer = styled.div`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 1px solid rgba(black, 0.2);
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;
  overflow: hidden;
`;

export const PriceInputField = styled.input`
  width: 30px;
  border: unset;
  outline: none;
  padding: 0 5px;
  font-size: 0.9em;
  text-align: center;
  margin-top: 3px;
`;

export const InputField = styled.input`
  width: 180px;
  border: unset;
  outline: none;
  border-bottom: 1px solid #ffbd59c9;
  padding: 5px;
  font-size: 0.9em;
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  border-bottom: 1px solid #ffbd59c9;
`;

export const SubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  height: 70px;
  width: 70px;

  color: #e29d34d4;
  background-color: #fafafa;
  border: 1px solid #e7a138d7;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(255, 188, 88, 0.2),
    0px 2.5px 5px rgba(255, 188, 88, 0.1);
  font-size: 1.15em;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #ffbd59;
    border: 1px solid #ffbc58d6;
    box-shadow: 0px 3px 6px rgba(255, 188, 88, 0.4),
      0px 3px 6px rgba(255, 188, 88, 0.3);
  }
`;
