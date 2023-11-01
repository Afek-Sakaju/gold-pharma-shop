import styled from 'styled-components';

import { Button } from '@base-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ModeSelectionContainer = styled.div`
  max-width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 0;
  margin-top: 100px;
  padding: 30px 50px;
  background-color: #fafafa;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media screen and (max-width: 1400px) {
    max-width: 60%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 70%;
  }

  @media screen and (max-width: 600px) {
    gap: 20px;
    padding: 15px 30px;
  }

  @media screen and (max-width: 400px) {
    padding: 15px 25px;
  }
`;

export const UserGuideText = styled.p`
  margin: 0;
  font-size: 1.25em;
  white-space: pre-line;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.95em;
  }
`;

export const ButtonsTitle = styled.p`
  margin: 0;
  margin-top: 55px;
  font-size: 1.55em;
  white-space: pre-line;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
    font-size: 1.25em;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.15em;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 600px) {
    gap: 40px;
  }

  @media screen and (max-width: 400px) {
    gap: 20px;
  }
`;

export const EntranceOptionButton = styled(Button)`
  min-width: 150px;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  color: #5c5c5c;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2em;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #a3a3a3;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 600px) {
    min-width: 120px;
    padding: 6px 0;
    font-size: 1.05em;
  }

  @media screen and (max-width: 400px) {
    min-width: 110px;
    padding: 5px 0;
    font-size: 1em;
  }
`;
