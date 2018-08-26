import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () =>{
  const myGuesses = [];
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={myGuesses} />);
  });
}); 