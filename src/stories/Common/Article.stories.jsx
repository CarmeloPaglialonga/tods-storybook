import React from 'react';

import { Article } from '../../components/Common/Article';

export default {
  title: 'Common/Article',
  component: Article,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
}

const Template = (args) => <Article {...args} />;


export const Default = Template.bind({});
Default.args = {
        landscapeImage: 'https://www.fay.com/medias/fay-life-polo.jpg?context=bWFzdGVyfHJvb3R8MTkxODc4fGltYWdlL2pwZWd8aGVjL2g3ZS84ODAxMDA5MDA4NjcwLmpwZ3w1Nzg2NjlmNmI2MjI0Zjk1YWM0NDhlMmU5NGQxYjczYjljMzJlYjcwZjhjODZiZGQwNjIxOWFiZTE3Y2Y5OGFl',
        title: 'Title',
        alt: 'green'
    }