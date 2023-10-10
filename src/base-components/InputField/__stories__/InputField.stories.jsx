import React from 'react';

import InputField from '../InputField';

export default {
  title: 'base-components/InputField',
  component: InputField,
  parameters: {
    controls: {
      exclude: /^(inputState|onChangeHandler)$/gi,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95vw',
          height: '95vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <InputField />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1000px',
        height: '700px',
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: '2px red solid',
    }}
  >
    <InputField />
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
  label: { control: false },
  classes: { control: false },
  type: { control: false },
};

const Template = (args) => <InputField {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Enter input:' },
  classes: {
    control: { type: 'inline-radio' },
    options: ['" "', 'price'],
  },
  type: {
    control: { type: 'inline-radio' },
    options: ['number', 'text'],
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1000px',
        height: '700px',
      }}
    >
      <Story />
    </div>
  ),
];
