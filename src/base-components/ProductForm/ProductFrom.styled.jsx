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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px;
  font-size: 0.9em;
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled(Button)`
  min-height: 55px;
  max-height: 55px;
  justify-content: center;
`;
