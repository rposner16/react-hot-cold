import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InfoSection from './info-section';

Enzyme.configure({ adapter: new Adapter() })

describe('<InfoSection />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });
});