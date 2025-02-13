import styled from 'styled-components';

import Button from '../Button/Button';

export const FormContainer = styled.div`
  width: 600px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 60px auto;
  padding: 40px 0;
  border: 1px solid rgba(black, 0.2);
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  overflow: hidden;

  @media screen and (max-width: 670px) {
    width: 500px;
    height: 450px;
    justify-content: center;
    margin: 90px auto;
  }

  @media screen and (max-width: 550px) {
    width: 85%;
    border-radius: 8px;
  }

  @media screen and (max-width: 300px) {
    width: 90%;
  }
`;

export const ProductContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 13px;

  @media screen and (max-width: 670px) {
    gap: 15px;
    margin-top: 5px;
  }

  @media screen and (max-width: 550px) {
    margin-top: 20px;
  }
`;

export const ImageInputDisplay = styled('img').withConfig({
  shouldForwardProp: (prop) => prop !== 'isReadOnlyMode',
})(({ isReadOnlyMode }) => ({
  zIndex: '1',
  transition: 'transform 0.3s ease-in-out',
  ...(isReadOnlyMode ? { minHeight: '305px' } : { minHeight: '261px' }),
  ...(isReadOnlyMode ? { maxHeight: '305px' } : { maxHeight: '261px' }),

  '&:hover': {
    ...(isReadOnlyMode
      ? { transform: 'scale(1.2)' }
      : { transform: 'scale(1.17)' }),
  },

  '@media (max-width: 670px)': {
    ...(isReadOnlyMode ? { minHeight: '255px' } : { minHeight: '210px' }),
    ...(isReadOnlyMode ? { maxHeight: '255px' } : { maxHeight: '210px' }),

    '&:hover': {
      ...(isReadOnlyMode
        ? { transform: 'scale(1.16)' }
        : { transform: 'scale(1.13)' }),
    },
  },
}));

export const ImageInput = styled('label').withConfig({
  shouldForwardProp: (prop) => prop !== 'isEmptyInputValue',
})(({ isEmptyInputValue }) => ({
  width: '190px',
  textAlign: 'center',
  paddingBottom: '5px',
  marginTop: '15px',
  zIndex: 2,
  backgroundColor: 'unset',
  borderBottom: '1px solid #e29d34d4',
  fontSize: '1.1em',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease-in-out',
  ...(isEmptyInputValue && { color: 'grey', borderColor: 'lightgray' }),

  '@media (max-width: 670px)': {
    fontSize: '1em',
  },
}));

export const TextInputField = styled('input').withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'isEmptyInputValue' && prop !== 'isReadOnlyMode',
})(({ isEmptyInputValue, isReadOnlyMode }) => ({
  padding: '5px 6.5px',
  border: 'unset',
  outline: 'none',
  borderBottom: '1px solid #e29d34d4',
  transition: 'border-color 0.3s ease-in-out',
  ...(isReadOnlyMode ? { width: '75%' } : { width: '177px' }),
  ...(isReadOnlyMode && { textAlign: 'center' }),
  ...(isReadOnlyMode ? { marginTop: '0' } : { marginTop: '10px' }),
  ...(isReadOnlyMode && { borderBottom: 'unset' }),
  ...(isReadOnlyMode ? { fontSize: '2em' } : { fontSize: '1.1em' }),
  ...(isEmptyInputValue && { borderColor: 'lightgray' }),

  '@media (max-width: 670px)': {
    ...(isReadOnlyMode && { marginTop: '30px' }),
    ...(isReadOnlyMode ? { fontSize: '2em' } : { fontSize: '1em' }),
    ...(isReadOnlyMode ? { width: '75%' } : { width: '162px' }),
    ...(!isReadOnlyMode && { padding: '5px 14px' }),
  },
}));

export const PriceInputWrapper = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'isEmptyInputValue' && prop !== 'isReadOnlyMode',
})(({ isEmptyInputValue, isReadOnlyMode }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '40px',
  borderBottom: '1px solid #e29d34d4',
  transition: 'border-color 0.3s ease-in-out',
  ...(isReadOnlyMode && { borderBottom: 'unset' }),
  ...(isReadOnlyMode ? { fontSize: '2em' } : { fontSize: '1.4em' }),
  ...(isEmptyInputValue && { borderColor: 'lightgray' }),

  '@media (max-width: 670px)': {
    ...(isReadOnlyMode ? { marginTop: '0' } : { marginTop: '7px' }),
    ...(isReadOnlyMode ? { marginBottom: '0' } : { marginBottom: '20px' }),
    ...(isReadOnlyMode && { marginLeft: '5px' }),
    ...(isReadOnlyMode ? { fontSize: '1.8em' } : { fontSize: '1.2em' }),
  },
}));

export const PriceInputField = styled('input').withConfig({
  shouldForwardProp: (prop) => prop !== 'isEmptyInputValue',
})(({ isEmptyInputValue }) => ({
  width: '40px',
  border: 'unset',
  outline: 'none',
  padding: '2px 11.5px 0 4px',
  fontSize: '1em',
  textAlign: 'center',
  ...(isEmptyInputValue && { color: 'grey' }),
}));

export const SubmitButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDisabledButton',
})(({ isDisabledButton }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '74% 26% 68% 32% / 26% 66% 34% 74%',
  minHeight: '70px',
  width: '75px',
  color: '#e29d34d4',
  backgroundColor: '#fafafa',
  border: '1px solid #e7a138d7',
  boxShadow:
    '0px 2.5px 5px rgba(255, 188, 88, 0.2), 0px 2.5px 5px rgba(255, 188, 88, 0.1)',
  fontSize: '1.15em',
  transition: '0.2s ease-in-out',
  ...(isDisabledButton
    ? {
        cursor: 'default',
        opacity: '0.6',
      }
    : {
        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#ffbd59',
          border: '1px solid #ffbc58d6',
          boxShadow:
            '0px 3px 6px rgba(255, 188, 88, 0.4), 0px 3px 6px rgba(255, 188, 88, 0.3)',
        },
      }),

  '@media (max-width: 670px)': {
    minHeight: '60px',
    width: '65px',
    fontSize: '0.95em',
  },
}));
