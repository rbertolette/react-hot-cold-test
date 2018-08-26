import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () =>{
  // const myGuesses = [];
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
}); 

it('Should fire the onMakeGuess callback when the form is submitted', () => {
  const callback = jest.fn();
  const wrapper = mount(<GuessForm onMakeGuess={callback} />);
  const value = '50';
  // wrapper.instance().setEditing(true);
  wrapper.update();
  wrapper.find('input[type="number"]').instance().value = value;
  wrapper.simulate('submit');
  expect(callback).toHaveBeenCalledWith(value);
});

it('Should change empty input when the form is submitted', () => {
  const callback = jest.fn();
  const wrapper = mount(<GuessForm onMakeGuess={callback} />);
  const value = '50';
  // wrapper.instance().setEditing(true);
  wrapper.update();
  wrapper.find('input[type="number"]').instance().value = value;
  wrapper.simulate('submit');
  expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
});
