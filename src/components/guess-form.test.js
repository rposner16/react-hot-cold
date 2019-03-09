import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GuessForm from './guess-form';

Enzyme.configure({ adapter: new Adapter() })

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should call onMakeGuess on submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        const value = 5; 
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');

        expect(callback).toHaveBeenCalledWith(value.toString());
    }); 
}); 