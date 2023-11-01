import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsAdminStatusSelector } from '@store';
import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC, NAV_PATHS, TEXT_CONTENT } from '@utils';
import { PageContainer } from './ProductsListPage.styled';

// eslint-disable-next-line react/prop-types
function ProductsListPage({ isAdmin }) {
  const navigate = useNavigate();

  const logoClickHandler = () => navigate(NAV_PATHS.HOME_PAGE);

  return (
    <PageContainer>
      <Nav
        onLogoClick={logoClickHandler}
        logoUrl={LOGO_SRC}
        title={isAdmin && TEXT_CONTENT.PRODUCTS_LIST_PAGE_ADMIN_TITLE}
        shouldAddAdminIcon={isAdmin}
      >
        {!isAdmin && <ShoppingCartConnected />}
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
