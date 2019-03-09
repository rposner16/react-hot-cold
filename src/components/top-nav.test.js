import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TopNav from './top-nav';

Enzyme.configure({ adapter: new Adapter() })

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
});