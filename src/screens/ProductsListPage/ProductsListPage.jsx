import React from 'react';
import { connect } from 'react-redux';

import { getIsAdminStatusSelector } from '@store';
import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';
import { LOGO_SRC } from '@utils';
import { PageContainer } from './ProductsListPage.styled';

// eslint-disable-next-line react/prop-types
function ProductsListPage({ isAdmin }) {
  return (
    <PageContainer>
      <Nav logoUrl={LOGO_SRC}>
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
