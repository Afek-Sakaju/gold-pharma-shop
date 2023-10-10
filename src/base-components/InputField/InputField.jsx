import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  InputContainer,
  InputLabel,
  PriceInputContainer,
} from './InputField.styled';

export default function InputField({
  className,
  label,
  onChangeHandler,
  placeholder,
  type,
  value,
  isPrice,
}) {
  return (
    <InputContainer className={className}>
      <InputLabel>{label} </InputLabel>
      {isPrice ? (
        <PriceInputContainer>
          <Input
            onChange={onChangeHandler}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        </PriceInputContainer>
      ) : (
        <InputContainer>
          <Input
            onChange={onChangeHandler}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        </InputContainer>
      )}
    </InputContainer>
  );
}

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isPrice: PropTypes.bool,
};

InputField.defaultProps = {
  className: '',
  label: undefined,
  onChangeHandler: undefined,
  placeholder: '',
  type: 'text',
  value: '',
  isPrice: undefined,
};
