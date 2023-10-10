import React from 'react';

import Nav from '../Nav';
import ShoppingCart from '@base-components/ShoppingCart/ShoppingCart';

export default {
  title: 'base-components/Nav',
  component: Nav,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '95vw',
          height: '95vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <Nav>
    <ShoppingCart />
  </Nav>
);
Default.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: '2px red solid',
    }}
  >
    <Nav>
      <ShoppingCart />
    </Nav>
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: 'number', min: 50, max: 3000, step: 50 },
    defaultValue: 300,
  },
  width: {
    control: { type: 'number', min: 50, max: 4000, step: 50 },
    defaultValue: 900,
  },
};

const Template = (args) => (
  <Nav {...args}>
    <ShoppingCart />
  </Nav>
);

export const Custom = Template.bind({});
Custom.argTypes = {
  title: { control: { type: 'text' }, defaultValue: 'grocery-store' },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Story />
    </div>
  ),
];
