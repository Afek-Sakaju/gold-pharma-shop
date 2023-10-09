import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSquareRoundedPlus as CreateIcon } from 'react-icons/tb';

import './CreateProductButton.scss';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <div
      className="product"
      onClick={() => navigate('/product/new')}
      role="none"
    >
      <section>Add product</section>
      <CreateIcon size="4em" className="create-icon" />
    </div>
  );
}
