import React from 'react';
import { connect } from 'react-redux';

import { setIsAdminStatusAction } from '@store';
import { ShopEntranceOptions } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC, TEXT_CONTENT } from '@utils';
import { PageContainer } from './HomePage.styled';

// eslint-disable-next-line react/prop-types
function StoreHomePage({ setIsAdminStatus }) {
  return (
    <PageContainer>
      <Nav logoUrl={LOGO_SRC} title={TEXT_CONTENT.SHOP_ENTRANCE_MAIN_TITLE} />
      <ShopEntranceOptions setIsAdminEntranceOption={setIsAdminStatus} />
    </PageContainer>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setIsAdminStatus: (isAdmin) => {
    dispatch(setIsAdminStatusAction({ isAdmin }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreHomePage);
