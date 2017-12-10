import React from 'react';
import { shallow } from 'enzyme';

import FlexFull from '../FlexFull';

describe('<FlexFull />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<FlexFull />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<FlexFull id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<FlexFull attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

