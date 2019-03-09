import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from './game';

Enzyme.configure({ adapter: new Adapter() })

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can start a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3],
            feedback: 'Hot',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
        wrapper.instance().restartGame();

        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    });

    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({correctAnswer: 50});

        wrapper.instance().makeGuess(25);
        expect(wrapper.state('feedback')).toEqual("You\'re Warm.");
        expect(wrapper.state('guesses')).toEqual([25]);

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('feedback')).toEqual("You\'re Ice Cold...");
        expect(wrapper.state('guesses')).toEqual([25, 100]);

        wrapper.instance().makeGuess(81);
        expect(wrapper.state('feedback')).toEqual("You\'re Cold...");
        expect(wrapper.state('guesses')).toEqual([25, 100, 81]);

        wrapper.instance().makeGuess(52);
        expect(wrapper.state('feedback')).toEqual("You\'re Hot!");
        expect(wrapper.state('guesses')).toEqual([25, 100, 81, 52]);

        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual("You got it!");
        expect(wrapper.state('guesses')).toEqual([25, 100, 81, 52, 50]);
    });

    it('Can generate an aural update', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({correctAnswer: 5});
        wrapper.instance().makeGuess(1);
        wrapper.instance().makeGuess(2);

        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual("Here's the status of the game right now: You're Hot! You've made 2 guesses. In order of most- to least-recent, they are: 2, 1");
    });
}); 