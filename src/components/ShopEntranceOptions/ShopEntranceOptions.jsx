/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { TEXT_CONTENT, NAV_PATHS } from '@utils';
import {
  MainContainer,
  MainTitle,
  ModeSelectionContainer,
  UserGuideText,
  ButtonsTitle,
  EntranceOptionButton,
  ButtonsContainer,
} from './ShopEntranceOptions.styled';

export default function ShopEntranceOptions({ setIsAdminEntranceOption }) {
  const navigate = useNavigate();

  const onEntranceModeClickHandler = (isAdmin) => {
    setIsAdminEntranceOption(isAdmin);
    navigate(NAV_PATHS.PRODUCT_LIST_PAGE);
  };

  return (
    <MainContainer>
      <MainTitle>{TEXT_CONTENT.SHOP_ENTRANCE_MAIN_TITLE}</MainTitle>
      <ModeSelectionContainer>
        <UserGuideText>
          {TEXT_CONTENT.SHOP_ENTRANCE_OPTIONS_GUIDE}
        </UserGuideText>
        <ButtonsTitle>
          {TEXT_CONTENT.SHOP_ENTRANCE_OPTIONS_BUTTONS_TITLE}
        </ButtonsTitle>
        <ButtonsContainer>
          <EntranceOptionButton
            onClick={() => onEntranceModeClickHandler(false)}
          >
            {TEXT_CONTENT.SHOP_ENTRANCE_CUSTOMER_BUTTON}
          </EntranceOptionButton>
          <EntranceOptionButton
            onClick={() => onEntranceModeClickHandler(true)}
          >
            {TEXT_CONTENT.SHOP_ENTRANCE_ADMIN_BUTTON}
          </EntranceOptionButton>
        </ButtonsContainer>
      </ModeSelectionContainer>
    </MainContainer>
  );
}

ShopEntranceOptions.propTypes = {
  setIsAdminEntranceOption: PropTypes.func,
};

ShopEntranceOptions.defaultProps = {
  setIsAdminEntranceOption: undefined,
};
