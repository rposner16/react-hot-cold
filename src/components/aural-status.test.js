import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AuralStatus from './aural-status';

Enzyme.configure({ adapter: new Adapter() })

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Should be hidden', () => {
        const wrapper = shallow(<AuralStatus />);
        expect(wrapper.hasClass("visuallyhidden")).toEqual(true);
    });
    
    it('Should display the aural status', () => {
        const wrapper = shallow(<AuralStatus auralStatus={"On"}/>);
        expect(wrapper.contains("On")).toEqual(true);
    });
});