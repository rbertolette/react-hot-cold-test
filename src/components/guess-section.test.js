import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () =>{
  const myGuessCount = 0;
  it('Renders without crashing', () => {
    shallow(<GuessSection feedback='foo' guessCount={myGuessCount} />);
  });
}); 