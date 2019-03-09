import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessCount from './guess-count';

Enzyme.configure({ adapter: new Adapter() })

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the guess count', () => {
        let count = 3;
        const wrapper = shallow(<GuessCount guessCount={count} />);

        expect(wrapper.text()).toEqual(`You've made ${count} guesses!`);
    });
}); 