import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsAdminStatusSelector } from '@store';
import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC, NAV_PATHS } from '@utils';
import { PageContainer } from './ProductsListPage.styled';

// eslint-disable-next-line react/prop-types
function ProductsListPage({ isAdmin }) {
  const navigate = useNavigate();

  const logoClickHandler = () => navigate(NAV_PATHS.HOME_PAGE);

  return (
    <PageContainer>
      <Nav onLogoClick={logoClickHandler} logoUrl={LOGO_SRC}>
        <ShoppingCartConnected />
      </Nav>
      <ProductList isAdmin={isAdmin} />
    </PageContainer>
  );
}

const mapStateToProps = (state) => ({
  isAdmin: getIsAdminStatusSelector(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
