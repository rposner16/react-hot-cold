import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StatusSection from './status-section';

Enzyme.configure({ adapter: new Adapter() })

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={[1, 2, 3]} />);
    });
});