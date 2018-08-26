import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () =>{
  const myCount = 1;
  it('Renders without crashing', () => {
    shallow(<GuessCount guessCount = {myCount} />);
  });
}); 