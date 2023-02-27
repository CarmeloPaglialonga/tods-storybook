import React from 'react';

import { ResponsiveImageEditorial } from '../../components/Common/ResponsiveImageEditorial';

export default {
  title: 'Common/ResponsiveImageEditorial',
  component: ResponsiveImageEditorial,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    url: String,
  },
};

const Template = (args) => <ResponsiveImageEditorial {...args} />;


export const Default = Template.bind({});
Default.args = {
  url: 'https://www.fay.com/medias/Fay-Life-Murales-ADV-SS-23.jpg?context=bWFzdGVyfHJvb3R8NTUwMTk1fGltYWdlL2pwZWd8aDM2L2gzNC84OTMyOTUxMTk1Njc4LmpwZ3wzY2YxNDlmNDUzZGVlNjkxNjQ1ZDFhYTFiZDM1Zjk2NGE0NzA3ZWJkNzdlYmU2YjQ0Zjk5MjQxOWY0MjU3Y2Q1'
}