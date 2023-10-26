/* eslint-disable react/prop-types */
import React from 'react';

import { TEXT_CONTENT } from '@utils';
import {
  MainContainer,
  MainTitle,
  ModeSelectionContainer,
  UserGuideText,
  ButtonsTitle,
  EntranceOptionButton,
  ButtonsContainer,
} from './ShopEntranceOptions.styled';

function ShopEntranceOptions() {
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
          <EntranceOptionButton>
            {TEXT_CONTENT.SHOP_ENTRANCE_CUSTOMER_BUTTON}
          </EntranceOptionButton>
          <EntranceOptionButton>
            {TEXT_CONTENT.SHOP_ENTRANCE_ADMIN_BUTTON}
          </EntranceOptionButton>
        </ButtonsContainer>
      </ModeSelectionContainer>
    </MainContainer>
  );
}

export default ShopEntranceOptions;
