import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Feedback from './feedback';

Enzyme.configure({ adapter: new Adapter() })

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Should display "Guess again!" when guessCount > 0', () => {
        const wrapper = shallow(<Feedback guessCount={1}/>);
        expect(wrapper.contains(<span className="visuallyhidden">Guess again!</span>)).toEqual(true);
        expect(wrapper.key()).toEqual("1");
    });

    it('Should contain feedback about the guess', () => {
        const wrapper = shallow(<Feedback guessCount={1} feedback={"Hot"}/>);
        expect(wrapper.contains("Hot")).toEqual(true);
    })
}); 