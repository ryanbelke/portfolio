import React from 'react';
import { shallow } from 'enzyme';

import Left from '../Left';

describe('<Left />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Left />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Left id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Left attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
