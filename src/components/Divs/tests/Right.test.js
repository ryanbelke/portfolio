import React from 'react';
import { shallow } from 'enzyme';

import Right from '../Right';

describe('<Right />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Right />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Right id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Right attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
