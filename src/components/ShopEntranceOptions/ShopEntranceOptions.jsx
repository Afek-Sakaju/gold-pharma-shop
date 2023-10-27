/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetShoppingCartAction } from '@store';
import { TEXT_CONTENT, NAV_PATHS } from '@utils';
import {
  MainContainer,
  ModeSelectionContainer,
  UserGuideText,
  ButtonsTitle,
  EntranceOptionButton,
  ButtonsContainer,
} from './ShopEntranceOptions.styled';

function ShopEntranceOptions({ resetCartData, setIsAdminEntranceOption }) {
  const navigate = useNavigate();

  const onEntranceModeClickHandler = (isAdmin) => {
    if (!isAdmin) resetCartData();
    setIsAdminEntranceOption(isAdmin);
    navigate(NAV_PATHS.PRODUCT_LIST_PAGE);
  };

  return (
    <MainContainer>
      <ModeSelectionContainer>
        <UserGuideText>
          {TEXT_CONTENT.SHOP_ENTRANCE_OPTIONS_GUIDE}
        </UserGuideText>
        <ButtonsTitle>
          {TEXT_CONTENT.SHOP_ENTRANCE_OPTIONS_BUTTONS_TITLE}
        </ButtonsTitle>
        <ButtonsContainer>
          <EntranceOptionButton
            onClick={() => onEntranceModeClickHandler(true)}
          >
            {TEXT_CONTENT.SHOP_ENTRANCE_ADMIN_BUTTON}
          </EntranceOptionButton>
          <EntranceOptionButton
            onClick={() => onEntranceModeClickHandler(false)}
          >
            {TEXT_CONTENT.SHOP_ENTRANCE_CUSTOMER_BUTTON}
          </EntranceOptionButton>
        </ButtonsContainer>
      </ModeSelectionContainer>
    </MainContainer>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  resetCartData: () => {
    dispatch(resetShoppingCartAction());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopEntranceOptions);
