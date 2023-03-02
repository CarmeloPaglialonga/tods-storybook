import React from 'react';

import { Slideshow } from '../components/Slideshow';

export default {
  title: 'Common/Slideshow',
  component: Slideshow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {control: 'color'}
  },
};

const Template = (args) => <Slideshow {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}