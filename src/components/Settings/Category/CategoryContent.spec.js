import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CategoryContent from './CategoryContent';

const setup = propOverrides => {
    const props = {
        categoryContent: null,
        handlePatchCategory: jest.fn(),
        ...propOverrides,
    };
    
    const wrapper = shallow(<CategoryContent {...props} />);
    
    return {
        props,
        wrapper,
    }
};

// @TODO https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12
// @TODO https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
describe('CategoryContent Component', () => {
    test('', () => {
    
    });
});