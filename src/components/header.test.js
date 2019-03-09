import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
});