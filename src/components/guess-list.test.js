import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessList from './guess-list';

Enzyme.configure({ adapter: new Adapter() })

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[1, 2, 3]}/>);
    });

    it('Shows a list of guesses', () => {
        const guessArr = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses={guessArr} />);
        const listItems = wrapper.find('li');

        const len = guessArr.length;
        expect(listItems.length).toEqual(len);
        guessArr.forEach((guess, index) => {
            expect(listItems.at(index).text()).toEqual(guess.toString());
        });
    });
}); 